---
title: 硬件返回按钮
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Android 设备上 Capacitor 和 Cordova 的硬件返回按钮</title>
  <meta
    name="description"
    content="硬件返回按钮在大多数 Android 设备上都能找到。请阅读以了解更多关于在 Ionic 应用中 Capacitor 和 Cordova 上使用硬件返回按钮的信息。"
  />
</head>

硬件返回按钮在大多数 Android 设备上都能找到。在原生应用中，它可用于关闭模态框、导航到上一个视图、退出应用等。在 Ionic 中，默认情况下，当按下返回按钮时，当前视图将从导航堆栈中弹出，并显示上一个视图。如果导航堆栈中没有上一个视图，则不会发生任何操作。本指南将介绍如何自定义硬件返回按钮的行为。

:::note
硬件返回按钮指的是 Android 设备上的物理返回按钮，不应与浏览器返回按钮或 `ion-back-button` 混淆。本指南中的信息仅适用于 Android 设备。
:::

## Capacitor 和 Cordova 中的硬件返回按钮

:::note
在 Capacitor 应用中使用硬件返回按钮需要安装 `@capacitor/app` 包。
:::

当在 Capacitor 或 Cordova 应用中运行时，当用户按下硬件返回按钮时，Ionic Framework 将触发一个 `ionBackButton` 事件。

当监听 `ionBackButton` 事件时，您可以注册一个要触发的处理程序（handler）。该处理程序可以执行诸如退出应用或打开确认对话框等操作。每个处理程序必须分配一个优先级。默认情况下，每次按下硬件返回按钮只触发一个处理程序。优先级值用于确定应调用哪个回调函数。这很有用，因为如果您打开了一个模态框，您可能不希望按下硬件返回按钮时模态框_和_应用都向后导航。一次只运行一个处理程序允许模态框关闭，但仍需要再次按下硬件返回按钮才能向后导航。

在某些情况下，您可能希望触发多个处理程序。每个处理程序回调都传递一个函数作为参数，可用于告诉框架调用下一个处理程序。

## 浏览器中的硬件返回按钮

当在移动浏览器中或作为 PWA 运行应用时，硬件返回按钮的自定义将受到限制。这是因为 Capacitor 和 Cordova 暴露了普通 Web 浏览器中未暴露的额外功能。例如，通过硬件返回按钮关闭叠加层和菜单是在移动浏览器中运行应用时目前不支持的功能。这些是已知的限制，目前没有直接的解决方案。

为了获得完整的硬件返回按钮支持，我们建议使用 Capacitor 或 Cordova。

:::note
当在浏览器中或作为 PWA 运行应用时，不会触发 `ionBackButton` 事件。
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
    console.log('处理程序被调用！');
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
    console.log('处理程序被调用！');
  });
}

```
</TabItem>
<TabItem value="react">

```tsx
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(10, () => {
    console.log('处理程序被调用！');
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
      console.log('处理程序被调用！');
    });
  }
}
```
</TabItem>
</Tabs>
````

在此示例中，我们注册了一个在按下硬件返回按钮时调用的处理程序。我们已将优先级设置为 10，并且没有向框架指示我们想要调用下一个处理程序。因此，任何优先级小于 10 的处理程序都不会被调用。优先级大于 10 的处理程序将首先被调用。

如果存在具有相同优先级值的处理程序，则_最后_注册的处理程序将被调用。有关更多信息，请参阅[具有相同优先级的处理程序](#handlers-with-the-same-priorities)。

## 调用多个处理程序

每个硬件返回按钮回调都有一个 `processNextHandler` 参数。调用此函数允许您继续调用硬件返回按钮处理程序。

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
    console.log('另一个处理程序被调用！');
  });

  ev.detail.register(10, (processNextHandler) => {
    console.log('处理程序被调用！');

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
    console.log('另一个处理程序被调用！');
  });

  this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
    console.log('处理程序被调用！');

    processNextHandler();
  });
}

```
</TabItem>
<TabItem value="react">

```tsx
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(5, () => {
    console.log('另一个处理程序被调用！');
  });

  ev.detail.register(10, (processNextHandler) => {
    console.log('处理程序被调用！');

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
      console.log('另一个处理程序被调用！');
    });

    useBackButton(10, (processNextHandler) => {
      console.log('处理程序被调用！');

      processNextHandler();
    });
  }
}
```
</TabItem>
</Tabs>
````

此示例展示了如何向 Ionic Framework 指示您希望触发下一个处理程序。所有回调都带有一个 `processNextHandler` 函数作为参数。调用此函数将导致下一个处理程序（如果存在）被触发。

## 具有相同优先级的处理程序

在内部，Ionic Framework 使用类似于优先级队列的机制来管理硬件返回按钮处理程序。优先级值最大的处理程序将首先被调用。如果存在多个具有相同优先级值的处理程序，则添加到该队列中的相同优先级的_最后_一个处理程序将是第一个被调用的处理程序。

```javascript
document.addEventListener('ionBackButton', (ev) => {
  // 处理程序 A
  ev.detail.register(10, (processNextHandler) => {
    console.log('处理程序 A 被调用！');

    processNextHandler();
  });

  // 处理程序 B
  ev.detail.register(10, (processNextHandler) => {
    console.log('处理程序 B 被调用！');

    processNextHandler();
  });
});
```

在上面的示例中，处理程序 A 和 B 的优先级都是 10。由于处理程序 B 是最后注册的，Ionic Framework 将在调用处理程序 A 之前先调用处理程序 B。

## 退出应用

在某些情况下，可能希望按下硬件返回按钮时退出应用。这可以通过结合使用 `ionBackButton` 事件和 Capacitor/Cordova 提供的方法来实现。

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

此示例展示了当用户按下硬件返回按钮且导航堆栈中没有剩余页面时，应用如何退出。也可以在退出应用前显示一个确认对话框。

建议在退出应用之前检查用户是否在根页面上。开发者可以在 Ionic Angular 中使用 `IonRouterOutlet` 的 `canGoBack` 方法，在 Ionic React 和 Ionic Vue 中使用 `IonRouter` 的 `canGoBack` 方法。

## 内部框架处理程序

下表列出了 Ionic Framework 使用的所有内部硬件返回按钮事件处理程序。`Propagates` 列表示该特定处理程序是否告诉 Ionic Framework 调用下一个返回按钮处理程序。

| 处理程序     | 优先级 | 传播 | 描述                                                                                                |
| ---------- | ------ | ---- | --------------------------------------------------------------------------------------------------- |
| 叠加层     | 100    | 否   | 适用于叠加组件 `ion-action-sheet`、`ion-alert`、`ion-loading`、`ion-modal`、`ion-popover` 和 `ion-picker`。 |
| 菜单       | 99     | 否   | 适用于 `ion-menu`。                                                                                 |
| 导航       | 0      | 是   | 适用于路由导航（例如 Angular 路由）。                                                               |
