---
sidebar_label: 概览
slug: /
title: 开源 UI 工具包，用于创建您的移动或桌面应用
description: Ionic Framework 是一个开源 UI 工具包，可使用 Web 技术并集成流行框架，创建您自己的移动和桌面应用。
hide_table_of_contents: true
demoUrl: https://ionic-docs-demo-v5.vercel.app/
demoSourceUrl: https://github.com/ionic-team/docs-demo/tree/5.x
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

# Ionic Framework

Ionic Framework 是一个开源 UI 工具包，用于使用 Web 技术（HTML、CSS 和 JavaScript）构建高性能、高质量的移动和桌面应用，并集成了 [Angular](angular/overview.md)、[React](react.md) 和 [Vue](vue/overview.md) 等流行框架。

通过[安装 Ionic](intro/cli.md) 或按照我们的[第一个应用教程](intro/next.md#build-your-first-app)来学习主要概念，开始构建。

<intro-end />

<DocsCards>
  <DocsCard header="安装指南" href="/intro/cli" icon="/icons/guide-installation-icon.svg" hover-icon="/icons/guide-installation-icon-hover.svg">
    <p>设置系统和安装框架的分步指南。</p>
  </DocsCard>

<DocsCard
  header="UI 组件"
  href="/components"
  icon="/icons/guide-components-icon.svg"
  hover-icon="/icons/guide-components-icon-hover.svg"
>
  <p>深入了解 Ionic Framework 设计精美的 UI 组件库。</p>
</DocsCard>

<DocsCard
  header="原生功能"
  href="/native"
  icon="/icons/guide-native-icon.svg"
  hover-icon="/icons/guide-native-icon-hover.svg"
>
  <p>集成原生设备插件，如蓝牙、地图、HealthKit 等。</p>
</DocsCard>

  <DocsCard header="主题定制" href="/theming/basics" icon="/icons/guide-theming-icon.svg" hover-icon="/icons/guide-theming-icon-hover.svg">
    <p>学习如何轻松自定义和修改 Ionic 应用的视觉设计，使其符合您的品牌形象。</p>
  </DocsCard>
</DocsCards>

## 概述

Ionic Framework 专注于应用的前端用户体验和 UI 交互——UI 控件、交互、手势、动画。它易于学习，并可与其他库或框架集成，如 [Angular](angular/overview.md)、[React](react.md) 或 [Vue](vue/overview.md)。或者，它也可以不依赖任何前端框架，通过简单的[脚本引用](intro/cdn.md)独立使用。如果您想在深入学习之前进一步了解 Ionic Framework，我们<a href="https://youtu.be/p3AN3igqiRc" target="_blank">制作了一个视频</a>带您了解基础知识。

### 同一代码库，处处运行

Ionic 是唯一能让 Web 开发者从单一代码库构建适用于所有主要应用商店和移动 Web 应用的移动应用技术栈。借助[自适应样式](theming/platform-styles.md)，Ionic 应用在每个设备上都能呈现出原生的外观和感觉。

### 专注于性能

Ionic 旨在最新的移动设备上表现出色，采用了高效硬件加速转场和触控优化手势等最佳实践。

### 干净、简洁且功能化的设计

Ionic 设计旨在所有当前移动设备和平台上都能美观地工作和显示。凭借现成的组件、排版和一个华丽（且可扩展的）基础主题，该主题可适应每个平台，您将能够时尚地构建应用。

### 原生与 Web 优化

Ionic 模拟原生应用 UI 规范并使用原生 SDK，将原生应用的 UI 标准和设备功能与开放 Web 的全部功能和灵活性相结合。Ionic 使用 Capacitor（或 Cordova）进行原生部署，或作为渐进式 Web 应用在浏览器中运行。

## 目标

### 跨平台

构建和部署可在多个平台上运行的应用，如原生 iOS、Android、桌面以及作为渐进式 Web 应用的 Web——全部使用同一代码库。一次编写，随处运行。

### 基于 Web 标准

Ionic Framework 建立在可靠的、[标准化的 Web 技术](reference/glossary#web-standards)之上：HTML、CSS 和 JavaScript，并使用现代 Web API，如 Custom Elements 和 Shadow DOM。因此，Ionic 组件具有稳定的 API，不受单一平台供应商的支配。

### 美观的设计

干净、简洁且功能化。Ionic Framework 设计为开箱即用，在所有平台上都能美观地工作和显示。
从预先设计的组件、排版、交互范式和一个华丽（且可扩展的）基础主题开始。

### 简洁性

Ionic Framework 以简洁为设计理念，使得创建 Ionic 应用变得愉快、易于学习，并且几乎任何有 Web 开发技能的人都能掌握。

## 框架兼容性

虽然过去版本的 Ionic 与 Angular 紧密耦合，但 4.x 版本的框架被重新设计为独立的 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Component</a> 库，并与最新的 JavaScript 框架（如 Angular）集成。Ionic 可以在大多数前端框架中成功使用，包括 React 和 Vue，但某些框架需要 shim 才能完全支持 Web Component。

### JavaScript

将 Ionic Framework 迁移到 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Components</a> 的主要目标之一是消除对单一框架来托管组件的硬性要求。这使得核心组件可以仅通过一个 script 标签在网页中独立工作。虽然使用框架对大型团队和大型应用来说很好，但现在可以在单个页面中将 Ionic 作为独立库使用，甚至在像 WordPress 这样的环境中也可以。

### Angular

Angular 一直是 Ionic 优秀特性的核心。虽然核心组件已编写为独立的 Web Component 库，但 `@ionic/angular` 包使得与 Angular 生态系统的集成变得轻而易举。`@ionic/angular` 包含了 Angular 开发者从 Ionic 2/3 迁移过来所期望的所有功能，并与核心 Angular 库（如 Angular 路由）集成。

### React

Ionic 现在正式支持流行的 React 库。Ionic React 让 React 开发者可以利用他们现有的 Web 技能构建针对 iOS、Android、Web 和桌面的应用。使用 `@ionic/react`，您可以使用所有核心 Ionic 组件，但感觉就像使用原生 React 组件一样。

### Vue

Ionic 现在正式支持流行的 Vue 3 库。Ionic Vue 让 Vue 开发者可以利用他们现有的 Web 技能构建针对 iOS、Android、Web 和桌面的应用。使用 `@ionic/vue`，您可以使用所有核心 Ionic 组件，但感觉就像使用原生 Vue 组件一样。

### 未来支持

对其他框架的支持将在未来版本中考虑。

## Ionic CLI

官方 [Ionic CLI](cli)（命令行界面）是一个可以快速搭建 Ionic 应用并为 Ionic 开发者提供大量有用命令的工具。除了安装和更新 Ionic 外，CLI 还附带内置的开发服务器、构建和调试工具等。如果您是 [Appflow](#ionic-appflow) 会员，CLI 还可用于执行云构建和部署，以及管理您的账户。

## Appflow

为了帮助在 Ionic 应用的整个生命周期中构建、部署和管理它们，我们为生产应用提供了一个名为 <a href="https://ionic.io/appflow" target="_blank">Appflow</a> 的商业服务，该服务<strong>与开源框架是分开的。</strong>

Appflow 帮助开发者和团队编译原生应用构建，并从集中式仪表板向 Ionic 应用部署实时代码更新。可选的高级付费升级可用于更高级的功能，如直接发布到应用商店、工作流自动化、单点登录（SSO）以及访问连接的服务和集成。

Appflow 需要一个 <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic 账户</a>，并为那些有兴趣尝试其某些功能的用户提供了免费的"爱好（Hobby）"计划。

## 生态系统

Ionic Framework 由一个核心团队全职积极开发和维护，其生态系统由一个国际开发者社区引导，推动其增长和采用。大大小小的开发者和公司都使用 Ionic 来构建和发布可在任何地方运行的出色应用。

### 加入社区

全球有数百万 Ionic 开发者，遍布 200 多个国家。以下是一些加入方式：

<!-- prettier-ignore -->
- <a href="https://forum.ionicframework.com/" target="_blank">论坛：</a>提出问题并分享想法的好地方。
- <a href="https://twitter.com/ionicframework" target="_blank">Twitter：</a>我们在此发布更新并与 Ionic 社区分享内容。
- <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub：</a>用于报告错误或请求新功能，请在此创建 issue。欢迎提交 PR！
- <a href="https://ionicframework.com/contributors" target="_blank">内容创作：</a>撰写技术博客或与 Ionic 社区分享您的故事。

## 许可协议

Ionic Framework 是一个免费的开源项目，根据宽松的 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT 许可证</a>发布。这意味着它可以在个人或商业项目中免费使用。MIT 与 jQuery 和 Ruby on Rails 等流行项目使用的许可证相同。

本文档内容（位于 <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a> 仓库中）根据 <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 许可证</a>授权。
