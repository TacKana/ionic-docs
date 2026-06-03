---
title: 'ion-router'
---

import Props from '@ionic-internal/component-api/v7/router/props.md';
import Events from '@ionic-internal/component-api/v7/router/events.md';
import Methods from '@ionic-internal/component-api/v7/router/methods.md';
import Parts from '@ionic-internal/component-api/v7/router/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/router/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/router/slots.md';

<head>
  <title>ion-router：协调 URL 导航的路由器组件</title>
  <meta
    name="description"
    content="ion-router 是 ionic 导航出口（ion-nav 和 ion-tabs）的 URL 协调器。路由器组件处理 vanilla 和 Stencil JavaScript 中的路由。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

路由器是用于处理 vanilla 和 Stencil JavaScript 项目中路由的组件。

:::note
注意：此组件仅应与 vanilla 和 Stencil JavaScript 项目一起使用。有关特定框架的路由解决方案，请参阅 [Angular](../angular/navigation)、[React](../react/navigation) 和 [Vue](../vue/navigation) 的路由指南。
:::

应用中应只有一个 `ion-router` 组件。此组件控制与浏览器历史记录的所有交互，并通过事件系统聚合更新。

`ion-router` 只是 ionic 导航出口（`ion-nav`、`ion-tabs` 和 `ion-router-outlet`）的 URL 协调器。

这意味着 `ion-router` 从不接触 DOM，它不显示组件或发出任何类型的生命周期事件，它只是告诉 `ion-nav`、`ion-tabs` 和 `ion-router-outlet` 根据浏览器 URL"显示"什么以及何时"显示"。

为了配置组件与 URL 之间的这种关系（加载/选择），`ion-router` 使用 JSX/HTML 的声明性语法来定义路由树。

## 基本用法

import BasicExample from '@site/static/usage/v7/router/basic/index.md';

<BasicExample />

## 接口

### RouterEventDetail

```typescript
interface RouterEventDetail {
  from: string | null;
  redirectedFrom: string | null;
  to: string;
}
```

### RouterCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

```typescript
interface RouterCustomEvent extends CustomEvent {
  detail: RouterEventDetail;
  target: HTMLIonRouterElement;
}
```

## 用法

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

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
