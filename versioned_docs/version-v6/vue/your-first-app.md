---
title: '你的第一个 Ionic 应用：Vue 版'
sidebar_label: 构建你的第一个应用
---

<head>
  <title>Vue 分步教程：使用 Vue 运行你的第一个 Ionic 应用</title>
  <meta
    name="description"
    content="本 Vue 教程通过逐步创建一个真实应用，教授 Ionic 应用开发的基础知识。学习如何使用 Vue 运行你的第一个 Ionic 应用。"
  />
</head>

Ionic 的一大优势在于，只需一份代码库，你就可以使用 HTML、CSS 和 JavaScript 为任何平台构建应用。跟随本教程，我们将通过逐步创建一个真实应用来学习 Ionic 应用开发的基础知识。

以下是在所有 3 个平台上运行的完成应用：

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0ASQ13Y1Rk4"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

## 我们将构建什么

我们将创建一个照片库应用，它能够使用设备摄像头拍照、在网格中显示照片，并将照片永久存储在设备上。

亮点包括：

- 一个基于 Vue 的代码库，使用 Ionic 框架的 [UI 组件](https://ionicframework.com/docs/components) 在 Web、iOS 和 Android 上运行。
- 使用 [Capacitor](https://capacitorjs.com)（Ionic 官方的原生应用运行时）部署为原生 iOS 和 Android 移动应用。
- 照片库功能由 Capacitor 的 [Camera](https://capacitorjs.com/docs/apis/camera)、[Filesystem](https://capacitorjs.com/docs/apis/filesystem) 和 [Preferences](https://capacitorjs.com/docs/apis/preferences) API 提供支持。

你可以在 [GitHub](https://github.com/ionic-team/photo-gallery-capacitor-vue) 上找到本指南中引用的完整应用代码。

## 下载所需工具

立即下载并安装以下工具，以确保获得最佳的 Ionic 开发体验：

- **Node.js**：用于与 Ionic 生态系统交互。[在此下载 LTS 版本](https://nodejs.org/en/)。
- **代码编辑器**：用于编写代码！我们推荐 [Visual Studio Code](https://code.visualstudio.com/)。
- **命令行界面/终端 (CLI)**：
  - **Windows** 用户：为了获得最佳的 Ionic 体验，我们建议使用内置命令行 (cmd) 或以管理员模式运行的 Powershell CLI。
  - **Mac/Linux** 用户：几乎所有终端都可以使用。

## 安装 Ionic 工具

在命令行终端中运行以下命令，安装 Ionic CLI (`ionic`)、`native-run`（用于在设备和模拟器/仿真器上运行原生二进制文件）以及 `cordova-res`（用于生成原生应用图标和启动画面）：

:::note
要在 Visual Studio Code 中打开终端，请转到 终端 -> 新建终端。
:::

```shell
npm install -g @ionic/cli@latest native-run cordova-res
```

:::note
`-g` 选项表示 _全局安装_。当包全局安装时，可能会出现 `EACCES` 权限错误。

考虑设置 npm 以在没有提升权限的情况下全局操作。更多信息请参阅 [解决权限错误](../developing/tips.md#resolving-permission-errors)。
:::

## 创建应用

接下来，创建一个使用 "Tabs" 起始模板并添加 Capacitor 以实现原生功能的 Ionic Vue 应用：

```shell
ionic start photo-gallery tabs --type vue --capacitor
```

这个起始项目包含三个预构建页面和 Ionic 开发的最佳实践。有了现成的通用构建模块，我们可以轻松添加更多功能！

接下来，切换到应用文件夹：

```shell
cd photo-gallery
```

接下来，我们需要安装必要的 Capacitor 插件以使应用的原生功能正常工作：

```shell
npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
```

### PWA Elements

一些 Capacitor 插件，包括 Camera API，通过 Ionic 的 [PWA Elements 库](https://github.com/ionic-team/pwa-elements) 提供基于 Web 的功能和 UI。

它是一个独立的依赖项，因此接下来安装它：

```shell
npm install @ionic/pwa-elements
```

安装完成后，在你选择的代码编辑器中打开项目。

接下来，通过编辑 `src/main.ts` 导入 `@ionic/pwa-elements`。

```tsx
// 在 createApp() 行上方
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// 在平台引导后调用元素加载器
defineCustomElements(window);
```

就这样！现在是有趣的部分——让我们看看应用的实际运行效果。

## 运行应用

在终端中运行以下命令：

```shell
ionic serve
```

瞧！你的 Ionic 应用现在正在 Web 浏览器中运行。你的大部分应用都可以直接在浏览器中构建和测试，这大大提高了开发和测试速度。

## 照片库！！！

有三个标签页。点击 Tab2 标签页。它是一个空白画布，也就是将其改造成照片库的绝佳位置。Ionic CLI 具有实时重载功能，因此当你进行更改并保存时，应用会立即更新！

![动态 GIF 展示 Ionic 应用中的实时重载功能，代码更改会立即更新 Web 浏览器中的应用。](/img/guides/vue/first-app/live-reload.gif 'Ionic 应用中的实时重载功能')

打开 `/src/views/Tab2.vue`。我们看到：

```html
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
```

`ion-header` 代表顶部导航和工具栏，标题为 "Tab 2"。让我们重命名它：

```html
<ion-title>照片库</ion-title>
```

我们将应用的视觉部分放入 `<ion-content>` 中。在本例中，我们将在此添加一个打开设备摄像头并显示摄像头捕获图像的按钮。但首先，删除 `ExploreContainer` 组件，从导入语句开始：

```tsx
import ExploreContainer from '@/components/ExploreContainer.vue';
```

接下来，从默认导出的 `components` 列表和 HTML 中移除组件名称 (`ExploreContainer`)：

```html
<ExploreContainer name="Tab 2 page" />
```

我们将用一个 [浮动操作按钮](https://ionicframework.com/docs/api/fab) (FAB) 替换它。首先，更新 `<script>` 标签内的导入，以包含 Camera 图标以及我们稍后将使用的一些 Ionic 组件：

```tsx
import { camera, trash, close } from 'ionicons/icons';
import {
  IonPage,
  IonHeader,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from '@ionic/vue';
```

接下来，将我们将要使用的新 Ionic 组件添加到默认导出中，并在 `setup()` 方法（[组合式 API](https://v3.vuejs.org/api/composition-api.html#setup) 的一部分）中返回 Ionicons：

```tsx
export default {
  name: 'Tab2',
  components: {
    IonPage,
    IonHeader,
    IonFab,
    IonFabButton,
    IonIcon,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
  },
  setup() {
    return {
      camera,
      trash,
      close,
    };
  },
};
```

然后，将 FAB 添加到页面底部。使用相机图像作为图标，并在点击此按钮时调用 `takePhoto()` 函数（即将实现）：

```html
<ion-content :fullscreen="true">
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button @click="takePhoto()">
      <ion-icon :icon="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

我们稍后将创建 `takePhoto` 方法以及使用 Camera 和其他原生功能的逻辑。

接下来，打开 `src/views/TabsPage.vue`，从导入中移除 `ellipse` 图标，改为导入 `images` 图标：

```tsx
import { images, square, triangle } from 'ionicons/icons';
```

在标签栏 (`<ion-tab-bar>`) 内，将中间标签按钮的标签更改为 "Photos"，将 `ellipse` 图标更改为 `images`：

```html
<ion-tab-button tab="tab2" href="/tabs/tab2">
  <ion-icon :icon="images" />
  <ion-label>照片</ion-label>
</ion-tab-button>
```

最后在 `setup()` 方法中将 `ellipse` 替换为 `images`。

```typescript
  setup() {
    return {
      images,
      square,
      triangle,
    }
  }
```

这只是我们可以用 Ionic 做的所有酷炫事情的开始。接下来，我们将实现 Web 上的拍照功能，然后为 iOS 和 Android 构建应用。