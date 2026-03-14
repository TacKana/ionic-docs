---
sidebar_label: 'ion-backdrop'
demoUrl: '/docs/demos/api/backdrop/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/backdrop/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/backdrop/props.md';
import Events from '@ionic-internal/component-api/v5/backdrop/events.md';
import Methods from '@ionic-internal/component-api/v5/backdrop/methods.md';
import Parts from '@ionic-internal/component-api/v5/backdrop/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/backdrop/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/backdrop/slots.md';

# ion-backdrop

背景幕（Backdrop）是全屏组件，用于覆盖在其他组件之上。它们通常位于从其他内容上方滑入的组件后方，可用于关闭该组件。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认背景幕 -->
<ion-backdrop></ion-backdrop>

<!-- 不可点击的背景幕 -->
<ion-backdrop tappable="false"></ion-backdrop>

<!-- 不可见的背景幕 -->
<ion-backdrop visible="false"></ion-backdrop>

<!-- 允许事件传播的背景幕 -->
<ion-backdrop stopPropagation="false"></ion-backdrop>

<!-- 动态设置属性的背景幕 -->
<ion-backdrop [tappable]="enableBackdropDismiss" [visible]="showBackdrop" [stopPropagation]="shouldPropagate">
</ion-backdrop>
```

```tsx
import { Component } from '@angular/core';

@Component({
  selector: 'backdrop-example',
  templateUrl: 'backdrop-example.html',
  styleUrls: ['./backdrop-example.css'],
})
export class BackdropExample {
  enableBackdropDismiss = false;
  showBackdrop = false;
  shouldPropagate = false;
}
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认背景幕 -->
<ion-backdrop></ion-backdrop>

<!-- 不可点击的背景幕 -->
<ion-backdrop tappable="false"></ion-backdrop>

<!-- 不可见的背景幕 -->
<ion-backdrop visible="false"></ion-backdrop>

<!-- 允许事件传播的背景幕 -->
<ion-backdrop stop-propagation="false"></ion-backdrop>

<!-- 动态设置属性的背景幕 -->
<ion-backdrop id="customBackdrop"></ion-backdrop>
```

```javascript
var backdrop = document.getElementById('customBackdrop');
backdrop.visible = false;
backdrop.tappable = false;
backdrop.stopPropagation = false;
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonBackdrop, IonContent } from '@ionic/react';

export const BackdropExample: React.FC = () => (
  <IonContent>
    {/*-- 默认背景幕 --*/}
    <IonBackdrop />

    {/*-- 不可点击的背景幕 --*/}
    <IonBackdrop tappable={false} />

    {/*-- 不可见的背景幕 --*/}
    <IonBackdrop visible={false} />

    {/*-- 允许事件传播的背景幕 --*/}
    <IonBackdrop stopPropagation={false} />

    <IonBackdrop tappable={true} visible={true} stopPropagation={true} />
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'backdrop-example',
  styleUrl: 'backdrop-example.css',
})
export class BackdropExample {
  render() {
    const enableBackdropDismiss = false;
    const showBackdrop = false;
    const shouldPropagate = false;

    return [
      // 默认背景幕
      <ion-backdrop></ion-backdrop>,

      // 不可点击的背景幕
      <ion-backdrop tappable={false}></ion-backdrop>,

      // 不可见的背景幕
      <ion-backdrop visible={false}></ion-backdrop>,

      // 允许事件传播的背景幕
      <ion-backdrop stopPropagation={false}></ion-backdrop>,

      // 动态设置属性的背景幕
      <ion-backdrop
        tappable={enableBackdropDismiss}
        visible={showBackdrop}
        stopPropagation={shouldPropagate}
      ></ion-backdrop>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认背景幕 -->
  <ion-backdrop></ion-backdrop>

  <!-- 不可点击的背景幕 -->
  <ion-backdrop tappable="false"></ion-backdrop>

  <!-- 不可见的背景幕 -->
  <ion-backdrop visible="false"></ion-backdrop>

  <!-- 允许事件传播的背景幕 -->
  <ion-backdrop stop-propagation="false"></ion-backdrop>

  <!-- 动态设置属性的背景幕 -->
  <ion-backdrop :tappable="enableBackdropDismiss" :visible="showBackdrop" :stop-propagation="shouldPropagate">
  </ion-backdrop>
</template>

<script>
  import { IonBackdrop } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonBackdrop },
    setup() {
      return {
        enableBackdropDismiss: true,
        showBackdrop: true,
        shouldPropagate: true,
      };
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