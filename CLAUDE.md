# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概览

这是 [Ionic Framework](https://ionicframework.com) 的官方文档站点，基于 [Docusaurus 3](https://docusaurus.io/) 构建。站点的 base URL 为 `/docs`，部署后由主站 ionicframework.com 反向代理。

## 常用命令

```bash
npm install          # 安装依赖（Node >= 20）
npm start            # 启动开发服务器（自动运行 prestart → generate-markdown）
npm run build        # 构建站点；VERCEL_ENV 决定构建模式（preview 仅 en，production 全语言）
npm run serve        # 本地预览构建产物
npm run lint         # Prettier 格式化所有文件（自动写入）
npm run spellcheck   # cspell 拼写检查
npm run playground:new  # 通过 hygen 交互式创建新 playground 示例
```

项目无测试套件，无 `npm test`。

## 构建管道

生产构建的完整流程由 `prebuild` → `build` 两个 npm script 驱动：

```bash
npm run prebuild   # → generate-markdown → i18n.sh → (可选) crowdin:sync
npm run build      # → build:${VERCEL_ENV:-preview}
```

- `VERCEL_ENV=production` → `docusaurus build`（编译全部 locale）
- 其他/未设置 → `docusaurus build --locale en`（仅英文，用于 PR 预览）

### 内容生成管道 (`npm run generate-markdown`)

`prestart` 和 `prebuild` 都会先运行此命令。三个脚本并行/串行：

1. `scripts/native.mjs` — 先执行，从 jsdelivr CDN 拉取 Capacitor 插件 README，生成 `docs/native/*.md`
2. `scripts/cli.mjs` — 与 release-notes 并发；读取 `scripts/data/cli.json`，生成 `docs/cli/commands/*.md`
3. `scripts/release-notes.mjs` — 从 GitHub Releases API 拉取 Ionic 发版记录，输出 JSON 到 `src/components/page/reference/ReleaseNotes/`；需要 `GITHUB_TOKEN` 环境变量，否则生成空数据

### API 组件参考

自定义 Docusaurus 插件 `plugins/docusaurus-plugin-ionic-component-api/index.js` 在构建时从 `@ionic/docs` npm 包（unpkg）拉取每个组件的元数据，自动生成 props/events/methods/parts/slots/custom-props 的 Markdown 片段。这些片段通过 webpack alias `@ionic-internal/component-api` → `.docusaurus/docusaurus-plugin-ionic-component-api/default/` 被文档页面引用（见 `docs/api/*.md` 中的 import 语句）。

**自动生成的文件会在每次构建时被覆盖**：修改 `docs/api/*.md`、`docs/cli/commands/*.md`、`docs/native/*.md` 前需确认是手写内容还是自动生成的内容。API 页面本身（`docs/api/button.md` 等）是手写的，但其中 import 的 `@ionic-internal/component-api` 片段是自动生成的。

## 架构概述

### 版本管理

- **当前版本**：v8（`docs/`），对应 Ionic Framework v8
- **归档版本**：v7 位于 `versioned_docs/version-v7/` 和 `versioned_sidebars/version-v7.json`
- `versions.json` 控制版本列表（目前仅 `["v7"]`）
- v5、v6 通过 `versioned_docs/` 和 `versioned_sidebars/` 维护
- v3、v4 及更早版本托管在外部 URL，映射见 `versionsArchived.json`
- `versionsArchived.json` 的条目渲染在版本下拉菜单中

### 目录结构

| 目录 | 用途 |
|------|------|
| `docs/` | 当前版本 (v8) 的 Markdown 文档 |
| `versioned_docs/` | 旧版本文档快照 (v5-v7) |
| `versioned_sidebars/` | 对应版本的侧边栏定义 |
| `src/components/global/` | 跨页面/跨版本复用的 React 组件（Playground, Codepen, DocsCard, PlaygroundTabs 等） |
| `src/components/page/` | 按文档章节组织的页面级组件（api/, native/, reference/, theming/, intro/ 等） |
| `src/theme/` | Swizzled Docusaurus 主题组件 |
| `src/styles/` | SCSS 样式，含 `custom.scss` 入口 |
| `src/utils/` | React hooks（useScript） |
| `scripts/` | 构建期内容生成脚本 + `utils.mjs`（Markdown 渲染等工具函数） |
| `plugins/` | 自定义 Docusaurus 插件 |
| `static/` | 静态资源（`demos/` 演示、`usage/` playground、`code/stackblitz/` StackBlitz 项目模板） |
| `_templates/` | Hygen 模板（用于 `playground:new` 生成器） |

### Swizzled 主题组件

以下 Docusaurus 主题组件被 swizzle（弹出覆盖），位于 `src/theme/`：

- **DocItem/Layout** — 文档页布局，注入 LegacyAnchor 支持旧版锚点
- **DocRoot/Layout/Main** — 文档根布局
- **MDXComponents** — 替换默认 `<table>` 为自定义表格组件
- **TOC** — 自定义目录组件
- **DocSidebar** — 自定义侧边栏
- **NavbarItem/LocaleDropdownNavbarItem** — 自定义语言下拉
- **Icon/Edit, Icon/Language** — 自定义图标
- **Layout** — 全局布局覆盖
- **prism-include-languages** + **prism-languages/prism-vue** — Prism 语法高亮扩展

### 国际化 (i18n)

- 默认语言：英语，支持日语 (ja)
- 翻译通过 [Crowdin](https://crowdin.com/project/ionic-docs) 管理；日语版本由 [ionic-jp](https://github.com/ionic-jp/ionic-docs) 团队独立维护
- `scripts/i18n.sh` 在 prebuild 阶段从 `translation/jp` 分支拉取日语 Markdown 到 `i18n/ja/` 目录；日语 API 翻译数据从 ionic-jp 的 GitHub 仓库获取
- `CROWDIN_PERSONAL_TOKEN` 环境变量存在时，prebuild 会额外执行 `crowdin:sync`

### Playground 组件

`src/components/global/Playground/` 是文档中最复杂的组件：

- 每个 playground 同时渲染 iOS 和 MD 两个 `<iframe>`，通过 CSS 显隐切换模式
- 使用 `IntersectionObserver` 懒加载 — iframe 仅在 playground 进入视口时才渲染，避免页面初始加载时大量 iframe 导致内存崩溃
- 框架选择和模式选择通过 `localStorage` 跨 playground 同步
- 通过 `window.postMessage` 同步深色模式到 iframe
- `devicePreview` 属性启用 `<device-preview>` Web Component 包裹 iframe 模拟设备边框
- StackBlitz 集成通过 `stackblitz.utils.ts` 处理不同框架的编辑器打开逻辑

### Prismic 广告

`docusaurus.config.js` 中定义了一个内联插件 `ionic-docs-ads`，从 Prismic CMS 拉取 `docs_ad` 类型内容作为全局数据 (`globalData.prismicAds`)。

### editUrl 动态计算

`docusaurus.config.js` 中的 `editUrl` 函数根据文档路径动态计算 GitHub 编辑链接：
- `api/*.md` → 指向 `ionic-docs` 主仓库
- `cli/commands/*.md` → 指向 `ionic-cli` 源码
- `native/*.md` → 指向 `capacitor-plugins` 仓库
- 其他 → 指向 `ionic-docs` 仓库对应文件
- 非英语 locale 统一指向 Crowdin

## 关键配置

- `docusaurus.config.js` — 站点配置、导航栏、Algolia 搜索、Prismic 广告插件、`@ionic-internal/component-api` alias、Google Tag Manager
- `sidebars.js` — 四个侧边栏：`docs`（指南）、`api`（组件 API）、`cli`（CLI 命令）、`native`（原生插件）
- `cspell.json` + `cspell-wordlist.txt` — 拼写检查配置和自定义词表
- `babel.config.js` — 仅继承 Docusaurus 预设，无额外配置
- `tsconfig.json` — 继承 `@docusaurus/tsconfig`，排除 `static/code/stackblitz/`
- Prettier 配置继承自 `@ionic/prettier-config`

## 注意事项

- 使用 **npm** 作为包管理器（非 yarn/pnpm）
- Windows 开发需配置 CRLF → LF 转换（见 CONTRIBUTING.md）
- API 文档中锚点 id 有特殊前缀：属性用 `prop-`、方法用 `method-`，以避免与文档正文标题冲突
- 日文翻译版本从 ionic-jp 的 GitHub 仓库拉取独立的 API 翻译数据 (`translated-api.json`)
- `scripts/release-notes.mjs` 需要 `GITHUB_TOKEN` 环境变量；无 token 时生成空数组，ReleaseNotes 组件会显示错误提示
- `static/code/stackblitz/` 被 TypeScript 排除，其中的 `package.json` 仅供 StackBlitz 在线编辑器使用，不参与项目构建
