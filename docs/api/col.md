---
title: 列组件
---
import Props from '@ionic-internal/component-api/v8/col/props.md';
import Events from '@ionic-internal/component-api/v8/col/events.md';
import Methods from '@ionic-internal/component-api/v8/col/methods.md';
import Parts from '@ionic-internal/component-api/v8/col/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/col/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/col/slots.md';

<head>
  <title>ion-col：列组件的内边距及其他属性</title>
  <meta name="description" content="ion-col 是位于行（row）内部的列组件。网格（grid）中的内容都应放置在列内。了解更多关于列内边距、尺寸及其他属性的内容。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


列是[网格（grid）](./grid)系统的单元格组件，位于[行（row）](./row)内部。列会自动扩展以填满所在行的宽度。网格中的所有内容都应放置在列内。

更多详细信息，请参阅[网格（grid）](./grid)文档。


## 列对齐方式

默认情况下，列会拉伸以填满行（row）的整个高度。列属于[弹性项目（flex items）](https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item)，因此可以通过应用多个[CSS类](/layout/css-utilities#flex-item-properties)来自定义其对齐行为。



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