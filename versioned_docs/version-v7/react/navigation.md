---
title: React Navigation
sidebar_label: 导航/路由
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<head>
  <title>React Navigation: 路由链接重定向到另一个页面</title>
  <meta
    name="description"
    content="本React导航指南涵盖了使用Ionic和React构建的应用中的路由。学习如何定义路由链接的重定向路径以导航到另一个页面。"
  />
</head>

本指南涵盖了在使用 Ionic 和 React 构建的应用中路由是如何工作的。

`IonReactRouter` 底层使用了流行的 [React Router](https://github.com/remix-run/react-router) 库。通过 Ionic 和 React Router，你可以创建具有丰富页面转换效果的多页面应用。

你所了解的关于使用 React Router 进行路由的知识都可以沿用至 Ionic React。让我们来看看一个 Ionic React 应用的基础知识以及路由是如何与之协同工作的。

## Ionic React 中的路由

下面是一个示例 `App` 组件，它定义了一个指向 "/dashboard" URL 的单一路由。当你访问 "/dashboard" 时，该路由会渲染 `DashboardPage` 组件。

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

在 `Route` 之后，我们直接定义了默认的 `Redirect`，当用户访问应用的根 URL ("/") 时，它会将用户重定向到 "/dashboard" URL。

这个重定向还设置了 `exact` 属性，这意味着 URL 必须与 `from` 属性（或者如果在 `Route` 上使用 `exact`，则与 `path` 属性）精确匹配，此路由才算匹配。如果没有它，这个重定向会为每个路由渲染，因为每个路由都以 "/" 开头。

你也可以根据条件（例如检查用户是否已认证）从 Route 的 render 方法中以编程方式进行重定向：

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

`IonReactRouter` 组件封装了 React Router 中传统的 [`BrowserRouter`](https://v5.reactrouter.com/web/api/BrowserRouter) 组件，并为应用设置路由。因此，请使用 `IonReactRouter` 替代 `BrowserRouter`。你可以向 `IonReactRouter` 传递任何属性，这些属性将被传递给底层的 `BrowserRouter`。

## 嵌套路由

在 Dashboard 页面内部，我们定义了更多与应用此特定部分相关的路由：

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

这里，我们又定义了几个路由，指向仪表盘部分内的页面。请注意，我们需要在路径中定义完整的路由，即使我们是通过该 URL 到达此页面的，也不能省略 "/dashboard"。React Router 需要完整路径，不支持相对路径。

但是，我们可以使用 [`match`](https://v5.reactrouter.com/web/api/match) 对象的 `url` 属性来提供用于渲染组件的匹配 URL，这在处理嵌套路由时会很有帮助：

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

这里，`match.url` 包含的值是 "/dashboard"，因为这是用于渲染 `DashboardPage` 的 URL。

这些路由被分组在一个 `IonRouterOutlet` 中，我们接下来会讨论它。

## IonRouterOutlet

`IonRouterOutlet` 组件为渲染 Ionic "页面" 的路由提供了一个容器。当一个页面位于 `IonRouterOutlet` 中时，该容器控制页面之间的过渡动画，以及控制页面何时被创建和销毁，这有助于在视图之间来回切换时保持状态。

上面的 `DashboardPage` 展示了一个用户列表页面和一个详情页面。在两个页面之间导航时，`IonRouterOutlet` 提供适当的平台页面过渡效果，并保持前一个页面的状态不变，以便当用户导航回列表页面时，它显示为离开时的相同状态。

一个 `IonRouterOutlet` 应该只包含 `Route` 或 `Redirect`。任何其他组件应该作为 `Route` 渲染的结果进行渲染，或者放在 `IonRouterOutlet` 外部。

## 后备路由

一个常见的路由用例是提供一个"后备"路由，以便在导航到的位置与定义的任何路由都不匹配时进行渲染。

我们可以通过将一个不带 `path` 属性的 `Route` 组件作为 `IonRouterOutlet` 内定义的最后一个路由来定义一个后备路由。

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

在这里，我们看到，如果某个位置不匹配前两个 `Route`，`IonRouterOutlet` 会将 Ionic React 应用重定向到 `match.url` 路径。

你也可以提供一个要渲染的组件，而不是提供重定向。

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

`IonPage` 组件封装了 Ionic React 应用中的每个视图，并使页面过渡和堆栈导航能够正常工作。使用路由导航到的每个视图都必须包含一个 `IonPage` 组件。

`IonPage` 对于正确的样式也是必需的。它提供了一个 flex 容器，确保页面内容（例如 `IonContent`）大小合适，并且不会与其他 UI 元素（如 `IonTabBar`）重叠。

```tsx
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Hello World</IonContent>
    </IonPage>
  );
};
export default Home;
```

## 导航

在 Ionic React 应用中路由到不同视图有几种可用的选项。这里，`UsersListPage` 使用了 `IonItem` 的 `routerLink` 属性来指定当该项目被点击时要导航到的路由：

**UsersListPage.tsx**

```tsx
const UsersListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/dashboard/users/1">
            <IonLabel>User 1</IonLabel>
          </IonItem>
          <IonItem routerLink="/dashboard/users/2">
            <IonLabel>User 2</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```

其他具有 `routerLink` 属性的组件包括 `IonButton`、`IonCard`、`IonRouterLink`、`IonFabButton` 和 `IonItemOption`。

这些组件中的每一个还有一个 `routerDirection` 属性，用于显式设置要使用的页面过渡类型（`"forward"`、`"back"` 或 `"root"`）。

除了这些具有 `routerLink` 属性的组件之外，你还可以使用 React Router 的 [`Link`](https://v5.reactrouter.com/web/api/Link) 组件在视图之间导航：

```html
<Link to="/dashboard/users/1">User 1</Link>
```

我们建议尽可能使用上述方法之一进行路由。这些方法的优点是它们都渲染一个锚点 (`<a>`) 标签，这对于整个应用的可访问性非常有利。

一个编程式的导航选项是使用 React Router 通过路由提供给其渲染组件的 [`history`](https://v5.reactrouter.com/web/api/history) 属性。

```tsx
<IonButton
  onClick={(e) => {
    e.preventDefault();
    history.push('/dashboard/users/1');
  }}
>
  Go to User 1
</IonButton>
```

:::note
`history` 是一个属性。
:::

### 使用 `history.go` 导航

React Router 使用 `history` 包，它有一个 [history.go](https://github.com/remix-run/history/blob/dev/docs/api-reference.md#history.go) 方法，允许开发者在应用历史记录中向前或向后移动。让我们看一个例子。

假设你有以下应用历史记录：

`/pageA` --> `/pageB` --> `/pageC`

如果你在 `/pageC` 上调用 `router.go(-2)`，你将回到 `/pageA`。如果你随后调用 `router.go(2)`，你将到达 `/pageC`。

在 Ionic React 中目前不支持使用 `history.go()`。有兴趣看到这个功能被添加到 Ionic React 中吗？[在 GitHub 上告诉我们](https://github.com/ionic-team/ionic-framework/issues/23775)！

## URL 参数

在 Dashboard 页面中定义的第二个路由有一个 URL 参数（路径中的 ":id" 部分）。URL 参数是 `path` 的动态部分，当用户导航到像 "/dashboard/users/1" 这样的 URL 时，"1" 被保存到一个名为 "id" 的参数中，可以在路由渲染的组件中访问它。让我们看看如何做到这一点。

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
          <IonTitle>User Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>User {match.params.id}</IonContent>
    </IonPage>
  );
};
```

[`match`](https://v5.reactrouter.com/web/api/match) 属性包含有关匹配路由的信息，包括 URL 参数。我们在这里获取 `id` 参数并将其显示在屏幕上。

注意我们如何使用 TypeScript 接口来强类型化 props 对象。该接口在组件内部为我们提供了类型安全和代码补全。

## 线性路由 vs. 非线性路由

### 线性路由

如果你曾经构建过使用路由的 Web 应用，你可能之前就使用过线性路由。线性路由意味着你可以通过推入和弹出页面在应用历史记录中向前或向后移动。

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

当我们按下返回按钮时，我们沿着相同的路由路径返回，只是方向相反。线性路由有助于实现简单且可预测的路由行为。

线性路由的缺点是不允许复杂的用户体验，例如标签视图。这时非线性路由就派上用场了。

### 非线性路由

对于许多学习使用 Ionic 构建移动应用的 Web 开发人员来说，非线性路由可能是一个新概念。

非线性路由意味着用户应该返回的视图不一定是屏幕上先前显示的视图。

以下是非线性路由的一个示例：

<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/non-linear-routing-demo.mp4')}
  controls
></video>

在上面的示例中，我们从`原创`标签开始。点击一张卡片会将我们带到`原创`标签内的`泰德·拉索`视图。

从这里，我们切换到`搜索`标签。然后，我们再次点击`原创`标签，被带回到`泰德·拉索`视图。此时，我们已经开始使用非线性路由了。

为什么这是非线性路由？我们之前的视图是`搜索`视图。然而，在`泰德·拉索`视图上按下返回按钮应该将我们带回到`原创`标签的根视图。这是因为移动应用中的每个标签都被视为自己的堆栈。[使用标签](#使用标签)部分会更详细地讨论这一点。

如果在`泰德·拉索`视图上简单地调用 `history.go(-1)` 来触发返回按钮，我们将会被带回到`搜索`视图，这显然是不正确的。

非线性路由允许实现线性路由无法处理的复杂用户流程。然而，某些线性路由 API（如 `history.go()`）不能在这种非线性环境中使用。这意味着在使用标签或嵌套的 outlet 时，不应使用 `history.go()`。

### 我应该选择哪一个？

我们建议保持你的应用尽可能简单，直到你需要添加非线性路由。非线性路由非常强大，但它也会给移动应用增加相当多的复杂性。

非线性路由的两个最常见用途是标签和嵌套的 `IonRouterOutlet`。我们建议只有当你的应用符合标签或嵌套路由器 outlet 的用例时才使用非线性路由。

有关标签的更多信息，请参阅[使用标签](#使用标签)。

有关嵌套路由器 outlet 的更多信息，请参阅[嵌套路由](#嵌套路由)。

## 共享 URL 与嵌套路由

设置路由时一个常见的困惑点是决定使用共享 URL 还是嵌套路由。本指南的这一部分将解释两者，并帮助你决定使用哪一个。

### 共享 URL

共享 URL 是一种路由配置，其中路由共享 URL 的某些部分。以下是共享 URL 配置的示例：

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

上述路由被认为是"共享"的，因为它们重用了 URL 的 `dashboard` 部分。

### 嵌套路由

嵌套路由是一种路由配置，其中路由作为其他路由的子路由列出。以下是嵌套路由配置的示例：

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

上述路由是嵌套的，因为它们位于父路由的 `children` 数组中。请注意，父路由渲染了 `DashboardRouterOutlet` 组件。当你嵌套路由时，你需要渲染另一个 `IonRouterOutlet` 实例。

### 我应该选择哪一个？

当你希望从页面 A 过渡到页面 B，同时保留两个页面在 URL 中的关系时，共享 URL 非常有用。在我们之前的示例中，`/dashboard` 页面上的一个按钮可以过渡到 `/dashboard/stats` 页面。两个页面之间的关系得以保留，原因在于 a) 页面过渡和 b) URL。

当你想要在 outlet A 中渲染内容，同时在嵌套的 outlet B 中渲染子内容时，应该使用嵌套路由。你最常见到的用例就是标签。当你加载一个 Ionic 标签启动应用时，你会看到 `IonTabBar` 和 `IonTabs` 组件在第一个 `IonRouterOutlet` 中渲染。`IonTabs` 组件渲染另一个 `IonRouterOutlet`，该 outlet 负责渲染每个标签的内容。

在移动应用中，很少有其他场景使嵌套路由有意义。如果有疑问，请使用共享 URL 路由配置。我们强烈建议不要在与标签无关的上下文中使用嵌套路由，因为它会很快使应用导航变得混乱。

## 使用标签

使用标签时，Ionic 需要一种方法来知道哪个视图属于哪个标签。`IonTabs` 组件在这里很有用，但让我们看看它的路由设置是什么样的：

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

这里，我们的 `tabs` 路径加载了一个 `Tabs` 组件。我们在该组件内部将每个标签作为一个路由对象提供。在这个例子中，我们将路径命名为 `tabs`，但这是可以自定义的。

让我们先看看我们的 `Tabs` 组件：

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
        <IonLabel>Tab 1</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab2" href="/tabs/tab2">
        <IonIcon icon={ellipse} />
        <IonLabel>Tab 2</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab3" href="/tabs/tab3">
        <IonIcon icon={square} />
        <IonLabel>Tab 3</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;
```

如果你之前使用过 Ionic Framework，这应该会感觉很熟悉。我们创建了一个 `IonTabs` 组件并提供了一个 `IonTabBar`。`IonTabBar` 提供了 `IonTabButton` 组件，每个组件都有一个 `tab` 属性，该属性与其在路由器配置中对应的标签相关联。我们还提供了一个 `IonRouterOutlet`，以便为 `IonTabs` 提供一个 outlet 来渲染不同的标签视图。

:::tip
`IonTabs` 会为你渲染一个 `IonPage`，因此你无需在此手动添加 `IonPage`。
:::

### Ionic 中标签的工作原理

Ionic 中的每个标签都被视为一个独立的导航堆栈。这意味着如果你的应用中有三个标签，每个标签都有自己的导航堆栈。在每个堆栈中，你可以向前导航（推入视图）和向后导航（弹出视图）。

这种行为很重要，因为它不同于在其他基于 Web 的 UI 库中发现的大多数标签实现。其他库通常将标签作为一个单一的历史堆栈来管理。

由于 Ionic 专注于帮助开发者构建移动应用，因此 Ionic 中的标签旨在尽可能接近原生移动标签。因此，Ionic 标签中可能存在某些行为与你所见过的其他 UI 库中的标签实现不同。请继续阅读以了解其中一些差异。

### 标签内的子路由

当向标签添加额外路由时，你应该将它们写成兄弟路由，并以父标签作为路径前缀。下面的示例将 `/tabs/tab1/view` 路由定义为 `/tabs/tab1` 路由的兄弟路由。由于这个新路由有 `tab1` 前缀，它将在 `Tabs` 组件内部渲染，并且 `IonTabBar` 中的标签 1 仍将被选中。

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
      <IonLabel>Tab 1</IonLabel>
    </IonTabButton>
    <IonTabButton tab="tab2" href="/tabs/tab2">
      <IonIcon icon={ellipse} />
      <IonLabel>Tab 2</IonLabel>
    </IonTabButton>
    <IonTabButton tab="tab3" href="/tabs/tab3">
      <IonIcon icon={square} />
      <IonLabel>Tab 3</IonLabel>
    </IonTabButton>
  </IonTabBar>
</IonTabs>
```

### 在标签之间切换

由于每个标签都是自己的导航堆栈，因此重要的是要注意这些导航堆栈永远不应该相互交互。这意味着不应该有标签 1 中的按钮将用户路由到标签 2。换句话说，标签应该只能由用户点击标签栏中的标签按钮来更改。

实践中一个很好的例子是 iOS App Store 和 Google Play Store 移动应用。这两个应用都提供了标签界面，但两者都不会将用户路由到不同的标签。例如，iOS App Store 应用中的"游戏"标签永远不会将用户引导到"搜索"标签，反之亦然。

让我们看看使用标签时常犯的几个错误。

**多个标签引用的设置标签**

一种常见的做法是将设置视图创建为自己的标签。如果开发者需要呈现多个嵌套的设置菜单，这很好。然而，其他标签永远不应该尝试路由到设置标签。正如我们上面提到的，设置标签应该被激活的唯一方式是用户点击相应的标签按钮。

如果你发现你的标签需要引用设置标签，我们建议使用 `ion-modal` 将设置视图做成一个模态框。这是在 iOS App Store 应用中发现的一种做法。通过这种方法，任何标签都可以呈现模态框，而不会破坏每个标签是自身堆栈的移动标签模式。

下面的示例显示了 iOS App Store 应用如何处理从多个标签呈现"账户"视图。通过在模态框中呈现"账户"视图，该应用可以在移动标签最佳实践中工作，跨多个标签显示相同的视图。

<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/tabs-account-demo.mp4')}
  controls
></video>

**跨标签重用视图**

另一种常见的做法是在多个标签中呈现相同的视图。开发者常常尝试通过将视图包含在单个标签中，然后让其他标签路由到该标签来实现这一点。正如我们上面提到的，这打破了移动标签模式，应该避免。

相反，我们建议在每个标签中创建引用相同组件的路由。这是流行应用（如 Spotify）中的一种做法。例如，你可以从"主页"、"搜索"和"你的资料库"标签访问某个专辑或播客。当访问该专辑或播客时，用户会停留在该标签内。该应用通过为每个标签创建路由并在代码库中共享一个公共组件来实现这一点。

下面的示例展示了 Spotify 应用如何重用相同的专辑组件在多个标签中显示内容。请注意，每个截图都显示了相同的专辑，但来自不同的标签。

|                      主页标签                      |                      搜索标签                       |
| :-------------------------------------------------: | :---------------------------------------------------: |
| <img src={useBaseUrl('img/usage/tabs-home.jpg')} /> | <img src={useBaseUrl('img/usage/tabs-search.jpg')} /> |

## 实时示例

如果你希望亲自动手实践上述概念和代码，请在我们的 StackBlitz 上查看关于上述主题的[实时示例](https://stackblitz.com/edit/ionic-react-routing?file=src/index.tsx)。

### 标签视图中的 IonRouterOutlet

在标签视图中工作时，Ionic React 需要一种方法来确定哪些视图属于哪些标签。我们通过利用提供给 `Route` 的路径是正则表达式这一事实来实现这一点。

虽然语法看起来有点奇怪，但一旦你理解了它，就相当简单了。

例如，一个具有两个标签（sessions 和 speakers）的视图的路由可以这样设置：

```tsx
<IonRouterOutlet>
  <Route path="/:tab(sessions)" component={SessionsPage} exact={true} />
  <Route path="/:tab(sessions)/:id" component={SessionDetail} />
  <Route path="/:tab(speakers)" component={SpeakerList} exact={true} />
</IonRouterOutlet>
```

如果导航到的 URL 是 "/sessions"，它将匹配第一个路由，并向传递给 `SessionsPage` 的结果 `match` 对象中添加一个名为 "tab"、值为 "sessions" 的 URL 参数。

当用户导航到会话详情页面（例如 "/sessions/1"）时，第二个路由会添加一个名为 "tab"、值为 "sessions" 的 URL 参数。当 `IonRouterOutlet` 看到两个页面都在同一个 "sessions" 标签中时，它会为新视图提供一个动画页面过渡。如果用户导航到一个新标签（本例中为 "speakers"），`IonRouterOutlet` 就知道不提供动画效果。

### IonRouterOutlet 中的 Switches

由于 `IonRouterOutlet` 接管了决定渲染哪些路由的工作，因此在 `IonRouterOutlet` 内部使用 React Router 的 `Switch` 不会产生任何效果。在 `IonRouterOutlet` 外部使用时，Switches 仍然可以按预期工作。

## 工具函数

### useIonRouter

`useIonRouter` 钩子可用于更直接地控制 Ionic React 中的路由。它允许你在调用 React Router 之前向 Ionic 传递额外的元数据，例如自定义动画。

`useIonRouter` 钩子返回一个 `UseIonRouterResult`，它有几个用于路由的便捷方法：

```typescript
type UseIonRouterResult = {
  /**
   * 导航到一个新的路径名
   * @param pathname - 要导航到的路径
   * @param routerDirection - 可选 - 用于过渡目的的 RouterDirection，默认为 'forward'
   * @param routeAction - 可选 - 用于历史记录目的的 RouteAction，默认为 'push'
   * @param routerOptions - 可选 - 传递给路由器的任何额外参数
   * @param animationBuilder - 可选 - 自定义的过渡动画
   */
  push(
    pathname: string,
    routerDirection?: RouterDirection,
    routeAction?: RouteAction,
    routerOptions?: RouterOptions,
    animationBuilder?: AnimationBuilder
  ): void;
  /**
   * 向后导航历史记录，使用 IonRouter 确定历史记录
   * @param animationBuilder - 可选 - 自定义的过渡动画
   */
  goBack(animationBuilder?: AnimationBuilder): void;
  /**
   * 确定 Router 的历史记录中是否有额外的路由。但是，如果浏览器的历史记录有更多条目，路由不会被阻止。如果存在更多条目则返回 true，否则返回 false。
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

  ...
}

```

## 更多信息

有关使用 Ionic 底层使用的 React Router 实现进行 React 路由的更多信息，请查看他们的文档：[https://v5.reactrouter.com/web](https://v5.reactrouter.com/web)。

## 来自社区

<!-- cspell:disable -->

[Ionic 4 和 React：导航](https://alligator.io/ionic/ionic-4-react-navigation) - Paul Halliday

<!-- cspell:enable -->