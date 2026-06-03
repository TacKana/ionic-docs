---
title: 'ion-loading'
---

import Props from '@ionic-internal/component-api/v7/loading/props.md';
import Events from '@ionic-internal/component-api/v7/loading/events.md';
import Methods from '@ionic-internal/component-api/v7/loading/methods.md';
import Parts from '@ionic-internal/component-api/v7/loading/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/loading/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/loading/slots.md';

<head>
  <title>ion-loading：加载 | 应用加载指示器覆盖层</title>
  <meta
    name="description"
    content="ion-loading 覆盖层在阻止用户交互时指示活动。加载指示器显示在应用内容的上方，并且可以关闭。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

一种覆盖层，可在阻止用户交互的同时指示活动。加载指示器显示在应用内容的上方，应用可以将其关闭以恢复用户与应用的交互。它包括一个可选的背景遮罩，可以通过在创建时设置 `showBackdrop: false` 来禁用。

## 基本用法

呈现后，加载指示器默认将无限期显示。开发者可以在创建后通过调用组件上的 `dismiss()` 方法手动关闭加载指示器。可以调用 `onDidDismiss` 函数在加载指示器关闭后执行操作。

或者，开发者可以通过在加载选项的 `duration` 中传递要显示的毫秒数，将加载指示器配置为在特定时间后自动关闭。

### 内联（推荐）

import Inline from '@site/static/usage/v7/loading/inline/index.md';

<Inline />

### 控制器

import Controller from '@site/static/usage/v7/loading/controller/index.md';

<Controller />

## 自定义

### 旋转器

使用的旋转器可以使用 `spinner` 属性进行自定义。有关完整选项列表，请参阅[旋转器属性文档](#旋转器)。

import Spinners from '@site/static/usage/v7/loading/spinners/index.md';

<Spinners />

### 主题

Loading 使用 scoped 封装，这意味着它会在运行时通过为每个样式追加额外类来自动限定 CSS 作用域。在 CSS 中覆盖 scoped 选择器需要[更高的特异性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)选择器。

我们建议传递一个自定义类并使用它来为主机和内部元素添加自定义样式。

import Theming from '@site/static/usage/v7/loading/theming/index.md';

<Theming />

:::note
`ion-loading` 在你的应用根部呈现，因此我们建议将任何 `ion-loading` 样式放在全局样式表中。
:::

## 无障碍访问

Ionic 自动将 Loading 的 `role` 设置为 [`dialog`](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Roles/dialog_role)。

如果为 Loading 定义了 `message` 属性，则 `aria-labelledby` 属性将自动设置为消息元素的 ID。否则，`aria-labelledby` 将不会被设置，开发者必须使用 `htmlAttributes` 属性提供 `aria-label`。

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

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
