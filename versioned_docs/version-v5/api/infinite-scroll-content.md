---
sidebar_label: 'ion-infinite-scroll-content'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/infinite-scroll-content/props.md';
import Events from '@ionic-internal/component-api/v5/infinite-scroll-content/events.md';
import Methods from '@ionic-internal/component-api/v5/infinite-scroll-content/methods.md';
import Parts from '@ionic-internal/component-api/v5/infinite-scroll-content/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/infinite-scroll-content/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/infinite-scroll-content/slots.md';

# ion-infinite-scroll-content

`ion-infinite-scroll-content` 组件是 `ion-infinite-scroll` 默认使用的子组件。它会根据当前平台显示一个视觉效果最佳的无限滚动加载指示器，其外观会随着无限滚动状态的变化而改变。通过设置 `loadingSpinner` 和 `loadingText` 属性，可以更换默认的加载指示器并添加自定义文本。

## React

`ion-infinite-scroll-content` 组件在 React 中不受支持。

## 使用方式

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'ANGULAR' }, { value: 'javascript', label: 'JAVASCRIPT' }, { value: 'stencil', label: 'STENCIL' }, { value: 'vue', label: 'VUE' }]}>

<TabItem value="angular">

```html
<ion-content>
  <ion-infinite-scroll>
    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载更多数据…">
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-content>
  <ion-infinite-scroll>
    <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="加载更多数据…">
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'infinite-scroll-content-example',
  styleUrl: 'infinite-scroll-content-example.css',
})
export class InfiniteScrollContentExample {
  render() {
    return [
      <ion-content>
        <ion-infinite-scroll>
          <ion-infinite-scroll-content
            loadingSpinner="bubbles"
            loadingText="加载更多数据..."
          ></ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </ion-content>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-page>
    <ion-content>
      <ion-infinite-scroll>
        <ion-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="加载更多数据…">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage
 } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonPage
  }
});
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