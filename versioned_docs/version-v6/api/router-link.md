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
    content="使用 ion-router-link 组件导航到指定链接。路由链接可以接受 href 作为位置，以及过渡动画的方向。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

路由链接组件用于导航到指定链接。类似于浏览器的锚点标签，它可以接受 href 作为位置，以及过渡动画的方向。

:::note
注意：此组件仅应与 vanilla 和 Stencil JavaScript 项目一起使用。对于 Angular 项目，请使用带有 Angular 路由器的 `<a>` 和 `routerLink`。
:::

更多信息请参阅[路由器（Router）](./router)文档。

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
