---
title: '你的第一个 Ionic 应用：React 版'
sidebar_label: 构建你的第一个应用
---

<head>
  <title>React 应用 | 构建你的第一个 Ionic Framework React 应用</title>
  <meta
    name="description"
    content="构建你的第一个 Ionic React 应用。借助一套代码库，你可以仅用 HTML、CSS 和 JavaScript 为任何平台构建 Ionic Framework 应用。"
  />
</head>

Ionic 的一大优势在于，你只需一套代码库，就能使用 HTML、CSS 和 JavaScript 为任何平台构建应用。我们将通过逐步创建一个实际的应用，来学习 Ionic 应用开发的基础知识。

以下是最终应用在三大平台上的运行效果：

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0ASQ13Y1Rk4"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

## 我们要构建什么

我们将创建一个照片墙应用，它能够调用设备摄像头拍照，以网格形式展示照片，并将照片永久存储在设备上。

主要亮点包括：

- 一套基于 React 的代码库，使用 Ionic Framework [UI 组件](https://ionicframework.com/docs/components)在 Web、iOS 和 Android 上运行。
- 通过 [Capacitor](https://capacitorjs.com)（Ionic 官方原生应用运行时）部署为原生 iOS 和 Android 移动应用。
- 照片墙功能由 Capacitor 的 [Camera](https://capacitorjs.com/docs/apis/camera)、[Filesystem](https://capacitorjs.com/docs/apis/filesystem) 和 [Preferences](https://capacitorjs.com/docs/apis/preferences) API 提供支持。

本指南涉及的完整应用代码可在 [GitHub](https://github.com/ionic-team/photo-gallery-capacitor-react) 上找到。

## 下载必备工具

请立即下载并安装以下工具，以确保获得最佳的 Ionic 开发体验：

- **Node.js**：用于与 Ionic 生态交互。[在此下载 LTS 版本](https://nodejs.org/en/)。
- **代码编辑器**：用于编写代码！我们推荐 [Visual Studio Code](https://code.visualstudio.com/)。
- **命令行界面/终端 (CLI)**：
  - **Windows 用户**：为了获得最佳 Ionic 体验，建议使用内置命令行（cmd）或以管理员模式运行的 Powershell CLI。
  - **Mac/Linux 用户**：几乎所有终端都能正常工作。

## 安装 Ionic 工具

在命令行终端中运行以下命令，安装 Ionic CLI (`ionic`)、`native-run`（用于在设备和模拟器/仿真器上运行原生二进制文件）以及 `cordova-res`（用于生成原生应用图标和启动画面）：

:::note
要在 Visual Studio Code 中打开终端，请转到 Terminal -> New Terminal。
:::

```shell
npm install -g @ionic/cli native-run cordova-res
```

:::note
`-g` 选项表示**全局安装**。全局安装包时，可能会出现 `EACCES` 权限错误。

建议配置 npm 使其无需提升权限即可全局操作。更多信息请参阅[解决权限错误](../developing/tips.md#resolving-permission-errors)。
:::

## 创建应用

接下来，创建一个基于“Tabs”起始模板的 Ionic React 应用，并添加 Capacitor 以实现原生功能：

```shell
ionic start photo-gallery tabs --type=react --capacitor
```

这个起始项目包含三个预构建页面和 Ionic 开发的最佳实践。有了现成的通用构建块，我们可以轻松添加更多功能！

接着，切换到应用目录：

```shell
cd photo-gallery
```

接下来，我们需要安装必要的 Capacitor 插件以使应用的原生功能正常工作：

```shell
npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
```

### PWA 元素

部分 Capacitor 插件（包括 Camera API）通过 Ionic [PWA Elements 库](https://github.com/ionic-team/pwa-elements)提供基于 Web 的功能和 UI。

它是一个独立的依赖项，因此接下来请安装它：

```shell
npm install @ionic/pwa-elements
```

安装完成后，在你选择的代码编辑器中打开项目。

接下来，通过编辑 `src/index.tsx` 导入 `@ionic/pwa-elements`。

```tsx
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// 在平台启动后调用元素加载器
defineCustomElements(window);
```

搞定！现在进入有趣的部分——让我们看看实际运行的应用。

## 运行应用

在终端中运行以下命令：

```shell
ionic serve
```

瞧！你的 Ionic 应用现在已经在浏览器中运行了。大部分应用都可以直接在浏览器中构建和测试，从而极大地提高开发和测试速度。

## 照片墙！！！

应用包含三个标签页。点击 Tab2 标签页。这是一个空白画布，正是改造为照片墙的绝佳位置。Ionic CLI 支持实时重载，因此当你修改并保存代码时，应用会立即更新！

![展示 Ionic 应用中实时重载功能的动画 GIF，代码更改会立即更新浏览器中的应用。](/img/guides/react/first-app/live-reload.gif 'Ionic 应用的实时重载功能')

打开 `/src/pages/Tab2.tsx`。我们看到：

```tsx
<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Tab 2</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
  <!-- some filler -->
  </IonContent>
</IonPage>
```

`IonHeader` 代表顶部导航和工具栏，标题为“Tab 2”。让我们重命名它：

```tsx
<IonTitle>照片墙</IonTitle>
```

我们将应用的视觉部分放入 `<IonContent>` 中。在本例中，我们将在这里添加一个按钮，用于打开设备摄像头并显示拍摄的图像。首先添加一个[浮动操作按钮](https://ionicframework.com/docs/api/fab) (FAB)。首先更新页面顶部的导入，包含 Camera 图标以及我们即将使用的一些 Ionic 组件：

```tsx
import { camera, trash, close } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
} from '@ionic/react';
```

然后，在页面底部添加 FAB。使用相机图像作为图标，并在点击此按钮时调用 `takePhoto()` 函数（稍后将实现）：

```tsx
<IonContent>
  <IonFab vertical="bottom" horizontal="center" slot="fixed">
    <IonFabButton onClick={() => takePhoto()}>
      <IonIcon icon={camera}></IonIcon>
    </IonFabButton>
  </IonFab>
</IonContent>
```

我们稍后将创建 `takePhoto` 方法以及使用 Camera 和其他原生功能的逻辑。

接下来，打开 `src/App.tsx`，从导入中移除 `ellipse` 图标，改为导入 `images` 图标：

```tsx
import { images, square, triangle } from 'ionicons/icons';
```

在标签栏 (`<IonTabBar>`) 内，将中间标签按钮的标签改为“照片”，`ellipse` 图标改为 `images`：

```tsx
<IonTabButton tab="tab2" href="/tab2">
  <IonIcon icon={images} />
  <IonLabel>照片</IonLabel>
</IonTabButton>
```

:::note
在 Ionic React 中，图标是从 `ionicons/icons` 单独导入并设置给 icon 属性的。
:::

这只是我们使用 Ionic 所能实现的众多酷炫功能的开始。接下来，我们先在 Web 上实现拍照功能，然后为 iOS 和 Android 构建应用。