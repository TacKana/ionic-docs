---
title: Ionic 框架入门
sidebar_label: 概述
slug: /
hide_table_of_contents: true
demoUrl: https://ionic-docs-demo-v6.vercel.app/
demoSourceUrl: https://github.com/ionic-team/docs-demo/tree/6.x
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>开源 UI 工具包 - 打造专属移动应用</title>
  <meta
    name="description"
    content="Ionic Framework 是一个开源 UI 工具包，可通过 Web 技术构建专属移动应用，并集成了 Angular、React、Vue 等流行框架。"
  />
  <link rel="canonical" href="https://ionicframework.com/docs" />
  <link rel="alternate" href="https://ionicframework.com/docs" hreflang="x-default" />
  <link rel="alternate" href="https://ionicframework.com/docs" hreflang="en" />
  <meta property="og:url" content="https://ionicframework.com/docs" />
</head>

Ionic 是一款开源 UI 工具包，用于通过 Web 技术（HTML、CSS 和 JavaScript）构建高性能、高质量的移动应用，并集成了 [Angular](angular/overview.md)、[React](react/overview.md) 和 [Vue](vue/overview.md) 等流行框架。

立即开始构建你的应用：[安装 Ionic](intro/cli.md) 或跟随我们的[首个应用教程](intro/next.md#build-your-first-app) 学习核心概念。

<intro-end />

<DocsCards>
  <DocsCard header="安装指南" href="/intro/cli" icon="/icons/guide-installation-icon.svg" hoverIcon="/icons/guide-installation-icon-hover.svg">
    <p>逐步指导你设置开发环境并安装框架。</p>
  </DocsCard>

<DocsCard
  header="UI 组件"
  href="/components"
  icon="/icons/guide-components-icon.svg"
  hoverIcon="/icons/guide-components-icon-hover.svg"
>
  <p>深入探索 Ionic 精心设计的 UI 组件库。</p>
</DocsCard>

<DocsCard
  header="原生功能"
  href="/native"
  icon="/icons/guide-native-icon.svg"
  hoverIcon="/icons/guide-native-icon-hover.svg"
>
  <p>集成蓝牙、地图、HealthKit 等原生设备插件。</p>
</DocsCard>

  <DocsCard header="主题定制" href="/theming/basics" icon="/icons/guide-theming-icon.svg" hoverIcon="/icons/guide-theming-icon-hover.svg">
    <p>学习如何轻松定制和修改 Ionic 应用的视觉设计，以匹配你的品牌风格。</p>
  </DocsCard>
</DocsCards>

## 概述

Ionic 专注于应用的前端用户体验和 UI 交互——包括 UI 控件、交互、手势和动画。它易于学习，并能与 [Angular](angular/overview.md)、[React](react/overview.md) 或 [Vue](vue/overview.md) 等其他库或框架集成。你也可以通过简单的[脚本引入](intro/cdn.md)方式，独立使用 Ionic 而无需任何前端框架。如果你想在深入学习前了解更多关于 Ionic 的信息，我们<a href="https://youtu.be/p3AN3igqiRc" target="_blank">制作了一个视频</a>带你了解基础知识。

### 一套代码，处处运行

Ionic 是唯一能让 Web 开发者通过单一代码库为所有主流应用商店和移动 Web 构建应用的移动应用开发栈。借助[自适应样式](theming/platform-styles.md)，Ionic 应用能在每台设备上都呈现出原生般的观感和体验。

### 专注性能表现

Ionic 旨在通过高效的硬件加速转场和针对触摸优化的手势等最佳实践，在最新的移动设备上实现卓越的性能表现和行为。

### 简洁、优雅且功能化的设计

Ionic 设计得能在所有当前的移动设备和平台上出色地工作和显示。凭借现成的组件、排版以及精美（且可扩展）的基础主题（能适配每个平台），你将能打造出风格出众的应用。

### 原生与 Web 双重优化

Ionic 模拟原生应用的 UI 指南并使用原生 SDK，将原生应用的 UI 标准和设备特性与开放 Web 的全部能力和灵活性相结合。Ionic 使用 Capacitor（或 Cordova）进行原生部署，或作为渐进式 Web 应用在浏览器中运行。

## 目标

### 跨平台

构建并部署能在多个平台（如原生 iOS、Android 以及作为渐进式 Web 应用的 Web 端）上运行的应用——全部使用一套代码库。一次编写，处处运行。

### 基于 Web 标准

Ionic 建立在可靠、[标准化的 Web 技术](reference/glossary.md#web-standards)之上：HTML、CSS 和 JavaScript，并使用了自定义元素和 Shadow DOM 等现代 Web API。正因如此，Ionic 组件拥有稳定的 API，不会受制于单一平台供应商的随意变更。

### 精美设计

简洁、优雅且功能化。Ionic 设计得开箱即用，在所有平台上都能出色地工作和显示。你可以从预先设计的组件、排版、交互范式以及精美（且可扩展）的基础主题开始。

### 简单易用

Ionic 以简单易用为设计理念，使得创建应用成为一种享受，易于学习，并且几乎任何具备 Web 开发技能的人都能上手。

## 框架兼容性

虽然 Ionic 的早期版本与 Angular 紧密耦合，但框架的 4.x 版本经过重构，可以作为独立的 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web 组件</a> 库工作，并集成了 Angular 等最新的 JavaScript 框架。Ionic 可以在大多数前端框架中成功使用，包括 React 和 Vue，尽管某些框架需要垫片才能获得完整的 Web 组件支持。

### JavaScript

将 Ionic 迁移到 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web 组件</a> 的主要目标之一是消除对单一框架的硬性依赖。这使得核心组件能够仅通过一个 script 标签就在网页中独立工作。虽然使用框架对于大型团队和大型应用来说非常棒，但现在即使在像 WordPress 这样的单页面上下文中，也可以将 Ionic 作为独立库使用。

### Angular

Angular 一直是 Ionic 卓越表现的核心。虽然核心组件已编写为独立的 Web 组件库，但 `@ionic/angular` 包使得与 Angular 生态系统的集成变得轻而易举。`@ionic/angular` 包含了 Angular 开发者从 Ionic 2/3 过渡时期望的所有功能，并与 Angular 核心库（如 Angular 路由器）集成。

### React

Ionic 现已正式支持流行的 React 库。Ionic React 让 React 开发者能够利用他们现有的 Web 技能来构建面向 iOS、Android 和 Web 的应用。通过 `@ionic/react`，你可以使用所有核心 Ionic 组件，但体验上就像在使用原生 React 组件一样。

### Vue

Ionic 现已正式支持流行的 Vue 3 库。Ionic Vue 让 Vue 开发者能够利用他们现有的 Web 技能来构建面向 iOS、Android 和 Web 的应用。通过 `@ionic/vue`，你可以使用所有核心 Ionic 组件，但体验上就像在使用原生 Vue 组件一样。

### 未来支持

未来版本将考虑支持其他框架。

## Ionic CLI

官方的 [Ionic CLI](cli.md)，即命令行界面，是一个快速搭建 Ionic 应用并为 Ionic 开发者提供许多有用命令的工具。除了安装和更新 Ionic 之外，CLI 还内置了开发服务器、构建和调试工具等。如果你是 [Appflow](#appflow) 会员，CLI 可用于执行云端构建和部署，并管理你的账户。

## Appflow

为了帮助在整个生命周期中构建、部署和管理 Ionic 应用，我们为生产应用提供了一项名为 <a href="https://ionic.io/appflow" target="_blank">Appflow</a> 的商业服务，该服务<strong>独立于开源框架。</strong>

Appflow 帮助开发者和团队从集中式仪表板编译原生应用构建包，并向 Ionic 应用部署实时代码更新。付费升级选项可提供更高级的功能，如直接发布到应用商店、工作流自动化、单点登录（SSO）以及访问连接的服务和集成。

Appflow 需要一个 <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic 账户</a>，并为那些有兴趣尝试其部分功能的用户提供了免费的 "Hobby" 计划。

## 生态系统

Ionic 由一支核心团队全职积极开发和维护，其生态系统由国际开发者社区和贡献者指导，推动着它的发展和采用。大大小小的开发者和公司都使用 Ionic 来构建和发布能在任何地方运行的出色应用。

### 加入社区

全球超过 200 个国家有数百万 Ionic 开发者。以下是一些加入方式：

<!-- prettier-ignore -->
- <a href="https://forum.ionicframework.com/" target="_blank">论坛：</a> 提问和分享想法的绝佳场所。
- <a href="https://twitter.com/ionicframework" target="_blank">Twitter：</a> 我们在此发布更新并分享来自 Ionic 社区的内容。
- <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub：</a> 报告错误或请求新功能，请在此创建 issue。欢迎提交 PR！
- <a href="https://ionicframework.com/contributors" target="_blank">内容创作：</a> 撰写技术博客或与 Ionic 社区分享你的故事。

## 许可证

Ionic UI 工具包是一个免费开源项目，在宽松的 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT 许可证</a>下发布。这意味着它可以免费用于个人或商业项目。MIT 是与 jQuery 和 Ruby on Rails 等流行项目相同的许可证。

此文档内容（位于 <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a> 仓库中）在 <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 许可证</a>下授权。