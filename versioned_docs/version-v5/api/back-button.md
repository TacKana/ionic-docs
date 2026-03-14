---
title: '后退按钮 | ion-back-button：应用程序的自定义菜单图标'
description: 'ion-back-button 是一个适用于 Android、iOS 和渐进式 Web 应用的自定义菜单图标。使用 Ionic Framework 组件轻松构建应用程序。'
sidebar_label: 'ion-back-button'
demoUrl: '/docs/demos/api/back-button/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/back-button/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/back-button/props.md';
import Events from '@ionic-internal/component-api/v5/back-button/events.md';
import Methods from '@ionic-internal/component-api/v5/back-button/methods.md';
import Parts from '@ionic-internal/component-api/v5/back-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/back-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/back-button/slots.md';

# ion-back-button

后退按钮在点击时会在应用程序的历史记录中导航返回。它足够智能，能够根据模式（mode）决定渲染什么内容，以及根据导航堆栈决定何时显示。

要更改后退按钮中显示的内容，请使用 `text` 和 `icon` 属性。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认后退按钮 -->
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<!-- 带有默认链接的后退按钮 -->
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="home"></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<!-- 带有自定义文本和图标的后退按钮 -->
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button [text]="buttonText" [icon]="buttonIcon"> </ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<!-- 无文本、带自定义图标的后退按钮 -->
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button text="" icon="add"></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<!-- 菜单按钮旁边的危险颜色后退按钮 -->
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
      <ion-back-button color="danger"></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认后退按钮 -->
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<!-- 带有默认链接的后退按钮 -->
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button default-href="home"></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<!-- 带有自定义文本和图标的后退按钮 -->
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button text="Volver" icon="close"></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<!-- 无文本、带自定义图标的后退按钮 -->
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button text="" icon="add"></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<!-- 菜单按钮旁边的危险颜色后退按钮 -->
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
      <ion-back-button color="danger"></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonBackButton, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent } from '@ionic/react';

export const BackButtonExample: React.FC = () => (
  <IonContent>
    {/*-- 默认后退按钮 --*/}
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    {/*-- 带有默认链接的后退按钮 --*/}
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="home" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    {/*-- 带有自定义文本和图标的后退按钮 --*/}
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="buttonText" icon="buttonIcon" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    {/*-- 无文本、带自定义图标的后退按钮 --*/}
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" icon="add" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    {/*-- 菜单按钮旁边的危险颜色后退按钮 --*/}
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
          <IonBackButton color="danger" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'back-button-example',
  styleUrl: 'back-button-example.css',
})
export class BackButtonExample {
  render() {
    const buttonText = 'Custom';
    const buttonIcon = 'add';

    return [
      // 默认后退按钮
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      // 带有默认链接的后退按钮
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="home"></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      // 带有自定义文本和图标的后退按钮
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button text={buttonText} icon={buttonIcon}></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      // 无文本、带自定义图标的后退按钮
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button text="" icon="add"></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      // 菜单按钮旁边的危险颜色后退按钮
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
            <ion-back-button color="danger"></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认后退按钮 -->
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <!-- 带有默认链接的后退按钮 -->
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="home"></ion-back-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <!-- 带有自定义文本和图标的后退按钮 -->
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button :text="buttonText" :icon="buttonIcon"> </ion-back-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <!-- 无文本、带自定义图标的后退按钮 -->
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button text="" icon="add"></ion-back-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <!-- 菜单按钮旁边的危险颜色后退按钮 -->
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button></ion-menu-button>
        <ion-back-button color="danger"></ion-back-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script>
  import { IonButtons, IonHeader, IonMenuButton, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButtons, IonHeader, IonMenuButton, IonToolbar },
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