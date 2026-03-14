---
title: 路由组件
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v8/route/props.md';
import Events from '@ionic-internal/component-api/v8/route/events.md';
import Methods from '@ionic-internal/component-api/v8/route/methods.md';
import Parts from '@ionic-internal/component-api/v8/route/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/route/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/route/slots.md';

<head>
  <title>ion-route: Ionic 框架应用的路由组件 API</title>
  <meta name="description" content="ion-route 组件接收一个组件，当浏览器 URL 与 url 属性匹配时渲染该组件。了解更多关于 Ionic 应用 API 路由组件的信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


路由组件接收一个组件，当浏览器 URL 与 url 属性匹配时渲染该组件。

:::note
 注意：此组件仅适用于原生 JavaScript 和 Stencil 项目。对于 Angular 项目，请使用 [`ion-router-outlet`](router-outlet.md) 和 Angular 路由器。
:::

## 导航钩子

导航钩子可用于执行任务或充当导航守卫。通过为每个 `ion-route` 的 `beforeEnter` 和 `beforeLeave` 属性提供函数来使用钩子。返回 `true` 允许导航继续，而返回 `false` 则取消导航。返回 `NavigationHookOptions` 类型的对象允许你将导航重定向到另一个页面。

## 接口

```typescript
interface NavigationHookOptions {
  /**
   * 用于重定向导航的有效路径。
   */
  redirect: string;
}
```

## 用法

<Tabs groupId="framework" defaultValue="javascript" values={[{ value: 'javascript', label: 'JavaScript' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

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
  const isLoggedIn = await UserData.isLoggedIn(); // 请替换为实际的登录验证
  
  if (isLoggedIn) {
    return true;
  } else {
    return { redirect: '/login' }; // 如果用户未登录，他们将被重定向到 /login 页面
  }
}

const hasUnsavedDataGuard = async () => {
  const hasUnsavedData = await checkData(); // 请替换为实际的验证
  
  if (hasUnsavedData) {
    return await confirmDiscardChanges();
  } else {
    return true;
  }
}

const confirmDiscardChanges = async () => {
  const alert = document.createElement('ion-alert');
  alert.header = '放弃未保存的更改？';
  alert.message = '确定要离开吗？任何未保存的更改都将丢失。';
  alert.buttons = [
    {
      text: '取消',
      role: 'Cancel',
    },
    {
      text: '放弃',
      role: 'destructive',
    }
  ];
  
  document.body.appendChild(alert);
  
  await alert.present();
  
  const { role } = await alert.onDidDismiss();
  
  return (role === 'Cancel') ? false : true;
}
```

</TabItem>

<TabItem value="stencil">

```typescript
import { Component, h } from '@stencil/core';
import { alertController } from '@ionic/core';

@Component({
  tag: 'router-example',
  styleUrl: 'router-example.css'
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
    )
  }
}

const isLoggedInGuard = async () => {
  const isLoggedIn = await UserData.isLoggedIn(); // 请替换为实际的登录验证
  
  if (isLoggedIn) {
    return true;
  } else {
    return { redirect: '/login' }; // 如果用户未登录，他们将被重定向到 /login 页面
  }
}

const hasUnsavedDataGuard = async () => {
  const hasUnsavedData = await checkData(); // 请替换为实际的验证
  
  if (hasUnsavedData) {
    return await confirmDiscardChanges();
  } else {
    return true;
  }
}

const confirmDiscardChanges = async () => {
  const alert = await alertController.create({
    header: '放弃未保存的更改？',
    message: '确定要离开吗？任何未保存的更改都将丢失。',
    buttons: [
      {
        text: '取消',
        role: 'Cancel',
      },
      {
        text: '放弃',
        role: 'destructive',
      }
    ]
  });
  
  await alert.present();
  
  const { role } = await alert.onDidDismiss();
  
  return (role === 'Cancel') ? false : true;
}
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
  import { alertController } from '@ionic/vue';

  const isLoggedInGuard = async () => {
    const isLoggedIn = await UserData.isLoggedIn(); // 请替换为实际的登录验证
    
    if (isLoggedIn) {
      return true;
    } else {
      return { redirect: '/login' }; // 如果用户未登录，他们将被重定向到 /login 页面
    }
  }
  
  const hasUnsavedDataGuard = async () => {
    const hasUnsavedData = await checkData(); // 请替换为实际的验证
    
    if (hasUnsavedData) {
      return await confirmDiscardChanges();
    } else {
      return true;
    }
  }
  
  const confirmDiscardChanges = async () => {
    const alert = await alertController.create({
      header: '放弃未保存的更改？',
      message: '确定要离开吗？任何未保存的更改都将丢失。',
      buttons: [
        {
          text: '取消',
          role: 'Cancel',
        },
        {
          text: '放弃',
          role: 'destructive',
        }
      ]
    });
    
    await alert.present();
    
    const { role } = await alert.onDidDismiss();
    
    return (role === 'Cancel') ? false : true;
  }
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