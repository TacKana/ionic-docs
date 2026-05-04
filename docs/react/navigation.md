---
title: React 导航
sidebar_label: 导航与路由
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<head>
  <title>React 导航：使用路由链接重定向到其他页面</title>
  <meta
    name="description"
    content="本 React 导航指南涵盖了使用 Ionic 和 React 构建的应用中的路由。学习如何定义重定向路径，通过路由链接导航到其他页面。"
  />
</head>

本指南将介绍在基于 Ionic 和 React 构建的应用中，路由是如何工作的。

`IonReactRouter` 底层使用了流行的 [React Router](https://github.com/remix-run/react-router) 库。借助 Ionic 和 React Router，你可以创建具有丰富页面转场效果的多页面应用。

你在 React Router 中学到的所有路由知识都可以直接应用于 Ionic React。让我们先来了解一下 Ionic React 应用的基础知识以及路由是如何与之协同工作的。

## Ionic React 中的路由

下面是一个简单的 `App` 组件示例，它定义了一条指向 "/dashboard" URL 的路由。当访问 "/dashboard" 时，该路由会渲染 `DashboardPage` 组件。

**App.tsx**

```tsx
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/dashboard" component={DashboardPage} />
        <Redirect exact from="/" to="/dashboard" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
```

在 `Route` 之后，我们定义了一个默认的 `Redirect`。当用户访问应用的根 URL ("/") 时，它会将用户重定向到 "/dashboard" URL。

这个重定向还设置了 `exact` 属性，这意味着 URL 必须与 `from` 属性（或者如果 `Route` 上使用了 `exact`，则是 `path` 属性）精确匹配，该路由才会生效。如果没有 `exact`，由于所有路由都以 "/" 开头，这个重定向将会为每个路由渲染。

你也可以根据条件（例如检查用户是否已认证）在 Route 的 render 方法中进行编程式重定向：

```tsx
<Route
  exact
  path="/dashboard"
  render={(props) => {
    return isAuthed ? <DashboardPage {...props} /> : <LoginPage />;
  }}
/>
```

## IonReactRouter

`IonReactRouter` 组件是对 React Router 中传统的 [`BrowserRouter`](https://v5.reactrouter.com/web/api/BrowserRouter) 组件的封装，它为应用设置了路由环境。因此，请使用 `IonReactRouter` 来替代 `BrowserRouter`。你可以向 `IonReactRouter` 传递任何属性，这些属性都将被传递给底层的 `BrowserRouter`。

## 嵌套路由

在 Dashboard 页面内部，我们可以为应用的这一特定部分定义更多相关的路由：

**DashboardPage.tsx**

```tsx
const DashboardPage: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path="/dashboard" component={UsersListPage} />
        <Route path="/dashboard/users/:id" component={UserDetailPage} />
      </IonRouterOutlet>
    </IonPage>
  );
};
```

这里，我们定义了另外几个路由，用于指向 Dashboard 区域内的不同页面。注意，我们需要在路径中定义完整的路由，即使我们已经从该 URL 进入了此页面，也不能省略 "/dashboard" 部分。React Router 要求使用完整路径，不支持相对路径。

不过，我们可以利用 [`match`](https://v5.reactrouter.com/web/api/match) 对象的 `url` 属性来获取用于渲染组件的匹配 URL，这在处理嵌套路由时会很有帮助：

```tsx
const DashboardPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path={match.url} component={UsersListPage} />
        <Route path={`${match.url}/users/:id`} component={UserDetailPage} />
      </IonRouterOutlet>
    </IonPage>
  );
};
```

在这里，`match.url` 的值是 "/dashboard"，因为正是这个 URL 被用来渲染 `DashboardPage`。

这些路由被分组在一个 `IonRouterOutlet` 中，接下来我们就来讨论它。

## IonRouterOutlet

`IonRouterOutlet` 组件为渲染 Ionic "页面" 的路由提供了一个容器。当一个页面位于 `IonRouterOutlet` 内时，该容器不仅会控制页面之间的转场动画，还会管理页面的创建和销毁时机。这有助于在视图间来回切换时，保持之前页面的状态。

上面的 `DashboardPage` 展示了一个用户列表页和一个详情页。当在这两个页面之间导航时，`IonRouterOutlet` 会提供适合平台的页面转场效果，并保留前一个页面的状态。这样，当用户返回列表页时，它会保持与离开时相同的状态。

一个 `IonRouterOutlet` 应该只包含 `Route` 或 `Redirect`。任何其他组件都应该作为 `Route` 渲染的结果来呈现，或者放在 `IonRouterOutlet` 之外。

## 默认路由（404 处理）

一个常见的路由需求是提供一个“默认”或“后备”路由，以便在用户导航到未定义的路由时呈现。

我们可以通过将不带 `path` 属性的 `Route` 组件作为 `IonRouterOutlet` 中的最后一个路由来实现。

**DashboardPage.tsx**

```tsx
const DashboardPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonRouterOutlet>
      <Route exact path={match.url} component={UsersListPage} />
      <Route path={`${match.url}/users/:id`} component={UserDetailPage} />
      <Route render={() => <Redirect to={match.url} />} />
    </IonRouterOutlet>
  );
};
```

如上所示，如果访问的路径与前两个 `Route` 都不匹配，`IonRouterOutlet` 会将 Ionic React 应用重定向到 `match.url` 路径。

你也可以提供一个要渲染的组件，而不是进行重定向。

```tsx
const DashboardPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonRouterOutlet>
      <Route exact path={match.url} component={UsersListPage} />
      <Route path={`${match.url}/users/:id`} component={UserDetailPage} />
      <Route component={NotFoundPage} />
    </IonRouterOutlet>
  );
};
```

## IonPage

`IonPage` 组件包裹着 Ionic React 应用中的每个视图，确保页面转场和堆栈导航能正常工作。任何通过路由导航到的视图都必须包含一个 `IonPage` 组件。

`IonPage` 对于正确的样式也是必需的。它提供了一个 Flex 容器，确保页面内容（如 `IonContent`）能够正确调整大小，并且不会与其他 UI 元素（如 `IonTabBar`）重叠。

```tsx
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>首页</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">你好，世界</IonContent>
    </IonPage>
  );
};
export default Home;
```

## 导航

在 Ionic React 应用中，有多种方式可以导航到不同的视图。这里，`UsersListPage` 使用 `IonItem` 的 `routerLink` 属性来指定点击项目时要跳转的路由：

**UsersListPage.tsx**

```tsx
const UsersListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>用户</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/dashboard/users/1">
            <IonLabel>用户 1</IonLabel>
          </IonItem>
          <IonItem routerLink="/dashboard/users/2">
            <IonLabel>用户 2</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```

其他支持 `routerLink` 属性的组件还包括 `IonButton`、`IonCard`、`IonRouterLink`、`IonFabButton` 和 `IonItemOption`。

这些组件也都有一个 `routerDirection` 属性，用于明确设置页面转场的类型（可选值为 `"forward"`、`"back"` 或 `"root"`）。

除了这些带有 `routerLink` 属性的组件，你也可以使用 React Router 的 [`Link`](https://v5.reactrouter.com/web/api/Link) 组件在视图间导航：

```html
<Link to="/dashboard/users/1">用户 1</Link>
```

只要情况允许，我们推荐优先使用上述方法进行路由。这样做的好处是它们都会渲染成一个锚点（`<a>`）标签，这对于提升应用的整体可访问性非常有利。

编程式导航的选项是使用 React Router 通过路由传递给组件的 [`history`](https://v5.reactrouter.com/web/api/history) 属性。

```tsx
<IonButton
  onClick={(e) => {
    e.preventDefault();
    history.push('/dashboard/users/1');
  }}
>
  前往用户 1
</IonButton>
```

:::note
`history` 是一个属性 (prop)。
:::

<LegacyAnchor id="navigating-using-history" />

### 使用 `history.go` 进行导航

React Router 使用了 `history` 包，它提供了一个 [history.go](https://github.com/remix-run/history/blob/dev/docs/api-reference.md#history.go) 方法，允许开发者在应用历史记录中向前或向后移动。让我们看一个例子。

假设你有以下应用历史记录：

`/pageA` --> `/pageB` --> `/pageC`

如果你在 `/pageC` 上调用 `router.go(-2)`，你会被带回到 `/pageA`。如果你之后再调用 `router.go(2)`，你又会回到 `/pageC`。

在 Ionic React 中，目前不支持使用 `history.go()`。您希望在 Ionic React 中添加对此功能的支持吗？[请在 GitHub 上告诉我们](https://github.com/ionic-team/ionic-framework/issues/23775)！

## URL 参数

在 Dashboard 页面中定义的第二个路由包含一个 URL 参数（路径中的 ":id" 部分）。URL 参数是 `path` 中的动态部分，当用户导航到类似 "/dashboard/users/1" 的 URL 时，"1" 这个值会被保存到一个名为 "id" 的参数中，并且可以在该路由渲染的组件内访问到。让我们看看具体如何操作。

**UserDetailPage.tsx**

```tsx
interface UserDetailPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const UserDetailPage: React.FC<UserDetailPageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>用户详情</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>用户 {match.params.id}</IonContent>
    </IonPage>
  );
};
```

[`match`](https://v5.reactrouter.com/web/api/match) 属性包含了匹配路由的相关信息，包括 URL 参数。我们从中获取 `id` 参数并显示在屏幕上。

注意我们是如何使用 TypeScript 接口来为 props 对象提供强类型的。这个接口在组件内部为我们提供了类型安全和代码补全功能。

## 线性路由 vs 非线性路由

### 线性路由

如果你开发过使用路由的 Web 应用，你可能之前使用过线性路由。线性路由意味着你可以通过推入（push）和弹出（pop）页面在应用历史记录中前进或后退。

以下是移动应用中线性路由的一个示例：

<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/linear-routing-demo.mp4')}
  controls
></video>

此示例中的应用历史记录具有以下路径：

`辅助功能` --> `旁白` --> `语音`

当我们按下返回按钮时，我们会沿着相同的路由路径反向返回。线性路由有助于实现简单且可预测的路由行为。

线性路由的缺点是无法支持复杂的用户交互，例如标签视图。这就引出了非线性路由的概念。

### 非线性路由

非线性路由对于许多学习使用 Ionic 构建移动应用的 Web 开发者来说可能是一个新概念。

非线性路由意味着用户应该返回的视图不一定是屏幕上先前显示的视图。

以下是非线性路由的示例：

<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/non-linear-routing-demo.mp4')}
  controls
></video>

在上面的例子中，我们从“原创”标签页开始。点击一个卡片会将我们带到该标签页内的《泰德·拉索》视图。

从这里，我们切换到“搜索”标签页。然后，我们再次点击“原创”标签页，又被带回到《泰德·拉索》视图。此时，我们就已经开始使用非线性路由了。

为什么这是非线性路由？我们之前的视图是“搜索”视图。然而，在《泰德·拉索》视图按下返回按钮应该会带我们回到“原创”标签页的根视图。这是因为在移动应用中，每个标签页都被视为自己的独立堆栈。[标签页的使用](#working-with-tabs)部分会更详细地讨论这一点。

如果在《泰德·拉索》视图按下返回按钮只是简单地调用 `history.go(-1)`，我们将会被带回到“搜索”视图，这显然是不正确的。

非线性路由可以实现线性路由无法处理的复杂用户流程。然而，某些线性路由的 API（如 `history.go()`）在这种非线性环境下无法使用。这意味着在使用标签页或嵌套的 `IonRouterOutlet` 时，不应该使用 `history.go()`。

### 我应该选择哪一种？

我们建议在确实需要添加非线性路由之前，尽量保持应用的简单性。非线性路由非常强大，但它也会给移动应用带来相当大的复杂性。

非线性路由最常见的两种用途是配合标签页和嵌套的 `IonRouterOutlet` 使用。我们建议只有当你的应用确实需要用到标签页或嵌套路由出口时，才考虑使用非线性路由。

更多关于标签页的信息，请参阅 [标签页的使用](#working-with-tabs)。

更多关于嵌套路由出口的信息，请参阅 [嵌套路由](#nested-routes)。

## 共享 URL 与嵌套路由

在设置路由时，一个常见的困惑点是决定使用共享 URL 还是嵌套路由。本指南的这一部分将解释这两种方式，并帮助你决定使用哪一种。

### 共享 URL

共享 URL 是一种路由配置，其中不同的路由共享 URL 的某一部分。以下是一个共享 URL 配置的示例：

```tsx
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/dashboard" exact={true}>
          <DashboardMainPage />
        </Route>
        <Route path="/dashboard/stats" exact={true}>
          <DashboardStatsPage />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
```

上面的路由被认为是“共享”的，因为它们重用了 URL 中的 `dashboard` 部分。

<LegacyAnchor id="nested-routes" />

### 嵌套路由

嵌套路由是一种将路由列为其他路由子级的路由配置。以下是一个嵌套路由配置的示例：

```tsx
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/dashboard/:id">
          <DashboardRouterOutlet />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

const DashboardRouterOutlet: React.FC = () => (
  <IonRouterOutlet>
    <Route path="/dashboard" exact={true}>
      <DashboardMainPage />
    </Route>
    <Route path="/dashboard/stats" exact={true}>
      <DashboardStatsPage />
    </Route>
  </IonRouterOutlet>
);
```

上面的路由是嵌套的，因为它们位于父路由的 `children` 数组中。注意，父路由渲染了 `DashboardRouterOutlet` 组件。当你使用嵌套路由时，你需要渲染另一个 `IonRouterOutlet` 实例。

### 我应该选择哪一种？

当你想从页面 A 过渡到页面 B，同时保留这两个页面在 URL 中的关联时，共享 URL 非常有用。在我们之前的例子中，`/dashboard` 页面上的按钮可以过渡到 `/dashboard/stats` 页面。两个页面之间的关联通过 a) 页面转场和 b) URL 得以保留。

当你想要在出口 A 中渲染内容，同时在嵌套的出口 B 中渲染子内容时，应该使用嵌套路由。你最常遇到的用例是标签页。当你加载一个 Ionic 标签页启动应用时，你会看到 `IonTabBar` 和 `IonTabs` 组件在第一个 `IonRouterOutlet` 中渲染。`IonTabs` 组件会渲染另一个 `IonRouterOutlet`，它负责渲染每个标签页的内容。

在移动应用中，很少有其他场景适合使用嵌套路由。如果拿不准，就使用共享 URL 的路由配置。我们强烈建议不要在标签页以外的上下文中使用嵌套路由，因为它可能会很快让你的应用导航变得混乱。

<LegacyAnchor id="working-with-tabs" />

## 标签页的使用

当使用标签页时，Ionic 需要知道哪个视图属于哪个标签页。`IonTabs` 组件在这里就派上了用场，让我们先来看看对应的路由设置：

```tsx
<IonApp>
  <IonReactRouter>
    <IonRouterOutlet>
      <Route path="/tabs" render={() => <Tabs />} />
      <Route exact path="/">
        <Redirect to="/tabs" />
      </Route>
    </IonRouterOutlet>
  </IonReactRouter>
</IonApp>
```

在这里，`/tabs` 路径会加载一个 `Tabs` 组件。我们在该组件内部将每个标签页作为一个路由对象提供。在这个例子中，我们将路径命名为 `tabs`，但这是可以自定义的。

我们先来看看 `Tabs` 组件：

```tsx
import { Redirect, Route } from 'react-router-dom';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

const Tabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Redirect exact path="/tabs" to="/tabs/tab1" />
      <Route exact path="/tabs/tab1">
        <Tab1 />
      </Route>
      <Route exact path="/tabs/tab2">
        <Tab2 />
      </Route>
      <Route path="/tabs/tab3">
        <Tab3 />
      </Route>
      <Route exact path="/tabs">
        <Redirect to="/tabs/tab1" />
      </Route>
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="tab1" href="/tabs/tab1">
        <IonIcon icon={triangle} />
        <IonLabel>标签 1</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab2" href="/tabs/tab2">
        <IonIcon icon={ellipse} />
        <IonLabel>标签 2</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab3" href="/tabs/tab3">
        <IonIcon icon={square} />
        <IonLabel>标签 3</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;
```

如果你之前使用过 Ionic Framework，应该会感到熟悉。我们创建了一个 `IonTabs` 组件并提供了一个 `IonTabBar`。`IonTabBar` 包含多个 `IonTabButton` 组件，每个按钮的 `tab` 属性与路由配置中对应的标签页相关联。我们还提供了一个 `IonRouterOutlet`，为 `IonTabs` 提供一个出口来渲染不同的标签页视图。

:::tip
`IonTabs` 会为你渲染一个 `IonPage`，所以你无需在此手动添加 `IonPage`。
:::

### Ionic 中标签页的工作原理

Ionic 中的每个标签页都被视为一个独立的导航堆栈。这意味着如果你的应用有三个标签页，那么每个标签页都有自己的导航堆栈。在每个堆栈内，你可以向前导航（推入视图）和向后导航（弹出视图）。

理解这一行为很重要，因为它不同于其他基于 Web 的 UI 库中常见的大多数标签页实现。其他库通常将标签页作为一个单一的历史堆栈来管理。

由于 Ionic 专注于帮助开发者构建移动应用，其标签页的设计理念是尽可能贴近原生移动应用的标签页行为。因此，Ionic 标签页的某些行为可能与你见过的其他 UI 库的标签页实现有所不同。请继续阅读以了解更多关于这些差异的信息。

### 标签页内的子路由

当向标签页添加更多路由时，你应该将它们写成兄弟路由，并以父标签页的路径作为前缀。下面的示例将 `/tabs/tab1/view` 路由定义为 `/tabs/tab1` 路由的兄弟路由。由于这个新路由带有 `tab1` 前缀，它将在 `Tabs` 组件内渲染，并且 `IonTabBar` 中的“标签 1”仍将处于选中状态。

```tsx
<IonTabs>
  <IonRouterOutlet>
    <Redirect exact path="/tabs" to="/tabs/tab1" />
    <Route exact path="/tabs/tab1">
      <Tab1 />
    </Route>
    <Route exact path="/tabs/tab1/view">
      <Tab1View />
    </Route>
    <Route exact path="/tabs/tab2">
      <Tab2 />
    </Route>
    <Route path="/tabs/tab3">
      <Tab3 />
    </Route>
    <Route exact path="/tabs">
      <Redirect to="/tabs/tab1" />
    </Route>
  </IonRouterOutlet>
  <IonTabBar slot="bottom">
    <IonTabButton tab="tab1" href="/tabs/tab1">
      <IonIcon icon={triangle} />
      <IonLabel>标签 1</IonLabel>
    </IonTabButton>
    <IonTabButton tab="tab2" href="/tabs/tab2">
      <IonIcon icon={ellipse} />
      <IonLabel>标签 2</IonLabel>
    </IonTabButton>
    <IonTabButton tab="tab3" href="/tabs/tab3">
      <IonIcon icon={square} />
      <IonLabel>标签 3</IonLabel>
    </IonTabButton>
  </IonTabBar>
</IonTabs>
```

### 在标签页之间切换

由于每个标签页都有自己的导航堆栈，重要的是要注意这些导航堆栈之间永远不应该有交互。这意味着标签页 1 中不应该有任何按钮能将用户导航到标签页 2。换句话说，标签页的切换只能由用户点击标签栏中的标签按钮来完成。

iOS App Store 和 Google Play Store 移动应用就是很好的实践例子。这两个应用都提供了标签式界面，但它们都不会让用户在标签页之间进行路由跳转。例如，iOS App Store 应用中的“游戏”标签页永远不会将用户引导至“搜索”标签页，反之亦然。

让我们来看一些在使用标签页时常犯的错误。

**多个标签页引用的设置标签页**

一种常见的做法是将“设置”视图作为一个独立的标签页。如果开发者需要呈现多个嵌套的设置菜单，这很好。但是，其他标签页永远不应该尝试路由到“设置”标签页。正如我们上面提到的，激活“设置”标签页的唯一方式应该是用户点击相应的标签按钮。

如果你发现你的多个标签页都需要引用“设置”中的内容，我们建议使用 `ion-modal` 将“设置”视图作为一个模态框。这是 iOS App Store 应用中的做法。通过这种方法，任何标签页都可以弹出这个模态框，而不会破坏“每个标签页都是独立堆栈”的移动标签页模式。

下面的示例展示了 iOS App Store 应用如何处理从多个标签页呈现“账户”视图。通过在模态框中呈现“账户”视图，该应用可以在遵循移动标签页最佳实践的前提下，在多个标签页中展示相同的视图。

<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/tabs-account-demo.mp4')}
  controls
></video>

**在标签页间复用视图**

另一种常见的做法是在多个标签页中呈现相同的视图。开发者常常试图通过将视图放在单个标签页中，然后让其他标签页路由到那个标签页来实现这一点。正如我们上面提到的，这破坏了移动标签页的模式，应该避免。

相反，我们建议在每个标签页中创建引用相同组件的路由。这是像 Spotify 这样的流行应用中的做法。例如，你可以从“主页”、“搜索”和“你的资料库”标签页访问同一个专辑或播客。当访问该专辑或播客时，用户会停留在他们当前所在的标签页内。应用通过为每个标签页创建路由，并在代码库中共享一个公共组件来实现这一点。

下面的例子展示了 Spotify 应用如何复用同一个专辑组件在多个标签页中展示内容。注意，每个截图都显示的是同一个专辑，但来自不同的标签页。

|                      主页标签页                       |                       搜索标签页                        |
| :---------------------------------------------------: | :-----------------------------------------------------: |
| <img src={useBaseUrl('img/usage/tabs-home.jpg')} /> | <img src={useBaseUrl('img/usage/tabs-search.jpg')} /> |

## 在线示例

如果你想亲手实践上述概念和代码，请在 StackBlitz 上查看我们的[在线示例](https://stackblitz.com/edit/ionic-react-routing?file=src/index.tsx)。

### 标签页视图中的 IonRouterOutlet

在标签页视图中工作时，Ionic React 需要一种方法来确定哪些视图属于哪个标签页。我们通过利用提供给 `Route` 的路径是正则表达式这一特性来实现这一点。

虽然语法看起来有点奇怪，但一旦你理解了它，就会觉得相当简单直接。

例如，一个具有两个标签页（例如，会议场次和演讲者）的视图的路由可以这样设置：

```tsx
<IonRouterOutlet>
  <Route path="/:tab(sessions)" component={SessionsPage} exact={true} />
  <Route path="/:tab(sessions)/:id" component={SessionDetail} />
  <Route path="/:tab(speakers)" component={SpeakerList} exact={true} />
</IonRouterOutlet>
```

如果导航的 URL 是 "/sessions"，它将匹配第一个路由，并向传递给 `SessionsPage` 的 `match` 对象中添加一个名为 "tab" 且值为 "sessions" 的 URL 参数。

当用户导航到会议详情页面（例如 "/sessions/1"）时，第二个路由会添加一个名为 "tab" 且值为 "sessions" 的 URL 参数。当 `IonRouterOutlet` 发现两个页面都在同一个 "sessions" 标签页内时，它会在导航到新视图时提供一个带动画的页面转场。如果用户导航到一个新的标签页（例如 "speakers"），`IonRouterOutlet` 知道不提供动画。

### IonRouterOutlet 中的 Switches

由于 `IonRouterOutlet` 接管了决定渲染哪个路由的工作，在 `IonRouterOutlet` 内部使用 React Router 的 `Switch` 组件将不会产生任何效果。但是，在 `IonRouterOutlet` 外部使用 `Switch` 仍然会按预期工作。

## 工具函数

### useIonRouter

`useIonRouter` 钩子可用于更直接地控制 Ionic React 中的路由。它允许你在调用 React Router 之前，向 Ionic 传递额外的元数据，例如自定义动画。

`useIonRouter` 钩子返回一个 `UseIonRouterResult` 对象，其中包含几个便捷的路由方法：

```typescript
type UseIonRouterResult = {
  /**
   * 导航到一个新的路径名
   * @param pathname - 要导航到的路径
   * @param routerDirection - 可选 - 用于转场效果的 RouterDirection，默认为 'forward'
   * @param routeAction - 可选 - 用于历史记录的 RouteAction，默认为 'push'
   * @param routerOptions - 可选 - 传递给路由器的任何额外参数
   * @param animationBuilder - 可选 - 自定义的转场动画
   */
  push(
    pathname: string,
    routerDirection?: RouterDirection,
    routeAction?: RouteAction,
    routerOptions?: RouterOptions,
    animationBuilder?: AnimationBuilder
  ): void;
  /**
   * 在历史记录中向后导航，由 IonRouter 决定历史记录
   * @param animationBuilder - 可选 - 自定义的转场动画
   */
  goBack(animationBuilder?: AnimationBuilder): void;
  /**
   * 判断路由器的历史记录中是否还有更多路由。但是，如果浏览器的历史记录有更多条目，导航不会被阻止。如果有更多条目返回 true，否则返回 false。
   */
  canGoBack(): boolean;
  /**
   * 关于当前路由的信息。
   */
  routeInfo: RouteInfo;
};
```

以下示例展示了如何使用 `useIonRouter`：

```tsx
import { useIonRouter } from '@ionic/react';

const MyComponent: React.FC = () => {
  const router = useIonRouter();
  const goToPage = () => {
    router.push('/my-page', 'root', 'replace');
  };

  // ...
}

```

## 更多信息

想了解关于 Ionic 底层使用的 React Router 在 React 中进行路由的更多信息，请查阅他们的文档：[https://v5.reactrouter.com/web](https://v5.reactrouter.com/web)

## 社区资源

<!-- cspell:disable -->

[Ionic 4 与 React：导航](https://alligator.io/ionic/ionic-4-react-navigation) - Paul Halliday 著

<!-- cspell:enable -->