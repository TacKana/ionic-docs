---
title: 缩略图组件
---

import Props from '@ionic-internal/component-api/v8/thumbnail/props.md';
import Events from '@ionic-internal/component-api/v8/thumbnail/events.md';
import Methods from '@ionic-internal/component-api/v8/thumbnail/methods.md';
import Parts from '@ionic-internal/component-api/v8/thumbnail/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/thumbnail/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/thumbnail/slots.md';

<head>
  <title>ion-thumbnail：用于图像或图标的缩略图应用组件</title>
  <meta name="description" content="什么是缩略图？缩略图应用组件包含图像或图标，可用于显示图像布局或全尺寸图像的预览。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

缩略图是方形组件，通常包含图像或图标。它们可用于更轻松地显示一组较大的图像，或提供全尺寸图像的预览。

缩略图可以单独使用，也可以在任何元素内部使用。如果放置在 `ion-item` 内，缩略图将调整大小以适应父组件。要将缩略图定位在项目的左侧或右侧，请将 slot 分别设置为 `start` 或 `end`。

## 基本用法

import Basic from '@site/static/usage/v8/thumbnail/basic/index.md';

<Basic />

## 项目缩略图

import Item from '@site/static/usage/v8/thumbnail/item/index.md';

<Item />

## 主题定制

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/thumbnail/theming/css-properties/index.md';

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