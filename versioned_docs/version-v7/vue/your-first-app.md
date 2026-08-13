---
title: '你的第一个 Ionic 应用：Vue'
sidebar_label: 构建你的第一个应用
---

<head>
  <title>使用 Vue 构建你的第一个 Ionic 移动应用 | Ionic Capacitor 相机</title>
  <meta
    name="description"
    content="本 Vue 教程通过逐步创建一个真实的应用程序，教你 Ionic 应用开发的基础知识。了解如何使用 Vue 运行你的第一个 Ionic 应用。"
  />
</head>

Ionic 的伟大之处在于，只需一套代码库，你就可以使用 HTML、CSS 和 JavaScript 为任何平台构建应用。跟随我们一起通过逐步创建真实的应用程序来学习 Ionic 应用开发的基础知识。

以下是完成后的应用在三个平台上运行的效果：

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0ASQ13Y1Rk4"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

## 我们将构建什么

我们将创建一个相册应用，能够使用设备的相机拍照、以网格形式展示照片，并将它们永久存储在设备上。

主要亮点包括：

- 基于 Vue 的单一代码库，使用 Ionic Framework [UI 组件](../components.md) 在 Web、iOS 和 Android 上运行。
- 通过 Ionic 官方的原生应用运行时 [Capacitor](https://capacitorjs.com) 部署为原生 iOS 和 Android 移动应用。
- 相册功能由 Capacitor 的 [Camera](../native/camera.md)、[Filesystem](../native/filesystem.md) 和 [Preferences](../native/preferences.md) API 提供支持。

本指南中引用的[完整应用代码](https://github.com/ionic-team/tutorial-photo-gallery-vue)可在 GitHub 上找到。

## 下载所需工具

立即下载并安装以下工具，以确保最佳的 Ionic 开发体验：

- **Node.js** — 用于与 Ionic 生态系统交互。[下载 LTS 版本](https://nodejs.org/en/)。
- **代码编辑器** — 用于...编写代码！我们喜欢 [Visual Studio Code](https://code.visualstudio.com/)。
- **命令行界面/终端（CLI）**：
  - **Windows** 用户：为获得最佳 Ionic 体验，我们建议使用内置命令行（cmd）或 PowerShell CLI，并以管理员模式运行。
  - **Mac/Linux** 用户：几乎任何终端都可以使用。

## 安装 Ionic 工具

在命令行终端中运行以下命令，安装 Ionic CLI（`ionic`）、`native-run`（用于在设备和模拟器上运行原生二进制文件）和 `cordova-res`（用于生成原生应用图标和启动画面）：

:::note
要在 Visual Studio Code 中打开终端，请转到"终端 -> 新建终端"。
:::

```shell
npm install -g @ionic/cli native-run cordova-res
```

:::note
`-g` 选项表示_全局安装_。当包全局安装时，可能会出现 `EACCES` 权限错误。

考虑设置 npm 以无需提升权限即可全局运行。有关更多信息，请参见[解决权限错误](../developing/tips.md#解决权限错误)。
:::

## 创建应用

接下来，创建一个使用"Tabs"起始模板并添加 Capacitor 以实现原生功能的 Ionic Vue 应用：

```shell
ionic start photo-gallery tabs --type vue
```

这个起始项目包含了三个预构建页面和 Ionic 开发的最佳实践。由于通用构建模块已经就位，我们可以轻松添加更多功能！

接下来，进入应用文件夹：

```shell
cd photo-gallery
```

然后我们需要安装必要的 Capacitor 插件，以使应用的原生功能正常工作：

```shell
npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
```

### PWA Elements

部分 Capacitor 插件（包括 [Camera API](../native/camera.md)）通过 Ionic [PWA Elements 库](https://github.com/ionic-team/pwa-elements)提供基于 Web 的功能和界面。

这是一个独立的依赖项，接下来安装它：

```shell
npm install @ionic/pwa-elements
```

接下来，通过编辑 `src/main.ts` 导入 `@ionic/pwa-elements`。

```ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { IonicVue } from '@ionic/vue';
// 变更：添加以下导入
import { defineCustomElements } from '@ionic/pwa-elements/loader';

/* ...已有的 Ionic 样式... */

/* 主题变量 */
import './theme/variables.css';

// 变更：在 createApp() 调用之前调用元素加载器
defineCustomElements(window);

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
```

就这样！现在是有趣的部分——让我们看看应用的实际效果。

## 运行应用

接下来运行这个命令：

```shell
ionic serve
```

瞧！你的 Ionic 应用现在运行在 Web 浏览器中了。你可以在浏览器中构建和测试大部分应用功能，大大提高了开发和测试速度。

## 相册

这里有三个标签页。点击"Tab2"标签页。它是一个空白画布，也就是转变为相册的完美位置。Ionic CLI 具有 Live Reload 功能，因此当你做出更改并保存时，应用会立即更新！

![一个动画 GIF 展示 Ionic 应用中的实时重载功能，代码更改会立即更新 Web 浏览器中的应用。](/img/guides/vue/first-app/live-reload.gif 'Ionic 应用中的 Live Reload 功能')

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

`ion-header` 代表顶部导航和工具栏，标题为"Tab 2"（由于 iOS [可折叠大标题](../api/title.md#可折叠大标题) 支持，这里有两个标题）。将两个 `ion-title` 元素重命名为：

```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- 变更：更新标题 -->
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <!-- 变更：更新标题 -->
          <ion-title size="large">Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- ...existing code... -->
    </ion-content>
  </ion-page>
</template>
```

我们将应用的视觉部分放入 `<ion-content>` 中。在这里，我们将添加一个按钮来打开设备相机，并显示相机拍摄的图像。首先在页面底部添加一个[浮动操作按钮](../api/fab.md)（FAB），并将相机图像设置为图标。

```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Photo Gallery</ion-title>
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
// 变更：更新从 `@ionic/vue` 的导入，包含必要的 Ionic 组件
import { IonPage, IonHeader, IonFab, IonFabButton, IonIcon, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
// 变更：移除或注释掉 ExploreContainer 导入
// import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
```

接下来，打开 `src/views/TabsPage.vue`。将中间标签按钮的标签改为"Photos"，并将 `ellipse` 图标改为 `images`。

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
          <ion-label>Photos</ion-label>
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
// 变更：更新导入，移除 `ellipse` 并添加 `images`
import { images, square, triangle } from 'ionicons/icons';
</script>
```

这只是我们可以用 Ionic 做的所有酷炫事情的开始。接下来，在 Web 上实现相机拍照功能，然后为 iOS 和 Android 构建。
