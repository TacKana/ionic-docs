---
title: 加载中组件
---
import Props from '@ionic-internal/component-api/v8/loading/props.md';
import Events from '@ionic-internal/component-api/v8/loading/events.md';
import Methods from '@ionic-internal/component-api/v8/loading/methods.md';
import Parts from '@ionic-internal/component-api/v8/loading/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/loading/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/loading/slots.md';

<head>
  <title>ion-loading: 加载中 | 应用加载指示器覆盖层</title>
  <meta name="description" content="ion-loading 覆盖层用于在阻止用户交互时指示活动状态。加载指示器显示在应用内容之上，可被关闭以恢复用户与应用交互。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


一种覆盖层，可用于在阻止用户交互时指示活动状态。加载指示器显示在应用内容之上，应用可以关闭它来恢复用户交互。它包含一个可选的背景幕（backdrop），可以在创建时通过设置 `showBackdrop: false` 来禁用。

## 基本用法

加载指示器在呈现后，默认会无限期显示。开发者可以在创建后通过调用组件的 `dismiss()` 方法手动关闭加载指示器。可以调用 `onDidDismiss` 函数在加载指示器关闭后执行某个操作。

或者，开发者可以通过在加载选项的 `duration` 中传入要显示的毫秒数，来配置加载指示器在特定时间后自动关闭。

### 内联式（推荐）

import Inline from '@site/static/usage/v8/loading/inline/index.md';

<Inline />

### 控制器式

import Controller from '@site/static/usage/v8/loading/controller/index.md';

<Controller />

## 自定义

### 加载动画

可以通过 `spinner` 属性自定义使用的加载动画。完整选项列表请参阅 [spinner 属性文档](#spinner)。

import Spinners from '@site/static/usage/v8/loading/spinners/index.md';

<Spinners />

### 主题

Loading 使用作用域封装（scoped encapsulation），这意味着它会在运行时通过为每个样式附加额外的类来自动限定其 CSS 的作用域。覆盖 CSS 中的作用域选择器需要一个 [更高优先级](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) 的选择器。

我们建议传递一个自定义类，并使用该类为主元素和内部元素添加自定义样式。

import Theming from '@site/static/usage/v8/loading/theming/index.md';

<Theming />

:::note
`ion-loading` 在你的应用的根层级呈现，因此我们建议将任何 `ion-loading` 样式放在全局样式表中。
:::

## 无障碍访问
  
Ionic 会自动将 Loading 的 `role` 设置为 [`dialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)。

如果为 Loading 定义了 `message` 属性，那么 `aria-labelledby` 属性将自动设置为消息元素的 ID。否则，`aria-labelledby` 将不会被设置，开发者必须使用 `htmlAttributes` 属性提供一个 `aria-label`。
  
所有 ARIA 属性都可以通过在 Loading 的 `htmlAttributes` 属性中定义自定义值来手动覆盖。

## 接口

### LoadingOptions

```typescript
interface LoadingOptions {
  spinner?: SpinnerTypes | null;
  message?: string | IonicSafeString;
  cssClass?: string | string[];
  showBackdrop?: boolean;
  duration?: number;
  translucent?: boolean;
  animated?: boolean;
  backdropDismiss?: boolean;
  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
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