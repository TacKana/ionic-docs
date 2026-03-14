---
sidebar_label: Lifecycle
---

# Vue 生命周期

本指南将介绍如何在 Ionic Vue 应用中使用 Ionic Framework 的生命周期事件。

## Ionic Framework 生命周期方法

Ionic Framework 提供了几个可以在应用中使用的生命周期方法：

| 事件名称           | 描述                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| `ionViewWillEnter` | 当路由到的组件即将以动画形式进入视图时触发。                         |
| `ionViewDidEnter`  | 当路由到的组件已完成动画时触发。                                     |
| `ionViewWillLeave` | 当路由离开的组件即将开始动画时触发。                                 |
| `ionViewDidLeave`  | 当路由到的组件已完成动画时触发。                                     |

这些生命周期仅适用于由路由直接映射的组件。这意味着如果 `/pageOne` 映射到 `PageOneComponent`，那么 Ionic 生命周期将在 `PageOneComponent` 上被调用，但不会在 `PageOneComponent` 可能渲染的任何子组件上调用。

这些生命周期方法的定义方式与 Vue 生命周期方法相同——作为 Vue 组件根部的函数：

```tsx
import { IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  ionViewDidEnter() {
    console.log('Home page did enter');
  },
  ionViewDidLeave() {
    console.log('Home page did leave');
  },
  ionViewWillEnter() {
    console.log('Home page will enter');
  },
  ionViewWillLeave() {
    console.log('Home page will leave');
  },
  components: {
    IonPage,
  },
});
```

### Composition API 钩子

这些生命周期也可以用 Vue 3 的 Composition API 来表达：

```tsx
import { IonPage, onIonViewWillEnter, onIonViewDidEnter, onIonViewWillLeave, onIonViewDidLeave } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonPage,
  },
  setup() {
    onIonViewDidEnter(() => {
      console.log('Home page did enter');
    });

    onIonViewDidLeave(() => {
      console.log('Home page did leave');
    });

    onIonViewWillEnter(() => {
      console.log('Home page will enter');
    });

    onIonViewWillLeave(() => {
      console.log('Home page will leave');
    });
  },
});
```

:::note
应用中需要使用 `IonPage` 组件的页面，才能使生命周期方法和钩子正确触发。
:::

## Ionic Framework 如何处理页面的生命周期

Ionic Framework 拥有自己的路由出口，称为 `<ion-router-outlet>`。该出口扩展了 Vue Router 的 `<router-view>`，增加了一些功能，以便为移动设备提供更好的体验。

当应用包裹在 `<ion-router-outlet>` 中时，Ionic Framework 对导航的处理会略有不同。当导航到新页面时，Ionic Framework 会将旧页面保留在 DOM 中，但将其从视图中隐藏，并过渡到新页面。这样做的原因有两点：

1. 我们可以保持旧页面的状态（屏幕上的数据、滚动位置等）。
2. 由于页面已经存在且无需重新创建，我们可以提供更平滑的返回过渡。

只有当页面被“弹出”时，例如通过 UI 中的返回按钮或浏览器的后退按钮，页面才会从 DOM 中移除。

由于这种特殊处理，某些 Vue Router 组件（如 `<keep-alive>`、`<transition>` 和 `<router-view>`）不应在 Ionic Vue 应用中使用。此外，Vue Router 的 Scroll Behavior API 在此并不需要，因为每个页面的滚动位置会自动保留。

Vue 中的所有生命周期方法（`mounted`、`beforeUnmount` 等）也可以供你使用。但是，由于 Ionic Vue 管理页面的生命周期，某些事件可能不会在你预期的时候触发。例如，`mounted` 在页面首次显示时触发，但如果你从该页面导航离开，Ionic Framework 可能会将该页面保留在 DOM 中，后续再次访问该页面时可能不会再调用 `mounted`。这种情况正是 Ionic Framework 生命周期方法存在的主要原因——当原生框架的事件可能不触发时，它仍然为你提供一种在视图进入和退出时调用逻辑的方式。

## 各生命周期方法的使用指导

以下是一些关于每个生命周期事件使用场景的建议：

- `ionViewWillEnter` - 由于 `ionViewWillEnter` 在每次导航到该视图时都会被调用（无论是否已初始化），因此它是从服务加载数据的好方法。
- `ionViewDidEnter` - 如果你在使用 `ionViewWillEnter` 加载数据时遇到性能问题，可以改用 `ionViewDidEnter` 进行数据调用。然而，此事件要等到页面对用户可见后才会触发，因此你可能需要使用加载指示器或骨架屏（如 [ion-skeleton-text](../api/skeleton-text)），以避免在过渡完成后内容不自然地闪现。
- `ionViewWillLeave` - 可用于清理工作，例如取消订阅数据源。由于 `beforeUnmount` 在从当前页面导航时可能不会触发，因此如果你不希望清理代码在屏幕不可见时仍然活跃，请将清理代码放在这里。
- `ionViewDidLeave` - 当此事件触发时，你知道新页面已完全过渡进来，因此可以在此处执行一些通常在视图不可见时不会进行的逻辑。