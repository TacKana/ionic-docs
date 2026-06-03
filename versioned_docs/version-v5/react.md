---
title: Ionic React
sidebar_label: 概览
hide_title: true
hide_table_of_contents: true
description: Ionic 是面向 Web 开发者的应用平台。使用同一套代码库和开放的 Web 标准，构建出色的移动、Web 和桌面应用
---

import PageStyles from '@components/page/react/PageStyles';

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<PageStyles>

<div className='flex main-flex'>
  <div className="pull-left">
  <h3>一套代码库 <br/> 任何平台 <br/> <strong>就是 React</strong></h3>

- ✓ 100+ 个移动端优化的 React UI 组件
- ✓ 使用 react-dom 的标准 React 工具链
- ✓ iOS / Android / Electron / PWA

[开始使用](#installation)

  </div>

  <div className="pull-right">
  <img src="/docs/img/frameworks/react-logo.png" />
  </div>
</div>

### 使用你熟悉和喜爱的 React，构建跨移动端、桌面端和 Web 的精彩应用。

Ionic React 是 Ionic Framework 的原生 React 版本，Ionic Framework 是一个免费、开源的 SDK，为全球数以百万计的关键任务应用提供支持。

它包含了使用 React 为任何平台交付获奖应用所需的一切。

<div className="flex" >

<div className="pull-left">

## 出色的设计

从 100 多个精美、移动端就绪的 UI 组件、动画和手势中进行选择，轻量且可定制，以适应您的品牌需求。

[探索 UI 组件](/docs/components)

</div>

<div className="pull-right">
  <img src="/docs/icons/feature-guide-components-icon.png" />
</div>

</div>

<div className="flex reverse" >

<div className="pull-left">

## 熟悉的工具链

Ionic React 项目与常规 React 项目无异，利用 [react-dom](https://reactjs.org/docs/react-dom.html) 并采用 [Create React App (CRA)](https://github.com/facebook/create-react-app) 的标准配置。[路由和导航](/docs/react/navigation)底层使用的是 React Router。
兼容 React 16.8 及以上版本。

</div>

<div className="pull-right">
  <img src="/docs/img/frameworks/react-cli.png" className="cli" />
</div>

</div>

<div className="flex">

<div className="pull-left">

## 不止于移动端

使用 [Capacitor](https://capacitorjs.com)（一个现代原生运行时），将您的 Ionic React 项目部署到原生 iOS、Android、Electron 以及作为渐进式 Web 应用（PWA）的 Web 端。所有平台共享同一套代码库。

</div>

<div className="pull-right">
  <img src="/docs/img/native-platforms/group-shot.png" />
</div>

</div>

<div className="flex reverse">

  <div className="pull-left">

## 就是 React

归根结底，它就是 React。Ionic React 使用开放的 Web 标准和浏览器内置能力，因此与数以百万计的 Web 库兼容。

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
  <DocsCard header="开始使用" href="react/your-first-app" icon="/icons/feature-component-actionsheet-icon.png">
    <p>学习使用 Ionic Framework 构建出色应用所需的基础知识。</p>
  </DocsCard>

<DocsCard
  header="将 Ionic 添加到现有 React 应用"
  href="https://dev.to/ionic/adding-ionic-react-to-an-existing-react-project-4kib"
  icon="/icons/logo-react-icon.png"
>
  <p>使用单个组件或完整的应用体验。</p>
</DocsCard>

<DocsCard header="导航" href="react/navigation" icon="/icons/feature-component-navigation-icon.png">
  <p>了解在应用中使用 Ionic 和 React Router 进行导航的基础知识。</p>
</DocsCard>

<DocsCard header="生命周期" href="react/lifecycle" icon="/icons/feature-guide-components-icon.png">
  <p>了解如何在使用 class 组件和 hooks 时使用 Ionic 生命周期事件。</p>
</DocsCard>

</DocsCards>

</PageStyles>
