---
title: "ion-img"
---

import Props from '@ionic-internal/component-api/v8/img/props.md';
import Events from '@ionic-internal/component-api/v8/img/events.md';
import Methods from '@ionic-internal/component-api/v8/img/methods.md';
import Parts from '@ionic-internal/component-api/v8/img/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/img/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/img/slots.md';

<head>
  <title>ion-img: 在视口中延迟加载图像的图片标签</title>
  <meta name="description" content="Img 标签在标签进入视口时延迟加载图像。在生成大型列表时使用此组件——因为图像仅在可见时才加载。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Img 是一个标签，当标签在视口中时，它会延迟加载图像。这在生成大型列表时非常有用，因为图像仅在可见时才加载。该组件在内部使用 [Intersection Observer](https://caniuse.com/#feat=intersectionobserver)，大多数现代浏览器都支持它，但在不支持时会回退到使用 `setTimeout`。

## 基本用法

import Basic from '@site/static/usage/v8/img/basic/index.md';

<Basic />

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