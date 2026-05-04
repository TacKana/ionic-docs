---
title: 'Ionic JavaScript 概览'
sidebar_label: 概览
---

<head>
  <title>Ionic JavaScript 概览 | JavaScript 版本支持与工具链</title>
  <meta
    name="description"
    content="@ionic/core 将完整的 Ionic 框架体验与为 JavaScript 开发者量身定制的工具和 API 相结合。在我们的 JavaScript 概览中了解更多关于版本支持的信息。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

`@ionic/core` 将 Ionic 框架的全部能力带给 JavaScript 开发者。它提供与 JavaScript 生态系统的无缝集成，让您可以使用熟悉的 JavaScript 工具、组件和最佳实践来构建高质量的跨平台应用。您还可以访问 Ionic 丰富的 UI 组件库和原生功能。

## JavaScript 版本支持

Ionic Core 支持最新的 JavaScript 版本。有关受支持的 JavaScript 运行时版本的详细信息，请参阅 [Stencil 支持策略](https://stenciljs.com/docs/support-policy#javascript-runtime)。

## JavaScript 工具链

Ionic Core 与现代 JavaScript 工具链和构建系统无缝协作。您可以使用 Vite、Webpack 或 Parcel 等流行工具来搭建和构建您的应用。Ionic Core 的设计使其能自然地融入 JavaScript 生态系统，因此您可以使用您喜爱的库进行状态管理、测试等。

## 原生工具链

[Capacitor](https://capacitorjs.com) 是 Ionic Core 的官方跨平台运行时，使您的应用能够通过单一代码库在 iOS、Android 和 Web 上原生运行。

## 安装

在开始之前，请确保您的机器上已安装 [Node.js](https://nodejs.org/)（包含 npm）。

```shell-session
$ npm create vite@latest my-app -- --template vanilla

$ cd my-app
$ npm install && npm install @ionic/core
$ npm run dev █
```

## 资源

<DocsCards>

<DocsCard header="快速开始" href="quickstart" icon="/icons/guide-quickstart-icon.png">
  <p>快速设置您的第一个 Ionic JavaScript 应用，并学习框架和 CLI 的基础知识。</p>
</DocsCard>

<DocsCard
  header="JavaScript 文档"
  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  icon="/icons/logo-javascript-icon.png"
>
  <p>
    从官方 JavaScript 文档中了解更多关于 JavaScript 的核心概念、工具和最佳实践。
  </p>
</DocsCard>

<DocsCard header="导航" href="/api/router" icon="/icons/component-navigation-icon.png">
  <p>了解如何使用 Ionic Router 处理 Ionic JavaScript 应用中的路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，用于构建精美的应用。</p>
</DocsCard>

<DocsCard header="主题" href="/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>学习如何使用 Ionic 强大的主题系统自定义应用的外观和风格。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>探索如何使用 Capacitor 访问原生设备功能并将您的应用部署到 iOS、Android 和 Web。</p>
</DocsCard>

</DocsCards>