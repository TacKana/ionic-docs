---
title: 项目选项组件
---
import Props from '@ionic-internal/component-api/v8/item-option/props.md';
import Events from '@ionic-internal/component-api/v8/item-option/events.md';
import Methods from '@ionic-internal/component-api/v8/item-option/methods.md';
import Parts from '@ionic-internal/component-api/v8/item-option/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/item-option/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/item-option/slots.md';

<head>
  <title>ion-item-option：Ionic 滑动项的选项按钮</title>
  <meta name="description" content="ion-item-option 是 ion-item-sliding 的选项按钮，必须放置在 <ion-item-options> 内。请阅读以了解更多关于其属性的信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


项目选项组件是滑动项的按钮。它必须放置在 [item options](./item-options) 中。`ionSwipe` 事件和 `expandable` 属性可以结合使用，为项目创建完整的滑动手势操作。

有关更多信息，请参阅 [item sliding](./item-sliding) 文档。


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

<LegacyAnchor id="slots" />

## 插槽
<Slots />