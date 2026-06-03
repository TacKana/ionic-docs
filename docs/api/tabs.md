---
title: "ion-tabs"
---
import Props from '@ionic-internal/component-api/v8/tabs/props.md';
import Events from '@ionic-internal/component-api/v8/tabs/events.md';
import Methods from '@ionic-internal/component-api/v8/tabs/methods.md';
import Parts from '@ionic-internal/component-api/v8/tabs/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/tabs/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/tabs/slots.md';

<head>
  <title>ion-tabs：用于应用顶级导航的基于选项卡的组件</title>
  <meta name="description" content="Tabs 是用于实现基于选项卡导航的顶级组件。Ion-tabs 没有样式，作为处理导航的路由输出组件，导航行为类似于原生应用。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Tabs 是用于实现基于选项卡导航的顶级导航组件。
该组件是各个[Tab](tab.md)组件的容器。

`ion-tabs` 组件没有任何样式，作为路由输出组件来处理导航。它不提供任何 UI 反馈或选项卡切换机制。为此，需要将 `ion-tab-bar` 作为 `ion-tabs` 的直接子组件提供。

`ion-tabs` 和 `ion-tab-bar` 都可以作为独立元素使用。它们不依赖于彼此来工作，但通常它们一起使用以实现类似于原生应用的基于选项卡的导航。

`ion-tab-bar` 需要定义一个插槽，以便被投影到 `ion-tabs` 组件中的正确位置。

## 基本用法

选项卡可用于显示不同的内容，而无需更改 URL。这在选项卡不用于导航，而是用于显示不同内容时非常有用。

import Basic from '@site/static/usage/v8/tabs/basic/index.md';

<Basic />

## 与路由一起使用

选项卡可以与 Ionic 路由一起使用来实现基于选项卡的导航。选项卡栏和活动选项卡将根据 URL 自动解析。这是最常见的选项卡导航模式。

import Router from '@site/static/usage/v8/tabs/router/index.md';

<Router />

:::tip 最佳实践

Ionic 提供了关于选项卡路由模式最佳实践的指南。请查看 [Angular](/angular/navigation#使用标签)、[React](/react/navigation#使用标签页) 和 [Vue](/vue/navigation#使用标签) 的指南以获取更多信息。

:::

## 程序化选择选项卡

可以使用 `select` 方法以编程方式选择选项卡。这在需要从应用逻辑触发选项卡更改时非常有用，例如响应按钮点击或完成表单后。以下示例演示了使用按钮调用 `select` 方法以导航到不同的选项卡。

import SelectMethod from '@site/static/usage/v8/tabs/select-method/index.md';

<SelectMethod />

## 接口

### TabsCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，用于与此组件发出的 Ionic 事件提供更强的类型支持。

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
