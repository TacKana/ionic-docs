---
title: "ion-tab"
---

import Props from '@ionic-internal/component-api/v8/tab/props.md';
import Events from '@ionic-internal/component-api/v8/tab/events.md';
import Methods from '@ionic-internal/component-api/v8/tab/methods.md';
import Parts from '@ionic-internal/component-api/v8/tab/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/tab/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/tab/slots.md';

<head>
  <title>ion-tab：Ionic Framework 应用组件</title>
  <meta name="description" content="ion-tab 是 tabs 的子组件。每个 ion-tab 可以包含应用的顶级导航堆栈或单个视图。阅读了解更多信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Tab 组件是 [tabs](tabs.md) 的子组件。每个选项卡可以包含应用的顶级导航堆栈或单个视图。一个应用可以有多个选项卡，每个都有自己的独立导航。

:::note
Angular、React 和 Vue 只能在 `ion-tabs` 组件配置为[基本用法](./tabs.md#基本用法)时使用此组件。在使用路由设置选项卡时，不能使用 `ion-tab` 组件。

在 JavaScript 中，此组件可以与配置为[基本用法](./tabs.md#基本用法)或[与路由一起使用](./tabs.md#与路由一起使用)的 `ion-tabs` 组件一起使用。
:::


有关配置选项卡的更多详细信息，请参阅 [tabs 文档](tabs.md)。



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
