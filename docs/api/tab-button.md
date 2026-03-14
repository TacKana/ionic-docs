---
title: 选项卡按钮组件
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v8/tab-button/props.md';
import Events from '@ionic-internal/component-api/v8/tab-button/events.md';
import Methods from '@ionic-internal/component-api/v8/tab-button/methods.md';
import Parts from '@ionic-internal/component-api/v8/tab-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/tab-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/tab-button/slots.md';



import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


选项卡按钮是放置在[选项卡栏](tab-bar.md)内的 UI 组件。它可以指定图标和标签的布局，并连接到[选项卡视图](tab.md)。

有关配置选项卡的更多详细信息，请参阅[选项卡文档](tabs.md)。




## 用法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-tabs>
  <!-- 选项卡栏 -->
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="schedule">
      <ion-icon name="calendar" aria-hidden="true"></ion-icon>
      <ion-label>日程</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="speakers">
      <ion-icon name="person-circle" aria-hidden="true"></ion-icon>
      <ion-label>演讲者</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="map">
      <ion-icon name="map" aria-hidden="true"></ion-icon>
      <ion-label>地图</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="about">
      <ion-icon name="information-circle" aria-hidden="true"></ion-icon>
      <ion-label>关于</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```


</TabItem>


<TabItem value="javascript">

```html
<ion-tabs>
  <!-- 选项卡视图 -->
  <ion-tab tab="schedule">
    <ion-router-outlet name="schedule"></ion-router-outlet>
  </ion-tab>

  <ion-tab tab="speakers">
    <ion-router-outlet name="speakers"></ion-router-outlet>
  </ion-tab>

  <ion-tab tab="map">
    <ion-router-outlet name="map"></ion-router-outlet>
  </ion-tab>

  <ion-tab tab="about">
    <ion-router-outlet name="about"></ion-router-outlet>
  </ion-tab>

  <!-- 选项卡栏 -->
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="schedule" href="/app/tabs/(schedule:schedule)">
      <ion-icon name="calendar" aria-hidden="true"></ion-icon>
      <ion-label>日程</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="speakers" href="/app/tabs/(speakers:speakers)">
      <ion-icon name="person-circle" aria-hidden="true"></ion-icon>
      <ion-label>演讲者</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="map" href="/app/tabs/(map:map)">
      <ion-icon name="map" aria-hidden="true"></ion-icon>
      <ion-label>地图</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="about" href="/app/tabs/(about:about)">
      <ion-icon name="information-circle" aria-hidden="true"></ion-icon>
      <ion-label>关于</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```


</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';

export const TabButtonExample: React.FC = () => (
  <IonContent>
    <IonTabs>
      {/*-- 选项卡栏 --*/}
      <IonTabBar slot="bottom">
        <IonTabButton tab="schedule">
          <IonIcon icon={calendar} aria-hidden="true" />
          <IonLabel>日程</IonLabel>
        </IonTabButton>

        <IonTabButton tab="speakers">
          <IonIcon icon={personCircle} aria-hidden="true" />
          <IonLabel>演讲者</IonLabel>
        </IonTabButton>

        <IonTabButton tab="map">
          <IonIcon icon={map} aria-hidden="true" />
          <IonLabel>地图</IonLabel>
        </IonTabButton>

        <IonTabButton tab="about">
          <IonIcon icon={informationCircle} aria-hidden="true" />
          <IonLabel>关于</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonContent>
);
```


</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-tabs>
    <!-- 选项卡栏 -->
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="schedule" href="/tabs/schedule">
        <ion-icon :icon="calendar" aria-hidden="true"></ion-icon>
        <ion-label>日程</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="speakers" href="/tabs/speakers">
        <ion-icon :icon="personCircle" aria-hidden="true"></ion-icon>
        <ion-label>演讲者</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="map" href="/tabs/map">
        <ion-icon :icon="map" aria-hidden="true"></ion-icon>
        <ion-label>地图</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="about" href="/tabs/about">
        <ion-icon :icon="informationCircle" aria-hidden="true"></ion-icon>
        <ion-label>关于</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script setup lang="ts">
import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/vue';
import { calendar, informationCircle, map, personCircle } from 'ionicons/icons';
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