---
title: 结构
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>结构布局 | Ionic 应用中内容布局的结构</title>
  <meta
    name="description"
    content="Ionic 提供了多种不同的布局，可用于构建应用及其内容——从单页面布局到分栏视图和模态框。"
  />
</head>

Ionic Framework 提供了多种不同的布局，可用于构建应用。从单页面布局到分栏视图和模态框。

## 页眉和页脚布局

### 页眉

最简单的可用布局由[页眉](../api/header.md)和[内容](../api/content.md)组成。应用中的大多数页面通常同时包含这两者，但使用内容并不一定需要页眉。

import Header from '@site/static/usage/v8/header/basic/index.md';

<Header />

### 页脚

页眉中的工具栏出现在内容上方，而页脚则出现在内容下方。页眉和页脚也可以在同一页面上同时使用。

import Footer from '@site/static/usage/v8/footer/basic/index.md';

<Footer />

## 标签页布局

由水平[标签页](../api/tabs.md)组成的布局可用于让用户在内容视图之间快速切换。每个标签页可以包含静态内容，也可以通过使用[路由出口](../api/router-outlet.md)或[nav](../api/nav.md)来包含导航堆栈。

import Tabs from '@site/static/usage/v8/tabs/router/index.md';

<Tabs />

## 菜单布局

移动应用中一种标准的布局包括通过点击按钮或从侧面滑动来切换侧边[菜单](../api/menu.md)的功能。侧边菜单通常用于导航，但它们也可以包含任何内容。

import Menu from '@site/static/usage/v8/menu/basic/index.md';

<Menu />

## 分栏布局

[分栏](../api/split-pane.md)布局具有更复杂的结构，因为它可以组合前面的布局。它允许在视口超过指定断点时显示多个视图。如果设备的屏幕尺寸小于某个值，分栏视图将被隐藏。

默认情况下，当屏幕大于 `768px`（即 `md` 断点）时，分栏视图会显示，但可以通过设置 `when` 属性来自定义使用不同的断点。以下是一个示例，其中分栏包含一个在 `xs` 屏幕及以上（即视口大于 `0px`）可见的菜单。这将使分栏在所有屏幕尺寸下都显示。

需要注意的是，其 `id` 与分栏指定的 `contentId` 匹配的元素将是始终可见的主要内容。这可以是任何元素，包括 [nav](../api/nav.md)、[路由出口](../api/router-outlet.md)或[标签页](../api/tabs.md)。

import SplitPane from '@site/static/usage/v8/split-pane/basic/index.md';

<SplitPane />
