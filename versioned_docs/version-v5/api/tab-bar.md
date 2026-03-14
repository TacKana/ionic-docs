---
sidebar_label: 'ion-tab-bar'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/tab-bar/props.md';
import Events from '@ionic-internal/component-api/v5/tab-bar/events.md';
import Methods from '@ionic-internal/component-api/v5/tab-bar/methods.md';
import Parts from '@ionic-internal/component-api/v5/tab-bar/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/tab-bar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/tab-bar/slots.md';

# ion-tab-bar

标签栏（tab bar）是一个包含一组[标签按钮](tab-button.md)的用户界面组件。标签栏必须放置在[tabs](tabs.md)组件内部，以便与每个[标签页](tab.md)进行通信。

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
  <!-- 标签页视图 -->
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

<script>
  import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue';
  import { call, person, settings } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonIcon, IonTabBar, IonTabButton, IonTabs },
    setup() {
      return { call, person, settings };
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