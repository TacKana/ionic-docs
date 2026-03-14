---
title: 'ion-header: Ionic 框架应用中的顶部栏父组件'
description: 'ion-header 是一个包含工具栏的父组件。需要注意的是，ion-header 必须是页面的三个根元素之一。'
sidebar_label: 'ion-header'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/header/props.md';
import Events from '@ionic-internal/component-api/v5/header/events.md';
import Methods from '@ionic-internal/component-api/v5/header/methods.md';
import Parts from '@ionic-internal/component-api/v5/header/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/header/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/header/slots.md';

# ion-header

Header 是一个包含工具栏组件的父组件。
需要注意的是，ion-header 必须是页面的三个根元素之一。

## 使用方式

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title>我的导航栏</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-title>副标题栏</ion-title>
  </ion-toolbar>
</ion-header>

<!-- 无边框的 Header -->
<ion-header class="ion-no-border">
  <ion-toolbar>
    <ion-title>Header - 无边框</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">我的导航栏</ion-title>
    </ion-toolbar>
  </ion-header>
</ion-content>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title>我的导航栏</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-title>副标题栏</ion-title>
  </ion-toolbar>
</ion-header>

<!-- 无边框的 Header -->
<ion-header class="ion-no-border">
  <ion-toolbar>
    <ion-title>Header - 无边框</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">我的导航栏</ion-title>
    </ion-toolbar>
  </ion-header>
</ion-content>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';

export const HeaderExample: React.FC = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle>我的导航栏</IonTitle>
      </IonToolbar>

      <IonToolbar>
        <IonTitle>副标题栏</IonTitle>
      </IonToolbar>
    </IonHeader>

    {/*-- 无边框的 Header --*/}
    <IonHeader className="ion-no-border">
      <IonToolbar>
        <IonTitle>Header - 无边框</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">我的导航栏</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonContent>
  </>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'header-example',
  styleUrl: 'header-example.css',
})
export class HeaderExample {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title>我的导航栏</ion-title>
        </ion-toolbar>

        <ion-toolbar>
          <ion-title>副标题栏</ion-title>
        </ion-toolbar>
      </ion-header>,

      // 无边框的 Header
      <ion-header class="ion-no-border">
        <ion-toolbar>
          <ion-title>Header - 无边框</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">我的导航栏</ion-title>
          </ion-toolbar>
        </ion-header>
      </ion-content>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>我的导航栏</ion-title>
    </ion-toolbar>

    <ion-toolbar>
      <ion-title>副标题栏</ion-title>
    </ion-toolbar>
  </ion-header>

  <!-- 无边框的 Header -->
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <ion-title>Header - 无边框</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">我的导航栏</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-content>
</template>

<script>
  import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonBackButton,
      IonButtons,
      IonContent,
      IonHeader,
      IonTitle,
      IonToolbar,
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

## CSS Shadow Parts

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />