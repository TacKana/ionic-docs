---
title: 支持 CSS 自定义属性的标签栏组件
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v8/tab-bar/props.md';
import Events from '@ionic-internal/component-api/v8/tab-bar/events.md';
import Methods from '@ionic-internal/component-api/v8/tab-bar/methods.md';
import Parts from '@ionic-internal/component-api/v8/tab-bar/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/tab-bar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/tab-bar/slots.md';

<head>
  <title>ion-tab-bar：支持 CSS 自定义属性的标签栏组件</title>
  <meta name="description" content="标签栏组件包含一组标签按钮，必须放置在标签组件内部以实现通信。了解更多关于其用法和 CSS 自定义属性的信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


标签栏是一个包含一组[标签按钮](tab-button.md)的 UI 组件。必须将其放置在[标签组件](tabs.md)内部，以便与各个[标签页](tab.md)进行通信。




## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-tabs>
  <!-- 标签栏 -->
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="account">
      <ion-icon name="person"></ion-icon>
    </ion-tab-button>
    <ion-tab-button tab="contact">
      <ion-icon name="call"></ion-icon>
    </ion-tab-button>
    <ion-tab-button tab="settings">
      <ion-icon name="settings"></ion-icon>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

</TabItem>


<TabItem value="javascript">

```html
<ion-tabs>
  <!-- 标签视图 -->
  <ion-tab tab="account"></ion-tab>
  <ion-tab tab="contact"></ion-tab>
  <ion-tab tab="settings"></ion-tab>

  <!-- 标签栏 -->
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="account">
      <ion-icon name="person"></ion-icon>
    </ion-tab-button>
    <ion-tab-button tab="contact">
      <ion-icon name="call"></ion-icon>
    </ion-tab-button>
    <ion-tab-button tab="settings">
      <ion-icon name="settings"></ion-icon>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonContent } from '@ionic/react';
import { call, person, settings } from 'ionicons/icons';

export const TabBarExample: React.FC = () => (
  <IonContent>
    <IonTabs>
      {/*-- 标签栏 --*/}
      <IonTabBar slot="bottom">
        <IonTabButton tab="account">
          <IonIcon icon={person} />
        </IonTabButton>
        <IonTabButton tab="contact">
          <IonIcon icon={call} />
        </IonTabButton>
        <IonTabButton tab="settings">
          <IonIcon icon={settings} />
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
      <ion-tab-button tab="account">
        <ion-icon :icon="person"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="contact">
        <ion-icon :icon="call"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="settings">
        <ion-icon :icon="settings"></ion-icon>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script setup lang="ts">
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue';
import { call, person, settings } from 'ionicons/icons';
</script>
```

</TabItem>

</Tabs>

## 标签按钮中的徽章

可以在标签按钮内添加徽章，通常用于指示通知或高亮显示与该元素相关的附加项目。

:::info
空徽章仅适用于 `md` 模式。
:::

import InsideTabBar from '@site/static/usage/v8/badge/inside-tab-bar/index.md';

<InsideTabBar />

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