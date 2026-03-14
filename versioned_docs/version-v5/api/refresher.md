---
sidebar_label: 'ion-refresher'
demoUrl: '/docs/demos/api/refresher/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/refresher/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/refresher/props.md';
import Events from '@ionic-internal/component-api/v5/refresher/events.md';
import Methods from '@ionic-internal/component-api/v5/refresher/methods.md';
import Parts from '@ionic-internal/component-api/v5/refresher/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/refresher/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/refresher/slots.md';

# ion-refresher

刷新器（refresher）为内容组件提供下拉刷新功能。下拉刷新模式允许用户通过触摸手势下拉数据列表以获取更多数据。

数据应在刷新器的输出事件中进行修改。一旦异步操作完成且刷新应结束时，调用刷新器上的 `complete()` 方法。

## 原生刷新器

iOS 和 Android 平台都提供了利用其各自设备特性的刷新器，使得下拉刷新具有流畅的原生体验。

某些属性（如 `pullMin` 和 `snapbackDuration`）不兼容，因为原生刷新器大多基于滚动实现。更多信息请参阅[刷新器属性](#properties)。

### iOS 使用说明

使用 iOS 原生 `ion-refresher` 需要将 `ion-refresher-content` 上的 `pullingIcon` 属性设置为可用旋转器（spinner）之一的值。可接受的值请参阅[旋转器文档](spinner.md#properties)。在 iOS 上，`pullingIcon` 默认使用 `lines` 旋转器。当用户下拉页面时，旋转器的刻度标记会逐步显示。

iOS 原生 `ion-refresher` 依赖于橡皮筋滚动（rubber band scrolling）才能正常工作，因此仅与 iOS 设备兼容。对于在不支持橡皮筋滚动的设备上以 iOS 模式运行的应用程序，我们提供了一个备用刷新器。

### Android 使用说明

使用 MD 原生 `ion-refresher` 需要将 `ion-refresher-content` 上的 `pullingIcon` 属性设置为可用旋转器之一的值。可接受的值请参阅 [ion-spinner 文档](spinner.md#properties)。在 MD 上，`pullingIcon` 默认使用 `circular` 旋转器。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认刷新器 -->
<ion-content>
  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- 自定义刷新器属性 -->
<ion-content>
  <ion-refresher slot="fixed" pullFactor="0.5" pullMin="100" pullMax="200">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- 自定义刷新器内容 -->
<ion-content>
  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <ion-refresher-content
      pullingIcon="chevron-down-circle-outline"
      pullingText="下拉刷新"
      refreshingSpinner="circles"
      refreshingText="刷新中..."
    >
    </ion-refresher-content>
  </ion-refresher>
</ion-content>
```

```tsx
import { Component } from '@angular/core';

@Component({
  selector: 'refresher-example',
  templateUrl: 'refresher-example.html',
  styleUrls: ['./refresher-example.css'],
})
export class RefresherExample {
  constructor() {}

  doRefresh(event) {
    console.log('开始异步操作');

    setTimeout(() => {
      console.log('异步操作已结束');
      event.target.complete();
    }, 2000);
  }
}
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认刷新器 -->
<ion-content>
  <ion-refresher slot="fixed">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- 自定义刷新器属性 -->
<ion-content>
  <ion-refresher slot="fixed" pull-factor="0.5" pull-min="100" pull-max="200">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- 自定义刷新器内容 -->
<ion-content>
  <ion-refresher slot="fixed">
    <ion-refresher-content
      pulling-icon="chevron-down-circle-outline"
      pulling-text="下拉刷新"
      refreshing-spinner="circles"
      refreshing-text="刷新中..."
    >
    </ion-refresher-content>
  </ion-refresher>
</ion-content>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/react';
import { RefresherEventDetail } from '@ionic/core';
import { chevronDownCircleOutline } from 'ionicons/icons';

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
  console.log('开始异步操作');

  setTimeout(() => {
    console.log('异步操作已结束');
    event.detail.complete();
  }, 2000);
}

export const RefresherExample: React.FC = () => (
  <IonContent>
    {/*-- 默认刷新器 --*/}
    <IonContent>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
    </IonContent>

    {/*-- 自定义刷新器属性 --*/}
    <IonContent>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh} pullFactor={0.5} pullMin={100} pullMax={200}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
    </IonContent>

    {/*-- 自定义刷新器内容 --*/}
    <IonContent>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent
          pullingIcon={chevronDownCircleOutline}
          pullingText="下拉刷新"
          refreshingSpinner="circles"
          refreshingText="刷新中..."
        ></IonRefresherContent>
      </IonRefresher>
    </IonContent>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'refresher-example',
  styleUrl: 'refresher-example.css',
})
export class RefresherExample {
  doRefresh(ev: any) {
    console.log('开始异步操作');

    setTimeout(() => {
      console.log('异步操作已结束');
      ev.target.complete();
    }, 2000);
  }

  render() {
    return [
      // 默认刷新器
      <ion-content>
        <ion-refresher slot="fixed" onIonRefresh={(ev) => this.doRefresh(ev)}>
          <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
      </ion-content>,

      // 自定义刷新器属性
      <ion-content>
        <ion-refresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200}>
          <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
      </ion-content>,

      // 自定义刷新器内容
      <ion-content>
        <ion-refresher slot="fixed" onIonRefresh={(ev) => this.doRefresh(ev)}>
          <ion-refresher-content
            pullingIcon="chevron-down-circle-outline"
            pullingText="下拉刷新"
            refreshingSpinner="circles"
            refreshingText="刷新中..."
          ></ion-refresher-content>
        </ion-refresher>
      </ion-content>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认刷新器 -->
  <ion-content>
    <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>
  </ion-content>

  <!-- 自定义刷新器属性 -->
  <ion-content>
    <ion-refresher slot="fixed" pull-factor="0.5" pull-min="100" pull-max="200">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>
  </ion-content>

  <!-- 自定义刷新器内容 -->
  <ion-content>
    <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
      <ion-refresher-content
        :pulling-icon="chevronDownCircleOutline"
        pulling-text="下拉刷新"
        refreshing-spinner="circles"
        refreshing-text="刷新中..."
      >
      </ion-refresher-content>
    </ion-refresher>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/vue';
  import { chevronDownCircleOutline } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonRefresher, IonRefresherContent },
    setup() {
      const doRefresh = (event: CustomEvent) => {
        console.log('开始异步操作');

        setTimeout(() => {
          console.log('异步操作已结束');
          event.target.complete();
        }, 2000);
      };
      return { chevronDownCircleOutline, doRefresh };
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