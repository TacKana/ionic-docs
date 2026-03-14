---
title: 'ion-segment-button'
---

import Props from '@ionic-internal/component-api/v6/segment-button/props.md';
import Events from '@ionic-internal/component-api/v6/segment-button/events.md';
import Methods from '@ionic-internal/component-api/v6/segment-button/methods.md';
import Parts from '@ionic-internal/component-api/v6/segment-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/segment-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/segment-button/slots.md';

<head>
  <title>ion-segment-button | 分段按钮图标与分段值</title>
  <meta
    name="description"
    content="ion-segment-button 是 Segment（分段控件）内的一组相关按钮。了解如何在 Ionic 框架应用中使用分段按钮图标并检查其值。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

分段按钮（Segment buttons）是 [Segment（分段控件）](segment.md) 内的一组相关按钮。它们以水平行形式显示。默认情况下，可以通过将 Segment 的 `value` 设置为分段按钮的 `value` 来选中该按钮。每次只能选中一个分段按钮。

## 基本用法

import Basic from '@site/static/usage/v6/segment-button/basic/index.md';

<Basic />

## 布局

`layout` 属性默认为 `"icon-top"`。当一个分段按钮同时具有图标和标签时，它会将图标显示在标签上方。可以通过将 `layout` 属性设置为 `"icon-bottom"`、`"icon-start"` 或 `"icon-end"` 来改变这种行为，分别将图标显示在标签下方、标签起始位置（在 LTR 中为左侧，在 RTL 中为右侧）或标签结束位置（在 LTR 中为右侧，在 RTL 中为左侧）。

import Layout from '@site/static/usage/v6/segment-button/layout/index.md';

<Layout />

## 主题定制

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v6/segment-button/theming/css-shadow-parts/index.md';

<CSSParts />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v6/segment-button/theming/css-properties/index.md';

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
