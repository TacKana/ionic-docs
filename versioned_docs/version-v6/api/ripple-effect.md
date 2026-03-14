---
title: 'ion-ripple-effect'
---

import Props from '@ionic-internal/component-api/v6/ripple-effect/props.md';
import Events from '@ionic-internal/component-api/v6/ripple-effect/events.md';
import Methods from '@ionic-internal/component-api/v6/ripple-effect/methods.md';
import Parts from '@ionic-internal/component-api/v6/ripple-effect/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/ripple-effect/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/ripple-effect/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<head>
  <title>ion-ripple-effect | 适用于 Ionic 应用的涟漪效果按钮组件</title>
  <meta
    name="description"
    content="涟漪效果按钮组件为 Ionic 应用添加了 Material Design 墨水涟漪交互效果。该组件仅能在 ion-app 中使用，并可以添加到任何组件内。"
  />
</head>

<EncapsulationPill type="shadow" />

涟漪效果组件添加了 [Material Design 墨水涟漪交互效果](https://material.io/develop/web/supporting/ripple)。此组件只能用于 `<ion-app>` 内部，并且可以添加到任何元素中。

在父元素上设置[相对定位](https://developer.mozilla.org/en-US/docs/Web/CSS/position)非常重要，因为涟漪效果采用绝对定位，会覆盖其最近具有相对定位的父元素。父元素还应添加 `ion-activatable` 类，该类用于告知涟漪效果该元素是可点击的。如果涟漪效果溢出其容器，建议在父元素上添加 `overflow: hidden`。

## 基本用法

import Basic from '@site/static/usage/v6/ripple-effect/basic/index.md';

<Basic />

## 类型

涟漪效果有两种类型：`"bounded"`（有界）和 `"unbounded"`（无界）。默认类型 `"bounded"` 会从点击位置向外扩展涟漪效果。若要添加一个始终从元素中心开始并以圆形扩展的涟漪效果，请将类型设置为 `"unbounded"`。

import Type from '@site/static/usage/v6/ripple-effect/type/index.md';

<Type />

## 自定义

可以通过 CSS 将涟漪颜色自定义为不同的颜色。默认情况下，涟漪颜色设置为继承文本颜色，这通常是主题文本颜色。可以通过在父元素或涟漪效果本身上设置 CSS `color` 属性来更改此颜色。

import Customizing from '@site/static/usage/v6/ripple-effect/customizing/index.md';

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