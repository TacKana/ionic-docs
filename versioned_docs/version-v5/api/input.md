---
sidebar_label: 'ion-input'
demoUrl: '/docs/demos/api/input/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/input/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/input/props.md';
import Events from '@ionic-internal/component-api/v5/input/events.md';
import Methods from '@ionic-internal/component-api/v5/input/methods.md';
import Parts from '@ionic-internal/component-api/v5/input/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/input/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/input/slots.md';

# ion-input

输入组件是对 HTML 原生输入元素的封装，具有自定义样式和增强功能。它兼容 HTML 输入元素的大多数属性，在桌面设备上表现优秀，并能与移动设备的键盘无缝集成。

该组件仅适用于文本类型的输入，例如 `"text"`、`"password"`、`"email"`、`"number"`、`"search"`、`"tel"` 和 `"url"`。它支持所有标准的文本输入事件，包括 `keyup`、`keydown`、`keypress` 等。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认输入框 -->
<ion-input></ion-input>

<!-- 带初始值的输入框 -->
<ion-input value="custom"></ion-input>

<!-- 带占位符的输入框 -->
<ion-input placeholder="请输入内容"></ion-input>

<!-- 有值时显示清除按钮的输入框 -->
<ion-input clearInput value="clear me"></ion-input>

<!-- 数字类型输入框 -->
<ion-input type="number" value="333"></ion-input>

<!-- 禁用状态的输入框 -->
<ion-input value="Disabled" disabled></ion-input>

<!-- 只读状态的输入框 -->
<ion-input value="Readonly" readonly></ion-input>

<!-- 带标签的输入框 -->
<ion-item>
  <ion-label>默认标签</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="floating">浮动标签</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="fixed">固定标签</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="stacked">堆叠标签</ion-label>
  <ion-input></ion-input>
</ion-item>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认输入框 -->
<ion-input></ion-input>

<!-- 带初始值的输入框 -->
<ion-input value="custom"></ion-input>

<!-- 带占位符的输入框 -->
<ion-input placeholder="请输入内容"></ion-input>

<!-- 有值时显示清除按钮的输入框 -->
<ion-input clear-input value="clear me"></ion-input>

<!-- 数字类型输入框 -->
<ion-input type="number" value="333"></ion-input>

<!-- 禁用状态的输入框 -->
<ion-input value="Disabled" disabled></ion-input>

<!-- 只读状态的输入框 -->
<ion-input value="Readonly" readonly></ion-input>

<!-- 带标签的输入框 -->
<ion-item>
  <ion-label>默认标签</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="floating">浮动标签</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="fixed">固定标签</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="stacked">堆叠标签</ion-label>
  <ion-input></ion-input>
</ion-item>
```

</TabItem>

<TabItem value="react">

```tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider,
} from '@ionic/react';

export const InputExamples: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonInput 示例</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>带占位符的默认输入框</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="请输入内容" onIonChange={(e) => setText(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItemDivider>有值时显示清除按钮的输入框</IonItemDivider>
          <IonItem>
            <IonInput
              value={text}
              placeholder="请输入内容"
              onIonChange={(e) => setText(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>

          <IonItemDivider>数字类型输入框</IonItemDivider>
          <IonItem>
            <IonInput
              type="number"
              value={number}
              placeholder="请输入数字"
              onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
            ></IonInput>
          </IonItem>

          <IonItemDivider>禁用状态的输入框</IonItemDivider>
          <IonItem>
            <IonInput value={text} disabled></IonInput>
          </IonItem>

          <IonItemDivider>只读状态的输入框</IonItemDivider>
          <IonItem>
            <IonInput value={text} readonly></IonInput>
          </IonItem>

          <IonItemDivider>带标签的输入框</IonItemDivider>

          <IonItem>
            <IonLabel>默认标签</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">浮动标签</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="fixed">固定标签</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">堆叠标签</IonLabel>
            <IonInput value={text}> </IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'input-example',
  styleUrl: 'input-example.css',
})
export class InputExample {
  render() {
    return [
      // 默认输入框
      <ion-input></ion-input>,

      // 带初始值的输入框
      <ion-input value="custom"></ion-input>,

      // 带占位符的输入框
      <ion-input placeholder="请输入内容"></ion-input>,

      // 有值时显示清除按钮的输入框
      <ion-input clearInput value="clear me"></ion-input>,

      // 数字类型输入框
      <ion-input type="number" value="333"></ion-input>,

      // 禁用状态的输入框
      <ion-input value="Disabled" disabled></ion-input>,

      // 只读状态的输入框
      <ion-input value="Readonly" readonly></ion-input>,

      // 带标签的输入框
      <ion-item>
        <ion-label>默认标签</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="floating">浮动标签</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="fixed">固定标签</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="stacked">堆叠标签</ion-label>
        <ion-input></ion-input>
      </ion-item>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认输入框 -->
  <ion-input></ion-input>

  <!-- 带初始值的输入框 -->
  <ion-input value="custom"></ion-input>

  <!-- 带占位符的输入框 -->
  <ion-input placeholder="请输入内容"></ion-input>

  <!-- 有值时显示清除按钮的输入框 -->
  <ion-input clear-input value="clear me"></ion-input>

  <!-- 数字类型输入框 -->
  <ion-input type="number" value="333"></ion-input>

  <!-- 禁用状态的输入框 -->
  <ion-input value="Disabled" disabled></ion-input>

  <!-- 只读状态的输入框 -->
  <ion-input value="Readonly" readonly></ion-input>

  <!-- 带标签的输入框 -->
  <ion-item>
    <ion-label>默认标签</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="floating">浮动标签</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="fixed">固定标签</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">堆叠标签</ion-label>
    <ion-input></ion-input>
  </ion-item>
</template>

<script>
  import { IonLabel, IonInput, IonItem } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonLabel, IonInput, IonItem },
  });
</script>
```

</TabItem>

</Tabs>

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
```