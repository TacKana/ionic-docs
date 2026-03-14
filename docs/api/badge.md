---
title: 徽章组件
---
import Props from '@ionic-internal/component-api/v8/badge/props.md';
import Events from '@ionic-internal/component-api/v8/badge/events.md';
import Methods from '@ionic-internal/component-api/v8/badge/methods.md';
import Parts from '@ionic-internal/component-api/v8/badge/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/badge/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/badge/slots.md';

<head>
  <title>ion-badge: iOS 与 Android 应用通知徽章图标</title>
  <meta name="description" content="徽章是内联块状元素，通常出现在 iOS 和 Android 应用中其他元素的附近。使用 ion-badge 作为通知，用于指示关联元素的项目数量。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

徽章是内联块状元素，通常出现在其他元素附近。它们通常包含数字或其他字符。可以用作通知，指示与某个元素关联的额外项目数量。如果未传入内容，徽章会自动隐藏。

## 基础用法

import Basic from '@site/static/usage/v8/badge/basic/index.md';

<Basic />

## 标签按钮中的徽章

徽章可以添加到标签按钮内部，通常用于指示通知或高亮显示与该元素关联的额外项目。

:::info
空徽章仅在 `md` 模式下可用。
:::

import InsideTabBar from '@site/static/usage/v8/badge/inside-tab-bar/index.md';

<InsideTabBar />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v8/badge/theming/colors/index.md';

<Colors />

### CSS 属性

import CSSProps from '@site/static/usage/v8/badge/theming/css-properties/index.md';

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