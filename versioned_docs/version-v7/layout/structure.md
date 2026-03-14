---
title: Structure
initialTab: 'preview'
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>结构布局 | Ionic 应用内容布局结构</title>
  <meta
    name="description"
    content="Ionic 提供了多种布局方式，可用于构建应用及其内容——从单页面布局到分割视图和模态框。"
  />
</head>

Ionic Framework 提供了多种不同的布局方式，可用于构建应用结构——从单页面布局到分割视图和模态框。

## 页眉与页脚布局

### 页眉

最简单的布局由 [header](../api/header.md) 和 [content](../api/content.md) 组成。应用中的大多数页面通常都包含这两者，但使用内容区域并不强制要求必须要有页眉。

import Header from '@site/static/usage/v7/header/basic/index.md';

<Header />

### 页脚

页眉中的工具栏位于内容区域上方，而页脚则显示在内容区域下方。页眉和页脚也可以在同一页面中同时使用。

import Footer from '@site/static/usage/v7/footer/basic/index.md';

<Footer />

## 标签页布局

由水平 [tabs](../api/tabs.md) 组成的布局可用于让用户快速切换不同的内容视图。每个标签页可以包含静态内容，也可以通过 [router outlet](../api/router-outlet.md) 或 [nav](../api/nav.md) 包含一个导航栈。

import Tabs from '@site/static/usage/v7/tabs/router/index.md';

<Tabs />

## 侧边菜单布局

移动应用中常见的标准布局包括通过点击按钮或从侧边滑动来切换侧边 [menu](../api/menu.md)。侧边菜单通常用于导航，但它们也可以包含任何内容。

import Menu from '@site/static/usage/v7/menu/basic/index.md';

<Menu />

## 分割视图布局

[split pane](../api/split-pane.md) 布局结构更为复杂，因为它可以结合之前提到的布局方式。当视口宽度超过指定断点时，它允许同时显示多个视图。如果设备屏幕尺寸小于特定大小，分割视图将被隐藏。

默认情况下，当屏幕宽度大于 `768px`（即 `md` 断点）时，分割视图会显示，但可以通过设置 `when` 属性来自定义使用不同的断点。以下是一个示例，其中分割视图包含一个菜单，该菜单在 `xs` 及以上屏幕尺寸（即视口宽度大于 `0px`）时可见。这将使分割视图在所有屏幕尺寸下都显示。

需要注意的是，具有与分割视图指定的 `contentId` 匹配的 `id` 的元素将始终作为主要内容显示。这可以是任何元素，包括 [nav](../api/nav.md)、[router outlet](../api/router-outlet.md) 或 [tabs](../api/tabs.md)。

import SplitPane from '@site/static/usage/v7/split-pane/basic/index.md';

<SplitPane />