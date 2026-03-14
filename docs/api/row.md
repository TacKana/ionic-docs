---
title: 网格系统的横向行组件
---
import Props from '@ionic-internal/component-api/v8/row/props.md';
import Events from '@ionic-internal/component-api/v8/row/events.md';
import Methods from '@ionic-internal/component-api/v8/row/methods.md';
import Parts from '@ionic-internal/component-api/v8/row/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/row/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/row/slots.md';

<head>
  <title>ion-row：网格系统的横向行组件</title>
  <meta name="description" content="行是网格系统的横向组件，内含数量不等的列。请阅读 ion-row API 文档，了解更多对齐方式和使用方法。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

行是[网格](./grid)系统的横向组件，内含数量不等的[列](./col)。它们确保列被正确定位。

更多信息请参阅[网格](./grid)文档。

## 行对齐

默认情况下，列会拉伸以填满行的整个高度，并在必要时换行。行是[弹性容器](https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container)，因此有多个[CSS 类](/docs/layout/css-utilities#flex-container-properties)可应用于行以自定义此行为。

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