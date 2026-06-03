---
title: Vue 导航
sidebar_label: 导航/路由
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<head>
  <title>Vue 导航：使用 Ionic + Vue Router 创建多页面应用</title>
  <meta
    name="description"
    content="本 Vue 导航指南涵盖了路由在 Vue 应用中的工作原理。了解如何使用 Ionic 和 Vue Router 创建具有丰富页面过渡效果的多页面应用。"
  />
</head>

本指南涵盖了在使用 Ionic 和 Vue 构建的应用中路由此如何工作。

`IonRouterOutlet` 组件底层使用了流行的 [Vue Router](https://router.vuejs.org/) 库。通过 Ionic 和 Vue Router，你可以创建具有丰富页面过渡效果的多页面应用。

你对 Vue Router 路由的了解都适用于 Ionic Vue。让我们来看看 Ionic Vue 应用的基础知识以及路由如何与它配合工作。

## 简要说明

在阅读本指南时，你可能会注意到这些概念与不带 Ionic Framework 的 Vue Router 中的概念非常相似。你的观察是正确的！Ionic Vue 利用了 Vue Router 的最佳部分，使向 Ionic Framework 构建应用的过渡尽可能无缝。因此，我们建议尽可能依赖 Vue Router 的功能，而不是尝试构建自己的路由解决方案。

## 简单路由

这是一个示例路由配置，定义了到 "/home" URL 的单个路由。当你访问 "/home" 时，路由渲染 `HomePage` 组件。

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

在应用初始加载时，应用将渲染 `HomePage` 组件，因为这里进行了相应配置。

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

在我们的重定向中，查找应用的索引路径。如果加载该路径，则将其重定向到 `home` 路由。

## 导航到不同路由

这些都很好，但如何实际导航到路由呢？为此，我们可以使用 `router-link` 属性。让我们创建一个新的路由设置：

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

假设我们从 `home` 路由开始，想要添加一个按钮导航到 `detail` 路由。我们可以使用以下 HTML 导航到 `detail` 路由：

```html
<ion-button router-link="/detail">转到详情</ion-button>
```

我们还可以使用路由 API 以编程方式在应用中导航：

```html
<template>
  <ion-page>
    <ion-content>
      <ion-button @click="() => router.push('/detail')">转到详情</ion-button>
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

两种选项都提供相同的导航机制，只是适用于不同的用例。

### 使用 `router-link` 导航

`router-link` 属性可以设置在任何 Ionic Vue 组件上，当组件被点击时，路由将导航到指定的路由。`router-link` 属性接受字符串值以及命名路由，就像 Vue Router 的 `router.push` 一样。为了获得额外控制，还可以设置 `router-direction` 和 `router-animation` 属性。

`router-direction` 属性接受 `forward`、`back` 或 `none` 值，用于控制页面过渡的方向。

`router-animation` 属性接受一个 `AnimationBuilder` 函数，用于提供仅在被点击组件上使用的自定义页面过渡。`AnimationBuilder` 类型是一个返回 Ionic Animation 实例的函数。有关在 Ionic Vue 中使用动画的更多信息，请参阅[动画文档](../utilities/animations)。

```html
<ion-button router-link="/page2" router-direction="back" :router-animation="myAnimation">点击我</ion-button>
```

### 使用 `useIonRouter` 导航

使用 `router-link` 的一个缺点是你无法在导航之前运行自定义代码。这使得在导航之前发起网络请求等任务变得困难。你可以直接使用 Vue Router，但那样会失去对页面过渡的控制。这就是 `useIonRouter` 工具有用的地方。

`useIonRouter` 工具是一个函数，提供编程导航的方法，同时完全控制页面过渡。这使得在导航之前运行自定义代码变得容易。

第一个示例让我们使用自定义页面过渡将新页面推送到堆栈上：

```js
import { defineComponent } from 'vue';
import { useIonRouter } from '@ionic/vue';
import { customAnimation } from '@/animations/customAnimation';

export default defineComponent({
  ...,
  setup() {
    const ionRouter = useIonRouter();

    ionRouter.push('/page2', customAnimation);
  }
});
```

`useIonRouter` 提供了便捷的 `push`、`replace`、`back` 和 `forward` 方法，使执行常见导航操作变得容易。它还提供了一个 `navigate` 方法，可用于更复杂的导航场景：

```js
import { defineComponent } from 'vue';
import { useIonRouter } from '@ionic/vue';
import { customAnimation } from '@/animations/customAnimation';

export default defineComponent({
  ...,
  setup() {
    const ionRouter = useIonRouter();

    ionRouter.navigate('/page2', 'forward', 'replace', customAnimation);
  }
});
```

上面的示例让应用导航到 `/page2`，并使用向前方向的自定义动画。此外，`replace` 值确保应用在导航时替换当前历史记录条目。

:::note
`useIonRouter` 使用 Vue 的 `inject()` 函数，应仅在 `setup()` 函数内部使用。
:::

有关更多详细信息和类型信息，请参阅 [useIonRouter 文档](./utility-functions#router)。

### 使用 `router.go` 导航

Vue Router 有一个 [router.go](https://router.vuejs.org/api/#go) 方法，允许开发者在应用历史中向前或向后移动。让我们看一个示例。

假设你有以下应用历史：

`/pageA` --> `/pageB` --> `/pageC`

如果你在 `/pageC` 上调用 `router.go(-2)`，你将回到 `/pageA`。如果你随后调用 `router.go(2)`，你将被带到 `/pageC`。

`router.go()` 的一个关键特性是它期望你的应用历史是线性的。这意味着 `router.go()` 不应在使用非线性路由的应用中使用。更多信息请参阅[线性路由与非线性路由](#线性路由与非线性路由)。

## 懒加载路由

目前设置路由的方式使它们在加载应用时被包含在相同的初始代码块中，这并非总是理想的。相反，我们可以设置路由以在需要时加载组件：

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

这里，我们使用与之前相同的设置，只是这次 `DetailPage` 被替换为导入调用。这将导致 `DetailPage` 组件不再是应用加载时请求的代码块的一部分。

## 线性路由与非线性路由

### 线性路由

如果你曾构建过使用路由的 Web 应用，你可能以前使用过线性路由。线性路由意味着你可以通过推入和弹出页面在应用历史中向前或向后移动。

以下是移动应用中线性路由的示例：

<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/linear-routing-demo.mp4')}
  controls
></video>

此示例中的应用历史具有以下路径：

`辅助功能` --> `VoiceOver` --> `语音`

当我们按下返回按钮时，我们按照相同的路由路径返回。线性路由有助于实现简单且可预测的路由行为。这也意味着我们可以使用 Vue Router API，如 [router.go()](#使用-routergo-导航)。

线性路由的缺点是它不允许复杂的用户体验，如标签视图。这就是非线性路由发挥作用的地方。

### 非线性路由

非线性路由是许多学习使用 Ionic 构建移动应用的 Web 开发者可能不熟悉的概念。

非线性路由意味着用户应该返回的视图不一定是屏幕上先前显示的视图。

以下是非线性路由的示例：

<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/non-linear-routing-demo.mp4')}
  controls
></video>

在上面的示例中，我们从 `原创` 标签开始。点击一张卡片将我们带到 `原创` 标签内的 `Ted Lasso` 视图。

从那里，我们切换到 `搜索` 标签。然后，我们再次点击 `原创` 标签，被带回到 `Ted Lasso` 视图。此时，我们已经开始使用非线性路由。

为什么这是非线性路由？我们之前的视图是 `搜索` 视图。然而，在 `Ted Lasso` 视图中按返回按钮应该将我们带回 `原创` 标签根视图。这是因为移动应用中的每个标签都被视为自己的堆栈。[使用标签](#使用标签)一节将更详细地讨论这一点。

如果在 `Ted Lasso` 视图中简单地调用 `router.go(-1)`，我们会回到 `搜索` 视图，这是不正确的。

非线性路由允许实现线性路由无法处理的复杂用户流程。然而，某些线性路由 API（如 `router.go()`）不能在这种非线性环境中使用。这意味着在使用标签或嵌套出口时不应使用 `router.go()`。

### 应该选择哪一个？

我们建议在需要添加非线性路由之前，保持应用尽可能简单。非线性路由非常强大，但它也为移动应用增加了相当大的复杂性。

非线性路由的两种最常见用法是标签和嵌套的 `ion-router-outlet`。我们建议仅在你的应用符合标签或嵌套路由出口用例时才使用非线性路由。

有关标签的更多信息，请参阅[使用标签](#使用标签)。

有关嵌套路由出口的更多信息，请参阅[嵌套路由](#嵌套路由)。

## 共享 URL 与嵌套路由

在设置路由时，一个常见的困惑点是决定使用共享 URL 还是嵌套路由。本指南的这一部分将解释两者，并帮助你决定使用哪一个。

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

上面的路由被认为是"共享"的，因为它们复用了 URL 中的 `dashboard` 部分。

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

上面的路由是嵌套的，因为它们位于父路由的 `children` 数组中。注意父路由渲染了 `DashboardRouterOutlet` 组件。当你嵌套路由时，你需要渲染另一个 `ion-router-outlet` 实例。

### 应该选择哪一个？

当你想从页面 A 过渡到页面 B，同时保持两个页面在 URL 中的关系时，共享 URL 非常有用。在我们之前的示例中，`/dashboard` 页面上的按钮可以过渡到 `/dashboard/stats` 页面。两个页面之间的关系通过 a) 页面过渡和 b) URL 来保持。

当你想要在出口 A 中渲染内容，同时在嵌套出口 B 中渲染子内容时，应使用嵌套路由。你遇到的最常见用例是标签。当你加载标签式 Ionic 启动应用时，你会在第一个 `ion-router-outlet` 中看到 `ion-tab-bar` 和 `ion-tabs` 组件。`ion-tabs` 组件渲染另一个 `ion-router-outlet`，负责渲染每个标签的内容。

在移动应用中，嵌套路由有意义的用例非常少。如有疑问，请使用共享 URL 路由配置。我们强烈建议不要在标签以外的上下文中使用嵌套路由，因为它可能会使应用导航变得混乱。

## 使用标签

使用标签时，Ionic Vue 需要知道哪个视图属于哪个标签。`IonTabs` 组件在这里很有用，但让我们看看它的路由设置是什么样的：

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

这里，我们的 `tabs` 路径加载了一个 `Tabs` 组件。我们将每个标签作为路由对象放在 `children` 数组中。在这个示例中，路径名称为 `tabs`，但这是可以自定义的。

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

如果你以前使用过 Ionic Framework，这应该很熟悉。我们创建一个 `ion-tabs` 组件并提供一个 `ion-tab-bar`。`ion-tab-bar` 提供了 `ion-tab-button` 组件，每个组件都有一个 `tab` 属性，与路由配置中对应的标签相关联。我们还提供了一个 `ion-router-outlet`，让 `ion-tabs` 有一个出口来渲染不同的标签视图。

### Ionic 中标签的工作方式

Ionic 中的每个标签都被视为独立的导航堆栈。这意味着如果你的应用有三个标签，每个标签都有自己的导航堆栈。在每个堆栈中，你可以向前导航（推入视图）和向后导航（弹出视图）。

这个行为很重要，因为它不同于其他基于 Web 的 UI 库中的大多数标签实现。其他库通常将标签作为单个历史堆栈来管理。

由于 Ionic 专注于帮助开发者构建移动应用，Ionic 中的标签被设计为尽可能匹配原生移动标签。因此，Ionic 标签中可能存在一些不同于你在其他 UI 库中看到的标签实现的行为。继续阅读以了解更多关于这些差异的信息。

### 标签内的子路由

向标签添加额外路由时，应将它们编写为兄弟路由，以父标签作为路径前缀。下面的示例将 `/tabs/tab1/view` 路由定义为 `/tabs/tab1` 路由的兄弟路由。由于这个新路由具有 `tab1` 前缀，它将在 `Tabs` 组件内部渲染，并且标签 1 仍将在 `ion-tab-bar` 中被选中。

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

### 在标签之间切换

由于每个标签都是自己的导航堆栈，重要的是要注意这些导航堆栈永远不应相互交互。这意味着标签 1 中不应有将用户路由到标签 2 的按钮。换句话说，标签只能通过用户点击标签栏中的标签按钮来切换。

实践中一个很好的例子是 iOS App Store 和 Google Play Store 移动应用。这两个应用都提供标签式界面，但都不会将用户路由到跨标签的页面。例如，iOS App Store 中的"游戏"标签永远不会将用户导航到"搜索"标签，反之亦然。

让我们看一下使用标签时的一些常见错误。

**多个标签引用的设置标签**

一种常见做法是将设置视图作为自己的标签。如果开发者需要展示多个嵌套的设置菜单，这很好。但是，其他标签不应尝试路由到设置标签。正如我们上面提到的，设置标签唯一应该被激活的方式是用户点击相应的标签按钮。

如果你发现你的标签需要引用设置标签，我们建议使用 `ion-modal` 将设置视图作为模态框。这是在 iOS App Store 应用中采用的做法。通过这种方法，任何标签都可以呈现模态框，而不会破坏每个标签作为自己堆栈的移动标签模式。

下面的示例展示了 iOS App Store 应用如何从多个标签呈现"账户"视图。通过在模态框中呈现"账户"视图，应用可以在移动标签最佳实践中在多个标签中显示相同的视图。

<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/tabs-account-demo.mp4')}
  controls
></video>

**跨标签复用视图**

另一种常见做法是在多个标签中呈现相同的视图。开发者通常尝试通过将视图放在单个标签中，然后让其他标签路由到该标签来实现。正如我们上面提到的，这打破了移动标签模式，应该避免。

相反，我们建议在每个标签中引用相同组件的路由。这是 Spotify 等流行应用采用的做法。例如，你可以从"首页"、"搜索"和"你的音乐库"标签访问专辑或播客。在访问专辑或播客时，用户停留在该标签内。应用通过为每个标签创建路由并共享代码库中的公共组件来实现这一点。

下面的示例展示了 Spotify 应用如何复用相同的专辑组件在多个标签中显示内容。注意每张截图显示的是相同的专辑，但来自不同的标签。

|                     首页标签                       |                      搜索标签                       |
| :-------------------------------------------------: | :---------------------------------------------------: |
| <img src={useBaseUrl('img/usage/tabs-home.jpg')} /> | <img src={useBaseUrl('img/usage/tabs-search.jpg')} /> |

## 组件

### IonRouterOutlet

`IonRouterOutlet` 组件提供了一个容器来渲染你的视图。它类似于其他 Vue 应用中的 `RouterView` 组件，但 `IonRouterOutlet` 可以在同一个出口的 DOM 中渲染多个页面。当一个组件在 `IonRouterOutlet` 中渲染时，我们将其视为 Ionic Framework 的"页面"。路由出口容器控制页面之间的过渡动画，以及控制页面何时被创建和销毁。这有助于在页面之间切换时保持视图之间的状态。

在模板中设置 `IonRouterOutlet` 时，不应在其内部提供任何内容。虽然 `IonRouterOutlet` 可以嵌套在子组件中，但我们建议不要这样做，因为它通常会使应用导航变得混乱。更多信息请参阅[共享 URL 与嵌套路由](#共享-url-与嵌套路由)。

### IonPage

`IonPage` 组件包裹 Ionic Vue 应用中的每个视图，使页面过渡和堆栈导航能正常工作。每个使用路由导航到的视图都必须包含一个 `IonPage` 组件。

`IonPage` 对于正确的样式也是必需的。它提供了一个 flex 容器，确保页面内容（如 `IonContent`）被正确调整大小，并且不会与 `IonTabBar` 等其他 UI 元素重叠。

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>首页</ion-title>
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

通过 `IonModal` 或 `IonPopover` 呈现的组件通常不需要 `IonPage` 组件，除非你需要一个包装元素。在这种情况下，我们建议使用 `IonPage`，以便组件尺寸仍能正确计算。

## 函数

### useIonRouter

▸ **useIonRouter**(): [`UseIonRouterResult`](utility-functions#useionrouterresult)

返回 Ionic 路由实例，包含用于导航、自定义页面过渡和原生功能路由上下文的 API 方法。此函数可以与 Vue 的 [`useRouter`](https://router.vuejs.org/api/index.html#userouter) 函数结合使用。

使用示例请参考我们的[工具函数](utility-functions#useionrouter)。

## URL 参数

让我们扩展原来的路由示例，展示如何使用 URL 参数：

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

注意我们在 `detail` 路径字符串的末尾添加了 `:id`。URL 参数是路由路径中的动态部分。当用户导航到诸如 `/details/1` 的 URL 时，"1"被保存在名为 "id" 的参数中，可以在路由渲染的组件中访问。

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

我们的 `route` 变量包含当前路由的实例。它还包含我们传递的任何参数。我们可以从此处获取 `id` 参数并将其显示在屏幕上。

## 路由历史

Vue Router 提供了可配置的历史模式。让我们看看不同的选项以及为什么要使用它们。

- `createWebHistory`：此选项创建 HTML5 历史。它利用 History API 实现无需页面刷新的 URL 导航。这是单页应用中最常见的历史模式。如有疑问，请使用 `createWebHistory`。

- `createWebHashHistory`：此选项在 URL 中添加哈希（`#`）。这对于没有主机或无法完全控制服务器路由的 Web 应用很有用。搜索引擎有时会忽略哈希片段，因此如果你的应用注重 SEO，应改用 `createWebHistory`。

- `createMemoryHistory`：此选项创建基于内存的历史。主要用于处理服务端渲染（SSR）。

## 更多信息

有关使用 Vue Router 在 Vue 中进行路由的更多信息，请查看其文档：http://router.vuejs.org/。
