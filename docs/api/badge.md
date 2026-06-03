---
title: "ion-badge"
---
import Props from '@ionic-internal/component-api/v8/badge/props.md';
import Events from '@ionic-internal/component-api/v8/badge/events.md';
import Methods from '@ionic-internal/component-api/v8/badge/methods.md';
import Parts from '@ionic-internal/component-api/v8/badge/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/badge/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/badge/slots.md';

<head>
  <title>ion-badge：iOS 和 Android 应用通知徽章图标</title>
  <meta name="description" content="徽章是出现在 iOS 和 Android 应用其他元素附近的内联块元素——使用 ion-badge 作为通知来指示有多少项目。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

徽章是内联块元素，通常出现在另一个元素附近。通常它们包含数字或其他字符。它们可以用作通知，指示与某个元素关联的额外项目并显示项目数量。如果没有传入内容，徽章将被隐藏。

## 基础用法

import Basic from '@site/static/usage/v8/badge/basic/index.md';

<Basic />

## 标签按钮中的徽章

徽章可以添加到标签按钮内部，通常用于指示通知或突出显示与元素关联的额外项目。

:::info
空徽章仅适用于 `md` 模式。
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

## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />
