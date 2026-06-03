---
title: 硬件返回按钮
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Android 设备上 Capacitor 和 Cordova 的硬件返回按钮</title>
  <meta
    name="description"
    content="硬件返回按钮出现在大多数 Android 设备上。阅读了解更多关于在 Ionic 应用的 Capacitor 和 Cordova 中使用硬件返回按钮的信息。"
  />
</head>

硬件返回按钮出现在大多数 Android 设备上。在原生应用中，它可用于关闭模态框、导航到上一视图、退出应用等。默认情况下，在 Ionic 中，当按下返回按钮时，当前视图将从导航栈中弹出，并显示上一视图。如果导航栈中没有上一视图，则不会发生任何操作。本指南将介绍如何自定义硬件返回按钮的行为。

:::note
硬件返回按钮指的是 Android 设备上的物理返回按钮，不应与浏览器返回按钮或 `ion-back-button` 混淆。本指南中的信息仅适用于 Android 设备。
:::

## 概述

当用户在支持的环境中按下硬件返回按钮时，Ionic Framework 会触发一个 `ionBackButton` 事件。

在监听 `ionBackButton` 事件时，您可以注册一个要触发的处理函数。该处理函数可以执行诸如退出应用或打开确认对话框等操作。每个处理函数必须分配一个优先级。默认情况下，每次按下硬件返回按钮只触发一个处理函数。优先级值用于确定应该调用哪个回调函数。这很有用，因为如果您打开了一个模态框，您可能不希望按下硬件返回按钮时既关闭模态框_又_向后导航。一次只运行一个处理函数允许模态框关闭，但仍需要再次按下硬件返回按钮才能向后导航。

有些情况下您可能希望触发多个处理函数。每个处理函数回调都传递一个函数作为参数，该函数可用于告诉 Ionic 调用下一个处理函数。

## 支持情况

下表显示了不同环境下硬件返回按钮的支持情况。

| 环境        | 状态                                                                                               |
| ----------- | -------------------------------------------------------------------------------------------------- |
| Capacitor   | 仅当安装了 `@capacitor/app` 包时支持。                                                             |
| Cordova     | 支持                                                                                               |
| 浏览器      | 仅当 `experimentalCloseWatcher` 为 `true` 且平台支持 Close Watcher API 时支持。                    |
| PWA         | 仅当 `experimentalCloseWatcher` 为 `true` 且平台支持 Close Watcher API 时支持。                    |

### 浏览器或 PWA 中的硬件返回按钮

Ionic 通过将 [`experimentalCloseWatcher: true` 设置在 IonicConfig](./config.md) 中，实验性地支持在浏览器或 PWA 中处理硬件返回按钮。启用此功能后，Ionic 将使用 [Close Watcher API](https://github.com/WICG/close-watcher) 通过 `ionBackButton` 事件传递所有关闭请求。这包括按下硬件返回按钮进行导航或按 Escape 键关闭模态框。

Chrome 从 [Chrome 120](https://developer.chrome.com/blog/new-in-chrome-120) 开始支持 Close Watcher。

要获得完整的硬件返回按钮支持，我们建议使用 Capacitor 或 Cordova。

:::note
如果 Close Watcher 不受支持或 `experimentalCloseWatcher` 为 `false`，则在浏览器中或作为 PWA 运行应用时不会触发 `ionBackButton` 事件。
:::

## 基本用法

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular（独立版）' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
document.addEventListener('ionBackButton', (event) => {
  event.detail.register(10, () => {
    console.log('处理函数被调用了！');
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
    console.log('处理函数被调用了！');
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
    console.log('处理函数被调用了！');
  });
}

```
</TabItem>
<TabItem value="react">

```tsx
document.addEventListener('ionBackButton', (event) => {
  event.detail.register(10, () => {
    console.log('处理函数被调用了！');
  });
});
```
</TabItem>
<TabItem value="vue">

```tsx
import { useBackButton } from '@ionic/vue';

...

useBackButton(10, () => {
  console.log('处理函数被调用了！');
});
```
</TabItem>
</Tabs>
````

在这个示例中，我们注册了一个在按下硬件返回按钮时被调用的处理函数。我们将优先级设置为 10，并且没有指示框架我们希望调用下一个处理函数。因此，任何优先级低于 10 的处理函数都不会被调用。优先级高于 10 的处理函数将首先被调用。

如果有多个处理函数具有相同的优先级值，则最后注册的处理函数将被调用。有关更多信息，请参阅[具有相同优先级的处理函数](#具有相同优先级的处理函数)。

## 调用多个处理函数

每个硬件返回按钮回调都有一个 `processNextHandler` 参数。调用此函数允许您继续调用硬件返回按钮处理函数。

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular（独立版）' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
document.addEventListener('ionBackButton', (event) => {
  event.detail.register(5, () => {
    console.log('另一个处理函数被调用了！');
  });

  event.detail.register(10, (processNextHandler) => {
    console.log('处理函数被调用了！');

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
    console.log('另一个处理函数被调用了！');
  });

  this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
    console.log('处理函数被调用了！');

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
    console.log('另一个处理函数被调用了！');
  });

  this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
    console.log('处理函数被调用了！');

    processNextHandler();
  });
}

```
</TabItem>
<TabItem value="react">

```tsx
document.addEventListener('ionBackButton', (event) => {
  event.detail.register(5, () => {
    console.log('另一个处理函数被调用了！');
  });

  event.detail.register(10, (processNextHandler) => {
    console.log('处理函数被调用了！');

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
  console.log('另一个处理函数被调用了！');
});

useBackButton(10, (processNextHandler) => {
  console.log('处理函数被调用了！');

  processNextHandler();
});
```
</TabItem>
</Tabs>
````

此示例展示了如何向 Ionic Framework 指示您希望触发下一个处理函数。所有回调都提供了一个 `processNextHandler` 函数作为参数。调用此函数将导致下一个处理函数（如果存在）被触发。

## 具有相同优先级的处理函数

在内部，Ionic Framework 使用类似于优先级队列的机制来管理硬件返回按钮处理函数。优先级值最大的处理函数将首先被调用。如果有多个处理函数具有相同的优先级值，则添加到该队列中的具有相同优先级的_最后一个_处理函数将是被调用的第一个处理函数。

```javascript
document.addEventListener('ionBackButton', (event) => {
  // 处理函数 A
  event.detail.register(10, (processNextHandler) => {
    console.log('处理函数 A 被调用了！');

    processNextHandler();
  });

  // 处理函数 B
  event.detail.register(10, (processNextHandler) => {
    console.log('处理函数 B 被调用了！');

    processNextHandler();
  });
});
```

在上面的示例中，处理函数 A 和 B 的优先级都是 10。由于处理函数 B 是最后注册的，Ionic Framework 将在调用处理函数 A 之前先调用处理函数 B。

## 退出应用

在某些情况下，可能希望在按下硬件返回按钮时退出应用。这可以通过结合使用 `ionBackButton` 事件和 Capacitor/Cordova 提供的方法来实现。

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular（独立版）' },
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

此示例展示了当用户按下硬件返回按钮且导航栈中没有剩余内容时，应用退出。也可以在选择退出应用之前显示一个确认对话框。

建议在退出应用之前检查用户是否在根页面上。开发者可以在 Ionic Angular 中使用 `IonRouterOutlet` 的 `canGoBack` 方法，在 Ionic React 和 Ionic Vue 中使用 `IonRouter` 的 `canGoBack` 方法。

## 内部框架处理函数

下表列出了 Ionic Framework 使用的所有内部硬件返回按钮事件处理函数。`Propagates` 列注明了该特定处理函数是否告诉 Ionic Framework 调用下一个返回按钮处理函数。

| 处理函数     | 优先级 | 是否传播 | 描述                                                                                                                |
| ------------ | ------ | -------- | ------------------------------------------------------------------------------------------------------------------- |
| 覆盖层       | 100    | 否       | 适用于覆盖层组件 `ion-action-sheet`、`ion-alert`、`ion-loading`、`ion-modal`、`ion-popover` 和 `ion-picker`。      |
| 菜单         | 99     | 否       | 适用于 `ion-menu`。                                                                                                 |
| 导航         | 0      | 是       | 适用于路由导航（即 Angular 路由）。                                                                                 |
