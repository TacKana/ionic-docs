---
title: 'ion-router-link'
---

import Props from '@ionic-internal/component-api/v7/router-link/props.md';
import Events from '@ionic-internal/component-api/v7/router-link/events.md';
import Methods from '@ionic-internal/component-api/v7/router-link/methods.md';
import Parts from '@ionic-internal/component-api/v7/router-link/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/router-link/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/router-link/slots.md';

<head>
  <title>ion-router-link：导航到指定链接</title>
  <meta
    name="description"
    content="使用 ion-router-link 组件可导航到指定链接。该路由链接可以接受用于定位的 href 属性和用于转场动画的方向参数。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

路由链接组件用于导航到指定链接。类似于浏览器的锚点标签，它可以接受用于定位的 href 属性和用于转场动画的方向参数。

:::note
注意：该组件仅适用于纯 JavaScript 和 Stencil JavaScript 项目。对于 Angular 项目，请使用 `<a>` 标签和 Angular 路由器的 `routerLink`。
:::

更多信息请参阅 [Router](./router) 文档。

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