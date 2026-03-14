---
title: '页脚组件 | Ionic 应用页脚：页面根组件封装容器'
description: '页脚（Footer）是一个位于页面底部的根组件。Ionic 页脚可以包装 ion-toolbar 组件，确保内容区域尺寸正确。'
sidebar_label: 'ion-footer'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/footer/props.md';
import Events from '@ionic-internal/component-api/v5/footer/events.md';
import Methods from '@ionic-internal/component-api/v5/footer/methods.md';
import Parts from '@ionic-internal/component-api/v5/footer/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/footer/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/footer/slots.md';

# ion-footer

页脚（Footer）是页面的根组件之一，位于页面底部。
页脚可以包装 ion-toolbar 组件，确保内容区域尺寸正确。

## 使用方式

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-content></ion-content>

<!-- 无边框页脚 -->
<ion-footer class="ion-no-border">
  <ion-toolbar>
    <ion-title>页脚 - 无边框</ion-title>
  </ion-toolbar>
</ion-footer>

<ion-footer>
  <ion-toolbar>
    <ion-title>页脚</ion-title>
  </ion-toolbar>
</ion-footer>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-content></ion-content>

<!-- 无边框页脚 -->
<ion-footer class="ion-no-border">
  <ion-toolbar>
    <ion-title>页脚 - 无边框</ion-title>
  </ion-toolbar>
</ion-footer>

<ion-footer>
  <ion-toolbar>
    <ion-title>页脚</ion-title>
  </ion-toolbar>
</ion-footer>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonContent, IonFooter, IonToolbar, IonTitle } from '@ionic/react';

export const FooterExample: React.FC = () => (
  <>
    <IonContent />

    {/*-- 无边框页脚 --*/}
    <IonFooter className="ion-no-border">
      <IonToolbar>
        <IonTitle>页脚 - 无边框</IonTitle>
      </IonToolbar>
    </IonFooter>

    <IonFooter>
      <IonToolbar>
        <IonTitle>页脚</IonTitle>
      </IonToolbar>
    </IonFooter>
  </>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'footer-example',
  styleUrl: 'footer-example.css',
})
export class FooterExample {
  render() {
    return [
      <ion-content></ion-content>,

      // 无边框页脚
      <ion-footer class="ion-no-border">
        <ion-toolbar>
          <ion-title>页脚 - 无边框</ion-title>
        </ion-toolbar>
      </ion-footer>,

      <ion-footer>
        <ion-toolbar>
          <ion-title>页脚</ion-title>
        </ion-toolbar>
      </ion-footer>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-content></ion-content>

  <!-- 无边框页脚 -->
  <ion-footer class="ion-no-border">
    <ion-toolbar>
      <ion-title>页脚 - 无边框</ion-title>
    </ion-toolbar>
  </ion-footer>

  <ion-footer>
    <ion-toolbar>
      <ion-title>页脚</ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script>
  import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonFooter, IonTitle, IonToolbar },
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