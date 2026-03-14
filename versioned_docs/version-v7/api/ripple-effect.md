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
  <title>ion-ripple-effect：Ionic 应用的水波纹效果组件</title>
  <meta
    name="description"
    content="水波纹效果按钮组件添加了 Material Design 墨水涟漪交互效果。它只能在 ion-app 中使用，并可以添加到任何组件中。"
  />
</head>

<EncapsulationPill type="shadow" />

水波纹效果组件添加了 [Material Design 墨水涟漪交互效果](https://material.io/develop/web/supporting/ripple)。此组件只能在 `<ion-app>` 内部使用，并可以添加到任何元素中。

在父元素上设置 [相对定位](https://developer.mozilla.org/en-US/docs/Web/CSS/position) 非常重要，因为水波纹效果采用绝对定位，并将覆盖其最近的具有相对定位的父元素。父元素还应添加 `ion-activatable` 类，这告诉水波纹效果该元素是可点击的。如果水波纹溢出其容器，建议在父元素上添加 `overflow: hidden`。

## 基本用法

import Basic from '@site/static/usage/v7/ripple-effect/basic/index.md';

<Basic />

## 类型

水波纹效果有两种类型：`"bounded"` 和 `"unbounded"`。默认类型 `"bounded"` 会从点击位置向外扩展水波纹效果。要添加始终从元素中心开始并以圆形扩展的水波纹效果，请将类型设置为 `"unbounded"`。

import Type from '@site/static/usage/v7/ripple-effect/type/index.md';

<Type />

## 自定义

可以通过 CSS 将水波纹自定义为不同的颜色。默认情况下，水波纹颜色设置为继承文本颜色，通常是主体颜色。可以通过在父元素或水波纹效果本身上设置 CSS `color` 属性来更改此颜色。

import Customizing from '@site/static/usage/v7/ripple-effect/customizing/index.md';

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