---
title: 'ion-img'
---

import Props from '@ionic-internal/component-api/v7/img/props.md';
import Events from '@ionic-internal/component-api/v7/img/events.md';
import Methods from '@ionic-internal/component-api/v7/img/methods.md';
import Parts from '@ionic-internal/component-api/v7/img/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/img/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/img/slots.md';

<head>
  <title>ion-img：在视口中延迟加载图像的 Img 标签</title>
  <meta
    name="description"
    content="Img 标签在标签位于视口中时延迟加载图像。生成大型列表时使用此组件——因为图像仅在可见时加载。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Img 是一个标签，当标签在视口中时会延迟加载图像。这在生成大型列表时非常有用，因为图像仅在可见时才加载。该组件内部使用 [Intersection Observer](https://caniuse.com/#feat=intersectionobserver)，大多数现代浏览器都支持，但在不支持时会回退到使用 `setTimeout`。

## 基本用法

import Basic from '@site/static/usage/v7/img/basic/index.md';

<Basic />

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
