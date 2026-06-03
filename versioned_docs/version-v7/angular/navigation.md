---
title: Angular 导航
sidebar_label: 导航/路由
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<head>
  <title>Angular 导航：路由和重定向在 Angular 应用中的工作方式</title>
  <meta
    name="description"
    content="我们的 Angular 导航指南介绍了在使用 Ionic 和 Angular 构建的应用中路由的工作方式。阅读了解 Angular 中基本路由和重定向的更多信息。"
  />
</head>

本指南介绍了在使用 Ionic 和 Angular 构建的应用中路由的工作方式。

Angular Router 是 Angular 应用中最重要的库之一。没有它，应用将是单视图/单上下文的应用，或者无法在浏览器重新加载时保持导航状态。使用 Angular Router，我们可以创建丰富的、可链接且具有丰富动画效果的应用（当然是与 Ionic 配合使用时）。让我们看看 Angular Router 的基础知识以及如何为 Ionic 应用配置它。

## 简单的路由

对于大多数应用，某种形式的路由通常是必需的。最基本的配置如下所示：

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

这里最简单的分解是路径/组件查找。当我们的应用加载时，路由器通过读取用户尝试加载的 URL 来启动。在我们的示例中，路由查找的是 `''`，这基本上是我们的索引路由。因此，我们会加载 `LoginComponent`。相当直接。这种将路径与组件匹配的模式会继续应用于路由配置中的每个条目。但是，如果我们想在初始加载时加载一个不同的路径呢？

## 处理重定向

为此我们可以使用路由重定向。重定向的工作方式与典型的路由对象相同，但包含一些不同的键。

```tsx
[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
];
```

在我们的重定向中，我们查找应用的索引路径。然后如果我们加载该路径，就重定向到 `login` 路由。最后的 `pathMatch` 键是必需的，用于告诉路由器应该如何查找路径。

由于我们使用 `full`，我们告诉路由器应该比较完整路径，即使它最终是像 `/route1/route2/route3` 这样的路径。意思是如果我们有：

```tsx
{ path: '/route1/route2/route3', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
```

并加载 `/route1/route2/route3`，我们会重定向。但如果我们加载 `/route1/route2/route4`，则不会重定向，因为路径不完全匹配。

或者，如果我们使用：

```tsx
{ path: '/route1/route2', redirectTo: 'login', pathMatch: 'prefix' },
{ path: 'login', component: LoginComponent },
```

那么加载 `/route1/route2/route3` 和 `/route1/route2/route4` 时，我们都会被重定向。这是因为 `pathMatch: 'prefix'` 只会匹配部分路径。

## 导航到不同的路由

讨论路由是好的，但如何实际导航到这些路由呢？为此，我们可以使用 `routerLink` 指令。让我们回过头来使用之前简单的路由器设置：

```ts
RouterModule.forRoot([
  { path: '', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
]);
```

现在从 `LoginComponent`，我们可以使用以下 HTML 导航到详情路由。

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

这里重要的部分是 `ion-button` 和 `routerLink` 指令。RouterLink 的工作方式类似于典型的 `href`，但它可以构建为数组而不是字符串，从而提供更复杂的路径。

我们还可以使用路由器 API 以编程方式在应用中进行导航。

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

两种选项都提供相同的导航机制，只是适用于不同的用例。

### 使用 LocationStrategy.historyGo 导航

Angular Router 有一个 [LocationStrategy.historyGo](https://angular.io/api/common/LocationStrategy#historyGo) 方法，允许开发者在应用历史中向前或向后移动。让我们看一个示例。

假设您有以下应用历史记录：

`/pageA` --> `/pageB` --> `/pageC`

如果您在 `/pageC` 上调用 `LocationStrategy.historyGo(-2)`，您将被带回到 `/pageA`。如果您随后调用 `LocationStrategy.historyGo(2)`，您将被带到 `/pageC`。

`LocationStrategy.historyGo()` 的一个关键特性是它期望您的应用历史是线性的。这意味着 `LocationStrategy.historyGo()` 不应用于使用非线性路由的应用。有关更多信息，请参阅[线性路由与非线性路由](#线性路由与非线性路由)。

## 延迟加载路由

目前我们设置路由的方式使它们被包含在与根 app.module 相同的块中，这并不理想。相反，路由器有一种设置可以将组件隔离到它们自己的块中。

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

虽然类似，但 `loadChildren` 属性是一种通过使用原生 import 而不是直接引用组件来引用模块的方式。但要做到这一点，我们需要为每个组件创建一个模块。

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

这里，我们有一个典型的 Angular 模块设置，以及一个 RouterModule 导入，但现在我们使用 `forChild` 并在该设置中声明组件。通过这种设置，当我们运行构建时，将为应用组件、登录组件和详情组件生成单独的块。

## 独立组件（Standalone Components）

:::caution 实验性 API

独立组件是 Angular 14.x 中引入的实验性 API，在 Ionic 6.3 及更高版本中可用。此功能在稳定之前可能会发生变化。

:::

独立组件允许开发者在路由上延迟加载组件，而无需将组件声明到 Angular 模块中。

要在 Ionic Framework 中使用带有路由的独立组件，您必须首先使用 Ionic ^6.3.0。实验性 API 要求开发者为使用独立组件路由的每个路由出口（`ion-router-outlet` 和 `ion-tabs`）分配 `EnvironmentInjector` 实例。

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
<!-- or if you are using ion-tabs -->
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

要开始使用独立组件，请[访问 Angular 的官方文档](https://angular.io/guide/standalone-components)。

## 在线示例

如果您希望动手实践上面描述的概念和代码，请在 StackBlitz 上查看我们关于上述主题的[在线示例](https://stackblitz.com/edit/ionic-angular-routing?file=src/app/app-routing.module.ts)。

## 线性路由与非线性路由

### 线性路由

如果您曾经构建过使用路由的 Web 应用，您可能以前使用过线性路由。线性路由意味着您可以通过推入和弹出页面在应用历史中向前或向后移动。

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

当我们按下返回按钮时，我们沿着相同的路由路径以相反的顺序返回。线性路由有助于实现简单且可预测的路由行为。这也意味着我们可以使用 Angular Router API，例如 [LocationStrategy.historyGo()](#使用-locationstrategyhistorygo-导航)。

线性路由的缺点是不允许复杂的用户体验，例如选项卡视图。这就是非线性路由发挥作用的地方。

### 非线性路由

非线性路由是一个对于许多学习使用 Ionic 构建移动应用的 Web 开发者来说可能陌生的概念。

非线性路由意味着用户应该返回的视图不一定是在屏幕上显示的先前视图。

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

在上面的示例中，我们从 `Originals` 选项卡开始。点击卡片会带我们进入 `Originals` 选项卡内的 `Ted Lasso` 视图。

从这里，我们切换到 `Search` 选项卡。然后，我们再次点击 `Originals` 选项卡，被带回到 `Ted Lasso` 视图。此时，我们已经开始使用非线性路由。

为什么这是非线性路由？我们之前的视图是 `Search` 视图。然而，在 `Ted Lasso` 视图上按返回按钮应该会带我们回到根 `Originals` 视图。这是因为移动应用中的每个选项卡都被视为一个独立的堆栈。[使用选项卡](#使用选项卡)部分会更详细地介绍这一点。

如果在 `Ted Lasso` 视图中简单地调用 `LocationStrategy.historyGo(-1)`，我们会回到 `Search` 视图，这是不正确的。

非线性路由允许实现线性路由无法处理的复杂用户流程。然而，某些线性路由 API（如 `LocationStrategy.historyGo()`）不能在此非线性环境中使用。这意味着在使用选项卡或嵌套出口时不应使用 `LocationStrategy.historyGo()`。

### 应该选择哪一个？

我们建议在需要添加非线性路由之前，尽量保持应用简单。非线性路由非常强大，但它也给移动应用增加了相当的复杂性。

非线性路由最常见的两种用途是选项卡和嵌套的 `ion-router-outlet`。我们建议仅在您的应用满足选项卡或嵌套路由器出口用例时才使用非线性路由。

有关选项卡的更多信息，请参阅[使用选项卡](#使用选项卡)。

有关嵌套路由器出口的更多信息，请参阅[嵌套路由](#嵌套路由)。

## 共享 URL 与嵌套路由

设置路由时一个常见的困惑点是在共享 URL 或嵌套路由之间做选择。本指南的这一部分将解释两者并帮助您决定使用哪一种。

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

上述路由被认为是"共享"的，因为它们重用了 URL 中的 `dashboard` 部分。

### 嵌套路由

嵌套路由是一种路由配置，其中路由作为其他路由的子路由列出。以下是嵌套路由配置的示例：

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

上述路由是嵌套的，因为它们位于父路由的 `children` 数组中。请注意，父路由渲染了 `DashboardRouterOutlet` 组件。当您嵌套路由时，您需要渲染另一个 `ion-router-outlet` 实例。

### 应该选择哪一个？

共享 URL 非常适合在您希望从页面 A 过渡到页面 B 时保持两个页面在 URL 中的关系。在我们之前的示例中，`/dashboard` 页面上的按钮可以过渡到 `/dashboard/stats` 页面。两个页面之间的关系通过 a) 页面过渡和 b) URL 得以保持。

嵌套路由应该在您希望在出口 A 中渲染内容同时在嵌套出口 B 中渲染子内容时使用。您会遇到的最常见用例是选项卡。当您加载选项卡 Ionic 启动器应用时，您会看到 `ion-tab-bar` 和 `ion-tabs` 组件在第一个 `ion-router-outlet` 中渲染。`ion-tabs` 组件渲染了另一个 `ion-router-outlet`，负责渲染每个选项卡的内容。

在移动应用中，嵌套路由有意义的用例非常少。如果有疑问，请使用共享 URL 路由配置。我们强烈建议不要在其他上下文中使用嵌套路由，因为它可能会使应用导航变得混乱。

## 使用选项卡

对于选项卡，Angular Router 为 Ionic 提供了知道应加载哪些组件的机制，但实际的重任是由选项卡组件完成的。让我们看一个简单的示例。

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

这里我们加载了一个名为"tabs"的路径。在这个示例中，我们将路径称为"tabs"，但路径的名称可以更改。它们可以是适合您应用的任何名称。在该路由对象中，我们还可以定义一个子路由。在这个示例中，顶层子路由"tab1"充当我们的"出口"，并且可以加载额外的子路由。在这个示例中，我们有一个子子路由，它只是加载一个新的组件。选项卡的标记如下：

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

如果您以前使用 Ionic 构建过应用，这应该很熟悉。我们创建一个 `ion-tabs` 组件，并提供一个 `ion-tab-bar`。`ion-tab-bar` 提供一个带有 `tab` 属性的 `ion-tab-button`，该属性与路由器配置中的选项卡"出口"相关联。请注意，最新版本的 `@ionic/angular` 不再需要 `<ion-tab>`，而是允许开发者完全自定义标签栏，唯一的数据源位于路由器配置中。

### Ionic 中选项卡的工作方式

Ionic 中的每个选项卡都被视为一个独立的导航堆栈。这意味着如果您的应用中有三个选项卡，每个选项卡都有自己的导航堆栈。在每个堆栈中，您可以向前导航（推入视图）和向后导航（弹出视图）。

这种特性很重要，因为它不同于大多数其他基于 Web 的 UI 库中的选项卡实现。其他库通常将选项卡作为一个历史堆栈来管理。

由于 Ionic 专注于帮助开发者构建移动应用，Ionic 中的选项卡旨在尽可能与原生移动选项卡匹配。因此，Ionic 选项卡中的某些行为可能与其他 UI 库中的选项卡实现不同。继续阅读以了解更多关于这些差异的信息。

### 选项卡中的子路由

向选项卡添加额外路由时，应将它们编写为兄弟路由，以父选项卡作为路径前缀。下面的示例将 `/tabs/tab1/view` 路由定义为 `/tabs/tab1` 路由的兄弟路由。由于这个新路由具有 `tab1` 前缀，它将在 `Tabs` 组件内渲染，并且 Tab 1 在 `ion-tab-bar` 中仍将被选中。

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

### 在选项卡之间切换

由于每个选项卡都是其自己的导航堆栈，需要注意的是这些导航堆栈之间不应互相交互。这意味着在 Tab 1 中不应该有将用户路由到 Tab 2 的按钮。换句话说，选项卡只能由用户点击标签栏中的选项卡按钮来切换。

实践中一个很好的例子是 iOS App Store 和 Google Play Store 移动应用。这些应用都提供选项卡界面，但两者都不会将用户跨选项卡路由。例如，iOS App Store 应用中的"Games"选项卡从不将用户引导到"Search"选项卡，反之亦然。

让我们看看使用选项卡时的一些常见错误。

**多个选项卡引用的设置选项卡**

一种常见的做法是将设置视图创建为单独的选项卡。如果开发者需要呈现多个嵌套的设置菜单，这很好。然而，其他选项卡不应尝试路由到设置选项卡。正如我们上面提到的，设置选项卡只能通过用户点击适当的选项卡按钮来激活。

如果您发现您的选项卡需要引用设置选项卡，我们建议使用 `ion-modal` 将设置视图设为模态框。这是 iOS App Store 应用中的做法。通过这种方法，任何选项卡都可以呈现模态框，而不会破坏每个选项卡是独立堆栈的移动选项卡模式。

下面的示例展示了 iOS App Store 应用如何处理从多个选项卡呈现"Account"视图。通过在模态框中呈现"Account"视图，应用可以在移动选项卡最佳实践范围内在多个选项卡中显示相同的视图。

<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/tabs-account-demo.mp4')}
  controls
></video>

**跨选项卡复用视图**

另一种常见做法是在多个选项卡中呈现相同的视图。开发者通常尝试通过将视图包含在单个选项卡中，然后让其他选项卡路由到该选项卡来实现这一点。正如我们上面提到的，这破坏了移动选项卡模式，应予以避免。

相反，我们建议在每个选项卡中创建引用相同组件的路由。这是 Spotify 等流行应用中的做法。例如，您可以从"Home"、"Search"和"Your Library"选项卡访问专辑或播客。当访问专辑或播客时，用户停留在该选项卡内。应用通过在每个选项卡中创建路由并在代码库中共享公共组件来实现这一点。

下面的示例展示了 Spotify 应用如何重用相同的专辑组件在多个选项卡中显示内容。请注意，每张截图显示的是相同的专辑，但来自不同的选项卡。

|                      Home Tab                       |                      Search Tab                       |
| :-------------------------------------------------: | :---------------------------------------------------: |
| <img src={useBaseUrl('img/usage/tabs-home.jpg')} /> | <img src={useBaseUrl('img/usage/tabs-search.jpg')} /> |
