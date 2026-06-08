import { readFileSync, writeFileSync, existsSync } from 'fs';
import * as utils from './utils.mjs';
import cliJSON from './data/cli.json' with { type: 'json' };
import cliOverrides from './data/meta-override.json' with { type: 'json' };

const HASH_FILE = 'scripts/api-hashes-cli.json';
const VERSIONED_DIRS = ['versioned_docs/version-v6', 'versioned_docs/version-v7'];

const commandToKebab = (str) =>
  str.replace('ionic ', '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

// ====== 哈希清单管理 ======

function loadManifest() {
  try { return JSON.parse(readFileSync(HASH_FILE, 'utf-8')); }
  catch { return {}; }
}

function saveManifest(manifest) {
  const sorted = {};
  Object.keys(manifest).sort().forEach(k => sorted[k] = manifest[k]);
  writeFileSync(HASH_FILE, JSON.stringify(sorted, null, 2) + '\n');
}

function hashContent(content) {
  let hash = 0;
  for (let i = 0; i < content.length; i++) {
    hash = ((hash << 5) - hash) + content.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16);
}

function isFileTranslated(filePath) {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const fm = content.match(/^---\n([\s\S]*?)\n---/);
    return fm && /translated:\s*true/.test(fm[1]);
  } catch { return false; }
}

// ====== 核心逻辑 ======

(async function () {
  const manifest = loadManifest();
  const { commands } = cliJSON;

  for (const cmd of commands) {
    try {
      await writePage(cmd, manifest);
    } catch (e) {
      console.log(`  \x1b[31m❌ ${commandToKebab(cmd.name)}.md：${e.message}\x1b[0m`);
    }
  }

  saveManifest(manifest);
  console.log('📋 哈希清单已更新: scripts/api-hashes-cli.json');
})();

async function writePage(page, manifest) {
  const slug = commandToKebab(page.name);
  const path = `cli/commands/${slug}.md`;
  const filePath = `docs/${path}`;

  const bodyContent = [
    renderIntro(page),
    renderInputs(page),
    renderOptions(page),
    renderAdvancedOptions(page),
    renderExamples(page),
  ].join('');

  const newHash = hashContent(bodyContent);
  const storedHash = manifest[slug];

  if (!storedHash) {
    manifest[slug] = newHash;
    if (existsSync(filePath)) {
      console.log(`  \x1b[36m📝 ${path}：首次记录哈希 (${newHash})\x1b[0m`);
    } else {
      const data = renderFrontmatter(page) + bodyContent;
      writeFileSync(filePath, data);
      for (const dir of VERSIONED_DIRS) writeFileSync(`${dir}/${path}`, data);
      console.log(`  \x1b[90m📄 ${path}：新命令，已生成\x1b[0m`);
    }
    return;
  }

  if (newHash === storedHash) {
    console.log(`  \x1b[32m✅ ${path}：上游无变更\x1b[0m`);
    return;
  }

  manifest[slug] = newHash;
  if (isFileTranslated(filePath)) {
    console.log(`  \x1b[33m⚠️  ${path}：上游已更新，翻译需同步！\x1b[0m`);
    console.log(`  \x1b[33m   旧哈希: ${storedHash} → 新哈希: ${newHash}\x1b[0m`);
  } else {
    const data = renderFrontmatter(page) + bodyContent;
    writeFileSync(filePath, data);
    for (const dir of VERSIONED_DIRS) writeFileSync(`${dir}/${path}`, data);
    console.log(`  \x1b[90m📄 ${path}：上游更新，已重新生成\x1b[0m`);
  }
}

// ====== 渲染函数 ======

function renderFrontmatter({ name, groups }) {
  const shortName = name.replace('ionic ', '');
  const slug = commandToKebab(shortName);
  const frontmatter = { title: name, sidebar_label: shortName };
  const deprecated = groups.includes('deprecated')
    ? ':::warning\nThis command has been deprecated and will be removed in an upcoming major release of the Ionic CLI.\n:::'
    : '';

  return `---
${Object.entries(frontmatter).map(([key, value]) => `${key}: ${typeof value === 'string' ? `"${value.replace('"', '\\"')}"` : value}`).join('\n')}
---
${utils.getHeadTag(cliOverrides[slug])}

${deprecated}
`;
}

function renderIntro({ description, summary, name, options, inputs }) {
  let args = '';
  if (inputs && inputs.length > 0) for (let input of inputs) args += ` [${input.name}]`;
  if (options && options.length > 0) args += ' [options]';
  return `\n${summary}\n\n\`\`\`shell\n$ ${name}${args}\n\`\`\`\n\n${description}`;
}

function renderExamples({ exampleCommands }) {
  if (!exampleCommands || exampleCommands.length === 0) return '';
  return `\n## Examples\n\n\`\`\`shell\n${exampleCommands.map(c => `$ ${c}`).join('\n')}\n\`\`\`\n`;
}

function renderInputs({ inputs }) {
  if (inputs.length === 0) return '';
  return utils.renderList('Inputs', inputs);
}

function renderOptions({ options }) {
  options = options.filter(o => !o.groups.includes('advanced'));
  if (options.length === 0) return '';
  return utils.renderOptions('Options', options);
}

function renderAdvancedOptions({ options }) {
  options = options.filter(o => o.groups.includes('advanced'));
  if (options.length === 0) return '';
  return utils.renderOptions('Advanced Options', options);
}
