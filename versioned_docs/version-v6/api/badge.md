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
  <title>ion-badge：iOS 和 Android 应用通知徽章图标</title>
  <meta
    name="description"
    content="徽章（Badge）是出现在 iOS 和 Android 应用其他元素旁的内联块元素——使用 ion-badge 作为指示项目数量的通知。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

徽章（Badge）是通常出现在另一个元素附近的内联块元素。通常它们包含一个数字或其他字符。它们可以用作通知，表明与某个元素相关的额外项目并指示有多少个项目。如果没有传入内容，徽章将被隐藏。

## 基本用法

import Basic from '@site/static/usage/v7/badge/basic/index.md';

<Basic />

## 主题

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

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
