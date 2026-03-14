---
title: 'Item Divider | Ionic 应用中的列表项分隔块元素'
description: '项目分隔符（Item Dividers）是块级元素，可用于分隔列表中的项目。它们类似于列表头部，但不同之处在于它们位于项目组之间。'
sidebar_label: 'ion-item-divider'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/item-divider/props.md';
import Events from '@ionic-internal/component-api/v5/item-divider/events.md';
import Methods from '@ionic-internal/component-api/v5/item-divider/methods.md';
import Parts from '@ionic-internal/component-api/v5/item-divider/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/item-divider/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/item-divider/slots.md';

# ion-item-divider

项目分隔符（Item Dividers）是块级元素，可用于分隔列表中的项目。它们类似于列表头部，但与列表头部位于列表顶部不同，它们应该放在项目组之间。

## 用法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-item-divider>
  <ion-label> 基础项目分隔符 </ion-label>
</ion-item-divider>

<ion-item-divider color="secondary">
  <ion-label> 次要项目分隔符 </ion-label>
</ion-item-divider>

<!-- 列表中的项目分隔符 -->
<ion-list>
  <ion-item-divider>
    <ion-label> 分区 A </ion-label>
  </ion-item-divider>

  <ion-item><ion-label>A1</ion-label></ion-item>
  <ion-item><ion-label>A2</ion-label></ion-item>
  <ion-item><ion-label>A3</ion-label></ion-item>
  <ion-item><ion-label>A4</ion-label></ion-item>
  <ion-item><ion-label>A5</ion-label></ion-item>

  <ion-item-divider>
    <ion-label> 分区 B </ion-label>
  </ion-item-divider>

  <ion-item><ion-label>B1</ion-label></ion-item>
  <ion-item><ion-label>B2</ion-label></ion-item>
  <ion-item><ion-label>B3</ion-label></ion-item>
  <ion-item><ion-label>B4</ion-label></ion-item>
  <ion-item><ion-label>B5</ion-label></ion-item>
</ion-list>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-item-divider>
  <ion-label> 基础项目分隔符 </ion-label>
</ion-item-divider>

<ion-item-divider color="secondary">
  <ion-label> 次要项目分隔符 </ion-label>
</ion-item-divider>

<!-- 列表中的项目分隔符 -->
<ion-list>
  <ion-item-divider>
    <ion-label> 分区 A </ion-label>
  </ion-item-divider>

  <ion-item><ion-label>A1</ion-label></ion-item>
  <ion-item><ion-label>A2</ion-label></ion-item>
  <ion-item><ion-label>A3</ion-label></ion-item>
  <ion-item><ion-label>A4</ion-label></ion-item>
  <ion-item><ion-label>A5</ion-label></ion-item>

  <ion-item-divider>
    <ion-label> 分区 B </ion-label>
  </ion-item-divider>

  <ion-item><ion-label>B1</ion-label></ion-item>
  <ion-item><ion-label>B2</ion-label></ion-item>
  <ion-item><ion-label>B3</ion-label></ion-item>
  <ion-item><ion-label>B4</ion-label></ion-item>
  <ion-item><ion-label>B5</ion-label></ion-item>
</ion-list>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonItemDivider, IonLabel, IonList, IonItem, IonContent } from '@ionic/react';

export const ItemDividerExample: React.FC = () => (
  <IonContent>
    <IonItemDivider>
      <IonLabel>基础项目分隔符</IonLabel>
    </IonItemDivider>

    <IonItemDivider color="secondary">
      <IonLabel>次要项目分隔符</IonLabel>
    </IonItemDivider>

    {/*-- 列表中的项目分隔符 --*/}
    <IonList>
      <IonItemDivider>
        <IonLabel>分区 A</IonLabel>
      </IonItemDivider>

      <IonItem>
        <IonLabel>A1</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>A2</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>A3</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>A4</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>A5</IonLabel>
      </IonItem>

      <IonItemDivider>
        <IonLabel>分区 B</IonLabel>
      </IonItemDivider>

      <IonItem>
        <IonLabel>B1</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>B2</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>B3</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>B4</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>B5</IonLabel>
      </IonItem>
    </IonList>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'item-divider-example',
  styleUrl: 'item-divider-example.css',
})
export class ItemDividerExample {
  render() {
    return [
      <ion-item-divider>
        <ion-label>基础项目分隔符</ion-label>
      </ion-item-divider>,

      <ion-item-divider color="secondary">
        <ion-label>次要项目分隔符</ion-label>
      </ion-item-divider>,

      //  列表中的项目分隔符
      <ion-list>
        <ion-item-divider>
          <ion-label>分区 A</ion-label>
        </ion-item-divider>

        <ion-item>
          <ion-label>A1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>A2</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>A3</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>A4</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>A5</ion-label>
        </ion-item>

        <ion-item-divider>
          <ion-label>分区 B</ion-label>
        </ion-item-divider>

        <ion-item>
          <ion-label>B1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>B2</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>B3</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>B4</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>B5</ion-label>
        </ion-item>
      </ion-list>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-item-divider>
    <ion-label> 基础项目分隔符 </ion-label>
  </ion-item-divider>

  <ion-item-divider color="secondary">
    <ion-label> 次要项目分隔符 </ion-label>
  </ion-item-divider>

  <!-- 列表中的项目分隔符 -->
  <ion-list>
    <ion-item-divider>
      <ion-label> 分区 A </ion-label>
    </ion-item-divider>

    <ion-item><ion-label>A1</ion-label></ion-item>
    <ion-item><ion-label>A2</ion-label></ion-item>
    <ion-item><ion-label>A3</ion-label></ion-item>
    <ion-item><ion-label>A4</ion-label></ion-item>
    <ion-item><ion-label>A5</ion-label></ion-item>

    <ion-item-divider>
      <ion-label> 分区 B </ion-label>
    </ion-item-divider>

    <ion-item><ion-label>B1</ion-label></ion-item>
    <ion-item><ion-label>B2</ion-label></ion-item>
    <ion-item><ion-label>B3</ion-label></ion-item>
    <ion-item><ion-label>B4</ion-label></ion-item>
    <ion-item><ion-label>B5</ion-label></ion-item>
  </ion-list>
</template>

<script>
  import { IonItem, IonItemDivider, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonItemDivider, IonLabel },
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