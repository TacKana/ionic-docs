---
title: 'Ion-Tabs：用于应用顶层导航的标签页组件'
description: '标签页是实现标签导航的顶层组件。Ion-tabs 没有样式，作为路由出口工作，提供类似原生应用的导航体验。'
sidebar_label: 'ion-tabs'
demoUrl: '/docs/demos/api/tabs/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/tabs/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/tabs/props.md';
import Events from '@ionic-internal/component-api/v5/tabs/events.md';
import Methods from '@ionic-internal/component-api/v5/tabs/methods.md';
import Parts from '@ionic-internal/component-api/v5/tabs/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/tabs/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/tabs/slots.md';

# ion-tabs

标签页是实现标签导航的顶层导航组件。该组件是独立 [Tab](tab.md) 组件的容器。

`ion-tabs` 组件没有任何样式，作为路由出口来处理导航。它不提供任何用户界面反馈或切换标签的机制。为此，应提供一个 `ion-tab-bar` 作为 `ion-tabs` 的直接子元素。

`ion-tabs` 和 `ion-tab-bar` 都可以作为独立元素使用。它们不依赖彼此工作，但通常一起使用，以实现类似原生应用的标签导航体验。

`ion-tab-bar` 需要定义一个插槽，以便在 `ion-tabs` 组件中投影到正确的位置。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="schedule">
      <ion-icon name="calendar"></ion-icon>
      <ion-label>日程</ion-label>
      <ion-badge>6</ion-badge>
    </ion-tab-button>

    <ion-tab-button tab="speakers">
      <ion-icon name="person-circle"></ion-icon>
      <ion-label>演讲者</ion-label>
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

### 路由集成

与 Angular 路由器一起使用时，`ion-tab-button` 的 `tab` 属性应引用路由路径。

```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="schedule">
      <ion-icon name="calendar"></ion-icon>
      <ion-label>日程</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

```tsx
import { Routes } from '@angular/router';
import { TabsPage } from './tabs-page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: '../schedule/schedule.module#ScheduleModule',
          },
        ],
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full',
      },
    ],
  },
];
```

</TabItem>

<TabItem value="javascript">

```html
<ion-tabs>
  <ion-tab tab="tab-schedule">
    <ion-nav></ion-nav>
  </ion-tab>

  <ion-tab tab="tab-speaker">
    <ion-nav></ion-nav>
  </ion-tab>

  <ion-tab tab="tab-map" component="page-map">
    <ion-nav></ion-nav>
  </ion-tab>

  <ion-tab tab="tab-about" component="page-about">
    <ion-nav></ion-nav>
  </ion-tab>

  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab-schedule">
      <ion-icon name="calendar"></ion-icon>
      <ion-label>日程</ion-label>
      <ion-badge>6</ion-badge>
    </ion-tab-button>

    <ion-tab-button tab="tab-speaker">
      <ion-icon name="person-circle"></ion-icon>
      <ion-label>演讲者</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab-map">
      <ion-icon name="map"></ion-icon>
      <ion-label>地图</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab-about">
      <ion-icon name="information-circle"></ion-icon>
      <ion-label>关于</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

### 激活标签页

每个 `ion-tab-button` 被按下时会激活一个标签页。为了将 `ion-tab-button` 链接到 `ion-tab` 容器，应在每个组件上设置匹配的 `tab` 属性。

```html
<ion-tab tab="settings"> ... </ion-tab>

<ion-tab-button tab="settings"> ... </ion-tab-button>
```

上面的 `ion-tab-button` 和 `ion-tab` 通过共同的 `tab` 属性链接在一起。

`tab` 属性标识每个标签页，在 `ion-tabs` 内部必须是唯一的。即使某个组件未被使用，也务必在 `ion-tab` 和 `ion-tab-button` 上设置 `tab` 属性。

### 路由集成

与 Ionic 的路由器（`ion-router`）一起使用时，`ion-tab` 的 `tab` 属性应与 `ion-route` 的 `component` 属性匹配。

在 `ion-tabs` 出口作用域内的以下路由：

```html
<ion-route url="/settings-page" component="settings"></ion-route>
```

将匹配以下标签页：

```html
<ion-tab tab="settings" component="settings-component"></ion-tab>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';

export const TabsExample: React.FC = () => (
  <IonTabs>
    <IonTabBar slot="bottom">
      <IonTabButton tab="schedule">
        <IonIcon icon={calendar} />
        <IonLabel>日程</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="speakers">
        <IonIcon icon={personCircle} />
        <IonLabel>演讲者</IonLabel>
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
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'tabs-example',
  styleUrl: 'tabs-example.css',
})
export class TabsExample {
  render() {
    return [
      <ion-tabs>
        <ion-tab tab="tab-schedule">
          <ion-nav></ion-nav>
        </ion-tab>

        <ion-tab tab="tab-speaker">
          <ion-nav></ion-nav>
        </ion-tab>

        <ion-tab tab="tab-map" component="page-map">
          <ion-nav></ion-nav>
        </ion-tab>

        <ion-tab tab="tab-about" component="page-about">
          <ion-nav></ion-nav>
        </ion-tab>

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab-schedule">
            <ion-icon name="calendar"></ion-icon>
            <ion-label>日程</ion-label>
            <ion-badge>6</ion-badge>
          </ion-tab-button>

          <ion-tab-button tab="tab-speaker">
            <ion-icon name="person-circle"></ion-icon>
            <ion-label>演讲者</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab-map">
            <ion-icon name="map"></ion-icon>
            <ion-label>地图</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab-about">
            <ion-icon name="information-circle"></ion-icon>
            <ion-label>关于</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>,
    ];
  }
}
```

### 激活标签页

每个 `ion-tab-button` 被按下时会激活一个标签页。为了将 `ion-tab-button` 链接到 `ion-tab` 容器，应在每个组件上设置匹配的 `tab` 属性。

```jsx
<ion-tab tab="settings">
  ...
</ion-tab>

<ion-tab-button tab="settings">
  ...
</ion-tab-button>
```

上面的 `ion-tab-button` 和 `ion-tab` 通过共同的 `tab` 属性链接在一起。

`tab` 属性标识每个标签页，在 `ion-tabs` 内部必须是唯一的。即使某个组件未被使用，也务必在 `ion-tab` 和 `ion-tab-button` 上设置 `tab` 属性。

### 路由集成

与 Ionic 的路由器（`ion-router`）一起使用时，`ion-tab` 的 `tab` 属性应与 `ion-route` 的 `component` 属性匹配。

在 `ion-tabs` 出口作用域内的以下路由：

```tsx
<ion-route url="/settings-page" component="settings"></ion-route>
```

将匹配以下标签页：

```tsx
<ion-tab tab="settings" component="settings-component"></ion-tab>
```

</TabItem>

<TabItem value="vue">

**Tabs.vue**

```html
<template>
  <ion-page>
    <ion-tabs @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange">
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="schedule" href="/tabs/schedule">
          <ion-icon :icon="calendar"></ion-icon>
          <ion-label>日程</ion-label>
          <ion-badge>6</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="speakers" href="/tabs/speakers">
          <ion-icon :icon="personCircle"></ion-icon>
          <ion-label>演讲者</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
  import { defineComponent } from 'vue';
  import { IonIcon, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue';
  import { calendar, personCircle } from 'ionicons/icons';

  export default defineComponent({
    components: {
      IonIcon,
      IonLabel,
      IonPage,
      IonTabBar,
      IonTabButton,
      IonTabs,
    },
    setup() {
      const beforeTabChange = () => {
        // 标签页切换前执行操作
      };
      const afterTabChange = () => {
        // 标签页切换后执行操作
      };
      return {
        calendar,
        personCircle,
        beforeTabChange,
        afterTabChange,
      };
    },
  });
</script>
```

**Schedule.vue**

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>日程</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">日程标签页</ion-content>
  </ion-page>
</template>

<script>
  import { defineComponent } from 'vue';
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

  export default defineComponent({
    components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar },
  });
</script>
```

**Speakers.vue**

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>演讲者</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">演讲者标签页</ion-content>
  </ion-page>
</template>

<script>
  import { defineComponent } from 'vue';
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

  export default defineComponent({
    components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar },
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

## CSS 影子部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />