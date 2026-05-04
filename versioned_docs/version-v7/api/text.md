---
title: 'ion-text'
---

import Props from '@ionic-internal/component-api/v7/text/props.md';
import Events from '@ionic-internal/component-api/v7/text/events.md';
import Methods from '@ionic-internal/component-api/v7/text/methods.md';
import Parts from '@ionic-internal/component-api/v7/text/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/text/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/text/slots.md';

<head>
  <title>ion-text: Ionic 应用组件，用于设置文本样式或更改文本颜色</title>
  <meta
    name="description"
    content="ion-text 是一个简单的应用组件，可用于设置任何元素的文本颜色。了解 ion-text 如何包装元素以更改文本颜色。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

文本组件是一个简单的组件，可用于设置任何元素的文本颜色。`ion-text` 元素应包装目标元素，以更改该元素的文本颜色。

## 基本用法

import Basic from '@site/static/usage/v7/text/basic/index.md';

<Basic />

## 主题定制

通过更改 Ionic 提供的任何默认[颜色](/v7/theming/colors)，可以自定义文本组件。

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
