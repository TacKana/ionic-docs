---
title: 'Ionic Vue 概览'
sidebar_label: 概览
---

<head>
  <title>Ionic Vue 概览 | Vue.js 框架文档</title>
  <meta
    name="description"
    content="阅读本篇概览，了解 Ionic Vue 如何将核心 Ionic 框架与专为 Vue.js 开发者打造的工具和 API 相结合。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

`@ionic/vue` 将 Ionic 框架的全部能力带给 Vue 开发者。它与 Vue 生态系统无缝集成，让您可以使用熟悉的 Vue 工具、组件和最佳实践来构建高质量的跨平台应用。您还可以访问 Ionic 丰富的 UI 库和原生功能。

## Vue 版本支持

Ionic Vue v7 支持 Vue 3.x。有关支持版本和支持政策的详细信息，请参阅 [Ionic Vue 支持政策](/reference/support#ionic-vue)。

## Vue 工具链

Ionic Vue 项目使用与标准 Vue CLI 项目相同的工具链，因此您可以利用完整的 Vue CLI 功能集来构建、测试和部署应用。启动项目默认启用了有用的功能，例如用于导航的 Vue Router 和用于类型安全及更好开发体验的 TypeScript 支持。

## 原生工具

[Capacitor](https://capacitorjs.com) 是 Ionic Vue 的官方跨平台运行时，使您的应用能够使用单一代码库在 iOS、Android 和 Web 上原生运行。

虽然您可以将许多 [Cordova](https://cordova.apache.org/) 插件与 Ionic Vue 一起使用，但 Capacitor 是推荐且完全支持的解决方案。[Ionic CLI](../cli.md) 不为 Ionic Vue 项目提供官方的 Cordova 集成。有关将 Cordova 插件与 Capacitor 一起使用的更多信息，请参阅 [Capacitor 文档](https://capacitorjs.com/docs/cordova)。

## 安装

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type vue

$ cd myApp
$ ionic serve █
```

## 资源

<DocsCards>

<DocsCard header="入门指南" href="quickstart" icon="/icons/guide-quickstart-icon.png">
  <p>快速搭建您的第一个 Ionic Vue 应用，学习框架和 CLI 的基础知识。</p>
</DocsCard>

<DocsCard header="Vue 文档" href="https://vuejs.org/guide/introduction.html" icon="/icons/logo-vue-icon.png">
  <p>从官方 Vue 文档中了解更多关于 Vue 核心概念、工具和最佳实践的信息。</p>
</DocsCard>

<DocsCard header="导航" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>了解如何使用 Vue Router 在 Ionic Vue 应用中处理路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，用于构建精美的应用。</p>
</DocsCard>

<DocsCard header="主题" href="/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>了解如何使用 Ionic 强大的主题系统自定义应用的外观和风格。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>探索如何使用 Capacitor 访问原生设备功能，并将应用部署到 iOS、Android 和 Web。</p>
</DocsCard>

</DocsCards>
