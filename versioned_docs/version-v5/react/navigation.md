---
title: 'React 导航：路由链接重定向到另一个页面'
description: 'React 导航指南涵盖了使用 Ionic 和 React 构建的应用中的路由。了解如何为路由链接定义重定向路径以导航到另一个页面。'
sidebar_label: 导航/路由
---

# React 导航

本指南介绍在使用 Ionic 和 React 构建的应用中路由的工作原理。

`IonReactRouter` 底层使用流行的 [React Router](https://github.com/ReactTraining/react-router) 库。使用 Ionic 和 React Router，您可以创建具有丰富页面过渡效果的多页面应用。

您所了解的关于使用 React Router 进行路由的所有知识都适用于 Ionic React。让我们看看 Ionic React 应用的基础知识以及路由如何与之配合。

## Ionic React 中的路由

这是一个示例 `App` 组件，它定义了一条指向 "/dashboard" URL 的路由。当您访问 "/dashboard" 时，路由会渲染 `DashboardPage` 组件。

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

重定向还设置了 `exact` 属性，这意味着 URL 必须与 `from` 属性（或者如果 `Route` 使用了 `path` 属性，则是 `path` 属性）精确匹配，该路由才算匹配。如果没有这个属性，这个重定向会为每个路由渲染，因为每个路由都以 "/" 开头。

您还可以根据条件（例如检查用户是否已认证）从路由的 render 方法中以编程方式进行重定向：

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

`IonReactRouter` 组件包装了 React Router 中传统的 [`BrowserRouter`](https://reacttraining.com/react-router/web/api/BrowserRouter) 组件，并为应用设置了路由。因此，请使用 `IonReactRouter` 代替 `BrowserRouter`。您可以向 `IonReactRouter` 传递任何属性，它们会被传递给底层的 `BrowserRouter`。

## 嵌套路由

在 Dashboard 页面内部，我们定义了与应用此特定部分相关的更多路由：

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

这里又定义了几条路由，指向应用仪表盘部分内的页面。注意，我们需要在路径中定义完整路由，即使我们是从该 URL 到达此页面，也不能省略 "/dashboard"。React Router 需要完整路径，不支持相对路径。

不过，我们可以使用 [`match`](https://reacttraining.com/react-router/web/api/match) 对象的 `url` 属性来提供匹配渲染组件的 URL，这有助于处理嵌套路由：

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

这里，`match.url` 包含 "/dashboard" 的值，因为这是用于渲染 `DashboardPage` 的 URL。

这些路由被分在一个 `IonRouterOutlet` 中，接下来让我们讨论一下。

## IonRouterOutlet

`IonRouterOutlet` 组件为渲染 Ionic "页面" 的路由提供了一个容器。当页面在 `IonRouterOutlet` 中时，该容器控制页面之间的过渡动画，以及控制页面何时创建和销毁，这有助于在视图之间来回切换时保持状态。

上面的 `DashboardPage` 显示了一个用户列表页面和一个详情页面。当在两个页面之间导航时，`IonRouterOutlet` 提供适当的平台页面过渡，并保持前一个页面的状态完整，以便用户导航回列表页面时，它呈现与离开时相同的状态。

`IonRouterOutlet` 应仅包含 `Route` 或 `Redirect`。任何其他组件应作为 `Route` 的结果渲染，或在 `IonRouterOutlet` 之外渲染。

## 回退路由

一个常见的路由用例是提供一个"回退"路由，以便在导航到的位置与任何已定义的路由都不匹配时进行渲染。

我们可以通过将不带 `path` 属性的 `Route` 组件作为 `IonRouterOutlet` 中定义的最后一个路由来定义回退路由。

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

这里我们看到，如果某个位置与前两个 `Route` 都不匹配，`IonRouterOutlet` 会将 Ionic React 应用重定向到 `match.url` 路径。

您也可以提供要渲染的组件来代替重定向。

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

`IonPage` 组件包装 Ionic React 应用中的每个视图，并使页面过渡和堆栈导航正常工作。使用路由器导航到的每个视图都必须包含一个 `IonPage` 组件。

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

在 Ionic React 应用中路由到不同视图时有多种选项可用。这里，`UsersListPage` 使用 `IonItem` 的 `routerLink` 属性来指定项目被点击时要导航到的路由：

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

其他具有 `routerLink` 属性的组件包括 `IonButton`、`IonCard`、`IonRouterLink`、`IonFabButton` 和 `IonItemOption`。

这些组件还都有一个 `routerDirection` 属性，用于显式设置要使用的页面过渡类型（"back"、"forward" 或 "none"）。

除了这些具有 `routerLink` 属性的组件外，您还可以使用 React Router 的 [`Link`](https://reacttraining.com/react-router/web/api/Link) 组件在视图之间导航：

```html
<Link to="/dashboard/users/1">用户 1</Link>
```

我们建议在可能的情况下尽量使用上述方法之一进行路由。这些方法的优点在于它们都渲染了一个锚点（`<a>`）标签，这有利于整体应用的可访问性。

编程式导航选项是使用 React Router 通过路由传递给其渲染组件的 [`history`](https://reacttraining.com/react-router/web/api/history) 属性。

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
`history` 是一个属性。
:::

## URL 参数

在 Dashboard Page 中定义的第二个路由有一个 URL 参数（路径中的 ":id" 部分）。URL 参数是 `path` 的动态部分，当用户导航到诸如 "/dashboard/users/1" 的 URL 时，"1" 被保存到名为 "id" 的参数中，可以在路由渲染的组件中访问。让我们看看如何操作。

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

[`match`](https://reacttraining.com/react-router/web/api/match) 属性包含有关匹配路由的信息，包括 URL 参数。我们在这里获取 `id` 参数并在屏幕上显示。

注意我们如何使用 TypeScript 接口来强类型化 props 对象。该接口在组件内部提供了类型安全性和代码补全。

## 在线示例

如果您希望动手实践上述概念和代码，请查看我们在 StackBlitz 上的 [在线示例](https://stackblitz.com/edit/ionic-react-routing?file=src/index.tsx)。

### IonRouterOutlet 在标签视图中的使用

在标签视图中工作时，Ionic React 需要一种方法来确定哪些视图属于哪些标签。我们利用提供给 `Route` 的路径是正则表达式这一事实来实现这一点。

虽然语法看起来有点奇怪，但一旦您理解了它，就相当直接了当。

例如，一个包含两个标签（sessions 和 speakers）的视图的路由可以这样设置：

```tsx
<IonRouterOutlet>
  <Route path="/:tab(sessions)" component={SessionsPage} exact={true} />
  <Route path="/:tab(sessions)/:id" component={SessionDetail} />
  <Route path="/:tab(speakers)" component={SpeakerList} exact={true} />
</IonRouterOutlet>
```

如果导航的 URL 是 "/sessions"，它将匹配第一个路由，并向传递给 `SessionsPage` 的结果 `match` 对象中添加一个名为 "tab" 且值为 "sessions" 的 URL 参数。

当用户导航到会话详情页面（例如 "/sessions/1"）时，第二个路由会添加一个名为 "tab" 且值为 "sessions" 的 URL 参数。当 `IonRouterOutlet` 发现两个页面在同一个 "sessions" 标签中时，它会为新的视图提供一个动画页面过渡。如果用户导航到新标签（此例中为 "speakers"），`IonRouterOutlet` 知道不提供动画。

### IonRouterOutlet 中的 Switch

由于 `IonRouterOutlet` 接管了确定哪些路由被渲染的工作，因此在 `IonRouterOutlet` 内部使用 React Router 的 `Switch` 不会产生任何效果。Switch 在 `IonRouterOutlet` 外部使用时仍然按预期工作。

## 更多信息

有关使用 React Router 进行路由的更多信息，请查看他们的文档： [https://reacttraining.com/react-router/web](https://reacttraining.com/react-router/web)。

## 社区资源

<!-- cspell:disable -->

[Ionic 4 and React: Navigation](https://alligator.io/ionic/ionic-4-react-navigation) - Paul Halliday

<!-- cspell:enable -->
