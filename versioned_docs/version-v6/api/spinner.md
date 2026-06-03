---
title: 'ion-spinner'
---

import Props from '@ionic-internal/component-api/v7/spinner/props.md';
import Events from '@ionic-internal/component-api/v7/spinner/events.md';
import Methods from '@ionic-internal/component-api/v7/spinner/methods.md';
import Parts from '@ionic-internal/component-api/v7/spinner/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/spinner/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/spinner/slots.md';

<head>
  <title>ion-spinner：动画旋转图标组件和属性</title>
  <meta
    name="description"
    content="ion-spinner 组件提供各种动画 SVG 旋转器。这些图标指示应用正在加载或执行其他需要等待的进程。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

旋转器（Spinner）组件提供各种动画 SVG 旋转器。旋转器是视觉指示器，表示应用正在加载内容或执行其他需要用户等待的进程。

## 基本用法

默认旋转器基于模式。当模式为 `ios` 时，旋转器为 `"lines"`；当模式为 `md` 时，旋转器为 `"circular"`。如果设置了 `name` 属性，将使用该旋转器而不是特定于模式的旋转器。

import Basic from '@site/static/usage/v7/spinner/basic/index.md';

<Basic />

## 主题

### 颜色

import Colors from '@site/static/usage/v7/spinner/theming/colors/index.md';

<Colors />

### 样式

你可以使用自定义 CSS 来设置旋转器的样式。例如，你可以通过设置宽度和高度来调整旋转器大小。

import Resizing from '@site/static/usage/v7/spinner/theming/resizing/index.md';

<Resizing />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/spinner/theming/css-properties/index.md';

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
