---
title: 'ion-row'
---

import Props from '@ionic-internal/component-api/v6/row/props.md';
import Events from '@ionic-internal/component-api/v6/row/events.md';
import Methods from '@ionic-internal/component-api/v6/row/methods.md';
import Parts from '@ionic-internal/component-api/v6/row/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/row/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/row/slots.md';

<head>
  <title>ion-row：水平行组件与对齐方式 | Ionic API 文档</title>
  <meta
    name="description"
    content="行（row）是网格系统中的水平组件，包含不同数量的列（column）。阅读 ion-row API 文档，了解更多关于对齐方式和使用方法的信息。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

行（row）是[网格系统](./grid)中的水平组件，包含不同数量的[列（column）](./col)。它们确保列能够被正确放置。

更多信息请参阅[网格系统](./grid)文档。

## 行对齐方式

默认情况下，列会拉伸以填满行的整个高度，并在必要时自动换行。行是[弹性容器（flex container）](https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container)，因此可以将多个 [CSS 工具类](/docs/layout/css-utilities#flex-container-properties)应用于行来定制此行为。

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