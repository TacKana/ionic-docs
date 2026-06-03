import { readFileSync, writeFileSync } from 'fs';
import fetch from 'node-fetch';

// replace with latest once it's relased
const tag = 'latest';

const pluginApis = [
  'action-sheet',
  'app',
  'app-launcher',
  'browser',
  'camera',
  'clipboard',
  'device',
  'dialog',
  'filesystem',
  'geolocation',
  'google-maps',
  'haptics',
  'keyboard',
  'local-notifications',
  'motion',
  'network',
  'preferences',
  'push-notifications',
  'screen-reader',
  'share',
  'splash-screen',
  'status-bar',
  'text-zoom',
  'toast',
];

async function buildPluginApiDocs(pluginId) {
  const [readme, pkgJson] = await Promise.all([getReadme(pluginId), getPkgJsonData(pluginId)]);

  const fileName = `${pluginId}.md`;
  const filePath = `docs/native/${fileName}`;

  // 检查文件是否已被翻译
  const existing = getExistingTranslation(filePath);
  const newHash = hashContent(readme);

  if (existing) {
    if (existing.sourceHash === newHash) {
      console.log(`跳过 ${fileName}（已被翻译，上游无变更）`);
    } else if (!existing.sourceHash) {
      const updated = updateSourceHash(existing.content, newHash);
      writeFileSync(filePath, updated);
      console.log(`更新 ${fileName}（补充 source_hash）`);
    } else {
      console.warn(`⚠️  ${fileName}：上游文档已更新，翻译需要同步！`);
      console.warn(`   存储哈希: ${existing.sourceHash}`);
      console.warn(`   最新哈希: ${newHash}`);
      const updated = updateSourceHash(existing.content, newHash);
      writeFileSync(filePath, updated);
    }
    return;
  }

  // 新文件，正常生成
  const apiContent = createApiPage(pluginId, readme, pkgJson);
  writeFileSync(filePath, apiContent);
  writeFileSync(`versioned_docs/version-v6/native/${fileName}`, apiContent);
  writeFileSync(`versioned_docs/version-v7/native/${fileName}`, apiContent);
}

/**
 * 获取已存在文件的翻译信息和源哈希
 * @param {string} filePath
 * @returns {{ content: string, sourceHash: string } | null}
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
 * @param {string} content
 * @returns {string}
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
 * @param {string} content
 * @param {string} newHash
 * @returns {string}
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

function createApiPage(pluginId, readme, pkgJson) {
  const title = `${toTitleCase(pluginId)} Capacitor Plugin API`;
  const desc = pkgJson.description ? pkgJson.description.replace(/\n/g, ' ') : title;
  const editUrl = `https://github.com/ionic-team/capacitor-plugins/blob/main/${pluginId}/README.md`;
  const editApiUrl = `https://github.com/ionic-team/capacitor-plugins/blob/main/${pluginId}/src/definitions.ts`;
  const sidebarLabel = toTitleCase(pluginId);

  /**
   * Cleanup and transform JSDoc content for compatibility with MDX/Docusaurus:
   * 
   * - Remove HTML comments (`<!-- ... -->`) which are not valid in MDX and will cause parsing errors.
   * - Escape `{` characters inside <code> blocks because MDX treats `{}` as JavaScript expressions. Unescaped `{` inside code blocks can cause parsing errors.
   * - Convert JSDoc-style {@link URL|Text} and {@link URL} to proper Markdown links:
   *   - {@link URL|Text} → [Text](URL)
   *   - {@link URL} → [URL](URL)
   *   This is necessary because MDX does not understand the JSDoc `@link` syntax, and leaving it unconverted will cause parsing errors.
   */
  readme = readme
    // Remove HTML comments
    .replaceAll(/<!--.*-->/g, '')
    // Escape `{` characters inside <code> blocks to avoid Markdown parsing issues
    .replace(/<code>(.*?)<\/code>/g, (_match, p1) => {
      // Replace { with \{
      return `<code>${p1.replace(/{/g, '\\{')}</code>`;
    })
    // Convert {@link URL|Text} to [Text](URL)
    .replace(/\{@link\s+([^\s|}]+)\|([^}]+)\}/g, '[$2]($1)')
    // Convert {@link URL} to [URL](URL)
    .replace(/\{@link\s+([^}]+)\}/g, '[$1]($1)');

  return `
---
title: ${title}
description: ${desc}
editUrl: ${editUrl}
editApiUrl: ${editApiUrl}
sidebar_label: ${sidebarLabel}
---
${readme}`.trim();
}

async function getReadme(pluginId) {
  const url = `https://cdn.jsdelivr.net/npm/@capacitor/${pluginId}@${tag}/README.md`;
  const rsp = await fetch(url);
  return rsp.text();
}

async function getPkgJsonData(pluginId) {
  const url = `https://cdn.jsdelivr.net/npm/@capacitor/${pluginId}@${tag}/package.json`;
  const rsp = await fetch(url);
  return rsp.json();
}

async function main() {
  await Promise.all(pluginApis.map(buildPluginApiDocs));
  console.log(`Plugin API Files Updated 🎸`);
}

function toTitleCase(str) {
  return str.replace(/(^\w|-\w)/g, (s) => {
    return s.replace(/-/, ' ').toUpperCase();
  });
}

if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (str, newStr) {
    // If a regex pattern
    if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
      return this.replace(str, newStr);
    }

    // If a string
    return this.replace(new RegExp(str, 'g'), newStr);
  };
}

main();
