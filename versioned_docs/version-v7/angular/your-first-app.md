---
title: '你的第一个 Ionic 应用：Angular 版'
sidebar_label: 构建你的第一个应用
---

<head>
  <title>使用 Angular 构建你的第一个 Ionic 移动应用 | Ionic Capacitor 相机功能</title>
  <meta
    name="description"
    content="本 Angular 教程将通过逐步创建一个真实的应用，教授 Ionic 应用开发的基础知识。学习如何使用 Angular 运行你的第一个 Ionic 应用。"
  />
</head>

Ionic 的一大优势在于，只需一套代码库，你就可以使用 HTML、CSS 和 JavaScript 为任何平台构建应用。跟随本教程，我们将通过逐步创建一个真实的应用来学习 Ionic 应用开发的基础知识。

下面是最终应用在所有三个平台上的运行效果：

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0ASQ13Y1Rk4"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

:::note
寻找涵盖 Ionic 4 和 Cordova 的旧版指南？[请点击此处](../developer-resources/guides/first-app-v4/intro.md)
:::

## 我们将构建什么

我们将创建一个照片墙应用，该应用能够使用设备摄像头拍照、在网格中显示照片，并永久存储在设备上。

主要亮点包括：

- 一套基于 Angular 的代码库，使用 Ionic 框架的 [UI 组件](../components.md) 在 Web、iOS 和 Android 上运行。
- 通过 Ionic 官方原生应用运行时 [Capacitor](https://capacitorjs.com)，部署为原生 iOS 和 Android 移动应用。
- 照片墙功能由 Capacitor 的 [相机](../native/camera.md)、[文件系统](../native/filesystem.md) 和 [偏好设置](../native/preferences.md) API 提供支持。

可以在 GitHub 上找到本指南参考的 [完整应用代码](https://github.com/ionic-team/tutorial-photo-gallery-angular)。

## 下载所需工具

立即下载并安装以下工具，以确保获得最佳的 Ionic 开发体验：

- **Node.js** 用于与 Ionic 生态系统交互。[在此下载 LTS 版本](https://nodejs.org/en/)。
- **代码编辑器** 用于……编写代码！我们推荐 [Visual Studio Code](https://code.visualstudio.com/)。
- **命令行界面/终端 (CLI)**：
  - **Windows** 用户：为了获得最佳的 Ionic 体验，我们建议使用内置命令行 (cmd) 或 Powershell CLI，并以管理员模式运行。
  - **Mac/Linux** 用户：几乎任何终端都可以使用。

## 安装 Ionic 工具

在命令行终端中运行以下命令，安装 Ionic CLI (`ionic`)、`native-run`（用于在设备和模拟器/仿真器上运行原生二进制文件）以及 `cordova-res`（用于生成原生应用图标和启动屏幕）：

:::note
要在 Visual Studio Code 中打开终端，请转到 Terminal -> New Terminal。
:::

```shell
npm install -g @ionic/cli native-run cordova-res
```

:::note
`-g` 选项表示 _全局安装_。当包全局安装时，可能会出现 `EACCES` 权限错误。

考虑配置 npm 以在没有提升权限的情况下全局操作。更多信息请参阅 [解决权限错误](../developing/tips.md#resolving-permission-errors)。
:::

## 创建应用

接下来，创建一个使用 "Tabs" 起始模板并添加 Capacitor 以实现原生功能的 Ionic Angular 应用：

```shell
ionic start photo-gallery tabs --type=angular
```

:::note

当提示在 `NgModules` 和 `Standalone` 之间选择时，请选择 `NgModules`，因为本教程遵循 `NgModules` 方法。

:::

这个起始项目包含了三个预构建页面和 Ionic 开发的最佳实践。有了现成的通用构建块，我们可以轻松添加更多功能！

接下来，切换到应用文件夹：

```shell
cd photo-gallery
```

接下来我们需要安装必要的 Capacitor 插件，以使应用的原生功能正常工作：

```shell
npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
```

### PWA Elements

一些 Capacitor 插件，包括 [相机 API](../native/camera.md)，通过 Ionic 的 [PWA Elements 库](https://github.com/ionic-team/pwa-elements) 提供基于 Web 的功能和 UI。

它是一个独立的依赖项，因此接下来安装它：

```shell
npm install @ionic/pwa-elements
```

接下来，通过编辑 `src/main.ts` 来导入 `@ionic/pwa-elements`。

```ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// 更改：添加以下导入
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// 更改：在 `bootstrapModule` 调用之前调用元素加载器
defineCustomElements(window);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
```

就是这样！现在进入有趣的部分——让我们看看实际运行中的应用。

## 运行应用

接下来运行此命令：

```shell
ionic serve
```

瞧！你的 Ionic 应用现在正在 Web 浏览器中运行。你的大部分应用都可以直接在浏览器中构建和测试，从而大大提高了开发和测试速度。

## 照片墙

应用有三个选项卡。点击 "Tab2" 选项卡。这是一块空白画布，也就是将其转化为照片墙的绝佳位置。Ionic CLI 具有实时重载功能，因此当你进行更改并保存时，应用会立即更新！

![动画 GIF 展示 Ionic 应用中的实时重载功能，代码更改会立即更新 Web 浏览器中的应用](/img/guides/first-app-cap-ng/email-photogallery.gif 'Ionic 应用中的实时重载功能')

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

`ion-header` 代表顶部导航和工具栏，标题为 "Tab 2"（由于支持 iOS [可折叠大标题](../api/title.md#collapsible-large-titles)，所以有两个）。将两个 `ion-title` 元素重命名为：

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <!-- 更改：更新标题 -->
    <ion-title> 照片墙 </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <!-- 更改：更新标题 -->
      <ion-title size="large">照片墙</ion-title>
    </ion-toolbar>
  </ion-header>

  <app-explore-container name="Tab 2 page"></app-explore-container>
</ion-content>
```

我们将应用的视觉部分放入 `<ion-content>` 中。在本例中，我们将在这里添加一个打开设备摄像头并显示相机拍摄图像的按钮。首先在页面底部添加一个 [浮动操作按钮](../api/fab.md) (FAB)，并将相机图像设置为图标。

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>照片墙</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">照片墙</ion-title>
    </ion-toolbar>
  </ion-header>

  <!-- 更改：添加浮动操作按钮 -->
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button>
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- 更改：移除或注释掉 `app-explore-container` -->
  <!-- <app-explore-container name="Tab 2 page"></app-explore-container> -->
</ion-content>
```

接下来，打开 `src/app/tabs/tabs.page.html`。将中间选项卡按钮的标签更改为 "Photos"，并将 `ellipse` 图标更改为 `images`。

```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab1" href="/tabs/tab1">
      <ion-icon aria-hidden="true" name="triangle"></ion-icon>
      <ion-label>Tab 1</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab2" href="/tabs/tab2">
      <!-- 更改：更新图标 -->
      <ion-icon aria-hidden="true" name="images"></ion-icon>
      <!-- 更改：更新标签 -->
      <ion-label>Photos</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab3" href="/tabs/tab3">
      <ion-icon aria-hidden="true" name="square"></ion-icon>
      <ion-label>Tab 3</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

这只是我们使用 Ionic 可以做的所有酷炫功能的开始。接下来，我们将在 Web 上实现拍照功能，然后为 iOS 和 Android 构建应用。