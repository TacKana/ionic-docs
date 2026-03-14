---
sidebar_label: 'ion-route'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/route/props.md';
import Events from '@ionic-internal/component-api/v5/route/events.md';
import Methods from '@ionic-internal/component-api/v5/route/methods.md';
import Parts from '@ionic-internal/component-api/v5/route/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/route/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/route/slots.md';

# ion-route

路由组件会接收一个组件，并在浏览器 URL 与 url 属性匹配时渲染该组件。

> 注意：此组件仅适用于原生 JavaScript 和 Stencil 项目。对于 Angular 项目，请使用 [`ion-router-outlet`](router-outlet.md) 和 Angular 路由器。

## 导航钩子

导航钩子可用于执行任务或充当导航守卫。通过为每个 `ion-route` 的 `beforeEnter` 和 `beforeLeave` 属性提供函数来使用钩子。返回 `true` 允许导航继续进行，返回 `false` 则取消导航。返回 `NavigationHookOptions` 类型的对象可以将导航重定向到另一个页面。

## 接口

```tsx
interface NavigationHookOptions {
  /**
   * 用于重定向导航的有效路径。
   */
  redirect: string;
}
```

## 用法

<Tabs groupId="framework" defaultValue="javascript" values={[{ value: 'javascript', label: 'JAVASCRIPT' }, { value: 'stencil', label: 'STENCIL' }, { value: 'vue', label: 'VUE' }]}>

<TabItem value="javascript">

```html
<ion-router>
  <ion-route url="/home" component="page-home"></ion-route>
  <ion-route url="/dashboard" component="page-dashboard"></ion-route>
  <ion-route url="/new-message" component="page-new-message"></ion-route>
  <ion-route url="/login" component="page-login"></ion-route>
</ion-router>
```

```javascript
const dashboardPage = document.querySelector('ion-route[url="/dashboard"]');
dashboardPage.beforeEnter = isLoggedInGuard;

const newMessagePage = document.querySelector('ion-route[url="/dashboard"]');
newMessagePage.beforeLeave = hasUnsavedDataGuard;

const isLoggedInGuard = async () => {
  const isLoggedIn = await UserData.isLoggedIn(); // 请将此替换为实际的登录验证逻辑

  if (isLoggedIn) {
    return true;
  } else {
    return { redirect: '/login' }; // 如果用户未登录，他们将被重定向到 /login 页面
  }
};

const hasUnsavedDataGuard = async () => {
  const hasUnsavedData = await checkData(); // 请将此替换为实际的验证逻辑

  if (hasUnsavedData) {
    return await confirmDiscardChanges();
  } else {
    return true;
  }
};

const confirmDiscardChanges = async () => {
  const route = document.createElement('ion-route');
  route.header = 'Discard Unsaved Changes?';
  route.message = 'Are you sure you want to leave? Any unsaved changed will be lost.';
  route.buttons = [
    {
      text: 'Cancel',
      role: 'Cancel',
    },
    {
      text: 'Discard',
      role: 'destructive',
    },
  ];

  document.body.appendChild(route);

  await route.present();

  const { role } = await route.onDidDismiss();

  return role === 'Cancel' ? false : true;
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';
import { routeController } from '@ionic/core';

@Component({
  tag: 'router-example',
  styleUrl: 'router-example.css',
})
export class RouterExample {
  render() {
    return (
      <ion-router>
        <ion-route url="/home" component="page-home"></ion-route>
        <ion-route url="/dashboard" component="page-dashboard" beforeEnter={isLoggedInGuard}></ion-route>
        <ion-route url="/new-message" component="page-new-message" beforeLeave={hasUnsavedDataGuard}></ion-route>
        <ion-route url="/login" component="page-login"></ion-route>
      </ion-router>
    );
  }
}

const isLoggedInGuard = async () => {
  const isLoggedIn = await UserData.isLoggedIn(); // 请将此替换为实际的登录验证逻辑

  if (isLoggedIn) {
    return true;
  } else {
    return { redirect: '/login' }; // 如果用户未登录，他们将被重定向到 /login 页面
  }
};

const hasUnsavedDataGuard = async () => {
  const hasUnsavedData = await checkData(); // 请将此替换为实际的验证逻辑

  if (hasUnsavedData) {
    return await confirmDiscardChanges();
  } else {
    return true;
  }
};

const confirmDiscardChanges = async () => {
  const route = await routeController.create({
    header: 'Discard Unsaved Changes?',
    message: 'Are you sure you want to leave? Any unsaved changed will be lost.',
    buttons: [
      {
        text: 'Cancel',
        role: 'Cancel',
      },
      {
        text: 'Discard',
        role: 'destructive',
      },
    ],
  });

  await route.present();

  const { role } = await route.onDidDismiss();

  return role === 'Cancel' ? false : true;
};
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-router>
    <ion-route url="/home" component="page-home"></ion-route>
    <ion-route url="/dashboard" component="page-dashboard" :beforeEnter="isLoggedInGuard"></ion-route>
    <ion-route url="/new-message" component="page-new-message" :beforeLeave="hasUnsavedDataGuard"></ion-route>
    <ion-route url="/login" component="page-login"></ion-route>
  </ion-router>
</template>

<script>
  import { routeController } from '@ionic/vue';

  const isLoggedInGuard = async () => {
    const isLoggedIn = await UserData.isLoggedIn(); // 请将此替换为实际的登录验证逻辑

    if (isLoggedIn) {
      return true;
    } else {
      return { redirect: '/login' }; // 如果用户未登录，他们将被重定向到 /login 页面
    }
  };

  const hasUnsavedDataGuard = async () => {
    const hasUnsavedData = await checkData(); // 请将此替换为实际的验证逻辑

    if (hasUnsavedData) {
      return await confirmDiscardChanges();
    } else {
      return true;
    }
  };

  const confirmDiscardChanges = async () => {
    const route = await routeController.create({
      header: 'Discard Unsaved Changes?',
      message: 'Are you sure you want to leave? Any unsaved changed will be lost.',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
        },
        {
          text: 'Discard',
          role: 'destructive',
        },
      ],
    });

    await route.present();

    const { role } = await route.onDidDismiss();

    return role === 'Cancel' ? false : true;
  };
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