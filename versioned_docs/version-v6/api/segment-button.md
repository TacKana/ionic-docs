---
title: 'ion-segment-button'
---

import Props from '@ionic-internal/component-api/v7/segment-button/props.md';
import Events from '@ionic-internal/component-api/v7/segment-button/events.md';
import Methods from '@ionic-internal/component-api/v7/segment-button/methods.md';
import Parts from '@ionic-internal/component-api/v7/segment-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/segment-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/segment-button/slots.md';

<head>
  <title>ion-segment-button | 分段按钮图标和段值</title>
  <meta
    name="description"
    content="ion-segment-button 是分段控件（Segment）内部的一组相关按钮。了解如何在 Ionic 框架应用中使用分段按钮图标和检查其值。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

分段按钮（Segment button）是[分段控件（segment）](segment.md)内部的一组相关按钮。它们在水平行中显示。可以通过将分段控件的 `value` 设置为分段按钮的 `value` 来默认选中一个分段按钮。一次只能选择一个分段按钮。

## 基本用法

import Basic from '@site/static/usage/v7/segment-button/basic/index.md';

<Basic />

## 布局

`layout` 属性默认设置为 `"icon-top"`。当分段按钮同时具有图标和标签时，图标将显示在标签上方。可以通过将 `layout` 属性设置为 `"icon-bottom"`、`"icon-start"` 或 `"icon-end"` 来更改此行为，这将分别使图标显示在标签下方、标签开始处（LTR 中为左侧，RTL 中为右侧）或标签结束处（LTR 中为右侧，RTL 中为左侧）。

import Layout from '@site/static/usage/v7/segment-button/layout/index.md';

<Layout />

## 主题

### CSS 阴影部分

import CSSParts from '@site/static/usage/v7/segment-button/theming/css-shadow-parts/index.md';

<CSSParts />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/segment-button/theming/css-properties/index.md';

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
