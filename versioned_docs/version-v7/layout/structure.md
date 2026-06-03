---
title: 结构
initialTab: 'preview'
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>结构布局 | Ionic 应用内容布局结构</title>
  <meta
    name="description"
    content="Ionic 提供了几种不同的布局，可用于构建应用及其内容——从单页面布局到分屏视图和模态框。"
  />
</head>

Ionic Framework 提供了几种不同的布局，可用于构建应用。从单页面布局到分屏视图和模态框。

## 页眉和页脚布局

### 页眉

可用的最简单布局由[页眉](../api/header.md)和[内容](../api/content.md)组成。应用中的大多数页面通常同时包含这两者，但使用内容时不一定要有页眉。

import Header from '@site/static/usage/v7/header/basic/index.md';

<Header />

### 页脚

页眉中的工具栏出现在内容上方，而页脚则出现在内容下方。页眉和页脚也可以在同一页面上同时使用。

import Footer from '@site/static/usage/v7/footer/basic/index.md';

<Footer />

## 标签布局

可以使用水平[标签](../api/tabs.md)布局让用户在内容视图之间快速切换。每个标签可以包含静态内容，也可以通过[路由出口](../api/router-outlet.md)或[nav](../api/nav.md) 包含导航栈。

import Tabs from '@site/static/usage/v7/tabs/router/index.md';

<Tabs />

## 菜单布局

移动应用中的一种标准布局包括通过点击按钮或从侧面滑动来切换侧边[菜单](../api/menu.md)的功能。侧边菜单通常用于导航，但也可以包含任何内容。

import Menu from '@site/static/usage/v7/menu/basic/index.md';

<Menu />

## 分屏布局

[分屏](../api/split-pane.md)布局具有更复杂的结构，因为它可以结合前面的布局。当视口超过指定的断点时，它允许同时显示多个视图。如果设备的屏幕尺寸低于某个大小，分屏视图将被隐藏。

默认情况下，当屏幕大于 `768px`（即 `md` 断点）时，分屏视图会显示，但可以通过设置 `when` 属性来自定义使用不同的断点。以下示例中，分屏包含一个菜单，该菜单在 `xs` 屏幕及以上可见，即视口大于 `0px` 时。这将使分屏在所有屏幕尺寸下都显示。

需要注意的是，具有 `id` 且与分屏指定的 `contentId` 匹配的元素将是始终可见的主要内容。这可以是任何元素，包括 [nav](../api/nav.md)、[路由出口](../api/router-outlet.md)或 [标签](../api/tabs.md)。

import SplitPane from '@site/static/usage/v7/split-pane/basic/index.md';

<SplitPane />
