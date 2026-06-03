---
title: '你的第一个 Ionic 应用：React'
sidebar_label: 构建你的第一个应用
---

<head>
  <title>使用 React 构建你的第一个 Ionic 移动应用 | Ionic Capacitor 相机</title>
  <meta
    name="description"
    content="本 React 教程通过逐步创建真实应用来教授 Ionic 应用开发的基础知识。了解如何使用 React 运行你的第一个 Ionic 应用。"
  />
</head>

Ionic 的伟大之处在于，只需一个代码库，你就可以仅使用 HTML、CSS 和 JavaScript 为任何平台构建应用。跟随我们逐步创建一个真实应用，学习 Ionic 应用开发的基础知识。

这是最终应用在全部 3 个平台上的运行效果：

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0ASQ13Y1Rk4"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

## 我们将构建什么

我们将创建一个相册应用，能够使用设备的相机拍照，以网格形式显示，并永久存储在设备上。

亮点包括：

- 使用 Ionic Framework [UI 组件](../components.md) 构建的单一 React 代码库，可在 Web、iOS 和 Android 上运行。
- 使用 [Capacitor](https://capacitorjs.com)（Ionic 官方的原生应用运行时）部署为原生 iOS 和 Android 移动应用。
- 由 Capacitor [Camera](../native/camera.md)、[Filesystem](../native/filesystem.md) 和 [Preferences](../native/preferences.md) API 驱动的相册功能。

在 GitHub 上找到本指南中引用的[完整应用代码](https://github.com/ionic-team/tutorial-photo-gallery-react)。

## 下载所需工具

立即下载并安装这些工具，以确保最佳的 Ionic 开发体验：

- **Node.js** 用于与 Ionic 生态系统交互。[在此下载 LTS 版本](https://nodejs.org/en/)。
- **代码编辑器**用于...编写代码！我们喜欢 [Visual Studio Code](https://code.visualstudio.com/)。
- **命令行界面/终端 (CLI)**：
  - **Windows 用户**：为了获得最佳的 Ionic 体验，我们建议使用内置命令行 (cmd) 或 PowerShell CLI，并以管理员模式运行。
  - **Mac/Linux 用户**：几乎任何终端都可以使用。

## 安装 Ionic 工具

在命令行终端中运行以下命令来安装 Ionic CLI (`ionic`)、用于在设备和模拟器/仿真器上运行原生二进制文件的 `native-run`，以及用于生成原生应用图标和启动屏幕的 `cordova-res`：

:::note
要在 Visual Studio Code 中打开终端，请转到 终端 -> 新终端。
:::

```shell
npm install -g @ionic/cli native-run cordova-res
```

:::note
`-g` 选项意味着_全局安装_。当包全局安装时，可能会发生 `EACCES` 权限错误。

考虑设置 npm 在无需提升权限的情况下全局运行。请参阅[解决权限错误](../developing/tips.md#解决权限错误)了解更多信息。
:::

## 创建应用

接下来，创建一个使用 "Tabs" 启动模板并添加 Capacitor 以实现原生功能的 Ionic React 应用：

```shell
ionic start photo-gallery tabs --type=react
```

这个启动项目包含三个预构建的页面和 Ionic 开发的最佳实践。由于常见的构建模块已经就位，我们可以轻松地添加更多功能！

接下来，切换到应用文件夹：

```shell
cd photo-gallery
```

然后，我们需要安装必要的 Capacitor 插件来使应用的原生功能正常工作：

```shell
npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
```

### PWA Elements

某些 Capacitor 插件，包括 [Camera API](../native/camera.md)，通过 Ionic [PWA Elements 库](https://github.com/ionic-team/pwa-elements)提供基于 Web 的功能和 UI。

这是一个独立的依赖，因此接下来安装它：

```shell
npm install @ionic/pwa-elements
```

接下来，通过编辑 `src/main.tsx` 导入 `@ionic/pwa-elements`。

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// 修改：添加以下导入
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// 修改：在渲染调用之前调用元素加载器
defineCustomElements(window);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

就这样！现在进入有趣的部分——让我们看看应用的实际效果。

## 运行应用

接下来运行这个命令：

```shell
ionic serve
```

瞧！你的 Ionic 应用现在正在 Web 浏览器中运行。你的大部分应用可以在浏览器中构建和测试，大大提高了开发和测试速度。

## 相册

这里有三个标签。点击 "Tab 2" 标签。它是一块空白画布，是转变为相册的完美位置。Ionic CLI 具有实时重载功能，因此当你进行更改并保存时，应用会立即更新！

![展示 Ionic 应用中实时重载功能的动画 GIF，代码更改立即更新 Web 浏览器中的应用。](/img/guides/react/first-app/live-reload.gif 'Ionic 应用中的实时重载功能')

打开 `/src/pages/Tab2.tsx`。我们看到：

```tsx
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
```

`IonHeader` 代表顶部导航和工具栏，标题为 "Tab 2"（由于 iOS [可折叠大标题](../api/title.md#可折叠大标题) 支持，有两个）。让我们将两个 `IonTitle` 元素重命名为：

```tsx
<IonPage>
  <IonHeader>
    <IonToolbar>
      {/* 修改：更新标题 */}
      <IonTitle>相册</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
    <IonHeader collapse="condense">
      <IonToolbar>
        {/* 修改：更新标题 */}
        <IonTitle size="large">相册</IonTitle>
      </IonToolbar>
    </IonHeader>

    {/* ...已有代码... */}
  </IonContent>
</IonPage>
```

我们将应用的视觉部分放在 `<IonContent>` 中。在这里，我们将添加一个打开设备相机的按钮，以及显示相机拍摄的图像。首先在页面底部添加一个[浮动操作按钮](../api/fab.md)（FAB），并将相机图像设置为图标。

```tsx
// 修改：添加以下导入
import { camera } from 'ionicons/icons';
// 修改：更新以下导入
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
// 修改：移除或注释掉 `ExploreContainer`
// import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>相册</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">相册</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* 修改：添加浮动操作按钮 */}
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>

        {/* 修改：移除或注释掉 `ExploreContainer` */}
        {/* <ExploreContainer name="Tab 2 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
```

接下来，打开 `src/App.tsx`。将中间标签按钮的标签改为 "照片"，并将 `ellipse` 图标改为 `images`。

```tsx
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// 修改：更新以下导入
import { images, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* ...已有的 Ionic 样式... */

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            {/* 修改：更新图标 */}
            <IonIcon aria-hidden="true" icon={images} />
            {/* 修改：更新标签 */}
            <IonLabel>照片</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
```

这只是我们使用 Ionic 可以做的所有酷炫事情的开始。接下来，在 Web 上实现相机拍照功能，然后为 iOS 和 Android 构建应用。
