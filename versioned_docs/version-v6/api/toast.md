---
title: 'ion-toast'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/toast/props.md';
import Events from '@ionic-internal/component-api/v6/toast/events.md';
import Methods from '@ionic-internal/component-api/v6/toast/methods.md';
import Parts from '@ionic-internal/component-api/v6/toast/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/toast/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/toast/slots.md';

<head>
  <title>ion-toast 组件：可关闭的应用通知提示</title>
  <meta
    name="description"
    content="ion-toast 组件是一种应用通知，用于显示系统消息或反馈。Toast 提示信息会出现在内容上方，关闭后可继续与应用交互。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Toast 是现代应用中常用的轻量通知。它可用于提供操作反馈或显示系统消息。Toast 会显示在应用内容的上方，可由应用关闭以恢复用户与应用间的交互。

## 展示方式

### 定位

Toast 可以定位在视口的顶部、底部或中间。创建时可以通过参数指定位置。可选值包括 `top`、`bottom` 和 `middle`。若未指定位置，Toast 将默认显示在视口底部。

### 控制器

import ControllerExample from '@site/static/usage/v6/toast/presenting/controller/index.md';

<ControllerExample />

### 内联方式

在 Ionic 与 React 或 Vue 结合使用时，也可通过 `isOpen` 属性将 `ion-toast` 直接放置在模板中。请注意，当 Toast 关闭时，需要手动将 `isOpen` 设置为 `false`；它不会自动更新。

<Tabs defaultValue="react" values={[{ value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>
<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { IonButton, IonToast } from '@ionic/react';

function Example() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <IonButton onClick={() => setShowToast(true)}>显示 Toast</IonButton>
      <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message="你好世界！" duration={1500} />
    </>
  );
}
```

</TabItem>
<TabItem value="vue">

```html
<template>
  <ion-button @click="setOpen(true)">显示 Toast</ion-button>
  <ion-toast :is-open="isOpenRef" @didDismiss="setOpen(false)" message="你好世界！" :duration="1500"></ion-toast>
</template>

<script lang="ts">
  import { IonButton, IonToast } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonButton, IonToast },
    setup() {
      const isOpenRef = ref(false);
      const setOpen = (state: boolean) => (isOpenRef.value = state);

      return { isOpenRef, setOpen };
    },
  });
</script>
```

</TabItem>
</Tabs>

## 关闭方式

Toast 旨在提供轻量通知，不应打断用户操作。因此，关闭 Toast 不应要求用户交互。

可通过在 Toast 选项的 `duration` 参数中传递显示的毫秒数，使 Toast 在特定时间后自动关闭。如果添加了 `role` 为 `"cancel"` 的按钮，则该按钮将关闭 Toast。若要在创建后关闭 Toast，可调用实例上的 `dismiss()` 方法。

由于 Toast 不应打断用户，按下硬件返回键不会关闭 Toast。

以下示例演示了如何使用 `buttons` 属性添加一个点击后自动关闭 Toast 的按钮，以及如何收集关闭事件的 `role`。

import ButtonsPlayground from '@site/static/usage/v6/toast/buttons/index.md';

<ButtonsPlayground />

## 布局

Toast 内的按钮容器可以使用 `layout` 属性选择与消息显示在同一行，或分别显示在多行（堆叠布局）。当按钮文本较长时，应使用堆叠布局。此外，堆叠布局中的按钮可以使用 `side` 值为 `start` 或 `end`，但不能同时使用两者。

import StackedPlayground from '@site/static/usage/v6/toast/layout/index.md';

<StackedPlayground />

## 图标

可以在 Toast 内容旁添加图标。通常，Toast 中的图标应用于增加样式或提供额外上下文，而非用于吸引用户注意或提升 Toast 的优先级。若需向用户传达更高优先级的消息或确保获得响应，建议改用 [Alert](alert.md)。

import IconPlayground from '@site/static/usage/v6/toast/icon/index.md';

<IconPlayground />

## 主题定制

import ThemingPlayground from '@site/static/usage/v6/toast/theming/index.md';

<ThemingPlayground />

## 接口

### ToastButton

```typescript
interface ToastButton {
  text?: string;
  icon?: string;
  side?: 'start' | 'end';
  role?: 'cancel' | string;
  cssClass?: string | string[];
  handler?: () => boolean | void | Promise<boolean | void>;
}
```

### ToastOptions

```typescript
interface ToastOptions {
  header?: string;
  message?: string | IonicSafeString;
  cssClass?: string | string[];
  duration?: number;
  buttons?: (ToastButton | string)[];
  position?: 'top' | 'bottom' | 'middle';
  translucent?: boolean;
  animated?: boolean;
  icon?: string;
  htmlAttributes?: { [key: string]: any };

  color?: Color;
  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
```

## 无障碍访问

### 焦点管理

Toast 旨在提供轻量通知，不应打断用户操作。关闭 Toast 不应要求用户交互。因此，当 Toast 显示时，焦点不会自动移至 Toast。

### 屏幕阅读器

`ion-toast` 默认设置了 `aria-live="polite"` 和 `aria-atomic="true"`。

`aria-live` 属性使屏幕阅读器在 Toast 内容更新时播报其内容。但由于该属性设置为 `'polite'`，屏幕阅读器通常不会打断当前任务。开发者可以通过 `htmlAttributes` 属性将 `aria-live` 设置为 `'assertive'` 来自定义此行为。这将导致屏幕阅读器在 Toast 更新时立即通知用户，可能中断之前的播报。

设置 `aria-atomic="true"` 可确保整个 Toast 作为一个完整单元播报。这在动态更新 Toast 内容时很有用，因为它可以防止屏幕阅读器仅播报已更改的部分内容。

### 使用建议

以下是一些使用 Toast 时应遵循的准则（非完整列表）：

- 不要要求用户交互来关闭 Toast。例如，Toast 中包含“关闭”按钮是可以的，但 Toast 也应在超时后自动关闭。如果通知需要用户交互，请考虑改用 [ion-alert](./alert)。

- 避免快速连续打开多个 Toast。如果 `aria-live` 设置为 `'assertive'`，屏幕阅读器可能会中断当前任务的播报来宣告新的 Toast，导致前一个 Toast 的上下文丢失。

- 对于包含较长消息的 Toast，请考虑调整 `duration` 属性，为用户留出足够的阅读时间。

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