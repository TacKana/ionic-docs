---
title: 'ion-nav'
---

import Props from '@ionic-internal/component-api/v6/nav/props.md';
import Events from '@ionic-internal/component-api/v6/nav/events.md';
import Methods from '@ionic-internal/component-api/v6/nav/methods.md';
import Parts from '@ionic-internal/component-api/v6/nav/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/nav/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/nav/slots.md';

<head>
  <title>ion-nav | Ionic 框架应用中的导航视图组件</title>
  <meta
    name="description"
    content="ion-nav 是一个独立的组件，用于加载任意组件并将新组件推入堆栈。加载 Nav 视图和推送其他组件不会影响整体路由器。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Nav 是一个独立的组件，用于加载任意组件并将新组件推入堆栈。

与 Router Outlet 不同，Nav 并不与特定的路由器绑定。这意味着如果我们加载一个 Nav 组件，并将其他组件推入堆栈，它们不会影响应用的整体路由器。例如，你不应该期望通过向 `ion-nav` 推送新组件来更新 URL。这适用于你有一个需要独立子导航的模态框，而不希望它与应用的 URL 绑定的场景。

:::note
`ion-nav` 不应用于路由。相反，请参阅 [Angular](../angular/navigation)、[React](../react/navigation) 和 [Vue](../vue/navigation) 的路由指南，或者针对原生 JavaScript 项目的 [`ion-router`](./router)。
:::

## 使用 NavLink

NavLink 是在与 Nav 交互时的一个简化 API。开发者可以自定义组件、传递组件属性、修改路由动画的方向，或在导航时定义自定义动画。

import NavLinkExample from '@site/static/usage/v6/nav/nav-link/index.md';

<NavLinkExample />

## 模态框内的导航

Modal 可以使用 Nav 来提供独立于 URL 的线性导航。

:::note

下面的示例使用了 Nav 的引用以及公共方法 API 来推送和弹出视图。建议在不需要这种粒度访问和控制的实现中使用 NavLink。

:::

import ModalNavigationExample from '@site/static/usage/v6/nav/modal-navigation/index.md';

<ModalNavigationExample />

## 接口

### NavCustomEvent

虽然不是必需的，但此接口可以用来替代 `CustomEvent` 接口，以便在使用从此组件发出的 Ionic 事件时获得更强的类型检查。

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