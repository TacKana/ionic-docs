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
  <title>ion-row: 网格系统的水平行组件</title>
  <meta
    name="description"
    content="行是网格系统的水平组件，包含数量不等的列。如需了解更多对齐和使用信息，请参阅我们的 ion-row API 文档。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

行是[网格系统](./grid)的水平组件，包含数量不等的[列](./col)。行确保列能够正确定位。

更多信息请参阅[网格系统](./grid)文档。

## 行对齐

默认情况下，列会拉伸以填满行的整个高度，并在必要时自动换行。行是[弹性容器](https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container)，因此可以将多个[CSS类](/docs/layout/css-utilities#flex-container-properties)应用于行来自定义此行为。

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