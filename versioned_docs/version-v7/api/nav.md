---
title: 'ion-nav'
---

import Props from '@ionic-internal/component-api/v7/nav/props.md';
import Events from '@ionic-internal/component-api/v7/nav/events.md';
import Methods from '@ionic-internal/component-api/v7/nav/methods.md';
import Parts from '@ionic-internal/component-api/v7/nav/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/nav/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/nav/slots.md';

<head>
  <title>ion-nav: Ionic 框架应用的导航视图组件</title>
  <meta
    name="description"
    content="ion-nav 是一个独立的组件，用于加载任意组件并将新组件推入堆栈。加载导航视图和推入其他组件不会影响整体路由系统。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Nav 是一个独立的组件，用于加载任意组件并将新组件推入堆栈。

与 Router Outlet 不同，Nav 不绑定到特定的路由器。这意味着如果我们加载一个 Nav 组件，并将其他组件推入堆栈，它们不会影响应用的整体路由。例如，你不应该向 `ion-nav` 推入一个新组件并期望 URL 会更新。这适用于某些场景，比如需要一个模态框（modal）来拥有自己的子导航，而不必将其与应用 URL 绑定。

:::note
`ion-nav` 不应用于路由。如需实现路由功能，请参考 [Angular](../angular/navigation)、[React](../react/navigation) 和 [Vue](../vue/navigation) 的路由指南，或适用于纯 JavaScript 项目的 [`ion-router`](./router)。
:::

## 使用 NavLink

NavLink 是一种与 Nav 交互的简化 API。开发者可以自定义组件、传递组件属性、修改路由动画方向或在导航时定义自定义动画。

import NavLinkExample from '@site/static/usage/v7/nav/nav-link/index.md';

<NavLinkExample />

## 模态框内的导航

Modal 可以使用 Nav 来提供独立于 URL 的线性导航。

:::note

下面的示例使用了对 Nav 的引用以及公共方法 API 来推入和弹出视图。对于不需要这种细粒度访问和控制的实现，建议使用 NavLink。

:::

import ModalNavigationExample from '@site/static/usage/v7/nav/modal-navigation/index.md';

<ModalNavigationExample />

## 接口

### NavCustomEvent

虽然不是必需的，但此接口可用于替代 `CustomEvent` 接口，以便在此组件发出的 Ionic 事件中获得更强的类型支持。

```typescript
interface NavCustomEvent extends CustomEvent {
  target: HTMLIonNavElement;
}
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