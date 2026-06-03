---
title: "ion-ripple-effect"
---
import Props from '@ionic-internal/component-api/v8/ripple-effect/props.md';
import Events from '@ionic-internal/component-api/v8/ripple-effect/events.md';
import Methods from '@ionic-internal/component-api/v8/ripple-effect/methods.md';
import Parts from '@ionic-internal/component-api/v8/ripple-effect/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/ripple-effect/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/ripple-effect/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<head>
  <title>ion-ripple-effect：Ionic 应用的涟漪效果组件</title>
  <meta name="description" content="涟漪效果按钮组件添加了 Material Design 墨水涟漪交互效果。它只能在 ion-app 中使用，并且可以添加到任何组件中。" />
</head>

<EncapsulationPill type="shadow" />


涟漪效果组件添加了 [Material Design 墨水涟漪交互效果](https://material.io/develop/web/supporting/ripple)。此组件只能在 `<ion-app>` 内部使用，并且可以添加到任何元素内部。

为父元素设置[相对定位](https://developer.mozilla.org/en-US/docs/Web/CSS/position)很重要，因为涟漪效果是绝对定位的，它会覆盖其最近的具有相对定位的父元素。父元素还应该被赋予 `ion-activatable` 类，这告诉涟漪效果该元素是可点击的。如果涟漪效果溢出其容器，建议在父元素上添加 `overflow: hidden`。


## 基本用法

import Basic from '@site/static/usage/v8/ripple-effect/basic/index.md';

<Basic />


## 类型

有两种类型的涟漪效果：`"bounded"`（有界）和 `"unbounded"`（无界）。默认类型 `"bounded"` 会从点击位置向外扩展涟漪效果。要添加一个始终从元素中心开始并以圆形扩展的涟漪效果，请将类型设置为 `"unbounded"`。

import Type from '@site/static/usage/v8/ripple-effect/type/index.md';

<Type />


## 自定义

涟漪效果可以通过 CSS 自定义为不同的颜色。默认情况下，涟漪颜色设置为继承文本颜色，通常就是正文颜色。可以通过在父元素或涟漪效果本身上设置 CSS `color` 来改变。

import Customizing from '@site/static/usage/v8/ripple-effect/customizing/index.md';

<Customizing />


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
