---
sidebar_label: 'ion-tab-button'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/tab-button/props.md';
import Events from '@ionic-internal/component-api/v5/tab-button/events.md';
import Methods from '@ionic-internal/component-api/v5/tab-button/methods.md';
import Parts from '@ionic-internal/component-api/v5/tab-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/tab-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/tab-button/slots.md';

# ion-tab-button

标签按钮（Tab Button）是放置在[标签栏（Tab Bar）](tab-bar.md)内的一个UI组件。它可以定义图标和标签的布局，并连接到[标签视图（Tab View）](tab.md)。

有关如何配置标签页的更多详细信息，请参阅[标签页文档](tabs.md)。

## 使用方式

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-tabs>
  <!-- 标签栏 -->
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="schedule">
      <ion-icon name="calendar"></ion-icon>
      <ion-label>日程安排</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="speakers">
      <ion-icon name="person-circle"></ion-icon>
      <ion-label>演讲嘉宾</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="map">
      <ion-icon name="map"></ion-icon>
      <ion-label>地图</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="about">
      <ion-icon name="information-circle"></ion-icon>
      <ion-label>关于</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-tabs>
  <!-- 标签视图 -->
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

  <!-- 标签栏 -->
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="schedule" href="/app/tabs/(schedule:schedule)">
      <ion-icon name="calendar"></ion-icon>
      <ion-label>日程安排</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="speakers" href="/app/tabs/(speakers:speakers)">
      <ion-icon name="person-circle"></ion-icon>
      <ion-label>演讲嘉宾</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="map" href="/app/tabs/(map:map)">
      <ion-icon name="map"></ion-icon>
      <ion-label>地图</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="about" href="/app/tabs/(about:about)">
      <ion-icon name="information-circle"></ion-icon>
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
      {/*-- 标签栏 --*/}
      <IonTabBar slot="bottom">
        <IonTabButton tab="schedule">
          <IonIcon icon={calendar} />
          <IonLabel>日程安排</IonLabel>
        </IonTabButton>

        <IonTabButton tab="speakers">
          <IonIcon icon={personCircle} />
          <IonLabel>演讲嘉宾</IonLabel>
        </IonTabButton>

        <IonTabButton tab="map">
          <IonIcon icon={map} />
          <IonLabel>地图</IonLabel>
        </IonTabButton>

        <IonTabButton tab="about">
          <IonIcon icon={informationCircle} />
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
    <!-- 标签栏 -->
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="schedule" href="/tabs/schedule">
        <ion-icon :icon="calendar"></ion-icon>
        <ion-label>日程安排</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="speakers" href="/tabs/speakers">
        <ion-icon :icon="person-circle"></ion-icon>
        <ion-label>演讲嘉宾</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="map" href="/tabs/map">
        <ion-icon :icon="map"></ion-icon>
        <ion-label>地图</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="about" href="/tabs/about">
        <ion-icon :icon="informationCircle"></ion-icon>
        <ion-label>关于</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
  import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue';
  import { calendar, informationCircle, map, personCircle } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonIcon,
      IonLabel,
      IonTabBar,
      IonTabButton,
      IonTabs,
    },
    setup() {
      return { calendar, informationCircle, map, personCircle };
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