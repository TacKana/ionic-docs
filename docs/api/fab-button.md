---
title: 悬浮操作按钮组件
---
import Props from '@ionic-internal/component-api/v8/fab-button/props.md';
import Events from '@ionic-internal/component-api/v8/fab-button/events.md';
import Methods from '@ionic-internal/component-api/v8/fab-button/methods.md';
import Parts from '@ionic-internal/component-api/v8/fab-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/fab-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/fab-button/slots.md';

<head>
  <title>ion-fab-button：用于主要操作的 Ionic 悬浮操作按钮图标</title>
  <meta name="description" content="悬浮操作按钮代表应用程序中的主要操作。图标为圆形，按下按钮时可能会打开更多相关操作。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


悬浮操作按钮代表应用程序中的主要操作。默认情况下，它们呈圆形。当被按下时，按钮可能会展开更多相关操作。

顾名思义，FAB 通常以固定位置悬浮在内容上方。这是通过将 fab 按钮包裹在 [fab](./fab) 组件中实现的。如果按钮未包裹在 fab 内，它将随内容一起滚动。

有关使用示例，请参阅 [fab 文档](./fab)。

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