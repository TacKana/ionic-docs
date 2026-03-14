---
title: 'ion-spinner'
---

import Props from '@ionic-internal/component-api/v6/spinner/props.md';
import Events from '@ionic-internal/component-api/v6/spinner/events.md';
import Methods from '@ionic-internal/component-api/v6/spinner/methods.md';
import Parts from '@ionic-internal/component-api/v6/spinner/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/spinner/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/spinner/slots.md';

<head>
  <title>ion-spinner | 旋转加载图标组件及属性</title>
  <meta
    name="description"
    content="ion-spinner组件提供了多种动画SVG加载图标。这些图标用于指示应用正在加载内容或执行其他需要用户等待的操作。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Spinner组件提供了多种动画SVG加载图标。这些加载图标是视觉指示器，用于表明应用正在加载内容或执行其他需要用户等待的操作。

## 基本用法

默认的加载图标样式基于当前模式（mode）。当模式为 `ios` 时，加载图标为 `"lines"` 样式；当模式为 `md` 时，加载图标为 `"circular"` 样式。如果设置了 `name` 属性，则会使用指定的加载图标，而不是模式对应的默认图标。

import Basic from '@site/static/usage/v6/spinner/basic/index.md';

<Basic />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v6/spinner/theming/colors/index.md';

<Colors />

### CSS自定义属性

import CSSProps from '@site/static/usage/v6/spinner/theming/css-properties/index.md';

<CSSProps />

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS Shadow Parts

<Parts />

## CSS自定义属性

<CustomProps />

## 插槽

<Slots />