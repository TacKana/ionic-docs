---
title: 'ion-nav | Ionic 框架应用的导航视图组件'
description: 'ion-nav 是一个独立组件，用于在堆栈上加载任意组件并推送新组件。加载导航视图和推送其他组件不会影响整体路由。'
sidebar_label: 'ion-nav'
demoUrl: '/docs/demos/api/nav/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/nav/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/nav/props.md';
import Events from '@ionic-internal/component-api/v5/nav/events.md';
import Methods from '@ionic-internal/component-api/v5/nav/methods.md';
import Parts from '@ionic-internal/component-api/v5/nav/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/nav/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/nav/slots.md';

# ion-nav

Nav 是一个独立组件，用于加载任意组件，并将新组件推送到堆栈上。

与 Router Outlet 不同，Nav 不与特定的路由绑定。这意味着如果我们加载一个 Nav 组件，并将其他组件推送到堆栈上，它们不会影响应用的整体路由。这适用于需要独立子导航的场景，例如模态框，而不必将其与应用的 URL 关联。

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS Shadow Parts

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />