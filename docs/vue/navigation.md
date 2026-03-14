---
title: Vue 导航
sidebar_label: 导航与路由
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<head>
  <title>Vue 导航：使用 Ionic + Vue Router 创建多页面应用</title>
  <meta
    name="description"
    content="本 Vue 导航指南介绍了路由在 Vue 应用中的工作原理。了解如何使用 Ionic 和 Vue Router 创建具有丰富页面过渡效果的多页面应用。"
  />
</head>

本指南将介绍路由在基于 Ionic 和 Vue 构建的应用中的工作原理。

`IonRouterOutlet` 组件底层使用了流行的 [Vue Router](https://router.vuejs.org/) 库。通过 Ionic 和 Vue Router，你可以创建具有丰富页面过渡效果的多页面应用。

你所了解的关于 Vue Router 的所有知识都可以直接应用于 Ionic Vue。接下来，我们看看 Ionic Vue 应用的基础知识以及路由是如何与之协同工作的。

## 简要说明

在阅读本指南时，你可能会注意到其中大部分概念与不使用 Ionic Framework 时的 Vue Router 概念非常相似。你的观察是正确的！Ionic Vue 充分利用了 Vue Router 的优秀特性，使得向使用 Ionic Framework 构建应用的过渡尽可能无缝。因此，我们建议尽可能依赖 Vue Router 的功能，而不是尝试构建自己的路由解决方案。

## 一个简单的路由配置

这是一个简单的路由配置示例，它定义了一个指向 "/home" URL 的单一路由。当你访问 "/home" 时，该路由会渲染 `HomePage` 组件。

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

在应用初始加载时，由于这里的配置，应用会渲染 `HomePage` 组件。

## 处理重定向

如果我们想在初始加载时进入一个不同的路径呢？这时我们可以使用路由重定向。重定向的工作方式与典型的路由对象类似，但包含一些不同的键：

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

在我们的重定向配置中，我们捕获应用的根路径。然后，当加载根路径时，我们会重定向到 `home` 路由。

## 导航到不同路由

这都很棒，但实际中如何导航到一个路由呢？为此，我们可以使用 `router-link` 属性。让我们创建一个新的路由配置：

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

假设我们从 `home` 路由开始，想添加一个按钮带我们进入 `detail` 路由。我们可以使用以下 HTML 导航到 `detail` 路由：

```html
<ion-button router-link="/detail">进入详情页</ion-button>
```

我们也可以在应用中使用路由 API 进行编程式导航：

```vue
<template>
  <ion-page>
    <ion-content>
      <ion-button @click="() => router.push('/detail')">进入详情页</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonContent, IonPage } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
```

这两种方式都提供了相同的导航机制，只是适用于不同的使用场景。

### 使用 `router-link` 导航

`router-link` 属性可以设置在任何 Ionic Vue 组件上，当点击该组件时，路由将导航到指定的路径。`router-link` 属性接受字符串值以及命名路由，就像 Vue Router 的 `router.push` 一样。为了更精细的控制，还可以设置 `router-direction` 和 `router-animation` 属性。

`router-direction` 属性接受 `"forward"`、`"back"` 或 `"root"` 这几个值，用于控制页面过渡的方向。

`router-animation` 属性接受一个 `AnimationBuilder` 函数，用于提供一个自定义的页面过渡动画，该动画仅在点击设置了此属性的组件时使用。`AnimationBuilder` 类型是一个返回 Ionic 动画实例的函数。有关在 Ionic Vue 中使用动画的更多信息，请参阅 [动画文档](../utilities/animations)。

```html
<ion-button router-link="/page2" router-direction="back" :router-animation="myAnimation">点击我</ion-button>
```

### 使用 `useIonRouter` 导航

使用 `router-link` 的一个缺点是，你无法在导航前执行自定义代码。这使得诸如在导航前发起网络请求之类的任务变得困难。你可以直接使用 Vue Router，但这样又会失去对页面过渡的控制。这就是 `useIonRouter` 工具函数的用武之地。

`useIonRouter` 是一个函数，它提供了一些方法，让你可以在完全控制页面过渡的同时进行编程式导航。这使得在导航前运行自定义代码变得容易。

第一个示例展示了如何通过自定义页面过渡将新页面推入堆栈：

```js
import { useIonRouter } from '@ionic/vue';
import { customAnimation } from '@/animations/customAnimation';

const ionRouter = useIonRouter();
ionRouter.push('/page2', customAnimation);
```

`useIonRouter` 提供了便捷的 `push`、`replace`、`back` 和 `forward` 方法，使得执行常见的导航操作变得简单。它还提供了一个 `navigate` 方法，可用于更复杂的导航场景：

```js
import { useIonRouter } from '@ionic/vue';
import { customAnimation } from '@/animations/customAnimation';

const ionRouter = useIonRouter();
ionRouter.navigate('/page2', 'forward', 'replace', customAnimation);
```

上面的示例让应用导航到 `/page2`，并使用一个自定义的向前动画。此外，`replace` 值确保应用在导航时替换当前的历史记录条目。

:::note
`useIonRouter` 使用了 Vue 的 `inject()` 函数，因此只应在 `setup()` 函数内部使用。
:::

更多详情及类型信息，请参阅 [useIonRouter 文档](./utility-functions#router)。

### 使用 `router.go` 导航

Vue Router 有一个 [router.go](https://router.vuejs.org/api/#go) 方法，允许开发者在应用历史中向前或向后移动。让我们看一个例子。

假设你有以下应用历史记录：

`/pageA` --> `/pageB` --> `/pageC`

如果你在 `/pageC` 上调用 `router.go(-2)`，你将回到 `/pageA`。然后如果你调用 `router.go(2)`，你将被带到 `/pageC`。

`router.go()` 的一个关键特性是它期望你的应用历史是线性的。这意味着 `router.go()` 不应该在使用非线性路由的应用中使用。更多信息请参见 [线性路由与非线性路由](#线性路由与非线性路由)。

## 路由懒加载

我们当前设置路由的方式会导致它们在应用加载时被打包在同一个初始块中，这并不总是理想的。相反，我们可以将路由设置为按需加载组件：

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

这里的设置与之前相同，只是这次 `DetailPage` 被替换成了一个 import 函数。这将导致 `DetailPage` 组件不再属于应用加载时请求的初始代码块。

## 线性路由与非线性路由

### 线性路由

如果你构建过使用路由的 Web 应用，你可能以前使用过线性路由。线性路由意味着你可以通过推入和弹出页面在应用历史中向前或向后移动。

以下是移动应用中线性路由的一个示例：

<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/linear-routing-demo.mp4')}
  controls
></video>

此示例中的应用历史记录具有以下路径：

`辅助功能` --> `旁白` --> `语音`

当我们按下返回按钮时，我们会沿着相同的路由路径反向返回。线性路由有助于实现简单且可预测的路由行为。这也意味着我们可以使用诸如 [router.go()](#使用-routergo-导航) 之类的 Vue Router API。

线性路由的缺点是无法实现复杂的用户体验，比如标签视图。这时就需要非线性路由登场了。

### 非线性路由

对于许多学习使用 Ionic 构建移动应用的 Web 开发者来说，非线性路由可能是一个新概念。

非线性路由意味着用户应该返回的视图不一定是屏幕上先前显示的视图。

以下是非线性路由的一个示例：

<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/non-linear-routing-demo.mp4')}
  controls
></video>

在上面的例子中，我们从“原创”标签页开始。点击一张卡片，我们进入“原创”标签页内的《泰德·拉索》视图。

从这里，我们切换到“搜索”标签页。然后，我们再次点击“原创”标签页，又回到了《泰德·拉索》视图。此时，我们开始使用非线性路由。

为什么这是非线性路由？我们之前的视图是“搜索”视图。然而，在《泰德·拉索》视图上按返回按钮，应该带我们回到“原创”标签页的根视图。这是因为移动应用中的每个标签页都被视为其自己的独立堆栈。[标签页的使用](#标签页的使用) 部分会更详细地讨论这一点。

如果在《泰德·拉索》视图上按返回按钮只是简单地调用 `router.go(-1)`，我们会回到“搜索”视图，这显然是错误的。

非线性路由支持线性路由无法处理的复杂用户流程。但是，某些线性路由 API（如 `router.go()`）不能在这种非线性环境中使用。这意味着在使用标签页或嵌套路由出口时，不应使用 `router.go()`。

### 我应该选择哪一种？

我们建议在需要添加非线性路由之前，尽量保持应用程序的简单性。非线性路由非常强大，但它也给移动应用增加了相当的复杂性。

非线性路由最常见的两种用途是标签页和嵌套的 `ion-router-outlet`。我们建议仅在应用满足标签页或嵌套路由出口用例时，才使用非线性路由。

更多关于标签页的信息，请参阅 [标签页的使用](#标签页的使用)。

更多关于嵌套路由出口的信息，请参阅 [嵌套路由](#嵌套路由)。

## 共享 URL 与嵌套路由

在设置路由时，一个常见的困惑点是决定使用共享 URL 还是嵌套路由。本部分指南将解释这两者，并帮助你决定使用哪一种。

### 共享 URL

共享 URL 是一种路由配置，其中路由共享 URL 的某些部分。以下是一个共享 URL 配置的示例：

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

上述路由被认为是“共享”的，因为它们重用了 URL 中的 `dashboard` 部分。

### 嵌套路由

嵌套路由是一种路由配置，其中路由作为其他路由的子路由列出。以下是一个嵌套路由配置的示例：

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

上述路由是嵌套的，因为它们位于父路由的 `children` 数组中。注意，父路由渲染了 `DashboardRouterOutlet` 组件。当你嵌套路由时，你需要渲染另一个 `ion-router-outlet` 实例。

### 我应该选择哪一种？

当你想要从页面 A 过渡到页面 B，同时在 URL 中保留两个页面之间的关系时，共享 URL 非常有用。在我们之前的例子中，`/dashboard` 页面上的按钮可以过渡到 `/dashboard/stats` 页面。这两个页面之间的关系通过 a) 页面过渡和 b) URL 得以保留。

当你想要在出口 A 中渲染内容，同时在嵌套的出口 B 中渲染子内容时，应该使用嵌套路由。你最常遇到的用例就是标签页。当你加载一个 Ionic 标签页启动应用时，你会看到 `ion-tab-bar` 和 `ion-tabs` 组件渲染在第一个 `ion-router-outlet` 中。`ion-tabs` 组件会渲染另一个 `ion-router-outlet`，负责渲染每个标签页的内容。

在移动应用中，嵌套路由合理的用例非常少。如果有疑问，请使用共享 URL 路由配置。我们强烈建议不要在除标签页以外的上下文中使用嵌套路由，因为它很容易使应用的导航变得混乱。

## 标签页的使用

当使用标签页时，Ionic Vue 需要知道哪个视图属于哪个标签页。`IonTabs` 组件在这里就派上了用场，但让我们先看看相应的路由设置是什么样的：

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

这里，我们的 `tabs` 路径加载了一个 `Tabs` 组件。我们将每个标签页作为路由对象放在 `children` 数组中。在这个例子中，我们将路径命名为 `tabs`，但这是可以自定义的。

我们先来看看 `Tabs` 组件：

```vue
<template>
  <ion-page>
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
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
```

如果你之前使用过 Ionic Framework，应该会感到熟悉。我们创建了一个 `ion-tabs` 组件并提供了一个 `ion-tab-bar`。`ion-tab-bar` 提供了 `ion-tab-button` 组件，每个组件都有一个 `tab` 属性，该属性与路由配置中对应的标签页相关联。我们还提供了一个 `ion-router-outlet`，为 `ion-tabs` 提供一个出口来渲染不同的标签页视图。

### Ionic 中标签页的工作原理

Ionic 中的每个标签页都被视为一个独立的导航堆栈。这意味着如果你的应用中有三个标签页，每个标签页都有自己的导航堆栈。在每个堆栈中，你可以向前导航（推入视图）和向后导航（弹出视图）。

理解这个行为很重要，因为它不同于大多数其他基于 Web 的 UI 库中的标签页实现。其他库通常将标签页作为一个单一的历史堆栈来管理。

由于 Ionic 专注于帮助开发者构建移动应用，其标签页设计旨在尽可能接近原生移动标签页。因此，Ionic 标签页中的某些行为可能与你见过的其他 UI 库中的标签页实现有所不同。请继续阅读以了解更多关于这些差异的信息。

### 标签页内的子路由

当向标签页添加额外路由时，你应该将它们写成兄弟路由，并以父标签页的路径作为前缀。下面的例子将 `/tabs/tab1/view` 路由定义为 `/tabs/tab1` 路由的兄弟路由。由于这个新路由有 `tab1` 前缀，它将在 `Tabs` 组件内部渲染，并且标签页 1 仍然会在 `ion-tab-bar` 中被选中。

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

### 在标签页间切换

由于每个标签页都是自己的导航堆栈，需要注意的是，这些导航堆栈永远不应该相互交互。这意味着标签页 1 中不应该有一个将用户路由到标签页 2 的按钮。换句话说，标签页的切换只应通过用户在标签栏中点击标签按钮来进行。

这方面的典型例子是 iOS App Store 和 Google Play Store 移动应用。这两个应用都提供了标签页界面，但它们都不会将用户路由到不同的标签页。例如，iOS App Store 应用中的“游戏”标签页永远不会将用户引导至“搜索”标签页，反之亦然。

让我们来看看一些使用标签页时常犯的错误。

**多个标签页引用的设置标签页**

一种常见的做法是将设置视图作为自己的标签页。如果开发者需要呈现多个嵌套的设置菜单，这很好。但是，其他标签页永远不应该尝试路由到设置标签页。正如我们上面提到的，激活设置标签页的唯一方式应该是用户点击相应的标签按钮。

如果你发现你的标签页需要引用设置标签页，我们建议使用 `ion-modal` 将设置视图作为一个模态框。这是 iOS App Store 应用中的一种做法。通过这种方法，任何标签页都可以呈现这个模态框，而不会破坏每个标签页独立堆栈的移动标签页模式。

下面的例子展示了 iOS App Store 应用如何处理从多个标签页呈现“帐户”视图。通过在模态框中呈现“帐户”视图，应用可以在移动标签页的最佳实践范围内，实现在多个标签页中展示相同视图。

<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/tabs-account-demo.mp4')}
  controls
></video>

**跨标签页复用视图**

另一种常见的做法是在多个标签页中展示同一个视图。开发者通常试图通过让该视图包含在单个标签页中，然后让其他标签页路由到那个标签页来实现。如上所述，这破坏了移动标签页的模式，应该避免。

相反，我们建议在每个标签页中创建引用相同组件的路由。这是 Spotify 等流行应用中的做法。例如，你可以从“主页”、“搜索”和“你的资料库”标签页访问同一张专辑或播客。当访问专辑或播客时，用户停留在当前标签页内。应用通过为每个标签页创建路由，并在代码库中共享一个公共组件来实现这一点。

下面的例子展示了 Spotify 应用如何复用同一个专辑组件在多个标签页中展示内容。注意，每张截图都显示了相同的专辑，但来自不同的标签页。

|                      主页标签页                       |                       搜索标签页                       |
| :-------------------------------------------------: | :---------------------------------------------------: |
| <img src={useBaseUrl('img/usage/tabs-home.jpg')} /> | <img src={useBaseUrl('img/usage/tabs-search.jpg')} /> |

## 组件

### IonRouterOutlet

`IonRouterOutlet` 组件提供了一个容器来渲染你的视图。它类似于其他 Vue 应用中的 `RouterView` 组件，但区别在于 `IonRouterOutlet` 可以在同一个出口中在 DOM 中渲染多个页面。当一个组件在 `IonRouterOutlet` 中渲染时，我们将其视为 Ionic Framework 的“页面”。路由出口容器控制页面之间的过渡动画，以及控制页面的创建和销毁时机。这有助于在视图间来回切换时保持它们的状态。

在模板中设置 `IonRouterOutlet` 时，不应在其内部提供任何内容。虽然 `IonRouterOutlet` 可以嵌套在子组件中，但我们不建议这样做，因为它通常会使应用中的导航变得混乱。更多信息请参阅 [共享 URL 与嵌套路由](#共享-url-与嵌套路由)。

### IonPage

`IonPage` 组件包裹 Ionic Vue 应用中的每个视图，使得页面过渡和堆栈导航能够正常工作。通过路由导航到的每个视图都必须包含一个 `IonPage` 组件。

`IonPage` 对于正确的样式也是必需的。它提供了一个 flex 容器，确保页面内容（如 `IonContent`）尺寸正确，并且不会与其他 UI 元素（如 `IonTabBar`）重叠。

```vue
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

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>
```

通过 `IonModal` 或 `IonPopover` 呈现的组件通常不需要 `IonPage` 组件，除非你需要一个包裹元素。在这种情况下，我们建议使用 `IonPage`，以确保组件尺寸能被正确计算。

## 函数

### useIonRouter

▸ **useIonRouter**(): [`UseIonRouterResult`](utility-functions#useionrouterresult)

返回 Ionic 路由实例，其中包含用于导航、自定义页面过渡和为原生功能提供路由上下文的 API 方法。此函数可以与 Vue 的 [`useRouter`](https://router.vuejs.org/api/index.html#userouter) 函数结合使用。

有关用法示例，请参考我们的 [实用函数](utility-functions#useionrouter)。

## URL 参数

让我们扩展一下最初的路由示例，以展示如何使用 URL 参数：

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

注意，我们在 `detail` 路径的末尾添加了 `:id`。URL 参数是路由路径中的动态部分。当用户导航到像 `/details/1` 这样的 URL 时，"1" 会被保存到名为 "id" 的参数中，可以在路由渲染的组件内访问。

让我们看看如何在组件中使用它：

```vue
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

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { id } = route.params;
</script>
```

我们的 `route` 变量包含了当前路由的实例，也包含了我们传递进来的任何参数。我们可以从这里获取 `id` 参数并将其显示在屏幕上。

## 路由历史模式

Vue Router 提供了可配置的历史模式。让我们看看不同的选项以及你可能想要使用每种选项的原因。

- `createWebHistory`：此选项创建基于 HTML5 的历史记录。它利用 History API 在不重新加载页面的情况下实现 URL 导航。这是单页应用最常见的历史模式。如有疑问，请使用 `createWebHistory`。

- `createWebHashHistory`：此选项会在你的 URL 中添加一个哈希（`#`）。这对于没有主机或无法完全控制服务器路由的 Web 应用非常有用。搜索引擎有时会忽略哈希片段，因此如果 SEO 对你的应用很重要，你应该改用 `createWebHistory`。

- `createMemoryHistory`：此选项创建基于内存的历史记录。它主要用于处理服务器端渲染。

## 更多信息

有关使用 Vue Router 进行路由的更多信息，请查看其官方文档：http://router.vuejs.org/。