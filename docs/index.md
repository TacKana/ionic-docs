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
    content="Ionic Framework 是一个开源 UI 工具包，可使用 Web 技术创建您自己的移动应用，并支持与流行框架集成。"
  />
  <link rel="canonical" href="https://ionicframework.com/docs" />
  <link rel="alternate" href="https://ionicframework.com/docs" hreflang="x-default" />
  <link rel="alternate" href="https://ionicframework.com/docs" hreflang="en" />
  <meta property="og:url" content="https://ionicframework.com/docs" />
</head>

Ionic 是一个开源 UI 工具包，用于使用 Web 技术（HTML、CSS 和 JavaScript）构建高性能、高质量的移动应用，并支持与 [Angular](angular/overview.md)、[React](react/overview.md) 和 [Vue](vue/overview.md) 等流行框架集成。

开始构建吧，可以[安装 Ionic](intro/cli.md) 或按照我们的[首个应用教程](intro/next.md#构建您的第一个应用)来学习主要概念。

<intro-end />

<DocsCards>
  <DocsCard header="安装指南" href="/intro/cli" icon="/icons/guide-installation-icon.svg" hoverIcon="/icons/guide-installation-icon-hover.svg">
    <p>设置系统并安装框架的逐步指南。</p>
  </DocsCard>

<DocsCard
  header="UI 组件"
  href="/components"
  icon="/icons/guide-components-icon.svg"
  hoverIcon="/icons/guide-components-icon-hover.svg"
>
  <p>深入了解 Ionic 精美设计的 UI 组件库。</p>
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
    <p>学习如何轻松定制和修改 Ionic 应用的视觉设计以契合您的品牌。</p>
  </DocsCard>
</DocsCards>

## 概述

Ionic 专注于应用的前端用户体验和 UI 交互——UI 控件、交互、手势、动画。它易于学习，并可与 [Angular](angular/overview.md)、[React](react/overview.md) 或 [Vue](vue/overview.md) 等其他库或框架集成。或者，也可以通过简单的[脚本引入](intro/cdn.md)将其作为独立库使用，无需任何前端框架。如果您想先了解 Ionic 再深入学习，我们<a href="https://youtu.be/p3AN3igqiRc" target="_blank">制作了一个视频</a>带您了解基础知识。

### 一套代码，到处运行

Ionic 是唯一能够让 Web 开发者从单一代码库为所有主流应用商店和移动 Web 构建应用的移动应用技术栈。借助[自适应样式](theming/platform-styles.md)，Ionic 应用在每个设备上都能呈现出原生般的外观和体验。

### 专注性能

Ionic 旨在最新的移动设备上表现出色，采用了高效的硬件加速过渡和触摸优化手势等最佳实践。

### 简洁、清晰且实用的设计

Ionic 设计用于在所有当前移动设备和平台上完美运行和显示。借助现成的组件、排版以及一个精美（且可扩展）并能适应每个平台的基础主题，您将能够以优雅的风格进行构建。

### 原生与 Web 双优化

Ionic 模拟原生应用的 UI 规范并使用原生 SDK，将原生应用的 UI 标准和设备功能与开放 Web 的强大功能和灵活性相结合。Ionic 使用 Capacitor（或 Cordova）进行原生部署，也可以在浏览器中作为渐进式 Web 应用运行。

## 目标

### 跨平台

构建并部署可跨多个平台运行的应用，如原生 iOS、Android 以及作为渐进式 Web 应用的 Web——全部使用同一套代码库。一次编写，到处运行。

### 基于 Web 标准

Ionic 构建于可靠的[标准化 Web 技术](reference/glossary.md#web-standards)之上：HTML、CSS 和 JavaScript，并使用现代 Web API，如 Custom Elements 和 Shadow DOM。因此，Ionic 组件拥有稳定的 API，不受单一平台供应商的制约。

### 美观的设计

简洁、清晰且实用。Ionic 设计开箱即用，在所有平台上都能完美运行和显示。从预先设计的组件、排版、交互范式和一个精美（且可扩展）的基础主题开始。

### 简洁性

Ionic 以简洁为设计理念，使创建应用变得愉快、易于学习，并且几乎任何拥有 Web 开发技能的人都可以上手。

## 框架兼容性

虽然早期版本的 Ionic 与 Angular 紧密耦合，但 4.x 版本已重新设计为独立的 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Component</a> 库，并支持与最新的 JavaScript 框架（如 Angular）集成。Ionic 可以成功地在大多数前端框架中使用，包括 React 和 Vue，不过某些框架需要 shim 来完全支持 Web Component。

### JavaScript

将 Ionic 迁移到 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Components</a> 的主要目标之一就是消除对单一框架承载组件的硬性要求。这使得核心组件只需一个 script 标签就能在网页中独立运行。虽然对于大型团队和大型应用来说，使用框架可能更合适，但现在也可以将 Ionic 作为独立库在单页面中使用，甚至是在 WordPress 这样的环境中。

### Angular

Angular 一直是 Ionic 出色的核心所在。虽然核心组件已编写为独立的 Web Component 库，但 `@ionic/angular` 包使得与 Angular 生态系统的集成变得轻而易举。`@ionic/angular` 包含了 Angular 开发者从 Ionic 2/3 中期望获得的所有功能，并与 Angular 核心库（如 Angular router）集成。

### React

Ionic 现已正式支持流行的 React 库。Ionic React 让 React 开发者能够利用现有的 Web 技能构建面向 iOS、Android 和 Web 的应用。使用 `@ionic/react`，您可以运用所有核心 Ionic 组件，并且感觉就像在使用原生的 React 组件一样。

### Vue

Ionic 现已正式支持流行的 Vue 3 库。Ionic Vue 让 Vue 开发者能够利用现有的 Web 技能构建面向 iOS、Android 和 Web 的应用。使用 `@ionic/vue`，您可以运用所有核心 Ionic 组件，并且感觉就像在使用原生的 Vue 组件一样。

### 未来支持

对其他框架的支持将在未来版本中考虑。

## Ionic CLI

官方的 [Ionic CLI](cli.md)，即命令行界面，是一个能够快速搭建 Ionic 应用并为 Ionic 开发者提供大量实用命令的工具。除了安装和更新 Ionic，CLI 还附带内置的开发服务器、构建和调试工具等。如果您是 [Appflow](#appflow) 会员，还可以使用 CLI 执行云端构建和部署，并管理您的帐户。

## Appflow

为了帮助构建、部署和管理 Ionic 应用的全生命周期，我们为生产应用提供了一项名为 <a href="https://ionic.io/appflow" target="_blank">Appflow</a> 的商业服务，该服务<strong>独立于开源框架</strong>。

Appflow 帮助开发者和团队从集中式仪表板编译原生应用构建并部署实时代码更新到 Ionic 应用。可选的付费升级可用于更高级的功能，如直接发布到应用商店、工作流自动化、单点登录 (SSO) 以及访问连接的服务和集成。

Appflow 需要一个 <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic 帐户</a>，并为有兴趣尝试其某些功能的用户提供免费的 "Hobby" 计划。

## 生态系统

Ionic 由核心团队全职积极开发和维护，其生态系统由一个国际化的开发者和贡献者社区引导，推动其成长和普及。无论规模大小的开发者和公司都在使用 Ionic 构建和发布令人惊叹的应用，这些应用可在任何地方运行。

### 加入社区

全球有超过 200 个国家的数百万 Ionic 开发者。以下是一些加入方式：

<!-- prettier-ignore -->
- <a href="https://forum.ionicframework.com/" target="_blank">论坛：</a>提问和分享想法的好地方。
- <a href="https://twitter.com/ionicframework" target="_blank">Twitter：</a>我们在此发布更新并分享 Ionic 社区的内容。
- <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub：</a>用于报告错误或请求新功能，请在此创建 issue。欢迎 PR！
- <a href="https://ionicframework.com/contributors" target="_blank">内容创作：</a>撰写技术博客或与 Ionic 社区分享您的故事。

## 许可证

Ionic UI 工具包是一个免费的开源项目，采用宽松的 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT 许可证</a>发布。这意味着它可以在个人或商业项目中免费使用。MIT 也是诸如 jQuery 和 Ruby on Rails 等流行项目所使用的相同许可证。

本文档内容（位于 <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a> 仓库中）采用 <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 许可证</a>授权。
