---
title: 'Ionic React 概述'
sidebar_label: 概述
---

<head>
  <title>Ionic React 概述 | React 版本支持与工具链</title>
  <meta
    name="description"
    content="@ionic/react 将 Ionic 的体验与为 React 开发者量身定制的工具和 API 相结合。在我们的 React 概述中了解更多关于版本支持与资源的信息。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

`@ionic/react` 为 React 开发者带来了 Ionic Framework 的全部能力。它能与 React 生态系统无缝集成，让你可以使用熟悉的 React 工具、组件和最佳实践来构建高质量的跨平台应用。同时，你还可以访问 Ionic 丰富的 UI 组件库和原生能力。

## React 版本支持

Ionic React 支持最新版本的 React。有关支持的版本和我们的支持政策的详细信息，请参阅 [Ionic React 支持政策](/docs/reference/support#ionic-react)。

## React 工具链

Ionic React 可以与 React CLI 及流行的 React 工具链无缝协作。你可以使用你喜欢的库进行状态管理、测试等。Ionic React 的设计使其能自然地融入 React 生态系统，因此你可以使用像 Create React App、Vite 或 Next.js 这样的工具来搭建和构建你的应用。

## 原生工具链

[Capacitor](https://capacitorjs.com) 是 Ionic Angular 官方的跨平台运行时，它能让你的应用通过单一代码库在 iOS、Android 和 Web 上原生运行。

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
  <p>快速搭建你的第一个 Ionic React 应用，并学习框架和 CLI 的基础知识。</p>
</DocsCard>

<DocsCard header="React 文档" href="https://react.dev/learn" icon="/icons/logo-react-icon.png">
  <p>从官方 React 文档中了解更多关于 React 核心概念、工具和最佳实践。</p>
</DocsCard>

<DocsCard header="导航" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>了解如何在 Ionic React 应用中使用 React Router 处理路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/docs/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，用于构建美观的应用。</p>
</DocsCard>

<DocsCard header="主题" href="/docs/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>学习如何使用 Ionic 强大的主题系统来自定义应用的外观和风格。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>探索如何使用 Capacitor 访问原生设备功能，并将你的应用部署到 iOS、Android 和 Web。</p>
</DocsCard>

</DocsCards>