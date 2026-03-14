---
title: Ionic 简介
sidebar_label: 概述
slug: /
hide_table_of_contents: true
demoUrl: https://ionic-docs-demo-v7.vercel.app/
demoSourceUrl: https://github.com/ionic-team/docs-demo/tree/7.x
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>开源 UI 工具包，打造专属移动应用</title>
  <meta
    name="description"
    content="Ionic Framework 是一个开源 UI 工具包，可利用 Web 技术结合流行框架集成来创建专属移动应用。"
  />
  <link rel="canonical" href="https://ionicframework.com/docs" />
  <link rel="alternate" href="https://ionicframework.com/docs" hreflang="x-default" />
  <link rel="alternate" href="https://ionicframework.com/docs" hreflang="en" />
  <meta property="og:url" content="https://ionicframework.com/docs" />
</head>

Ionic 是一个开源 UI 工具包，用于使用 Web 技术（HTML、CSS 和 JavaScript）构建高性能、高质量的移动应用，并集成了 [Angular](angular/overview.md)、[React](react/overview.md) 和 [Vue](vue/overview.md) 等流行框架。

通过 [安装 Ionic](intro/cli.md) 或按照我们的 [首个应用教程](intro/next.md#build-your-first-app) 开始构建，以了解主要概念。

<intro-end />

<DocsCards>
  <DocsCard header="安装指南" href="/intro/cli" icon="/icons/guide-installation-icon.svg" hoverIcon="/icons/guide-installation-icon-hover.svg">
    <p>逐步指导您设置系统并安装框架。</p>
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
  <p>集成原生设备插件，如蓝牙、地图、HealthKit 等。</p>
</DocsCard>

  <DocsCard header="主题定制" href="/theming/basics" icon="/icons/guide-theming-icon.svg" hoverIcon="/icons/guide-theming-icon-hover.svg">
    <p>学习轻松自定义和修改 Ionic 应用的视觉设计，以符合您的品牌形象。</p>
  </DocsCard>
</DocsCards>

## 概述

Ionic 专注于应用的前端用户体验和 UI 交互——UI 控件、交互、手势、动画。它易于学习，并能与其他库或框架（如 [Angular](angular/overview.md)、[React](react/overview.md) 或 [Vue](vue/overview.md)）集成。或者，也可以使用简单的 [脚本引入](intro/cdn.md) 方式独立使用，无需任何前端框架。如果您想在深入学习之前了解更多关于 Ionic 的信息，我们 <a href="https://youtu.be/p3AN3igqiRc" target="_blank">制作了一个视频</a> 带您了解基础知识。

### 一套代码，随处运行

Ionic 是唯一能让 Web 开发者通过单一代码库为所有主流应用商店和移动 Web 构建应用的移动应用技术栈。借助 [自适应样式](theming/platform-styles.md)，Ionic 应用在各种设备上都能呈现原生般的观感和体验。

### 专注性能

Ionic 旨在最新的移动设备上提供卓越的性能和表现，采用了高效硬件加速过渡和触摸优化手势等最佳实践。

### 简洁、优雅且实用的设计

Ionic 的设计确保在所有当前移动设备和平台上都能完美运行和显示。借助现成的组件、排版以及精美（且可扩展）的基础主题（能适配每个平台），您将能轻松构建风格统一的应用。

### 原生与 Web 双重优化

Ionic 遵循原生应用 UI 准则，并使用原生 SDK，将原生应用的 UI 标准和设备功能与开放 Web 的全部能力和灵活性相结合。Ionic 使用 Capacitor（或 Cordova）进行原生部署，或作为渐进式 Web 应用在浏览器中运行。

## 目标

### 跨平台

构建和部署可在多个平台（如原生 iOS、Android 以及作为渐进式 Web 应用的 Web 端）运行的应用——全部使用一套代码库。一次编写，随处运行。

### 基于 Web 标准

Ionic 建立在可靠、[标准化的 Web 技术](reference/glossary.md#web-standards) 之上：HTML、CSS 和 JavaScript，并使用了现代 Web API（如自定义元素和 Shadow DOM）。因此，Ionic 组件拥有稳定的 API，不会受单一平台供应商的制约。

### 精美设计

简洁、优雅且实用。Ionic 开箱即用，旨在所有平台上都能完美运行和显示。从预设计的组件、排版、交互范式以及精美（且可扩展）的基础主题开始。

### 简单易用

Ionic 以简洁为设计理念，使得创建应用变得愉快、易于学习，并且几乎任何具备 Web 开发技能的人都能上手。

## 框架兼容性

虽然 Ionic 过去的版本与 Angular 紧密耦合，但框架的 4.x 版本经过重新设计，可作为独立的 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web 组件</a> 库使用，并集成了 Angular 等最新 JavaScript 框架。Ionic 可以成功用于大多数前端框架，包括 React 和 Vue，尽管某些框架需要垫片（shim）来获得完整的 Web 组件支持。

### JavaScript

将 Ionic 迁移到 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web 组件</a> 的主要目标之一是取消对单一框架托管组件的硬性要求。这使得核心组件能够仅通过脚本标签在网页中独立运行。虽然使用框架对于大型团队和大型应用可能很棒，但现在甚至可以在像 WordPress 这样的环境中，将 Ionic 作为独立库在单页中使用。

### Angular

Angular 一直是 Ionic 卓越表现的核心。虽然核心组件已编写为独立的 Web 组件库，但 `@ionic/angular` 包使得与 Angular 生态系统的集成变得轻而易举。`@ionic/angular` 包含了 Angular 开发者从 Ionic 2/3 中期望的所有功能，并与 Angular 核心库（如 Angular 路由器）集成。

### React

Ionic 现已正式支持流行的 React 库。Ionic React 让 React 开发者利用现有的 Web 技能构建针对 iOS、Android 和 Web 的应用。通过 `@ionic/react`，您可以使用所有核心 Ionic 组件，但体验如同使用原生 React 组件。

### Vue

Ionic 现已正式支持流行的 Vue 3 库。Ionic Vue 让 Vue 开发者利用现有的 Web 技能构建针对 iOS、Android 和 Web 的应用。通过 `@ionic/vue`，您可以使用所有核心 Ionic 组件，但体验如同使用原生 Vue 组件。

### 未来支持

未来版本将考虑支持其他框架。

## Ionic CLI

官方的 [Ionic CLI](cli.md)（命令行界面）是一个快速搭建 Ionic 应用并为 Ionic 开发者提供许多有用命令的工具。除了安装和更新 Ionic 外，CLI 还内置了开发服务器、构建和调试工具等更多功能。如果您是 [Appflow](#appflow) 成员，CLI 可用于执行云构建和部署，并管理您的账户。

## Appflow

为了帮助构建、部署和管理 Ionic 应用在整个生命周期中的运行，我们为生产应用提供了一项商业服务，名为 <a href="https://ionic.io/appflow" target="_blank">Appflow</a>，它 <strong>独立于开源框架。</strong>

Appflow 帮助开发者和团队从集中式仪表板编译原生应用构建，并向 Ionic 应用部署实时代码更新。可选付费升级可用于更高级的功能，如直接发布到应用商店、工作流自动化、单点登录（SSO）以及访问连接的服务和集成。

Appflow 需要 <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic 账户</a>，并为有兴趣试用其部分功能的用户提供了免费的“Hobby”计划。

## 生态系统

Ionic 由核心团队全职积极开发和维护，其生态系统由国际开发者社区和贡献者引导，推动其发展和采用。大大小小的开发者和公司使用 Ionic 来构建和发布可在任何地方运行的出色应用。

### 加入社区

全球超过 200 个国家有数百万 Ionic 开发者。以下是加入的一些方式：

<!-- prettier-ignore -->
- <a href="https://forum.ionicframework.com/" target="_blank">论坛：</a> 提问和分享想法的好地方。
- <a href="https://twitter.com/ionicframework" target="_blank">Twitter：</a> 我们在此发布更新并分享 Ionic 社区的内容。
- <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub：</a> 报告错误或请求新功能，请在此创建 issue。欢迎提交 PR！
- <a href="https://ionicframework.com/contributors" target="_blank">内容创作：</a> 撰写技术博客或与 Ionic 社区分享您的故事。

## 许可证

Ionic UI 工具包是一个免费的开源项目，根据宽松的 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT 许可证</a> 发布。这意味着它可以免费用于个人或商业项目。MIT 是 jQuery 和 Ruby on Rails 等流行项目使用的相同许可证。

本文档内容（位于 <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a> 仓库中）根据 <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 许可证</a> 授权。