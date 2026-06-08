import { readFileSync, writeFileSync, existsSync } from 'fs';
import fetch from 'node-fetch';

const tag = 'latest';
const HASH_FILE = 'scripts/api-hashes-native.json';
const OUTPUT_DIR = 'docs/native';
const VERSIONED_DIRS = ['versioned_docs/version-v6/native', 'versioned_docs/version-v7/native'];

const pluginApis = [
  'action-sheet', 'app', 'app-launcher', 'browser', 'camera', 'clipboard',
  'device', 'dialog', 'filesystem', 'geolocation', 'google-maps', 'haptics',
  'keyboard', 'local-notifications', 'motion', 'network', 'preferences',
  'push-notifications', 'screen-reader', 'share', 'splash-screen',
  'status-bar', 'text-zoom', 'toast',
];

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

async function buildPluginApiDocs(pluginId, manifest) {
  const fileName = `${pluginId}.md`;
  const filePath = `${OUTPUT_DIR}/${fileName}`;

  const readme = await getReadme(pluginId);
  const newHash = hashContent(readme);
  const storedHash = manifest[pluginId];

  if (!storedHash) {
    // 首次运行：记录哈希，不覆盖已翻译文件
    manifest[pluginId] = newHash;
    if (existsSync(filePath)) {
      console.log(`  \x1b[36m📝 ${fileName}：首次记录哈希 (${newHash})\x1b[0m`);
    } else {
      const pkgJson = await getPkgJsonData(pluginId);
      const content = createApiPage(pluginId, readme, pkgJson);
      writeFileSync(filePath, content);
      for (const dir of VERSIONED_DIRS) writeFileSync(`${dir}/${fileName}`, content);
      console.log(`  \x1b[90m📄 ${fileName}：新插件，已生成\x1b[0m`);
    }
    return;
  }

  if (newHash === storedHash) {
    console.log(`  \x1b[32m✅ ${fileName}：上游无变更\x1b[0m`);
    return;
  }

  // 上游有更新
  manifest[pluginId] = newHash;
  if (isFileTranslated(filePath)) {
    console.log(`  \x1b[33m⚠️  ${fileName}：上游已更新，翻译需同步！\x1b[0m`);
    console.log(`  \x1b[33m   旧哈希: ${storedHash} → 新哈希: ${newHash}\x1b[0m`);
  } else {
    const pkgJson = await getPkgJsonData(pluginId);
    const content = createApiPage(pluginId, readme, pkgJson);
    writeFileSync(filePath, content);
    for (const dir of VERSIONED_DIRS) writeFileSync(`${dir}/${fileName}`, content);
    console.log(`  \x1b[90m📄 ${fileName}：上游更新，已重新生成\x1b[0m`);
  }
}

// ====== 辅助函数 ======

function createApiPage(pluginId, readme, pkgJson) {
  const title = `${toTitleCase(pluginId)} Capacitor Plugin API`;
  const desc = pkgJson.description ? pkgJson.description.replace(/\n/g, ' ') : title;
  const sidebarLabel = toTitleCase(pluginId);
  const editUrl = `https://github.com/ionic-team/capacitor-plugins/blob/main/${pluginId}/README.md`;
  const editApiUrl = `https://github.com/ionic-team/capacitor-plugins/blob/main/${pluginId}/src/definitions.ts`;

  readme = readme
    .replaceAll(/<!--.*-->/g, '')
    .replace(/<code>(.*?)<\/code>/g, (_match, p1) => `<code>${p1.replace(/{/g, '\\{')}</code>`)
    .replace(/\{@link\s+([^\s|}]+)\|([^}]+)\}/g, '[$2]($1)')
    .replace(/\{@link\s+([^}]+)\}/g, '[$1]($1)');

  return `---
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

function toTitleCase(str) {
  return str.replace(/(^\w|-\w)/g, s => s.replace(/-/, ' ').toUpperCase());
}

// ====== 入口 ======

async function main() {
  const manifest = loadManifest();
  for (const pluginId of pluginApis) {
    try {
      await buildPluginApiDocs(pluginId, manifest);
    } catch (e) {
      console.log(`  \x1b[31m❌ ${pluginId}.md：${e.message}\x1b[0m`);
    }
  }
  saveManifest(manifest);
  console.log('📋 哈希清单已更新: scripts/api-hashes-native.json');
}

if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (str, newStr) {
    if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') return this.replace(str, newStr);
    return this.replace(new RegExp(str, 'g'), newStr);
  };
}

main();
