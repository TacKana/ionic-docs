---
title: '浮动操作按钮 | 用于主要操作的 Ionic FAB 按钮图标'
description: '浮动操作按钮（FABs）代表应用中的主要操作。图标呈圆形，按下时按钮可能会打开更多相关操作。'
sidebar_label: 'ion-fab-button'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/fab-button/props.md';
import Events from '@ionic-internal/component-api/v5/fab-button/events.md';
import Methods from '@ionic-internal/component-api/v5/fab-button/methods.md';
import Parts from '@ionic-internal/component-api/v5/fab-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/fab-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/fab-button/slots.md';

# ion-fab-button

浮动操作按钮（Floating Action Buttons，简称 FABs）代表应用程序中的主要操作。默认情况下，它们具有圆形外观。当按下时，按钮可能会展开更多相关操作。顾名思义，FABs 通常以固定位置浮动在内容上方。仅使用 `<ion-fab-button>FAB</ion-fab-button>` 并不能实现此效果，它们需要包裹在 `<ion-fab>` 组件中才能固定在内容上方。

如果 FAB 按钮没有被 `<ion-fab>` 包裹，它会随着内容一起滚动。FAB 按钮有默认尺寸、迷你尺寸，并可以接受不同的颜色：

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-content>
  <!-- 固定浮动操作按钮，不会随内容滚动 -->
  <ion-fab slot="fixed">
    <ion-fab-button>按钮</ion-fab-button>
  </ion-fab>

  <!-- 默认浮动操作按钮，会随内容滚动 -->
  <ion-fab-button>默认</ion-fab-button>

  <!-- 迷你尺寸 -->
  <ion-fab-button size="small">迷你</ion-fab-button>

  <!-- 颜色示例 -->
  <ion-fab-button color="primary">主要</ion-fab-button>
  <ion-fab-button color="secondary">次要</ion-fab-button>
  <ion-fab-button color="danger">危险</ion-fab-button>
  <ion-fab-button color="light">浅色</ion-fab-button>
  <ion-fab-button color="dark">深色</ion-fab-button>
</ion-content>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-content>
  <!-- 固定浮动操作按钮，不会随内容滚动 -->
  <ion-fab slot="fixed">
    <ion-fab-button>按钮</ion-fab-button>
  </ion-fab>

  <!-- 默认浮动操作按钮，会随内容滚动 -->
  <ion-fab-button>默认</ion-fab-button>

  <!-- 迷你尺寸 -->
  <ion-fab-button size="small">迷你</ion-fab-button>

  <!-- 颜色示例 -->
  <ion-fab-button color="primary">主要</ion-fab-button>
  <ion-fab-button color="secondary">次要</ion-fab-button>
  <ion-fab-button color="danger">危险</ion-fab-button>
  <ion-fab-button color="light">浅色</ion-fab-button>
  <ion-fab-button color="dark">深色</ion-fab-button>
</ion-content>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonContent, IonFab, IonFabButton } from '@ionic/react';

export const FabButtonExample: React.FC = () => (
  <IonContent>
    {/* 固定浮动操作按钮，不会随内容滚动 */}
    <IonFab slot="fixed">
      <IonFabButton>按钮</IonFabButton>
    </IonFab>

    {/* 默认浮动操作按钮，会随内容滚动 */}
    <IonFabButton>默认</IonFabButton>

    {/* 迷你尺寸 */}
    <IonFabButton size="small">迷你</IonFabButton>

    {/* 颜色示例 */}
    <IonFabButton color="primary">主要</IonFabButton>
    <IonFabButton color="secondary">次要</IonFabButton>
    <IonFabButton color="danger">危险</IonFabButton>
    <IonFabButton color="light">浅色</IonFabButton>
    <IonFabButton color="dark">深色</IonFabButton>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'fab-button-example',
  styleUrl: 'fab-button-example.css',
})
export class FabButtonExample {
  render() {
    return [
      <ion-content>
        {/* 固定浮动操作按钮，不会随内容滚动 */}
        <ion-fab slot="fixed">
          <ion-fab-button>按钮</ion-fab-button>
        </ion-fab>

        {/* 默认浮动操作按钮，会随内容滚动 */}
        <ion-fab-button>默认</ion-fab-button>

        {/* 迷你尺寸 */}
        <ion-fab-button size="small">迷你</ion-fab-button>

        {/* 颜色示例 */}
        <ion-fab-button color="primary">主要</ion-fab-button>
        <ion-fab-button color="secondary">次要</ion-fab-button>
        <ion-fab-button color="danger">危险</ion-fab-button>
        <ion-fab-button color="light">浅色</ion-fab-button>
        <ion-fab-button color="dark">深色</ion-fab-button>
      </ion-content>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-content>
    <!-- 固定浮动操作按钮，不会随内容滚动 -->
    <ion-fab slot="fixed">
      <ion-fab-button>按钮</ion-fab-button>
    </ion-fab>

    <!-- 默认浮动操作按钮，会随内容滚动 -->
    <ion-fab-button>默认</ion-fab-button>

    <!-- 迷你尺寸 -->
    <ion-fab-button size="small">迷你</ion-fab-button>

    <!-- 颜色示例 -->
    <ion-fab-button color="primary">主要</ion-fab-button>
    <ion-fab-button color="secondary">次要</ion-fab-button>
    <ion-fab-button color="danger">危险</ion-fab-button>
    <ion-fab-button color="light">浅色</ion-fab-button>
    <ion-fab-button color="dark">深色</ion-fab-button>
  </ion-content>
</template>

<script>
  import { IonContent, IonFab, IonFabButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonFab, IonFabButton },
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