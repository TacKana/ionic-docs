---
title: '你的第一个 Ionic 应用：Angular'
sidebar_label: 构建你的第一个应用
---

<head>
  <title>使用 Angular 构建你的第一个 Ionic 移动应用 | Ionic Capacitor 相机</title>
  <meta
    name="description"
    content="本 Angular 教程通过逐步创建一个真实的应用程序，教你 Ionic 应用开发的基础知识。了解如何使用 Angular 运行你的第一个 Ionic 应用。"
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

:::note
正在寻找本指南涵盖 Ionic 4 和 Cordova 的先前版本？[请参见这里。](../developer-resources/guides/first-app-v4/intro.md)
:::

## 我们将构建什么

我们将创建一个相册应用，能够使用设备相机拍摄照片，以网格形式显示，并永久存储在设备上。

亮点包括：

- 一个基于 Angular 的代码库，使用 Ionic Framework [UI 组件](../components.md)在 Web、iOS 和 Android 上运行。
- 使用 Ionic 官方的原生应用运行时 [Capacitor](https://capacitorjs.com) 部署为原生 iOS 和 Android 移动应用。
- 由 Capacitor [Camera](../native/camera.md)、[Filesystem](../native/filesystem.md) 和 [Preferences](../native/preferences.md) API 驱动的相册功能。

在 GitHub 上找到本指南中引用的[完整应用代码](https://github.com/ionic-team/tutorial-photo-gallery-angular)。

## 下载所需工具

立即下载并安装这些工具，以确保最佳的 Ionic 开发体验：

- **Node.js** 用于与 Ionic 生态系统交互。[在此下载 LTS 版本](https://nodejs.org/en/)。
- **代码编辑器**用于...编写代码！我们是 [Visual Studio Code](https://code.visualstudio.com/) 的粉丝。
- **命令行界面/终端 (CLI)**：
  - **Windows** 用户：为获得最佳 Ionic 体验，我们建议使用内置的命令行 (cmd) 或 Powershell CLI，以管理员模式运行。
  - **Mac/Linux** 用户：几乎任何终端都可以工作。

## 安装 Ionic 工具

在命令行终端中运行以下命令安装 Ionic CLI (`ionic`)、`native-run`（用于在设备和模拟器上运行原生二进制文件）以及 `cordova-res`（用于生成原生应用图标和启动画面）：

:::note
要在 Visual Studio Code 中打开终端，请转到 Terminal -> New Terminal。
:::

```shell
npm install -g @ionic/cli native-run cordova-res
```

:::note
`-g` 选项表示*全局安装*。当全局安装包时，可能会发生 `EACCES` 权限错误。

考虑设置 npm 以无提升权限的方式全局运行。更多信息请参见[解决权限错误](../developing/tips.md#解决权限错误)。
:::

## 创建应用

接下来，创建一个使用"Tabs"启动模板并添加 Capacitor 以实现原生功能的 Ionic Angular 应用：

```shell
ionic start photo-gallery tabs --type=angular
```

:::note

当提示在 `NgModules` 和 `Standalone` 之间选择时，选择 `NgModules`，因为本教程遵循 `NgModules` 方法。

:::

这个启动项目包含了三个预构建页面和 Ionic 开发的最佳实践。有了现成的通用构建块，我们可以轻松添加更多功能！

接下来，进入应用文件夹：

```shell
cd photo-gallery
```

接下来我们需要安装必要的 Capacitor 插件以使应用的原生功能工作：

```shell
npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
```

### PWA Elements

某些 Capacitor 插件，包括 [Camera API](../native/camera.md)，通过 Ionic [PWA Elements 库](https://github.com/ionic-team/pwa-elements)提供基于 Web 的功能和 UI。

这是一个独立的依赖项，接下来安装它：

```shell
npm install @ionic/pwa-elements
```

接下来，通过编辑 `src/main.ts` 导入 `@ionic/pwa-elements`。

```ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// CHANGE: Add the following import
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// CHANGE: Call the element loader before the `bootstrapModule` call
defineCustomElements(window);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
```

就是这样！现在是时候看看应用的效果了。

## 运行应用

接下来运行此命令：

```shell
ionic serve
```

瞧！你的 Ionic 应用现在在 Web 浏览器中运行。你可以在浏览器中构建和测试大部分应用，大大提高了开发和测试速度。

## 相册

这里有三个标签。点击"Tab2"标签。它是一个空白的面板，是将它变成相册的完美位置。Ionic CLI 具有 Live Reload 功能，因此当你进行更改并保存时，应用会立即更新！

![显示 Ionic 应用中 Live Reload 功能的动画 GIF，代码更改立即反映在 Web 浏览器中。](/img/guides/first-app-cap-ng/email-photogallery.gif 'Ionic 应用中的 Live Reload 功能')

打开 `/src/app/tab2/tab2.page.html`。我们看到：

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> Tab 2 </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Tab 2</ion-title>
    </ion-toolbar>
  </ion-header>

  <app-explore-container name="Tab 2 page"></app-explore-container>
</ion-content>
```

`ion-header` 表示顶部导航和工具栏，标题为"Tab 2"（由于 iOS [可折叠大标题](../api/title.md#可折叠大标题) 支持，有两个标题）。将两个 `ion-title` 元素重命名为：

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <!-- CHANGE: Update title -->
    <ion-title> Photo Gallery </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <!-- CHANGE: Update title -->
      <ion-title size="large">Photo Gallery</ion-title>
    </ion-toolbar>
  </ion-header>

  <app-explore-container name="Tab 2 page"></app-explore-container>
</ion-content>
```

我们将应用的视觉部分放在 `<ion-content>` 中。在这种情况下，我们将在此处添加一个按钮，用于打开设备相机并显示相机拍摄的图像。首先在页面底部添加一个[浮动操作按钮](../api/fab.md) (FAB)，并将相机图像设置为图标。

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>Photo Gallery</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Photo Gallery</ion-title>
    </ion-toolbar>
  </ion-header>

  <!-- CHANGE: Add the floating action button -->
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button>
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- CHANGE: Remove or comment out `app-explore-container` -->
  <!-- <app-explore-container name="Tab 2 page"></app-explore-container> -->
</ion-content>
```

接下来，打开 `src/app/tabs/tabs.page.html`。将中间标签按钮的标签改为"Photos"，并将 `ellipse` 图标改为 `images`。

```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab1" href="/tabs/tab1">
      <ion-icon aria-hidden="true" name="triangle"></ion-icon>
      <ion-label>Tab 1</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab2" href="/tabs/tab2">
      <!-- CHANGE: Update icon -->
      <ion-icon aria-hidden="true" name="images"></ion-icon>
      <!-- CHANGE: Update label -->
      <ion-label>Photos</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab3" href="/tabs/tab3">
      <ion-icon aria-hidden="true" name="square"></ion-icon>
      <ion-label>Tab 3</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

这只是我们使用 Ionic 可以做的一系列酷炫事情的开端。接下来，在 Web 上实现相机拍照功能，然后为 iOS 和 Android 构建。
