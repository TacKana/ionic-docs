---
title: '你的第一个 Ionic 应用：Angular'
sidebar_label: 构建你的第一个应用
---

<head>
  <title>构建你的第一个 Ionic 移动应用：Angular 开发教程</title>
  <meta
    name="description"
    content="Ionic 的单一代码库仅使用 HTML、CSS 和 JavaScript 即可为任何平台构建应用。通过我们的逐步 Angular 教程开发你的第一个移动应用。"
  />
</head>

Ionic 的伟大之处在于，只需一个代码库，你就可以仅使用 HTML、CSS 和 JavaScript 为任何平台构建应用。跟随我们逐步创建一个真实的应用，学习 Ionic 应用开发的基础知识。

以下是完成的应用在全部 3 个平台上运行的效果：

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0ASQ13Y1Rk4"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

:::note
在寻找本指南的上一版本（涵盖 Ionic 4 和 Cordova）？[请参见这里。](../developer-resources/guides/first-app-v4/intro.md)
:::

## 我们将构建什么

我们将创建一个相册应用，能够使用设备相机拍照、以网格形式显示照片，并将其永久存储在设备上。

亮点包括：

- 基于 Angular 的单一代码库，使用 Ionic Framework [UI 组件](https://ionicframework.com/docs/components)可在 Web、iOS 和 Android 上运行。
- 使用 [Capacitor](https://capacitorjs.com)（Ionic 的官方原生应用运行时）部署为原生 iOS 和 Android 移动应用。
- 由 Capacitor [Camera](https://capacitorjs.com/docs/apis/camera)、[Filesystem](https://capacitorjs.com/docs/apis/filesystem) 和 [Preferences](https://capacitorjs.com/docs/apis/preferences) API 驱动的相册功能。

在本指南中引用的完整应用代码可以在 [GitHub](https://github.com/ionic-team/photo-gallery-capacitor-ng) 上找到。

## 下载所需工具

立即下载并安装这些工具，以确保最佳的 Ionic 开发体验：

- **Node.js** 用于与 Ionic 生态系统交互。[在此下载 LTS 版本](https://nodejs.org/en/)。
- **代码编辑器**用于...编写代码！我们是 [Visual Studio Code](https://code.visualstudio.com/) 的粉丝。
- **命令行界面/终端 (CLI)**：
  - **Windows** 用户：为获得最佳 Ionic 体验，我们建议使用内置命令行 (cmd) 或 PowerShell CLI，以管理员模式运行。
  - **Mac/Linux** 用户，几乎任何终端都可以使用。

## 安装 Ionic 工具

在命令行终端中运行以下命令，安装 Ionic CLI (`ionic`)、`native-run`（用于在设备和模拟器上运行原生二进制文件）以及 `cordova-res`（用于生成原生应用图标和启动画面）：

:::note
要在 Visual Studio Code 中打开终端，请转到 Terminal -> New Terminal。
:::

```shell
npm install -g @ionic/cli native-run cordova-res
```

:::note
`-g` 选项表示_全局安装_。当全局安装包时，可能会发生 `EACCES` 权限错误。

考虑设置 npm 以无需提升权限即可全局运行。有关更多信息，请参见[解决权限错误](../developing/tips.md#解决权限错误)。
:::

## 创建应用

接下来，创建一个使用"Tabs"启动模板并添加 Capacitor 以实现原生功能的 Ionic Angular 应用：

```shell
ionic start photo-gallery tabs --type=angular --capacitor
```

这个启动项目包含三个预构建页面和 Ionic 开发的最佳实践。由于常见的构建块已经就位，我们可以轻松地添加更多功能！

接下来，进入应用文件夹：

```shell
cd photo-gallery
```

然后，我们需要安装必要的 Capacitor 插件来使应用的原生功能正常工作：

```shell
npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
```

### PWA Elements

某些 Capacitor 插件（包括 Camera API）通过 Ionic [PWA Elements 库](https://github.com/ionic-team/ionic-pwa-elements)提供基于 Web 的功能和 UI。

这是一个独立的依赖项，接下来安装它：

```shell
npm install @ionic/pwa-elements
```

接下来，通过编辑 `src/main.ts` 导入 `@ionic/pwa-elements`。

```tsx
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// 在平台启动后调用元素加载器
defineCustomElements(window);
```

就是这样！现在是激动人心的部分——让我们看看应用的运行效果。

## 运行应用

接下来运行以下命令：

```shell
ionic serve
```

瞧！你的 Ionic 应用现在正在 Web 浏览器中运行。你可以在浏览器中构建和测试大部分应用功能，大大提高了开发和测试速度。

## 相册！！！

这里有三个标签。点击 Tab2 标签。它是一个空白画布，也就是将其转变为相册的完美位置。Ionic CLI 具有 Live Reload 功能，因此当你进行更改并保存时，应用会立即更新！

![演示 Ionic 应用中实时重新加载功能的动画 GIF，代码更改立即更新 Web 浏览器中的应用。](/img/guides/first-app-cap-ng/email-photogallery.gif 'Ionic 应用中的 Live Reload 功能')

在你选择的代码编辑器中打开 photo-gallery 应用文件夹，然后导航到 `/src/app/tab2/tab2.page.html`。我们看到：

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Tab 2</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Tab 2</ion-title>
    </ion-toolbar>
  </ion-header>
</ion-content>
```

`ion-header` 代表顶部导航和工具栏，标题为"Tab 2"（由于 iOS [可折叠大标题](https://ionicframework.com/docs/api/title#collapsible-large-titles)支持，这里有两个）。将两个 `ion-title` 元素重命名为：

```html
<ion-title>Photo Gallery</ion-title>
```

我们将应用的视觉部分放入 `<ion-content>` 中。在这里，我们将添加一个按钮来打开设备相机，以及显示相机捕获的图像。首先在页面底部添加一个[浮动操作按钮](https://ionicframework.com/docs/api/fab) (FAB)，并将相机图像设置为图标。

```html
<ion-content>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button>
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

接下来，打开 `src/app/tabs/tabs.page.html`。将标签改为"Photos"，图标名称改为"images"：

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>Photos</ion-label>
</ion-tab-button>
```

保存所有更改以在浏览器中查看自动应用的效果。这只是我们使用 Ionic 可以做的所有酷事中的开始。接下来，在 Web 上实现相机拍照功能，然后为 iOS 和 Android 构建。
