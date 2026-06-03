---
title: "ion-button"
---
import Props from '@ionic-internal/component-api/v8/button/props.md';
import Events from '@ionic-internal/component-api/v8/button/events.md';
import Methods from '@ionic-internal/component-api/v8/button/methods.md';
import Parts from '@ionic-internal/component-api/v8/button/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/button/slots.md';

<head>
  <title>ion-button：使用自定义 CSS 属性设置按钮样式</title>
  <meta name="description" content="ion-button 提供可点击的元素，适用于任何需要标准按钮功能的地方。使用自定义 CSS 属性设计和设置按钮元素的样式。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

按钮提供可点击的元素，可用于表单或任何需要简单标准按钮功能的地方。它们可以显示文本、图标或两者兼有。按钮可以通过多个属性设置样式以达到特定的外观。

## 基本用法

import Basic from '@site/static/usage/v8/button/basic/index.md';

<Basic />

## 扩展

此属性让您指定按钮的宽度。默认情况下，按钮具有 `display: inline-block`，但设置此属性会将按钮更改为 `display: block` 的全宽元素。

import Expand from '@site/static/usage/v8/button/expand/index.md';

<Expand />

## 形状

此属性让您指定按钮的形状。默认情况下，按钮为带有小边框半径的矩形，但将其设置为 `"round"` 会将按钮更改为圆角元素。

import Shape from '@site/static/usage/v8/button/shape/index.md';

<Shape />

## 填充

此属性决定按钮的背景和边框颜色。默认情况下，按钮具有实心背景，除非按钮位于工具栏内部，此时它具有透明背景。

import Fill from '@site/static/usage/v8/button/fill/index.md';

<Fill />

## 尺寸

此属性指定按钮的大小。设置此属性将改变按钮的高度和内边距。

import Size from '@site/static/usage/v8/button/size/index.md';

<Size />

## 图标

import Icons from '@site/static/usage/v8/button/icons/index.md';

<Icons />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v8/button/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/button/theming/css-properties/index.md';

<CSSProps />

## 无障碍

按钮设计上考虑了无障碍性，但根据其内容可能需要进行一些调整。按钮组件渲染一个原生的 [button 元素](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)，这使其能够利用原生按钮提供的功能。

### 溢出文本内容

在许多情况下，按钮的文本内容可能会溢出容器。建议在这种情况下让按钮内的文本换行，以便所有文本仍然可读。按钮组件会自动调整其高度以适应额外的文本行。

当文本过长无法容纳时，按钮文本不会自动换行到下一行。为了使文本换行，可以添加 `ion-text-wrap` 类，这将把 `white-space` 属性设置为 `"normal"`。这将在未来的主要版本中成为默认行为。

:::info
下方的按钮上设置 `max-width` 样式仅用于演示目的。文本换行动态按钮宽度下同样有效。
:::

import TextWrapping from '@site/static/usage/v8/button/text-wrapping/index.md';

<TextWrapping />

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
