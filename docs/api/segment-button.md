---
title: 分段按钮图标与值组件
---
import Props from '@ionic-internal/component-api/v8/segment-button/props.md';
import Events from '@ionic-internal/component-api/v8/segment-button/events.md';
import Methods from '@ionic-internal/component-api/v8/segment-button/methods.md';
import Parts from '@ionic-internal/component-api/v8/segment-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/segment-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/segment-button/slots.md';

<head>
  <title>ion-segment-button | 分段按钮图标与值</title>
  <meta name="description" content="ion-segment-button 是位于分段控件中的一组相关按钮。了解如何在 Ionic 框架应用中使用分段按钮图标并检查其值。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


分段按钮是 [segment](segment.md) 内的一组相关按钮，它们以水平行形式显示。通过将分段的 `value` 设置为分段按钮的 `value`，可以默认选中一个分段按钮。同一时间只能选中一个分段按钮。


## 基本用法

import Basic from '@site/static/usage/v8/segment-button/basic/index.md';

<Basic />


## 布局

`layout` 属性默认设置为 `"icon-top"`。当分段按钮同时具有图标和标签时，图标将显示在标签上方。可以通过将 `layout` 属性设置为 `"icon-bottom"`、`"icon-start"` 或 `"icon-end"` 来改变此行为，分别将图标显示在标签下方、标签起始位置（LTR 模式下为左侧，RTL 模式下为右侧）或标签结束位置（LTR 模式下为右侧，RTL 模式下为左侧）。

import Layout from '@site/static/usage/v8/segment-button/layout/index.md';

<Layout />


## 主题定制
### CSS 影子部件

import CSSParts from '@site/static/usage/v8/segment-button/theming/css-shadow-parts/index.md';

<CSSParts />


### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/segment-button/theming/css-properties/index.md';

<CSSProps />


## 属性
<Props />

## 事件
<Events />

## 方法
<Methods />

## CSS 影子部件
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />