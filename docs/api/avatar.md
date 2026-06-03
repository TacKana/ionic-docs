---
title: "ion-avatar"
---

import Props from '@ionic-internal/component-api/v8/avatar/props.md';
import Events from '@ionic-internal/component-api/v8/avatar/events.md';
import Methods from '@ionic-internal/component-api/v8/avatar/methods.md';
import Parts from '@ionic-internal/component-api/v8/avatar/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/avatar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/avatar/slots.md';

<head>
  <title>ion-avatar：圆形应用头像图标组件</title>
  <meta name="description" content="ion-avatar 是圆形的应用组件，用于包裹图像或图标。它们可以单独使用或在任何元素内部使用，用于表示人物或对象。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

头像（Avatar）是圆形组件，通常包裹图像或图标。它们可用于表示人物或对象。

头像可以单独使用或放在任何元素内部使用。如果放在 `ion-chip` 或 `ion-item` 内部，头像将自动调整大小以适应父组件。要将头像定位在项目的左侧或右侧，分别将插槽设置为 `start` 或 `end`。

## 基本用法

import Basic from '@site/static/usage/v8/avatar/basic/index.md';

<Basic />

## 芯片头像

import Chip from '@site/static/usage/v8/avatar/chip/index.md';

<Chip />

## 项目头像

import Item from '@site/static/usage/v8/avatar/item/index.md';

<Item />

## 主题定制

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/avatar/theming/css-properties/index.md';

<CSSProps />

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
