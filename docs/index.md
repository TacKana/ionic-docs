---
title: Ionic 介绍
sidebar_label: 概述
slug: /
hide_table_of_contents: true
demoUrl: https://docs-demo.ionic.io/
demoSourceUrl: https://github.com/ionic-team/docs-demo
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>开源 UI 工具包，用于创建您自己的移动应用</title>
  <meta
    name="description"
    content="Ionic Framework 是一个开源的 UI 工具包，让您可以使用 Web 技术，并结合流行的框架，来创建自己的移动应用。"
  />
  <link rel="canonical" href="https://ionicframework.com/docs" />
  <link rel="alternate" href="https://ionicframework.com/docs" hreflang="x-default" />
  <link rel="alternate" href="https://ionicframework.com/docs" hreflang="en" />
  <meta property="og:url" content="https://ionicframework.com/docs" />
</head>

Ionic 是一个开源 UI 工具包，用于使用 Web 技术（HTML、CSS 和 JavaScript）构建高性能、高质量的移动应用，并与 [Angular](angular/overview.md)、[React](react/overview.md) 和 [Vue](vue/overview.md) 等流行框架集成。

通过 [安装 Ionic](intro/cli.md) 或按照我们的 [首个应用教程](intro/next.md#build-your-first-app) 开始构建，以了解主要概念。

<intro-end />

<DocsCards>
  <DocsCard header="安装指南" href="/intro/cli" icon="/icons/guide-installation-icon.svg" hoverIcon="/icons/guide-installation-icon-hover.svg">
    <p>设置您的系统并安装框架的分步指南。</p>
  </DocsCard>

<DocsCard
  header="UI 组件"
  href="/components"
  icon="/icons/guide-components-icon.svg"
  hoverIcon="/icons/guide-components-icon-hover.svg"
>
  <p>深入了解 Ionic 精心设计的 UI 组件库。</p>
</DocsCard>

<DocsCard
  header="原生功能"
  href="/native"
  icon="/icons/guide-native-icon.svg"
  hoverIcon="/icons/guide-native-icon-hover.svg"
>
  <p>集成原生设备插件，如蓝牙、地图、HealthKit 等。</p>
</DocsCard>

  <DocsCard header="主题定制" href="/theming/basics" icon="/icons/guide-theming-icon.svg" hoverIcon="/icons/guide-theming-icon-hover.svg">
    <p>学习如何轻松定制和修改 Ionic 应用的视觉设计，以符合您的品牌风格。</p>
  </DocsCard>
</DocsCards>

## 概述

Ionic 专注于应用的前端用户体验（UX）和用户界面（UI）交互——UI 控件、交互、手势、动画。它易于学习，并能与其他库或框架（如 [Angular](angular/overview.md)、[React](react/overview.md) 或 [Vue](vue/overview.md)）集成。或者，也可以不使用任何前端框架，仅通过简单的 [脚本引入](intro/cdn.md) 来独立使用。如果您想在深入之前了解更多关于 Ionic 的信息，我们 <a href="https://youtu.be/p3AN3igqiRc" target="_blank">制作了一个视频</a> 带您了解基础知识。

### 一套代码，处处运行

Ionic 是唯一能让 Web 开发者通过单一代码库为所有主流应用商店和移动 Web 构建应用的移动应用技术栈。并且借助 [自适应样式](theming/platform-styles.md)，Ionic 应用在各种设备上都能呈现原生般的观感和体验。

### 专注于性能

Ionic 旨在最新的移动设备上以最佳性能运行，采用了高效硬件加速过渡和触摸优化手势等最佳实践。

### 简洁、美观且实用的设计

Ionic 设计精巧，能在所有当前的移动设备和平台上出色地工作和显示。借助现成的组件、排版以及一个华丽（且可扩展）并适配各平台的基准主题，您将能构建出风格出众的应用。

### 原生与 Web 优化

Ionic 模拟原生应用的 UI 指南并使用原生 SDK，将原生应用的用户界面标准和设备特性与开放网络的强大功能和灵活性相结合。Ionic 使用 Capacitor（或 Cordova）进行原生部署，或作为渐进式 Web 应用（PWA）在浏览器中运行。

## 目标

### 跨平台

构建和部署能在多个平台上运行的应用，例如原生 iOS、Android 以及作为渐进式 Web 应用的 Web 端——全部只需一套代码。一次编写，处处运行。

### 基于 Web 标准

Ionic 建立在可靠、[标准化的 Web 技术](reference/glossary.md#web-standards) 之上：HTML、CSS 和 JavaScript，并使用现代 Web API，如自定义元素（Custom Elements）和影子 DOM（Shadow DOM）。因此，Ionic 组件拥有稳定的 API，不受单一平台供应商的摆布。

### 优美设计

简洁、美观且实用。Ionic 设计精良，开箱即用，在所有平台上都能出色地工作和显示。从预设计的组件、排版、交互范式以及一个华丽（且可扩展）的基准主题开始。

### 简单易用

Ionic 的设计秉承简洁理念，让创建应用成为一种享受，易于学习，并且几乎任何具备 Web 开发技能的人都可以上手。

## 框架兼容性

虽然 Ionic 过去的版本与 Angular 紧密耦合，但框架的 4.x 版本经过重新设计，可以作为独立的 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web 组件</a> 库工作，并与 Angular 等最新的 JavaScript 框架集成。Ionic 可以成功用于大多数前端框架，包括 React 和 Vue，尽管某些框架需要垫片（shim）以获得完整的 Web 组件支持。

### JavaScript

将 Ionic 迁移到 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web 组件</a> 的主要目标之一是消除对单一框架的硬性依赖来承载组件。这使得核心组件可以仅通过一个脚本标签在网页中独立工作。虽然使用框架对于大型团队和大型应用可能很棒，但现在即使在像 WordPress 这样的上下文中，也可以在单页应用中将 Ionic 作为独立库使用。

### Angular

Angular 一直是 Ionic 卓越表现的核心。虽然核心组件已编写为独立的 Web 组件库，但 `@ionic/angular` 包使得与 Angular 生态系统的集成变得轻而易举。`@ionic/angular` 包含了 Angular 开发者从 Ionic 2/3 转向时所期望的所有功能，并与 Angular 核心库（如 Angular 路由器）集成。

### React

Ionic 现已正式支持流行的 React 库。Ionic React 让 React 开发者能够利用他们现有的 Web 技能来构建针对 iOS、Android 和 Web 的应用。通过 `@ionic/react`，您可以使用所有核心 Ionic 组件，但其使用方式感觉就像在使用原生 React 组件。

### Vue

Ionic 现已正式支持流行的 Vue 3 库。Ionic Vue 让 Vue 开发者能够利用他们现有的 Web 技能来构建针对 iOS、Android 和 Web 的应用。通过 `@ionic/vue`，您可以使用所有核心 Ionic 组件，但其使用方式感觉就像在使用原生 Vue 组件。

### 未来支持

将在未来版本中考虑支持其他框架。

## Ionic CLI

官方的 [Ionic CLI](cli.md)（命令行界面）是一个工具，可以快速搭建 Ionic 应用，并为 Ionic 开发者提供许多有用的命令。除了安装和更新 Ionic 之外，CLI 还内置了开发服务器、构建和调试工具等。如果您是 [Appflow](#appflow) 会员，CLI 还可用于执行云构建和部署，以及管理您的帐户。

## Appflow

为了帮助构建、部署和管理 Ionic 应用在整个生命周期中的运行，我们为生产应用提供了一项名为 <a href="https://ionic.io/appflow" target="_blank">Appflow</a> 的商业服务，**它独立于开源框架。**

Appflow 帮助开发者和团队从集中的仪表板编译原生应用构建版本，并向 Ionic 应用部署实时代码更新。可选的付费升级可用于更高级的功能，如直接发布到应用商店、工作流自动化、单点登录（SSO）以及访问连接的服务和集成。

Appflow 需要一个 <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic 账户</a>，并为那些有兴趣试用其部分功能的用户提供免费的“Hobby”计划。

## 生态系统

Ionic 由一个核心团队全职积极开发和维护，其生态系统由一个国际开发者社区和贡献者指导，推动其成长和采用。大大小小的开发者和公司都在使用 Ionic 来构建和发布能在各处运行的出色应用。

### 加入社区

全球超过 200 个国家有数百万 Ionic 开发者。以下是加入的一些方式：

<!-- prettier-ignore -->
- <a href="https://forum.ionicframework.com/" target="_blank">论坛：</a> 提问和分享想法的好地方。
- <a href="https://twitter.com/ionicframework" target="_blank">Twitter：</a> 我们在此发布更新并分享来自 Ionic 社区的内容。
- <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub：</a> 报告错误或请求新功能，请在此创建 issue。欢迎提交 PR！
- <a href="https://ionicframework.com/contributors" target="_blank">内容创作：</a> 撰写技术博客或与 Ionic 社区分享您的故事。

## 许可证

Ionic UI 工具包是一个免费的开源项目，根据宽松的 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT 许可证</a> 发布。这意味着它可以免费用于个人或商业项目。MIT 是与 jQuery 和 Ruby on Rails 等流行项目相同的许可证。

本文档内容（位于 <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a> 仓库中）遵循 <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 许可证</a>。