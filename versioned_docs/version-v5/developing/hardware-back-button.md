import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 硬件返回按钮

大多数 Android 设备都配备有硬件返回按钮。在原生应用中，它可用于关闭模态框、导航到上一个视图、退出应用等操作。在 Ionic 中，默认情况下，按下返回按钮时，当前视图将从导航栈中弹出，并显示上一个视图。如果导航栈中没有上一个视图，则不会发生任何操作。本指南将展示如何自定义硬件返回按钮的行为。

:::note
硬件返回按钮指的是 Android 设备上的物理返回按钮，不应与浏览器返回按钮或 `ion-back-button` 混淆。本指南中的信息仅适用于 Android 设备。
:::

## Capacitor 和 Cordova 中的硬件返回按钮

在 Capacitor 或 Cordova 应用运行时，当用户按下硬件返回按钮时，Ionic Framework 会触发 `ionBackButton` 事件。

监听 `ionBackButton` 事件时，你可以注册一个要执行的处理函数。该处理函数可以执行退出应用或打开确认对话框等操作。每个处理函数都必须分配一个优先级。默认情况下，每次按下硬件返回按钮时只会触发一个处理函数。优先级值用于确定应调用哪个回调函数。这非常有用，例如，如果你打开了一个模态框，你可能不希望按下硬件返回按钮时既关闭模态框又让应用向后导航。每次只运行一个处理函数允许模态框关闭，但仍需再次按下硬件返回按钮才能向后导航。

在某些情况下，你可能希望触发多个处理函数。每个处理函数的回调都会接收一个函数作为参数，该函数可用于告诉框架调用下一个处理函数。

## 浏览器中的硬件返回按钮

在移动浏览器或 PWA 中运行应用时，硬件返回按钮的自定义功能将受到限制。这是因为 Capacitor 和 Cordova 提供了普通网络浏览器中未公开的额外功能。例如，通过硬件返回按钮关闭覆盖层和菜单等功能目前在移动浏览器中运行应用时不受支持。这些是已知的限制，目前没有直接的解决方案。

要获得完整的硬件返回按钮支持，我们建议使用 Capacitor 或 Cordova。

:::note
在浏览器或 PWA 中运行应用时，不会触发 `ionBackButton` 事件。
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

在这个例子中，我们注册了一个处理函数，在按下硬件返回按钮时被调用。我们将优先级设置为 10，并且没有指示框架调用下一个处理函数。因此，任何优先级小于 10 的处理函数都不会被调用。优先级大于 10 的处理函数将首先被调用。

如果存在优先级值相同的处理函数，则最后注册的处理函数将被调用。更多信息请参见[相同优先级的处理函数](#handlers-with-the-same-priorities)。

## 调用多个处理函数

每个硬件返回按钮回调都有一个 `processNextHandler` 参数。调用此函数可以让你继续触发其他硬件返回按钮处理函数。

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

这个例子展示了如何指示 Ionic Framework 触发下一个处理函数。所有回调都提供了一个 `processNextHandler` 函数作为参数。调用此函数将触发下一个处理函数（如果存在）。

## 相同优先级的处理函数

在内部，Ionic Framework 使用类似于优先级队列的机制来管理硬件返回按钮处理函数。优先级值最大的处理函数将首先被调用。如果存在多个优先级值相同的处理函数，则最后添加到队列中的相同优先级处理函数将首先被调用。

```javascript
document.addEventListener('ionBackButton', (ev) => {
  // 处理函数 A
  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler A was called!');

    processNextHandler();
  });

  // 处理函数 B
  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler B was called!');

    processNextHandler();
  });
});
```

在上面的例子中，处理函数 A 和 B 的优先级都是 10。由于处理函数 B 最后注册，Ionic Framework 将在调用处理函数 A 之前先调用处理函数 B。

## 退出应用

在某些情况下，可能希望在按下硬件返回按钮时退出应用。这可以通过结合使用 `ionBackButton` 事件和 Capacitor/Cordova 提供的方法来实现。

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
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

...

constructor(
  private platform: Platform,
  private routerOutlet: IonRouterOutlet
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

这个例子展示了当用户按下硬件返回按钮且导航栈中没有剩余内容时，应用将退出。也可以在退出应用前显示确认对话框。

建议在退出应用之前检查用户是否处于根页面。开发者可以在 Ionic Angular 中使用 `IonRouterOutlet` 的 `canGoBack` 方法，在 Ionic React 和 Ionic Vue 中使用 `IonRouter` 的相应方法。

## 框架内部处理函数

下表列出了 Ionic Framework 使用的所有内部硬件返回按钮事件处理函数。“是否传播”列说明了该特定处理函数是否指示 Ionic Framework 调用下一个返回按钮处理函数。

| 处理函数     | 优先级 | 是否传播 | 描述                                                                                                                               |
| ------------ | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 覆盖层       | 100    | 否       | 适用于覆盖层组件 `ion-action-sheet`、`ion-alert`、`ion-loading`、`ion-modal`、`ion-popover`、`ion-picker` 和 `ion-toast`。          |
| 菜单         | 99     | 否       | 适用于 `ion-menu`。                                                                                                                |
| 导航         | 0      | 是       | 适用于路由导航（例如 Angular Routing）。                                                                                           |