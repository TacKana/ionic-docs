---
sidebar_label: Navigation/Routing
---

# Vue 导航

本指南将介绍在使用 Ionic 和 Vue 构建的应用中，路由是如何工作的。

`IonRouterOutlet` 组件内部使用了流行的 [Vue Router](https://router.vuejs.org/) 库。借助 Ionic 和 Vue Router，你可以创建具有丰富页面过渡效果的多页面应用。

所有关于使用 Vue Router 进行路由的知识都适用于 Ionic Vue。让我们先来了解 Ionic Vue 应用的基本结构以及路由的工作原理。

## 简要说明

在阅读本指南时，你可能会注意到，这些概念大多与没有 Ionic 框架的 Vue Router 中的概念非常相似。你的观察是正确的！Ionic Vue 充分利用了 Vue Router 的最佳特性，使过渡到使用 Ionic 框架构建应用的过程尽可能顺畅。因此，我们建议尽可能依赖 Vue Router 的功能，而不是尝试构建自己的路由解决方案。

## 一个简单的路由

以下是一个路由配置示例，它定义了一个指向 "/home" URL 的单一路由。当你访问 "/home" 时，该路由会渲染 `HomePage` 组件。

**router/index.ts**

```tsx
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

在应用初始加载时，应用将渲染 `HomePage` 组件，因为这是在此配置的。

## 处理重定向

如果我们希望初始加载时跳转到不同的路径，该怎么办？为此，我们可以使用路由器重定向。重定向的工作方式与典型的路由对象相同，只是包含了一些不同的键：

```tsx
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
];
```

在我们的重定向中，我们查找应用的索引路径。然后，如果我们加载该路径，就会重定向到 `home` 路由。

## 导航到不同的路由

这很好，但如何实际导航到某个路由呢？为此，我们可以使用 `router-link` 属性。让我们创建一个新的路由设置：

```tsx
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/detail',
    name: 'Detail',
    component: DetailPage,
  },
];
```

假设我们从 `home` 路由开始，并希望添加一个按钮，将我们带到 `detail` 路由。我们可以使用以下 HTML 来导航到 `detail` 路由：

```html
<ion-button router-link="/detail">前往详情页</ion-button>
```

我们还可以通过使用路由器 API 在应用中编程式导航：

```html
<template>
  <ion-page>
    <ion-content>
      <ion-button @click="() => router.push('/detail')">前往详情页</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'HomePage',
    components: {
      IonButton,
      IonContent,
      IonPage,
    },
    setup() {
      const router = useRouter();
      return { router };
    },
  });
</script>
```

这两种方式都提供了相同的导航机制，只是适用于不同的使用场景。

## 懒加载路由

当前我们设置路由的方式使得它们在加载应用时被包含在同一个初始块中，这并不总是理想的。相反，我们可以设置路由，以便在需要时加载组件：

```tsx
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/DetailPage.vue'),
  },
];
```

在这里，我们拥有与之前相同的设置，只是这次 `DetailPage` 被替换为一个导入调用。这将导致 `DetailPage` 组件不再属于应用加载时请求的块。

## 共享 URL 与嵌套路由

设置路由时一个常见的混淆点是决定使用共享 URL 还是嵌套路由。本指南的这一部分将解释两者，并帮助你决定使用哪一种。

### 共享 URL

共享 URL 是一种路由配置，其中路由共享 URL 的某些部分。以下是共享 URL 配置的示例：

```tsx
const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    component: DashboardMainPage,
  },
  {
    path: '/dashboard/stats',
    component: DashboardStatsPage,
  },
];
```

上述路由被认为是“共享的”，因为它们重用了 URL 中的 `dashboard` 部分。

### 嵌套路由

嵌套路由是一种路由配置，其中路由被列为其他路由的子路由。以下是嵌套路由配置的示例：

```tsx
const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard/:id',
    component: DashboardRouterOutlet,
    children: [
      {
        path: '',
        component: DashboardMainPage,
      },
      {
        path: 'stats',
        component: DashboardStatsPage,
      },
    ],
  },
];
```

上述路由是嵌套的，因为它们位于父路由的 `children` 数组中。注意，父路由渲染了 `DashboardRouterOutlet` 组件。当你嵌套路由时，需要渲染另一个 `ion-router-outlet` 实例。

### 我应该选择哪种方式？

共享 URL 适用于当你希望从页面 A 过渡到页面 B，同时在 URL 中保留两个页面之间的关系的情况。在我们之前的例子中，`/dashboard` 页面上的按钮可以过渡到 `/dashboard/stats` 页面。这两个页面之间的关系得以保留，因为 a) 页面过渡和 b) URL。

嵌套路由主要适用于当你需要在出口 A 中渲染内容，同时还要在嵌套的出口 B 中渲染子内容的情况。你将遇到的最常见用例是标签页。当你加载一个标签页 Ionic 起始应用时，你会看到 `ion-tab-bar` 和 `ion-tabs` 组件在第一个 `ion-router-outlet` 中渲染。`ion-tabs` 组件渲染另一个 `ion-router-outlet`，负责渲染每个标签页的内容。

在移动应用中，很少有用例适合使用嵌套路由。如果不确定，请使用共享 URL 路由配置。我们强烈建议不要在标签页以外的上下文中使用嵌套路由，因为它可能很快让你的应用导航变得混乱。

## 使用标签页

使用标签页时，Ionic Vue 需要知道哪个视图属于哪个标签页。`IonTabs` 组件在这里很有用，但让我们看看路由设置是怎样的：

```tsx
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1',
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1',
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue'),
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue'),
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue'),
      },
    ],
  },
];
```

在这里，我们的 `tabs` 路径加载一个 `Tabs` 组件。我们将每个标签页作为路由对象提供在 `children` 数组中。在这个例子中，我们将路径称为 `tabs`，但这可以自定义。

让我们先看看我们的 `Tabs` 组件：

```html
<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon :icon="triangle" />
            <ion-label>标签 1</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon :icon="ellipse" />
            <ion-label>标签 2</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <ion-icon :icon="square" />
            <ion-label>标签 3</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonContent,
    IonLabel,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  } from '@ionic/vue';
  import { ellipse, square, triangle } from 'ionicons/icons';

  export default {
    name: 'Tabs',
    components: {
      IonContent,
      IonLabel,
      IonTabs,
      IonTabBar,
      IonTabButton,
      IonIcon,
      IonPage,
      IonRouterOutlet,
    },
    setup() {
      return {
        ellipse,
        square,
        triangle,
      };
    },
  };
</script>
```

如果你之前使用过 Ionic Framework，这应该很熟悉。我们创建一个 `ion-tabs` 组件并提供 `ion-tab-bar`。`ion-tab-bar` 提供 `ion-tab-button` 组件，每个组件都有一个 `tab` 属性，该属性与路由器配置中对应的标签页相关联。我们还提供了一个 `ion-router-outlet`，以便 `ion-tabs` 有一个出口来渲染不同的标签页视图。

### 标签页内的子路由

当向标签页添加额外的路由时，应将它们写为兄弟路由，并将父标签页作为路径前缀。下面的例子将 `/tabs/tab1/view` 路由定义为 `/tabs/tab1` 路由的兄弟路由。由于这个新路由具有 `tab1` 前缀，它将在 `Tabs` 组件内渲染，并且 `ion-tab-bar` 中仍将选中标签 1。

```tsx
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1',
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1',
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue'),
      },
      {
        path: 'tab1/view',
        component: () => import('@/views/Tab1View.vue'),
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue'),
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue'),
      },
    ],
  },
];
```

## IonRouterOutlet

`IonRouterOutlet` 组件提供了一个容器来渲染你的视图。它类似于其他 Vue 应用中的 `RouterView` 组件，但 `IonRouterOutlet` 可以在同一个出口中渲染多个页面到 DOM 中。当一个组件在 `IonRouterOutlet` 中渲染时，我们将其视为 Ionic Framework 的“页面”。路由器出口容器控制页面之间的过渡动画，以及控制页面的创建和销毁时间。这有助于在视图之间来回切换时保持状态。

在模板中设置 `IonRouterOutlet` 时，不应在其中提供任何内容。虽然 `IonRouterOutlet` 可以嵌套在子组件中，但我们不建议这样做，因为这通常会使应用中的导航变得混乱。更多信息请参见[共享 URL 与嵌套路由](#共享-url-与嵌套路由)。

## IonPage

`IonPage` 组件包装了 Ionic Vue 应用中的每个视图，并使页面过渡和堆栈导航能够正常工作。使用路由器导航到的每个视图都必须包含一个 `IonPage` 组件。

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>首页</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">你好，世界</ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
    },
  });
</script>
```

通过 `IonModal` 或 `IonPopover` 呈现的组件通常不需要 `IonPage` 组件，除非你需要包装元素。在这种情况下，我们建议使用 `IonPage`，以便正确计算组件尺寸。

## 访问 IonRouter 实例

在某些用例中，你可能需要从 Vue 应用内部访问 `IonRouter` 实例。例如，当用户在 Android 上按下硬件返回按钮时，你可能想知道是否在应用的根页面。对于这类用例，你可以将 `IonRouter` 依赖注入到你的组件中：

```tsx
import { useIonRouter } from '@ionic/vue';

...

export default {
  setup() {
    const ionRouter = useIonRouter();
    if (ionRouter.canGoBack()) {
      // 在此处执行某些操作
    }
  }
}
```

## URL 参数

让我们扩展我们最初的路由示例，展示如何使用 URL 参数：

```tsx
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: DetailPage,
  },
];
```

注意，我们现在已经在 `detail` 路径字符串的末尾添加了 `:id`。URL 参数是我们路由路径的动态部分。当用户导航到诸如 `/details/1` 这样的 URL 时，"1" 被保存到一个名为 "id" 的参数中，该参数可以在路由渲染时在组件中访问。

让我们看看如何在组件中使用它：

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>详情</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content> 详情 ID：{{ id }} </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    name: 'Detail',
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
    },
    setup() {
      const route = useRoute();
      const { id } = route.params;
      return { id };
    },
  });
</script>
```

我们的 `route` 变量包含当前路由的实例。它还包含我们传入的任何参数。我们可以从这里获取 `id` 参数并将其显示在屏幕上。

## 路由器历史模式

Vue Router 配备了可配置的历史模式。让我们看看不同的选项以及你可能想要使用每种选项的原因。

- `createWebHistory`：此选项创建 HTML5 历史记录。它利用 History API 实现无需页面重新加载的 URL 导航。这是单页应用最常见的历史模式。如果不确定，请使用 `createWebHistory`。

- `createWebHashHistory`：此选项在你的 URL 中添加一个哈希（`#`）。这对于没有主机或无法完全控制服务器路由的 Web 应用很有用。搜索引擎有时会忽略哈希片段，因此如果 SEO 对你的应用很重要，应改用 `createWebHistory`。

- `createMemoryHistory`：此选项创建一个基于内存的历史记录。这主要用于处理服务器端渲染（SSR）。

## 更多信息

有关使用 Vue Router 在 Vue 中进行路由的更多信息，请查看他们的文档 http://router.vuejs.org/。