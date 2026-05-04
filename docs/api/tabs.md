---
title: 选项卡组件
---
import Props from '@ionic-internal/component-api/v8/tabs/props.md';
import Events from '@ionic-internal/component-api/v8/tabs/events.md';
import Methods from '@ionic-internal/component-api/v8/tabs/methods.md';
import Parts from '@ionic-internal/component-api/v8/tabs/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/tabs/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/tabs/slots.md';

<head>
  <title>ion-tabs：用于应用顶级导航的标签页组件</title>
  <meta name="description" content="Tabs 是实现基于标签页导航的顶级组件。ion-tabs 没有样式，作为路由出口使用，提供类似原生应用的导航体验。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Tabs 是实现标签页导航的顶级导航组件。
该组件是各个 [Tab](tab.md) 组件的容器。

`ion-tabs` 组件本身没有任何样式，它作为路由出口处理导航。它不提供任何切换标签页的 UI 反馈或机制。为此，需要将 `ion-tab-bar` 作为 `ion-tabs` 的直接子组件提供。

`ion-tabs` 和 `ion-tab-bar` 都可以作为独立元素使用。它们不依赖彼此工作，但通常一起使用以实现类似原生应用的标签页导航。

`ion-tab-bar` 需要定义一个插槽，以便投影到 `ion-tabs` 组件中的正确位置。

<LegacyAnchor id="basic-usage" />
<LegacyAnchor id="usage-with-router" />

## 基础用法

标签页可用于显示不同内容而无需更改 URL。这在标签页不用于导航，而仅用于显示不同内容时非常有用。

import Basic from '@site/static/usage/v8/tabs/basic/index.md';

<Basic />

## 与路由器配合使用

标签页可与 Ionic 路由器配合使用，实现基于标签页的导航。标签栏和活动标签页将根据 URL 自动解析。这是标签页导航最常见的模式。

import Router from '@site/static/usage/v8/tabs/router/index.md';

<Router />

:::tip 最佳实践

Ionic 提供了关于标签页路由模式的最佳实践指南。请查看 [Angular](/angular/navigation#working-with-tabs)、[React](/react/navigation#working-with-tabs) 和 [Vue](/vue/navigation#working-with-tabs) 的指南以获取更多信息。

:::

## 以编程方式选择标签页

可以使用 `select` 方法以编程方式选择标签页。当需要从应用逻辑（例如响应按钮点击或完成表单后）触发标签页切换时，这非常有用。以下示例演示了使用按钮调用 `select` 方法来导航到不同标签页。

import SelectMethod from '@site/static/usage/v8/tabs/select-method/index.md';

<SelectMethod />

## 接口

### TabsCustomEvent

虽然不是必需的，但此接口可用于替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更强的类型定义。

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

## CSS Shadow 部件
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />