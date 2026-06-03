---
title: 'React 应用 | 构建您的第一个 Ionic Framework React 应用'
description: 构建您的第一个 Ionic React 应用。使用同一套代码库，只需 HTML、CSS 和 JavaScript 即可为任何平台构建 Ionic Framework 应用。
sidebar_label: 构建您的第一个应用
---

# 您的第一个 Ionic 应用：React

Ionic 的出色之处在于，使用同一套代码库，只需 HTML、CSS 和 JavaScript 即可为任何平台构建应用。跟随我们一起逐步创建一个真实的应用，来学习 Ionic 应用开发的基础知识。

以下是在所有三个平台上运行的完成的应用：

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0ASQ13Y1Rk4"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

## 我们将构建什么

我们将创建一个相册应用，能够使用设备相机拍照、在网格中显示照片，并将照片永久存储在设备上。

亮点包括：

- 一个基于 React 的代码库，使用 Ionic Framework [UI 组件](https://ionicframework.com/docs/components)在 Web、iOS 和 Android 上运行。
- 使用 Ionic 的官方原生应用运行时 [Capacitor](https://capacitorjs.com) 部署为原生 iOS 和 Android 移动应用。
- 相册功能由 Capacitor 的 [Camera](https://capacitorjs.com/docs/apis/camera)、[Filesystem](https://capacitorjs.com/docs/apis/filesystem) 和 [Preferences](https://capacitorjs.com/docs/apis/preferences) API 提供支持。

本指南中引用的完整应用代码可在 [GitHub](https://github.com/ionic-team/photo-gallery-capacitor-react) 上找到。

## 下载所需工具

请立即下载并安装这些工具，以确保最佳的 Ionic 开发体验：

- **Node.js** 用于与 Ionic 生态系统交互。[在此处下载 LTS 版本](https://nodejs.org/en/)。
- **代码编辑器**用于……编写代码！我们是 [Visual Studio Code](https://code.visualstudio.com/) 的粉丝。
- **命令行界面/终端（CLI）**：
  - **Windows** 用户：为获得最佳 Ionic 体验，我们建议使用以管理员模式运行的内置命令行（cmd）或 Powershell CLI。
  - **Mac/Linux** 用户，几乎任何终端都可以。

## 安装 Ionic 工具

在命令行终端中运行以下命令，安装 Ionic CLI（`ionic`）、`native-run`（用于在设备和模拟器上运行原生二进制文件）以及 `cordova-res`（用于生成原生应用图标和启动画面）：

:::note
要在 Visual Studio Code 中打开终端，请转到 Terminal -> New Terminal。
:::

```shell
npm install -g @ionic/cli native-run cordova-res
```

:::note
`-g` 选项表示*全局安装*。当全局安装包时，可能会出现 `EACCES` 权限错误。

考虑设置 npm 在没有提升权限的情况下进行全局操作。更多信息请参阅[解决权限错误](../developing/tips.md#resolving-permission-errors)。
:::

## 创建应用

接下来，创建一个使用"Tabs"启动模板并添加 Capacitor 以实现原生功能的 Ionic React 应用：

```shell
ionic start photo-gallery tabs --type=react --capacitor
```

这个启动项目包含三个预构建的页面和 Ionic 开发的最佳实践。由于通用构建块已经就位，我们可以轻松添加更多功能！

接下来，切换到应用文件夹：

```shell
cd photo-gallery
```

接下来我们需要安装必要的 Capacitor 插件，以使应用的原生功能正常工作：

```shell
npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
```

### PWA Elements

某些 Capacitor 插件（包括 Camera API）通过 Ionic [PWA Elements 库](https://github.com/ionic-team/pwa-elements)提供基于 Web 的功能和 UI。

这是一个独立的依赖项，接下来安装它：

```shell
npm install @ionic/pwa-elements
```

安装后，在您选择的代码编辑器中打开项目。

接下来，通过编辑 `src/index.tsx` 导入 `@ionic/pwa-elements`。

```tsx
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// 在平台引导完成后调用元素加载器
defineCustomElements(window);
```

就这样！现在到有趣的部分了——让我们看看应用的运行效果。

## 运行应用

在 shell 中运行以下命令：

```shell
ionic serve
```

瞧！您的 Ionic 应用现在正在 Web 浏览器中运行。您的大部分应用都可以直接在浏览器中构建和测试，大大提高了开发和测试速度。

## 相册！！！

有三个标签页。点击 Tab2 标签页。它是一个空白画布，也就是转变为相册的完美位置。Ionic CLI 具有 Live Reload 功能，因此当您做出更改并保存时，应用会立即更新！

![显示 Ionic 应用中实时重载功能的 GIF 动画，代码更改立即更新 Web 浏览器中的应用。](/img/guides/react/first-app/live-reload.gif 'Ionic 应用中的实时重载功能')

打开 `/src/pages/Tab2.tsx`。我们看到：

```tsx
<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Tab 2</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
  <!-- 一些占位内容 -->
  </IonContent>
</IonPage>
```

`IonHeader` 代表顶部导航和工具栏，标题为"Tab 2"。让我们重命名它：

```tsx
<IonTitle>相册</IonTitle>
```

我们将应用的视觉部分放入 `<IonContent>` 中。在这里，我们将添加一个按钮来打开设备相机，并显示相机拍摄的图像。首先添加一个[浮动操作按钮](https://ionicframework.com/docs/api/fab)（FAB）。首先，更新页面顶部的导入，以包含 Camera 图标以及我们即将使用的一些 Ionic 组件：

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

我们稍后将创建 `takePhoto` 方法以及使用 Camera 和其他原生功能的逻辑。

接下来，打开 `src/App.tsx`，从导入中移除 `ellipse` 图标，然后导入 `images` 图标：

```tsx
import { images, square, triangle } from 'ionicons/icons';
```

在标签栏（`<IonTabBar>`）中，将中间标签按钮的标签改为"Photos"，图标从 `ellipse` 改为 `images`：

```tsx
<IonTabButton tab="tab2" href="/tab2">
  <IonIcon icon={images} />
  <IonLabel>Photos</IonLabel>
</IonTabButton>
```

:::note
在 Ionic React 中，图标从 `ionicons/icons` 单独导入，并设置给 icon 属性。
:::

这只是我们使用 Ionic 可以做所有酷事情的开始。接下来，在 Web 上实现相机拍照功能，然后为 iOS 和 Android 构建。
