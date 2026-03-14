---
title: 'ion-loading'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/loading/props.md';
import Events from '@ionic-internal/component-api/v6/loading/events.md';
import Methods from '@ionic-internal/component-api/v6/loading/methods.md';
import Parts from '@ionic-internal/component-api/v6/loading/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/loading/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/loading/slots.md';

<head>
  <title>加载指示器 | 应用加载遮罩 | ion-loading</title>
  <meta
    name="description"
    content="ion-loading 遮罩层在阻止用户交互的同时指示活动状态。加载指示器显示在应用内容之上，并且可由应用关闭。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

`ion-loading` 是一个遮罩层，可用于在阻止用户交互的同时指示活动状态。加载指示器显示在应用内容之上，并且可由应用关闭以恢复用户与应用交互。它包含一个可选的背景幕，可以通过在创建时设置 `showBackdrop: false` 来禁用。

## 基本用法

加载指示器在呈现后默认会无限期显示。开发者可以在创建后通过调用组件的 `dismiss()` 方法手动关闭加载指示器。可以在加载指示器关闭后调用 `onDidDismiss` 函数来执行操作。

或者，开发者可以通过在加载选项的 `duration` 中传递要显示的毫秒数，将加载指示器配置为在特定时间后自动关闭。

### 控制器

import Controller from '@site/static/usage/v6/loading/controller/index.md';

<Controller />

### 内联使用

Ionic React 和 Ionic Vue 用户也可以选择直接在模板中使用 `ion-loading` 组件。

<Tabs defaultValue="react" values={[{ value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>
<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { IonLoading, IonButton, IonContent } from '@ionic/react';

export const LoadingExample: React.FC = () => {
  const [showLoading, setShowLoading] = useState(false);

  return (
    <IonContent>
      <IonButton onClick={() => setShowLoading(true)}>显示加载指示器</IonButton>
      <IonLoading
        cssClass="my-custom-class"
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'请稍候...'}
        duration={5000}
      />
    </IonContent>
  );
};
```

</TabItem>
<TabItem value="vue">

```html
<template>
  <ion-content>
    <ion-button @click="setOpen(true)">显示加载指示器</ion-button>
    <ion-loading
      :is-open="isOpenRef"
      cssClass="my-custom-class"
      message="请稍候..."
      :duration="timeout"
      @didDismiss="setOpen(false)"
    >
    </ion-loading>
  </ion-content>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonLoading } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    props: {
      timeout: { type: Number, default: 1000 },
    },
    components: { IonButton, IonContent, IonLoading },
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

## 自定义

### 旋转器

可以通过 `spinner` 属性自定义使用的旋转器类型。有关完整选项列表，请参阅 [spinner 属性文档](#spinner)。

import Spinners from '@site/static/usage/v6/loading/spinners/index.md';

<Spinners />

### 主题

Loading 使用作用域封装（scoped encapsulation），这意味着它会在运行时通过为每个样式附加一个额外的类来自动限定其 CSS 的作用域。要在 CSS 中覆盖作用域选择器，需要使用 [更高特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) 的选择器。

我们建议传递一个自定义类，并使用该类为主机和内部元素添加自定义样式。

import Theming from '@site/static/usage/v6/loading/theming/index.md';

<Theming />

:::note
`ion-loading` 是在应用程序的根层级呈现的，因此我们建议将任何 `ion-loading` 样式放在全局样式表中。
:::

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
