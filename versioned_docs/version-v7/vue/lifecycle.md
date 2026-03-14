---
sidebar_label: 生命周期
---

# Vue 生命周期

本指南讨论如何在 Ionic Vue 应用中使用 Ionic Framework 的生命周期事件。

## Ionic Framework 生命周期方法

Ionic Framework 提供了一些可在应用中使用的生命周期方法：

| 事件名称            | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| `ionViewWillEnter`  | 当路由到的组件即将开始进入视图的动画时触发                   |
| `ionViewDidEnter`   | 当路由到的组件完成进入视图的动画时触发                       |
| `ionViewWillLeave`  | 当路由离开的组件即将开始离开视图的动画时触发                 |
| `ionViewDidLeave`   | 当路由离开的组件完成离开视图的动画时触发                     |

这些生命周期仅会在直接由路由器映射的组件上调用。这意味着如果 `/pageOne` 映射到 `PageOneComponent`，那么 Ionic 生命周期将在 `PageOneComponent` 上调用，但不会在 `PageOneComponent` 可能渲染的任何子组件上调用。

生命周期方法的定义方式与 Vue 生命周期方法相同——作为 Vue 组件根级别的函数：

```vue
<script setup lang="ts">
import { IonPage } from '@ionic/vue';

const ionViewDidEnter = () => {
  console.log('Home page did enter');
};

const ionViewDidLeave = () => {
  console.log('Home page did leave');
};

const ionViewWillEnter = () => {
  console.log('Home page will enter');
};

const ionViewWillLeave = () => {
  console.log('Home page will leave');
};
</script>
```

### 组合式 API 钩子

这些生命周期也可以使用 Vue 3 的组合式 API 来表示：

```vue
<script setup lang="ts">
import { IonPage, onIonViewWillEnter, onIonViewDidEnter, onIonViewWillLeave, onIonViewDidLeave } from '@ionic/vue';

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
</script>
```

:::note
为了让生命周期方法和钩子能够正确触发，应用中的页面需要使用 `IonPage` 组件。
:::

## Ionic Framework 如何处理页面的生命周期

Ionic Framework 有自己的路由器出口，称为 `<ion-router-outlet>`。该出口扩展了 Vue Router 的 `<router-view>`，并添加了一些额外功能，以提供更好的移动设备体验。

当应用被包装在 `<ion-router-outlet>` 中时，Ionic Framework 对导航的处理方式略有不同。当您导航到新页面时，Ionic Framework 会将旧页面保留在现有的 DOM 中，但将其从视图中隐藏，并过渡到新页面。我们这样做的原因有两个：

1. 我们可以保持旧页面的状态（屏幕上的数据、滚动位置等）。
2. 由于页面已经存在且无需重新创建，我们可以提供更流畅的返回页面过渡效果。

只有当页面被“弹出”时（例如通过 UI 中的返回按钮或浏览器的返回按钮），页面才会从 DOM 中移除。

由于这种特殊处理，某些 Vue Router 组件（如 `<keep-alive>`、`<transition>` 和 `<router-view>`）不应在 Ionic Vue 应用中使用。此外，这里也不需要 Vue Router 的滚动行为 API，因为每个页面的滚动位置都会自动保存。

Vue 中的所有生命周期方法（`mounted`、`beforeUnmount` 等）也都可以供您使用。但是，由于 Ionic Vue 管理页面的生命周期，某些事件可能不会在您期望的时候触发。例如，`mounted` 在页面首次显示时触发，但如果您从页面导航离开，Ionic Framework 可能会将页面保留在 DOM 中，后续再次访问该页面时可能不会再次调用 `mounted`。这种情况是 Ionic Framework 生命周期方法存在的主要原因，以便在原生框架事件可能不会触发时，仍然为您提供一种在视图进入和退出时调用逻辑的方式。

## 各生命周期方法的使用指导

以下是每个生命周期事件使用场景的一些建议：

- `ionViewWillEnter` - 由于每次导航到视图时都会调用 `ionViewWillEnter`（无论是否已初始化），因此它是从服务加载数据的好方法。
- `ionViewDidEnter` - 如果您在使用 `ionViewWillEnter` 加载数据时遇到性能问题，可以改为在 `ionViewDidEnter` 中进行数据调用。但是，此事件直到页面对用户可见后才会触发，因此您可能需要使用加载指示器或骨架屏（如 [ion-skeleton-text](../api/skeleton-text)），以避免内容在过渡完成后不自然地闪现。
- `ionViewWillLeave` - 可用于清理工作，例如取消订阅数据源。由于从当前页面导航时 `beforeUnmount` 可能不会触发，如果您不希望清理代码在屏幕不可见时仍处于活动状态，请将清理代码放在此处。
- `ionViewDidLeave` - 当此事件触发时，您知道新页面已完全过渡完成，因此可以在此处执行视图不可见时通常不会执行的任何逻辑。