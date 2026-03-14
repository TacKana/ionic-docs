---
title: 'Ionic React 概述'
sidebar_label: 概述
---

<head>
  <title>Ionic React 概述 | React 版本支持与工具链</title>
  <meta
    name="description"
    content="@ionic/react 将 Ionic 的体验与为 React 开发者量身打造的工具和 API 相结合。在我们的 React 概述中了解更多关于版本支持和资源的信息。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

`@ionic/react` 为 React 开发者带来了 Ionic Framework 的全部能力。它提供与 React 生态系统的无缝集成，使您能够使用熟悉的 React 工具、组件和最佳实践来构建高质量的跨平台应用。您还可以访问 Ionic 丰富的 UI 组件库和原生功能。

## React 版本支持

Ionic React 支持 React 的最新版本。有关支持的版本和我们的支持策略的详细信息，请参阅 [Ionic React 支持策略](/docs/reference/support#ionic-react)。

## React 工具链

Ionic React 与 React CLI 和流行的 React 工具链无缝协作。您可以使用您喜欢的库进行状态管理、测试等。Ionic React 旨在自然地融入 React 生态系统，因此您可以使用 Create React App、Vite 或 Next.js 等工具来搭建和构建您的应用。

## 原生工具链

[Capacitor](https://capacitorjs.com) 是 Ionic Angular 官方的跨平台运行时，使您的应用能够使用单一代码库在 iOS、Android 和 Web 上原生运行。

## 安装

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type react

$ cd myApp
$ ionic serve █
```

## 资源

<DocsCards>

<DocsCard header="快速开始" href="quickstart" icon="/icons/guide-quickstart-icon.png">
  <p>快速设置您的第一个 Ionic React 应用，并学习框架和 CLI 的基础知识。</p>
</DocsCard>

<DocsCard header="React 文档" href="https://react.dev/learn" icon="/icons/logo-react-icon.png">
  <p>从官方 React 文档中了解更多关于 React 的核心概念、工具和最佳实践。</p>
</DocsCard>

<DocsCard header="导航" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>探索如何在 Ionic React 应用中使用 React Router 处理路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/docs/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，用于构建精美的应用。</p>
</DocsCard>

<DocsCard header="主题定制" href="/docs/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>学习如何使用 Ionic 强大的主题系统来自定义应用的外观和感觉。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>探索如何使用 Capacitor 访问原生设备功能，并将您的应用部署到 iOS、Android 和 Web。</p>
</DocsCard>

</DocsCards>