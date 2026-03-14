---
title: 头像组件
---

import Props from '@ionic-internal/component-api/v8/avatar/props.md';
import Events from '@ionic-internal/component-api/v8/avatar/events.md';
import Methods from '@ionic-internal/component-api/v8/avatar/methods.md';
import Parts from '@ionic-internal/component-api/v8/avatar/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/avatar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/avatar/slots.md';

<head>
  <title>ion-avatar：圆形应用头像图标组件</title>
  <meta name="description" content="ion-avatar 是包裹图像或图标的圆形应用组件，可单独使用或置于任何元素内，用于表示人物或对象。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

头像（Avatars）是通常包裹图像或图标的圆形组件，可用于表示人物或对象。

头像可以单独使用，也可以置于任何元素内部。如果放置在 `ion-chip` 或 `ion-item` 内，头像将自动调整大小以适应父组件。要将头像定位在项目的左侧或右侧，请分别将 slot 设置为 `start` 或 `end`。

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