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
  <title>ion-img: 视口内图片懒加载标签</title>
  <meta
    name="description"
    content="ion-img 标签可在元素进入视口时懒加载图片。在生成大型列表时特别有用，因为图片只在可见时才会加载。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

`ion-img` 是一个图片标签，当元素进入视口时会懒加载图片。这在生成大型列表时特别有用，因为图片只在可见时才会加载。该组件内部使用 [Intersection Observer](https://caniuse.com/#feat=intersectionobserver)，大多数现代浏览器都支持此特性，在不支持的浏览器中会自动回退到 `setTimeout` 方案。

## 基本用法

import Basic from '@site/static/usage/v7/img/basic/index.md';

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