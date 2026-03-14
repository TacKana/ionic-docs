---
title: '应用程序的标签颜色和属性 | ion-label'
description: 'Label 是一个包装元素，可与其他 Ionic 组件结合使用。通过 ion-label 轻松设计项目标签颜色及其他属性。'
sidebar_label: 'ion-label'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/label/props.md';
import Events from '@ionic-internal/component-api/v5/label/events.md';
import Methods from '@ionic-internal/component-api/v5/label/methods.md';
import Parts from '@ionic-internal/component-api/v5/label/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/label/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/label/slots.md';

# ion-label

Label 是一个包装元素，可与 `ion-item`、`ion-input`、`ion-toggle` 等组件结合使用。标签在项目内部的位置可以是内联、固定、堆叠或浮动。

## 使用方式

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认标签 -->
<ion-label>Label</ion-label>

<!-- 标签颜色 -->
<ion-label color="primary">Primary Label</ion-label>
<ion-label color="secondary">Secondary Label</ion-label>
<ion-label color="danger">Danger Label</ion-label>
<ion-label color="light">Light Label</ion-label>
<ion-label color="dark">Dark Label</ion-label>

<!-- 项目标签 -->
<ion-item>
  <ion-label>Default Item</ion-label>
</ion-item>

<ion-item>
  <ion-label class="ion-text-wrap">
    多行文本，当内容过长无法在项目的一行内显示时，应自动换行。
  </ion-label>
</ion-item>

<!-- 输入框标签 -->
<ion-item>
  <ion-label>Default Input</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="fixed">Fixed</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="floating">Floating</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="stacked">Stacked</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label>Toggle</ion-label>
  <ion-toggle slot="end" checked></ion-toggle>
</ion-item>

<ion-item>
  <ion-checkbox slot="start" checked></ion-checkbox>
  <ion-label>Checkbox</ion-label>
</ion-item>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认标签 -->
<ion-label>Label</ion-label>

<!-- 标签颜色 -->
<ion-label color="primary">Primary Label</ion-label>
<ion-label color="secondary">Secondary Label</ion-label>
<ion-label color="danger">Danger Label</ion-label>
<ion-label color="light">Light Label</ion-label>
<ion-label color="dark">Dark Label</ion-label>

<!-- 项目标签 -->
<ion-item>
  <ion-label>Default Item</ion-label>
</ion-item>

<ion-item>
  <ion-label class="ion-text-wrap">
    多行文本，当内容过长无法在项目的一行内显示时，应自动换行。
  </ion-label>
</ion-item>

<!-- 输入框标签 -->
<ion-item>
  <ion-label>Default Input</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="fixed">Fixed</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="floating">Floating</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="stacked">Stacked</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label>Toggle</ion-label>
  <ion-toggle slot="end" checked></ion-toggle>
</ion-item>

<ion-item>
  <ion-checkbox slot="start" checked></ion-checkbox>
  <ion-label>Checkbox</ion-label>
</ion-item>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonLabel, IonItem, IonInput, IonToggle, IonCheckbox, IonContent } from '@ionic/react';

export const LabelExample: React.FC = () => (
  <IonContent>
    {/*-- 默认标签 --*/}
    <IonLabel>Label</IonLabel>
    <br />

    {/*-- 标签颜色 --*/}
    <IonLabel color="primary">Primary Label</IonLabel>
    <br />
    <IonLabel color="secondary">Secondary Label</IonLabel>
    <br />
    <IonLabel color="danger">Danger Label</IonLabel>
    <br />
    <IonLabel color="light">Light Label</IonLabel>
    <br />
    <IonLabel color="dark">Dark Label</IonLabel>
    <br />

    {/*-- 项目标签 --*/}
    <IonItem>
      <IonLabel>Default Item</IonLabel>
    </IonItem>

    <IonItem>
      <IonLabel className="ion-text-wrap">
        多行文本，当内容过长无法在项目的一行内显示时，应自动换行。
      </IonLabel>
    </IonItem>

    {/*-- 输入框标签 --*/}
    <IonItem>
      <IonLabel>Default Input</IonLabel>
      <IonInput></IonInput>
    </IonItem>

    <IonItem>
      <IonLabel position="fixed">Fixed</IonLabel>
      <IonInput></IonInput>
    </IonItem>

    <IonItem>
      <IonLabel position="floating">Floating</IonLabel>
      <IonInput></IonInput>
    </IonItem>

    <IonItem>
      <IonLabel position="stacked">Stacked</IonLabel>
      <IonInput></IonInput>
    </IonItem>

    <IonItem>
      <IonLabel>Toggle</IonLabel>
      <IonToggle slot="end" checked></IonToggle>
    </IonItem>

    <IonItem>
      <IonCheckbox slot="start" checked />
      <IonLabel>Checkbox</IonLabel>
    </IonItem>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'label-example',
  styleUrl: 'label-example.css',
})
export class LabelExample {
  render() {
    return [
      // 默认标签
      <ion-label>Label</ion-label>,

      // 标签颜色
      <ion-label color="primary">Primary Label</ion-label>,
      <ion-label color="secondary">Secondary Label</ion-label>,
      <ion-label color="danger">Danger Label</ion-label>,
      <ion-label color="light">Light Label</ion-label>,
      <ion-label color="dark">Dark Label</ion-label>,

      // 项目标签
      <ion-item>
        <ion-label>Default Item</ion-label>
      </ion-item>,

      <ion-item>
        <ion-label class="ion-text-wrap">
          多行文本，当内容过长无法在项目的一行内显示时，应自动换行。
        </ion-label>
      </ion-item>,

      // 输入框标签
      <ion-item>
        <ion-label>Default Input</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="fixed">Fixed</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="floating">Floating</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="stacked">Stacked</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label>Toggle</ion-label>
        <ion-toggle slot="end" checked={true}></ion-toggle>
      </ion-item>,

      <ion-item>
        <ion-checkbox slot="start" checked={true}></ion-checkbox>
        <ion-label>Checkbox</ion-label>
      </ion-item>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认标签 -->
  <ion-label>Label</ion-label>

  <!-- 标签颜色 -->
  <ion-label color="primary">Primary Label</ion-label>
  <ion-label color="secondary">Secondary Label</ion-label>
  <ion-label color="danger">Danger Label</ion-label>
  <ion-label color="light">Light Label</ion-label>
  <ion-label color="dark">Dark Label</ion-label>

  <!-- 项目标签 -->
  <ion-item>
    <ion-label>Default Item</ion-label>
  </ion-item>

  <ion-item>
    <ion-label class="ion-text-wrap">
      多行文本，当内容过长无法在项目的一行内显示时，应自动换行。
    </ion-label>
  </ion-item>

  <!-- 输入框标签 -->
  <ion-item>
    <ion-label>Default Input</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="fixed">Fixed</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="floating">Floating</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">Stacked</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label>Toggle</ion-label>
    <ion-toggle slot="end" checked></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-checkbox slot="start" checked></ion-checkbox>
    <ion-label>Checkbox</ion-label>
  </ion-item>
</template>

<script>
  import { IonCheckbox, IonInput, IonItem, IonLabel, IonToggle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonCheckbox,
      IonInput,
      IonItem,
      IonLabel,
      IonToggle,
    },
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

## CSS 阴影部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
