---
title: React 导航
sidebar_label: 导航/路由
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<head>
  <title>React 导航：使用路由链接重定向导航到另一个页面</title>
  <meta
    name="description"
    content="React 导航指南涵盖了使用 Ionic 和 React 构建的应用中的路由。了解如何为路由链接定义重定向路径以导航到另一个页面。"
  />
</head>

本指南介绍在使用 Ionic 和 React 构建的应用中路由是如何工作的。

`IonReactRouter` 在底层使用了流行的 [React Router](https://github.com/remix-run/react-router) 库。使用 Ionic 和 React Router，你可以创建具有丰富页面过渡效果的多页面应用。

你对 React Router 路由的了解都可以直接应用到 Ionic React 中。让我们来看一下 Ionic React 应用的基础知识以及路由如何与之配合工作。

## Ionic React 中的路由

以下是一个示例 `App` 组件，它定义了一个指向 "/dashboard" URL 的路由。当你访问 "/dashboard" 时，路由会渲染 `DashboardPage` 组件。

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

在 `Route` 之后，我们定义了默认的 `Redirect`，当用户访问应用的根 URL（"/"）时，会将其重定向到 "/dashboard" URL。

重定向还设置了 `exact` prop，这意味着 URL 必须与 `from` prop（如果 `Route` 上使用了 `exact` 则是 `path` prop）完全匹配。如果没有它，此重定向将为每个路由渲染，因为每个路由都以 "/" 开头。

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

`IonReactRouter` 组件包装了 React Router 中的传统 [`BrowserRouter`](https://v5.reactrouter.com/web/api/BrowserRouter) 组件，并为应用设置路由。因此，请使用 `IonReactRouter` 替代 `BrowserRouter`。你可以向 `IonReactRouter` 传递任何 props，它们将被传递到底层的 `BrowserRouter`。

## 嵌套路由

在 Dashboard 页面内部，我们定义更多与应用的这一特定部分相关的路由：

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

这里，又定义了几个路由，指向仪表板部分内的页面。请注意，我们需要在路径中定义完整的路由，即使我们是从该 URL 到达此页面，也不能省略 "/dashboard"。React Router 需要完整路径，不支持相对路径。

但是，我们可以使用 [`match`](https://v5.reactrouter.com/web/api/match) 对象的 `url` 属性来提供用于渲染组件的匹配 URL，这有助于处理嵌套路由：

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

这里，`match.url` 包含 "/dashboard" 的值，因为该 URL 用于渲染 `DashboardPage`。

这些路由被分组在 `IonRouterOutlet` 中，接下来我们讨论它。

## IonRouterOutlet

`IonRouterOutlet` 组件为渲染 Ionic "页面"的路由提供了一个容器。当页面在 `IonRouterOutlet` 中时，容器控制页面之间的过渡动画，以及控制何时创建和销毁页面，这有助于在视图之间来回切换时保持页面状态。

上面的 `DashboardPage` 显示了一个用户列表页面和一个详情页面。在两个页面之间导航时，`IonRouterOutlet` 提供适当的平台页面过渡，并保持前一页面的状态，以便用户导航回列表页面时，它显示为与离开时相同的状态。

`IonRouterOutlet` 应该只包含 `Route` 或 `Redirect`。任何其他组件应该作为 `Route` 的结果渲染，或者在 `IonRouterOutlet` 外部渲染。

## 回退路由

一个常见的路由用例是提供一个"回退"路由，当导航到的位置与任何已定义的路由都不匹配时渲染。

我们可以通过将没有 `path` 属性的 `Route` 组件作为 `IonRouterOutlet` 内最后定义的路由来定义回退路由。

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

这里，如果某个位置与前两个 `Route` 都不匹配，`IonRouterOutlet` 会将 Ionic React 应用重定向到 `match.url` 路径。

你也可以提供一个要渲染的组件来替代重定向。

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

`IonPage` 组件包装了 Ionic React 应用中的每个视图，使页面过渡和堆栈导航能够正常工作。使用路由器导航到的每个视图都必须包含一个 `IonPage` 组件。

`IonPage` 对于正确的样式也是必需的。它提供了一个 flex 容器，确保页面内容（如 `IonContent`）大小正确，并且不会与其他 UI 元素（如 `IonTabBar`）重叠。

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
      <IonContent className="ion-padding">Hello World</IonContent>
    </IonPage>
  );
};
export default Home;
```

## 导航

在 Ionic React 应用中有多种路由到不同视图的选项。这里，`UsersListPage` 使用 `IonItem` 的 `routerLink` prop 来指定点击项目时要跳转的路由：

**UsersListPage.tsx**

```tsx
const UsersListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>用户列表</IonTitle>
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

其他具有 `routerLink` prop 的组件包括 `IonButton`、`IonCard`、`IonRouterLink`、`IonFabButton` 和 `IonItemOption`。

这些组件还有一个 `routerDirection` prop，用于显式设置页面过渡的类型（`"forward"`、`"back"` 或 `"root"`）。

除了这些具有 `routerLink` prop 的组件之外，你还可以使用 React Router 的 [`Link`](https://v5.reactrouter.com/web/api/Link) 组件在视图之间导航：

```html
<Link to="/dashboard/users/1">用户 1</Link>
```

我们建议尽可能使用上述方法之一进行路由。这些方法的优点是它们都会渲染一个锚点（`<a>`）标签，这有利于应用的整体可访问性。

导航的一个编程选项是使用 React Router 通过路由提供给其所渲染组件的 [`history`](https://v5.reactrouter.com/web/api/history) prop。

```tsx
<IonButton
  onClick={(e) => {
    e.preventDefault();
    history.push('/dashboard/users/1');
  }}
>
  跳转到用户 1
</IonButton>
```

:::note
`history` 是一个 prop。
:::

### 使用 `history.go` 导航

React Router 使用 `history` 包，它有一个 [history.go](https://github.com/remix-run/history/blob/dev/docs/api-reference.md#history.go) 方法，允许开发者向前或向后浏览应用历史记录。让我们看一个示例。

假设你有以下应用历史记录：

`/pageA` --> `/pageB` --> `/pageC`

如果你在 `/pageC` 上调用 `router.go(-2)`，你将回到 `/pageA`。如果然后调用 `router.go(2)`，你将回到 `/pageC`。

在 Ionic React 中使用 `history.go()` 目前不被支持。希望看到此功能被添加到 Ionic React 中？[请在 GitHub 上告诉我们](https://github.com/ionic-team/ionic-framework/issues/23775)！

## URL 参数

Dashboard 页面中定义的第二个路由有一个 URL 参数（路径中的 ":id" 部分）。URL 参数是 `path` 的动态部分，当用户导航到诸如 "/dashboard/users/1" 的 URL 时，"1" 被保存到名为 "id" 的参数中，可以在路由渲染的组件中访问。让我们看看如何实现。

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

[`match`](https://v5.reactrouter.com/web/api/match) prop 包含匹配路由的信息，包括 URL 参数。我们在此获取 `id` 参数并将其显示在屏幕上。

请注意我们如何使用 TypeScript 接口来强类型化 props 对象。接口在组件内部提供了类型安全和代码补全。

## 线性路由 vs 非线性路由

### 线性路由

如果你构建过使用路由的 Web 应用，你可能之前使用过线性路由。线性路由意味着你可以通过 push 和 pop 页面在应用历史记录中向前或向后移动。

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

此示例中的应用历史记录有以下路径：

`Accessibility` --> `VoiceOver` --> `Speech`

当我们按下返回按钮时，我们按照相同的路由路径反向进行。线性路由有助于实现简单且可预测的路由行为。

线性路由的缺点是不允许复杂的用户体验，例如标签视图。这就是非线性路由的用武之地。

### 非线性路由

非线性路由是一个概念，对于许多学习使用 Ionic 构建移动应用的 Web 开发者来说可能是新的。

非线性路由意味着用户应该返回的视图不一定是之前在屏幕上显示的视图。

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

在上面的示例中，我们从 `Originals` 标签开始。点击卡片会跳转到 `Originals` 标签中的 `Ted Lasso` 视图。

从这里，我们切换到 `Search` 标签。然后，我们再次点击 `Originals` 标签，回到 `Ted Lasso` 视图。此时，我们开始使用非线性路由。

为什么这是非线性路由？我们之前所在的视图是 `Search` 视图。然而，在 `Ted Lasso` 视图上按下返回按钮应该带我们回到 `Originals` 标签的根视图。这是因为移动应用中的每个标签都被视为自己的堆栈。[使用标签](#使用标签页)部分会详细介绍这一点。

如果在 `Ted Lasso` 视图上按下返回按钮只是调用了 `history.go(-1)`，我们会回到 `Search` 视图，这是不正确的。

非线性路由允许实现线性路由无法处理的复杂用户流程。然而，某些线性路由 API（如 `history.go()`）无法在此非线性环境中使用。这意味着在使用标签或嵌套 outlet 时不应使用 `history.go()`。

### 应该选择哪个？

我们建议保持你的应用尽可能简单，直到你需要添加非线性路由。非线性路由非常强大，但它也会给移动应用增加相当多的复杂性。

非线性路由最常见的两种用法是标签和嵌套的 `IonRouterOutlet`。我们建议仅在你的应用满足标签或嵌套路由器 outlet 用例时才使用非线性路由。

关于标签的更多信息，请参见[使用标签](#使用标签页)。

关于嵌套路由器 outlet 的更多信息，请参见[嵌套路由](#嵌套路由)。

## 共享 URL vs 嵌套路由

设置路由时一个常见的混淆点是在共享 URL 和嵌套路由之间做选择。本指南的这一部分将解释两者，并帮助你决定使用哪一个。

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

上面的路由被认为是"共享"的，因为它们重用了 URL 中的 `dashboard` 部分。

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

上面的路由是嵌套的，因为它们位于父路由的 `children` 数组中。注意父路由渲染了 `DashboardRouterOutlet` 组件。当你嵌套路由时，你需要渲染另一个 `IonRouterOutlet` 实例。

### 应该选择哪个？

当你想要从页面 A 过渡到页面 B，同时保留两个页面在 URL 中的关系时，共享 URL 非常有用。在我们之前的示例中，`/dashboard` 页面上的按钮可以过渡到 `/dashboard/stats` 页面。两个页面之间的关系通过 a) 页面过渡和 b) URL 得以保留。

当你想要在 outlet A 中渲染内容的同时在嵌套的 outlet B 中渲染子内容时，应该使用嵌套路由。你会遇到的最常见用例是标签。当你加载标签型 Ionic 启动应用时，你会看到 `IonTabBar` 和 `IonTabs` 组件在第一个 `IonRouterOutlet` 中渲染。`IonTabs` 组件渲染另一个 `IonRouterOutlet`，它负责渲染每个标签的内容。

在移动应用中，嵌套路由有意义的用例非常少。如果有疑问，请使用共享 URL 路由配置。我们强烈建议不要在其他上下文中使用嵌套路由，因为它可能会使应用导航变得混乱。

## 使用标签页

当使用标签时，Ionic 需要知道哪个视图属于哪个标签。`IonTabs` 组件在这里很有用，但让我们看看路由设置是什么样子的：

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

这里，我们的 `tabs` 路径加载了一个 `Tabs` 组件。我们在此组件内将每个标签提供为路由对象。在此示例中，我们将路径称为 `tabs`，但这是可以自定义的。

让我们先看一下 `Tabs` 组件：

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

如果你之前使用过 Ionic Framework，这应该很熟悉。我们创建一个 `IonTabs` 组件并提供一个 `IonTabBar`。`IonTabBar` 提供 `IonTabButton` 组件，每个组件都有一个 `tab` 属性，与路由器配置中对应的标签相关联。我们还提供了一个 `IonRouterOutlet`，为 `IonTabs` 提供一个 outlet 来渲染不同的标签视图。

:::tip
`IonTabs` 会为你渲染一个 `IonPage`，所以你不需要在此手动添加 `IonPage`。
:::

### Ionic 中标签的工作方式

Ionic 中的每个标签被视为一个独立的导航堆栈。这意味着如果你的应用中有三个标签，每个标签都有自己的导航堆栈。在每个堆栈内，你可以向前导航（push 一个视图）和向后导航（pop 一个视图）。

这个行为很重要，因为它与大多数基于 Web 的 UI 库中的标签实现不同。其他库通常将标签管理为单一的历史堆栈。

由于 Ionic 专注于帮助开发者构建移动应用，Ionic 中的标签设计为尽可能接近原生移动标签。因此，Ionic 的标签可能在某些行为上与你见过的其他 UI 库中的标签实现不同。继续阅读以了解更多关于这些差异的信息。

### 标签内的子路由

向标签添加额外路由时，应将它们编写为兄弟路由，并以父标签作为路径前缀。下面的示例将 `/tabs/tab1/view` 路由定义为 `/tabs/tab1` 路由的兄弟路由。由于这个新路由具有 `tab1` 前缀，它将在 `Tabs` 组件内部渲染，并且 Tab 1 仍将在 `IonTabBar` 中保持选中状态。

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

由于每个标签都是自己的导航堆栈，需要注意的是这些导航堆栈永远不应相互交互。这意味着 Tab 1 中永远不应有一个将用户路由到 Tab 2 的按钮。换句话说，标签只能由用户点击标签栏中的标签按钮来切换。

实践中一个很好的例子是 iOS App Store 和 Google Play Store 移动应用。这些应用都提供了标签界面，但两者都不会将用户跨标签路由。例如，iOS App Store 应用中的"游戏"标签从不将用户引导到"搜索"标签，反之亦然。

让我们看一下使用标签时的一些常见错误。

**多个标签引用的设置标签**

一种常见的做法是创建一个 Settings 视图作为自己的标签。如果开发者需要展示多个嵌套的设置菜单，这很好。然而，其他标签不应尝试路由到 Settings 标签。正如我们上面提到的，Settings 标签应该被激活的唯一方式是用户点击相应的标签按钮。

如果你发现你的标签需要引用 Settings 标签，我们建议使用 `ion-modal` 将 Settings 视图作为一个弹窗。这是 iOS App Store 应用中的一种做法。通过这种方法，任何标签都可以呈现弹窗，而不会破坏每个标签作为自己堆栈的移动标签模式。

下面的示例展示了 iOS App Store 应用如何处理从多个标签呈现"账户"视图。通过在弹窗中呈现"账户"视图，应用可以在移动标签最佳实践中工作，在多个标签中显示相同的视图。

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

另一种常见做法是在多个标签中呈现相同的视图。开发者通常尝试通过将视图包含在单个标签中，然后让其他标签路由到该标签来实现这一点。正如我们上面提到的，这打破了移动标签模式，应该避免。

相反，我们建议在每个标签中创建引用相同组件的路由。这是 Spotify 等流行应用中的做法。例如，你可以从"首页"、"搜索"和"你的资料库"标签访问专辑或播客。访问专辑或播客时，用户保持在当前标签内。应用通过为每个标签创建路由并在代码库中共享公共组件来实现这一点。

下面的示例展示了 Spotify 应用如何重用相同的专辑组件在多个标签中显示内容。注意每个截图显示的是相同的专辑，但来自不同的标签。

|                       首页标签                       |                       搜索标签                       |
| :-------------------------------------------------: | :---------------------------------------------------: |
| <img src={useBaseUrl('img/usage/tabs-home.jpg')} /> | <img src={useBaseUrl('img/usage/tabs-search.jpg')} /> |

## 在线示例

如果你希望亲身体验上述概念和代码，请在 StackBlitz 上查看我们关于上述主题的[在线示例](https://stackblitz.com/edit/ionic-react-routing?file=src/index.tsx)。

### 标签视图中的 IonRouterOutlet

当在标签视图中工作时，Ionic React 需要一种方法来确定哪些视图属于哪些标签。我们通过利用 `Route` 提供的路径是正则表达式这一事实来实现。

虽然语法看起来有点奇怪，但一旦你理解了它，就会相当简单。

例如，具有两个标签（sessions 和 speakers）的视图的路由可以这样设置：

```tsx
<IonRouterOutlet>
  <Route path="/:tab(sessions)" component={SessionsPage} exact={true} />
  <Route path="/:tab(sessions)/:id" component={SessionDetail} />
  <Route path="/:tab(speakers)" component={SpeakerList} exact={true} />
</IonRouterOutlet>
```

如果导航的 URL 是 "/sessions"，它将匹配第一个路由，并在传递给 `SessionsPage` 的 `match` 对象中添加一个名为 "tab" 且值为 "sessions" 的 URL 参数。

当用户导航到会话详情页面（例如 "/sessions/1"）时，第二个路由添加一个名为 "tab" 且值为 "sessions" 的 URL 参数。当 `IonRouterOutlet` 看到两个页面都在同一个 "sessions" 标签中时，它会为新视图提供动画页面过渡。如果用户导航到新标签（本例中为 "speakers"），`IonRouterOutlet` 知道不提供动画。

### IonRouterOutlet 中的 Switch

由于 `IonRouterOutlet` 接替了确定哪些路由被渲染的工作，因此在 `IonRouterOutlet` 内部使用 React Router 的 `Switch` 不会有任何效果。Switch 在 `IonRouterOutlet` 外部使用时仍然可以正常工作。

## 工具函数

### useIonRouter

`useIonRouter` 钩子可用于更直接地控制 Ionic React 中的路由。它允许你在调用 React Router 之前向 Ionic 传递额外的元数据，例如自定义动画。

`useIonRouter` 钩子返回一个 `UseIonRouterResult`，其中包含几个便捷的路由方法：

```typescript
type UseIonRouterResult = {
  /**
   * 导航到新的 pathname
   * @param pathname - 要导航到的路径
   * @param routerDirection - 可选 - 用于过渡目的的 RouterDirection，默认为 'forward'
   * @param routeAction - 可选 - 用于历史记录目的的 RouteAction，默认为 'push'
   * @param routerOptions - 可选 - 传递给路由器的任何额外参数
   * @param animationBuilder - 可选 - 自定义过渡动画
   */
  push(
    pathname: string,
    routerDirection?: RouterDirection,
    routeAction?: RouteAction,
    routerOptions?: RouterOptions,
    animationBuilder?: AnimationBuilder
  ): void;
  /**
   * 向后导航，使用 IonRouter 确定历史记录
   * @param animationBuilder - 可选 - 自定义过渡动画
   */
  goBack(animationBuilder?: AnimationBuilder): void;
  /**
   * 确定路由器历史记录中是否还有其他路由。但即使浏览器历史记录中有更多条目，也不会阻止路由。如果有更多条目则返回 true，否则返回 false。
   */
  canGoBack(): boolean;
  /**
   * 当前路由的信息。
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

有关 Ionic 在底层使用的 React Router 实现的更多信息，请查看他们的文档：https://v5.reactrouter.com/web

## 来自社区

<!-- cspell:disable -->

[Ionic 4 和 React：导航](https://alligator.io/ionic/ionic-4-react-navigation) - Paul Halliday

<!-- cspell:enable -->
