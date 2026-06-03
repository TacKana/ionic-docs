---
title: Angular 导航
sidebar_label: 导航/路由
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<head>
  <title>Angular 导航：路由与重定向在 Angular 应用中的工作方式</title>
  <meta
    name="description"
    content="我们的 Angular 导航指南介绍了在使用 Ionic 和 Angular 构建的应用中路由的工作方式。阅读以了解更多关于 Angular 中基本路由和重定向的信息。"
  />
</head>

本指南介绍了在使用 Ionic 和 Angular 构建的应用中路由的工作方式。

Angular Router 是 Angular 应用中最重要的库之一。如果没有它，应用将是单视图/单上下文的应用，或者在浏览器重新加载时无法保持其导航状态。有了 Angular Router，我们可以创建可链接且具有丰富动画效果的应用（当然，与 Ionic 配合使用时）。让我们看看 Angular Router 的基础知识以及如何为 Ionic 应用配置它。

## 简单路由

对于大多数应用来说，某种形式的路由通常是必需的。最基本的配置如下所示：

```tsx

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
  ...
  RouterModule.forRoot([
    { path: '', component: LoginComponent },
    { path: 'detail', component: DetailComponent },
  ])
  ],
})
```

这里最简单的分解是路径/组件查找。当我们的应用加载时，路由器通过读取用户尝试加载的 URL 来启动。在我们的示例中，我们的路由查找 `''`，这本质上是我们的索引路由。因此，我们加载 `LoginComponent`。这相当直接。这种匹配路径与组件的模式适用于路由器配置中的每个条目。但是，如果我们想在初始加载时加载不同的路径怎么办？

## 处理重定向

为此我们可以使用路由器重定向。重定向的工作方式与典型的路由对象相同，但包含一些不同的键。

```tsx
[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
];
```

在我们的重定向中，我们查找应用的索引路径。然后如果加载该路径，我们重定向到 `login` 路由。最后的 `pathMatch` 键是必需的，用来告诉路由器它应该如何查找路径。

由于我们使用 `full`，我们告诉路由器应该比较完整的路径，即使它最终是像 `/route1/route2/route3` 这样的路径。这意味着如果我们有：

```tsx
{ path: '/route1/route2/route3', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
```

并加载 `/route1/route2/route3`，我们会重定向。但如果我们加载了 `/route1/route2/route4`，则不会重定向，因为路径不完整匹配。

或者，如果我们使用：

```tsx
{ path: '/route1/route2', redirectTo: 'login', pathMatch: 'prefix' },
{ path: 'login', component: LoginComponent },
```

那么加载 `/route1/route2/route3` 和 `/route1/route2/route4` 都会被重定向。这是因为 `pathMatch: 'prefix'` 只匹配部分路径。

## 导航到不同的路由

讨论路由是好事，但如何实际导航到这些路由呢？为此，我们可以使用 `routerLink` 指令。让我们回到之前的简单路由器设置：

```ts
RouterModule.forRoot([
  { path: '', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
]);
```

现在从 `LoginComponent` 中，我们可以使用以下 HTML 导航到详情路由。

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Login</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-button [routerLink]="['/detail']">Go to detail</ion-button>
</ion-content>
```

这里重要的部分是 `ion-button` 和 `routerLink` 指令。RouterLink 的工作方式类似于典型的 `href`，但它不是将 URL 构建为字符串，而是可以构建为数组，从而提供更复杂的路径。

我们还可以通过使用路由器 API 在应用中编程式导航。

```tsx
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  ...
})
export class LoginComponent {

  constructor(private router: Router){}

  navigate(){
    this.router.navigate(['/detail'])
  }
}
```

两种选项提供相同的导航机制，只是适用于不同的使用场景。

### 使用 LocationStrategy.historyGo 导航

Angular Router 有一个 [LocationStrategy.historyGo](https://angular.io/api/common/LocationStrategy#historyGo) 方法，允许开发者通过应用历史记录向前或向后导航。让我们看一个例子。

假设你有以下应用历史记录：

`/pageA` --> `/pageB` --> `/pageC`

如果在 `/pageC` 上调用 `LocationStrategy.historyGo(-2)`，你将被带回到 `/pageA`。如果你随后调用 `LocationStrategy.historyGo(2)`，你将被带到 `/pageC`。

`LocationStrategy.historyGo()` 的一个关键特性是它期望你的应用历史记录是线性的。这意味着 `LocationStrategy.historyGo()` 不应在使用非线性路由的应用中使用。有关更多信息，请参见[线性路由与非线性路由](#线性路由与非线性路由)。

## 延迟加载路由

我们当前设置路由的方式使它们包含在根 app.module 的同一个代码块中，这并不理想。相反，路由器有一种设置可以让组件隔离到它们自己的代码块中。

```tsx

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
  ...
  RouterModule.forRoot([
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) }
  ])
  ],
})
```

虽然相似，但 `loadChildren` 属性是一种通过使用原生 import 而不是直接引用组件来引用模块的方式。但要做到这一点，我们需要为每个组件创建一个模块。

```tsx
...
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
  ...
  RouterModule.forChild([
    { path: '', component: LoginComponent },
  ])
  ],
})
```

:::note
我们省略了一些额外内容，只包含必要的部分。
:::

这里，我们有一个典型的 Angular 模块设置，同时导入 RouterModule，但现在我们使用 `forChild` 并在该设置中声明组件。通过这种设置，当我们运行构建时，将为应用组件、登录组件和详情组件生成独立的代码块。

## Standalone 组件

Standalone 组件允许开发者通过路由延迟加载组件，而无需将组件声明到 Angular 模块中。

开发者可以使用 Angular 中现有的 standalone 组件路由语法：

```ts
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'standalone-route',
        loadComponent: () => import('./path/to/my-component.component').then((c) => c.MyComponent),
      },
    ]),
  ],
})
export class AppRoutingModule {}
```

:::tip
如果你使用 `routerLink`、`routerDirection` 或 `routerAction`，请确保同时为 Ionic 组件导入 `IonRouterLink` 指令，或为 `<a>` 元素导入 `IonRouterLinkWithHref` 指令。相关的示例可在 [Ionic Angular 构建选项文档](./build-options.md#从-modules-迁移到-standalone) 中找到。
:::

要开始使用 standalone 组件，请[访问 Angular 官方文档](https://angular.io/guide/standalone-components)。

## 在线示例

如果你希望亲手实践上述概念和代码，请查看我们在 StackBlitz 上的[在线示例](https://stackblitz.com/edit/ionic-angular-routing?file=src/app/app-routing.module.ts)。

## 线性路由与非线性路由

### 线性路由

如果你构建过使用路由的 Web 应用，你可能之前就使用过线性路由。线性路由意味着你可以通过推入和弹出页面在应用历史记录中向前或向后移动。

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

`Accessibility` --> `VoiceOver` --> `Speech`

当我们按下返回按钮时，我们沿着相同的路由路径反向跟随。线性路由有助于实现简单且可预测的路由行为。这也意味着我们可以使用 Angular Router API，如 [LocationStrategy.historyGo()](#使用-locationstrategyhistorygo-导航)。

线性路由的缺点是不允许复杂的用户体验，如标签视图。这时非线性路由就发挥作用了。

### 非线性路由

非线性路由是一个概念，对于许多学习使用 Ionic 构建移动应用的 Web 开发者来说可能是新的。

非线性路由意味着用户应该返回的视图不一定是屏幕上显示的先前视图。

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

在上面的示例中，我们从 `Originals` 标签开始。点击卡片将我们带到 `Originals` 标签内的 `Ted Lasso` 视图。

在这里，我们切换到 `Search` 标签。然后，我们再次点击 `Originals` 标签，被带回到 `Ted Lasso` 视图。此时，我们开始使用非线性路由。

为什么这是非线性路由？我们之前的视图是 `Search` 视图。然而，在 `Ted Lasso` 视图上按下返回按钮应该将我们带回到根 `Originals` 视图。这是因为移动应用中的每个标签都被视为自己的堆栈。[使用标签](#使用标签)部分将更详细地讨论这一点。

如果在 `Ted Lasso` 视图上简单地调用 `LocationStrategy.historyGo(-1)`，我们会回到 `Search` 视图，这是不正确的。

非线性路由允许实现线性路由无法处理的复杂用户流程。然而，某些线性路由 API（如 `LocationStrategy.historyGo()`）无法在此非线性环境中使用。这意味着在使用标签或嵌套出口时不应使用 `LocationStrategy.historyGo()`。

### 应该选择哪一个？

我们建议保持应用尽可能简单，直到你需要添加非线性路由。非线性路由非常强大，但它也会给移动应用增加相当大的复杂性。

非线性路由最常见的两种用途是标签和嵌套的 `ion-router-outlet`。我们建议只有在你的应用符合标签或嵌套路由器出口的使用场景时才使用非线性路由。

有关标签的更多信息，请参见[使用标签](#使用标签)。

有关嵌套路由器出口的更多信息，请参见[嵌套路由](#嵌套路由)。

## 共享 URL 与嵌套路由

在设置路由时一个常见的困惑是在共享 URL 和嵌套路由之间做选择。本指南部分将解释两者，并帮助你决定使用哪一种。

### 共享 URL

共享 URL 是一种路由配置，其中路由共享 URL 的某些部分。以下是共享 URL 配置的示例：

```tsx
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardMainPage,
  },
  {
    path: 'dashboard/stats',
    component: DashboardStatsPage,
  },
];
```

上述路由被认为是"共享"的，因为它们重用了 URL 的 `dashboard` 部分。

### 嵌套路由

嵌套路由是一种路由配置，其中路由被列为其他路由的子路由。以下是嵌套路由配置的示例：

```tsx
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardRouterOutlet,
    children: [
      {
        path: '',
        component: DashboardMainPage,
      },
      {
        path: 'stats',
        component: DashboardStatsPage,
      },
    ],
  },
];
```

上述路由是嵌套的，因为它们位于父路由的 `children` 数组中。请注意，父路由渲染了 `DashboardRouterOutlet` 组件。当你嵌套路由时，需要渲染另一个 `ion-router-outlet` 实例。

### 应该选择哪一个？

当你希望从页面 A 过渡到页面 B，同时保留 URL 中两个页面之间的关系时，共享 URL 非常适用。在我们之前的示例中，`/dashboard` 页面上的按钮可以过渡到 `/dashboard/stats` 页面。两个页面之间的关系得以保留，原因是 a) 页面过渡和 b) URL。

当你希望在出口 A 中渲染内容，同时在嵌套出口 B 中渲染子内容时，应使用嵌套路由。你最常见的用例是标签。当你加载 Ionic 标签启动应用时，你会看到 `ion-tab-bar` 和 `ion-tabs` 组件在第一个 `ion-router-outlet` 中渲染。`ion-tabs` 组件渲染另一个 `ion-router-outlet`，负责渲染每个标签的内容。

在移动应用中，嵌套路由有意义的场景非常少。如有疑问，请使用共享 URL 路由配置。我们强烈建议不要在标签以外的上下文中使用嵌套路由，因为它可能很快使应用导航变得混乱。

## 使用标签

对于标签，Angular Router 为 Ionic 提供了知道应加载哪些组件的机制，但实际的重任是由标签组件完成的。让我们看一个简单的示例。

```ts
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
```

这里我们加载一个名为"tabs"的路径。在这个示例中，我们称路径为"tabs"，但路径名称可以更改。它们可以被命名为适合你应用的任何名称。在该路由对象中，我们也可以定义一个子路由。在这个示例中，顶层子路由"tab1"充当我们的"出口"，可以加载额外的子路由。在这个示例中，我们有一个单独的次级子路由，它只是加载一个新组件。标签的标记如下：

```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab1">
      <ion-icon name="flash"></ion-icon>
      <ion-label>Tab One</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

如果你之前构建过 Ionic 应用，这应该很熟悉。我们创建一个 `ion-tabs` 组件，并提供一个 `ion-tab-bar`。`ion-tab-bar` 提供一个 `ion-tab-button`，其 `tab` 属性与路由器配置中的标签"出口"相关联。请注意，最新版本的 `@ionic/angular` 不再需要 `<ion-tab>`，而是允许开发者完全自定义标签栏，而单一事实来源位于路由器配置中。

### Ionic 中标签的工作方式

Ionic 中的每个标签都被视为一个独立的导航堆栈。这意味着如果你的应用中有三个标签，每个标签都有自己的导航堆栈。在每个堆栈中，你可以向前导航（推入视图）和向后导航（弹出视图）。

这个行为很重要，因为它不同于在其他基于 Web 的 UI 库中发现的大多数标签实现。其他库通常将标签作为单一历史堆栈来管理。

由于 Ionic 专注于帮助开发者构建移动应用，Ionic 中的标签旨在尽可能接近原生移动标签。因此，Ionic 标签中的某些行为可能与你见过的其他 UI 库中的标签实现有所不同。继续阅读以了解更多关于这些差异的信息。

### 标签内的子路由

当向标签添加额外路由时，应将它们编写为兄弟路由，并以父标签作为路径前缀。下面的示例将 `/tabs/tab1/view` 路由定义为 `/tabs/tab1` 路由的兄弟。由于这个新路由具有 `tab1` 前缀，它将在 `Tabs` 组件内渲染，并且 Tab 1 仍将在 `ion-tab-bar` 中被选中。

```ts
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
          },
        ],
      },
      {
        path: 'tab1/view',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab1/tab1view.module').then((m) => m.Tab1ViewPageModule),
          },
        ],
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
          },
        ],
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
```

### 在标签之间切换

由于每个标签都有自己的导航堆栈，重要的是要注意这些导航堆栈永远不应相互交互。这意味着标签 1 中不应有将用户导航到标签 2 的按钮。换句话说，标签只能由用户点击标签栏中的标签按钮来更改。

实践中一个很好的例子是 iOS App Store 和 Google Play Store 移动应用。这两个应用都提供标签式界面，但两者都不会将用户路由到不同标签。例如，iOS App Store 应用中的"Games"标签从未将用户引导到"Search"标签，反之亦然。

让我们看看一些使用标签时常见的错误。

**多个标签引用的设置标签**

一种常见的做法是将设置视图创建为自己的标签。如果开发者需要呈现多层嵌套的设置菜单，这很好。然而，其他标签不应尝试路由到设置标签。正如我们上面提到的，设置标签应被激活的唯一方式是用户点击适当的标签按钮。

如果你发现你的标签需要引用设置标签，我们建议使用 `ion-modal` 将设置视图设置为模态框。这是 iOS App Store 应用中的一种实践。通过这种方式，任何标签都可以呈现模态框，而不会破坏每个标签都是自己堆栈的移动标签模式。

下面的示例展示了 iOS App Store 应用如何处理从多个标签呈现"Account"视图。通过在模态框中呈现"Account"视图，应用可以在移动标签最佳实践中跨多个标签显示相同的视图。

<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/tabs-account-demo.mp4')}
  controls
></video>

**跨标签复用视图**

另一种常见的做法是在多个标签中呈现相同的视图。开发者通常尝试通过将视图放在单个标签中，然后让其他标签路由到该标签来实现这一点。正如我们上面提到的，这破坏了移动标签模式，应该避免。

相反，我们建议在每个标签中创建引用相同组件的路由。这是流行应用如 Spotify 中的做法。例如，你可以从"Home"、"Search"和"Your Library"标签访问专辑或播客。当访问专辑或播客时，用户停留在该标签内。应用通过在每个标签中创建路由并在代码库中共享通用组件来实现这一点。

下面的示例展示了 Spotify 应用如何复用相同的专辑组件在多个标签中显示内容。请注意，每个截图显示的是相同的专辑，但来自不同的标签。

|                      Home 标签                       |                      Search 标签                       |
| :-------------------------------------------------: | :---------------------------------------------------: |
| <img src={useBaseUrl('img/usage/tabs-home.jpg')} /> | <img src={useBaseUrl('img/usage/tabs-search.jpg')} /> |
