---
title: 结构布局
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>结构布局 | Ionic 应用内容布局结构</title>
  <meta
    name="description"
    content="Ionic 提供多种不同的布局方案，可用于构建应用及其内容——从单页布局到分割窗格视图和模态框。"
  />
</head>

Ionic Framework 提供了多种不同的布局方案，可用于构建应用。从单页布局，到分割窗格视图和模态框。

## 页眉与页脚布局

### 页眉

最简单的布局由 [页眉（header）](../api/header.md) 和 [内容区域（content）](../api/content.md) 组成。应用中的大多数页面通常都包含这两者，但使用内容区域并不强制要求必须有页眉。

import Header from '@site/static/usage/v8/header/basic/index.md';

<Header />

### 页脚

页眉中的工具栏会显示在内容区域上方，而页脚则显示在内容区域下方。页眉和页脚也可以在同一页面中同时使用。

import Footer from '@site/static/usage/v8/footer/basic/index.md';

<Footer />

## 标签页布局

由水平 [标签页（tabs）](../api/tabs.md) 组成的布局可用于让用户在内容视图之间快速切换。每个标签页可以包含静态内容，也可以通过使用 [路由出口（router outlet）](../api/router-outlet.md) 或 [导航组件（nav）](../api/nav.md) 来承载一个导航栈。

import Tabs from '@site/static/usage/v8/tabs/router/index.md';

<Tabs />

## 侧边菜单布局

移动应用中一种常见的标准布局，包含通过点击按钮或从侧边滑动手势来切换侧边 [菜单（menu）](../api/menu.md) 的功能。侧边菜单通常用于导航，但也可以包含任何内容。

import Menu from '@site/static/usage/v8/menu/basic/index.md';

<Menu />

## 分割窗格布局

[分割窗格（split-pane）](../api/split-pane.md) 布局的结构更为复杂，因为它可以融合前述的多种布局。当视口宽度超过指定断点时，它允许显示多个视图。如果设备屏幕尺寸小于特定大小，分割窗格视图将被隐藏。

默认情况下，当屏幕宽度大于 `768px`（即 `md` 断点）时，分割窗格视图会显示。但可以通过设置 `when` 属性来自定义使用不同的断点。下面是一个示例，其中分割窗格包含一个菜单，该菜单在 `xs` 及以上屏幕尺寸（即视口宽度大于 `0px`）时可见。这将为所有屏幕尺寸显示分割窗格。

需要注意的是，`id` 与分割窗格指定的 `contentId` 相匹配的元素将始终作为主要内容显示。这可以是任何元素，包括 [导航组件（nav）](../api/nav.md)、[路由出口（router outlet）](../api/router-outlet.md) 或 [标签页（tabs）](../api/tabs.md)。

import SplitPane from '@site/static/usage/v8/split-pane/basic/index.md';

<SplitPane />