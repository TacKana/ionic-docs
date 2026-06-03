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
  <title>ion-item-options：Ionic 应用的选项按钮组件</title>
  <meta
    name="description"
    content="ion-item-options 用于 ion-item-sliding。这些选项按钮可以放置在开始或结束侧。阅读了解更多关于在 Ionic 应用中的使用。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

项目选项组件是滑动项目中[项目选项（item option）](./item-option)按钮的容器。这些按钮可以放置在[开始侧或结束侧](#方向说明)。

更多信息请参阅[项目滑动（item sliding）](./item-sliding)文档。

## 方向说明

| 方向    | 位置                                                              | 滑动方向                                                               |
| ------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `start` | 在 LTR 中位于内容的`左侧`，在 RTL 中位于内容的`右侧`。            | 在 LTR 中从`左到右`滑动，在 RTL 中从`右到左`滑动。                     |
| `end`   | 在 LTR 中位于内容的`右侧`，在 RTL 中位于内容的`左侧`。            | 在 LTR 中从`右到左`滑动，在 RTL 中从`左到右`滑动。                     |

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
