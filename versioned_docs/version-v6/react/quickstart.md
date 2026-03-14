---
title: Ionic React 快速入门
sidebar_label: 快速入门
---

<head>
  <title>使用 Ionic CLI 的 Ionic React 快速入门：React 基础</title>
  <meta
    name="description"
    content="Ionic React 快速入门涵盖了 React 和 Ionic 的基础知识，包括任何 Ionic 特有的功能。学习如何使用 Ionic CLI 构建 React 应用。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

欢迎！本指南将引导您了解 Ionic React 开发的基础知识。您将学习如何设置开发环境、生成一个简单的项目、探索项目结构，并理解 Ionic 组件的工作原理。这是在构建第一个真实应用之前熟悉 Ionic React 的完美方式。

如果您想了解 Ionic React 是什么以及它在 React 生态系统中的位置，请参阅 [Ionic React 概述](overview)。

## 先决条件

在开始之前，请确保您的计算机上已安装 Node.js 和 npm。
您可以通过运行以下命令来检查：

```shell
node -v
npm -v
```

如果您没有安装 Node.js 和 npm，请 [在此下载 Node.js](https://nodejs.org/en/download)（其中包含 npm）。

## 使用 Ionic CLI 创建项目

首先，安装最新的 [Ionic CLI](../cli)：

```shell
npm install -g @ionic/cli
```

然后，运行以下命令来创建并运行一个新项目：

```shell
ionic start myApp blank --type react

cd myApp
ionic serve
```

运行 `ionic serve` 后，您的项目将在浏览器中打开。

![Ionic React 主页截图](/img/guides/quickstart/home-page.png 'Ionic React 主页组件')

## 探索项目结构

您新应用的目录结构将如下所示：

```shell
└── src/
    ├── App.tsx
    ├── components
    │   ├── ExploreContainer.css
    │   └── ExploreContainer.tsx
    ├── main.tsx
    └── pages
        ├── Home.css
        └── Home.tsx
```

:::info
以下示例中的所有文件路径都是相对于项目根目录的。
:::

让我们逐一查看这些文件，以了解应用的结构。

## 查看 App 组件

应用的根组件定义在 `App.tsx` 中：

```tsx title="src/App.tsx"
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

// ..CSS 导入...

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
```

这里设置了应用的根结构，使用了 Ionic 的 `IonApp` 和 `IonReactRouter` 组件。`IonRouterOutlet` 是您的页面将显示的位置。

## 查看路由

路由定义在 `App.tsx` 的 `IonRouterOutlet` 内：

```tsx title="src/App.tsx"
<IonRouterOutlet>
  <Route exact path="/home">
    <Home />
  </Route>
  <Route exact path="/">
    <Redirect to="/home" />
  </Route>
</IonRouterOutlet>
```

当您访问根 URL (`/`) 时，`Home` 组件将被加载。

## 查看主页

主页组件定义在 `Home.tsx` 中，它导入了 Ionic 组件并定义了页面模板：

```tsx title="src/pages/Home.tsx"
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

这会创建一个包含页眉和可滚动内容区域的页面。`IonPage` 组件提供了基本的页面结构，必须在每个页面上使用。第二个页眉显示了一个[可折叠大标题](/docs/api/title.md#collapsible-large-titles)，当位于内容顶部时显示，向下滚动时则缩合以显示第一个页眉中的较小标题。

:::tip 了解更多
有关 Ionic 布局组件的详细信息，请参阅 [Header](/docs/api/header.md)、[Toolbar](/docs/api/toolbar.md)、[Title](/docs/api/title.md) 和 [Content](/docs/api/content.md) 文档。
:::

## 添加 Ionic 组件

您可以使用更多 Ionic UI 组件来增强您的主页。例如，在 `Home.tsx` 的 `IonContent` 末尾导入并添加一个 [Button](/docs/api/button.md)：

```tsx title="src/pages/Home.tsx"
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// ...现有导入...

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* ...现有内容... */}

        <IonButton>Navigate</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

## 添加新页面

在 `New.tsx` 创建一个新页面：

```tsx title="src/pages/New.tsx"
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const New: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>New</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">New</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default New;
```

这会创建一个在 [Toolbar](/docs/api/toolbar.md) 中包含 [Back Button](/docs/api/back-button.md) 的页面。返回按钮将自动处理导航回上一页，如果没有历史记录，则导航到 `/`。

:::warning
在创建自己的页面时，始终使用 `IonPage` 作为根组件。这对于页面之间的正确过渡、Ionic 组件依赖的基础 CSS 样式以及应用中一致的布局行为至关重要。
:::

## 导航到新页面

要导航到新页面，请首先在 `App.tsx` 的顶部导入 `Home` 之后导入它，为其创建路由：

```tsx title="src/App.tsx"
import New from './pages/New';
```

然后，在 `IonRouterOutlet` 中添加其路由：

```tsx title="src/App.tsx"
<IonRouterOutlet>
  <Route exact path="/home">
    <Home />
  </Route>
  <Route exact path="/new">
    <New />
  </Route>
  <Route exact path="/">
    <Redirect to="/home" />
  </Route>
</IonRouterOutlet>
```

完成后，更新 `Home.tsx` 中的按钮：

```tsx title="src/pages/Home.tsx"
<IonButton routerLink="/new">Navigate</IonButton>
```

:::info
导航也可以使用 React Router 的 `history` prop 以编程方式执行。有关更多信息，请参阅 [React 导航文档](/docs/react/navigation.md#navigating-using-history)。
:::

## 为新页面添加图标

Ionic React 预装了 [Ionicons](https://ionic.io/ionicons/)。您可以通过设置 `IonIcon` 组件的 `icon` 属性来使用任何图标。

更新 `New.tsx` 中的导入以导入 `IonIcon` 以及 `heart` 和 `logoIonic` 图标：

```tsx title="src/pages/New.tsx"
import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { heart, logoIonic } from 'ionicons/icons';
```

然后，将它们包含在 `IonContent` 内：

```tsx title="src/pages/New.tsx"
<IonIcon icon={heart} />
<IonIcon icon={logoIonic} />
```

请注意，我们传递的是导入的 SVG 引用，**而不是**字符串形式的图标名称。

有关更多信息，请参阅 [Icon 文档](/docs/api/icon.md) 和 [Ionicons 文档](https://ionic.io/ionicons/)。

## 调用组件方法

让我们添加一个可以将内容区域滚动到底部的按钮。

更新 `New.tsx`，在 `IonContent` 上添加 `ref`，并在现有图标后添加一个按钮和一些项目：

```tsx title="src/pages/New.tsx"
<IonContent ref={content}>
  <IonIcon icon={heart} />
  <IonIcon icon={logoIonic} />

  <IonButton onClick={scrollToBottom}>Scroll to Bottom</IonButton>

  {/* 添加大量内容以使滚动成为可能 */}
  {Array.from({ length: 50 }, (_, i) => (
    <IonItem key={i}>
      <IonLabel>Item {i + 1}</IonLabel>
    </IonItem>
  ))}
</IonContent>
```

然后，添加额外组件的导入并定义 `scrollToBottom` 函数：

```tsx title="src/pages/New.tsx"
import { useRef } from 'react';
import { IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { heart, logoIonic } from 'ionicons/icons';

const New: React.FC = () => {
  const content = useRef<HTMLIonContentElement>(null);

  const scrollToBottom = () => {
    content.current?.scrollToBottom(300);
  };

  return (
    // ...现有模板...
  );
};

export default New;
```

要在 Ionic 组件上调用方法：

1. 为组件创建 `ref`
2. 直接在 `ref.current` 上调用方法

这种模式是必要的，因为 React refs 将组件实例存储在 `.current` 属性中。

您可以在每个组件的 API 文档的 [Methods](/docs/api/content.md#methods) 部分找到可用的方法。

## 在设备上运行

Ionic 的组件可以在任何地方工作：iOS、Android 和 PWA。要部署到移动设备，请使用 [Capacitor](https://capacitorjs.com)：

```shell
ionic build
ionic cap add ios
ionic cap add android
```

在各自的 IDE 中打开原生项目：

```shell
ionic cap open ios
ionic cap open android
```

更多信息请参阅 [Capacitor 入门指南](https://capacitorjs.com/docs/getting-started/with-ionic)。

## 探索更多

本指南涵盖了创建 Ionic React 应用、添加导航以及引入 Capacitor 进行原生构建的基础知识。要深入了解，请查看：

<DocsCards>

<DocsCard header="构建您的第一个应用" href="your-first-app" icon="/icons/component-content-icon.png">
  <p>使用 Ionic React 和原生设备功能构建一个真实的照片库应用。</p>
</DocsCard>

<DocsCard header="React 文档" href="https://react.dev/learn" icon="/icons/logo-react-icon.png">
  <p>从官方 React 文档中了解更多关于 React 的核心概念、工具和最佳实践。</p>
</DocsCard>

<DocsCard header="导航" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>了解如何使用 React Router 处理 Ionic React 应用中的路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/docs/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，用于构建美观的应用。</p>
</DocsCard>

<DocsCard header="主题" href="/docs/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>学习如何使用 Ionic 强大的主题系统自定义应用的外观和感觉。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>探索如何使用 Capacitor 访问原生设备功能并将您的应用部署到 iOS、Android 和 Web。</p>
</DocsCard>

</DocsCards>