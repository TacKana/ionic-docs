---
title: 'ion-label'
---

import Props from '@ionic-internal/component-api/v7/label/props.md';
import Events from '@ionic-internal/component-api/v7/label/events.md';
import Methods from '@ionic-internal/component-api/v7/label/methods.md';
import Parts from '@ionic-internal/component-api/v7/label/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/label/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/label/slots.md';

<head>
  <title>ion-label：应用的项标签颜色和属性</title>
  <meta
    name="description"
    content="标签是一个包装元素，可与其他 Ionic 组件结合使用。使用 ion-label 轻松设计项目标签颜色和其他属性。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

标签（Label）是主要用于向[项目（Item）](./item.md)组件添加文本内容的元素。在指定可见标签时，标签也可以在表单控件组件（如[输入（Input）](./input.md)或[单选按钮（Radio）](./radio.md)）内部使用，但这不是必需的。

项目内部标签的位置可以是内联、固定、堆叠或浮动。

## 基本用法

import Basic from '@site/static/usage/v7/label/basic/index.md';

<Basic />

## 项目标签

import Item from '@site/static/usage/v7/label/item/index.md';

<Item />

## 主题

### 颜色

import Colors from '@site/static/usage/v7/label/theming/colors/index.md';

<Colors />

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
