---
title: 导航链接组件
---
import Props from '@ionic-internal/component-api/v8/nav-link/props.md';
import Events from '@ionic-internal/component-api/v8/nav-link/events.md';
import Methods from '@ionic-internal/component-api/v8/nav-link/methods.md';
import Parts from '@ionic-internal/component-api/v8/nav-link/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/nav-link/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/nav-link/slots.md';

<head>
  <title>ion-nav-link：导航链接到指定组件</title>
  <meta name="description" content="导航链接用于跳转到指定组件。它以元素形式实现了调用 push()、pop() 和 setRoot() 方法的功能。了解更多关于 ion-nav-link 的信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


导航链接用于跳转到指定组件。可以通过 `forward`（前进）、`back`（后退）或作为 `root`（根）组件进行导航。

它以元素形式封装了在导航控制器上调用 `push()`、`pop()` 和 `setRoot()` 方法的功能。

更多信息请参阅 [nav](./nav#using-navlink) 文档。


## 属性
<Props />

## 事件
<Events />

## 方法
<Methods />

## CSS 影子部件
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />