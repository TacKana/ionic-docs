---
sidebar_label: 概览
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

# Ionic Vue 概览

`@ionic/vue` 将 Ionic Framework 核心体验与专为 Vue 开发者量身定制的工具和 API 相结合。

## Vue 版本支持

Ionic Vue 构建于 Vue 3.0.0 之上。如果您使用早期版本的 Ionic Vue 构建了应用，建议升级到最新版本并更新您的 Vue 依赖。

## Vue 工具链

Ionic Vue 项目与常规的 Vue CLI 项目拥有相同的工具链。这意味着您将使用 Vue CLI 及其所有特性来构建应用。此外，启动项目默认还启用了路由和 TypeScript 支持等功能。

## 原生工具链

[Capacitor](https://capacitorjs.com) 是官方跨平台应用运行时，用于使您的 `Ionic Vue` 网页应用在 iOS、Android 和 Web 上原生运行。

虽然目前没有已知的技术限制阻止 `Ionic Vue` 与 [Cordova](https://cordova.apache.org/) 插件一起使用，但官方推荐使用 Capacitor。目前 [Ionic CLI 工具](../cli.md) 中没有计划支持 `Ionic Vue` 的 Cordova 集成。更多详情，请[参见这里](https://capacitorjs.com/docs/cordova)。

## 社区资源

- [使用 Vue.js 结合 Ionic 和 Capacitor](https://dev.to/aaronksaunders/using-vue-js-v3-beta-with-ionic-components-capacitor-plugins-2b6f) - Aaron Saunders

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
    <p>学习使用 Ionic Framework 构建出色应用所需的基础知识。</p>
  </DocsCard>

<DocsCard header="导航" href="navigation" icon="/icons/feature-component-navigation-icon.png">
  <p>学习使用 Ionic 和 Vue Router 在应用中进行导航的基础知识。</p>
</DocsCard>

<DocsCard header="生命周期" href="lifecycle" icon="/icons/feature-guide-components-icon.png">
  <p>了解如何在类组件和 hooks 中使用 Ionic 生命周期事件。</p>
</DocsCard>

</DocsCards>
