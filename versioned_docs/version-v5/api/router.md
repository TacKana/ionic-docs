---
title: 'ion-router: 路由组件协调URL导航'
description: 'ion-router是用于协调ionic导航出口（ion-nav和ion-tabs）的URL路由器。该路由组件处理原生JavaScript和Stencil项目中的路由功能。'
sidebar_label: 'ion-router'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/router/props.md';
import Events from '@ionic-internal/component-api/v5/router/events.md';
import Methods from '@ionic-internal/component-api/v5/router/methods.md';
import Parts from '@ionic-internal/component-api/v5/router/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/router/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/router/slots.md';

# ion-router

ion-router 是一个用于处理原生 JavaScript 和 Stencil 项目中路由功能的组件。

> 注意：此组件仅适用于原生 JavaScript 和 Stencil 项目。对于 Angular 项目，请使用 [`ion-router-outlet`](router-outlet.md) 和 Angular 路由器。

应用中只需在代码库中包含一个 `ion-router` 组件。
该组件控制所有与浏览器历史记录的交互，并通过事件系统聚合更新。

`ion-router` 仅仅是 Ionic 导航出口（`ion-nav` 和 `ion-tabs`）的 URL 协调器。

这意味着 `ion-router` 从不直接操作 DOM，它不显示组件或触发任何生命周期事件，它只是根据浏览器 URL 告诉 `ion-nav` 和 `ion-tabs` 要"显示"什么以及何时显示。

为了配置组件（加载/选择）与 URL 之间的这种关系，`ion-router` 使用 JSX/HTML 声明式语法来定义路由树。

## 使用方式

```html
<ion-router>
  <ion-route component="page-tabs">
    <ion-route url="/schedule" component="tab-schedule">
      <ion-route component="page-schedule"></ion-route>
      <ion-route url="/session/:sessionId" component="page-session"></ion-route>
    </ion-route>

    <ion-route url="/speakers" component="tab-speaker">
      <ion-route component="page-speaker-list"></ion-route>
      <ion-route url="/session/:sessionId" component="page-session"></ion-route>
      <ion-route url="/:speakerId" component="page-speaker-detail"></ion-route>
    </ion-route>

    <ion-route url="/map" component="page-map"></ion-route>
    <ion-route url="/about" component="page-about"></ion-route>
  </ion-route>

  <ion-route url="/tutorial" component="page-tutorial"></ion-route>
  <ion-route url="/login" component="page-login"></ion-route>
  <ion-route url="/account" component="page-account"></ion-route>
  <ion-route url="/signup" component="page-signup"></ion-route>
  <ion-route url="/support" component="page-support"></ion-route>
</ion-router>
```

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