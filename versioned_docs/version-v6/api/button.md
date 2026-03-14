---
title: 'ion-button'
---

import Props from '@ionic-internal/component-api/v6/button/props.md';
import Events from '@ionic-internal/component-api/v6/button/events.md';
import Methods from '@ionic-internal/component-api/v6/button/methods.md';
import Parts from '@ionic-internal/component-api/v6/button/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/button/slots.md';

<head>
  <title>ion-button：使用自定义 CSS 属性设计和样式化按钮</title>
  <meta
    name="description"
    content="ion-button 提供了一个可点击元素，适用于任何需要标准按钮功能的场景。使用自定义 CSS 属性设计和样式化按钮元素。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

按钮提供了可点击元素，可用于表单中或任何需要简单标准按钮功能的场合。它们可以显示文本、图标或同时显示两者。按钮可以通过多种属性进行样式化，以呈现特定的外观。

## 基本用法

import Basic from '@site/static/usage/v6/button/basic/index.md';

<Basic />

## Expand

此属性允许您指定按钮的宽度。默认情况下，按钮是内联块元素，但设置此属性会将按钮更改为全宽块元素。

import Expand from '@site/static/usage/v6/button/expand/index.md';

<Expand />

## Shape

此属性允许您指定按钮的形状。默认情况下，按钮是带有小圆角的矩形，但将其设置为 `"round"` 会将按钮更改为圆形元素。

import Shape from '@site/static/usage/v6/button/shape/index.md';

<Shape />

## Fill

此属性决定按钮的背景和边框颜色。默认情况下，按钮具有实心背景，除非该按钮位于工具栏内，此时它具有透明背景。

import Fill from '@site/static/usage/v6/button/fill/index.md';

<Fill />

## Size

此属性指定按钮的大小。设置此属性将改变按钮的高度和内边距。

import Size from '@site/static/usage/v6/button/size/index.md';

<Size />

## Icons

import Icons from '@site/static/usage/v6/button/icons/index.md';

<Icons />

## 主题化

### Colors

import Colors from '@site/static/usage/v6/button/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v6/button/theming/css-properties/index.md';

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

## Slots

<Slots />