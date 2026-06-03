---
title: 'Ionic Angular 概览'
sidebar_label: 概览
---

<head>
  <title>Ionic Angular 概览 | Angular 版本支持与工具链</title>
  <meta
    name="description"
    content="@ionic/angular 将 Ionic 体验与专为 Angular 开发者打造的工具链和 API 相结合。在我们的 Angular 概览中了解更多关于版本支持的信息。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

`@ionic/angular` 将 Ionic Framework 的全部能力带给 Angular 开发者。它与 Angular 生态系统无缝集成，让您可以使用熟悉的 Angular 工具、组件和最佳实践来构建高质量的跨平台应用。您还可以访问 Ionic 丰富的 UI 库和原生能力。

## Angular 版本支持

Ionic Angular v7 支持 Angular 14 到 17 版本。有关支持版本及支持政策的详细信息，请参阅 [Ionic Angular 支持政策](/reference/support#ionic-angular)。

## Angular 工具链

Ionic 使用官方 Angular 技术栈来构建应用和路由，因此您的应用可以与 Angular 生态系统的其他部分保持一致。在需要更明确的功能时，Ionic 提供了 `@ionic/angular-toolkit`，它构建并集成于[官方 Angular CLI](https://angular.io/cli)，并提供 `@ionic/angular` 应用特有的功能。

## 原生工具链

[Capacitor](https://capacitorjs.com) 是 Ionic Angular 的官方跨平台运行时，让您的应用只需一套代码库就能在 iOS、Android 和 Web 上原生运行。

## 安装

在开始之前，请确保您的机器上已安装 [Node.js](https://nodejs.org/)（其中包含 npm）。

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type angular

$ cd myApp
$ ionic serve █
```

## 资源

<DocsCards>

<DocsCard header="快速入门" href="quickstart" icon="/icons/guide-quickstart-icon.png">
  <p>快速设置您的第一个 Ionic Angular 应用，学习框架和 CLI 的基础知识。</p>
</DocsCard>

<DocsCard header="Angular 文档" href="https://angular.dev/overview" icon="/icons/logo-angular-icon.png">
  <p>从官方 Angular 文档中了解更多关于 Angular 核心概念、工具和最佳实践的信息。</p>
</DocsCard>

<DocsCard header="导航" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>了解如何使用 Angular Router 在 Ionic Angular 应用中处理路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，用于构建精美的应用。</p>
</DocsCard>

<DocsCard header="主题" href="/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>学习如何使用 Ionic 强大的主题系统自定义应用的外观和风格。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>了解如何使用 Capacitor 访问原生设备功能并将应用部署到 iOS、Android 和 Web。</p>
</DocsCard>

</DocsCards>
