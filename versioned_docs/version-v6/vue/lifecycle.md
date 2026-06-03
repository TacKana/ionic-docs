---
sidebar_label: 生命周期
---

# Vue 生命周期

本指南讨论如何在 Ionic Vue 应用中使用 Ionic Framework 的生命周期事件。

## Ionic Framework 生命周期方法

Ionic Framework 提供了一些你可以在应用中使用的生命周期方法：

| 事件名称           | 描述                                         |
| ------------------ | -------------------------------------------- |
| `ionViewWillEnter` | 当路由进入的组件即将动画化进入视图时触发。     |
| `ionViewDidEnter`  | 当路由进入的组件完成动画化进入时触发。         |
| `ionViewWillLeave` | 当路由离开的组件即将动画化离开时触发。         |
| `ionViewDidLeave`  | 当路由离开的组件完成动画化离开时触发。         |

这些生命周期仅在由路由直接映射的组件上调用。这意味着如果 `/pageOne` 映射到 `PageOneComponent`，那么 Ionic 生命周期将在 `PageOneComponent` 上调用，但不会在 `PageOneComponent` 可能渲染的任何子组件上调用。

生命周期的定义方式与 Vue 生命周期方法相同——作为 Vue 组件根级别的函数：

```tsx
import { IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  ionViewDidEnter() {
    console.log('首页已进入');
  },
  ionViewDidLeave() {
    console.log('首页已离开');
  },
  ionViewWillEnter() {
    console.log('首页即将进入');
  },
  ionViewWillLeave() {
    console.log('首页即将离开');
  },
  components: {
    IonPage,
  },
});
```

### Composition API 钩子

这些生命周期也可以使用 Vue 3 的 Composition API 来表达：

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
      console.log('首页已进入');
    });

    onIonViewDidLeave(() => {
      console.log('首页已离开');
    });

    onIonViewWillEnter(() => {
      console.log('首页即将进入');
    });

    onIonViewWillLeave(() => {
      console.log('首页即将离开');
    });
  },
});
```

:::note
应用中的页面需要使用 `IonPage` 组件，生命周期方法和钩子才能正确触发。
:::

## Ionic Framework 如何处理页面的生命周期

Ionic Framework 有自己的路由出口，称为 `<ion-router-outlet>`。这个出口扩展了 Vue Router 的 `<router-view>`，增加了额外的功能，为移动设备提供更好的体验。

当应用包裹在 `<ion-router-outlet>` 中时，Ionic Framework 处理导航的方式略有不同。当你导航到一个新页面时，Ionic Framework 会将旧页面保留在现有 DOM 中，但将其从视图中隐藏并过渡到新页面。这样做的原因有两个：

1. 我们可以保持旧页面的状态（屏幕上的数据、滚动位置等）。
2. 由于页面已经存在且无需重新创建，我们可以提供更平滑的返回过渡。

页面只有在"弹出"时才会从 DOM 中移除，例如通过按 UI 中的返回按钮或浏览器的返回按钮。

由于这种特殊处理，某些 Vue Router 组件（如 `<keep-alive>`、`<transition>` 和 `<router-view>`）不应在 Ionic Vue 应用中使用。此外，Vue Router 的滚动行为 API 在这里不需要，因为每个页面的滚动位置会自动保留。

Vue 中所有的生命周期方法（`mounted`、`beforeUnmount` 等）你也可以使用。但是，由于 Ionic Vue 管理页面的生命周期，某些事件可能不会按你预期的时间触发。例如，`mounted` 在页面首次显示时触发，但如果你导航离开页面，Ionic Framework 可能会将页面保留在 DOM 中，再次访问该页面时可能不会再次调用 `mounted`。这正是 Ionic Framework 生命周期方法存在的主要原因——在原生框架事件可能不触发时，仍能提供一种在视图进出时调用逻辑的方式。

## 每个生命周期方法的指导建议

以下是每个生命周期事件的用例提示。

- `ionViewWillEnter` —— 由于 `ionViewWillEnter` 在每次导航到视图时都会被调用（无论是否已初始化），它是从服务加载数据的好方法。
- `ionViewDidEnter` —— 如果使用 `ionViewWillEnter` 加载数据时遇到性能问题，你可以改为在 `ionViewDidEnter` 中进行数据调用。但是，此事件会在页面对用户可见之后才触发，因此你可能需要使用加载指示器或骨架屏（如 [ion-skeleton-text](../api/skeleton-text)），以防止内容在过渡完成后出现不自然的闪烁。
- `ionViewWillLeave` —— 可用于清理工作，例如取消订阅数据源。由于 `beforeUnmount` 在从当前页面导航时可能不会触发，如果你不希望代码在屏幕不可见时仍处于活动状态，请将清理代码放在此处。
- `ionViewDidLeave` —— 当此事件触发时，你知道新页面已经完全过渡进来，因此任何你通常不希望视图可见时执行的逻辑都可以放在这里。
