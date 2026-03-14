---
sidebar_label: 'ion-item-options'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/item-options/props.md';
import Events from '@ionic-internal/component-api/v5/item-options/events.md';
import Methods from '@ionic-internal/component-api/v5/item-options/methods.md';
import Parts from '@ionic-internal/component-api/v5/item-options/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/item-options/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/item-options/slots.md';

# ion-item-options

`ion-item-sliding` 组件的选项按钮。这些按钮可以放置在[起始侧或结束侧](#side-description)。
你可以结合 `ionSwipe` 事件和 `expandable` 指令，为列表项创建完整的滑动操作。

## 侧边描述

| 侧边    | 位置                                                                       | 滑动方向                                                                       |
| ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `start` | 在 LTR（从左到右）布局中位于内容的`左侧`；在 RTL（从右到左）布局中位于内容的`右侧`。 | 在 LTR 布局中，从`左`向`右`滑动；在 RTL 布局中，从`右`向`左`滑动。             |
| `end`   | 在 LTR 布局中位于内容的`右侧`；在 RTL 布局中位于内容的`左侧`。             | 在 LTR 布局中，从`右`向`左`滑动；在 RTL 布局中，从`左`向`右`滑动。             |

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