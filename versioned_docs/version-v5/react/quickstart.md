---
sidebar_label: 快速入门
---

# Ionic React 快速入门指南

## 什么是 Ionic 框架？

首先，如果你是第一次接触 Ionic，欢迎！Ionic 是一个免费开源的组件库，用于构建能在 iOS、Android、Electron 和 Web 上运行的应用程序。你只需使用熟悉的技术（HTML、CSS、JavaScript）编写一次应用，即可部署到任何平台。

除了 UI 组件，Ionic 还提供了用于创建新应用以及部署到我们所支持的各种平台的命令行工具。

在本指南中，我们将介绍 React 和 Ionic 的基础知识，包括所有 Ionic 特有的功能。如果你熟悉 React，可以愉快阅读本指南并了解 Ionic 的新特性。如果你对两者都不熟悉，也无需担心！本指南将涵盖基础知识，并提供足够的信息来搭建和运行一个应用。

## 使用 Ionic CLI 创建项目

首先，让我们安装最新版本的 Ionic CLI。

```shell
npm install -g @ionic/cli
```

安装完成后，全局命令 `ionic` 将允许创建一个包含 Ionic 和其他依赖项的 React 项目。要创建一个新项目，请运行以下命令：

```shell
ionic start myApp blank --type=react
cd myApp
```

接下来，运行 `ionic serve`，我们的项目就会在浏览器中运行。

## 初探 React 组件

我们应用的基础位于 `src` 目录，主要入口点是 `index.tsx`。如果我们在代码编辑器中打开项目并查看 `src/index.tsx`，应该会看到以下内容：

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

这里发生了什么？前两行是引入一些依赖项。第一行是 React 本身，这允许我们使用一种类似 HTML 的语法（称为 JSX）来编写组件。稍后我们会讨论 JSX。

第二个导入是 ReactDOM，`ReactDOM.render` 方法是浏览器/DOM 特有的方式，用于将我们的组件渲染到指定的 DOM 节点。

最后一个导入是我们应用的根组件，简单命名为 `App`。这是我们的第一个 React 组件，将用于 React 应用的启动过程。

如果打开 `App.tsx`，应该会看到以下内容。

```tsx
import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* 导入 Ionic 组件正常工作所需的核心 CSS */
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

乍一看可能有点复杂，让我们来分解一下，从第一组导入开始。

```tsx
import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
```

与 `index.tsx` 类似，我们必须首先导入 React 才能使用 JSX。

下一个导入来自 `react-router-dom`，我们导入了 Route 组件，用于将应用的 URL 与我们要渲染的组件匹配。

在 ReactRouter 之后，我们首次导入了 Ionic 组件。要在 React 中使用一个组件，必须先导入它。对于 Ionic 来说，这意味着每当我们想使用按钮或卡片时，都必须将其添加到导入中。在我们的 App 组件中，我们只使用了 `IonApp`、`IonRouterOutlet` 和 `IonReactRouter`。

`IonReactRouter` 是一个包装了 ReactRouter 的 BrowserRouter 组件的组件。它的行为与 BrowserRouter 大致相同，但有一些区别。我们在 [React 导航文档](navigation.md) 中有更深入的指南来介绍这些差异。

最后一个重要的导入是 `Home` 组件，这是我们应用中将要导航到的组件。稍后我们会看看导航部分。

CSS 导入引入了 Ionic 的实用样式，用于处理内边距、排版等。

回顾完所有导入后，我们首次看到了一个 React 组件：

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

这个 React 组件设置了我们应用的初始路由，并包含了一些用于动画和布局的核心 Ionic 组件（IonRouterOutlet 和 IonApp）。一个值得注意的地方是，在 React 中，要进行数据绑定，值需要用花括号（`{}`）包裹。所以在 `Route` 组件中，我们可以将 `component` 的值设置为之前导入的 `Home` 组件。这样 React 就知道这个值不是字符串，而是对组件的引用。

:::note
这里需要注意的是，这些都是标准的 React DOM 库，意味着没有自定义的集成层或转译步骤。
:::

## 带有样式的组件

现在 `App` 组件其实没有太多需要修改的地方。它只是一个容器组件的基本示例。设置了路由逻辑后，它的全部职责就是渲染与给定 URL 路由匹配的组件。既然我们已经有了一个组件/路由设置，让我们继续修改 `Home` 组件。

目前，`Home` 组件看起来像这样：

![Ionic React 首页截图，显示消息“准备好创建应用了吗？从 Ionic UI 组件开始”](/img/guides/quickstart/home-page.png 'Ionic React 首页组件')

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
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener" href="https://ionicframework.com/docs/">
            docs
          </a>{' '}
          will be your guide.
        </p>
      </IonContent>
    </IonPage>
  );
};
```

就像我们开始时看到的 `App` 组件一样，我们有一些特定 Ionic 组件的导入、一个 React 导入，以及 React 组件本身。

`IonPage` 是所有页面（具有路由/URL 的组件）的基础组件，并包含一些全屏组件的常见构建块，如页眉、标题和内容组件。

:::note
创建自己的页面时，不要忘记让 `IonPage` 成为根组件。让 `IonPage` 作为根组件很重要，因为它有助于确保过渡效果正常工作，并提供 Ionic 组件依赖的基础 CSS。
:::

`IonHeader` 有点顾名思义。它是一个设计用于位于页面顶部的组件。`IonHeader` 本身除了处理一些基于 flexbox 的布局外，并没有太多功能。它旨在容纳其他组件，如 `IonToolbar` 或 `IonSearchbar`。

`IonContent` 顾名思义，是我们页面的主要内容区域。它负责提供用户将与之交互的可滚动内容，以及应用中可能使用的任何滚动事件。

我们当前的内容相对简单，但不包含任何可在实际应用中使用的功能，所以让我们来改变它。

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
          <h1>Create Idea</h1>
          <IonNote>Run Idea by Brandy</IonNote>
        </IonLabel>
        <IonBadge color="success" slot="end">
          5 Days
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
    <h1>Create Idea</h1>
    <IonNote>Run Idea by Brandy</IonNote>
  </IonLabel>
  <IonBadge color="success" slot="end">
    5 Days
  </IonBadge>
</IonItem>
```

Item 很重要，因为它清晰地展示了 React 概念和 Web 组件概念的混合。第一个明显的 React 概念例子是 `IonCheckbox` 中 React 组件的自闭合标签。这只是编写不包含任何子内容的组件的一种更简单的方式。

从 Web 组件方面看，我们有一个特殊的属性叫做 `slot`。这是让 `IonItem` 知道在渲染时将 `IonCheckbox` 放置在何处的关键。这不是 React API，而是 Web 标准的 API。

让我们看看 Ionic 的另一个组件：FAB（浮动操作按钮）。FAB 是一种很好的方式，可以提供一个从应用其余部分提升出来的主要操作。对于这个 FAB，我们需要三个组件：一个 FAB、一个 FAB 按钮和一个图标。

```tsx
import { add } from ‘ionicons/icons’;
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

在我们的主 `IonFab` 上，我们通过 `vertical` 和 `horizontal` 属性设置其定位。我们还通过 `slot` 属性将渲染位置设置为 "fixed"。这将告诉 `IonFab` 在 `IonContent` 的可滚动内容之外渲染。

现在让我们为它连接一个点击处理程序。我们想要做的是，当我们点击按钮时，导航到一个新页面（我们稍后会创建）。为此，我们需要访问 React Router 的导航 API。幸运的是，由于这是在 Router/Route 上下文中渲染的，我们可以通过传递给 Home 组件的 Props 访问 React Router 的 API。

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

在我们的组件声明中，我们传入了 `props`，其类型为 `RouteComponentProps`（从 `react-router` 导入）。这个 `props` 对象让我们可以访问 React Router 的 history API，允许我们将新路由推入导航栈。在我们的 `IonFabButton` 上，我们可以添加一个点击处理程序，只需调用 `props.history.push` 并传入新路由。在这个例子中，我们将导航到 `new`。

```tsx
<IonFabButton onClick={() => props.history.push('/new')} >
```

## 创建新路由

既然我们已经有了在应用中导航的组件，我们需要创建一个新组件并将新路由添加到我们的路由器声明中。让我们打开 `App.tsx` 文件并添加新路由。

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

现在我们的路由器有了 `/new` 路由的条目，我们将创建所需的组件 `NewItem`。它将位于 `src/pages/NewItem.tsx`。

让我们暂时用一些占位符内容填充 `NewItem.tsx`。

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
          <IonTitle>New Item</IonTitle>
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

这里的内容非常直接，应该看起来与 `Home` 组件类似。新的是 `IonBackButton` 组件，用于导航回上一个路由。很简单对吧？但是，如果我们重新加载页面呢？

在这种情况下，内存中的历史记录会丢失，所以后退按钮会消失。为了解决这个问题，我们可以设置 `defaultHref` 属性值，指定在没有历史记录时要导航到的 URL。

```tsx
return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/home" />
        </IonButtons>
        <IonTitle>New Item</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent />
  </IonPage>
);
```

这样，当我们重新加载时，如果应用历史记录不存在，我们将能够导航回首页路由。

## 构建原生应用

现在我们已经掌握了 Ionic React 应用的基础知识，包括一些 UI 组件和导航。Ionic 组件的一大优点是它们可以在任何地方工作，包括 iOS、Android 和 PWA。要部署到移动设备、桌面及其他平台，我们使用 Ionic 的跨平台应用运行时 [Capacitor](https://capacitorjs.com)。它提供了一套一致的、以 Web 为中心的 API，使应用尽可能接近 Web 标准，同时在支持的平台上访问丰富的原生设备功能。

添加原生功能很容易。首先，将 Capacitor 添加到你的项目中：

```shell
ionic integrations enable capacitor
```

接下来，构建项目，然后添加你选择的平台：

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

更多详细信息可以在 [这里](https://capacitorjs.com/docs/getting-started/with-ionic) 找到。

接下来，查看 [所有可用的 API](https://capacitorjs.com/docs/apis)。其中有一些很棒的功能，包括 [相机 API](https://capacitorjs.com/docs/apis/camera)。我们可以用几行代码实现照片拍摄功能：

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
        <IonButton onClick={takePhoto}>Take Photo</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

## 下一步去哪里

本指南涵盖了创建 Ionic React 应用的基础知识，添加了一些基本导航，并介绍了 Capacitor 作为构建原生应用的方式。要深入了解如何使用 React 和 Capacitor 构建完整的 Ionic 应用，请遵循我们的 [第一个应用指南](your-first-app.md)。

要更详细地了解 Ionic 的组件，请查看 [组件 API 页面](https://ionicframework.com/docs/components)。有关 React 的更多详细信息，请查阅 [React 文档](https://reactjs.org/)。要继续构建原生功能，请参阅 [Capacitor 文档](https://capacitorjs.com/docs/)。

祝应用开发愉快！🎉