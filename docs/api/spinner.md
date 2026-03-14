---
title: 动态旋转图标组件与属性
---
import Props from '@ionic-internal/component-api/v8/spinner/props.md';
import Events from '@ionic-internal/component-api/v8/spinner/events.md';
import Methods from '@ionic-internal/component-api/v8/spinner/methods.md';
import Parts from '@ionic-internal/component-api/v8/spinner/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/spinner/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/spinner/slots.md';

<head>
  <title>ion-spinner：动态旋转图标组件与属性</title>
  <meta name="description" content="ion-spinner 组件提供多种动态 SVG 旋转图标。这些图标表示应用正在加载或执行其他需要等待的进程。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Spinner 组件提供多种动态 SVG 旋转图标。旋转图是视觉指示器，表示应用正在加载内容或执行其他需要用户等待的进程。

## 基本用法

默认的旋转图标基于当前模式（mode）而定。当模式为 `ios` 时，旋转图标为 `"lines"`；当模式为 `md` 时，旋转图标为 `"circular"`。如果设置了 `name` 属性，则会使用指定的旋转图标，而非模式对应的默认图标。

import Basic from '@site/static/usage/v8/spinner/basic/index.md';

<Basic />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v8/spinner/theming/colors/index.md';

<Colors />

### 样式设计

你可以使用自定义 CSS 来设置旋转图标的样式。例如，可以通过设置宽度和高度来调整旋转图标的大小。

import Resizing from '@site/static/usage/v8/spinner/theming/resizing/index.md';

<Resizing />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/spinner/theming/css-properties/index.md';

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