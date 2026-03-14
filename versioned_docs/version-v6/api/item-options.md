---
title: 'ion-item-options'
---

import Props from '@ionic-internal/component-api/v6/item-options/props.md';
import Events from '@ionic-internal/component-api/v6/item-options/events.md';
import Methods from '@ionic-internal/component-api/v6/item-options/methods.md';
import Parts from '@ionic-internal/component-api/v6/item-options/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/item-options/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/item-options/slots.md';

<head>
  <title>ion-item-options：Ionic 应用中的选项按钮组件</title>
  <meta
    name="description"
    content="ion-item-options 专为 ion-item-sliding 设计。这些选项按钮可以放置在起始侧或结束侧。阅读以了解更多关于在 Ionic 应用中的用法。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

项目选项组件是滑动项目中[项目选项](./item-option)按钮的容器。这些按钮可以放置在[起始侧或结束侧](#side-description)。

更多信息请参阅[项目滑动](./item-sliding)文档。

## 侧边说明

| 侧边    | 位置                                                          | 滑动方向                                                       |
| ------- | ------------------------------------------------------------- | -------------------------------------------------------------- |
| `start` | 在 LTR 中位于内容`左侧`，在 RTL 中位于内容`右侧`。            | 在 LTR 中从`左`到`右`滑动，在 RTL 中从`右`到`左`滑动。         |
| `end`   | 在 LTR 中位于内容`右侧`，在 RTL 中位于内容`左侧`。            | 在 LTR 中从`右`到`左`滑动，在 RTL 中从`左`到`右`滑动。         |

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