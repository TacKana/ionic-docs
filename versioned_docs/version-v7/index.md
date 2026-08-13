---
title: Ionic 简介
sidebar_label: 概览
slug: /
hide_table_of_contents: true
demoUrl: https://ionic-docs-demo-v7.vercel.app/
demoSourceUrl: https://github.com/ionic-team/docs-demo/tree/7.x
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>开源 UI 工具包，用于创建您自己的移动应用</title>
  <meta
    name="description"
    content="Ionic Framework 是一个开源的 UI 工具包，可使用 Web 技术创建您自己的移动应用，并支持与主流框架集成。"
  />
  <link rel="canonical" href="https://ionicframework.com/docs" />
  <link rel="alternate" href="https://ionicframework.com/docs" hreflang="x-default" />
  <link rel="alternate" href="https://ionicframework.com/docs" hreflang="en" />
  <meta property="og:url" content="https://ionicframework.com/docs" />
</head>

Ionic 是一个开源的 UI 工具包，用于使用 Web 技术（HTML、CSS 和 JavaScript）构建高性能、高质量的移动应用，并支持与 [Angular](angular/overview.md)、[React](react/overview.md) 和 [Vue](vue/overview.md) 等主流框架集成。

通过[安装 Ionic](intro/cli.md) 开始构建，或按照我们的[首个应用教程](intro/next.md#构建您的第一个应用)学习主要概念。

<intro-end />

<DocsCards>
  <DocsCard header="安装指南" href="/intro/cli" icon="/icons/guide-installation-icon.svg" hoverIcon="/icons/guide-installation-icon-hover.svg">
    <p>设置系统并安装框架的分步指南。</p>
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
    <p>学习如何轻松定制和修改 Ionic 应用的视觉设计，以契合您的品牌。</p>
  </DocsCard>
</DocsCards>

## 概览

Ionic 专注于应用的前端用户体验和 UI 交互——包括 UI 控件、交互、手势、动画。它易于学习，并可与 [Angular](angular/overview.md)、[React](react/overview.md) 或 [Vue](vue/overview.md) 等其他库或框架集成。或者，也可以通过简单的[脚本引入](intro/cdn.md)方式独立使用，无需任何前端框架。如果您想在深入了解之前先了解 Ionic 的更多信息，我们<a href="https://youtu.be/p3AN3igqiRc" target="_blank">制作了一个视频</a>带您了解基础知识。

### 同一代码库，随处运行

Ionic 是唯一能够使 Web 开发者从单一代码库构建适用于所有主要应用商店和移动 Web 的应用的移动应用栈。借助[自适应样式](theming/platform-styles.md)，Ionic 应用在每个设备上都能呈现原生的外观和体验。

### 专注于性能

Ionic 旨在最新的移动设备上以最佳性能运行，采用了高效硬件加速过渡和触控优化手势等最佳实践。

### 简洁、清晰、实用的设计

Ionic 的设计使其在所有当前移动设备和平台上都能完美工作和显示。凭借现成的组件、排版以及一个华丽（且可扩展）的、适应每个平台的基础主题，您将能够以时尚的方式构建应用。

### 原生与 Web 优化

Ionic 模拟原生应用 UI 规范并使用原生 SDK，将原生应用的 UI 标准和设备功能与开放 Web 的全部能力和灵活性相结合。Ionic 使用 Capacitor（或 Cordova）进行原生部署，或作为渐进式 Web 应用在浏览器中运行。

## 目标

### 跨平台

构建和部署可在多个平台上运行的应用，例如原生 iOS、Android 以及作为渐进式 Web 应用在 Web 上运行——全部基于同一代码库。一次编写，随处运行。

### 基于 Web 标准

Ionic 构建于可靠且[标准化的 Web 技术](reference/glossary.md#web-standards)之上：HTML、CSS 和 JavaScript，并使用自定义元素和 Shadow DOM 等现代 Web API。因此，Ionic 组件拥有稳定的 API，不受单一平台供应商的影响。

### 精美的设计

简洁、清晰、实用。Ionic 的设计使其在所有平台上开箱即用，呈现精美的显示效果。从预先设计的组件、排版、交互范式和一个华丽（且可扩展）的基础主题开始。

### 简单性

Ionic 以简洁为设计理念，使创建应用变得愉快、易于学习，并且几乎任何具备 Web 开发技能的人都可以轻松上手。

## 框架兼容性

虽然过去版本的 Ionic 与 Angular 紧密耦合，但 4.x 版本的框架已经重新设计，可作为独立的 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Component</a> 库使用，并与最新的 JavaScript 框架（如 Angular）集成。Ionic 可以成功地在大多数前端框架中使用，包括 React 和 Vue，但某些框架需要 shim 才能完全支持 Web Component。

### JavaScript

将 Ionic 迁移到 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Components</a> 的主要目标之一是消除对单一框架托管组件的硬性要求。这使得核心组件只需一个 script 标签就能独立在网页中运行。虽然对于大型团队和大型应用来说，使用框架可能更好，但现在可以将 Ionic 作为独立库在单个页面中使用，甚至在 WordPress 这样的环境中也可以。

### Angular

Angular 一直是 Ionic 卓越表现的核心所在。虽然核心组件已编写为独立的 Web Component 库，但 `@ionic/angular` 包使得与 Angular 生态系统的集成变得轻而易举。`@ionic/angular` 包含了 Angular 开发者从 Ionic 2/3 过渡时所期望的所有功能，并与核心 Angular 库（如 Angular router）集成。

### React

Ionic 现已正式支持流行的 React 库。Ionic React 让 React 开发者能够利用现有的 Web 技能构建面向 iOS、Android 和 Web 的应用。通过 `@ionic/react`，您可以使用所有核心 Ionic 组件，而且体验上如同使用原生 React 组件一样。

### Vue

Ionic 现已正式支持流行的 Vue 3 库。Ionic Vue 让 Vue 开发者能够利用现有的 Web 技能构建面向 iOS、Android 和 Web 的应用。通过 `@ionic/vue`，您可以使用所有核心 Ionic 组件，而且体验上如同使用原生 Vue 组件一样。

### 未来支持

对其他框架的支持将在未来版本中考虑。

## Ionic CLI

官方 [Ionic CLI](cli.md)，即命令行界面，是一个快速搭建 Ionic 应用并提供大量有用命令的工具。除了安装和更新 Ionic 之外，CLI 还带有内置的开发服务器、构建和调试工具等。如果您是 [Appflow](#appflow) 会员，CLI 还可用于执行云构建和部署以及管理您的账户。

## Appflow

为了帮助在整个生命周期内构建、部署和管理 Ionic 应用，我们为生产级应用提供了一项名为 <a href="https://ionic.io/appflow" target="_blank">Appflow</a> 的商业服务，该服务**与开源框架是分开的。**

Appflow 帮助开发者和团队编译原生应用构建，并通过集中式仪表板将实时代码更新部署到 Ionic 应用。可选择付费升级以获得更高级的功能，例如直接发布到应用商店、工作流自动化、单点登录 (SSO) 以及访问连接的服务和集成。

Appflow 需要一个 <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic 账户</a>，并为那些有兴趣体验其某些功能的用户提供免费的"Hobby"计划。

## 生态系统

Ionic 由一个核心团队全职积极开发和维护，其生态系统由一个国际化的开发者和贡献者社区引导，推动其成长和采用。大大小小的开发者和公司都在使用 Ionic 构建和发布能够在各处运行的出色应用。

### 加入社区

全球有超过 200 个国家的数百万 Ionic 开发者。以下是一些加入方式：

{/* 保留下面的 prettier-ignore。如果没有它，Prettier 会重新格式化这些列表项，导致页面无法构建。这些链接保持为 HTML，因为 target="_blank" 会在新标签页中打开它们，而 Markdown 链接无法做到这一点。 */}

{/* prettier-ignore */}
- <a href="https://forum.ionicframework.com/" target="_blank">论坛：</a>提问和分享想法的好地方。
- <a href="https://twitter.com/ionicframework" target="_blank">Twitter：</a>我们发布更新并与 Ionic 社区分享内容的地方。
- <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub：</a>用于报告 Bug 或请求新功能，请在此处创建 issue。欢迎提交 PR！
- <a href="https://ionicframework.com/contributors" target="_blank">内容创作：</a>撰写技术博客或与 Ionic 社区分享您的故事。

## 许可证

Ionic UI 工具包是一个免费的开源项目，采用宽松的 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT 许可证</a>发布。这意味着它可以免费用于个人或商业项目。MIT 也是 jQuery 和 Ruby on Rails 等流行项目使用的相同许可证。

本文档内容（位于 <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a> 仓库中）采用 <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 许可证</a>授权。
