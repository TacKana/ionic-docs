---
title: 选项卡组件
---

import Props from '@ionic-internal/component-api/v8/tab/props.md';
import Events from '@ionic-internal/component-api/v8/tab/events.md';
import Methods from '@ionic-internal/component-api/v8/tab/methods.md';
import Parts from '@ionic-internal/component-api/v8/tab/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/tab/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/tab/slots.md';

<head>
  <title>ion-tab：Ionic 框架应用组件</title>
  <meta name="description" content="ion-tab 是 tabs 的子组件。每个 ion-tab 可以包含应用的一个顶级导航栈或单个视图。阅读了解更多信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


标签页组件是 [tabs](tabs.md) 的子组件。每个标签页可以包含一个应用的顶级导航栈或单个视图。一个应用可以拥有多个标签页，每个都具备独立的导航功能。

:::note
对于 Angular、React 和 Vue，只有在 `ion-tabs` 组件配置为 [基础用法](./tabs.md#basic-usage) 时才能使用此组件。当通过路由配置标签页时，无法使用 `ion-tab` 组件。

在 JavaScript 中，此组件可以与配置为 [基础用法](./tabs.md#basic-usage) 或 [配合路由器使用](./tabs.md#usage-with-router) 的 `ion-tabs` 组件一同使用。
:::


更多关于配置标签页的细节，请参阅 [tabs 文档](tabs.md)。



## 属性
<Props />

## 事件
<Events />

## 方法
<Methods />

## CSS 影子部件
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />