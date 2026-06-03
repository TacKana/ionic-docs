---
title: 'ion-row'
---

import Props from '@ionic-internal/component-api/v7/row/props.md';
import Events from '@ionic-internal/component-api/v7/row/events.md';
import Methods from '@ionic-internal/component-api/v7/row/methods.md';
import Parts from '@ionic-internal/component-api/v7/row/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/row/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/row/slots.md';

<head>
  <title>ion-row：网格系统的水平行组件</title>
  <meta
    name="description"
    content="行是网格系统的水平组件，包含不同数量的列。阅读我们的 ion-row API 文档了解更多关于对齐和用法的信息。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

行是[网格（grid）](./grid)系统的水平组件，包含不同数量的[列（column）](./col)。它们确保列正确排列。

更多信息请参阅[网格（grid）](./grid)文档。

## 行对齐

默认情况下，列会拉伸以填满整行的高度，并在必要时换行。行是[弹性容器](https://developer.mozilla.org/zh-CN/docs/Glossary/Flex_Container)，因此有多种[CSS 类](/layout/css-utilities#flex-属性)可应用于行来自定义此行为。

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
