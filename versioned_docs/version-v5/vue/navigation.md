---
sidebar_label: 导航/路由
---

# Vue 导航

本指南介绍了在使用 Ionic 和 Vue 构建的应用中路由是如何工作的。

`IonRouterOutlet` 组件底层使用了流行的 [Vue Router](https://router.vuejs.org/) 库。借助 Ionic 和 Vue Router，您可以创建具有丰富页面过渡效果的多页面应用。

您所了解的关于使用 Vue Router 进行路由的一切知识都适用于 Ionic Vue。让我们看看 Ionic Vue 应用的基础知识以及路由如何与之配合。

## 简要说明

在阅读本指南时，您可能会注意到这些概念与没有 Ionic Framework 的 Vue Router 中的概念非常相似。您的观察是正确的！Ionic Vue 利用了 Vue Router 的最佳部分，使得使用 Ionic Framework 构建应用的过渡尽可能无缝。因此，我们建议尽可能依赖 Vue Router 的功能，而不是尝试构建自己的路由解决方案。

## 简单路由

这是一个示例路由配置，定义了一个指向 "/home" URL 的单一路由。当您访问 "/home" 时，路由会渲染 `HomePage` 组件。

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

在应用初始加载时，应用将渲染 `HomePage` 组件，因为这是这里配置的内容。

## 处理重定向

如果我们想在初始加载时访问不同的路径怎么办？为此，我们可以使用路由重定向。重定向的工作方式与典型的路由对象相同，但包含一些不同的键：

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

在我们的重定向中，我们查找应用的索引路径。然后，如果我们加载该路径，我们会重定向到 `home` 路由。

## 导航到不同路由

这很好，但是如何实际导航到某个路由呢？为此，我们可以使用 `router-link` 属性。让我们创建一个新的路由设置：

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

假设我们从 `home` 路由开始，并且想要添加一个按钮，将我们带到 `detail` 路由。我们可以使用以下 HTML 来导航到 `detail` 路由：

```html
<ion-button router-link="/detail">前往详情</ion-button>
```

我们也可以通过使用路由器 API 在应用中编程式导航：

```html
<template>
  <ion-page>
    <ion-content>
      <ion-button @click="() => router.push('/detail')">前往详情</ion-button>
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

两种选项提供相同的导航机制，只是适用于不同的用例。

## 懒加载路由

我们目前设置路由的方式使得它们在加载应用时被包含在同一个初始 chunk 中，这并不总是理想的。相反，我们可以设置路由，使组件在需要时才加载：

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

这里，我们使用与之前相同的设置，只是这次 `DetailPage` 被替换为 import 调用。这将导致 `DetailPage` 组件不再属于应用加载时请求的 chunk 的一部分。

## 共享 URL 与嵌套路由

设置路由时一个常见的混淆点是决定使用共享 URL 还是嵌套路由。本部分将解释两者，并帮助您决定使用哪一种。

### 共享 URL

共享 URL 是一种路由配置，其中路由共享 URL 的相同部分。以下是共享 URL 配置的示例：

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

上述路由被认为是"共享"的，因为它们复用了 URL 中的 `dashboard` 部分。

### 嵌套路由

嵌套路由是一种路由配置，其中路由作为其他路由的子路由列出。以下是嵌套路由配置的示例：

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

上述路由是嵌套的，因为它们位于父路由的 `children` 数组中。请注意，父路由渲染了 `DashboardRouterOutlet` 组件。当您嵌套路由时，需要渲染另一个 `ion-router-outlet` 实例。

### 我应该选择哪种？

当您想从页面 A 过渡到页面 B，同时保留 URL 中两个页面之间的关系时，共享 URL 非常有用。在我们之前的示例中，`/dashboard` 页面上的按钮可以过渡到 `/dashboard/stats` 页面。两个页面之间的关系通过 a) 页面过渡和 b) URL 得以保留。

嵌套路由主要用于当您需要在出口 A 中渲染内容的同时，在嵌套的出口 B 中渲染子内容时。最常见的用例是选项卡。当您加载选项卡 Ionic 启动应用时，您会看到 `ion-tab-bar` 和 `ion-tabs` 组件在第一个 `ion-router-outlet` 中渲染。`ion-tabs` 组件渲染另一个 `ion-router-outlet`，负责渲染每个选项卡的内容。

在移动应用中，嵌套路由有意义的用例非常少。如有疑问，请使用共享 URL 路由配置。我们强烈建议不要在选项卡以外的上下文中使用嵌套路由，因为它可能会使应用导航变得混乱。

## 使用选项卡

使用选项卡时，Ionic Vue 需要知道哪个视图属于哪个选项卡。`IonTabs` 组件在这里就派上用场了，但让我们看看路由设置是什么样的：

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

这里，我们的 `tabs` 路径加载了一个 `Tabs` 组件。我们将每个选项卡作为路由对象放在 `children` 数组中提供。在这个例子中，我们将路径命名为 `tabs`，但这是可以自定义的。

让我们先来看看我们的 `Tabs` 组件：

```html
<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon :icon="triangle" />
            <ion-label>Tab 1</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon :icon="ellipse" />
            <ion-label>Tab 2</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <ion-icon :icon="square" />
            <ion-label>Tab 3</ion-label>
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

如果您之前使用过 Ionic Framework，这应该感觉很熟悉。我们创建一个 `ion-tabs` 组件并提供一个 `ion-tab-bar`。`ion-tab-bar` 提供 `ion-tab-button` 组件，每个组件都有一个 `tab` 属性，该属性与路由器配置中对应的选项卡相关联。我们还提供一个 `ion-router-outlet`，让 `ion-tabs` 有一个出口来渲染不同的选项卡视图。

### 选项卡内的子路由

向选项卡添加额外路由时，应将它们编写为兄弟路由，以父选项卡作为路径前缀。下面的示例将 `/tabs/tab1/view` 路由定义为 `/tabs/tab1` 路由的兄弟路由。由于这个新路由具有 `tab1` 前缀，它将在 `Tabs` 组件内部渲染，并且 Tab 1 在 `ion-tab-bar` 中仍将处于选中状态。

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

`IonRouterOutlet` 组件提供了一个容器来渲染您的视图。它类似于其他 Vue 应用中的 `RouterView` 组件，但 `IonRouterOutlet` 可以在同一个出口中渲染多个页面到 DOM 中。当一个组件在 `IonRouterOutlet` 中渲染时，我们认为这是 Ionic Framework 的"页面"。路由器出口容器控制页面之间的过渡动画，以及控制页面何时创建和销毁。这有助于在视图之间来回切换时保持它们之间的状态。

在模板中设置 `IonRouterOutlet` 时，不应在其内部提供任何内容。虽然可以在子组件中嵌套 `IonRouterOutlet`，但我们不建议这样做，因为它通常会使应用导航变得混乱。更多信息请参见[共享 URL 与嵌套路由](#共享-url-与嵌套路由)。

## IonPage

`IonPage` 组件包裹 Ionic Vue 应用中的每个视图，并确保页面过渡和堆栈导航正常工作。通过路由器导航到的每个视图都必须包含一个 `IonPage` 组件。

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">Hello World</ion-content>
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

通过 `IonModal` 或 `IonPopover` 呈现的组件通常不需要 `IonPage` 组件，除非您需要一个包装元素。在这种情况下，我们建议使用 `IonPage`，以便组件尺寸仍能正确计算。

## 访问 IonRouter 实例

在某些用例中，您可能需要从 Vue 应用程序中访问 `IonRouter` 实例。例如，当用户在 Android 上按下硬件返回按钮时，您可能想知道是否处于应用的根页面。对于这类用例，您可以将 `IonRouter` 依赖注入到您的组件中：

```tsx
import { useIonRouter } from '@ionic/vue';

...

export default {
  setup() {
    const ionRouter = useIonRouter();
    if (ionRouter.canGoBack()) {
      // 在此执行某些操作
    }
  }
}
```

## URL 参数

让我们扩展我们最初的路由示例，以展示如何使用 URL 参数：

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

请注意，我们现在在 `detail` 路径字符串的末尾添加了 `:id`。URL 参数是路由路径中的动态部分。当用户导航到诸如 `/details/1` 的 URL 时，"1" 会被保存到名为 "id" 的参数中，可以在路由渲染时在组件中访问。

让我们看看如何在组件中使用它：

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>详情</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content> 详情 ID: {{ id }} </ion-content>
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

我们的 `route` 变量包含当前路由的实例。它还包含我们传入的任何参数。我们可以从这里获取 `id` 参数并显示在屏幕上。

## 路由器历史模式

Vue Router 提供了可配置的历史记录模式。让我们看看不同的选项以及为什么要使用每一种。

- `createWebHistory`：此选项创建 HTML5 历史记录。它利用 History API 实现无需页面重新加载的 URL 导航。这是单页应用中最常见的历史记录模式。如有疑问，请使用 `createWebHistory`。

- `createWebHashHistory`：此选项在 URL 中添加哈希 (`#`)。这对于没有主机或无法完全控制服务器路由的 Web 应用非常有用。搜索引擎有时会忽略哈希片段，因此如果 SEO 对您的应用很重要，您应该改用 `createWebHistory`。

- `createMemoryHistory`：此选项创建基于内存的历史记录。主要用于处理服务器端渲染 (SSR)。

## 更多信息

有关使用 Vue Router 进行路由的更多信息，请查看他们的文档：http://router.vuejs.org/。
