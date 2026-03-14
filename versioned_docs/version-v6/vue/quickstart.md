---
title: Ionic Vue 快速入门
sidebar_label: 快速入门
---

<head>
  <title>使用 Ionic CLI 的 Ionic Vue 快速入门：Vue 基础</title>
  <meta
    name="description"
    content="Ionic Vue 快速入门涵盖 Vue 和 Ionic 的基础知识，包括任何 Ionic 特有的功能。学习如何使用 Ionic CLI 构建 Vue 应用。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

欢迎！本指南将带你了解 Ionic Vue 开发的基础知识。你将学习如何设置开发环境、生成一个简单的项目、探索项目结构，并理解 Ionic 组件的工作原理。这是在构建你的第一个真实应用之前熟悉 Ionic Vue 的绝佳方式。

如果你想了解 Ionic Vue 是什么以及它在 Vue 生态系统中的定位，请查看 [Ionic Vue 概述](overview)。

## 前提条件

开始之前，请确保你的机器上已安装 Node.js 和 npm。
你可以通过运行以下命令来检查：

```shell
node -v
npm -v
```

如果你没有安装 Node.js 和 npm，请[在此下载 Node.js](https://nodejs.org/en/download)（其中包含 npm）。

## 使用 Ionic CLI 创建项目

首先，安装最新的 [Ionic CLI](../cli)：

```shell
npm install -g @ionic/cli
```

然后，运行以下命令来创建并运行一个新项目：

```shell
ionic start myApp blank --type vue

cd myApp
ionic serve
```

运行 `ionic serve` 后，你的项目将在浏览器中打开。

![Ionic Vue 主页截图](/img/guides/quickstart/home-page.png 'Ionic Vue Home Component')

## 探索项目结构

你的新应用目录将如下所示：

```shell
└── src/
    ├── App.vue
    ├── main.ts
    ├── router
    │   └── index.ts
    └── views
       └── HomePage.vue
```

:::info
以下示例中的所有文件路径都是相对于项目根目录的。
:::

让我们逐一查看这些文件，以了解应用的结构。

## 查看应用组件

应用的根组件定义在 `App.vue` 中：

```vue title="src/App.vue"
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
```

这设置了应用的根，使用了 Ionic 的 `ion-app` 和 `ion-router-outlet` 组件。路由出口是页面显示的地方。

## 查看路由

路由定义在 `router/index.ts` 中：

```ts title="src/router/index.ts"
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';

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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
```

当你访问根 URL (`/`) 时，将加载 `HomePage` 组件。

## 查看主页

主页组件定义在 `HomePage.vue` 中，它导入了 Ionic 组件并定义了页面模板：

```vue title="src/views/HomePage.vue"
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>准备创建应用了吗？</strong>
        <p>
          从 Ionic 的
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components"
            >UI 组件</a
          >
          开始
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<!-- ...styles... -->
```

这会创建一个带有标题和可滚动内容区域的页面。第二个标题显示了一个[可折叠大标题](/docs/api/title.md#collapsible-large-titles)，当位于内容顶部时显示，向下滚动时则会折叠以显示第一个标题中的较小标题。

:::tip 了解更多
有关 Ionic 布局组件的详细信息，请参阅 [Header](/docs/api/header.md)、[Toolbar](/docs/api/toolbar.md)、[Title](/docs/api/title.md) 和 [Content](/docs/api/content.md) 文档。
:::

## 添加 Ionic 组件

你可以使用更多 Ionic UI 组件来增强你的主页。例如，在 `ion-content` 的末尾添加一个[按钮](/docs/api/button.md)：

```vue title="src/views/HomePage.vue"
<ion-content>
  <!-- 现有内容 -->

  <ion-button>Navigate</ion-button>
</ion-content>
```

然后，在 `<script>` 标签中导入 `IonButton` 组件：

```vue title="src/views/HomePage.vue"
<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>
```

## 添加新页面

在 `NewPage.vue` 创建一个新页面：

```vue title="src/views/NewPage.vue"
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>New</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">New</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>
```

这会创建一个在[工具栏](/docs/api/toolbar.md)中带有[返回按钮](/docs/api/back-button.md)的页面。返回按钮将自动处理导航回上一页，如果没有历史记录则导航到 `/`。

:::warning
创建自己的页面时，请始终使用 `ion-page` 作为根组件。这对于实现页面间的正确过渡、Ionic 组件依赖的基础 CSS 样式以及应用中一致的布局行为至关重要。
:::

## 导航到新页面

要导航到新页面，首先在 `HomePage` 导入之后，在 `router/index.ts` 的顶部导入它：

```ts title="src/router/index.ts"
import NewPage from '../views/NewPage.vue';
```

然后，在 `routes` 数组中添加其路由：

```ts title="src/router/index.ts"
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
    path: '/new',
    name: 'New',
    component: NewPage,
  },
];
```

完成后，更新 `HomePage.vue` 中的按钮：

```vue title="src/views/HomePage.vue"
<ion-button router-link="/new">Navigate</ion-button>
```

:::info
导航也可以使用 Vue Router 以编程方式执行，并且可以延迟加载路由以获得更好的性能。更多信息请参阅 [Vue 导航文档](/docs/vue/navigation.md)。
:::

## 向新页面添加图标

Ionic Vue 预装了 [Ionicons](https://ionic.io/ionicons/)。你可以通过设置 `ion-icon` 组件的 `icon` 属性来使用任何图标。

更新 `NewPage.vue` 中的导入，以导入 `IonIcon` 以及 `heart` 和 `logoIonic` 图标：

```vue title="src/views/NewPage.vue"
<script setup lang="ts">
import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { heart, logoIonic } from 'ionicons/icons';
</script>
```

然后，将它们包含在 `ion-content` 内部：

```vue title="src/views/NewPage.vue"
<ion-icon :icon="heart"></ion-icon>
<ion-icon :icon="logoIonic"></ion-icon>
```

请注意，我们传递的是导入的 SVG 引用，**而不是**字符串形式的图标名称。

更多信息，请参阅[图标文档](/docs/api/icon.md)和 [Ionicons 文档](https://ionic.io/ionicons/)。

## 调用组件方法

让我们添加一个可以将内容区域滚动到底部的按钮。

更新 `NewPage.vue`，在 `ion-content` 上添加一个 ref，并在现有图标之后添加一个按钮和一些项目：

```vue title="src/views/NewPage.vue"
<ion-content ref="content">
  <ion-button @click="scrollToBottom">Scroll to Bottom</ion-button>

  <!-- 添加大量内容以实现滚动 -->
  <ion-item v-for="i in 50" :key="i">
    <ion-label>Item {{ i }}</ion-label>
  </ion-item>
</ion-content>
```

在脚本部分，添加新的组件导入并定义 `scrollToBottom` 函数：

```vue title="src/views/NewPage.vue"
<script setup lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { heart, logoIonic } from 'ionicons/icons';
import { ref } from 'vue';

const content = ref();

const scrollToBottom = () => {
  content.value.$el.scrollToBottom(300);
};
</script>
```

要调用 Ionic 组件的方法：

1. 为组件创建一个 `ref`
2. 通过 `$el` 访问底层的 Web Component
3. 在 Web Component 上调用方法

这种模式是必需的，因为 Ionic 组件是作为 Web Components 构建的。`$el` 属性让你可以访问定义方法的实际 Web Component 实例。

你可以在每个组件的 API 文档的[方法](/docs/api/content.md#methods)部分找到可用的方法。

## 在设备上运行

Ionic 的组件可以在任何地方工作：iOS、Android 和 PWA。要部署到移动设备，请使用 [Capacitor](https://capacitorjs.com)：

```shell
ionic build
ionic cap add ios
ionic cap add android
```

在各自的 IDE 中打开原生项目：

```shell
ionic cap open ios
ionic cap open android
```

更多信息请参阅 [Capacitor 入门指南](https://capacitorjs.com/docs/getting-started/with-ionic)。

## 使用 TypeScript 或 JavaScript 构建

Ionic Vue 项目默认使用 TypeScript 创建，但如果你愿意，可以轻松转换为 JavaScript。生成一个空白的 Ionic Vue 应用后，按照以下步骤操作：

1. 移除 TypeScript 依赖：

```shell
npm uninstall --save typescript @types/jest @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/cli-plugin-typescript @vue/eslint-config-typescript vue-tsc
```

2. 将所有 `.ts` 文件的扩展名更改为 `.js`。在一个空白的 Ionic Vue 应用中，这将是 `src/router/index.ts`、`src/main.ts` 和 `tests` 目录中的文件。

3. 在 `index.html` 中，将导入的 `<script>` 文件从 `/src/main.ts` 更改为 `/src/main.js`。

4. 从 `.eslintrc.js` 中移除 `@vue/typescript/recommended` 和 `@typescript-eslint/no-explicit-any: 'off'`。

5. 从 `src/router/index.js` 中移除 `Array<RouteRecordRaw>` 和 `RouteRecordRaw` 的导入。

6. 从任何包含它的 Vue 组件的 `script` 标签中移除 `lang="ts"`。在一个空白的 Ionic Vue 应用中，这应该只是 `src/App.vue` 和 `src/views/HomePage.vue`。

7. 删除 `tsconfig.json` 和 `vite-env.d.ts`。

8. 在 package.json 中，将构建脚本从 `"build": "vue-tsc && vite build"` 更改为 `"build": "vite build"`。

9. 安装 terser：`npm i -D terser`。

## 探索更多

本指南涵盖了创建 Ionic Vue 应用、添加导航以及介绍用于原生构建的 Capacitor 的基础知识。要深入了解，请查看：

<DocsCards>

<DocsCard header="构建你的第一个应用" href="your-first-app" icon="/icons/component-content-icon.png">
  <p>使用 Ionic Vue 和原生设备功能构建一个真实的照片库应用。</p>
</DocsCard>

<DocsCard header="Vue 文档" href="https://vuejs.org/guide/introduction.html" icon="/icons/logo-vue-icon.png">
  <p>从官方 Vue 文档中了解更多关于 Vue 的核心概念、工具和最佳实践。</p>
</DocsCard>

<DocsCard header="导航" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>了解如何使用 Vue Router 处理 Ionic Vue 应用中的路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/docs/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，用于构建精美的应用。</p>
</DocsCard>

<DocsCard header="主题" href="/docs/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>学习如何使用 Ionic 强大的主题系统自定义应用的外观和感觉。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>探索如何使用 Capacitor 访问原生设备功能并将你的应用部署到 iOS、Android 和 Web。</p>
</DocsCard>

</DocsCards>