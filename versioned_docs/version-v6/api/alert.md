---
title: 'ion-alert'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/alert/props.md';
import Events from '@ionic-internal/component-api/v6/alert/events.md';
import Methods from '@ionic-internal/component-api/v6/alert/methods.md';
import Parts from '@ionic-internal/component-api/v6/alert/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/alert/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/alert/slots.md';

<head>
  <title>ion-alert: 带自定义提示信息的 Ionic API 警告框组件</title>
  <meta
    name="description"
    content="ion-alert 对话框通过输入框呈现或收集信息。自定义警告按钮消息显示在应用内容上方，必须手动关闭。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

警告框（Alert）是一种对话框，用于向用户展示信息或通过输入框收集用户信息。警告框会覆盖在应用内容之上，用户必须手动关闭才能继续与应用交互。它还可以选择性地包含 `header`（标题）、`subHeader`（副标题）和 `message`（消息）。

## 展示方式

### 控制器（Controller）

import Controller from '@site/static/usage/v6/alert/presenting/controller/index.md';

<Controller />

### 内联方式（Inline）

在 React 或 Vue 中使用 Ionic 时，`ion-alert` 也可以通过 `isOpen` 属性直接放置在模板中。请注意，当警告框关闭时，必须手动将 `isOpen` 设置为 `false`；它不会自动更新。

<Tabs defaultValue="react" values={[{ value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>
<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent } from '@ionic/react';

function Example() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <IonContent>
      <IonButton onClick={() => setShowAlert(true)}>点击我</IonButton>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="警告"
        subHeader="重要消息"
        message="这是一个警告框！"
        buttons={['确认']}
      />
    </IonContent>
  );
}
```

</TabItem>
<TabItem value="vue">

```html
<template>
  <ion-content>
    <ion-button @click="setOpen(true)">显示警告框</ion-button>
    <ion-alert
      :is-open="isOpenRef"
      header="警告"
      sub-header="重要消息"
      message="这是一个警告框！"
      :buttons="['确认']"
      @didDismiss="setOpen(false)"
    ></ion-alert>
  </ion-content>
</template>

<script lang="ts">
  import { IonAlert, IonButton, IonContent } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonAlert, IonButton },
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

## 按钮

在 `buttons` 数组中，每个按钮都包含其 `text` 属性，以及可选的 `handler` 属性。如果处理函数返回 `false`，则点击按钮时警告框不会自动关闭。所有按钮将按照它们在 `buttons` 数组中的添加顺序从左到右显示。注意：最右侧的按钮（数组中的最后一个）是主按钮。

可选地，可以为按钮添加 `role` 属性，例如 `cancel`。如果某个按钮具有 `cancel` 角色，那么当通过点击背景幕（backdrop）关闭警告框时，将触发具有 cancel 角色的按钮的处理函数。

import Buttons from '@site/static/usage/v6/alert/buttons/index.md';

<Buttons />

## 输入框

警告框也可以包含几种不同的输入框，其数据可以传递回应用。输入框可以作为一种简单的方式来提示用户输入信息。支持单选按钮（radio）、复选框（checkbox）和文本输入框（text input），但不能混合使用。例如，一个警告框可以包含所有单选按钮输入，或所有复选框输入，但同一个警告框不能混合单选和复选框输入。但请注意，不同类型的“文本”输入框可以混合使用，例如 `url`、`email`、`text`、`textarea` 等。如果您需要一个不符合警告框指南的复杂表单界面，我们建议在模态框（modal）中构建表单。

### 文本输入框示例

import TextInputs from '@site/static/usage/v6/alert/inputs/text-inputs/index.md';

<TextInputs />

### 单选按钮示例

import Radios from '@site/static/usage/v6/alert/inputs/radios/index.md';

<Radios />

## 自定义

警告框使用作用域封装（scoped encapsulation），这意味着它会在运行时通过为每个样式附加一个额外的类来自动限定其 CSS 的作用域。在 CSS 中覆盖作用域选择器需要[更高特异性（higher specificity）](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)的选择器。

我们建议在 `create` 方法中传递一个自定义类到 `cssClass`，并使用该类来为主机和内部元素添加自定义样式。此属性还可以接受多个以空格分隔的类。

```css
/* 不起作用 - 特异性不足 */
.alert-wrapper {
  background: #e5e5e5;
}

/* 有效 - 在 cssClass 中传递 "my-custom-class" 以提高特异性 */
.my-custom-class .alert-wrapper {
  background: #e5e5e5;
}
```

任何已定义的 [CSS 自定义属性（CSS Custom Properties）](#css-custom-properties) 都可以用于样式化警告框，而无需针对单个元素：

```css
.my-custom-class {
  --background: #e5e5e5;
}
```

import Customization from '@site/static/usage/v6/alert/customization/index.md';

<Customization />

:::note
如果您正在构建 Ionic Angular 应用，样式需要添加到全局样式表文件中。
:::

## 无障碍访问（Accessibility）

Ionic 会自动将警告框的 `role` 设置为 [`alertdialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)（如果包含任何输入框或按钮），或者如果没有，则设置为 [`alert`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)。

如果为警告框定义了 `header` 属性，`aria-labelledby` 属性将自动设置为标题的 ID。如果未定义 `header`，则 `subHeader` 元素将作为备用。类似地，如果定义了 `message` 属性，`aria-describedby` 属性将自动设置为 `message` 元素的 ID。

强烈建议您的警告框包含 `message`，以及 `header` 或 `subHeader`，以符合 ARIA 规范。如果您选择不包含 `header` 或 `subHeader`，另一种方法是使用 `htmlAttributes` 属性提供描述性的 `aria-label`。

所有 ARIA 属性都可以通过在警告框的 `htmlAttributes` 属性中定义自定义值来手动覆盖。

## 接口

### AlertButton

```typescript
interface AlertButton {
  text: string;
  role?: 'cancel' | 'destructive' | string;
  cssClass?: string | string[];
  handler?: (value: any) => boolean | void | { [key: string]: any };
}
```

### AlertInput

```typescript
interface AlertInput {
  type?: TextFieldTypes | 'checkbox' | 'radio' | 'textarea';
  name?: string;
  placeholder?: string;
  value?: any;
  /**
   * 如果输入类型是 `radio` 或 `checkbox`，则显示在输入框旁边的标签文本。
   */
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  handler?: (input: AlertInput) => void;
  min?: string | number;
  max?: string | number;
  cssClass?: string | string[];
  attributes?: { [key: string]: any };
  tabindex?: number;
}
```

### AlertOptions

```typescript
interface AlertOptions {
  header?: string;
  subHeader?: string;
  message?: string | IonicSafeString;
  cssClass?: string | string[];
  inputs?: AlertInput[];
  buttons?: (AlertButton | string)[];
  backdropDismiss?: boolean;
  translucent?: boolean;
  animated?: boolean;
  htmlAttributes?: { [key: string]: any };

  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;

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