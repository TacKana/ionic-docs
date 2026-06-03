---
sidebar_label: 生命周期
---

# Vue 生命周期

本指南讨论如何在 Ionic Vue 应用程序中使用 Ionic 框架的生命周期事件。

## Ionic 框架生命周期方法

Ionic 框架提供了几个生命周期方法，您可以在应用中使用：

| 事件名称           | 描述                                               |
| ------------------ | -------------------------------------------------- |
| `ionViewWillEnter` | 当路由目标组件即将动画进入视图时触发。             |
| `ionViewDidEnter`  | 当路由目标组件**已完成**动画进入视图时触发。       |
| `ionViewWillLeave` | 当路由**来源**组件即将动画离开时触发。             |
| `ionViewDidLeave`  | 当路由**来源**组件**已完成**动画离开时触发。       |

这些生命周期仅在被路由直接映射的组件上调用。这意味着如果 `/pageOne` 映射到 `PageOneComponent`，那么 Ionic 生命周期将在 `PageOneComponent` 上被调用，但不会在 `PageOneComponent` 可能渲染的任何子组件上调用。

生命周期方法的定义方式与 Vue 生命周期方法相同——作为 Vue 组件根级别的函数：

```vue
<script setup lang="ts">
import { IonPage } from '@ionic/vue';

const ionViewDidEnter = () => {
  console.log('首页已进入');
};

const ionViewDidLeave = () => {
  console.log('首页已离开');
};

const ionViewWillEnter = () => {
  console.log('首页即将进入');
};

const ionViewWillLeave = () => {
  console.log('首页即将离开');
};
</script>
```

### 组合式 API 钩子

这些生命周期也可以使用 Vue 3 的组合式 API 来表达：

```vue
<script setup lang="ts">
import { IonPage, onIonViewWillEnter, onIonViewDidEnter, onIonViewWillLeave, onIonViewDidLeave } from '@ionic/vue';

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
</script>
```

:::note
应用中的页面需要使用 `IonPage` 组件，生命周期方法和钩子才能正确触发。
:::

## Ionic 框架如何处理页面的生命周期

Ionic 框架有自己的路由出口，称为 `<ion-router-outlet>`。这个出口扩展了 Vue Router 的 `<router-view>`，并增加了一些额外功能，为移动设备提供更好的体验。

当应用被包裹在 `<ion-router-outlet>` 中时，Ionic 框架对导航的处理有所不同。当您导航到一个新页面时，Ionic 框架会将旧页面保留在现有的 DOM 中，但将其从视图中隐藏并过渡到新页面。这样做的原因有两个：

1. 我们可以保持旧页面的状态（屏幕上的数据、滚动位置等）。
2. 我们可以提供更平滑的返回过渡，因为页面已经存在，无需重新创建。

页面只有在被"弹出"时才会从 DOM 中移除，例如通过按 UI 中的返回按钮或浏览器的返回按钮。

由于这种特殊处理，某些 Vue Router 组件如 `<keep-alive>`、`<transition>` 和 `<router-view>` 不应在 Ionic Vue 应用程序中使用。此外，Vue Router 的滚动行为 API 在此处也不需要，因为每个页面的滚动位置会自动保留。

Vue 的所有生命周期方法（`mounted`、`beforeUnmount` 等）也都可以使用。但是，由于 Ionic Vue 管理页面的生命周期，某些事件可能不会在您预期的时机触发。例如，`mounted` 在页面首次显示时触发，但如果您导航离开页面，Ionic 框架可能会将页面保留在 DOM 中，再次访问该页面时可能不会再次调用 `mounted`。这正是 Ionic 框架生命周期方法存在的主要原因——当原生框架的事件可能不会触发时，仍然为您提供一种在视图进入和离开时调用逻辑的方式。

## 每个生命周期方法的指导建议

以下是关于每个生命周期事件使用场景的一些提示。

- `ionViewWillEnter`——由于 `ionViewWillEnter` 在每次导航到视图时都会被调用（无论是否已初始化），因此是从服务加载数据的好方法。
- `ionViewDidEnter`——如果您发现使用 `ionViewWillEnter` 加载数据时出现性能问题，可以将数据调用放在 `ionViewDidEnter` 中。但是，此事件要等到页面对用户可见后才会触发，因此您可能需要使用加载指示器或骨架屏（如 [ion-skeleton-text](../api/skeleton-text)），以避免内容在过渡完成后才突兀地闪现。
- `ionViewWillLeave`——可用于清理工作，比如取消订阅数据源。由于 `beforeUnmount` 在从当前页面导航离开时可能不会触发，如果您不希望代码在屏幕不可见时仍然活跃，请将清理代码放在此处。
- `ionViewDidLeave`——当此事件触发时，您知道新页面已经完全过渡进入，因此任何您通常不在视图可见时执行的逻辑都可以放在这里。
