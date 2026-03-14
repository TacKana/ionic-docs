---
title: 添加到现有 Vue 项目
sidebar_label: 添加到现有项目
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>将 Ionic Vue 添加到现有项目：集成指南</title>
  <meta
    name="description"
    content="学习如何将 Ionic Vue 添加到您现有的 Vue 项目中。将 Ionic 组件和功能集成到现有 Vue 应用程序的分步指南。"
  />
</head>

本指南介绍如何将 Ionic Vue 添加到现有的 Vue 项目中。如果您想从头开始一个新项目，请查看 [Ionic Vue 快速入门](/docs/vue/quickstart.md) 指南。要了解 Ionic Vue 如何与 Vue 配合工作，包括版本支持和工具链，请查看 [Ionic Vue 概述](/docs/vue/overview.md)。

:::tip

本指南使用 JavaScript 示例。如果您使用的是 TypeScript，设置过程相同，但需要将文件扩展名 `.js` 替换为 `.ts`。

:::

## 设置

:::info

本指南遵循使用 `create-vue`（使用 Vite）创建的 Vue 应用结构。如果您使用其他工具（如 Vue CLI）启动 Vue 应用，您的文件结构和设置可能会有所不同。

:::

按照以下步骤将 Ionic Vue 添加到您现有的 Vue 项目中：

#### 1. 安装包

```bash
npm install @ionic/vue @ionic/vue-router vue-router
```

#### 2. 配置 Ionic Vue

更新 `src/main.js`，包含 `IonicVue` 并导入所需的 Ionic Framework 样式表：

```javascript title="src/main.js"
import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';

import App from './App.vue';

/* Ionic 组件正常工作所需的核心 CSS */
import '@ionic/vue/css/core.css';

/* 使用 Ionic 构建应用所需的基础 CSS */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

createApp(App).use(IonicVue).mount('#app');
```

:::info

`core.css` 是必需的，而 `normalize.css`、`structure.css` 和 `typography.css` 是推荐的，但不是必需的。它们可以标准化跨浏览器差异、确保正确的滚动行为，并提供一致的排版和表单样式。如果没有它们，您可能需要自行处理这些问题。有关更多详情，请参阅 [全局样式表](/docs/layout/global-stylesheets.md)。

:::

## 使用独立组件

完成上述设置后，您可以在现有的 Vue 应用中使用 Ionic 组件。以下是使用示例：

将 `src/App.vue` 更新为以下内容：

```vue title="src/App.vue"
<template>
  <ion-button>按钮</ion-button>
  <ion-datetime></ion-datetime>
</template>

<script setup lang="ts">
import { IonButton, IonDatetime } from '@ionic/vue';
</script>
```

访问 [组件](/docs/components.md) 页面查看所有可用的 Ionic 组件。

## 使用 Ionic 页面

如果您想使用 Ionic 页面，实现完整的导航和页面过渡效果，请按照以下附加设置步骤操作。

#### 1. 添加额外的 Ionic Framework 样式表

更新 `src/main.js` 中导入的样式表：

```javascript title="src/main.js"
/* Ionic 组件正常工作所需的核心 CSS */
import '@ionic/vue/css/core.css';

/* 使用 Ionic 构建应用所需的基础 CSS */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* 可选的 CSS 工具类，可以注释掉 */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
```

这些样式表设置了整体页面结构，并提供了 [CSS 工具类](/docs/layout/css-utilities.md) 以加快开发速度。部分样式表是可选的。有关哪些样式表是必需的详细信息，请查看 [全局样式表](/docs/layout/global-stylesheets.md)。

#### 2. 设置主题

创建 `src/theme/variables.css` 文件，内容如下：

```css title="src/theme/variables.css"
/* 关于如何创建自定义主题的信息，请参阅：
https://ionicframework.com/docs/theming/ */
```

然后，在 `src/main.js` 中导入该文件以及深色调色板样式表：

```javascript title="src/main.js"
import { createApp } from 'vue';
import App from './App.vue';

import { IonicVue } from '@ionic/vue';

/* Ionic 组件正常工作所需的核心 CSS */
import '@ionic/vue/css/core.css';

/* 使用 Ionic 构建应用所需的基础 CSS */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* 可选的 CSS 工具类，可以注释掉 */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic 深色模式
 * -----------------------------------------------------
 * 更多信息，请参阅：
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* 主题变量 */
import './theme/variables.css';

createApp(App).use(IonicVue).mount('#app');
```

`variables.css` 文件可用于创建自定义的 Ionic Framework 主题。`dark.system.css` 导入可在系统设置为偏好深色外观时为您的 Ionic 应用启用 [深色模式支持](/docs/theming/dark-mode.md)。您可以通过取消注释不同的深色调色板导入或在 `theme/variables.css` 中添加自定义 CSS 变量来自定义主题行为。

#### 3. 更新应用组件

将 `src/App.vue` 更新为以下内容：

```vue title="src/App.vue"
<template>
  <ion-app>
    <ion-router-outlet></ion-router-outlet>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
```

#### 4. 创建首页

在 `src/views/HomePage.vue` 创建新文件，内容如下：

```vue title="src/views/HomePage.vue"
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>首页</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">首页</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>准备好创建应用了吗？</strong>
        <p>
          从 Ionic 开始
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components"
            >UI 组件</a
          >
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
```

#### 5. 设置路由

在 `src/router/index.js` 添加文件，定义路由：

```javascript title="src/router/index.js"
import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';

const routes = [
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

更新 `src/main.js` 以包含路由：

```javascript title="src/main.js"
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Ionic 组件正常工作所需的核心 CSS */
import '@ionic/vue/css/core.css';

/* 使用 Ionic 构建应用所需的基础 CSS */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* 可选的 CSS 工具类，可以注释掉 */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic 深色模式
 * -----------------------------------------------------
 * 更多信息，请参阅：
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* 主题变量 */
import './theme/variables.css';

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
```

全部设置完成！您的 Ionic Vue 应用现已配置了完整的 Ionic 页面支持。运行 `npm run dev` 启动开发服务器并查看您的应用。

## 后续步骤

现在您已将 Ionic Vue 集成到项目中，接下来可以查看：

<DocsCards>

<DocsCard header="导航" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>了解如何在 Ionic Vue 应用中使用 Vue Router 处理路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/docs/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，用于构建精美的应用程序。</p>
</DocsCard>

<DocsCard header="主题" href="/docs/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>学习如何使用 Ionic 强大的主题系统自定义应用的外观和风格。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>探索如何使用 Capacitor 访问原生设备功能，并将您的应用部署到 iOS、Android 和 Web 平台。</p>
</DocsCard>

</DocsCards>