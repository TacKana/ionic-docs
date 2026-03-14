---
title: 项目标签组件
---
import Props from '@ionic-internal/component-api/v8/label/props.md';
import Events from '@ionic-internal/component-api/v8/label/events.md';
import Methods from '@ionic-internal/component-api/v8/label/methods.md';
import Parts from '@ionic-internal/component-api/v8/label/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/label/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/label/slots.md';

<head>
  <title>ion-label：应用中的项目标签颜色与属性</title>
  <meta name="description" content="Label 是一个包装元素，可与其他 Ionic 组件结合使用。使用 ion-label 轻松设计项目标签颜色和其他属性。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Label 元素主要用于向 [Item](./item.md) 组件添加文本内容。在指定可见标签时，Label 也可用于表单控件组件内部，如 [Input](./input.md) 或 [Radio](./radio.md)，但这并非必需。

标签在项目内部的位置可以是内联、固定、堆叠或浮动。

## 基本用法

import Basic from '@site/static/usage/v8/label/basic/index.md';

<Basic />

## 项目标签

import Item from '@site/static/usage/v8/label/item/index.md';

<Item />

## 主题

### 颜色

import Colors from '@site/static/usage/v8/label/theming/colors/index.md';

<Colors />


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

## Slots
<Slots />