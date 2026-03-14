---
sidebar_label: 'ion-toast'
demoUrl: '/docs/demos/api/toast/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/toast/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/toast/props.md';
import Events from '@ionic-internal/component-api/v5/toast/events.md';
import Methods from '@ionic-internal/component-api/v5/toast/methods.md';
import Parts from '@ionic-internal/component-api/v5/toast/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/toast/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/toast/slots.md';

# ion-toast

Toast（轻提示）是现代应用中常用的简洁通知方式。它可用于提供操作反馈或显示系统消息。Toast 会显示在应用内容的上方，并且可以被应用关闭，以恢复用户与应用交互。

## 定位

Toast 可以定位在视口的顶部、底部或中间。可以在创建时传入位置参数。可选值有 `top`、`bottom` 和 `middle`。如果未指定位置，Toast 将默认显示在视口底部。

## 关闭

Toast 可以在指定的时间后自动关闭，只需在 Toast 选项的 `duration` 属性中传入要显示的毫秒数即可。如果添加了一个角色为 `"cancel"` 的按钮，那么点击该按钮即可关闭 Toast。要在创建后手动关闭 Toast，可以在实例上调用 `dismiss()` 方法。

## 用法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```tsx
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'toast-example',
  templateUrl: 'toast-example.html',
  styleUrls: ['./toast-example.css'],
})
export class ToastExample {
  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: '您的设置已保存。',
      duration: 2000,
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast 标题',
      message: '点击关闭',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: '收藏',
          handler: () => {
            console.log('点击了收藏');
          },
        },
        {
          text: '完成',
          role: 'cancel',
          handler: () => {
            console.log('点击了取消');
          },
        },
      ],
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss 返回的角色为', role);
  }
}
```

</TabItem>

<TabItem value="javascript">

```javascript
async function presentToast() {
  const toast = document.createElement('ion-toast');
  toast.message = '您的设置已保存。';
  toast.duration = 2000;

  document.body.appendChild(toast);
  return toast.present();
}

async function presentToastWithOptions() {
  const toast = document.createElement('ion-toast');
  toast.header = 'Toast 标题';
  toast.message = '点击关闭';
  toast.position = 'top';
  toast.buttons = [
    {
      side: 'start',
      icon: 'star',
      text: '收藏',
      handler: () => {
        console.log('点击了收藏');
      },
    },
    {
      text: '完成',
      role: 'cancel',
      handler: () => {
        console.log('点击了取消');
      },
    },
  ];

  document.body.appendChild(toast);
  await toast.present();

  const { role } = await toast.onDidDismiss();
  console.log('onDidDismiss 返回的角色为', role);
}
```

</TabItem>

<TabItem value="react">

```tsx
/* 使用 useIonToast Hook */

import React from 'react';
import { IonButton, IonContent, IonPage, useIonToast } from '@ionic/react';

const ToastExample: React.FC = () => {
  const [present, dismiss] = useIonToast();

  return (
    <IonPage>
      <IonContent>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              buttons: [{ text: '隐藏', handler: () => dismiss() }],
              message: '来自 Hook 的 Toast，点击隐藏即可关闭',
              onDidDismiss: () => console.log('已关闭'),
              onWillDismiss: () => console.log('即将关闭'),
            })
          }
        >
          显示 Toast
        </IonButton>
        <IonButton expand="block" onClick={() => present('来自 Hook 的问候', 3000)}>
          使用参数显示 Toast，3 秒后关闭
        </IonButton>
        <IonButton expand="block" onClick={dismiss}>
          隐藏 Toast
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
```

```tsx
/* 使用 IonToast 组件 */

import React, { useState } from 'react';
import { IonToast, IonContent, IonButton } from '@ionic/react';

export const ToastExample: React.FC = () => {
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);

  return (
    <IonContent>
      <IonButton onClick={() => setShowToast1(true)} expand="block">
        显示 Toast 1
      </IonButton>
      <IonButton onClick={() => setShowToast2(true)} expand="block">
        显示 Toast 2
      </IonButton>
      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="您的设置已保存。"
        duration={200}
      />

      <IonToast
        isOpen={showToast2}
        onDidDismiss={() => setShowToast2(false)}
        message="点击关闭"
        position="top"
        buttons={[
          {
            side: 'start',
            icon: 'star',
            text: '收藏',
            handler: () => {
              console.log('点击了收藏');
            },
          },
          {
            text: '完成',
            role: 'cancel',
            handler: () => {
              console.log('点击了取消');
            },
          },
        ]}
      />
    </IonContent>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

import { toastController } from '@ionic/core';

@Component({
  tag: 'toast-example',
  styleUrl: 'toast-example.css',
})
export class ToastExample {
  async presentToast() {
    const toast = await toastController.create({
      message: '您的设置已保存。',
      duration: 2000,
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await toastController.create({
      header: 'Toast 标题',
      message: '点击关闭',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: '收藏',
          handler: () => {
            console.log('点击了收藏');
          },
        },
        {
          text: '完成',
          role: 'cancel',
          handler: () => {
            console.log('点击了取消');
          },
        },
      ],
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss 返回的角色为', role);
  }

  render() {
    return [
      <ion-content>
        <ion-button onClick={() => this.presentToast()}>显示 Toast</ion-button>
        <ion-button onClick={() => this.presentToastWithOptions()}>显示 Toast：选项</ion-button>
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
    <ion-content class="ion-padding">
      <ion-button @click="openToast">打开 Toast</ion-button>
      <ion-button @click="openToastOptions">打开 Toast：选项</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonButton, IonContent, IonPage, toastController } from '@ionic/vue';

  export default {
    components: { IonButton, IonContent, IonPage },
    methods: {
      async openToast() {
        const toast = await toastController.create({
          message: '您的设置已保存。',
          duration: 2000,
        });
        return toast.present();
      },
      async openToastOptions() {
        const toast = await toastController.create({
          header: 'Toast 标题',
          message: '点击关闭',
          position: 'top',
          buttons: [
            {
              side: 'start',
              icon: 'star',
              text: '收藏',
              handler: () => {
                console.log('点击了收藏');
              },
            },
            {
              text: '完成',
              role: 'cancel',
              handler: () => {
                console.log('点击了取消');
              },
            },
          ],
        });
        await toast.present();

        const { role } = await toast.onDidDismiss();
        console.log('onDidDismiss 返回的角色为', role);
      },
    },
  };
</script>
```

开发者也可以在模板中直接使用此组件：

```html
<template>
  <ion-button @click="setOpen(true)">显示 Toast</ion-button>
  <ion-toast
    :is-open="isOpenRef"
    message="您的设置已保存。"
    :duration="2000"
    @didDismiss="setOpen(false)"
  >
  </ion-toast>
</template>

<script>
  import { IonToast, IonButton } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonToast, IonButton },
    setup() {
      const isOpenRef = ref(false);
      const setOpen = (state: boolean) => (isOpenRef.value = state);

      return { isOpenRef, setOpen };
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