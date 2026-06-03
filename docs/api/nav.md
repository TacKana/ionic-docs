---
title: "ion-nav"
---
import Props from '@ionic-internal/component-api/v8/nav/props.md';
import Events from '@ionic-internal/component-api/v8/nav/events.md';
import Methods from '@ionic-internal/component-api/v8/nav/methods.md';
import Parts from '@ionic-internal/component-api/v8/nav/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/nav/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/nav/slots.md';

<head>
  <title>ion-nav：Ionic Framework 应用的导航视图组件</title>
  <meta name="description" content="ion-nav 是一个独立组件，用于加载任意组件并将新组件推入堆栈。加载 Nav 视图和推入其他组件不会影响整体路由器。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Nav 是一个独立组件，用于加载任意组件并将新组件推入堆栈。

与 Router Outlet 不同，Nav 不绑定到特定的路由器。这意味着如果我们加载一个 Nav 组件并将其他组件推入堆栈，它们不会影响应用的整个路由器。例如，您不应将新组件推入 `ion-nav` 并期望 URL 更新。这适用于某些用例，例如模态框需要自己的子导航，而不必与应用的 URL 绑定。

:::note
`ion-nav` 不用于路由。相反，请参阅 [Angular](../angular/navigation)、[React](../react/navigation) 和 [Vue](../vue/navigation) 的路由指南，或纯 JavaScript 项目的 [`ion-router`](./router)。
:::

## 使用 NavLink

NavLink 是与 Nav 交互时的简化 API。开发者可以自定义组件、传递组件属性、修改路由动画的方向或定义在导航时的自定义动画。

import NavLinkExample from '@site/static/usage/v8/nav/nav-link/index.md';

<NavLinkExample />

## 在模态框内导航

Modal 可以使用 Nav 来提供独立于 URL 的线性导航。

:::note

下面的示例使用 Nav 的引用和公共方法 API 来推入和弹出视图。在不需要这种级别的精细访问和控制的实现中，建议使用 NavLink。

:::

import ModalNavigationExample from '@site/static/usage/v8/nav/modal-navigation/index.md';

<ModalNavigationExample />

## 接口

### NavCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

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
