---
title: 'React Navigation: 路由器链接重定向实现页面跳转'
description: '本指南介绍使用 Ionic 和 React 构建的应用中的路由机制。学习如何为路由器链接定义重定向路径，实现页面导航。'
sidebar_label: 导航/路由
---

# React 导航

本指南介绍在使用 Ionic 和 React 构建的应用中，路由机制是如何工作的。

`IonReactRouter` 底层使用了流行的 [React Router](https://github.com/ReactTraining/react-router) 库。借助 Ionic 和 React Router，您可以创建具有丰富页面过渡效果的多页面应用。

您所了解的关于使用 React Router 进行路由的所有知识都适用于 Ionic React。让我们来看一下 Ionic React 应用的基础知识以及路由如何与之配合。

## Ionic React 中的路由

以下是一个示例 `App` 组件，它定义了一个指向 "/dashboard" URL 的单个路由。当您访问 "/dashboard" 时，该路由会渲染 `DashboardPage` 组件。

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

在 `Route` 之后，我们直接定义了默认的 `Redirect`。当用户访问应用的根 URL ("/") 时，它会重定向到 "/dashboard" URL。

重定向还设置了 `exact` 属性，这意味着 URL 必须精确匹配 `from` 属性（或者对于 `Route`，如果使用了 `exact` 则匹配 `path` 属性）才能匹配此路由。如果没有这个设置，这个重定向会匹配每个路由，因为每个路由都以 "/" 开头。

您也可以根据条件（例如检查用户是否已认证）从路由的 render 方法中编程式地重定向：

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

`IonReactRouter` 组件包装了 React Router 中的传统 [`BrowserRouter`](https://reacttraining.com/react-router/web/api/BrowserRouter) 组件，并为路由设置了应用。因此，请使用 `IonReactRouter` 替代 `BrowserRouter`。您可以将任何属性传递给 `IonReactRouter`，它们将被传递到底层的 `BrowserRouter`。

## 嵌套路由

在仪表板页面内部，我们定义了与该应用特定部分相关的更多路由：

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

这里，我们定义了几个指向应用仪表板部分内部页面的路由。请注意，我们需要在路径中定义完整的路由，即使我们是从该 URL 到达此页面，也不能省略 "/dashboard"。React Router 要求完整路径，不支持相对路径。

但是，我们可以使用 [`match`](https://reacttraining.com/react-router/web/api/match) 对象的 `url` 属性来提供用于渲染组件的匹配 URL，这在处理嵌套路由时很有帮助：

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

这里，`match.url` 包含 "/dashboard" 值，因为这是用于渲染 `DashboardPage` 的 URL。

这些路由被分组在一个 `IonRouterOutlet` 中，接下来我们讨论一下这个组件。

## IonRouterOutlet

`IonRouterOutlet` 组件为渲染 Ionic "页面" 的路由提供了一个容器。当一个页面位于 `IonRouterOutlet` 中时，容器控制页面之间的过渡动画，并控制页面何时创建和销毁，这有助于在视图之间切换时保持状态。

上面的 `DashboardPage` 显示了一个用户列表页面和一个详情页面。在导航到这两个页面之间时，`IonRouterOutlet` 提供适当的平台页面过渡，并保持先前页面的状态，以便当用户导航回列表页面时，它呈现离开时的相同状态。

`IonRouterOutlet` 应仅包含 `Route` 或 `Redirect`。任何其他组件都应作为 `Route` 的结果渲染，或在 `IonRouterOutlet` 外部渲染。

## 后备路由

一个常见的路由用例是提供一个"后备"路由，以便在导航到的位置不匹配任何已定义的路由时进行渲染。

我们可以通过将没有 `path` 属性的 `Route` 组件作为 `IonRouterOutlet` 中定义的最后一个路由来定义后备路由。

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

在这里，我们看到如果某个位置不匹配前两个 `Route`，`IonRouterOutlet` 会将 Ionic React 应用重定向到 `match.url` 路径。

您也可以提供一个组件进行渲染，而不是提供重定向。

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

`IonPage` 组件包装了 Ionic React 应用中的每个视图，并使页面过渡和堆栈导航正常工作。使用路由器导航到的每个视图都必须包含一个 `IonPage` 组件。

```tsx
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>主页</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">你好，世界</IonContent>
    </IonPage>
  );
};
export default Home;
```

## 导航

在 Ionic React 应用中，有多种方法可以路由到不同的视图。在这里，`UsersListPage` 使用 `IonItem` 的 `routerLink` 属性来指定当项目被点击时要前往的路由：

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

这些组件还有一个 `routerDirection` 属性，可以显式设置要使用的页面过渡类型（"back"、"forward" 或 "none"）。

除了这些具有 `routerLink` 属性的组件之外，您还可以使用 React Router 的 [`Link`](https://reacttraining.com/react-router/web/api/Link) 组件在视图之间导航：

```html
<Link to="/dashboard/users/1">用户 1</Link>
```

我们建议尽可能使用上述方法之一进行路由。这些方法的优势在于，它们都渲染一个锚点 (`<a>`) 标签，这有利于整个应用的无障碍访问。

另一种编程式的导航选项是使用 React Router 通过路由传递给组件的 [`history`](https://reacttraining.com/react-router/web/api/history) 属性。

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

仪表板页面中定义的第二个路由有一个 URL 参数（路径中的 ":id" 部分）。URL 参数是 `path` 的动态部分，当用户导航到类似 "/dashboard/users/1" 的 URL 时，"1" 会被保存到一个名为 "id" 的参数中，该参数可以在路由渲染的组件中访问。让我们看看如何实现这一点。

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

[`match`](https://reacttraining.com/react-router/web/api/match) 属性包含有关匹配路由的信息，包括 URL 参数。我们在此获取 `id` 参数并将其显示在屏幕上。

请注意，我们使用 TypeScript 接口来对 props 对象进行强类型化。接口为我们提供了类型安全性和组件内部的代码补全。

## 实时示例

如果您希望亲手实践上述概念和代码，请在 StackBlitz 上查看我们上述主题的 [实时示例](https://stackblitz.com/edit/ionic-react-routing?file=src/index.tsx)。

### 标签视图中的 IonRouterOutlet

在标签视图中工作时，Ionic React 需要一种方式来确定哪些视图属于哪个标签。我们通过利用提供给 `Route` 的路径是正则表达式这一事实来实现这一点。

虽然语法看起来有些奇怪，但一旦理解，就相当简单。

例如，具有两个标签（sessions 和 speakers）的视图的路由可以这样设置：

```tsx
<IonRouterOutlet>
  <Route path="/:tab(sessions)" component={SessionsPage} exact={true} />
  <Route path="/:tab(sessions)/:id" component={SessionDetail} />
  <Route path="/:tab(speakers)" component={SpeakerList} exact={true} />
</IonRouterOutlet>
```

如果导航到的 URL 是 "/sessions"，它将匹配第一个路由，并向传递给 `SessionsPage` 的 `match` 对象添加一个名为 "tab" 的 URL 参数，其值为 "sessions"。

当用户导航到会话详情页面（例如 "/sessions/1"）时，第二个路由添加一个名为 "tab" 的 URL 参数，其值为 "sessions"。当 `IonRouterOutlet` 看到两个页面都在同一个 "sessions" 标签中时，它会向新视图提供动画页面过渡。如果用户导航到新标签（本例中的 "speakers"），`IonRouterOutlet` 知道不提供动画。

### IonRouterOutlet 中的 Switches

由于 `IonRouterOutlet` 接管了确定渲染哪些路由的工作，因此在 `IonRouterOutlet` 内部使用 React Router 的 `Switch` 没有效果。在 `IonRouterOutlet` 外部使用时，Switches 仍按预期工作。

## 更多信息

有关在 React 中使用 React Router 进行路由的更多信息，请查看他们的文档： [https://reacttraining.com/react-router/web](https://reacttraining.com/react-router/web)。

## 社区文章

<!-- cspell:disable -->

[Ionic 4 与 React：导航](https://alligator.io/ionic/ionic-4-react-navigation) - Paul Halliday

<!-- cspell:enable -->