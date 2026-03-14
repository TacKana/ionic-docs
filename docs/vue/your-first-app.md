---
title: '你的第一个 Ionic 应用：Vue'
sidebar_label: 构建你的第一个应用
---

<head>
  <title>使用 Vue 构建你的第一个 Ionic 移动应用 | Ionic Capacitor 相机功能</title>
  <meta
    name="description"
    content="这个 Vue 教程通过一步步创建真实应用，教授 Ionic 应用开发的基础知识。学习如何使用 Vue 运行你的第一个 Ionic 应用。"
  />
</head>

Ionic 最棒的地方在于，你可以使用一个代码库，仅用 HTML、CSS 和 JavaScript 就能为任何平台构建应用。跟随我们的步骤，通过逐步创建一个真实应用来学习 Ionic 应用开发的基础知识。

这是最终应用在所有三个平台上的运行效果：

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0ASQ13Y1Rk4"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

## 我们将构建什么

我们将创建一个照片墙应用，能够使用设备相机拍照、在网格中显示照片，并将照片永久存储在设备上。

主要功能包括：

- 一个基于 Vue 的代码库，使用 Ionic Framework [UI 组件](../components.md) 在 Web、iOS 和 Android 上运行。
- 使用 Ionic 官方原生应用运行时 [Capacitor](https://capacitorjs.com)，部署为原生 iOS 和 Android 移动应用。
- 照片墙功能由 Capacitor [相机](../native/camera.md)、[文件系统](../native/filesystem.md) 和 [首选项](../native/preferences.md) API 提供支持。

你可以在 GitHub 上找到本指南中引用的 [完整应用代码](https://github.com/ionic-team/tutorial-photo-gallery-vue)。

## 下载必需工具

立即下载并安装以下工具，以确保获得最佳的 Ionic 开发体验：

- **Node.js** 用于与 Ionic 生态系统交互。[在此下载 LTS 版本](https://nodejs.org/en/)。
- **代码编辑器** 用于编写代码！我们推荐 [Visual Studio Code](https://code.visualstudio.com/)。
- **命令行界面/终端（CLI）**：
  - **Windows 用户**：为了获得最佳 Ionic 体验，我们建议使用内置命令行（cmd）或 PowerShell CLI，并以管理员模式运行。
  - **Mac/Linux 用户**：几乎任何终端都可以使用。

## 安装 Ionic 工具

在命令行终端中运行以下命令，安装 Ionic CLI（`ionic`）、`native-run`（用于在设备和模拟器/仿真器上运行原生二进制文件）以及 `cordova-res`（用于生成原生应用图标和启动画面）：

:::note
要在 Visual Studio Code 中打开终端，请转到 Terminal -> New Terminal。
:::

```shell
npm install -g @ionic/cli native-run cordova-res
```

:::note
`-g` 选项表示*全局安装*。当包被全局安装时，可能会出现 `EACCES` 权限错误。

考虑设置 npm 使其无需提升权限即可全局操作。更多信息请参阅 [解决权限错误](../developing/tips.md#resolving-permission-errors)。
:::

## 创建应用

接下来，创建一个使用 "Tabs" 起始模板并添加 Capacitor 以实现原生功能的 Ionic Vue 应用：

```shell
ionic start photo-gallery tabs --type vue
```

这个起始项目包含三个预构建页面和 Ionic 开发的最佳实践。有了这些常见的构建模块，我们可以轻松添加更多功能！

接下来，切换到应用文件夹：

```shell
cd photo-gallery
```

接下来，我们需要安装必要的 Capacitor 插件以使应用的原生功能正常工作：

```shell
npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
```

### PWA 元素

一些 Capacitor 插件，包括 [相机 API](../native/camera.md)，通过 Ionic [PWA Elements 库](https://github.com/ionic-team/pwa-elements) 提供基于 Web 的功能和 UI。

它是一个独立的依赖项，所以接下来安装它：

```shell
npm install @ionic/pwa-elements
```

接下来，通过编辑 `src/main.ts` 来导入 `@ionic/pwa-elements`。

```ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { IonicVue } from '@ionic/vue';
// 变更：添加以下导入
import { defineCustomElements } from '@ionic/pwa-elements/loader';

/* ...existing Ionic styles... */

/* Theme variables */
import './theme/variables.css';

// 变更：在 createApp() 调用之前调用元素加载器
defineCustomElements(window);

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
```

搞定！现在进入有趣的部分——让我们看看应用的实际运行效果。

## 运行应用

接下来运行这个命令：

```shell
ionic serve
```

瞧！你的 Ionic 应用现在在 Web 浏览器中运行了。你可以在浏览器中构建和测试大部分应用功能，大大提高了开发和测试速度。

## 照片墙

有三个标签页。点击 "Tab2" 标签。这是一个空白画布，也就是改造成照片墙的绝佳位置。Ionic CLI 具有实时重载功能，所以当你做出更改并保存时，应用会立即更新！

![展示 Ionic 应用中实时重载功能的动画 GIF，代码更改会立即更新浏览器中的应用。](/img/guides/vue/first-app/live-reload.gif 'Ionic 应用中的实时重载功能')

打开 `/src/views/Tab2Page.vue`。我们看到：

```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
```

`ion-header` 代表顶部的导航栏和工具栏，标题为 "Tab 2"（由于 iOS [可折叠大标题](../api/title.md#collapsible-large-titles) 支持，这里有两个标题）。将两个 `ion-title` 元素重命名为：

```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- 变更：更新标题 -->
        <ion-title>照片墙</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <!-- 变更：更新标题 -->
          <ion-title size="large">照片墙</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- ...existing code... -->
    </ion-content>
  </ion-page>
</template>
```

我们将应用的视觉部分放在 `<ion-content>` 中。在这里，我们将添加一个打开设备相机并显示相机捕获图像的按钮。首先在页面底部添加一个 [浮动操作按钮](../api/fab.md)（FAB），并将相机图像设置为图标。

```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>照片墙</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">照片墙</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- 变更：添加浮动操作按钮 -->
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <!-- 变更：移除或注释掉 <ExploreContainer /> -->
      <!-- <ExploreContainer name="Tab 2 page" /> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
// 变更：从 `ionicons/icons` 添加导入
import { camera } from 'ionicons/icons';
// 变更：从 `@ionic/vue` 更新导入以包含必要的 Ionic 组件
import { IonPage, IonHeader, IonFab, IonFabButton, IonIcon, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
// 变更：移除或注释掉 ExploreContainer 导入
// import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
```

接下来，打开 `src/views/TabsPage.vue`。将中间标签按钮的标签更改为 "照片"，将 `ellipse` 图标更改为 `images`。

```vue
<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <!-- 变更：更新图标 -->
          <ion-icon aria-hidden="true" :icon="images" />
          <!-- 变更：更新标签 -->
          <ion-label>照片</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
// 变更：通过移除 `ellipse` 并添加 `images` 来更新导入
import { images, square, triangle } from 'ionicons/icons';
</script>
```

这只是我们使用 Ionic 可以做的所有酷炫功能的开始。接下来，我们将在 Web 上实现相机拍摄功能，然后为 iOS 和 Android 构建应用。