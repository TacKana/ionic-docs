---
title: 'ion-img'
---

import Props from '@ionic-internal/component-api/v6/img/props.md';
import Events from '@ionic-internal/component-api/v6/img/events.md';
import Methods from '@ionic-internal/component-api/v6/img/methods.md';
import Parts from '@ionic-internal/component-api/v6/img/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/img/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/img/slots.md';

<head>
  <title>视口内图片懒加载的Img标签 | ion-img 标签</title>
  <meta
    name="description"
    content="Img标签在进入视口时对图片进行懒加载。在生成大型列表时使用此组件——因为图片只在可见时才加载。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Img 是一个标签，当该标签进入视口（viewport）时会懒加载图片。这在生成大型列表时非常有用，因为图片只在可见时才被加载。该组件内部使用 [Intersection Observer](https://caniuse.com/#feat=intersectionobserver)，大多数现代浏览器都支持此 API，在不支持时会回退到 `setTimeout` 方法。

## 基本用法

import Basic from '@site/static/usage/v6/img/basic/index.md';

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