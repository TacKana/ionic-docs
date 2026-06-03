---
title: 'ion-ripple-effect'
---

import Props from '@ionic-internal/component-api/v7/ripple-effect/props.md';
import Events from '@ionic-internal/component-api/v7/ripple-effect/events.md';
import Methods from '@ionic-internal/component-api/v7/ripple-effect/methods.md';
import Parts from '@ionic-internal/component-api/v7/ripple-effect/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/ripple-effect/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/ripple-effect/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<head>
  <title>ion-ripple-effect：Ionic 应用的涟漪效果组件</title>
  <meta
    name="description"
    content="涟漪效果按钮组件添加 Material Design 墨水涟漪交互效果。它只能在 ion-app 中使用，并可以添加到任何组件中。"
  />
</head>

<EncapsulationPill type="shadow" />

涟漪效果组件添加 [Material Design 墨水涟漪交互效果](https://material.io/develop/web/supporting/ripple)。此组件只能在 `<ion-app>` 内部使用，并可以添加到任何元素内部。

重要的是在父元素上设置[相对定位](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)，因为涟漪效果是绝对定位的，将覆盖具有相对定位的最近父元素。父元素还应被赋予 `ion-activatable` 类，告诉涟漪效果该元素是可点击的。如果涟漪溢出其容器，建议向父元素添加 `overflow: hidden`。

## 基本用法

import Basic from '@site/static/usage/v7/ripple-effect/basic/index.md';

<Basic />

## 类型

有两种类型的涟漪效果：`"bounded"` 和 `"unbounded"`。默认类型 `"bounded"` 会从点击位置向外扩展涟漪效果。要添加始终从元素中心开始并呈圆形扩展的涟漪效果，请将类型设置为 `"unbounded"`。

import Type from '@site/static/usage/v7/ripple-effect/type/index.md';

<Type />

## 自定义

涟漪可以通过 CSS 自定义为不同的颜色。默认情况下，涟漪颜色设置为继承文本颜色，通常是正文颜色。这可以通过在父元素或涟漪效果本身上设置 CSS `color` 来更改。

import Customizing from '@site/static/usage/v7/ripple-effect/customizing/index.md';

<Customizing />

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
