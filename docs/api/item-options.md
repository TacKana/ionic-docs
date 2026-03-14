---
title: 项目选项组件
---
import Props from '@ionic-internal/component-api/v8/item-options/props.md';
import Events from '@ionic-internal/component-api/v8/item-options/events.md';
import Methods from '@ionic-internal/component-api/v8/item-options/methods.md';
import Parts from '@ionic-internal/component-api/v8/item-options/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/item-options/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/item-options/slots.md';

<head>
  <title>ion-item-options：Ionic 应用中的选项按钮组件</title>
  <meta name="description" content="ion-item-options 专为 ion-item-sliding 设计。这些选项按钮可以放置在起始侧或结束侧。阅读本文以了解更多在 Ionic 应用中的使用方法。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

item-options 组件是滑动式项目中 [item option](./item-option) 按钮的容器。这些按钮可以放置在[起始侧或结束侧](#side-description)。

有关更多信息，请参阅 [item sliding](./item-sliding) 文档。


## 侧边描述

| 侧边    | 位置                                                         | 滑动方向                                                      |
|---------|--------------------------------------------------------------|---------------------------------------------------------------|
| `start` | 在 LTR 中位于内容的`左侧`，在 RTL 中位于`右侧`。               | 在 LTR 中从`左`到`右`，在 RTL 中从`右`到`左`。                |
| `end`   | 在 LTR 中位于内容的`右侧`，在 RTL 中位于`左侧`。               | 在 LTR 中从`右`到`左`，在 RTL 中从`左`到`右`。                |




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
