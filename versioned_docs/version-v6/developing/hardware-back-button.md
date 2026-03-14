---
title: Hardware Back Button
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Android 设备上的 Capacitor 与 Cordova 硬件返回按钮</title>
  <meta
    name="description"
    content="大多数 Android 设备都配有硬件返回按钮。阅读本文以了解更多关于在 Ionic 应用程序中，Capacitor 和 Cordova 对硬件返回按钮的使用。"
  />
</head>

大多数 Android 设备都配有硬件返回按钮。在原生应用中，它可以用来关闭模态框、返回上一个视图、退出应用等。在 Ionic 中，默认情况下，按下返回按钮会将当前视图从导航栈中弹出，并显示上一个视图。如果导航栈中没有上一个视图，则不会发生任何操作。本指南将展示如何自定义硬件返回按钮的行为。

:::note
硬件返回按钮指的是 Android 设备上的物理返回按钮，不应与浏览器返回按钮或 `ion-back-button` 混淆。本指南中的信息仅适用于 Android 设备。
:::

## Capacitor 与 Cordova 中的硬件返回按钮

:::note
在 Capacitor 应用中使用硬件返回按钮必须先安装 `@capacitor/app` 包。
:::

当应用在 Capacitor 或 Cordova 环境中运行时，Ionic Framework 会在用户按下硬件返回按钮时触发 `ionBackButton` 事件。

监听 `ionBackButton` 事件时，你可以注册一个将被执行的处理程序。此处理程序可以执行诸如退出应用或打开确认对话框等操作。每个处理程序都必须分配一个优先级。默认情况下，每次按下硬件返回按钮只会触发一个处理程序。优先级值用于确定应调用哪个回调。这非常有用，因为如果你打开了一个模态框，你可能不希望按下硬件返回按钮时模态框关闭 _同时_ 应用还返回上一页。一次只运行一个处理程序，可以确保模态框关闭，但仍需再次按下硬件返回按钮才能返回上一页。

在某些情况下，你可能希望触发多个处理程序。每个处理程序回调都会传入一个函数作为参数，该函数可用于告诉框架调用下一个处理程序。

## 浏览器中的硬件返回按钮

在移动浏览器或 PWA 中运行应用时，硬件返回按钮的自定义功能将受到限制。这是因为 Capacitor 和 Cordova 提供了普通 Web 浏览器中不具备的额外功能。例如，通过硬件返回按钮关闭覆盖层和菜单等功能，目前在移动浏览器中运行应用时暂不支持。这些是已知的限制，目前没有直接的解决方案。

要获得完整的硬件返回按钮支持，我们建议使用 Capacitor 或 Cordova。

:::note
在浏览器或 PWA 中运行应用时，`ionBackButton` 事件不会被触发。
:::

## 基本用法

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(10, () => {
    console.log('Handler was called!');
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
    console.log('Handler was called!');
  });
}

```
</TabItem>
<TabItem value="react">

```tsx
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(10, () => {
    console.log('Handler was called!');
  });
});
```
</TabItem>
<TabItem value="vue">

```tsx
import { useBackButton } from '@ionic/vue';

...

export default {
  setup() {
    useBackButton(10, () => {
      console.log('Handler was called!');
    });
  }
}
```
</TabItem>
</Tabs>
````

在这个例子中，我们注册了一个处理程序，当按下硬件返回按钮时将被调用。我们将优先级设置为 10，并且没有告知框架我们希望调用下一个处理程序。因此，优先级低于 10 的任何处理程序都不会被调用。优先级高于 10 的处理程序将首先被调用。

如果有多个处理程序具有相同的优先级值，那么 _最后_ 注册的处理程序将被调用。更多信息请参阅[具有相同优先级的处理程序](#handlers-with-the-same-priorities)。

## 调用多个处理程序

每个硬件返回按钮回调都有一个 `processNextHandler` 参数。调用此函数允许你继续调用硬件返回按钮处理程序。

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(5, () => {
    console.log('Another handler was called!');
  });

  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler was called!');

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
    console.log('Another handler was called!');
  });

  this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
    console.log('Handler was called!');

    processNextHandler();
  });
}

```
</TabItem>
<TabItem value="react">

```tsx
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(5, () => {
    console.log('Another handler was called!');
  });

  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler was called!');

    processNextHandler();
  });
});
```
</TabItem>
<TabItem value="vue">

```tsx
import { useBackButton } from '@ionic/vue';

...

export default {
  setup() {
    useBackButton(5, () => {
      console.log('Another handler was called!');
    });

    useBackButton(10, (processNextHandler) => {
      console.log('Handler was called!');

      processNextHandler();
    });
  }
}
```
</TabItem>
</Tabs>
````

这个例子展示了如何告知 Ionic Framework 你希望触发下一个处理程序。所有回调都提供了一个 `processNextHandler` 函数作为参数。调用此函数将导致下一个处理程序（如果存在）被触发。

## 具有相同优先级的处理程序

在内部，Ionic Framework 使用类似于优先级队列的机制来管理硬件返回按钮处理程序。优先级值最大的处理程序将首先被调用。如果有多个处理程序具有相同的优先级值，那么 _最后_ 添加到该队列的相同优先级的处理程序将首先被调用。

```javascript
document.addEventListener('ionBackButton', (ev) => {
  // 处理程序 A
  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler A was called!');

    processNextHandler();
  });

  // 处理程序 B
  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler B was called!');

    processNextHandler();
  });
});
```

在上面的例子中，处理程序 A 和 B 的优先级都是 10。由于处理程序 B 最后注册，Ionic Framework 将先调用处理程序 B，再调用处理程序 A。

## 退出应用

在某些场景下，可能希望在按下硬件返回按钮时退出应用。这可以通过结合使用 `ionBackButton` 事件以及 Capacitor/Cordova 提供的方法来实现。

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
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
document.addEventListener('ionBackButton', (ev: BackButtonEvent) => {
  ev.detail.register(-1, () => {
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
<TabItem value="react">

```tsx
import { useIonRouter } from '@ionic/react';
import { App } from '@capacitor/app';

...

const ionRouter = useIonRouter();
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(-1, () => {
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

export default {
  setup() {
    const ionRouter = useIonRouter();
    useBackButton(-1, () => {
      if (!ionRouter.canGoBack()) {
        App.exitApp();
      }
    });
  }
}
```
</TabItem>
</Tabs>
````

这个例子展示了当用户按下硬件返回按钮且导航栈中已无内容时，应用程序将退出。也可以在退出应用前显示一个确认对话框。

建议在退出应用程序之前检查用户是否在根页面。开发者可以在 Ionic Angular 中使用 `IonRouterOutlet` 的 `canGoBack` 方法，在 Ionic React 和 Ionic Vue 中使用 `IonRouter`。

## 框架内部处理程序

下表列出了 Ionic Framework 使用的所有内部硬件返回按钮事件处理程序。`Propagates` 列注明了该特定处理程序是否告知 Ionic Framework 调用下一个返回按钮处理程序。

| 处理程序 | 优先级 | 是否传播 | 描述                                                                                                                 |
| -------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------- |
| 覆盖层   | 100    | 否       | 适用于覆盖层组件 `ion-action-sheet`、`ion-alert`、`ion-loading`、`ion-modal`、`ion-popover` 和 `ion-picker`。        |
| 菜单     | 99     | 否       | 适用于 `ion-menu`。                                                                                                  |
| 导航     | 0      | 是       | 适用于路由导航（例如 Angular Routing）。                                                                             |