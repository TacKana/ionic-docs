---
title: 'Ionic React 概述'
sidebar_label: 概述
---

<head>
  <title>Ionic React 概述 | React 版本支持与开发工具</title>
  <meta
    name="description"
    content="@ionic/react 将 Ionic 的体验与专为 React 开发者定制的工具和 API 相结合。在我们的 React 概述中了解更多关于版本支持和资源的信息。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

`@ionic/react` 为 React 开发者带来了 Ionic 框架的全部能力。它提供了与 React 生态系统的无缝集成，因此你可以使用熟悉的 React 工具、组件和最佳实践来构建高质量的跨平台应用。同时，你还能访问 Ionic 丰富的 UI 组件库和原生功能。

## React 版本支持

Ionic React 支持 React 的最新版本。有关支持的版本详情以及我们的支持政策，请参阅 [Ionic React 支持政策](/v7/reference/support#ionic-react)。

## React 开发工具

Ionic React 可以与 React CLI 以及流行的 React 工具链无缝协作。你可以使用自己喜欢的库进行状态管理、测试等。Ionic React 的设计旨在自然地融入 React 生态系统，因此你可以使用像 Create React App、Vite 或 Next.js 这样的工具来搭建和构建你的应用。

## 原生开发工具

[Capacitor](https://capacitorjs.com) 是 Ionic Angular 的官方跨平台运行时，它能让你的应用通过单一代码库在 iOS、Android 和 Web 上原生运行。

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
  <p>快速搭建你的第一个 Ionic React 应用，并了解框架和 CLI 的基础知识。</p>
</DocsCard>

<DocsCard header="React 文档" href="https://react.dev/learn" icon="/icons/logo-react-icon.png">
  <p>从官方 React 文档中了解更多关于 React 的核心概念、工具和最佳实践。</p>
</DocsCard>

<DocsCard header="导航" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>了解如何在 Ionic React 应用中使用 React Router 处理路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/v7/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，用于构建精美的应用。</p>
</DocsCard>

<DocsCard header="主题定制" href="/v7/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>学习如何使用 Ionic 强大的主题系统来定制应用的外观和风格。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>探索如何使用 Capacitor 访问原生设备功能，并将你的应用部署到 iOS、Android 和 Web 上。</p>
</DocsCard>

</DocsCards>