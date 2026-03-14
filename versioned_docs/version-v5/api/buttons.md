---
title: 'ion-buttons：带有命名插槽的工具栏按钮容器'
description: 'Buttons 组件是一个容器元素。放置在工具栏中的按钮应当位于 ion-buttons 元素内部，并可通过命名插槽进行定位。'
sidebar_label: 'ion-buttons'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/buttons/props.md';
import Events from '@ionic-internal/component-api/v5/buttons/events.md';
import Methods from '@ionic-internal/component-api/v5/buttons/methods.md';
import Parts from '@ionic-internal/component-api/v5/buttons/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/buttons/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/buttons/slots.md';

# ion-buttons

Buttons 组件是一个容器元素。放置在工具栏中的按钮应当位于 `<ion-buttons>` 元素内部。

`<ion-buttons>` 元素可以通过命名插槽在工具栏中进行定位。下表描述了每个插槽的作用。

| 插槽        | 描述                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| `secondary` | 在 `ios` 模式下将元素定位到内容左侧，在 `md` 模式下直接定位到内容右侧。 |
| `primary`   | 在 `ios` 模式下将元素定位到内容右侧，在 `md` 模式下定位到最右侧。     |
| `start`     | 在从左到右（LTR）布局中定位到内容左侧，在从右到左（RTL）布局中定位到内容右侧。                               |
| `end`       | 在从左到右（LTR）布局中定位到内容右侧，在从右到左（RTL）布局中定位到内容左侧。                               |

## 用法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-toolbar>
  <ion-buttons slot="start">
    <ion-back-button></ion-back-button>
  </ion-buttons>
  <ion-title>返回按钮</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </ion-button>
    <ion-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>默认按钮</ion-title>
  <ion-buttons slot="primary">
    <ion-button color="secondary">
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </ion-button>
  </ion-buttons>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="primary">
    <ion-button (click)="clickedStar()">
      <ion-icon slot="icon-only" name="star"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>右侧菜单切换</ion-title>
  <ion-buttons slot="end">
    <ion-menu-button autoHide="false"></ion-menu-button>
  </ion-buttons>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons collapse="true">
    <ion-button>
      <ion-icon slot="icon-only" name="star"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>可折叠按钮</ion-title>
</ion-toolbar>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-toolbar>
  <ion-buttons slot="start">
    <ion-back-button></ion-back-button>
  </ion-buttons>
  <ion-title>返回按钮</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </ion-button>
    <ion-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>默认按钮</ion-title>
  <ion-buttons slot="primary">
    <ion-button color="secondary">
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </ion-button>
  </ion-buttons>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="primary">
    <ion-button onclick="clickedStar()">
      <ion-icon slot="icon-only" name="star"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>右侧菜单切换</ion-title>
  <ion-buttons slot="end">
    <ion-menu-toggle auto-hide="false">
      <ion-button>
        <ion-icon slot="icon-only" name="menu"></ion-icon>
      </ion-button>
    </ion-menu-toggle>
  </ion-buttons>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons collapse="true">
    <ion-button>
      <ion-icon slot="icon-only" name="star"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>可折叠按钮</ion-title>
</ion-toolbar>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import {
  IonButtons,
  IonToolbar,
  IonBackButton,
  IonTitle,
  IonButton,
  IonIcon,
  IonMenuButton,
  IonContent,
} from '@ionic/react';
import { personCircle, search, star, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

export const ButtonsExample: React.FC = () => (
  <IonContent>
    <IonToolbar>
      <IonButtons slot="start">
        <IonBackButton defaultHref="/" />
      </IonButtons>
      <IonTitle>返回按钮</IonTitle>
    </IonToolbar>

    <IonToolbar>
      <IonButtons slot="secondary">
        <IonButton>
          <IonIcon slot="icon-only" icon={personCircle} />
        </IonButton>
        <IonButton>
          <IonIcon slot="icon-only" icon={search} />
        </IonButton>
      </IonButtons>
      <IonTitle>默认按钮</IonTitle>
      <IonButtons slot="primary">
        <IonButton color="secondary">
          <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
        </IonButton>
      </IonButtons>
    </IonToolbar>

    <IonToolbar>
      <IonButtons slot="primary">
        <IonButton onClick={() => {}}>
          <IonIcon slot="icon-only" icon={star} />
        </IonButton>
      </IonButtons>
      <IonTitle>右侧菜单切换</IonTitle>
      <IonButtons slot="end">
        <IonMenuButton autoHide={false} />
      </IonButtons>
    </IonToolbar>

    <IonToolbar>
      <IonButtons collapse="true">
        <IonButton>
          <IonIcon slot="icon-only" icon={star} />
        </IonButton>
      </IonButtons>
      <IonTitle>可折叠按钮</IonTitle>
    </IonToolbar>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'buttons-example',
  styleUrl: 'buttons-example.css',
})
export class ButtonsExample {
  clickedStar() {
    console.log('点击了星标按钮');
  }

  render() {
    return [
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>返回按钮</ion-title>
      </ion-toolbar>,

      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" name="person-circle"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>默认按钮</ion-title>
        <ion-buttons slot="primary">
          <ion-button color="secondary">
            <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>,

      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button onClick={() => this.clickedStar()}>
            <ion-icon slot="icon-only" name="star"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>右侧菜单切换</ion-title>
        <ion-buttons slot="end">
          <ion-menu-button autoHide={false}></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>,

      <ion-toolbar>
        <ion-buttons collapse={true}>
          <ion-button>
            <ion-icon slot="icon-only" name="star"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>可折叠按钮</ion-title>
      </ion-toolbar>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title>返回按钮</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button>
        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
      </ion-button>
      <ion-button>
        <ion-icon slot="icon-only" :icon="search"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>默认按钮</ion-title>
    <ion-buttons slot="primary">
      <ion-button color="secondary">
        <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="primary">
      <ion-button @click="clickedStar()">
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>右侧菜单切换</ion-title>
    <ion-buttons slot="end">
      <ion-menu-button auto-hide="false"></ion-menu-button>
    </ion-buttons>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons collapse="true">
      <ion-button>
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>可折叠按钮</ion-title>
  </ion-toolbar>
</template>

<script>
  import { IonBackButton, IonButton, IonButtons, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/vue';
  import { personCircle, search } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonBackButton, IonButton, IonButtons, IonIcon, IonMenuButton, IonTitle, IonToolbar },
    setup() {
      const clickedStar = () => {
        console.log('点击了星标！');
      };
      return { personCircle, search, clickedStar };
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