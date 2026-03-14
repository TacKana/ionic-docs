---
title: Angular 导航
sidebar_label: 导航/路由
---

<head>
  <title>Angular 导航：路由与重定向在 Angular 应用中的工作方式</title>
  <meta
    name="description"
    content="我们的 Angular 导航指南涵盖了在使用 Ionic 和 Angular 构建的应用中路由的工作原理。阅读以了解更多关于 Angular 中的基本路由和重定向。"
  />
</head>

本指南涵盖了在使用 Ionic 和 Angular 构建的应用中路由的工作原理。

Angular 路由器是 Angular 应用中最重要的库之一。没有它，应用将只能是单视图/单上下文应用，或者无法在浏览器刷新时维持其导航状态。有了 Angular 路由器，我们可以创建丰富的、可链接的、并具有丰富动画效果的应用（当然，是与 Ionic 配合使用时）。让我们看看 Angular 路由器的基础知识以及如何为 Ionic 应用配置它。

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

这里最简单的分解是路径/组件的查找。当我们的应用加载时，路由器通过读取用户试图加载的 URL 来启动。在我们的示例中，我们的路由查找 `''`，这本质上就是我们的索引路由。因此，我们会加载 `LoginComponent`。这相当直接。这种将路径与组件匹配的模式会延续到我们路由器配置中的每一个条目。但是，如果我们想在初始加载时加载一个不同的路径呢？

## 处理重定向

为此，我们可以使用路由器重定向。重定向的工作方式与典型的路由对象相同，但只是包含了一些不同的键。

```tsx
[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
];
```

在我们的重定向中，我们查找应用的索引路径。然后，如果我们加载该路径，我们会重定向到 `login` 路由。最后一个键 `pathMatch` 是必需的，用来告诉路由器应该如何查找路径。

由于我们使用了 `full`，我们是在告诉路由器我们应该比较完整路径，即使它最终是像 `/route1/route2/route3` 这样的路径。这意味着如果我们有：

```tsx
{ path: '/route1/route2/route3', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
```

并且加载 `/route1/route2/route3`，我们会重定向。但是如果我们加载了 `/route1/route2/route4`，我们不会重定向，因为路径不完全匹配。

或者，如果我们使用：

```tsx
{ path: '/route1/route2', redirectTo: 'login', pathMatch: 'prefix' },
{ path: 'login', component: LoginComponent },
```

那么加载 `/route1/route2/route3` 和 `/route1/route2/route4` 时，我们都会被重定向。这是因为 `pathMatch: 'prefix'` 只会匹配路径的一部分。

## 导航到不同的路由

讨论路由固然很好，但是如何实际导航到这些路由呢？为此，我们可以使用 `routerLink` 指令。让我们回到之前简单的路由器设置：

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

这里重要的部分是 `ion-button` 和 `routerLink` 指令。RouterLink 的工作原理类似于典型的 `href`，但不是将 URL 构建为字符串，而是可以构建为一个数组，这可以提供更复杂的路径。

我们还可以通过使用路由器 API 在应用中以编程方式进行导航。

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

这两种选项都提供了相同的导航机制，只是适用于不同的用例。

### 使用 LocationStrategy.historyGo 导航

Angular 路由器有一个 [LocationStrategy.historyGo](https://angular.io/api/common/LocationStrategy#historyGo) 方法，允许开发者在应用历史中前进或后退。让我们看一个例子。

假设你有以下应用历史记录：

`/pageA` --> `/pageB` --> `/pageC`

如果你在 `/pageC` 调用 `LocationStrategy.historyGo(-2)`，你会被带回 `/pageA`。然后如果你调用 `LocationStrategy.historyGo(2)`，你会被带到 `/pageC`。

`LocationStrategy.historyGo()` 的一个关键特性是它期望你的应用历史是线性的。这意味着 `LocationStrategy.historyGo()` **不应该**在使用非线性路由的应用中使用。更多信息请参见 [线性路由与非线性路由](#线性路由与非线性路由)。

## 懒加载路由

目前我们设置路由的方式使得它们与根 app.module 包含在同一个块中，这并不理想。相反，路由器有一种设置允许将组件隔离到它们自己的块中。

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

虽然相似，但 `loadChildren` 属性是一种通过使用原生 `import` 而不是直接引用组件来引用模块的方式。不过，要做到这一点，我们需要为每个组件创建一个模块。

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

这里，我们有一个典型的 Angular 模块设置，以及一个 RouterModule 导入，但我们现在使用的是 `forChild` 并在该设置中声明组件。通过这种设置，当我们运行构建时，我们将为应用组件、登录组件和详情组件生成单独的块。

## 在线示例

如果你希望亲手实践上面描述的概念和代码，请查看我们在 StackBlitz 上的关于上述主题的[在线示例](https://stackblitz.com/edit/ionic-angular-routing?file=src/app/app-routing.module.ts)。

## 线性路由与非线性路由

### 线性路由

如果你曾经构建过使用路由的 Web 应用，你可能以前使用过线性路由。线性路由意味着你可以通过推入和弹出页面在应用历史中前进或后退。

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

当我们按下返回按钮时，我们沿着相同的路由路径返回，只是方向相反。线性路由有助于实现简单且可预测的路由行为。这也意味着我们可以使用 Angular 路由器 API，例如 [LocationStrategy.historyGo()](#使用-locationstrategyhistorygo-导航)。

线性路由的缺点是不允许复杂的用户体验，例如标签视图。这时非线性路由就派上用场了。

### 非线性路由

对于许多正在学习使用 Ionic 构建移动应用的 Web 开发者来说，非线性路由可能是一个新概念。

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

在上面的示例中，我们从 `原创` 标签开始。点击一张卡片会将我们带到 `原创` 标签内的 `泰德·拉索` 视图。

从这里，我们切换到 `搜索` 标签。然后，我们再次点击 `原创` 标签，并被带回到 `泰德·拉索` 视图。此时，我们已经开始使用非线性路由了。

为什么这是非线性路由？我们之前所在的视图是 `搜索` 视图。然而，在 `泰德·拉索` 视图按下返回按钮应该将我们带回到根 `原创` 视图。这是因为移动应用中的每个标签都被视为其自己的堆栈。[使用标签](#使用标签) 部分会更详细地讨论这一点。

如果点击返回按钮只是从 `泰德·拉索` 视图调用 `LocationStrategy.historyGo(-1)`，我们会回到 `搜索` 视图，这是不正确的。

非线性路由允许实现线性路由无法处理的复杂用户流程。然而，某些线性路由 API，如 `LocationStrategy.historyGo()`，不能在这种非线性环境中使用。这意味着在使用标签或嵌套 outlet 时，**不应该**使用 `LocationStrategy.historyGo()`。

### 我应该选择哪一个？

我们建议在你的应用需要添加非线性路由之前，尽量保持应用简单。非线性路由非常强大，但它也会给移动应用增加相当多的复杂性。

非线性路由最常见的两种用途是使用标签和嵌套的 `ion-router-outlet`。我们建议仅当你的应用满足标签或嵌套路由器 outlet 的用例时，才使用非线性路由。

有关标签的更多信息，请参阅 [使用标签](#使用标签)。

有关嵌套路由器 outlet 的更多信息，请参阅 [嵌套路由](#嵌套路由)。

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

上述路由被认为是"共享的"，因为它们重用了 URL 的 `dashboard` 片段。

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

当你希望从页面 A 过渡到页面 B，同时保留 URL 中两个页面之间的关系时，共享 URL 非常合适。在我们之前的示例中，`/dashboard` 页面上的一个按钮可以过渡到 `/dashboard/stats` 页面。两个页面之间的关系得以保留，原因在于 a) 页面过渡 和 b) URL。

嵌套路由应该用于当你想在 outlet A 中渲染内容，同时在嵌套的 outlet B 内部渲染子内容时。你最常遇到的用例是标签。当你加载一个 Ionic 标签启动应用时，你会看到 `ion-tab-bar` 和 `ion-tabs` 组件在第一个 `ion-router-outlet` 中渲染。`ion-tabs` 组件会渲染另一个 `ion-router-outlet`，该 outlet 负责渲染每个标签的内容。

在移动应用中，嵌套路由有意义的用例非常少。如果有疑问，请使用共享 URL 路由配置。我们强烈建议不要在标签以外的上下文中使用嵌套路由，因为它会迅速使应用导航变得混乱。

## 使用标签

对于标签，Angular 路由器为 Ionic 提供了知道应该加载哪些组件的机制，但实际的重任是由标签组件完成的。让我们看一个简单的示例。

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

这里我们加载了一个 "tabs" 路径。在这个例子中，我们称路径为 "tabs"，但路径的名称可以更改。它们可以根据你的应用需求任意命名。在该路由对象中，我们还可以定义一个子路由。在这个例子中，顶级子路由 "tab1" 充当我们的"出口"，并且可以加载额外的子路由。对于这个例子，我们有一个单独的子子路由，它只是加载一个新的组件。标签的标记如下：

```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab1">
      <ion-icon name="flash"></ion-icon>
      <ion-label>标签 一</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

如果你之前用 Ionic 构建过应用，这应该很熟悉。我们创建一个 `ion-tabs` 组件，并提供一个 `ion-tab-bar`。`ion-tab-bar` 提供了一个带有 `tab` 属性的 `ion-tab-button`，该属性与路由器配置中的标签"出口"相关联。请注意，最新版本的 `@ionic/angular` 不再需要 `<ion-tab>`，而是允许开发者完全自定义标签栏，而单一事实来源在于路由器配置中。

### Ionic 中标签的工作原理

Ionic 中的每个标签都被视为一个独立的导航堆栈。这意味着如果你的应用中有三个标签，每个标签都有自己的导航堆栈。在每个堆栈中，你可以向前导航（推入视图）和向后导航（弹出视图）。

注意这种行为很重要，因为它不同于在其他基于 Web 的 UI 库中发现的大多数标签实现。其他库通常将标签作为一个单一的历史堆栈来管理。

由于 Ionic 专注于帮助开发者构建移动应用，Ionic 中的标签旨在尽可能接近原生移动标签。因此，Ionic 标签中的某些行为可能与你见过的其他 UI 库中的标签实现不同。继续阅读以了解更多关于这些差异的信息。

### 标签内的子路由

当向标签添加额外的路由时，你应该将它们写成兄弟路由，并以父标签作为路径前缀。下面的示例将 `/tabs/tab1/view` 路由定义为 `/tabs/tab1` 路由的兄弟路由。由于这个新路由有 `tab1` 前缀，它将在 `Tabs` 组件内部渲染，并且标签 1 仍将在 `ion-tab-bar` 中被选中。

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

由于每个标签都是自己的导航堆栈，重要的是要注意这些导航堆栈绝不应该交互。这意味着标签 1 中不应该有将用户路由到标签 2 的按钮。换句话说，标签只能通过用户在标签栏中点击标签按钮来更改。

实践中一个好的例子是 iOS App Store 和 Google Play Store 移动应用。这两个应用都提供了标签式界面，但两者都不会将用户跨标签路由。例如，iOS App Store 应用中的"游戏"标签永远不会将用户导向"搜索"标签，反之亦然。

让我们看看使用标签时常见的一些错误。

**多个标签引用的设置标签**

一种常见的做法是将设置视图创建为自己的标签。如果开发者需要呈现多个嵌套的设置菜单，这很好。然而，其他标签绝不应该尝试路由到设置标签。正如我们上面提到的，激活设置标签的唯一方式应该是用户点击相应的标签按钮。

如果你发现你的标签需要引用设置标签，我们建议通过使用 `ion-modal` 将设置视图设为模态框。这是 iOS App Store 应用中的一种做法。通过这种方法，任何标签都可以呈现该模态框，而不会破坏每个标签都是自己堆栈的移动标签模式。

下面的示例展示了 iOS App Store 应用如何处理从多个标签呈现"账户"视图。通过在模态框中呈现"账户"视图，应用可以在移动标签最佳实践中工作，以在多个标签中显示相同的视图。

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

另一种常见的做法是在多个标签中呈现相同的视图。开发者通常试图通过让视图包含在单个标签中，而其他标签路由到该标签来实现这一点。正如我们上面提到的，这打破了移动标签模式，应该避免。

相反，我们建议在每个标签中都有引用相同组件的路由。这是 Spotify 等流行应用中的做法。例如，你可以从"主页"、"搜索"和"你的资料库"标签访问专辑或播客。当访问专辑或播客时，用户停留在这个标签内。应用通过在每个标签中创建路由并在代码库中共享一个公共组件来实现这一点。

下面的示例展示了 Spotify 应用如何重用相同的专辑组件在多个标签中显示内容。注意每个截图都显示了相同的专辑，但来自不同的标签。

|                      主页 标签                       |                      搜索 标签                       |
| :-------------------------------------------------: | :---------------------------------------------------: |
| <img src={useBaseUrl('img/usage/tabs-home.jpg')} /> | <img src={useBaseUrl('img/usage/tabs-search.jpg')} /> |