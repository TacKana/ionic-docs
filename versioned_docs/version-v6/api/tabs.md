---
title: 'ion-tabs'
---

import Props from '@ionic-internal/component-api/v6/tabs/props.md';
import Events from '@ionic-internal/component-api/v6/tabs/events.md';
import Methods from '@ionic-internal/component-api/v6/tabs/methods.md';
import Parts from '@ionic-internal/component-api/v6/tabs/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/tabs/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/tabs/slots.md';

<head>
  <title>Ion-Tabs：基于标签页的顶级应用导航组件</title>
  <meta
    name="description"
    content="标签页是实现基于标签页导航的顶级组件。Ion-tabs 组件没有样式，作为路由出口使用，提供类似原生应用的导航体验。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

标签页是实现基于标签页导航的顶级导航组件。该组件是单个 [Tab](tab.md) 组件的容器。

`ion-tabs` 组件本身没有任何样式，它作为路由出口来处理导航。它不提供任何用户界面反馈或切换标签页的机制。为了实现这些功能，应将 `ion-tab-bar` 作为 `ion-tabs` 的直接子元素提供。

`ion-tabs` 和 `ion-tab-bar` 都可以作为独立元素使用。它们不依赖于彼此而工作，但通常一起使用以实现类似原生应用的基于标签页的导航。

`ion-tab-bar` 需要定义一个插槽，以便在 `ion-tabs` 组件中投影到正确的位置。

:::note 框架支持

在 Angular、React 或 Vue 中使用 `ion-tabs` 需要使用 `ion-router-outlet` 或 `ion-nav` 组件。

:::

## 与路由器的配合使用

标签页可以与 Ionic 路由器配合使用来实现基于标签页的导航。标签栏和活动标签页将根据 URL 自动解析。这是标签页导航最常见的模式。

import Router from '@site/static/usage/v6/tabs/router/index.md';

<Router />

:::tip 最佳实践

Ionic 提供了关于标签页路由模式的最佳实践指南。请查阅 [Angular](/angular/navigation#working-with-tabs)、[React](/react/navigation#working-with-tabs) 和 [Vue](/vue/navigation#working-with-tabs) 的指南以获取更多信息。

:::

## 接口

### TabsCustomEvent

虽然不是必需的，但此接口可用于替代 `CustomEvent` 接口，以便对从此组件发出的 Ionic 事件进行更严格的类型检查。

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

## CSS Shadow Parts

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />