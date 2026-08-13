---
title: 'ion-tabs'
---

import Props from '@ionic-internal/component-api/v7/tabs/props.md';
import Events from '@ionic-internal/component-api/v7/tabs/events.md';
import Methods from '@ionic-internal/component-api/v7/tabs/methods.md';
import Parts from '@ionic-internal/component-api/v7/tabs/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/tabs/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/tabs/slots.md';

<head>
  <title>ion-tabs：基于标签的应用顶层导航组件</title>
  <meta
    name="description"
    content="标签页（Tabs）是用于实现基于标签的导航的顶层组件。ion-tabs 没有样式，作为导航的路由出口，行为类似原生应用。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

标签页（Tabs）是用于实现基于标签的导航的顶层导航组件。该组件是各个[标签（Tab）](tab.md)组件的容器。

`ion-tabs` 组件没有任何样式，作为路由出口来处理导航。它不提供任何 UI 反馈或在标签之间切换的机制。为此，应将 `ion-tab-bar` 作为 `ion-tabs` 的直接子元素提供。

`ion-tabs` 和 `ion-tab-bar` 都可以作为独立元素使用。它们不相互依赖才能工作，但通常一起使用以实现行为类似原生应用的基于标签的导航。

`ion-tab-bar` 需要定义一个插槽，以便投影到 `ion-tabs` 组件的正确位置。

:::note[框架支持]

在 Angular、React 或 Vue 中使用 `ion-tabs` 需要使用 `ion-router-outlet` 或 `ion-nav` 组件。

:::

## 与路由器一起使用

标签页可以与 Ionic 路由器一起使用来实现基于标签的导航。标签栏和活动标签将根据 URL 自动解析。这是最常用的标签导航模式。

import Router from '@site/static/usage/v7/tabs/router/index.md';

<Router />

:::tip[最佳实践]

Ionic 提供了关于标签路由模式最佳实践的指南。请查看 [Angular](/v7/angular/navigation#使用选项卡)、[React](/v7/react/navigation#使用标签) 和 [Vue](/v7/vue/navigation#使用标签) 的指南以获取更多信息。

:::

## 接口

### TabsCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

```typescript
interface TabsCustomEvent extends CustomEvent {
  detail: { tab: string };
  target: HTMLIonTabsElement;
}
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
