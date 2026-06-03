import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 硬件返回按钮

硬件返回按钮存在于大多数 Android 设备上。在原生应用中，它可以用于关闭模态框、导航到上一个视图、退出应用等。在 Ionic 中，默认情况下，当按下返回按钮时，当前视图会从导航堆栈中弹出，并显示上一个视图。如果导航堆栈中没有上一个视图，则不会发生任何操作。本指南将展示如何自定义硬件返回按钮的行为。

:::note
硬件返回按钮指的是 Android 设备上的物理返回按钮，不应与浏览器返回按钮或 `ion-back-button` 混淆。本指南中的信息仅适用于 Android 设备。
:::

## Capacitor 和 Cordova 中的硬件返回按钮

在 Capacitor 或 Cordova 应用程序中运行时，当用户按下硬件返回按钮时，Ionic Framework 会触发一个 `ionBackButton` 事件。

当监听 `ionBackButton` 事件时，您可以注册一个要触发的处理程序。该处理程序可以执行诸如退出应用或打开确认对话框等操作。每个处理程序必须分配一个优先级。默认情况下，每次按下硬件返回按钮只会触发一个处理程序。优先级值用于确定应该调用哪个回调。这很有用，因为如果您有一个模态框打开，当按下硬件返回按钮时，您可能不希望模态框关闭_并且_应用向后导航。一次只运行一个处理程序允许模态框关闭，但仍需再次按下硬件返回按钮才能向后导航。

在某些情况下，您可能希望触发多个处理程序。每个处理程序回调会传入一个函数作为参数，该函数可用于告诉框架调用下一个处理程序。

## 浏览器中的硬件返回按钮

当在移动浏览器或 PWA 中运行应用时，硬件返回按钮的自定义功能将受到限制。这是因为 Capacitor 和 Cordova 暴露了普通 Web 浏览器没有的额外功能。例如，通过硬件返回按钮关闭覆盖层和菜单是在移动浏览器中运行时目前不支持的功能。这些都是已知的限制，目前没有简单的解决方案。

要获得完整的硬件返回按钮支持，我们建议使用 Capacitor 或 Cordova。

:::note
当在浏览器或 PWA 中运行应用时，`ionBackButton` 事件不会触发。
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
    console.log('处理程序被调用了！');
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
    console.log('处理程序被调用了！');
  });
}

```
</TabItem>
<TabItem value="react">

```tsx
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(10, () => {
    console.log('处理程序被调用了！');
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
      console.log('处理程序被调用了！');
    });
  }
}
```
</TabItem>
</Tabs>
````

在这个示例中，我们注册了一个在按下硬件返回按钮时调用的处理程序。我们将优先级设置为 10，并且没有指示框架我们希望调用下一个处理程序。因此，任何优先级低于 10 的处理程序都不会被调用。优先级大于 10 的处理程序会先被调用。

如果有多个处理程序具有相同的优先级值，则_最后_注册的处理程序将被调用。有关更多信息，请参见[相同优先级的处理程序](#相同优先级的处理程序)。

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
    console.log('另一个处理程序被调用了！');
  });

  ev.detail.register(10, (processNextHandler) => {
    console.log('处理程序被调用了！');

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
    console.log('另一个处理程序被调用了！');
  });

  this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
    console.log('处理程序被调用了！');

    processNextHandler();
  });
}

```
</TabItem>
<TabItem value="react">

```tsx
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(5, () => {
    console.log('另一个处理程序被调用了！');
  });

  ev.detail.register(10, (processNextHandler) => {
    console.log('处理程序被调用了！');

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
      console.log('另一个处理程序被调用了！');
    });

    useBackButton(10, (processNextHandler) => {
      console.log('处理程序被调用了！');

      processNextHandler();
    });
  }
}
```
</TabItem>
</Tabs>
````

此示例展示了如何指示 Ionic Framework 您希望触发下一个处理程序。所有回调都提供了 `processNextHandler` 函数作为参数。调用此函数将导致下一个处理程序（如果有）被触发。

## 相同优先级的处理程序

在内部，Ionic Framework 使用类似于优先级队列的机制来管理硬件返回按钮处理程序。优先级值最大的处理程序将首先被调用。如果有多个处理程序具有相同的优先级值，则添加到该队列中的_最后一个_相同优先级的处理程序将首先被调用。

```javascript
document.addEventListener('ionBackButton', (ev) => {
  // 处理程序 A
  ev.detail.register(10, (processNextHandler) => {
    console.log('处理程序 A 被调用了！');

    processNextHandler();
  });

  // 处理程序 B
  ev.detail.register(10, (processNextHandler) => {
    console.log('处理程序 B 被调用了！');

    processNextHandler();
  });
});
```

在上面的示例中，处理程序 A 和 B 的优先级都是 10。由于处理程序 B 最后注册，Ionic Framework 会在调用处理程序 A 之前先调用处理程序 B。

## 退出应用

在某些情况下，可能需要按下硬件返回按钮时退出应用。这可以通过结合使用 `ionBackButton` 事件和 Capacitor/Cordova 提供的方法来实现。

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

此示例展示了当用户按下硬件返回按钮且导航堆栈中没有剩余内容时，应用退出。也可以在退出应用之前显示确认对话框。

建议在退出应用之前检查用户是否在根页面。开发人员可以在 Ionic Angular 中使用 `IonRouterOutlet` 上的 `canGoBack` 方法，在 Ionic React 和 Ionic Vue 中使用 `IonRouter` 上的 `canGoBack` 方法。

## 内部框架处理程序

下表列出了 Ionic Framework 使用的所有内部硬件返回按钮事件处理程序。`Propagates` 列表示该处理程序是否告诉 Ionic Framework 调用下一个返回按钮处理程序。

| 处理程序   | 优先级 | 是否传播 | 描述                                                                                             |
| ---------- | ------ | -------- | ------------------------------------------------------------------------------------------------ |
| 覆盖层     | 100    | 否       | 适用于覆盖层组件 `ion-action-sheet`、`ion-alert`、`ion-loading`、`ion-modal`、`ion-popover`、`ion-picker` 和 `ion-toast`。 |
| 菜单       | 99     | 否       | 适用于 `ion-menu`。                                                                              |
| 导航       | 0      | 是       | 适用于路由导航（即 Angular Routing）。                                                            |
