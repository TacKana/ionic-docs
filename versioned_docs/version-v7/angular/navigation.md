---
title: Angular 导航
sidebar_label: 导航/路由
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<head>
  <title>Angular 导航：路由与重定向在 Angular 应用中的工作方式</title>
  <meta
    name="description"
    content="我们的 Angular 导航指南介绍了在使用 Ionic 和 Angular 构建的应用中路由是如何工作的。阅读本文了解 Angular 中的基本路由和重定向。"
  />
</head>

本指南介绍在使用 Ionic 和 Angular 构建的应用中路由是如何工作的。

Angular 路由器是 Angular 应用程序中最重要的库之一。没有它，应用程序将只能呈现单一视图或单一上下文，或者在浏览器刷新时无法维护其导航状态。借助 Angular 路由器，我们可以创建内容丰富、可链接且具有丰富动画（当然，当与 Ionic 配对时）的应用。让我们看看 Angular 路由器的基础知识以及我们如何为 Ionic 应用配置它。

<LegacyAnchor id="lazy-loading-routes" />

## 一个简单的路由

对于大多数应用来说，某种形式的路由通常是必需的。最基本的配置看起来像这样：

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

这里最简单的分解是路径/组件的查找。当我们的应用加载时，路由器通过读取用户试图加载的 URL 来启动。在我们的示例中，我们的路由查找 `''`，这本质上就是我们的索引路由。因此，我们会加载 `LoginComponent`。相当直接。这种将路径与组件匹配的模式对我们路由器配置中的每个条目都适用。但是，如果我们想在初始加载时加载一个不同的路径呢？

## 处理重定向

为此，我们可以使用路由器重定向。重定向的工作方式与典型的路由对象相同，只是包含了一些不同的键。

```tsx
[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
];
```

在我们的重定向中，我们查找应用的索引路径。然后，如果加载该路径，我们会重定向到 `login` 路由。最后的 `pathMatch` 键是必需的，用来告诉路由器应该如何查找路径。

由于我们使用了 `full`，我们告诉路由器应该比较完整的路径，即使它最终是像 `/route1/route2/route3` 这样的路径。这意味着，如果我们有：

```tsx
{ path: '/route1/route2/route3', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
```

然后加载 `/route1/route2/route3`，我们会重定向。但是如果我们加载 `/route1/route2/route4`，我们不会重定向，因为路径不完全匹配。

或者，如果我们使用：

```tsx
{ path: '/route1/route2', redirectTo: 'login', pathMatch: 'prefix' },
{ path: 'login', component: LoginComponent },
```

那么加载 `/route1/route2/route3` 和 `/route1/route2/route4` 时，我们都会被重定向到这两个路由。这是因为 `pathMatch: 'prefix'` 只会匹配路径的一部分。

<LegacyAnchor id="navigating-to-different-routes" />

## 导航到不同的路由

讨论路由本身是好的，但是如何实际导航到这些路由呢？为此，我们可以使用 `routerLink` 指令。让我们回顾一下我们之前的简单路由器设置：

```ts
RouterModule.forRoot([
  { path: '', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
]);
```

现在，在 `LoginComponent` 中，我们可以使用以下 HTML 导航到详情路由。

```html
<ion-header>
  <ion-toolbar>
    <ion-title>登录</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-button [routerLink]="['/detail']">前往详情</ion-button>
</ion-content>
```

这里的关键部分是 `ion-button` 和 `routerLink` 指令。RouterLink 的工作方式类似于典型的 `href`，但不是将 URL 构建为字符串，而是可以构建为数组，这可以提供更复杂的路径。

我们还可以通过使用路由器 API 在应用程序中以编程方式进行导航。

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

两种选项都提供相同的导航机制，只是适用于不同的使用场景。

### 使用 LocationStrategy.historyGo 导航

Angular 路由器有一个 [LocationStrategy.historyGo](https://angular.io/api/common/LocationStrategy#historyGo) 方法，允许开发者在应用历史记录中向前或向后移动。让我们看一个例子。

假设你有以下应用历史记录：

`/pageA` --> `/pageB` --> `/pageC`

如果你在 `/pageC` 调用 `LocationStrategy.historyGo(-2)`，你会被带回到 `/pageA`。如果你随后调用 `LocationStrategy.historyGo(2)`，你会被带到 `/pageC`。

`LocationStrategy.historyGo()` 的一个关键特性是它期望你的应用历史记录是线性的。这意味着 `LocationStrategy.historyGo()` **不**应该在使用非线性路由的应用中使用。更多信息请参见[线性路由与非线性路由](#线性路由与非线性路由)。

## 惰性加载路由

目前我们设置路由的方式是让它们与根 app.module 包含在同一个代码块中，这并不理想。相反，路由器有一种设置允许将组件隔离到它们自己的代码块中。

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

虽然类似，但 `loadChildren` 属性是一种通过使用原生 `import` 而不是直接引用组件来引用模块的方式。但是，要这样做，我们需要为每个组件创建一个模块。

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

这里，我们有一个典型的 Angular 模块设置，以及一个 RouterModule 导入，但是我们现在使用了 `forChild` 并在该设置中声明了组件。通过这种设置，当我们运行构建时，我们将为应用组件、登录组件和详情组件生成单独的代码块。

## 独立组件

:::caution 实验性 API

独立组件是 Angular 14.x 中引入的一个实验性 API，在 Ionic 6.3 及更高版本中可用。此功能在稳定之前可能会发生变化。

:::

独立组件允许开发者在一个路由上惰性加载一个组件，而无需将该组件声明到 Angular 模块中。

要在路由和 Ionic 框架中使用独立组件，你必须首先使用 Ionic ^6.3.0。这个实验性 API 要求开发者为每个使用独立组件路由的路由出口（`ion-router-outlet` 和 `ion-tabs`）分配 `EnvironmentInjector` 实例。

```ts title="app.component.ts"
import { Component, EnvironmentInjector } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 'app.component.html',
})
export class AppComponent {
  constructor(public environmentInjector: EnvironmentInjector) {}
}
```

```html title="app.component.html"
<ion-router-outlet [environmentInjector]="environmentInjector"></ion-router-outlet>
<!-- 或者如果你正在使用 ion-tabs -->
<ion-tabs [environmentInjector]="environmentInjector"> ... </ion-tabs>
```

开发者可以使用 Angular 中现有的独立组件路由语法：

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

要开始使用独立组件，请[访问 Angular 官方文档](https://angular.io/guide/standalone-components)。

## 在线示例

如果你想亲身体验上述概念和代码，请在 StackBlitz 上查看我们关于上述主题的[在线示例](https://stackblitz.com/edit/ionic-angular-routing?file=src/app/app-routing.module.ts)。

## 线性路由与非线性路由

### 线性路由

如果你构建过使用路由的 Web 应用，你可能以前使用过线性路由。线性路由意味着你可以通过推入和弹出页面在应用历史记录中向前或向后移动。

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

当我们按下返回按钮时，我们沿着相同的路由路径返回，只是方向相反。线性路由有助于实现简单且可预测的路由行为。这也意味着我们可以使用 Angular 路由器 API，例如 [LocationStrategy.historyGo()](#使用-locationstrategyhistorygo-导航)。

线性路由的缺点是不允许复杂的用户体验，例如标签视图。这就是非线性路由发挥作用的地方。

### 非线性路由

非线性路由是一个概念，对于许多学习使用 Ionic 构建移动应用的 Web 开发者来说可能是新的。

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

在上面的示例中，我们从“原创”标签开始。点击卡片会将我们带到“原创”标签内的《泰德拉索》视图。

从这里，我们切换到“搜索”标签。然后，我们再次点击“原创”标签，并被带回到《泰德拉索》视图。此时，我们开始使用非线性路由。

为什么这是非线性路由？我们之前的视图是“搜索”视图。但是，在《泰德拉索》视图上按下返回按钮应该带我们回到根“原创”视图。这是因为移动应用中的每个标签都被视为自己的堆栈。[使用标签](#使用标签)部分会更详细地讨论这一点。

如果在《泰德拉索》视图中点击返回按钮只是简单地调用 `LocationStrategy.historyGo(-1)`，我们会回到“搜索”视图，这是不正确的。

非线性路由允许线性路由无法处理的复杂用户流程。但是，某些线性路由 API，如 `LocationStrategy.historyGo()`，不能在这种非线性环境中使用。这意味着在使用标签或嵌套出口时**不应**使用 `LocationStrategy.historyGo()`。

### 我应该选择哪一个？

我们建议在需要添加非线性路由之前，尽可能保持你的应用程序简单。非线性路由非常强大，但它也给移动应用增加了相当大的复杂性。

非线性路由的两个最常见的用途是标签和嵌套的 `ion-router-outlet`。我们建议仅在你的应用程序满足标签或嵌套路由器出口的使用场景时才使用非线性路由。

有关标签的更多信息，请参阅[使用标签](#使用标签)。

有关嵌套路由器出口的更多信息，请参阅[嵌套路由](#嵌套路由)。

## 共享 URL 与嵌套路由

设置路由时一个常见的困惑点是决定使用共享 URL 还是嵌套路由。本指南的这一部分将解释两者，并帮助你决定使用哪一个。

### 共享 URL

共享 URL 是一种路由配置，其中路由具有共同的 URL 片段。以下是共享 URL 配置的示例：

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

上述路由被认为是“共享的”，因为它们重用了 URL 的 `dashboard` 片段。

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

上述路由是嵌套的，因为它们位于父路由的 `children` 数组中。请注意，父路由渲染了 `DashboardRouterOutlet` 组件。当你嵌套路由时，你需要渲染另一个 `ion-router-outlet` 实例。

### 我应该选择哪一个？

当你想要从页面 A 转换到页面 B，同时保留 URL 中两个页面之间的关系时，共享 URL 非常有用。在我们之前的示例中，`/dashboard` 页面上的按钮可以转换到 `/dashboard/stats` 页面。这两个页面之间的关系得以保留，原因在于 a) 页面转换和 b) URL。

当你想要在出口 A 中渲染内容，同时在嵌套的出口 B 中渲染子内容时，应该使用嵌套路由。你最常遇到的使用场景是标签。当你加载一个 Ionic 标签启动应用时，你会看到 `ion-tab-bar` 和 `ion-tabs` 组件在第一个 `ion-router-outlet` 中渲染。`ion-tabs` 组件渲染另一个 `ion-router-outlet`，该出口负责渲染每个标签的内容。

在移动应用中，嵌套路由有意义的场景非常少。如果有疑问，请使用共享 URL 路由配置。我们强烈告诫不要在标签以外的上下文中使用嵌套路由，因为它会迅速使你的应用导航变得混乱。

## 使用标签

使用标签时，Angular 路由器为 Ionic 提供了知道应该加载哪些组件的机制，但繁重的工作实际上是由标签组件完成的。让我们看一个简单的例子。

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

这里我们加载了一个名为 "tabs" 的路径。在这个例子中，我们称该路径为 "tabs"，但路径的名称是可以更改的。你可以根据你的应用随意命名。在该路由对象中，我们也可以定义一个子路由。在这个例子中，顶层子路由 "tab1" 充当我们的“出口”，并且可以加载额外的子路由。在这个例子中，我们有一个单独的子-子路由，它只是加载一个新组件。标签的标记如下：

```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab1">
      <ion-icon name="flash"></ion-icon>
      <ion-label>标签一</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

如果你以前使用 Ionic 构建过应用，这应该会感觉很熟悉。我们创建一个 `ion-tabs` 组件，并提供一个 `ion-tab-bar`。`ion-tab-bar` 提供了一个 `ion-tab-button`，带有一个 `tab` 属性，该属性与路由器配置中的标签“出口”相关联。请注意，最新版本的 `@ionic/angular` 不再需要 `<ion-tab>`，而是允许开发者完全自定义标签栏，并且单一事实来源位于路由器配置中。

### Ionic 中的标签如何工作

Ionic 中的每个标签都被视为一个独立的导航堆栈。这意味着如果你的应用程序中有三个标签，每个标签都有自己的导航堆栈。在每个堆栈中，你可以向前导航（推入视图）和向后导航（弹出视图）。

理解这个行为很重要，因为它与在其他基于 Web 的 UI 库中发现的大多数标签实现不同。其他库通常将标签作为一个单一的历史堆栈来管理。

由于 Ionic 专注于帮助开发者构建移动应用，Ionic 中的标签被设计为尽可能匹配原生移动标签。因此，Ionic 标签中的某些行为可能与你之前在其他 UI 库中看到的标签实现不同。请继续阅读以了解更多关于这些差异的信息。

### 标签内的子路由

当向标签添加额外路由时，你应该将它们编写为兄弟路由，并将父标签作为路径前缀。下面的示例将 `/tabs/tab1/view` 路由定义为 `/tabs/tab1` 路由的兄弟路由。由于这个新路由有 `tab1` 前缀，它将在 `Tabs` 组件内部渲染，并且标签 1 仍然会在 `ion-tab-bar` 中被选中。

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

由于每个标签都是自己的导航堆栈，务必注意这些导航堆栈永远不应该相互交互。这意味着标签 1 中绝不应该有一个按钮将用户路由到标签 2。换句话说，标签只能由用户点击标签栏中的标签按钮来更改。

实践中一个很好的例子是 iOS App Store 和 Google Play Store 移动应用程序。这两个应用都提供了标签式界面，但两者都从未将用户跨标签路由。例如，iOS App Store 应用中的“游戏”标签从不将用户引导至“搜索”标签，反之亦然。

让我们看一下使用标签时容易犯的几个常见错误。

**多个标签引用的设置标签**

一种常见的做法是将设置视图创建为自己的标签。如果开发者需要呈现多个嵌套的设置菜单，这很好。但是，其他标签不应该试图路由到设置标签。正如我们上面提到的，设置标签应该被激活的唯一方式是用户点击相应的标签按钮。

如果你发现你的标签需要引用设置标签，我们建议使用 `ion-modal` 将设置视图设为模态框。这是在 iOS App Store 应用中发现的一种做法。通过这种方法，任何标签都可以呈现模态框，而不会破坏每个标签作为自己堆栈的移动标签模式。

下面的例子展示了 iOS App Store 应用如何处理从多个标签呈现“账户”视图。通过在模态框中呈现“账户”视图，该应用可以在移动标签最佳实践中运作，以在多个标签中显示相同的视图。

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

另一种常见的做法是在多个标签中呈现相同的视图。开发者经常尝试通过将视图包含在单个标签中，然后让其他标签路由到该标签来实现这一点。正如我们上面提到的，这破坏了移动标签模式，应该避免。

相反，我们建议在每个标签中设置引用相同组件的路由。这是 Spotify 等流行应用中的做法。例如，你可以从“主页”、“搜索”和“你的资料库”标签访问专辑或播客。当访问专辑或播客时，用户停留在该标签内。应用通过为每个标签创建路由并在代码库中共享一个公共组件来实现这一点。

下面的例子展示了 Spotify 应用如何复用相同的专辑组件以在多个标签中显示内容。注意每个截图显示的是同一个专辑，但来自不同的标签。

|                      主页标签                      |                      搜索标签                      |
| :-------------------------------------------------: | :---------------------------------------------------: |
| <img src={useBaseUrl('img/usage/tabs-home.jpg')} /> | <img src={useBaseUrl('img/usage/tabs-search.jpg')} /> |
