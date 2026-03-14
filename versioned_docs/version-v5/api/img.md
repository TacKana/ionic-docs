---
title: 'Img Tag to Lazy Load Images in Viewport | ion-img Tag'
description: 'Img 标签可在元素进入视口时延迟加载图像。在生成大型列表时特别有用——因为图像仅在可见时加载。'
sidebar_label: 'ion-img'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/img/props.md';
import Events from '@ionic-internal/component-api/v5/img/events.md';
import Methods from '@ionic-internal/component-api/v5/img/methods.md';
import Parts from '@ionic-internal/component-api/v5/img/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/img/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/img/slots.md';

# ion-img

ion-img 是一个标签，当元素进入视口时会延迟加载图像。这在生成大型列表时特别有用，因为图像仅在可见时才会加载。该组件内部使用 [Intersection Observer](https://caniuse.com/#feat=intersectionobserver)，该特性在大多数现代浏览器中都得到支持，如果不支持则会回退到 `setTimeout`。

## 使用方式

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'ANGULAR' }, { value: 'react', label: 'REACT' }, { value: 'stencil', label: 'STENCIL' }, { value: 'vue', label: 'VUE' }]}>

<TabItem value="angular">

```html
<ion-list>
  <ion-item *ngFor="let item of items">
    <ion-thumbnail slot="start">
      <ion-img [src]="item.src"></ion-img>
    </ion-thumbnail>
    <ion-label>{{item.text}}</ion-label>
  </ion-item>
</ion-list>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent } from '@ionic/react';

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' }];

export const ImgExample: React.FC = () => (
  <IonContent>
    <IonList>
      {items.map((image, i) => (
        <IonItem key={i}>
          <IonThumbnail slot="start">
            <IonImg src={image.src} />
          </IonThumbnail>
          <IonLabel>{image.text}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'img-example',
  styleUrl: 'img-example.css',
})
export class ImgExample {
  private items = [
    {
      text: '项目 1',
      src: '/path/to/external/file.png',
    },
    {
      text: '项目 2',
      src: '/path/to/external/file.png',
    },
    {
      text: '项目 3',
      src: '/path/to/external/file.png',
    },
  ];

  render() {
    return [
      <ion-list>
        {this.items.map((item) => (
          <ion-item>
            <ion-thumbnail slot="start">
              <ion-img src={item.src}></ion-img>
            </ion-thumbnail>
            <ion-label>{item.text}</ion-label>
          </ion-item>
        ))}
      </ion-list>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-list>
    <ion-item v-for="item in items" :key="item.src">
      <ion-thumbnail slot="start">
        <ion-img :src="item.src"></ion-img>
      </ion-thumbnail>
      <ion-label>{{item.text}}</ion-label>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonImg, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonImg, IonItem, IonLabel, IonList, IonThumbnail },
    setup() {
      const items = [
        {
          text: '项目 1',
          src: '/path/to/external/file.png',
        },
        {
          text: '项目 2',
          src: '/path/to/external/file.png',
        },
        {
          text: '项目 3',
          src: '/path/to/external/file.png',
        },
      ];
      return { items };
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