---
title: 'ion-router'
---

import Props from '@ionic-internal/component-api/v6/router/props.md';
import Events from '@ionic-internal/component-api/v6/router/events.md';
import Methods from '@ionic-internal/component-api/v6/router/methods.md';
import Parts from '@ionic-internal/component-api/v6/router/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/router/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/router/slots.md';

<head>
  <title>ion-router：用于协调URL导航的路由器组件</title>
  <meta
    name="description"
    content="ion-router 是 Ionic 导航出口（ion-nav 和 ion-tabs）的 URL 协调器。该路由器组件用于处理原生 JavaScript 和 Stencil JavaScript 项目中的路由功能。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

路由器是一个用于处理原生 JavaScript 和 Stencil JavaScript 项目中路由功能的组件。

:::note
注意：此组件应仅用于原生 JavaScript 和 Stencil JavaScript 项目。如需特定框架的路由解决方案，请参阅 [Angular](../angular/navigation)、[React](../react/navigation) 和 [Vue](../vue/navigation) 的路由指南。
:::

应用中在代码库中应只包含一个 `ion-router` 组件。
该组件控制所有与浏览器历史记录的交互，并通过事件系统聚合更新。

`ion-router` 仅仅是 Ionic 导航出口（`ion-nav`、`ion-tabs` 和 `ion-router-outlet`）的 URL 协调器。

这意味着 `ion-router` 从不直接操作 DOM，它不会显示组件或触发任何生命周期事件，它只是根据浏览器的 URL 告诉 `ion-nav`、`ion-tabs` 和 `ion-router-outlet` 要“显示”什么以及何时显示。

为了配置组件（加载/选择）与 URL 之间的这种关系，`ion-router` 使用 JSX/HTML 的声明式语法来定义路由树。

## 基本用法

import BasicExample from '@site/static/usage/v6/router/basic/index.md';

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

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，以便在从此组件发出的 Ionic 事件中使用更严格的类型。

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

## CSS Shadow Parts

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />