---
title: 'ion-split-pane：用于菜单和多视图布局的拆分面板'
description: 'ion-split-pane 在创建多视图应用布局时非常有用。它允许在视口宽度增加时显示诸如菜单等界面元素。'
sidebar_label: 'ion-split-pane'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/split-pane/props.md';
import Events from '@ionic-internal/component-api/v5/split-pane/events.md';
import Methods from '@ionic-internal/component-api/v5/split-pane/methods.md';
import Parts from '@ionic-internal/component-api/v5/split-pane/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/split-pane/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/split-pane/slots.md';

# ion-split-pane

拆分面板（split pane）在创建多视图布局时非常有用。它允许在视口宽度增加时显示诸如菜单等界面元素。

如果设备屏幕宽度低于特定尺寸，拆分面板会收起，菜单将被隐藏。这对于创建既能在浏览器中访问，又能通过应用商店部署到手机和平板的应用来说非常理想。

## 设置断点

默认情况下，当屏幕宽度大于 992px 时，拆分面板会展开。要自定义此行为，可以在 `when` 属性中传入一个断点。`when` 属性可以接受布尔值、任何有效的媒体查询或 Ionic 预定义的尺寸之一。

```html
<!-- 可以是 "xs"、"sm"、"md"、"lg" 或 "xl" -->
<ion-split-pane when="md"></ion-split-pane>

<!-- 可以是任何有效的媒体查询 https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries -->
<ion-split-pane when="(min-width: 40px)"></ion-split-pane>
```

| 尺寸   | 值                     | 描述                                                       |
| ------ | ---------------------- | ---------------------------------------------------------- |
| `xs`   | `(min-width: 0px)`     | 当最小宽度为 0px 时显示拆分面板（意味着始终显示）           |
| `sm`   | `(min-width: 576px)`   | 当最小宽度为 576px 时显示拆分面板                           |
| `md`   | `(min-width: 768px)`   | 当最小宽度为 768px 时显示拆分面板                           |
| `lg`   | `(min-width: 992px)`   | 当最小宽度为 992px 时显示拆分面板（默认断点）               |
| `xl`   | `(min-width: 1200px)`  | 当最小宽度为 1200px 时显示拆分面板                          |

## 使用方式

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-split-pane contentId="main">
  <!--  侧边菜单  -->
  <ion-menu contentId="main">
    <ion-header>
      <ion-toolbar>
        <ion-title>菜单</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-menu>

  <!-- 主要内容区 -->
  <ion-router-outlet id="main"></ion-router-outlet>
</ion-split-pane>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-split-pane content-id="main">
  <!--  侧边菜单  -->
  <ion-menu content-id="main">
    <ion-header>
      <ion-toolbar>
        <ion-title>菜单</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-menu>

  <!-- 主要内容区 -->
  <ion-content id="main">
    <h1>你好</h1>
  </ion-content>
</ion-split-pane>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import {
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRouterOutlet,
  IonContent,
  IonPage,
} from '@ionic/react';

export const SplitPlaneExample: React.SFC<{}> = () => (
  <IonContent>
    <IonSplitPane contentId="main">
      {/*--  侧边菜单  --*/}
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>菜单</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonMenu>

      {/*-- 主要内容区 --*/}
      <IonPage id="main" />
    </IonSplitPane>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'split-pane-example',
  styleUrl: 'split-pane-example.css',
})
export class SplitPaneExample {
  render() {
    return [
      <ion-split-pane content-id="main">
        {/*  侧边菜单 */}
        <ion-menu content-id="main">
          <ion-header>
            <ion-toolbar>
              <ion-title>菜单</ion-title>
            </ion-toolbar>
          </ion-header>
        </ion-menu>

        {/* 主要内容区 */}
        <ion-router-outlet id="main"></ion-router-outlet>
      </ion-split-pane>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-split-pane content-id="main">
    <!--  侧边菜单  -->
    <ion-menu content-id="main">
      <ion-header>
        <ion-toolbar>
          <ion-title>菜单</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-menu>

    <!-- 主要内容区 -->
    <ion-router-outlet id="main"></ion-router-outlet>
  </ion-split-pane>
</template>

<script>
  import { IonHeader, IonMenu, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonHeader,
      IonMenu,
      IonRouterOutlet,
      IonSplitPane,
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