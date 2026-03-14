---
title: 'ion-spinner | 动画旋转图标组件与属性'
description: 'ion-spinner 组件提供多种动画 SVG 旋转图标。这些图标用于指示应用正在加载或执行其他需要等待的操作。'
sidebar_label: 'ion-spinner'
demoUrl: '/docs/demos/api/spinner/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/spinner/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/spinner/props.md';
import Events from '@ionic-internal/component-api/v5/spinner/events.md';
import Methods from '@ionic-internal/component-api/v5/spinner/methods.md';
import Parts from '@ionic-internal/component-api/v5/spinner/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/spinner/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/spinner/slots.md';

# ion-spinner

Spinner 组件提供多种动画 SVG 旋转图标。旋转图标是视觉指示器，用于表明应用正在加载内容或执行其他需要用户等待的操作。

默认使用的旋转图标基于平台决定。`ios` 平台的默认图标是 `"lines"`，`android` 平台的默认图标是 `"crescent"`。如果平台不是 `ios` 或 `android`，旋转图标将默认使用 `crescent`。如果设置了 `name` 属性，则将使用该属性指定的旋转图标，而不是根据平台选择的图标。

## 使用方式

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认旋转图标 -->
<ion-spinner></ion-spinner>

<!-- 线条样式 -->
<ion-spinner name="lines"></ion-spinner>

<!-- 小线条样式 -->
<ion-spinner name="lines-small"></ion-spinner>

<!-- 点状样式 -->
<ion-spinner name="dots"></ion-spinner>

<!-- 气泡样式 -->
<ion-spinner name="bubbles"></ion-spinner>

<!-- 圆形样式 -->
<ion-spinner name="circles"></ion-spinner>

<!-- 新月样式 -->
<ion-spinner name="crescent"></ion-spinner>

<!-- 暂停的默认旋转图标 -->
<ion-spinner paused></ion-spinner>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认旋转图标 -->
<ion-spinner></ion-spinner>

<!-- 线条样式 -->
<ion-spinner name="lines"></ion-spinner>

<!-- 小线条样式 -->
<ion-spinner name="lines-small"></ion-spinner>

<!-- 点状样式 -->
<ion-spinner name="dots"></ion-spinner>

<!-- 气泡样式 -->
<ion-spinner name="bubbles"></ion-spinner>

<!-- 圆形样式 -->
<ion-spinner name="circles"></ion-spinner>

<!-- 新月样式 -->
<ion-spinner name="crescent"></ion-spinner>

<!-- 暂停的默认旋转图标 -->
<ion-spinner paused></ion-spinner>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonSpinner, IonContent } from '@ionic/react';

export const SpinnerExample: React.FC = () => (
  <IonContent>
    {/*-- 默认旋转图标 --*/}
    <IonSpinner />

    {/*-- 线条样式 --*/}
    <IonSpinner name="lines" />

    {/*-- 小线条样式 --*/}
    <IonSpinner name="lines-small" />

    {/*-- 点状样式 --*/}
    <IonSpinner name="dots" />

    {/*-- 气泡样式 --*/}
    <IonSpinner name="bubbles" />

    {/*-- 圆形样式 --*/}
    <IonSpinner name="circles" />

    {/*-- 新月样式 --*/}
    <IonSpinner name="crescent" />

    {/*-- 暂停的默认旋转图标 --*/}
    <IonSpinner paused />
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'spinner-example',
  styleUrl: 'spinner-example.css',
})
export class SpinnerExample {
  render() {
    return [
      // 默认旋转图标
      <ion-spinner></ion-spinner>,

      // 线条样式
      <ion-spinner name="lines"></ion-spinner>,

      // 小线条样式
      <ion-spinner name="lines-small"></ion-spinner>,

      // 点状样式
      <ion-spinner name="dots"></ion-spinner>,

      // 气泡样式
      <ion-spinner name="bubbles"></ion-spinner>,

      // 圆形样式
      <ion-spinner name="circles"></ion-spinner>,

      // 新月样式
      <ion-spinner name="crescent"></ion-spinner>,

      // 暂停的默认旋转图标
      <ion-spinner paused={true}></ion-spinner>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认旋转图标 -->
  <ion-spinner></ion-spinner>

  <!-- 线条样式 -->
  <ion-spinner name="lines"></ion-spinner>

  <!-- 小线条样式 -->
  <ion-spinner name="lines-small"></ion-spinner>

  <!-- 点状样式 -->
  <ion-spinner name="dots"></ion-spinner>

  <!-- 气泡样式 -->
  <ion-spinner name="bubbles"></ion-spinner>

  <!-- 圆形样式 -->
  <ion-spinner name="circles"></ion-spinner>

  <!-- 新月样式 -->
  <ion-spinner name="crescent"></ion-spinner>

  <!-- 暂停的默认旋转图标 -->
  <ion-spinner paused></ion-spinner>
</template>

<script>
  import { IonSpinner } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonSpinner },
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
