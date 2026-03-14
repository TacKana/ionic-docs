---
sidebar_label: 概述
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

# Ionic Vue 概述

`@ionic/vue` 将 Ionic Framework 的核心体验与为 Vue 开发者量身定制的工具和 API 相结合。

## Vue 版本支持

Ionic Vue 基于 Vue 3.0.0 构建。如果您使用早期版本的 Ionic Vue 构建过应用，建议您升级到最新版本并更新 Vue 依赖项。

## Vue 工具

Ionic Vue 项目与常规 Vue CLI 项目使用相同的工具链。这意味着您将使用 Vue CLI 及其所有功能进行开发。此外，初始项目还默认启用了少量功能，例如路由和 TypeScript 支持。

## 原生工具

[Capacitor](https://capacitorjs.com) 是官方推荐的跨平台应用运行时，用于让您的 `Ionic Vue` Web 应用在 iOS、Android 和 Web 上原生运行。

虽然 `Ionic Vue` 与 [Cordova](https://cordova.apache.org/) 插件配合使用没有已知的技术限制，但我们官方推荐使用 Capacitor。目前 [Ionic CLI 工具](../cli.md) 暂无支持 `Ionic Vue` 与 Cordova 集成的计划。更多详情，请[参阅此处](https://capacitorjs.com/docs/cordovy)。

## 社区资源

- [在 Ionic 与 Capacitor 中使用 Vue.js](https://dev.to/aaronksaunders/using-vue-js-v3-beta-with-ionic-components-capacitor-plugins-2b6f) - Aaron Saunders

## 安装

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type vue

$ cd myApp
$ ionic serve █
```

## 资源

<DocsCards>
  <DocsCard header="入门指南" href="your-first-app" icon="/icons/feature-component-actionsheet-icon.png">
    <p>学习使用 Ionic Framework 开始构建出色应用所需的基础知识。</p>
  </DocsCard>

<DocsCard header="导航" href="navigation" icon="/icons/feature-component-navigation-icon.png">
  <p>学习使用 Ionic 和 Vue Router 在应用内进行导航的基础知识</p>
</DocsCard>

<DocsCard header="生命周期" href="lifecycle" icon="/icons/feature-guide-components-icon.png">
  <p>学习在类组件和钩子函数中使用 Ionic 生命周期事件</p>
</DocsCard>

</DocsCards>