---
title: 按钮组件
---
import Props from '@ionic-internal/component-api/v8/button/props.md';
import Events from '@ionic-internal/component-api/v8/button/events.md';
import Methods from '@ionic-internal/component-api/v8/button/methods.md';
import Parts from '@ionic-internal/component-api/v8/button/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/button/slots.md';

<head>
  <title>ion-button: 使用自定义 CSS 属性为按钮设计样式</title>
  <meta name="description" content="ion-button 提供了一个可点击元素，适用于任何需要标准按钮功能的场景。使用自定义 CSS 属性来设计和样式化按钮元素。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

按钮提供了一个可点击元素，可用于表单或任何需要简单标准按钮功能的场景。按钮可以显示文本、图标或两者兼具。可以通过多种属性为按钮设置特定的外观样式。

## 基本用法

import Basic from '@site/static/usage/v8/button/basic/index.md';

<Basic />

## 展开属性

此属性用于指定按钮的宽度。默认情况下，按钮具有 `display: inline-block` 样式，但设置此属性会将按钮更改为具有 `display: block` 的全宽元素。

import Expand from '@site/static/usage/v8/button/expand/index.md';

<Expand />

## 形状属性

此属性用于指定按钮的形状。默认情况下，按钮为带有小圆角的矩形，但将其设置为 `"round"` 会将按钮更改为圆角元素。

import Shape from '@site/static/usage/v8/button/shape/index.md';

<Shape />

## 填充样式属性

此属性决定按钮的背景和边框颜色。默认情况下，按钮具有实心背景，除非按钮位于工具栏内部，此时它具有透明背景。

import Fill from '@site/static/usage/v8/button/fill/index.md';

<Fill />

## 尺寸属性

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

## 无障碍访问

按钮设计时已考虑了无障碍访问，但根据其内容可能需要进行一些调整。按钮组件渲染的是原生 [button 元素](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)，这使其能够利用原生按钮提供的功能。

### 文本内容溢出处理

在许多情况下，按钮的文本内容可能会溢出容器。当发生这种情况时，建议将文本包裹在按钮内，以便仍然可以阅读所有文本。按钮组件将自动调整其高度以适应额外的文本行。

当文本过长无法容纳时，按钮文本不会自动换行。为了使文本换行，可以添加 `ion-text-wrap` 类，该类会将 `white-space` 属性设置为 `"normal"`。这将在未来的主要版本中成为默认行为。

:::info
下面按钮上设置的 `max-width` 样式仅用于演示目的。文本换行功能也适用于动态宽度的按钮。
:::

import TextWrapping from '@site/static/usage/v8/button/text-wrapping/index.md';

<TextWrapping />

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