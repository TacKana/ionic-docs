---
title: Ionic React 快速入门
sidebar_label: 快速入门
---

<head>
  <title>使用 Ionic CLI 快速入门 Ionic React：React 基础</title>
  <meta
    name="description"
    content="Ionic React 快速入门涵盖了 React 和 Ionic 的基础知识，包括任何 Ionic 特有的功能。学习如何使用 Ionic CLI 构建 React 应用。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

欢迎阅读！本指南将带你了解 Ionic React 开发的基础知识。你将学习如何设置开发环境、生成一个简单的项目、探索项目结构以及理解 Ionic 组件的工作原理。这对于在构建第一个真实应用之前熟悉 Ionic React 来说是完美的。

如果你想要了解 Ionic React 是什么以及它如何融入 React 生态系统的高层次概述，请参阅 [Ionic React 概述](overview)。

## 先决条件

开始之前，请确保你的电脑上已安装 Node.js 和 npm。
你可以通过运行以下命令来检查：

```shell
node -v
npm -v
```

如果你没有安装 Node.js 和 npm，请[在此处下载 Node.js](https://nodejs.org/en/download)（其中包含 npm）。

## 使用 Ionic CLI 创建项目

首先，安装最新版本的 [Ionic CLI](../cli)：

```shell
npm install -g @ionic/cli
```

然后，运行以下命令来创建并运行一个新项目：

```shell
ionic start myApp blank --type react

cd myApp
ionic serve
```

运行 `ionic serve` 后，你的项目将在浏览器中打开。

![Ionic React 主页截图](/img/guides/quickstart/home-page.png 'Ionic React 主页组件')

## 探索项目结构

你的新应用目录将如下所示：

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
以下示例中的所有文件路径均相对于项目根目录。
:::

让我们逐一查看这些文件，以了解应用的结构。

## 查看 App 组件

你的应用的根组件定义在 `App.tsx` 中：

```tsx title="src/App.tsx"
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

// ..CSS imports...

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

这设置了应用的根结构，使用了 Ionic 的 `IonApp` 和 `IonReactRouter` 组件。`IonRouterOutlet` 是页面显示的地方。

## 查看路由

路由定义在 `App.tsx` 中的 `IonRouterOutlet` 内：

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

当你访问根 URL (`/`) 时，`Home` 组件将被加载。

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

这创建了一个带有标题和可滚动内容区域的页面。`IonPage` 组件提供了基本的页面结构，必须在每个页面上使用。第二个标题显示一个[可折叠大标题](/docs/api/title.md#collapsible-large-titles)，当位于内容顶部时显示，向下滚动时则压缩以显示第一个标题中的较小标题。

:::tip 了解更多
有关 Ionic 布局组件的详细信息，请参阅 [Header](/docs/api/header.md)、[Toolbar](/docs/api/toolbar.md)、[Title](/docs/api/title.md) 和 [Content](/docs/api/content.md) 文档。
:::

## 添加 Ionic 组件

你可以使用更多 Ionic UI 组件来增强你的主页。例如，在 `Home.tsx` 的 `IonContent` 末尾导入并添加一个[按钮](/docs/api/button.md)：

```tsx title="src/pages/Home.tsx"
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// ...existing imports...

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* ...existing content... */}

        <IonButton>Navigate</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

## 添加新页面

在 `New.tsx` 处创建一个新页面：

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

这创建了一个在[工具栏](/docs/api/toolbar.md)中带有[返回按钮](/docs/api/back-button.md)的页面。返回按钮将自动处理导航回上一页，如果没有历史记录，则导航到 `/`。

:::warning
创建自己的页面时，请始终将 `IonPage` 用作根组件。这对于页面之间的正确过渡、Ionic 组件依赖的基础 CSS 样式以及整个应用中一致的布局行为至关重要。
:::

## 导航到新页面

要导航到新页面，请先通过在 `Home` 导入之后在 `App.tsx` 顶部导入它来为其创建路由：

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
导航也可以使用 React Router 的 `history` 属性以编程方式执行。有关更多信息，请参阅 [React 导航文档](/docs/react/navigation.md#navigating-using-history)。
:::

## 为新页面添加图标

Ionic React 预装了 [Ionicons](https://ionic.io/ionicons/)。你可以通过设置 `IonIcon` 组件的 `icon` 属性来使用任何图标。

更新 `New.tsx` 中的导入以导入 `IonIcon` 以及 `heart` 和 `logoIonic` 图标：

```tsx title="src/pages/New.tsx"
import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { heart, logoIonic } from 'ionicons/icons';
```

然后，将它们包含在 `IonContent` 内部：

```tsx title="src/pages/New.tsx"
<IonIcon icon={heart} />
<IonIcon icon={logoIonic} />
```

请注意，我们传递的是导入的 SVG 引用，**而不是**字符串形式的图标名称。

有关更多信息，请参阅[图标文档](/docs/api/icon.md)和 [Ionicons 文档](https://ionic.io/ionicons/)。

## 调用组件方法

让我们添加一个可以将内容区域滚动到底部的按钮。

更新 `New.tsx`，在 `IonContent` 上添加一个 `ref`，并在现有图标之后添加一个按钮和一些项目：

```tsx title="src/pages/New.tsx"
<IonContent ref={content}>
  <IonIcon icon={heart} />
  <IonIcon icon={logoIonic} />

  <IonButton onClick={scrollToBottom}>Scroll to Bottom</IonButton>

  {/* 添加大量内容以便滚动 */}
  {Array.from({ length: 50 }, (_, i) => (
    <IonItem key={i}>
      <IonLabel>Item {i + 1}</IonLabel>
    </IonItem>
  ))}
</IonContent>
```

然后，为其他组件添加导入并定义 `scrollToBottom` 函数：

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
    // ...existing template...
  );
};

export default New;
```

要调用 Ionic 组件上的方法：

1. 为组件创建一个 `ref`
2. 直接在 `ref.current` 上调用方法

这种模式是必要的，因为 React refs 将组件实例存储在 `.current` 属性中。

你可以在每个组件的 API 文档的[方法](/docs/api/content.md#methods)部分找到可用的方法。

## 在设备上运行

Ionic 的组件在任何地方都能工作：iOS、Android 和 PWA。要部署到移动设备，请使用 [Capacitor](https://capacitorjs.com)：

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

本指南涵盖了创建 Ionic React 应用、添加导航以及介绍用于原生构建的 Capacitor 的基础知识。要深入了解，请查看：

<DocsCards>

<DocsCard header="构建你的第一个应用" href="your-first-app" icon="/icons/component-content-icon.png">
  <p>使用 Ionic React 和原生设备功能构建一个真实的照片库应用。</p>
</DocsCard>

<DocsCard header="React 文档" href="https://react.dev/learn" icon="/icons/logo-react-icon.png">
  <p>从官方 React 文档中了解更多关于 React 的核心概念、工具和最佳实践。</p>
</DocsCard>

<DocsCard header="导航" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>了解如何使用 React Router 处理 Ionic React 应用中的路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/docs/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，用于构建精美的应用。</p>
</DocsCard>

<DocsCard header="主题" href="/docs/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>学习如何使用 Ionic 强大的主题系统定制应用的外观和感觉。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>探索如何使用 Capacitor 访问原生设备功能并将你的应用部署到 iOS、Android 和 Web。</p>
</DocsCard>

</DocsCards>