---
title: 'ion-thumbnail'
---

import Props from '@ionic-internal/component-api/v6/thumbnail/props.md';
import Events from '@ionic-internal/component-api/v6/thumbnail/events.md';
import Methods from '@ionic-internal/component-api/v6/thumbnail/methods.md';
import Parts from '@ionic-internal/component-api/v6/thumbnail/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/thumbnail/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/thumbnail/slots.md';

<head>
  <title>ion-thumbnail | 用于包裹图片或图标的缩略图应用组件</title>
  <meta
    name="description"
    content="什么是缩略图？缩略图应用组件包裹图像或图标，可用于展示图片布局或预览全尺寸图像。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

缩略图（Thumbnail）是通常用于包裹图像或图标的方形组件。它们可以更便捷地展示一组较大尺寸的图片，或提供全尺寸图像的预览。

缩略图可以单独使用，也可以放置在任何元素内部。如果放置在 `ion-item` 内，缩略图将自动调整大小以适应父组件。若要将缩略图定位在项目的左侧或右侧，请将 slot 属性分别设置为 `start` 或 `end`。

## 基本用法

import Basic from '@site/static/usage/v6/thumbnail/basic/index.md';

<Basic />

## 项目缩略图

import Item from '@site/static/usage/v6/thumbnail/item/index.md';

<Item />

## 主题定制

### CSS 自定义属性

import CSSProps from '@site/static/usage/v6/thumbnail/theming/css-properties/index.md';

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

## Slots

<Slots />