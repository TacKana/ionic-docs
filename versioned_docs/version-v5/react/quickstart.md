---
title: 快速入门
sidebar_label: 快速入门
---

# Ionic React 快速入门指南

## 什么是 Ionic Framework？

首先，如果您是新来的，欢迎！Ionic 是一个免费开源的组件库，用于构建可在 iOS、Android、Electron 和 Web 上运行的应用。您使用熟悉的技术（HTML、CSS、JavaScript）一次编写应用，即可部署到任何平台。

除了 UI 组件，Ionic 还提供了一个命令行工具，用于创建新应用以及部署到我们支持的各种平台。

在本指南中，我们将介绍 React 和 Ionic 的基础知识，包括任何 Ionic 特有的功能。如果您熟悉 React，请享受本指南并学习一些关于 Ionic 的新知识。如果您对两者都不熟悉，没关系！本指南将涵盖基础知识，并提供足够的信息让您启动并运行一个应用。

## 使用 Ionic CLI 创建项目

首先，让我们安装最新版本的 Ionic CLI。

```shell
npm install -g @ionic/cli
```

从这里开始，全局命令 `ionic` 将允许使用 Ionic 和任何其他依赖项创建 React 项目。要创建一个新项目，请运行以下命令：

```shell
ionic start myApp blank --type=react
cd myApp
```

然后，我们运行 `ionic serve`，让项目在浏览器中运行。

## 查看 React 组件

我们应用的基础将位于 `src` 目录中，主要入口点将是我们的 `index.tsx`。如果我们在代码编辑器中打开项目并打开 `src/index.tsx`，应该会看到以下内容：

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

那么这里发生了什么？前两行引入了一些依赖。第一行是 React 本身。这使我们能够以称为 JSX 的类似 HTML 的语法编写组件。我们稍后会讨论 JSX。

第二个导入是 ReactDOM。`ReactDOM.render` 方法是浏览器/DOM 特定的方式，用于获取我们的组件并将其渲染到指定的 DOM 节点。

最后一个导入是我们应用的根组件，简称为 `App`。这是我们的第一个 React 组件，将在我们 React 应用的引导过程中使用。

如果我们打开 `App.tsx`，应该会看到以下内容。

```tsx
import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Ionic 组件正常工作所需的核心 CSS */
import '@ionic/react/css/core.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
```

乍一看，可能觉得有很多内容，让我们逐一分解，从第一组导入开始。

```tsx
import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
```

与 `index.tsx` 类似，我们首先必须导入 React 才能使用 JSX。

下一个导入来自 `react-router-dom`。我们导入 `Route`，这是我们匹配应用 URL 与要渲染组件的方式。

在 ReactRouter 之后，我们接着导入第一个 Ionic 组件。要在 React 中使用组件，必须首先导入它。因此，对于 Ionic 来说，这意味着任何时候我们想要使用 Button 或 Card，都必须将其添加到导入中。在我们的 App 组件中，我们只使用了 `IonApp`、`IonRouterOutlet` 和 `IonReactRouter`。

`IonReactRouter` 是一个包装了 ReactRouter 的 BrowserRouter 的组件。它的行为与 BrowserRouter 基本相同，但有一些差异。我们有一份更深入的指南，介绍这些差异——请参阅我们的 [React 导航文档](navigation.md)。

最后一个重要的导入是 `Home` 组件。这是我们应用中可以通过导航访问的组件。我们稍后会查看导航部分。

CSS 导入引入了 Ionic 的实用样式，用于内边距、排版等。

在查看了所有导入之后，我们现在第一次看到一个 React 组件：

```tsx
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
```

这个 React 组件设置了应用的初始路由，并包含了一些用于动画和布局的核心 Ionic 组件（IonRouterOutlet 和 IonApp）。需要注意的一点是，在 React 中，要进行数据绑定，值放在花括号（`{}`）中。所以在 `Route` 组件中，我们可以将 `component` 的值设置为之前的 `Home` 组件。这就是 React 知道该值不是字符串而是组件引用的方式。

:::note
这里需要重点注意的是，这些都是标准的 React DOM 库，意味着没有自定义的集成层或转译步骤。
:::

## 带样式的组件

现在 `App` 组件没有太多需要修改的地方。它是一个容器组件的基本示例。路由逻辑设置好后，它唯一负责的就是渲染与给定 URL 路由匹配的组件。既然我们已经设置好了一个组件/路由，那就继续修改我们的 `Home` 组件吧。

目前，`Home` 组件看起来是这样的：

![Ionic React Home 页面截图，显示消息"准备创建应用？从 Ionic UI 组件开始"](/img/guides/quickstart/home-page.png 'Ionic React Home 组件')

```tsx
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        世界是你的 oyster。
        <p>
          如果你迷路了，{' '}
          <a target="_blank" rel="noopener" href="https://ionicframework.com/docs/">
            文档
          </a>{' '}
          将指引你。
        </p>
      </IonContent>
    </IonPage>
  );
};
```

与我们开始的 `App` 组件类似，我们有一些特定 Ionic 组件的导入、React 的导入，然后是 React 组件本身。

`IonPage` 是所有页面的基础组件（具有路由/URL 的组件），包含一些全屏组件的通用构建块，如 header、title 和 content 组件。

:::note
创建自己的页面时，不要忘记将 `IonPage` 作为根组件。将 `IonPage` 作为根组件很重要，因为它有助于确保过渡效果正常工作，并提供 Ionic 组件所依赖的基础 CSS。
:::

`IonHeader` 顾名思义，是一个位于页面顶部的组件。`IonHeader` 本身除了处理一些基于 flexbox 的布局外，并不做太多事情。它用于容纳其他组件，如 `IonToolbar` 或 `IonSearchbar`。

`IonContent` 顾名思义，是我们页面的主要内容区域。它负责提供用户可交互的可滚动内容，以及应用中可能使用的任何滚动事件。

我们当前的内容相对简单，但不包含任何可用于实际应用的内容，所以让我们改变一下。

:::note
为简洁起见，我们省略了组件的重复部分，如函数声明或其他组件的导入语句。
:::

```tsx
<IonPage>
  ...
  <IonContent>
    <IonList>
      <IonItem>
        <IonCheckbox slot="start" />
        <IonLabel>
          <h1>创建想法</h1>
          <IonNote>与 Brandy 讨论想法</IonNote>
        </IonLabel>
        <IonBadge color="success" slot="end">
          5 天
        </IonBadge>
      </IonItem>
    </IonList>
  </IonContent>
</IonPage>
```

在我们的 `IonContent` 中，我们添加了一个 `IonList` 和一个更复杂的 `IonItem` 组件。让我们看看 `IonItem`，因为它是这里的核心。

```tsx
<IonItem>
  <IonCheckbox slot="start" />
  <IonLabel>
    <h1>创建想法</h1>
    <IonNote>与 Brandy 讨论想法</IonNote>
  </IonLabel>
  <IonBadge color="success" slot="end">
    5 天
  </IonBadge>
</IonItem>
```

Item 很重要，因为它清晰地展示了 React 概念和 Web Component 概念的混合。React 概念的第一个明显例子是 `IonCheckbox` 中 React 组件的自闭合标签。这只是编写不包含任何子内容的组件的一种更简洁的方式。

从 Web Components 方面来看，我们有一个特殊的属性叫做 `slot`。这对于让 `IonItem` 知道在渲染时将 `IonCheckbox` 放在哪里至关重要。这不是 React API，而是 Web 标准 API。

让我们看看 Ionic 的另一个组件——FAB。浮动操作按钮是一种很好的方式，可以提供高于应用其他部分的主要操作。对于这个 FAB，我们需要三个组件：FAB、FAB Button 和一个 Icon。

```tsx
import { add } from 'ionicons/icons';
…

<IonContent>
  <IonList>
  ...
  </IonList>

  <IonFab vertical="bottom" horizontal="end" slot="fixed">
    <IonFabButton>
      <IonIcon icon={add} />
    </IonFabButton>
  </IonFab>

</IonContent>
```

在我们的主 `IonFab` 上，我们通过 vertical 和 horizontal 属性设置其位置。我们还将渲染位置设置为 "fixed"（通过 slot 属性）。这将告诉 `IonFab` 在 `IonContent` 的可滚动内容之外渲染。

现在让我们为它添加一个点击处理程序。我们想要做的是，当我们点击按钮时，导航到一个新页面（我们稍后会创建）。为此，我们需要访问 React Router 的导航 API。幸运的是，由于这是在 Router/Route 上下文中渲染的，我们可以通过传递给 Home 组件的 Props 访问 React Router 的 API。

```tsx
import { add } from 'ionicons/icons';
...
const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>...</IonHeader>
      <IonContent>
        <IonList>...</IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/new')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
}
export default Home;
```

在我们的组件声明中，我们传入了 `props`，其类型为 `RouteComponentProps`（从 `react-router` 导入）。这个 `props` 对象使我们能够访问 React Router 的 history API，从而可以将新路由推送到导航栈上。在我们的 `IonFabButton` 上，我们可以添加一个点击处理程序，只需调用 `props.history.push` 并传入新路由。在本例中，我们将导航到 `new`。

```tsx
<IonFabButton onClick={() => props.history.push('/new')} >
```

## 创建新路由

现在我们已经有了在应用中导航的各个部分，需要创建一个新组件并将新路由添加到路由声明中。让我们打开 `App.tsx` 文件并添加新路由。

```tsx
...
import Home from './pages/Home';

import NewItem from './pages/NewItem';
...
const App: React.FC = () => {
  const isAuthed = true;
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} />
          <Route path="/new" component={NewItem} />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
export default App;
```

现在我们的路由有了 `/new` 的条目，我们需要创建所需的组件 `NewItem`。它将存在于 `src/pages/NewItem.tsx` 中。

让我们先为 `NewItem.tsx` 填充一些占位内容。

```tsx
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const NewItem: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>新项目</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};
export default NewItem;
```

:::note
每个视图必须包含一个 `IonPage` 组件。没有它，页面过渡将无法正常工作。更多信息请参阅 [IonPage 文档](navigation.md#ionpage)。
:::

这里的内容相当直接，应该看起来与 `Home` 组件相似。新增的是 `IonBackButton` 组件。它用于导航回上一个路由。很简单，对吧？但是，如果我们刷新页面呢？

在这种情况下，内存中的历史记录会丢失，因此返回按钮会消失。为了解决这个问题，如果历史记录不存在，我们可以设置 `defaultHref` 属性值为我们想要导航到的 URL。

```tsx
return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/home" />
        </IonButtons>
        <IonTitle>新项目</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent />
  </IonPage>
);
```

这样，当我们刷新时，如果没有应用历史记录，我们仍然可以导航回主页路由。

## 构建原生应用

现在我们已经掌握了 Ionic React 应用的基础知识，包括一些 UI 组件和导航。Ionic 组件的出色之处在于它们可以在任何地方运行，包括 iOS、Android 和 PWA。为了部署到移动端、桌面端等更多平台，我们使用 Ionic 的跨平台应用运行时 [Capacitor](https://capacitorjs.com)。它提供了一组一致的、以 Web 为中心的 API，使应用在尽可能接近 Web 标准的同时，能够在支持它们的平台上访问丰富的原生设备功能。

添加原生功能很容易。首先，将 Capacitor 添加到您的项目：

```shell
ionic integrations enable capacitor
```

接下来，构建项目，然后添加您选择的平台：

```shell
ionic build
ionic cap add ios
ionic cap add android
```

我们使用标准的原生 IDE（Xcode 和 Android Studio）来打开、构建和运行 iOS 和 Android 项目：

```shell
ionic cap open ios
ionic cap open android
```

更多详情请见[此处](https://capacitorjs.com/docs/getting-started/with-ionic)。

接下来，查看所有可用的 [API](https://capacitorjs.com/docs/apis)。其中有一些很棒的功能，包括 [Camera API](https://capacitorjs.com/docs/apis/camera)。我们只需几行代码即可实现照片拍摄功能：

```tsx
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { Plugins, CameraResultType } from '@capacitor/core';

const Home: React.FC = () => {
  const { Camera } = Plugins;
  const [photo, setPhoto] = useState();
  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    setPhoto(image.webPath);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <img src={photo} />
        <IonButton onClick={takePhoto}>拍照</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

## 下一步

本指南涵盖了创建 Ionic React 应用、添加一些基本导航以及介绍 Capacitor 作为构建原生应用方式的基础知识。要更深入地了解使用 React 和 Capacitor 构建完整 Ionic 应用，请按照我们的[第一个应用指南](your-first-app.md)操作。

要更详细地了解 Ionic 的组件，请查看[组件 API 页面](https://ionicframework.com/docs/components)。有关 React 的更多详情，请查阅 [React 文档](https://reactjs.org/)。要继续构建原生功能，请参阅 [Capacitor 文档](https://capacitorjs.com/docs/)。

祝您构建应用愉快！🎉
