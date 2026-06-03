---
title: 'Ionic JavaScript 概述'
sidebar_label: 概述
---

<head>
  <title>Ionic JavaScript 概述 | JavaScript 版本支持与工具链</title>
  <meta
    name="description"
    content="@ionic/core 将 Ionic 体验与专为 JavaScript 开发者打造的工具和 API 相结合。在 JavaScript 概述中了解更多关于版本支持的信息。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

`@ionic/core` 将 Ionic 框架的全部能力赋予 JavaScript 开发者。它与 JavaScript 生态系统无缝集成，使您能够使用熟悉的 JavaScript 工具、组件和最佳实践来构建高质量的跨平台应用。您还可以访问 Ionic 丰富的 UI 库和原生能力。

## JavaScript 版本支持

Ionic Core 支持最新版本的 JavaScript。有关支持的 JavaScript 运行时的详细信息，请参阅 [Stencil 支持政策](https://stenciljs.com/docs/support-policy#javascript-runtime)。

## JavaScript 工具链

Ionic Core 与现代 JavaScript 工具链和构建系统无缝协作。您可以使用流行的工具（如 Vite、Webpack 或 Parcel）来搭建和构建应用。Ionic Core 设计为自然地融入 JavaScript 生态系统，因此您可以使用自己喜欢的库进行状态管理、测试等。

## 原生工具链

[Capacitor](https://capacitorjs.com) 是 Ionic Core 的官方跨平台运行时，使您的应用能够通过单一代码库在 iOS、Android 和 Web 上原生运行。

## 安装

在开始之前，请确保您的机器上已安装 [Node.js](https://nodejs.org/)（其中包含 npm）。

```shell-session
$ npm create vite@latest my-app -- --template vanilla

$ cd my-app
$ npm install && npm install @ionic/core
$ npm run dev █
```

## 资源

<DocsCards>

<DocsCard header="入门指南" href="quickstart" icon="/icons/guide-quickstart-icon.png">
  <p>快速设置您的第一个 Ionic JavaScript 应用，并了解框架和 CLI 的基础知识。</p>
</DocsCard>

<DocsCard
  header="JavaScript 文档"
  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  icon="/icons/logo-javascript-icon.png"
>
  <p>从官方 JavaScript 文档中了解更多关于 JavaScript 核心概念、工具和最佳实践的信息。</p>
</DocsCard>

<DocsCard header="导航" href="/api/router" icon="/icons/component-navigation-icon.png">
  <p>了解如何使用 Ionic Router 在 Ionic JavaScript 应用中处理路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，用于构建精美的应用。</p>
</DocsCard>

<DocsCard header="主题" href="/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>了解如何使用 Ionic 强大的主题系统自定义应用的外观和风格。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>探索如何使用原生设备功能，并通过 Capacitor 将应用部署到 iOS、Android 和 Web。</p>
</DocsCard>

</DocsCards>
