---
title: "ion-fab-button"
---
import Props from '@ionic-internal/component-api/v8/fab-button/props.md';
import Events from '@ionic-internal/component-api/v8/fab-button/events.md';
import Methods from '@ionic-internal/component-api/v8/fab-button/methods.md';
import Parts from '@ionic-internal/component-api/v8/fab-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/fab-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/fab-button/slots.md';

<head>
  <title>ion-fab-button: Ionic 主要操作的 FAB 按钮图标</title>
  <meta name="description" content="浮动操作按钮（FAB）表示应用中的主要操作。图标为圆形，按下时按钮可能会打开更多相关操作。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


浮动操作按钮（FAB）表示应用中的主要操作。默认情况下，它们具有圆形形状。按下时，按钮可能会打开更多相关操作。

顾名思义，FAB 通常以固定位置浮动在内容之上。这是通过将 fab 按钮包裹在 [fab](./fab) 组件中实现的。如果按钮没有用 fab 包裹，它将随内容滚动。

使用示例请参阅 [fab 文档](./fab)。

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