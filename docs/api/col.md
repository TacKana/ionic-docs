---
title: "ion-col"
---
import Props from '@ionic-internal/component-api/v8/col/props.md';
import Events from '@ionic-internal/component-api/v8/col/events.md';
import Methods from '@ionic-internal/component-api/v8/col/methods.md';
import Parts from '@ionic-internal/component-api/v8/col/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/col/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/col/slots.md';

<head>
  <title>ion-col：列组件的内边距和其他属性</title>
  <meta name="description" content="ion-col 是放置在行内部的列组件。网格中的内容应放在列内部。了解更多关于列内边距、大小和其他属性的信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


列是[网格](./grid)系统的单元格组件，放置在[行](./row)内部。它们会扩展以填满行。网格内的所有内容都应放在列内部。

更多信息请参见[网格](./grid)文档。


## 列对齐

默认情况下，列会拉伸以填充行的整个高度。列是 [flex 项目](https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item)，因此有多个 [CSS 类](/layout/css-utilities#flex-项目属性) 可以应用于列以自定义此行为。




## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />
