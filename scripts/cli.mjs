import { readFileSync, writeFileSync } from 'fs';
import * as utils from './utils.mjs';
import cliJSON from './data/cli.json' with { type: 'json' };
import cliOverrides from './data/meta-override.json' with { type: 'json' };

const commandToKebab = (str) =>
  str
    .replace('ionic ', '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

(async function () {
  // console.log(cliJSON);
  const { commands } = cliJSON;

  commands.map(writePage);
})();

function writePage(page) {
  const bodyContent = [
    renderIntro(page),
    renderInputs(page),
    renderOptions(page),
    renderAdvancedOptions(page),
    renderExamples(page),
  ].join('');

  const path = `cli/commands/${commandToKebab(page.name)}.md`;
  const filePath = `docs/${path}`;

  // 检查文件是否已被翻译
  const existing = getExistingTranslation(filePath);
  const newHash = hashContent(bodyContent);

  if (existing) {
    if (existing.sourceHash === newHash) {
      console.log(`跳过 ${path}（已被翻译，上游无变更）`);
    } else if (!existing.sourceHash) {
      const updated = updateSourceHash(existing.content, newHash);
      writeFileSync(filePath, updated);
      console.log(`更新 ${path}（补充 source_hash）`);
    } else {
      console.warn(`⚠️  ${path}：上游文档已更新，翻译需要同步！`);
      console.warn(`   存储哈希: ${existing.sourceHash}`);
      console.warn(`   最新哈希: ${newHash}`);
      const updated = updateSourceHash(existing.content, newHash);
      writeFileSync(filePath, updated);
    }
    return;
  }

  // 新文件，正常生成
  const data = renderFrontmatter(page) + bodyContent;
  writeFileSync(filePath, data);
  writeFileSync(`versioned_docs/version-v6/${path}`, data);
  writeFileSync(`versioned_docs/version-v7/${path}`, data);
}

/**
 * 获取已存在文件的翻译信息和源哈希
 */
function getExistingTranslation(filePath) {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch && /translated:\s*true/.test(frontmatterMatch[1])) {
      const hashMatch = frontmatterMatch[1].match(/source_hash:\s*(\S+)/);
      return {
        content,
        sourceHash: hashMatch ? hashMatch[1] : '',
      };
    }
  } catch (e) {
    // 文件不存在
  }
  return null;
}

/**
 * 简单的内容哈希
 */
function hashContent(content) {
  let hash = 0;
  for (let i = 0; i < content.length; i++) {
    const chr = content.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return Math.abs(hash).toString(16);
}

/**
 * 更新文件 frontmatter 中的 source_hash
 */
function updateSourceHash(content, newHash) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return content;

  const oldFm = frontmatterMatch[1];
  let newFm;
  if (/source_hash:/.test(oldFm)) {
    newFm = oldFm.replace(/source_hash:\s*\S+/, `source_hash: ${newHash}`);
  } else {
    newFm = oldFm + `\nsource_hash: ${newHash}`;
  }
  return content.replace(oldFm, newFm);
}

function renderFrontmatter({ name, groups }) {
  const shortName = name.replace('ionic ', '');
  const slug = commandToKebab(shortName);

  const frontmatter = {
    title: name,
    sidebar_label: shortName,
  };

  const deprecated = groups.includes('deprecated')
    ? ':::warning\nThis command has been deprecated and will be removed in an upcoming major release of the Ionic CLI.\n:::'
    : '';

  return `---
${Object.entries(frontmatter)
  .map(([key, value]) => `${key}: ${typeof value === 'string' ? `"${value.replace('"', '\\"')}"` : value}`)
  .join('\n')}
---
${utils.getHeadTag(cliOverrides[slug])}

${deprecated}
`;
}

function renderIntro({ description, summary, name, options, inputs }) {
  let args = '';
  if (inputs && inputs.length > 0) {
    for (let input of inputs) {
      args += ` [${input.name}]`;
    }
  }
  if (options && options.length > 0) {
    args += ' [options]';
  }

  return `
${summary}

\`\`\`shell
$ ${name}${args}
\`\`\`

${description}`;
}

function renderExamples({ exampleCommands }) {
  if (!exampleCommands || exampleCommands.length === 0) {
    return '';
  }

  return `
## Examples

\`\`\`shell
${exampleCommands.map((command) => `$ ${command}`).join('\n')}
\`\`\`
`;
}

function renderInputs({ inputs }) {
  if (inputs.length === 0) {
    return '';
  }

  return utils.renderList('Inputs', inputs);
}

function renderOptions({ options }) {
  options = options.filter((option) => !option.groups.includes('advanced'));

  if (options.length === 0) {
    return '';
  }
  return utils.renderOptions('Options', options);
}

function renderAdvancedOptions({ options }) {
  options = options.filter((option) => option.groups.includes('advanced'));

  if (options.length === 0) {
    return '';
  }
  return utils.renderOptions('Advanced Options', options);
}

// function renderProperties({ props: properties }) {
//   if (properties.length === 0) {
//     return "";
//   }

//   return `
// ## Properties

// ${properties
//   .map(
//     prop => `
// ### ${prop.name}

// | | |
// | --- | --- |
// | **Description** | ${prop.docs.split("\n").join("<br />")} |
// | **Attribute** | \`${prop.attr}\` |
// | **Type** | \`${prop.type.replace(/\|/g, "\\|")}\` |
// | **Default** | \`${prop.default}\` |

// `
//   )
//   .join("\n")}
// `;
// }

// function renderEvents({ events }) {
//   if (events.length === 0) {
//     return "";
//   }

//   return `
// ## Events

// | Name | Description |
// | --- | --- |
// ${events.map(event => `| \`${event.event}\` | ${event.docs} |`).join("\n")}

// `;
// }

// function renderMethods({ methods }) {
//   if (methods.length === 0) {
//     return "";
//   }

//   return `
// ## Methods

// ${methods
//   .map(
//     method => `
// ### ${method.name}

// | | |
// | --- | --- |
// | **Description** | ${method.docs.split("\n").join("<br />")} |
// | **Signature** | \`${method.signature.replace(/\|/g, "\\|")}\` |
// `
//   )
//   .join("\n")}

// `;
// }

// function renderParts({ parts }) {
//   if (parts.length === 0) {
//     return "";
//   }

//   return `
// ## CSS Shadow Parts

// | Name | Description |
// | --- | --- |
// ${parts.map(prop => `| \`${prop.name}\` | ${prop.docs} |`).join("\n")}

// `;
// }

// function renderCustomProps({ styles: customProps }) {
//   if (customProps.length === 0) {
//     return "";
//   }

//   return `
// ## CSS Custom Properties

// | Name | Description |
// | --- | --- |
// ${customProps.map(prop => `| \`${prop.name}\` | ${prop.docs} |`).join("\n")}

// `;
// }

// function renderSlots({ slots }) {
//   if (slots.length === 0) {
//     return "";
//   }

//   return `
// ## Slots

// | Name | Description |
// | --- | --- |
// ${slots.map(slot => `| \`${slot.name}\` | ${slot.docs} |`).join("\n")}

// `;
// }
