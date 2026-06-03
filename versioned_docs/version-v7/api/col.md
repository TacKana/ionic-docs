---
title: 'ion-col'
---

import Props from '@ionic-internal/component-api/v7/col/props.md';
import Events from '@ionic-internal/component-api/v7/col/events.md';
import Methods from '@ionic-internal/component-api/v7/col/methods.md';
import Parts from '@ionic-internal/component-api/v7/col/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/col/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/col/slots.md';

<head>
  <title>ion-col：列组件内边距和其他属性</title>
  <meta
    name="description"
    content="ion-col 是位于行内的列组件。网格中的内容放在列内。阅读更多关于列内边距、尺寸和其他属性的信息。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

列（Column）是[网格](./grid)系统的单元格组件，位于[行](./row)内部。它们会扩展以填满整行。网格中的所有内容都应放在列内。

更多信息请参阅[网格](./grid)文档。

## 列对齐

默认情况下，列会拉伸以填满整行的高度。列是[弹性项目](https://developer.mozilla.org/zh-CN/docs/Glossary/Flex_Item)，因此有多种[CSS 类](/v7/layout/css-utilities#flex-项目属性)可应用于列来自定义此行为。

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
