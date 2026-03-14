---
title: 'ion-badge'
---

import Props from '@ionic-internal/component-api/v6/badge/props.md';
import Events from '@ionic-internal/component-api/v6/badge/events.md';
import Methods from '@ionic-internal/component-api/v6/badge/methods.md';
import Parts from '@ionic-internal/component-api/v6/badge/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/badge/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/badge/slots.md';

<head>
  <title>徽章 | ion-badge：iOS 与 Android 应用通知徽章图标</title>
  <meta
    name="description"
    content="徽章是在 iOS 和 Android 应用中靠近其他元素显示的内联块级元素，使用 ion-badge 作为通知，用于指示关联项目的数量。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

徽章通常是靠近其他元素显示的内联块级元素。它们通常包含数字或其他字符。徽章可作为通知使用，表示某个元素还有更多关联项目，并指示其数量。如果未传入任何内容，徽章将隐藏。

## 基本用法

import Basic from '@site/static/usage/v6/badge/basic/index.md';

<Basic />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v6/badge/theming/colors/index.md';

<Colors />

### CSS 属性

import CSSProps from '@site/static/usage/v6/badge/theming/css-properties/index.md';

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