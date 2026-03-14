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
  <title>ion-spinner: 动画旋转加载图标组件与属性</title>
  <meta
    name="description"
    content="ion-spinner 组件提供多种动画 SVG 加载图标。这些图标表示应用正在加载或执行其他需要等待的处理过程。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Spinner 组件提供多种动画 SVG 加载图标。旋转加载图标是视觉指示器，用于表示应用正在加载内容或执行其他需要用户等待的处理过程。

## 基本用法

默认的旋转加载图标基于应用模式 (mode) 决定。当模式为 `ios` 时，加载图标为 `"lines"`；当模式为 `md` 时，加载图标为 `"circular"`。如果设置了 `name` 属性，则会使用该属性指定的加载图标，而非模式特定的加载图标。

import Basic from '@site/static/usage/v7/spinner/basic/index.md';

<Basic />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v7/spinner/theming/colors/index.md';

<Colors />

### 样式调整

您可以使用自定义 CSS 来设置加载图标的样式。例如，可以通过设置宽度和高度来调整加载图标的大小。

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

## CSS Shadow Parts

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />