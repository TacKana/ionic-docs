---
title: 'Ionic Angular 概述'
sidebar_label: 概述
---

<head>
  <title>Ionic Angular 概述 | Angular 版本支持与工具链</title>
  <meta
    name="description"
    content="@ionic/angular 结合了 Ionic 的体验与为 Angular 开发者量身打造的工具和 API。在我们的 Angular 概述中了解更多版本支持信息。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

`@ionic/angular` 为 Angular 开发者带来了 Ionic Framework 的全部能力。它提供了与 Angular 生态系统的无缝集成，让您能够使用熟悉的 Angular 工具、组件和最佳实践构建高质量的跨平台应用。您还可以访问 Ionic 丰富的 UI 库和原生功能。

## Angular 版本支持

Ionic Angular v8 支持 Angular 16 及以上版本。有关支持版本和我们的支持政策的详细信息，请参阅 [Ionic Angular 支持政策](/docs/reference/support#ionic-angular)。

## Angular 工具链

Ionic 使用官方的 Angular 技术栈进行应用构建和路由管理，因此您的应用可以完全融入 Angular 生态系统。在需要更多特定功能的情况下，Ionic 提供了 `@ionic/angular-toolkit`，它与[官方 Angular CLI](https://angular.io/cli) 构建并集成，并为 `@ionic/angular` 应用提供特定功能。

## 原生工具链

[Capacitor](https://capacitorjs.com) 是 Ionic Angular 的官方跨平台运行时，让您的应用能够使用单一代码库在 iOS、Android 和 Web 上原生运行。

## 安装

在开始之前，请确保您的计算机上已安装 [Node.js](https://nodejs.org/)（包含 npm）。

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type angular

$ cd myApp
$ ionic serve █
```

## 资源

<DocsCards>

<DocsCard header="快速开始" href="quickstart" icon="/icons/guide-quickstart-icon.png">
  <p>快速设置您的第一个 Ionic Angular 应用，并学习框架和 CLI 的基础知识。</p>
</DocsCard>

<DocsCard header="Angular 文档" href="https://angular.dev/overview" icon="/icons/logo-angular-icon.png">
  <p>从官方 Angular 文档中了解更多关于 Angular 核心概念、工具和最佳实践的信息。</p>
</DocsCard>

<DocsCard header="导航" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>探索如何在 Ionic Angular 应用中使用 Angular Router 处理路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/docs/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，用于构建精美的应用程序。</p>
</DocsCard>

<DocsCard header="主题定制" href="/docs/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>学习如何使用 Ionic 强大的主题系统定制应用的外观和风格。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>探索如何使用 Capacitor 访问原生设备功能，并将您的应用部署到 iOS、Android 和 Web。</p>
</DocsCard>

</DocsCards>