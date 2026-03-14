---
title: 'ion-nav-link'
---

import Props from '@ionic-internal/component-api/v6/nav-link/props.md';
import Events from '@ionic-internal/component-api/v6/nav-link/events.md';
import Methods from '@ionic-internal/component-api/v6/nav-link/methods.md';
import Parts from '@ionic-internal/component-api/v6/nav-link/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/nav-link/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/nav-link/slots.md';

<head>
  <title>ion-nav-link：用于导航到指定组件的元素</title>
  <meta
    name="description"
    content="导航链接用于导航到指定的组件。它是调用 push()、pop() 和 setRoot() 方法的元素形式。点击了解更多关于 ion-nav-link 的信息。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

导航链接用于导航到指定的组件。可以通过 `forward`、`back` 或作为 `root` 组件的方式进行导航。

它是以元素形式调用导航控制器上的 `push()`、`pop()` 和 `setRoot()` 方法。

更多信息请参阅 [nav](./nav#using-navlink) 文档。

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