---
title: '您的第一个 Ionic 应用：React'
sidebar_label: 构建您的第一个应用
---

<head>
  <title>React 应用 | 构建您的第一个 Ionic Framework React 应用</title>
  <meta
    name="description"
    content="构建您的第一个 Ionic React 应用。使用单一代码库，您可以仅使用 HTML、CSS 和 JavaScript 为任何平台构建 Ionic Framework 应用。"
  />
</head>

Ionic 的伟大之处在于，使用单一代码库，您可以仅使用 HTML、CSS 和 JavaScript 为任何平台构建应用。让我们跟随教程逐步创建一个真实的应用程序，学习 Ionic 应用开发的基础知识。

以下是完成后的应用在三个平台上的运行效果：

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0ASQ13Y1Rk4"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

## 我们将构建什么

我们将创建一个相册应用，能够使用设备相机拍摄照片，在网格中显示它们，并永久存储在设备上。

亮点包括：

- 基于 React 的单一代码库，使用 Ionic Framework [UI 组件](https://ionicframework.com/docs/components) 在 Web、iOS 和 Android 上运行。
- 使用 Ionic 的官方原生应用运行时 [Capacitor](https://capacitorjs.com) 部署为原生 iOS 和 Android 移动应用。
- 相册功能由 Capacitor 的 [Camera](https://capacitorjs.com/docs/apis/camera)、[Filesystem](https://capacitorjs.com/docs/apis/filesystem) 和 [Preferences](https://capacitorjs.com/docs/apis/preferences) API 提供支持。

在本指南中引用的完整应用代码请[在 GitHub 上查看](https://github.com/ionic-team/photo-gallery-capacitor-react)。

## 下载所需工具

请立即下载并安装这些工具，以确保最佳的 Ionic 开发体验：

- **Node.js** 用于与 Ionic 生态系统交互。[在此下载 LTS 版本](https://nodejs.org/en/)。
- **代码编辑器** 用于...编写代码！我们推荐使用 [Visual Studio Code](https://code.visualstudio.com/)。
- **命令行界面/终端（CLI）**：
  - **Windows** 用户：为获得最佳 Ionic 体验，我们建议使用内置命令行（cmd）或 PowerShell CLI，并以管理员模式运行。
  - **Mac/Linux** 用户：几乎任何终端都可以使用。

## 安装 Ionic 工具

在命令行终端中运行以下命令，安装 Ionic CLI（`ionic`）、用于在设备和模拟器上运行原生二进制的 `native-run`，以及用于生成原生应用图标和启动画面的 `cordova-res`：

:::note
要在 Visual Studio Code 中打开终端，请转到 终端 -> 新建终端。
:::

```shell
npm install -g @ionic/cli native-run cordova-res
```

:::note
`-g` 选项表示_全局安装_。当包全局安装时，可能会出现 `EACCES` 权限错误。

考虑设置 npm 在没有提升权限的情况下全局运行。有关更多信息，请参阅[解决权限错误](../developing/tips.md#解决权限错误)。
:::

## 创建应用

接下来，创建一个使用"Tabs"启动模板的 Ionic React 应用，并添加 Capacitor 以实现原生功能：

```shell
ionic start photo-gallery tabs --type=react --capacitor
```

这个启动项目包含三个预构建页面和 Ionic 开发的最佳实践。由于常见构建模块已经就位，我们可以轻松添加更多功能！

接下来，切换到应用文件夹：

```shell
cd photo-gallery
```

然后需要安装必要的 Capacitor 插件以实现应用的原生功能：

```shell
npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
```

### PWA Elements

一些 Capacitor 插件（包括 Camera API）通过 Ionic [PWA Elements 库](https://github.com/ionic-team/pwa-elements) 提供基于 Web 的功能和 UI。

这是一个独立的依赖项，因此接下来安装它：

```shell
npm install @ionic/pwa-elements
```

安装完成后，在您选择的代码编辑器中打开项目。

接下来，通过编辑 `src/index.tsx` 导入 `@ionic/pwa-elements`。

```tsx
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// 在平台引导完成后调用元素加载器
defineCustomElements(window);
```

就这样！现在开始有趣的部分——让我们看看应用的运行效果。

## 运行应用

在您的 shell 中运行此命令：

```shell
ionic serve
```

瞧！您的 Ionic 应用现在正在 Web 浏览器中运行。您的大部分应用都可以直接在浏览器中构建和测试，大大提高了开发和测试速度。

## 相册！！！

这里有三个标签。点击 Tab2 标签。它是一个空白画布，也就是将其转变为相册的完美位置。Ionic CLI 具有实时重载功能，因此当您进行更改并保存时，应用会立即更新！

![在 Ionic 应用中展示实时重载功能的 GIF 动画，代码更改后立即在 Web 浏览器中更新应用。](/img/guides/react/first-app/live-reload.gif 'Ionic 应用中的实时重载功能')

打开 `/src/pages/Tab2.tsx`。我们看到：

```tsx
<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Tab 2</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
  <!-- 一些填充内容 -->
  </IonContent>
</IonPage>
```

`IonHeader` 代表顶部导航和工具栏，标题为"Tab 2"。让我们重命名它：

```tsx
<IonTitle>相册</IonTitle>
```

我们将应用的视觉部分放在 `<IonContent>` 中。在这里，我们将添加一个按钮来打开设备相机，并显示相机拍摄的图像。首先添加一个[浮动操作按钮](https://ionicframework.com/docs/api/fab)（FAB）。首先，更新页面顶部的导入，加入 Camera 图标以及我们即将使用的一些 Ionic 组件：

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

然后，将 FAB 添加到页面底部。使用相机图像作为图标，并在点击此按钮时调用 `takePhoto()` 函数（即将实现）：

```tsx
<IonContent>
  <IonFab vertical="bottom" horizontal="center" slot="fixed">
    <IonFabButton onClick={() => takePhoto()}>
      <IonIcon icon={camera}></IonIcon>
    </IonFabButton>
  </IonFab>
</IonContent>
```

我们稍后将创建 `takePhoto` 方法以及使用相机和其他原生功能的逻辑。

接下来，打开 `src/App.tsx`，从导入中移除 `ellipse` 图标，改为导入 `images` 图标：

```tsx
import { images, square, triangle } from 'ionicons/icons';
```

在标签栏（`<IonTabBar>`）中，将中间标签按钮的标签改为"照片"，并将 `ellipse` 图标改为 `images`：

```tsx
<IonTabButton tab="tab2" href="/tab2">
  <IonIcon icon={images} />
  <IonLabel>照片</IonLabel>
</IonTabButton>
```

:::note
在 Ionic React 中，图标从 `ionicons/icons` 单独导入并设置到 icon prop。
::>

这只是我们使用 Ionic 可以做的一小部分酷炫功能。接下来，在 Web 上实现相机拍照功能，然后为 iOS 和 Android 构建应用。
