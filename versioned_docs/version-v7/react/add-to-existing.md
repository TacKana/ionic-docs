---
title: 集成到现有 React 项目
sidebar_label: 集成到现有项目
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>将 Ionic React 集成到现有项目：完整指南</title>
  <meta
    name="description"
    content="学习如何在现有 React 项目中集成 Ionic React。分步指南，将 Ionic 组件和功能集成到现有的 React 应用程序中。"
  />
</head>

本指南介绍了如何将 Ionic React 添加到现有的 React 项目中。如果你想从头开始一个新项目，请查阅 [Ionic React 快速入门](/v7/react/quickstart) 指南。要了解 Ionic React 如何与 React 协同工作，包括版本支持和工具，请查阅 [Ionic React 概述](/v7/react/overview)。

:::tip

本指南使用 TypeScript 示例。如果你使用 JavaScript，安装过程是相同的，但你需要使用 `.jsx` 文件扩展名而不是 `.tsx`。

:::

## 安装设置

:::info

本指南遵循使用 Vite 创建的 React 应用结构。如果你使用其他工具（例如 Create React App）启动 React 应用，你的文件结构和设置可能有所不同。

:::

按照以下步骤将 Ionic React 添加到你的现有 React 项目：

#### 1. 安装包

```bash
npm install @ionic/react
```

#### 2. 配置 Ionic React

更新 `src/App.tsx` 以包含 `setupIonicReact` 并导入所需的 Ionic Framework 样式表：

```tsx title="src/App.tsx"
// ...现有导入...

import { setupIonicReact } from '@ionic/react';

/* Ionic 组件正常工作所需的核心 CSS */
import '@ionic/react/css/core.css';

/* 使用 Ionic 构建应用所需的基础 CSS */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

setupIonicReact();

// ...现有的应用函数和导出...
```

`setupIonicReact` 是一个函数，用于设置 Ionic React 组件以在你的应用中工作。在使用任何 Ionic React 组件之前必须调用它。

:::info

虽然 `core.css` 是必需的，但 `normalize.css`、`structure.css` 和 `typography.css` 是推荐的，但不是必需的。它们可以标准化跨浏览器差异，确保正确的滚动行为，并提供一致的排版和表单样式。如果没有它们，你可能需要自己处理这些问题。更多详情，请参阅 [全局样式表](/v7/layout/global-stylesheets)。

:::

## 使用独立组件

完成上述设置后，你可以在现有的 React 应用中使用 Ionic 组件。以下是如何使用它们的示例：

将 `src/App.tsx` 更新为以下内容：

```tsx title="src/App.tsx"
import { IonButton, IonDatetime, setupIonicReact } from '@ionic/react';
import './App.css';

/* Ionic 组件正常工作所需的核心 CSS */
import '@ionic/react/css/core.css';

/* 使用 Ionic 构建应用所需的基础 CSS */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

setupIonicReact();

const App: React.FC = () => (
  <>
    <IonButton>按钮</IonButton>
    <IonDatetime></IonDatetime>
  </>
);

export default App;
```

访问 [组件](/v7/components) 页面以查看所有可用的 Ionic 组件。

:::tip

如果你的现有 React 应用在 `src/main.tsx` 中导入了全局样式表（例如 `index.css`），你可能需要删除它或更新与 Ionic Framework 组件冲突的任何样式。Ionic Framework 包含自己的 CSS 重置和标准化，可能会与现有的全局样式冲突。

:::

## 使用 Ionic 页面

如果你想使用具有完整导航和页面转场效果的 Ionic 页面，请按照以下额外的设置步骤操作。

#### 1. 添加额外的 Ionic Framework 样式表

更新 `src/App.tsx` 中导入的样式表：

```tsx title="src/App.tsx"
/* Ionic 组件正常工作所需的核心 CSS */
import '@ionic/react/css/core.css';

/* 使用 Ionic 构建应用所需的基础 CSS */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* 可选的 CSS 工具类，可以注释掉 */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
```

这些样式表设置了整体页面结构，并为快速开发提供了 [CSS 工具类](/v7/layout/css-utilities)。其中一些样式表是可选的。要了解哪些样式表是必需的，请查阅 [全局样式表](/v7/layout/global-stylesheets)。

#### 2. 设置主题

创建 `src/theme/variables.css` 文件，内容如下：

```css title="src/theme/variables.css"
/* 有关如何创建自己的主题的信息，请参考：
https://ionicframework.com/docs/theming/ */
```

然后，在 `src/App.tsx` 中导入该文件以及深色调色板样式表：

```tsx title="src/App.tsx"
// ...现有导入...

// ...现有样式表...

/**
 * Ionic 深色模式
 * -----------------------------------------------------
 * 更多信息，请参考：
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/react/css/palettes/dark.always.css'; */
/* @import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* 主题变量 */
import './theme/variables.css';

setupIonicReact();

// ...现有的应用函数和导出...
```

`variables.css` 文件可用于创建自定义的 Ionic Framework 主题。`dark.system.css` 导入会在系统设置为偏好深色外观时为你的 Ionic 应用启用 [深色模式支持](/v7/theming/dark-mode)。你可以通过取消注释不同的深色调色板导入或在 `theme/variables.css` 中添加自定义 CSS 变量来自定义主题行为。

#### 3. 更新应用组件

将 `src/App.tsx` 更新为以下内容：

```tsx title="src/App.tsx"
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Ionic 组件正常工作所需的核心 CSS */
import '@ionic/react/css/core.css';

/* 使用 Ionic 构建应用所需的基础 CSS */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* 可选的 CSS 工具类，可以注释掉 */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic 深色模式
 * -----------------------------------------------------
 * 更多信息，请参考：
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/react/css/palettes/dark.always.css'; */
/* @import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* 主题变量 */
import './theme/variables.css';

setupIonicReact();

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>{/* 路由将在此处添加 */}</IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
```

#### 4. 创建首页

在 `src/pages/Home.tsx` 创建一个新文件，内容如下：

```tsx title="src/pages/Home.tsx"
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Home.css';

const Home = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>首页</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">首页</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div id="container">
          <strong>准备好创建应用了吗？</strong>
          <p>
            从 Ionic{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
              UI 组件
            </a>{' '}
            开始
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

接着，创建 `src/pages/Home.css`：

```css title="src/pages/Home.css"
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
```

#### 5. 设置路由

:::important

Ionic React Router 目前仅支持 React Router v5。你必须安装以下特定版本的 router 包才能设置 Ionic React 的路由。

:::

安装 router 包：

```bash
npm install @ionic/react-router react-router@5 react-router-dom@5
npm install @types/react-router-dom --save-dev
```

然后，更新 `src/App.tsx` 以添加首页的路由：

```tsx title="src/App.tsx"
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

// ...现有的 Ionic Framework 样式表导入...

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

一切就绪！你的 Ionic React 应用现已配置了完整的 Ionic 页面支持。运行 `npm run dev` 启动开发服务器并查看你的应用。

## 后续步骤

现在你已将 Ionic React 集成到项目中，请查看：

<DocsCards>

<DocsCard header="导航" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>了解如何使用 React Router 在 Ionic React 应用中处理路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/v7/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，用于构建精美的应用。</p>
</DocsCard>

<DocsCard header="主题" href="/v7/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>学习如何使用 Ionic 强大的主题系统自定义应用的外观和风格。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>探索如何使用 Capacitor 访问原生设备功能，并将你的应用部署到 iOS、Android 和 Web。</p>
</DocsCard>

</DocsCards>
