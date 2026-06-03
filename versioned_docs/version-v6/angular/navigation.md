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

Angular Router 是 Angular 应用中最重要的库之一。没有它，应用将是单视图/单上下文应用，或者无法在浏览器重新加载时保持其导航状态。有了 Angular Router，我们可以创建丰富的、可链接的且具有丰富动画效果的应用（当然，在与 Ionic 搭配使用时）。让我们来看看 Angular Router 的基础知识以及如何为 Ionic 应用配置它。

## 简单的路由

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

我们这里的最简单分解是路径/组件查找。当应用加载时，路由器通过读取用户试图加载的 URL 开始工作。在我们的示例中，我们的路由查找 `''`，这实际上就是我们的索引路由。所以对此，我们加载 `LoginComponent`。相当直接。这种将路径与组件匹配的模式适用于路由配置中的每个条目。但是，如果我们想在初始加载时加载一个不同的路径呢？

## 处理重定向

为此，我们可以使用路由重定向。重定向的工作方式与典型的路由对象相同，但包含一些不同的键。

```tsx
[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
];
```

在我们的重定向中，我们查找应用的索引路径。然后如果我们加载该路径，我们会重定向到 `login` 路由。最后的 `pathMatch` 键是必需的，用来告诉路由器应该如何匹配路径。

由于我们使用 `full`，我们告诉路由器应该比较完整路径，即使它最终是像 `/route1/route2/route3` 这样的路径。这意味着如果我们有：

```tsx
{ path: '/route1/route2/route3', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
```

并加载 `/route1/route2/route3`，我们将被重定向。但如果我们加载了 `/route1/route2/route4`，则不会被重定向，因为路径不完全匹配。

或者，如果我们使用：

```tsx
{ path: '/route1/route2', redirectTo: 'login', pathMatch: 'prefix' },
{ path: 'login', component: LoginComponent },
```

那么加载 `/route1/route2/route3` 和 `/route1/route2/route4` 都会被重定向。这是因为 `pathMatch: 'prefix'` 只会匹配路径的一部分。

## 导航到不同的路由

讨论路由固然很好，但实际如何导航到这些路由呢？为此，我们可以使用 `routerLink` 指令。让我们回顾一下之前的简单路由设置：

```ts
RouterModule.forRoot([
  { path: '', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
]);
```

现在在 `LoginComponent` 中，我们可以使用以下 HTML 导航到详情路由。

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

这里重要的部分是 `ion-button` 和 `routerLink` 指令。RouterLink 的工作方式类似于典型的 `href`，但不是将 URL 构建为字符串，而是可以构建为数组，从而提供更复杂的路径。

我们也可以通过使用 router API 在应用中进行编程式导航。

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

Angular Router 有一个 [LocationStrategy.historyGo](https://angular.io/api/common/LocationStrategy#historyGo) 方法，允许开发者在应用历史记录中向前或向后移动。让我们看一个示例。

假设你有以下应用历史记录：

`/pageA` --> `/pageB` --> `/pageC`

如果你在 `/pageC` 上调用 `LocationStrategy.historyGo(-2)`，你将被带回到 `/pageA`。如果你随后调用 `LocationStrategy.historyGo(2)`，你将被带到 `/pageC`。

`LocationStrategy.historyGo()` 的一个关键特性是它期望你的应用历史记录是线性的。这意味着 `LocationStrategy.historyGo()` 不应在使用非线性路由的应用中使用。有关更多信息，请参阅[线性路由与非线性路由](#线性路由与非线性路由)。

## 懒加载路由

目前配置路由的方式使得它们被包含在与根 app.module 相同的代码块中，这并不理想。相反，路由器有一种设置可以将组件隔离到它们自己的代码块中。

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

虽然类似，但 `loadChildren` 属性是一种通过使用原生 import 而不是直接引用组件来引用模块的方式。不过要做到这一点，我们需要为每个组件创建模块。

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

这里，我们有一个典型的 Angular 模块设置，以及一个 RouterModule 导入，但我们现在使用 `forChild` 并在该设置中声明组件。通过这种设置，当我们运行构建时，我们将为应用组件、登录组件和详情组件生成独立的代码块。

## 在线示例

如果你想亲手尝试上述概念和代码，请查看我们在 StackBlitz 上的[在线示例](https://stackblitz.com/edit/ionic-angular-routing?file=src/app/app-routing.module.ts)。

## 线性路由与非线性路由

### 线性路由

如果你曾构建过使用路由的 Web 应用，那么你可能之前使用过线性路由。线性路由意味着你可以通过推入和弹出页面在应用历史记录中向前或向后移动。

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

当我们按下返回按钮时，我们沿着相同的路由路径反向进行。线性路由有助于实现简单且可预测的路由行为。这也意味着我们可以使用 Angular Router 的 API，如 [LocationStrategy.historyGo()](#使用-locationstrategyhistorygo-导航)。

线性路由的缺点是不支持复杂的用户体验，如标签视图。这就是非线性路由发挥作用的地方。

### 非线性路由

非线性路由是许多学习使用 Ionic 构建移动应用的 Web 开发者可能不熟悉的概念。

非线性路由意味着用户应该返回的视图不一定是之前屏幕上显示的视图。

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

在上面的示例中，我们从 `Originals` 标签开始。点击卡片会将我们带到 `Originals` 标签内的 `Ted Lasso` 视图。

从这里，我们切换到 `Search` 标签。然后，我们再次点击 `Originals` 标签，被带回到 `Ted Lasso` 视图。此时，我们开始使用非线性路由。

为什么这是非线性路由？我们之前所在的视图是 `Search` 视图。然而，在 `Ted Lasso` 视图上按下返回按钮应该将我们带回到根 `Originals` 视图。这是因为移动应用中的每个标签被视为其自己的堆栈。[使用标签](#使用标签)部分会更详细地讨论这一点。

如果在 `Ted Lasso` 视图上简单地调用 `LocationStrategy.historyGo(-1)`，我们会被带回到 `Search` 视图，这是不正确的。

非线性路由可以实现线性路由无法处理的复杂用户流程。但是，某些线性路由 API（如 `LocationStrategy.historyGo()`）无法在此非线性环境中使用。这意味着在使用标签或嵌套出口时不应使用 `LocationStrategy.historyGo()`。

### 应该选择哪种？

我们建议在需要添加非线性路由之前，尽可能保持应用的简单性。非线性路由非常强大，但它也会给移动应用带来相当大的复杂性。

非线性路由最常见的两种用途是标签和嵌套的 `ion-router-outlet`。我们建议仅在应用符合标签或嵌套路由器出口的使用场景时才使用非线性路由。

有关标签的更多信息，请参阅[使用标签](#使用标签)。

有关嵌套路由器出口的更多信息，请参阅[嵌套路由](#嵌套路由)。

## 共享 URL 与嵌套路由

设置路由时，一个常见的困惑点是在共享 URL 和嵌套路由之间做选择。本部分将解释两者并帮助你决定使用哪一个。

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

上述路由被认为是"共享"的，因为它们重用了 URL 中的 `dashboard` 片段。

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

上述路由是嵌套的，因为它们位于父路由的 `children` 数组中。注意父路由渲染了 `DashboardRouterOutlet` 组件。当你嵌套路由时，需要渲染另一个 `ion-router-outlet` 实例。

### 应该选择哪种？

共享 URL 适用于你想从页面 A 过渡到页面 B，同时保持两个页面在 URL 中的关系。在我们之前的示例中，`/dashboard` 页面上的按钮可以过渡到 `/dashboard/stats` 页面。两个页面之间的关系通过 a) 页面过渡和 b) URL 得到保持。

嵌套路由应在你想在出口 A 中渲染内容的同时在嵌套出口 B 中渲染子内容时使用。你最常遇到的使用场景是标签。当你加载一个 Ionic 标签启动应用时，你会看到 `ion-tab-bar` 和 `ion-tabs` 组件渲染在第一个 `ion-router-outlet` 中。`ion-tabs` 组件渲染了另一个 `ion-router-outlet`，负责渲染每个标签的内容。

在移动应用中，嵌套路由有意义的场景非常少。如果有疑问，请使用共享 URL 路由配置。我们强烈建议不要在除标签之外的场景中使用嵌套路由，因为它可能会迅速让你的应用导航变得混乱。

## 使用标签

对于标签，Angular Router 为 Ionic 提供了确定应加载哪些组件的机制，但繁重的工作实际上由标签组件完成。让我们看一个简单的示例。

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

这里我们加载了一个"tabs"路径。在这个示例中，我们称路径为"tabs"，但路径的名称可以更改。它们可以被称为适合你应用的任何名称。在该路由对象中，我们还可以定义一个子路由。在这个示例中，顶层子路由"tab1"充当我们的"出口"，并且可以加载额外的子路由。在这个示例中，我们有一个子子路由，它只是加载一个新组件。标签的标记如下：

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

如果你之前使用 Ionic 构建过应用，这应该会感觉很熟悉。我们创建一个 `ion-tabs` 组件，并提供一个 `ion-tab-bar`。`ion-tab-bar` 提供了一个带有 `tab` 属性的 `ion-tab-button`，该属性与路由配置中的标签"出口"相关联。请注意，最新版本的 `@ionic/angular` 不再需要 `<ion-tab>`，而是允许开发者完全自定义标签栏，且单一数据源存在于路由配置中。

### Ionic 中标签的工作方式

Ionic 中的每个标签被视为独立的导航堆栈。这意味着如果你的应用中有三个标签，每个标签都有自己的导航堆栈。在每个堆栈内，你可以向前导航（推入视图）和向后导航（弹出视图）。

这个行为很重要，因为它与其他基于 Web 的 UI 库中的大多数标签实现不同。其他库通常将标签管理为单个历史记录堆栈。

由于 Ionic 专注于帮助开发者构建移动应用，Ionic 中的标签设计为尽可能接近原生移动标签。因此，Ionic 标签中的某些行为可能与你见过的其他 UI 库中的标签实现有所不同。继续阅读以了解更多关于这些差异的信息。

### 标签内的子路由

在向标签添加额外路由时，应将它们编写为以父标签为路径前缀的兄弟路由。下面的示例将 `/tabs/tab1/view` 路由定义为 `/tabs/tab1` 路由的兄弟路由。由于这个新路由具有 `tab1` 前缀，它将在 `Tabs` 组件内渲染，并且 Tab 1 在 `ion-tab-bar` 中仍将被选中。

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

### 在标签间切换

由于每个标签都是自己的导航堆栈，需要注意的是，这些导航堆栈之间永远不应该交互。这意味着在 Tab 1 中不应该有将用户路由到 Tab 2 的按钮。换句话说，标签应该只通过用户点击标签栏中的标签按钮来切换。

实践中一个很好的示例是 iOS App Store 和 Google Play Store 移动应用。这些应用都提供了标签界面，但两者都不会将用户跨标签路由。例如，iOS App Store 应用中的"Games"标签永远不会将用户导航到"Search"标签，反之亦然。

让我们看看使用标签时常见的一些错误。

**多个标签引用的设置标签**

一种常见做法是将设置视图创建为自己的标签。如果开发者需要展示多个嵌套的设置菜单，这很好。但是，其他标签不应尝试路由到设置标签。正如我们上面提到的，设置标签应该被激活的唯一方式是用户点击相应的标签按钮。

如果你发现你的标签需要引用设置标签，我们建议使用 `ion-modal` 将设置视图设为模态框。这是 iOS App Store 应用中的常见做法。通过这种方法，任何标签都可以呈现模态框，而不会破坏每个标签作为独立堆栈的移动标签模式。

下面的示例展示了 iOS App Store 应用如何处理从多个标签呈现"Account"视图。通过在模态框中呈现"Account"视图，应用可以在移动标签最佳实践范围内，在多个标签中显示相同的视图。

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

另一种常见做法是在多个标签中呈现相同的视图。开发者通常试图通过将视图包含在单个标签中，然后让其他标签路由到该标签来实现这一点。正如我们上面提到的，这破坏了移动标签模式，应该避免。

相反，我们建议在每个标签中创建引用相同组件的路由。这是 Spotify 等流行应用中的做法。例如，你可以从"Home"、"Search"和"Your Library"标签访问专辑或播客。在访问专辑或播客时，用户停留在该标签内。应用通过在每个标签中创建路由并在代码库中共享公共组件来实现这一点。

下面的示例展示了 Spotify 应用如何重用相同的专辑组件在多个标签中显示内容。注意每个截图显示相同的专辑，但来自不同的标签。

|                       Home 标签                       |                       Search 标签                       |
| :-------------------------------------------------: | :---------------------------------------------------: |
| <img src={useBaseUrl('img/usage/tabs-home.jpg')} /> | <img src={useBaseUrl('img/usage/tabs-search.jpg')} /> |
