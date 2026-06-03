---
title: 'Ionic React 概览'
sidebar_label: 概览
---

<head>
  <title>Ionic React 概览 | React 版本支持与工具</title>
  <meta
    name="description"
    content="@ionic/react 将 Ionic 体验与专为 React 开发者定制的工具和 API 相结合。在 React 概览页面中了解版本支持和资源详情。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

`@ionic/react` 将 Ionic 框架的全部能力带给 React 开发者。它与 React 生态系统无缝集成，让您能够使用熟悉的 React 工具、组件和最佳实践来构建高质量的跨平台应用。您还可以使用 Ionic 丰富的 UI 组件库和原生能力。

## React 版本支持

Ionic React 支持最新的 React 版本。有关支持版本和支持政策的详细信息，请参阅 [Ionic React 支持政策](/reference/support#ionic-react)。

## React 工具

Ionic React 与 React CLI 及流行的 React 工具无缝协作。您可以使用自己喜欢的库进行状态管理、测试等。Ionic React 设计为自然融入 React 生态系统，因此您可以使用 Create React App、Vite 或 Next.js 等工具来搭建和构建应用。

## 原生工具

[Capacitor](https://capacitorjs.com) 是官方跨平台运行时，使您的应用能够通过单一代码库在 iOS、Android 和 Web 上原生运行。

## 安装

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type react

$ cd myApp
$ ionic serve █
```

## 资源

<DocsCards>

<DocsCard header="开始入门" href="quickstart" icon="/icons/guide-quickstart-icon.png">
  <p>快速搭建您的第一个 Ionic React 应用，了解框架和 CLI 的基础知识。</p>
</DocsCard>

<DocsCard header="React 文档" href="https://react.dev/learn" icon="/icons/logo-react-icon.png">
  <p>从官方 React 文档中了解更多关于 React 核心概念、工具和最佳实践的信息。</p>
</DocsCard>

<DocsCard header="导航" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>了解如何使用 React Router 在 Ionic React 应用中处理路由和导航。</p>
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
