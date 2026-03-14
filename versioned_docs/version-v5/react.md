---
title: Ionic React
sidebar_label: 概述
hide_title: true
hide_table_of_contents: true
description: Ionic 是面向 Web 开发者的应用开发平台。使用一套共享的代码库和开放的 Web 标准，构建出色的移动、Web 和桌面应用
---

import PageStyles from '@components/page/react/PageStyles';

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<PageStyles>

<div className='flex main-flex'>
  <div className="pull-left">
  <h3>一套代码 <br/> 多端运行 <br/> <strong>纯正 React 体验</strong></h3>

- ✓ 100+ 为移动端优化的 React UI 组件
- ✓ 使用 react-dom 的标准 React 工具链
- ✓ 支持 iOS / Android / Electron / PWA

[开始使用](#installation)

  </div>

  <div className="pull-right">
  <img src="/docs/img/frameworks/react-logo.png" />
  </div>
</div>

### 使用你熟悉和喜爱的 React，为移动端、桌面端和 Web 构建出色的应用。

Ionic React 是 Ionic Framework 的官方 React 版本，这款免费、开源的 SDK 正在为全球数百万关键任务应用提供支持。

它提供了使用 React 为任何平台构建获奖应用所需的一切。

<div className="flex" >

<div className="pull-left">

## 卓越设计

从 100 多个美观、移动端就绪的 UI 组件、动画和手势中选择，它们轻量且可自定义，以适应你的品牌风格。

[探索 UI 组件](/docs/components)

</div>

<div className="pull-right">
  <img src="/docs/icons/feature-guide-components-icon.png" />
</div>

</div>

<div className="flex reverse" >

<div className="pull-left">

## 熟悉的工具链

Ionic React 项目就是标准的 React 项目，基于 [react-dom](https://reactjs.org/docs/react-dom.html) 构建，并采用通常在 [Create React App (CRA)](https://github.com/facebook/create-react-app) 项目中常见的配置。对于[路由和导航](/docs/react/navigation)，底层使用了 React Router。
兼容 React 16.8 及以上版本。

</div>

<div className="pull-right">
  <img src="/docs/img/frameworks/react-cli.png" className="cli" />
</div>

</div>

<div className="flex">

<div className="pull-left">

## 不止于移动端

使用现代化原生运行时 [Capacitor](https://capacitorjs.com)，将你的 Ionic React 项目部署到原生 iOS、Android、Electron，并作为渐进式 Web 应用（PWA）运行在 Web 上。所有平台共享一套代码库。

</div>

<div className="pull-right">
  <img src="/docs/img/native-platforms/group-shot.png" />
</div>

</div>

<div className="flex reverse">

  <div className="pull-left">

## 纯正 React 体验

归根结底，它就是 React。Ionic React 采用开放的 Web 标准和内置的浏览器能力，因此它与数百万个现有的 Web 库兼容。

  </div>

<div className="pull-right">
  <img src="/docs/img/frameworks/react.svg" />
</div>

</div>

## 安装

```shell-session
$ npm install -g @ionic/cli
$ ionic start myApp tabs --type react

$ cd myApp
$ ionic serve █
```

## 资源

<DocsCards>
  <DocsCard header="入门指南" href="react/your-first-app" icon="/icons/feature-component-actionsheet-icon.png">
    <p>学习使用 Ionic Framework 开始构建出色应用所需的基础知识。</p>
  </DocsCard>

<DocsCard
  header="在现有 React 应用中添加 Ionic"
  href="https://dev.to/ionic/adding-ionic-react-to-an-existing-react-project-4kib"
  icon="/icons/logo-react-icon.png"
>
  <p>使用独立的组件或完整的应用体验。</p>
</DocsCard>

<DocsCard header="导航" href="react/navigation" icon="/icons/feature-component-navigation-icon.png">
  <p>学习使用 Ionic 和 React Router 在应用内进行导航的基础知识。</p>
</DocsCard>

<DocsCard header="生命周期" href="react/lifecycle" icon="/icons/feature-guide-components-icon.png">
  <p>了解如何在类组件和钩子中使用 Ionic 生命周期事件。</p>
</DocsCard>

</DocsCards>

</PageStyles>