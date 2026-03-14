---
title: 'Badges | ion-badge: iOS 和 Android 应用通知徽章图标'
description: '徽章是 iOS 和 Android 应用中靠近其他元素的内联块元素——使用 ion-badges 作为通知来指示有多少个项目。'
sidebar_label: 'ion-badge'
demoUrl: '/docs/demos/api/badge/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/badge/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/badge/props.md';
import Events from '@ionic-internal/component-api/v5/badge/events.md';
import Methods from '@ionic-internal/component-api/v5/badge/methods.md';
import Parts from '@ionic-internal/component-api/v5/badge/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/badge/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/badge/slots.md';

# ion-badge

徽章通常是靠近另一个元素显示的内联块元素。它们通常包含数字或其他字符。徽章可以作为通知，指示某个元素关联了额外的项目数量。

## 使用方式

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认 -->
<ion-badge>99</ion-badge>

<!-- 颜色 -->
<ion-badge color="primary">11</ion-badge>
<ion-badge color="secondary">22</ion-badge>
<ion-badge color="tertiary">33</ion-badge>
<ion-badge color="success">44</ion-badge>
<ion-badge color="warning">55</ion-badge>
<ion-badge color="danger">66</ion-badge>
<ion-badge color="light">77</ion-badge>
<ion-badge color="medium">88</ion-badge>
<ion-badge color="dark">99</ion-badge>

<!-- 左侧和右侧带有徽章的项目 -->
<ion-item>
  <ion-badge slot="start">11</ion-badge>
  <ion-label>我的项目</ion-label>
  <ion-badge slot="end">22</ion-badge>
</ion-item>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认 -->
<ion-badge>99</ion-badge>

<!-- 颜色 -->
<ion-badge color="primary">11</ion-badge>
<ion-badge color="secondary">22</ion-badge>
<ion-badge color="tertiary">33</ion-badge>
<ion-badge color="success">44</ion-badge>
<ion-badge color="warning">55</ion-badge>
<ion-badge color="danger">66</ion-badge>
<ion-badge color="light">77</ion-badge>
<ion-badge color="medium">88</ion-badge>
<ion-badge color="dark">99</ion-badge>

<!-- 左侧和右侧带有徽章的项目 -->
<ion-item>
  <ion-badge slot="start">11</ion-badge>
  <ion-label>我的项目</ion-label>
  <ion-badge slot="end">22</ion-badge>
</ion-item>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonBadge, IonItem, IonLabel, IonContent } from '@ionic/react';

export const BadgeExample: React.FC = () => (
  <IonContent>
    {/*-- 默认 --*/}
    <IonBadge>99</IonBadge>

    {/*-- 颜色 --*/}
    <IonBadge color="primary">11</IonBadge>
    <IonBadge color="secondary">22</IonBadge>
    <IonBadge color="tertiary">33</IonBadge>
    <IonBadge color="success">44</IonBadge>
    <IonBadge color="warning">55</IonBadge>
    <IonBadge color="danger">66</IonBadge>
    <IonBadge color="light">77</IonBadge>
    <IonBadge color="medium">88</IonBadge>
    <IonBadge color="dark">99</IonBadge>

    {/*-- 左侧和右侧带有徽章的项目 --*/}
    <IonItem>
      <IonBadge slot="start">11</IonBadge>
      <IonLabel>我的项目</IonLabel>
      <IonBadge slot="end">22</IonBadge>
    </IonItem>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'badge-example',
  styleUrl: 'badge-example.css',
})
export class BadgeExample {
  render() {
    return [
      // 默认
      <ion-badge>99</ion-badge>,

      // 颜色
      <ion-badge color="primary">11</ion-badge>,
      <ion-badge color="secondary">22</ion-badge>,
      <ion-badge color="tertiary">33</ion-badge>,
      <ion-badge color="success">44</ion-badge>,
      <ion-badge color="warning">55</ion-badge>,
      <ion-badge color="danger">66</ion-badge>,
      <ion-badge color="light">77</ion-badge>,
      <ion-badge color="medium">88</ion-badge>,
      <ion-badge color="dark">99</ion-badge>,

      // 左侧和右侧带有徽章的项目
      <ion-item>
        <ion-badge slot="start">11</ion-badge>
        <ion-label>我的项目</ion-label>
        <ion-badge slot="end">22</ion-badge>
      </ion-item>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认 -->
  <ion-badge>99</ion-badge>

  <!-- 颜色 -->
  <ion-badge color="primary">11</ion-badge>
  <ion-badge color="secondary">22</ion-badge>
  <ion-badge color="tertiary">33</ion-badge>
  <ion-badge color="success">44</ion-badge>
  <ion-badge color="warning">55</ion-badge>
  <ion-badge color="danger">66</ion-badge>
  <ion-badge color="light">77</ion-badge>
  <ion-badge color="medium">88</ion-badge>
  <ion-badge color="dark">99</ion-badge>

  <!-- 左侧和右侧带有徽章的项目 -->
  <ion-item>
    <ion-badge slot="start">11</ion-badge>
    <ion-label>我的项目</ion-label>
    <ion-badge slot="end">22</ion-badge>
  </ion-item>
</template>

<script>
  import { IonBadge, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonBadge, IonItem, IonLabel },
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

## CSS 影子部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />