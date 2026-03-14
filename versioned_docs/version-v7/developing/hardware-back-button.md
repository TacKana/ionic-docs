---
title: Hardware Back Button
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Android 设备上 Capacitor 与 Cordova 的硬件返回按键</title>
  <meta
    name="description"
    content="硬件返回按键存在于大多数 Android 设备上。阅读本文以了解有关 Ionic 应用程序中 Capacitor 和 Cordova 的硬件返回按键使用的更多信息。"
  />
</head>

硬件返回按键存在于大多数 Android 设备上。在原生应用程序中，它可用于关闭模态框、导航到上一个视图、退出应用程序等。在 Ionic 中，默认情况下，按下返回键时，当前视图将从导航栈中弹出，并显示上一个视图。如果导航栈中不存在上一个视图，则不会发生任何操作。本指南将展示如何自定义硬件返回按键的行为。

:::note
硬件返回按键指的是 Android 设备上的物理返回按键，不应与浏览器后退按钮或 `ion-back-button` 混淆。本指南中的信息仅适用于 Android 设备。
:::

## 概述

在支持的环境中，当用户按下硬件返回按键时，Ionic Framework 会触发 `ionBackButton` 事件。

监听 `ionBackButton` 事件时，你可以注册一个要执行的处理函数。此处理函数可以执行退出应用程序或打开确认对话框等操作。每个处理函数都必须分配一个优先级。默认情况下，每次按下硬件返回按键只会触发一个处理函数。优先级值用于确定应调用哪个回调函数。这很有用，因为如果你打开了模态框，你可能不希望在按下硬件返回按键时关闭模态框 _并且_ 应用程序向后导航。每次只运行一个处理函数可以让模态框关闭，但仍需要再次按下硬件返回按键才能向后导航。

在某些情况下，你可能希望触发多个处理函数。每个处理函数回调都会接收一个函数作为参数，该函数可用于告诉 Ionic 调用下一个处理函数。

## 支持情况

下表显示了硬件返回按键支持在不同环境下的差异。

| 环境      | 状态                                                                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------- |
| Capacitor | 仅在安装了 `@capacitor/app` 包时支持。                                                                                    |
| Cordova   | 支持                                                                                                                      |
| 浏览器    | 仅当 `experimentalCloseWatcher` 为 `true` 且平台支持 Close Watcher API 时支持。                                           |
| PWA       | 仅当 `experimentalCloseWatcher` 为 `true` 且平台支持 Close Watcher API 时支持。                                           |

### 浏览器或 PWA 中的硬件返回按键

通过将 IonicConfig 中的 [`experimentalCloseWatcher` 设置为 `true`](./config.md)，Ionic 实验性地支持在浏览器或 PWA 中处理硬件返回按键。启用此功能后，Ionic 将使用 [Close Watcher API](https://github.com/WICG/close-watcher) 将所有关闭请求通过 `ionBackButton` 事件传递。这包括按下硬件返回按键进行导航或按 Escape 键关闭模态框。

Chrome 从 [Chrome 120](https://developer.chrome.com/blog/new-in-chrome-120) 开始支持 Close Watcher。

为了获得完整的硬件返回按键支持，我们建议使用 Capacitor 或 Cordova。

:::note
如果 Close Watcher 不受支持或 `experimentalCloseWatcher` 为 `false`，则在浏览器或 PWA 中运行应用程序时，`ionBackButton` 事件将不会被触发。
:::

## 基本用法

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (独立版)' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
document.addEventListener('ionBackButton', (event) => {
  event.detail.register(10, () => {
    console.log('处理函数被调用！');
  });
});

```
</TabItem>
<TabItem value="angular">

```tsx
import { Platform } from '@ionic/angular';

...

constructor(private platform: Platform) {
  this.platform.backButton.subscribeWithPriority(10, () => {
    console.log('处理函数被调用！');
  });
}

```
</TabItem>
<TabItem value="angular-standalone">

```tsx
import { Platform } from '@ionic/angular/standalone';

...

constructor(private platform: Platform) {
  this.platform.backButton.subscribeWithPriority(10, () => {
    console.log('处理函数被调用！');
  });
}

```
</TabItem>
<TabItem value="react">

```tsx
document.addEventListener('ionBackButton', (event) => {
  event.detail.register(10, () => {
    console.log('处理函数被调用！');
  });
});
```
</TabItem>
<TabItem value="vue">

```tsx
import { useBackButton } from '@ionic/vue';

...

useBackButton(10, () => {
  console.log('处理函数被调用！');
});
```
</TabItem>
</Tabs>
````

在此示例中，我们注册了一个处理函数，当按下硬件返回按键时会被调用。我们将其优先级设置为 10，并且没有向框架指示我们希望调用下一个处理函数。因此，优先级小于 10 的任何处理函数都不会被调用。优先级大于 10 的处理函数将首先被调用。

如果存在具有相同优先级值的处理函数，则最后注册的处理函数将被调用。有关更多信息，请参阅[具有相同优先级的处理函数](#handlers-with-the-same-priorities)。

## 调用多个处理函数

每个硬件返回按键回调都有一个 `processNextHandler` 参数。调用此函数允许你继续调用硬件返回按键处理函数。

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (独立版)' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
document.addEventListener('ionBackButton', (event) => {
  event.detail.register(5, () => {
    console.log('另一个处理函数被调用！');
  });

  event.detail.register(10, (processNextHandler) => {
    console.log('处理函数被调用！');

    processNextHandler();
  });
});

```
</TabItem>
<TabItem value="angular">

```tsx
import { Platform } from '@ionic/angular';

...

constructor(private platform: Platform) {
  this.platform.backButton.subscribeWithPriority(5, () => {
    console.log('另一个处理函数被调用！');
  });

  this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
    console.log('处理函数被调用！');

    processNextHandler();
  });
}

```
</TabItem>
<TabItem value="angular-standalone">

```tsx
import { Platform } from '@ionic/angular/standalone';

...

constructor(private platform: Platform) {
  this.platform.backButton.subscribeWithPriority(5, () => {
    console.log('另一个处理函数被调用！');
  });

  this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
    console.log('处理函数被调用！');

    processNextHandler();
  });
}

```
</TabItem>
<TabItem value="react">

```tsx
document.addEventListener('ionBackButton', (event) => {
  event.detail.register(5, () => {
    console.log('另一个处理函数被调用！');
  });

  event.detail.register(10, (processNextHandler) => {
    console.log('处理函数被调用！');

    processNextHandler();
  });
});
```
</TabItem>
<TabItem value="vue">

```tsx
import { useBackButton } from '@ionic/vue';

...

useBackButton(5, () => {
  console.log('另一个处理函数被调用！');
});

useBackButton(10, (processNextHandler) => {
  console.log('处理函数被调用！');

  processNextHandler();
});
```
</TabItem>
</Tabs>
````

此示例展示了如何向 Ionic Framework 指示你希望触发下一个处理函数。所有回调函数都会收到一个 `processNextHandler` 函数作为参数。调用此函数将导致下一个处理函数（如果存在）被触发。

## 具有相同优先级的处理函数

在内部，Ionic Framework 使用类似于优先级队列的方式来管理硬件返回按键处理函数。优先级值最大的处理函数将首先被调用。如果存在多个具有相同优先级值的处理函数，则最后添加到该队列中的相同优先级处理函数将首先被调用。

```javascript
document.addEventListener('ionBackButton', (event) => {
  // 处理函数 A
  event.detail.register(10, (processNextHandler) => {
    console.log('处理函数 A 被调用！');

    processNextHandler();
  });

  // 处理函数 B
  event.detail.register(10, (processNextHandler) => {
    console.log('处理函数 B 被调用！');

    processNextHandler();
  });
});
```

在上面的示例中，处理函数 A 和 B 的优先级均为 10。由于处理函数 B 是最后注册的，Ionic Framework 将在调用处理函数 A 之前调用处理函数 B。

## 退出应用程序

在某些情况下，可能希望在按下硬件返回按键时退出应用程序。这可以通过结合使用 `ionBackButton` 事件与 Capacitor/Cordova 提供的方法来实现。

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (独立版)' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```tsx
import { BackButtonEvent } from '@ionic/core';
import { App } from '@capacitor/app';

...

const routerEl = document.querySelector('ion-router');
document.addEventListener('ionBackButton', (event: BackButtonEvent) => {
  event.detail.register(-1, () => {
    const path = window.location.pathname;
    if (path === routerEl.root) {
      App.exitApp();
    }
  });
});
```
</TabItem>
<TabItem value="angular">

```tsx
import { Optional } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

...

constructor(
  private platform: Platform,
  @Optional() private routerOutlet?: IonRouterOutlet
) {
  this.platform.backButton.subscribeWithPriority(-1, () => {
    if (!this.routerOutlet.canGoBack()) {
      App.exitApp();
    }
  });
}

```
</TabItem>
<TabItem value="angular-standalone">

```tsx
import { Optional } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular/standalone';
import { App } from '@capacitor/app';

...

constructor(
  private platform: Platform,
  @Optional() private routerOutlet?: IonRouterOutlet
) {
  this.platform.backButton.subscribeWithPriority(-1, () => {
    if (!this.routerOutlet.canGoBack()) {
      App.exitApp();
    }
  });
}

```
</TabItem>
<TabItem value="react">

```tsx
import { useIonRouter } from '@ionic/react';
import { App } from '@capacitor/app';

...

const ionRouter = useIonRouter();
document.addEventListener('ionBackButton', (event) => {
  event.detail.register(-1, () => {
    if (!ionRouter.canGoBack()) {
      App.exitApp();
    }
  });
});
```
</TabItem>
<TabItem value="vue">

```tsx
import { useBackButton, useIonRouter } from '@ionic/vue';
import { App } from '@capacitor/app';

...

const ionRouter = useIonRouter();
useBackButton(-1, () => {
  if (!ionRouter.canGoBack()) {
    App.exitApp();
  }
});
```
</TabItem>
</Tabs>
````

此示例展示了当用户按下硬件返回按键且导航栈中无内容时，应用程序将退出。也可以在退出应用程序前显示确认对话框。

建议在退出应用程序前检查用户是否在根页面。开发者可以在 Ionic Angular 中使用 `IonRouterOutlet` 的 `canGoBack` 方法，在 Ionic React 和 Ionic Vue 中使用 `IonRouter`。

## 内部框架处理函数

下表列出了 Ionic Framework 使用的所有内部硬件返回按键事件处理函数。`Propagates` 列注明了该特定处理函数是否告诉 Ionic Framework 调用下一个返回按键处理函数。

| 处理函数   | 优先级 | 是否传播 | 描述                                                                                                                     |
| ---------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| Overlays   | 100    | 否       | 适用于覆盖组件 `ion-action-sheet`、`ion-alert`、`ion-loading`、`ion-modal`、`ion-popover` 和 `ion-picker`。               |
| Menu       | 99     | 否       | 适用于 `ion-menu`。                                                                                                       |
| Navigation | 0      | 是       | 适用于路由导航（例如 Angular Routing）。                                                                                   |