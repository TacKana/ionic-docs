---
title: React Navigation
sidebar_label: 导航/路由
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<head>
  <title>React导航：路由链接重定向到另一个页面</title>
  <meta
    name="description"
    content="本React导航指南涵盖了使用Ionic和React构建的应用中的路由。学习如何定义路由链接的重定向路径以导航到另一个页面。"
  />
</head>

本指南介绍了在使用 Ionic 和 React 构建的应用中路由是如何工作的。

`IonReactRouter` 在底层使用了流行的 [React Router](https://github.com/ReactTraining/react-router) 库。结合 Ionic 和 React Router，您可以创建具有丰富页面转换效果的多页面应用。

您所了解的关于使用 React Router 进行路由的所有知识都可以应用于 Ionic React。让我们来看一下 Ionic React 应用的基础知识以及路由是如何与其配合工作的。

## Ionic React 中的路由

这是一个示例 `App` 组件，它定义了一个指向 "/dashboard" URL 的单一路由。当您访问 "/dashboard" 时，该路由会渲染 `DashboardPage` 组件。

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

在 `Route` 之后，我们定义了默认的 `Redirect`，当用户访问应用的根 URL ("/") 时，它会将用户重定向到 "/dashboard" URL。

这个重定向还设置了 `exact` 属性，这意味着 URL 必须与 `from` 属性（或者如果 `exact` 用在 `Route` 上，则是 `path` 属性）精确匹配，才能匹配此路由。如果没有它，这个重定向会为每个路由渲染，因为每个路由都以 "/" 开头。

您也可以根据条件（例如检查用户是否已认证）在 Route 的 render 方法中编程式地进行重定向：

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

`IonReactRouter` 组件包装了 React Router 传统的 [`BrowserRouter`](https://reacttraining.com/react-router/web/api/BrowserRouter) 组件，并为应用设置路由。因此，请使用 `IonReactRouter` 替代 `BrowserRouter`。您可以将任何属性传递给 `IonReactRouter`，它们将被传递给底层的 `BrowserRouter`。

## 嵌套路由

在 Dashboard 页面内部，我们定义了更多与应用的这一特定部分相关的路由：

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

这里，我们定义了另外几个路由，用于指向应用仪表盘部分内的页面。请注意，我们需要在路径中定义完整的路由，即使我们是来自该 URL 到达此页面，也不能省略 "/dashboard"。React Router 需要完整路径，不支持相对路径。

然而，我们可以使用 [`match`](https://reacttraining.com/react-router/web/api/match) 对象的 `url` 属性来提供用于渲染组件的匹配 URL，这在处理嵌套路由时会很有帮助：

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

这里，`match.url` 包含 "/dashboard" 的值，因为那是用于渲染 `DashboardPage` 的 URL。

这些路由被分组在一个 `IonRouterOutlet` 中，接下来我们将讨论它。

## IonRouterOutlet

`IonRouterOutlet` 组件为渲染 Ionic "页面" 的路由提供了一个容器。当一个页面位于 `IonRouterOutlet` 中时，该容器控制页面之间的过渡动画，并控制页面何时被创建和销毁，这有助于在视图之间来回切换时保持它们的状态。

上面的 `DashboardPage` 展示了一个用户列表页面和一个详情页面。当在这两个页面之间导航时，`IonRouterOutlet` 提供适当的平台页面过渡效果，并保持前一个页面的状态不变，以便当用户导航回列表页面时，它显示的状态与离开时相同。

一个 `IonRouterOutlet` 应该只包含 `Route` 或 `Redirect`。任何其他组件应该作为 `Route` 渲染的结果进行渲染，或者在 `IonRouterOutlet` 外部渲染。

## 后备路由

一个常见的路由用例是提供一个“后备”路由，以便在导航到的位置与定义的任何路由都不匹配时进行渲染。

我们可以通过将一个没有 `path` 属性的 `Route` 组件作为 `IonRouterOutlet` 内定义的最后一个路由来定义后备路由。

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

这里，我们看到如果某个位置与头两个 `Route` 不匹配，`IonRouterOutlet` 会将 Ionic React 应用重定向到 `match.url` 路径。

您也可以提供一个要渲染的组件来代替重定向。

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

`IonPage` 组件包装了 Ionic React 应用中的每个视图，并使页面过渡和堆栈导航能够正常工作。使用路由器导航到的每个视图都必须包含一个 `IonPage` 组件。

`IonPage` 对于正确的样式也是必需的。它提供了一个 flex 容器，确保页面内容（如 `IonContent`）大小合适，并且不会与其他 UI 元素（如 `IonTabBar`）重叠。

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

在 Ionic React 应用中，有几种选项可用于路由到不同视图。这里，`UsersListPage` 使用 `IonItem` 的 `routerLink` 属性来指定当项目被点击时要前往的路由：

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

这些组件中的每一个也有一个 `routerDirection` 属性，用于显式设置要使用的页面过渡类型（"back"、"forward" 或 "none"）。

除了这些具有 `routerLink` 属性的组件之外，您还可以使用 React Router 的 [`Link`](https://reacttraining.com/react-router/web/api/Link) 组件在视图之间导航：

```html
<Link to="/dashboard/users/1">User 1</Link>
```

我们建议尽可能使用上述方法之一进行路由。这些方法的优点在于它们都会渲染一个锚点 (`<a>`) 标签，这有利于整体应用的可访问性。

一个编程式的导航选项是使用 React Router 通过路由提供给其渲染组件的 [`history`](https://reacttraining.com/react-router/web/api/history) 属性。

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

React Router 使用 `history` 包，它有一个 [history.go](https://github.com/remix-run/history/blob/dev/docs/api-reference.md#history.go) 方法，允许开发者在应用历史中向前或向后移动。让我们来看一个例子。

假设您有以下应用历史记录：

`/pageA` --> `/pageB` --> `/pageC`

如果您在 `/pageC` 上调用 `router.go(-2)`，您将被带回 `/pageA`。如果您随后调用 `router.go(2)`，您将被带到 `/pageC`。

在 Ionic React 中目前不支持使用 `history.go()`。有兴趣看到对此功能被添加到 Ionic React 的支持吗？[请在 GitHub 上告诉我们](https://github.com/ionic-team/ionic-framework/issues/23775)！

## URL 参数

在 Dashboard 页面中定义的第二个路由有一个 URL 参数（路径中的 ":id" 部分）。URL 参数是 `path` 的动态部分，当用户导航到诸如 "/dashboard/users/1" 这样的 URL 时，"1" 会被保存到一个名为 "id" 的参数中，可以在路由渲染的组件中访问它。让我们看看如何做到这一点。

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

[`match`](https://reacttraining.com/react-router/web/api/match) 属性包含有关匹配路由的信息，包括 URL 参数。我们在这里获取 `id` 参数并将其显示在屏幕上。

请注意我们如何使用 TypeScript 接口来强类型化 props 对象。该接口在组件内部为我们提供了类型安全性和代码补全功能。

## 线性路由 vs 非线性路由

### 线性路由

如果您构建过使用路由的 Web 应用，您很可能以前使用过线性路由。线性路由意味着您可以通过推入和弹出页面在应用历史中向前或向后移动。

以下是移动应用中线性路由的示例：

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

当我们按下返回按钮时，我们沿着相同的路由路径，只是方向相反。线性路由有助于实现简单且可预测的路由行为。

线性路由的缺点在于它不支持复杂的用户体验，例如标签视图。这时非线性路由就发挥作用了。

### 非线性路由

非线性路由是一个概念，对于许多学习使用 Ionic 构建移动应用的 Web 开发者来说可能是新事物。

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

在上面的示例中，我们从 `原创` 标签开始。点击卡片会将我们带到 `原创` 标签内的 `泰德·拉索` 视图。

从这里，我们切换到 `搜索` 标签。然后，我们再次点击 `原创` 标签，并被带回 `泰德·拉索` 视图。此时，我们开始使用非线性路由。

为什么这是非线性路由？我们之前所在的视图是 `搜索` 视图。然而，在 `泰德·拉索` 视图上按下返回按钮应该将我们带回根 `原创` 视图。这是因为移动应用中的每个标签都被视为自己的堆栈。[使用标签](#使用标签) 部分会更详细地讨论这一点。

如果在 `泰德·拉索` 视图中点击返回按钮只是简单地调用 `history.go(-1)`，我们会被带回 `搜索` 视图，这是不正确的。

非线性路由允许实现线性路由无法处理的复杂用户流程。然而，某些线性路由 API，如 `history.go()`，不能在这种非线性环境中使用。这意味着在使用标签或嵌套出口时不应使用 `history.go()`。

### 我应该选择哪一个？

我们建议在您需要添加非线性路由之前，尽可能保持您的应用程序简单。非线性路由非常强大，但它也会给移动应用程序增加相当大的复杂性。

非线性路由的两个最常见用途是标签和嵌套的 `IonRouterOutlet`。我们建议仅在您的应用程序满足标签或嵌套路由器出口用例时才使用非线性路由。

有关标签的更多信息，请参阅[使用标签](#使用标签)。

有关嵌套路由器出口的更多信息，请参阅[嵌套路由](#嵌套路由)。

## 共享 URL 与嵌套路由

在设置路由时，一个常见的困惑点是决定使用共享 URL 还是嵌套路由。本部分指南将解释两者，并帮助您决定使用哪一个。

### 共享 URL

共享 URL 是一种路由配置，其中路由共享 URL 的某些部分。以下是共享 URL 配置的示例：

```tsx
const App: React.FC = () => {
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
  </IonApp>;
};
```

上述路由被认为是“共享”的，因为它们重用了 URL 的 `dashboard` 部分。

### 嵌套路由

嵌套路由是一种路由配置，其中路由被列为其他路由的子路由。以下是嵌套路由配置的示例：

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

上述路由是嵌套的，因为它们位于父路由的 `children` 数组中。请注意，父路由渲染了 `DashboardRouterOutlet` 组件。当您嵌套路由时，您需要渲染另一个 `IonRouterOutlet` 实例。

### 我应该选择哪一个？

当您想从页面 A 过渡到页面 B，同时保留两个页面在 URL 中的关系时，共享 URL 非常有用。在我们之前的示例中，`/dashboard` 页面上的按钮可以过渡到 `/dashboard/stats` 页面。两个页面之间的关系由于 a) 页面过渡和 b) URL 而得以保留。

当您想在出口 A 中渲染内容，同时在嵌套出口 B 中渲染子内容时，应该使用嵌套路由。您会遇到的最常见用例是标签。当您加载一个标签的 Ionic 启动应用程序时，您会看到 `IonTabBar` 和 `IonTabs` 组件在第一个 `IonRouterOutlet` 中渲染。`IonTabs` 组件渲染另一个 `IonRouterOutlet`，它负责渲染每个标签的内容。

在移动应用程序中，很少有使用嵌套路由有意义的用例。如果有疑问，请使用共享 URL 路由配置。我们强烈建议不要在除标签以外的上下文中使用嵌套路由，因为它可能会使您的应用程序导航变得混乱。

## 使用标签

在使用标签时，Ionic 需要一种方式来知道哪个视图属于哪个标签。`IonTabs` 组件在这里就派上了用场，但让我们看看这需要怎样的路由设置：

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

这里，我们的 `tabs` 路径加载了一个 `Tabs` 组件。我们在此组件内将每个标签作为一个路由对象提供。在这个例子中，我们称之为路径 `tabs`，但这是可以自定义的。

让我们先来看看我们的 `Tabs` 组件：

```tsx
import { Redirect, Route } from 'react-router-dom';
import { IonContent, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

const Tabs: React.FC = () => (
  <IonContent>
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
  </IonContent>
);

export default Tabs;
```

如果您之前使用过 Ionic Framework，这应该会感觉很熟悉。我们创建一个 `IonTabs` 组件并提供一个 `IonTabBar`。`IonTabBar` 提供 `IonTabButton` 组件，每个组件都有一个 `tab` 属性，该属性与路由器配置中其对应的标签相关联。我们还提供了一个 `IonRouterOutlet` 来为 `IonTabs` 提供一个出口，用于渲染不同的标签视图。

### Ionic 中标签的工作原理

Ionic 中的每个标签都被视为一个独立的导航堆栈。这意味着如果您的应用程序中有三个标签，每个标签都有自己的导航堆栈。在每个堆栈中，您可以向前导航（推入视图）和向后导航（弹出视图）。

这个行为很重要，需要注意，因为它与大多数其他基于 Web 的 UI 库中发现的标签实现不同。其他库通常将标签作为一个单一的历史堆栈进行管理。

由于 Ionic 专注于帮助开发者构建移动应用，Ionic 中的标签旨在尽可能匹配原生移动标签。因此，Ionic 标签中的某些行为可能与其他 UI 库中的标签实现有所不同。请继续阅读以了解更多关于其中一些差异的信息。

### 标签内的子路由

当向标签添加额外路由时，您应该将它们编写为兄弟路由，并以父标签作为路径前缀。下面的示例将 `/tabs/tab1/view` 路由定义为 `/tabs/tab1` 路由的兄弟路由。由于这个新路由有 `tab1` 前缀，它将在 `Tabs` 组件内部渲染，并且 Tab 1 在 `IonTabBar` 中仍然会被选中。

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

由于每个标签都是自己的导航堆栈，重要的是要注意这些导航堆栈永远不应该交互。这意味着在标签 1 中不应该有一个按钮将用户路由到标签 2。换句话说，标签应该只能通过用户在标签栏中点击标签按钮来更改。

实践中一个很好的例子是 iOS App Store 和 Google Play Store 移动应用程序。这两个应用都提供了标签界面，但它们都不会将用户跨标签路由。例如，iOS App Store 应用中的“游戏”标签永远不会将用户引导到“搜索”标签，反之亦然。

让我们来看一些使用标签时常犯的错误。

**多个标签引用的设置标签**

一种常见做法是将设置视图创建为其自己的标签。如果开发者需要呈现多个嵌套的设置菜单，这很好。然而，其他标签绝不应该尝试路由到设置标签。正如我们上面提到的，设置标签应该被激活的唯一方式是用户点击相应的标签按钮。

如果您发现您的标签需要引用设置标签，我们建议通过使用 `ion-modal` 将设置视图作为一个模态框。这是 iOS App Store 应用中发现的一种做法。通过这种方法，任何标签都可以呈现模态框，而不会破坏每个标签作为自己堆栈的移动标签模式。

下面的示例展示了 iOS App Store 应用如何处理从多个标签呈现“帐户”视图。通过在模态框中呈现“帐户”视图，应用可以在移动标签最佳实践中工作，以在多个标签中显示相同的视图。

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

另一种常见做法是在多个标签中呈现相同的视图。开发者通常试图通过将视图包含在一个单独的标签中，然后让其他标签路由到那个标签来实现这一点。如上所述，这破坏了移动标签模式，应该避免。

相反，我们建议在每个标签中都有引用相同组件的路由。这是在 Spotify 等流行应用中采用的做法。例如，您可以从“主页”、“搜索”和“您的资料库”标签访问一个专辑或播客。当访问该专辑或播客时，用户会停留在该标签内。该应用通过在代码库中为每个标签创建路由并共享一个公共组件来实现这一点。

下面的示例展示了 Spotify 应用如何重用相同的专辑组件在多个标签中显示内容。请注意，每个截图都显示了相同的专辑，但来自不同的标签。

|                      主页标签                      |                       搜索标签                       |
| :-------------------------------------------------: | :---------------------------------------------------: |
| <img src={useBaseUrl('img/usage/tabs-home.jpg')} /> | <img src={useBaseUrl('img/usage/tabs-search.jpg')} /> |

## 实时示例

如果您希望动手实践上述概念和代码，请在 StackBlitz 上查看我们关于上述主题的[实时示例](https://stackblitz.com/edit/ionic-react-routing?file=src/index.tsx)。

### 标签视图中的 IonRouterOutlet

在标签视图中工作时，Ionic React 需要一种方式来确定哪些视图属于哪些标签。我们通过利用提供给 `Route` 的路径是正则表达式这一事实来实现这一点。

虽然语法看起来有点奇怪，但一旦您理解了它，就相当直接了当。

例如，一个有两个标签（会话和演讲者）的视图的路由可以这样设置：

```tsx
<IonRouterOutlet>
  <Route path="/:tab(sessions)" component={SessionsPage} exact={true} />
  <Route path="/:tab(sessions)/:id" component={SessionDetail} />
  <Route path="/:tab(speakers)" component={SpeakerList} exact={true} />
</IonRouterOutlet>
```

如果导航到的 URL 是 "/sessions"，它将匹配第一个路由，并向传递给 `SessionsPage` 的结果 `match` 对象添加一个名为 "tab" 且值为 "sessions" 的 URL 参数。

当用户导航到会话详情页面（例如 "/sessions/1"）时，第二个路由会添加一个名为 "tab" 且值为 "sessions" 的 URL 参数。当 `IonRouterOutlet` 看到两个页面都在同一个 "sessions" 标签中时，它会为新视图提供一个带动画的页面过渡。如果用户导航到一个新标签（本例中为 "speakers"），`IonRouterOutlet` 就知道不提供动画。

### IonRouterOutlet 中的 Switches

由于 `IonRouterOutlet` 接管了决定哪些路由被渲染的工作，在 `IonRouterOutlet` 内部使用 React Router 的 `Switch` 是没有效果的。在 `IonRouterOutlet` 外部使用时，Switches 仍然按预期工作。

## 更多信息

有关使用 React Router 在 React 中进行路由的更多信息，请查看他们的文档： [https://reacttraining.com/react-router/web](https://reacttraining.com/react-router/web)。

## 来自社区

<!-- cspell:disable -->

[Ionic 4 and React: Navigation](https://alligator.io/ionic/ionic-4-react-navigation) - Paul Halliday

<!-- cspell:enable -->