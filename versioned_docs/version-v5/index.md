---
sidebar_label: 概述
slug: /
title: 开源的 UI 工具包，助你打造专属移动端或桌面端应用
description: Ionic Framework 是一个开源的 UI 工具包，让你能够使用 Web 技术并整合流行框架，来创建自己的移动端和桌面端应用。
hide_table_of_contents: true
demoUrl: https://ionic-docs-demo-v5.vercel.app/
demoSourceUrl: https://github.com/ionic-team/docs-demo/tree/5.x
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

# Ionic Framework

Ionic Framework 是一个开源的 UI 工具包，用于使用 Web 技术（HTML、CSS 和 JavaScript）构建高性能、高质量的移动端和桌面端应用，并能与 [Angular](angular/overview.md)、[React](react/overview.md) 和 [Vue](vue/overview.md) 等流行框架集成。

通过 [安装 Ionic](intro/cli.md) 或跟随我们的 [首个应用教程](intro/next.md#build-your-first-app) 来学习核心概念，开始你的构建之旅。

<intro-end />

<DocsCards>
  <DocsCard header="安装指南" href="/intro/cli" icon="/icons/guide-installation-icon.svg" hover-icon="/icons/guide-installation-icon-hover.svg">
    <p>设置系统和安装框架的逐步指南。</p>
  </DocsCard>

<DocsCard
  header="UI 组件"
  href="/components"
  icon="/icons/guide-components-icon.svg"
  hover-icon="/icons/guide-components-icon-hover.svg"
>
  <p>深入了解 Ionic Framework 精心设计的 UI 组件库。</p>
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
    <p>学习如何轻松定制和修改 Ionic 应用的视觉设计，以贴合你的品牌。</p>
  </DocsCard>
</DocsCards>

## 概述

Ionic Framework 专注于应用的前端用户体验（UX）和用户界面（UI）交互——包括 UI 控件、交互、手势和动画。它易于学习，并能与 [Angular](angular/overview.md)、[React](react/overview.md) 或 [Vue](vue/overview.md) 等其他库或框架集成。或者，你也可以通过简单的 [脚本引入](intro/cdn.md) 方式，独立使用它，而无需任何前端框架。如果你想在深入学习前更全面地了解 Ionic Framework，我们 <a href="https://youtu.be/p3AN3igqiRc" target="_blank">制作了一个视频</a> 来引导你了解基础知识。

### 一套代码，处处运行

Ionic 是唯一的移动应用开发栈，它让 Web 开发者能够从单一代码库构建适用于所有主要应用商店和移动 Web 的应用。并且借助 [自适应样式](theming/platform-styles.md)，Ionic 应用能在每台设备上呈现并感觉像是原生应用。

### 专注性能

Ionic 旨在以最佳实践（如高效的硬件加速过渡和针对触摸优化的手势）在最新的移动设备上实现出色的性能和表现。

### 简洁、优雅且功能性的设计

Ionic 旨在所有当前移动设备和平台上完美运行和显示。借助现成的组件、排版以及一个华丽（又可扩展）并能适配每个平台的基主题，你将能构建出风格出众的应用。

### 原生与 Web 优化

Ionic 模拟原生应用的 UI 指南并使用原生 SDK，将原生应用的用户界面标准和设备特性与开放 Web 的全部功能和灵活性相结合。Ionic 使用 Capacitor（或 Cordova）进行原生部署，或作为渐进式 Web 应用（Progressive Web App）在浏览器中运行。

## 目标

### 跨平台

构建和部署适用于多个平台的应用，例如原生 iOS、Android、桌面端以及作为渐进式 Web 应用的 Web 端——所有这些都使用同一套代码。一次编写，处处运行。

### 基于 Web 标准

Ionic Framework 构建在可靠、[标准化的 Web 技术](reference/glossary#web-standards) 之上：HTML、CSS 和 JavaScript，并使用现代 Web API，如自定义元素（Custom Elements）和影子 DOM（Shadow DOM）。正因如此，Ionic 组件拥有稳定的 API，不受单一平台供应商的随意变更影响。

### 优雅的设计

简洁、优雅且功能性强。Ionic Framework 的设计旨在开箱即用地在所有平台上完美运行和显示。
从预设计的组件、排版、交互范式以及一个华丽（又可扩展）的基主题开始。

### 简单易用

Ionic Framework 的设计理念是简单，因此创建 Ionic 应用是一种享受，易于学习，并且对于几乎所有具备 Web 开发技能的人来说都易于上手。

## 框架兼容性

虽然过去版本的 Ionic 与 Angular 紧密耦合，但框架的 4.x 版本经过重新设计，可作为独立的 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web 组件</a> 库工作，并与 Angular 等最新的 JavaScript 框架集成。Ionic 可以成功用于大多数前端框架，包括 React 和 Vue，不过某些框架需要垫片（shim）来获得完整的 Web 组件支持。

### JavaScript

将 Ionic Framework 迁移到 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web 组件</a> 的主要目标之一是移除对单一框架托管组件的硬性要求。这使得核心组件能够仅通过一个脚本标签在网页中独立工作。虽然使用框架对于大型团队和大型应用来说可能很棒，但现在即使在 WordPress 这样的环境中，也可以在单个页面中将 Ionic 作为独立库使用。

### Angular

Angular 一直是 Ionic 出色的核心所在。虽然核心组件已编写为独立的 Web 组件库，但 `@ionic/angular` 包使得与 Angular 生态系统的集成变得轻而易举。`@ionic/angular` 包含了 Angular 开发者从 Ionic 2/3 中期望的所有功能，并与 Angular 核心库（如 Angular 路由器）集成。

### React

Ionic 现已正式支持流行的 React 库。Ionic React 让 React 开发者能够利用他们现有的 Web 技能来构建面向 iOS、Android、Web 和桌面的应用。通过 `@ionic/react`，你可以使用所有核心 Ionic 组件，但其使用方式感觉就像在使用原生 React 组件。

### Vue

Ionic 现已正式支持流行的 Vue 3 库。Ionic Vue 让 Vue 开发者能够利用他们现有的 Web 技能来构建面向 iOS、Android、Web 和桌面的应用。通过 `@ionic/vue`，你可以使用所有核心 Ionic 组件，但其使用方式感觉就像在使用原生 Vue 组件。

### 未来支持

未来版本将考虑支持其他框架。

## Ionic CLI

官方的 [Ionic CLI](cli)（命令行界面）是一个工具，可以快速搭建 Ionic 应用，并为 Ionic 开发者提供许多有用的命令。除了安装和更新 Ionic 外，CLI 还内置了开发服务器、构建和调试工具等。如果你是 [Appflow](#ionic-appflow) 成员，CLI 可用于执行云构建和部署，以及管理你的账户。

## Appflow

为了帮助在 Ionic 应用的整个生命周期中构建、部署和管理它们，我们为生产应用提供了一项名为 <a href="https://ionic.io/appflow" target="_blank">Appflow</a> 的商业服务，它 <strong>独立于开源的框架</strong>。

Appflow 帮助开发者和团队从集中式仪表板为 Ionic 应用编译原生构建版本并部署实时代码更新。可选的付费升级可用于更高级的功能，例如直接发布到应用商店、工作流自动化、单点登录（SSO）以及访问连接的服务和集成。

Appflow 需要一个 <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic 账户</a>，并为那些有兴趣尝试其部分功能的用户提供了一个免费的“Hobby”计划。

## 生态系统

Ionic Framework 由核心团队全职积极开发和维护，其生态系统由国际开发者社区和贡献者引导，推动其成长和采用。大大小小的开发者和公司都在使用 Ionic 来构建和发布能在任何地方运行的出色应用。

### 加入社区

全球有超过 200 个国家的数百万 Ionic 开发者。以下是一些加入的方式：

<!-- prettier-ignore -->
- <a href="https://forum.ionicframework.com/" target="_blank">论坛：</a> 提问和分享想法的好地方。
- <a href="https://twitter.com/ionicframework" target="_blank">Twitter：</a> 我们在此发布更新并分享来自 Ionic 社区的内容。
- <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub：</a> 报告错误或请求新功能，请在此创建 issue。欢迎提交 PR！
- <a href="https://ionicframework.com/contributors" target="_blank">内容创作：</a> 撰写技术博客或与 Ionic 社区分享你的故事。

## 许可证

Ionic Framework 是一个免费开源项目，基于宽松的 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT 许可证</a> 发布。这意味着它可以免费用于个人或商业项目。MIT 是与 jQuery 和 Ruby on Rails 等流行项目使用的相同许可证。

本文档内容（位于 <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a> 仓库中）基于 <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 许可证</a> 授权。