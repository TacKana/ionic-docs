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
  <title>ion-thumbnail：用于图像或图标的缩略图应用组件</title>
  <meta
    name="description"
    content="什么是缩略图图像？缩略图应用组件包裹图像或图标，可用于显示图像的布局或全尺寸图像的预览。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

缩略图（Thumbnail）是通常包裹图像或图标的方形组件。它们可用于更方便地显示一组较大的图像或提供全尺寸图像的预览。

缩略图可以单独使用或放在任何元素内部使用。如果放在 `ion-item` 内部，缩略图将调整大小以适应父组件。要将缩略图定位在项目的左侧或右侧，请将 slot 分别设置为 `start` 或 `end`。

## 基本用法

import Basic from '@site/static/usage/v7/thumbnail/basic/index.md';

<Basic />

## 项目缩略图

import Item from '@site/static/usage/v7/thumbnail/item/index.md';

<Item />

## 主题

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/thumbnail/theming/css-properties/index.md';

<CSSProps />

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
