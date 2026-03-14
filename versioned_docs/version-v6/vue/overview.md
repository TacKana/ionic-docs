---
title: 'Ionic Vue 概览'
sidebar_label: 概览
---

<head>
  <title>Ionic Vue 概览 | Vue.js 框架文档</title>
  <meta
    name="description"
    content="阅读本文档了解 Ionic Vue 如何将核心 Ionic Framework 与专门为 Vue.js 开发者定制的工具和 API 相结合。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

`@ionic/vue` 为 Vue 开发者带来了 Ionic Framework 的全部能力。它提供了与 Vue 生态系统的无缝集成，让您能够使用熟悉的 Vue 工具、组件和最佳实践构建高质量的跨平台应用。您还可以访问 Ionic 丰富的 UI 组件库和原生功能。

## Vue 版本支持

Ionic Vue v6 支持 Vue 3.x。有关支持版本和我们支持策略的详细信息，请参阅 [Ionic Vue 支持策略](/docs/reference/support#ionic-vue)。

## Vue 工具

Ionic Vue 项目使用与标准 Vue CLI 项目相同的工具，因此您可以利用完整的 Vue CLI 功能集来构建、测试和部署应用。入门项目默认启用了有用的功能，例如用于导航的 Vue Router 和用于类型安全及提升开发体验的 TypeScript 支持。

## 原生工具

[Capacitor](https://capacitorjs.com) 是 Ionic Vue 官方推荐的跨平台运行时，让您的应用能够使用单一代码库在 iOS、Android 和 Web 上原生运行。

虽然您可以在 Ionic Vue 中使用许多 [Cordova](https://cordova.apache.org/) 插件，但 Capacitor 是官方推荐且完全支持的解决方案。[Ionic CLI](../cli.md) 不为 Ionic Vue 项目提供官方的 Cordova 集成。有关在 Capacitor 中使用 Cordova 插件的更多信息，请参阅 [Capacitor 文档](https://capacitorjs.com/docs/cordova)。

## 安装

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type vue

$ cd myApp
$ ionic serve █
```

## 资源

<DocsCards>

<DocsCard header="快速开始" href="quickstart" icon="/icons/guide-quickstart-icon.png">
  <p>快速设置您的第一个 Ionic Vue 应用，并了解框架和 CLI 的基础知识。</p>
</DocsCard>

<DocsCard header="Vue 文档" href="https://vuejs.org/guide/introduction.html" icon="/icons/logo-vue-icon.png">
  <p>从官方 Vue 文档中了解更多关于 Vue 的核心概念、工具和最佳实践。</p>
</DocsCard>

<DocsCard header="导航" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>了解如何在 Ionic Vue 应用中使用 Vue Router 处理路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/docs/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，构建精美的应用。</p>
</DocsCard>

<DocsCard header="主题定制" href="/docs/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>学习如何使用 Ionic 强大的主题系统自定义应用的外观和风格。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>探索如何使用 Capacitor 访问原生设备功能，并将应用部署到 iOS、Android 和 Web 平台。</p>
</DocsCard>

</DocsCards>