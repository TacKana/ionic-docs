---
title: 'ion-item-options'
---

import Props from '@ionic-internal/component-api/v7/item-options/props.md';
import Events from '@ionic-internal/component-api/v7/item-options/events.md';
import Methods from '@ionic-internal/component-api/v7/item-options/methods.md';
import Parts from '@ionic-internal/component-api/v7/item-options/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/item-options/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/item-options/slots.md';

<head>
  <title>ion-item-options: Ionic 应用中的滑动项选项按钮组件</title>
  <meta
    name="description"
    content="ion-item-options 用于 ion-item-sliding 组件。这些选项按钮可以放置在起始侧或结束侧。阅读本文以了解更多在 Ionic 应用中的使用方法。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

item-options 组件是滑动项中 [item option](./item-option) 按钮的容器。这些按钮可以放置在[起始侧或结束侧](#side-description)。

有关更多信息，请参阅 [item sliding](./item-sliding) 文档。

## 侧边说明

| 侧边    | 位置                                                          | 滑动方向                                                     |
| ------- | ------------------------------------------------------------- | ------------------------------------------------------------ |
| `start` | 在 LTR 布局中位于内容`左侧`，在 RTL 布局中位于内容`右侧`。     | 在 LTR 布局中从`左`向`右`滑动，在 RTL 布局中从`右`向`左`滑动。 |
| `end`   | 在 LTR 布局中位于内容`右侧`，在 RTL 布局中位于内容`左侧`。     | 在 LTR 布局中从`右`向`左`滑动，在 RTL 布局中从`左`向`右`滑动。 |

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