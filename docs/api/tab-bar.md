---
title: "ion-tab-bar"
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
  <title>ion-tab-bar：具有 CSS 自定义属性的选项卡栏组件</title>
  <meta name="description" content="选项卡栏组件包含一组选项卡按钮，并且必须在 tabs 内部提供选项卡栏以进行通信。阅读更多关于用法和 CSS 自定义属性的信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


选项卡栏是一个 UI 组件，包含一组[选项卡按钮](tab-button.md)。必须在 [tabs](tabs.md) 内部提供选项卡栏，以便与每个[选项卡](tab.md)进行通信。




## 用法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-tabs>
  <!-- 选项卡栏 -->
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
  <!-- 选项卡视图 -->
  <ion-tab tab="account"></ion-tab>
  <ion-tab tab="contact"></ion-tab>
  <ion-tab tab="settings"></ion-tab>

  <!-- 选项卡栏 -->
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
      {/*-- 选项卡栏 --*/}
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
    <!-- 选项卡栏 -->
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

## 选项卡按钮中的徽章

可以在选项卡按钮内添加徽章，通常用于指示通知或突出显示与元素关联的其他项目。

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
