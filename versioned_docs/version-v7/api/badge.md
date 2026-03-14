---
title: 'ion-badge'
---

import Props from '@ionic-internal/component-api/v7/badge/props.md';
import Events from '@ionic-internal/component-api/v7/badge/events.md';
import Methods from '@ionic-internal/component-api/v7/badge/methods.md';
import Parts from '@ionic-internal/component-api/v7/badge/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/badge/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/badge/slots.md';

<head>
  <title>ion-badge：iOS 与 Android 应用通知徽章图标</title>
  <meta
    name="description"
    content="徽章是内联块元素，通常出现在 iOS 和 Android 应用中的其他元素附近。使用 ion-badge 作为通知，指示关联项目的数量。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

徽章通常是内联块元素，出现在其他元素附近。它们通常包含数字或其他字符。徽章可用作通知，表示某个元素关联了额外项目，并指示具体数量。如果未传入内容，徽章会隐藏。

## 基本用法

import Basic from '@site/static/usage/v7/badge/basic/index.md';

<Basic />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v7/badge/theming/colors/index.md';

<Colors />

### CSS 属性

import CSSProps from '@site/static/usage/v7/badge/theming/css-properties/index.md';

<CSSProps />

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS 阴影部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />