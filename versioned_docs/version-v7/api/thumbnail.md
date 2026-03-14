---
title: 'ion-thumbnail'
---

import Props from '@ionic-internal/component-api/v7/thumbnail/props.md';
import Events from '@ionic-internal/component-api/v7/thumbnail/events.md';
import Methods from '@ionic-internal/component-api/v7/thumbnail/methods.md';
import Parts from '@ionic-internal/component-api/v7/thumbnail/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/thumbnail/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/thumbnail/slots.md';

<head>
  <title>ion-thumbnail：用于图片或图标的缩略图应用组件</title>
  <meta
    name="description"
    content="什么是缩略图？缩略图应用组件包裹图片或图标，可用于展示图片布局或全尺寸图片的预览。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

缩略图是通常包裹图片或图标的方形组件。它们可用于更轻松地展示一组大尺寸图片，或提供全尺寸图片的预览。

缩略图可以单独使用，也可以置于任何元素内部。如果放置在 `ion-item` 内，缩略图将调整大小以适应父组件。若要将缩略图定位在项目的左侧或右侧，请将 `slot` 属性分别设置为 `start` 或 `end`。

## 基本用法

import Basic from '@site/static/usage/v7/thumbnail/basic/index.md';

<Basic />

## 项目缩略图

import Item from '@site/static/usage/v7/thumbnail/item/index.md';

<Item />

## 主题定制

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/thumbnail/theming/css-properties/index.md';

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