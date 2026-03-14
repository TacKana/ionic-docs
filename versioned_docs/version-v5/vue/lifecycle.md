---
sidebar_label: Lifecycle
---

# Vue 生命周期

本指南探讨如何在 Ionic Vue 应用中使用 Ionic Framework 的生命周期事件。

## Ionic Framework 生命周期方法

Ionic Framework 提供了几个可在应用中使用的生命周期方法：

| 事件名称             | 描述                                                 |
| -------------------- | ---------------------------------------------------- |
| `ionViewWillEnter` | 当即将进入的组件开始动画进入视图时触发。               |
| `ionViewDidEnter`  | 当即将进入的组件完成动画时触发。                       |
| `ionViewWillLeave` | 当即将离开的组件开始动画时触发。                       |
| `ionViewDidLeave`  | 当即将离开的组件完成动画时触发。                       |

这些生命周期的定义方式与 Vue 生命周期方法相同——作为 Vue 组件根级别的函数：

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

### 组合式 API 钩子

这些生命周期也可以使用 Vue 3 的组合式 API 表达：

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
应用中需要使用 `IonPage` 组件的页面，生命周期方法和钩子才能正常触发。
:::

## Ionic Framework 如何管理页面生命周期

Ionic Framework 拥有自己的路由出口，称为 `<ion-router-outlet>`。该出口扩展了 Vue Router 的 `<router-view>`，增加了一些附加功能，为移动设备提供更好的体验。

当应用包裹在 `<ion-router-outlet>` 中时，Ionic Framework 对导航的处理略有不同。导航到新页面时，Ionic Framework 会将旧页面保留在 DOM 中，但隐藏其视图并过渡到新页面。这样设计有两个原因：

1. 我们可以保持旧页面的状态（屏幕上的数据、滚动位置等）。
2. 由于页面已经存在且无需重新创建，我们可以提供更流畅的返回过渡效果。

只有当页面被“弹出”时（例如通过界面中的返回按钮或浏览器的后退按钮），页面才会从 DOM 中移除。

由于这种特殊处理，某些 Vue Router 组件（如 `<keep-alive>`、`<transition>` 和 `<router-view>`）不应在 Ionic Vue 应用中使用。此外，由于每个页面的滚动位置会自动保存，这里也不需要 Vue Router 的滚动行为 API。

Vue 的所有生命周期方法（`mounted`、`beforeUnmount` 等）仍然可供使用。但由于 Ionic Vue 管理页面的生命周期，某些事件可能不会在你预期的时间触发。例如，`mounted` 在页面首次显示时触发，但如果从页面导航离开，Ionic Framework 可能会将页面保留在 DOM 中，再次访问该页面时可能不会再次调用 `mounted`。这种情况正是 Ionic Framework 生命周期方法存在的主要原因——在原生框架事件可能不触发时，仍为你提供在视图进入和退出时调用逻辑的方法。

## 各生命周期方法使用指南

下面是关于每个生命周期事件使用场景的一些建议。

- `ionViewWillEnter` - 由于每次导航到视图时都会调用 `ionViewWillEnter`（无论是否初始化），这是从服务加载数据的好方法。
- `ionViewDidEnter` - 如果在加载数据时使用 `ionViewWillEnter` 遇到性能问题，可以改为在 `ionViewDidEnter` 中进行数据调用。但此事件直到页面对用户可见后才会触发，因此你可能需要使用加载指示器或骨架屏（如 [ion-skeleton-text](../api/skeleton-text)），以免过渡完成后内容不自然地闪现。
- `ionViewWillLeave` - 可用于清理工作，如取消订阅数据源。由于从当前页面导航时 `beforeUnmount` 可能不会触发，如果不想在屏幕不可见时保持某些代码活动，请将清理代码放在这里。
- `ionViewDidLeave` - 当此事件触发时，新页面已完全过渡完成，因此可以在此处执行视图不可见时通常不会执行的逻辑。