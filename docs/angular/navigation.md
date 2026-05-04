---
title: Angular 导航
sidebar_label: 导航与路由
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<head>
  <title>Angular 导航：路由与重定向在 Angular 应用中的工作原理</title>
  <meta
    name="description"
    content="本文是 Angular 导航指南，主要介绍在 Ionic + Angular 构建的应用中路由是如何工作的。阅读本文，了解 Angular 中的基础路由和重定向。"
  />
</head>

本指南将介绍在 Ionic 和 Angular 构建的应用中路由是如何工作的。

Angular Router 是 Angular 应用中最重要的库之一。如果没有它，应用将只能停留在单视图或单上下文中，也无法在浏览器刷新时保持导航状态。有了 Angular Router，我们可以创建支持链接跳转和丰富动画（当然，是与 Ionic 配合使用时）的应用。接下来，让我们看看 Angular Router 的基础知识以及如何为 Ionic 应用配置它。

## 基础路由

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

简单来说，这就是一个路径与组件的对应关系。当应用加载时，路由器会通过读取用户尝试访问的 URL 来启动。在示例中，我们查找 `''` 路径，这实际上是应用的索引路由。因此，会加载 `LoginComponent`。这种路径匹配组件的模式适用于路由配置中的每一项。但如果我们想在初始加载时跳转到不同的路径呢？

## 处理重定向

这时我们可以使用路由重定向。重定向的工作方式与典型的路由对象类似，但它包含一些不同的属性。

```tsx
[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
];
```

在这个重定向示例中，我们查找应用的索引路径。如果加载该路径，我们会重定向到 `login` 路由。最后的 `pathMatch` 属性是必需的，用于告诉路由器如何匹配路径。

因为我们使用了 `full`，这意味着告诉路由器要比较完整的路径，即使路径类似于 `/route1/route2/route3` 也是如此。也就是说，如果我们有如下配置：

```tsx
{ path: '/route1/route2/route3', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
```

那么加载 `/route1/route2/route3` 时会触发重定向。但如果加载 `/route1/route2/route4`，则不会重定向，因为路径不完全匹配。

另一种情况，如果我们使用：

```tsx
{ path: '/route1/route2', redirectTo: 'login', pathMatch: 'prefix' },
{ path: 'login', component: LoginComponent },
```

那么加载 `/route1/route2/route3` 和 `/route1/route2/route4` 时都会被重定向。这是因为 `pathMatch: 'prefix'` 只匹配路径的部分内容。

<LegacyAnchor id="navigating-to-different-routes" />

## 导航到不同的路由

谈论路由固然重要，但实际如何进行导航呢？这时可以使用 `routerLink` 指令。让我们回顾一下之前的简单路由设置：

```ts
RouterModule.forRoot([
  { path: '', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
]);
```

现在，在 `LoginComponent` 中，我们可以使用以下 HTML 导航到详情页。

```html
<ion-header>
  <ion-toolbar>
    <ion-title>登录</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-button [routerLink]="['/detail']">进入详情页</ion-button>
</ion-content>
```

这里的关键是 `ion-button` 和 `routerLink` 指令。RouterLink 的工作方式类似于传统的 `href`，但它的路径可以通过数组构建，从而支持更复杂的路径。

我们还可以通过使用 router API 在应用中实现编程式导航。

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

这两种方式提供了相同的导航机制，只是适用于不同的使用场景。

### 使用 LocationStrategy.historyGo 进行导航

Angular Router 提供了一个 [LocationStrategy.historyGo](https://angular.io/api/common/LocationStrategy#historyGo) 方法，允许开发者在应用历史记录中前进或后退。让我们来看一个例子。

假设你有以下应用历史记录：

`/pageA` --> `/pageB` --> `/pageC`

如果在 `/pageC` 调用 `LocationStrategy.historyGo(-2)`，你将回到 `/pageA`。如果之后再调用 `LocationStrategy.historyGo(2)`，你将前进到 `/pageC`。

`LocationStrategy.historyGo()` 的一个重要特性是它期望你的应用历史记录是线性的。这意味着 `LocationStrategy.historyGo()` 不应该用于使用了非线性路由的应用。更多信息请参阅[线性路由与非线性路由](#线性路由与非线性路由)。

<LegacyAnchor id="lazy-loading-routes" />

## 路由懒加载

我们目前设置路由的方式会导致它们与根 app.module 打包在同一个文件中，这并不理想。幸运的是，路由器提供了一种方式，可以将组件隔离到各自的模块中。

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

虽然看起来相似，但这里的 `loadChildren` 属性是通过使用原生的 import 来引用模块，而不是直接引用组件。要实现这一点，我们需要为每个组件创建一个模块。

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
我们省略了一些额外的内容，只包含必要的部分。
:::

这里是一个典型的 Angular 模块设置，同时导入了 RouterModule，但我们现在使用 `forChild` 并在其中声明了组件。通过这种设置，当我们运行构建时，会为应用组件、登录组件和详情组件生成单独的模块。

## 独立组件

独立组件允许开发者在不将组件声明到 Angular 模块的情况下，在路由上实现懒加载组件。

开发者可以使用 Angular 现有的独立组件路由语法：

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
如果你使用了 `routerLink`、`routerDirection` 或 `routerAction`，请确保同时也为 Ionic 组件导入 `IonRouterLink` 指令，或为 `<a>` 元素导入 `IonRouterLinkWithHref` 指令。相关示例可在 [Ionic Angular 构建选项文档](./build-options.md#从模块迁移到独立组件) 中找到。
:::

要开始使用独立组件，请访问 [Angular 官方文档](https://angular.io/guide/standalone-components)。

## 在线示例

如果你想亲身体验上述概念和代码，欢迎查看我们在 StackBlitz 上的[在线示例](https://stackblitz.com/edit/ionic-angular-routing?file=src/app/app-routing.module.ts)。

## 线性路由与非线性路由

### 线性路由

如果你曾经构建过使用路由的 Web 应用，很可能已经使用过线性路由。线性路由意味着你可以通过推入和弹出页面，在应用历史记录中前进或后退。

以下是一个移动应用中线性路由的示例：

<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/linear-routing-demo.mp4')}
  controls
></video>

此示例中的应用历史记录路径如下：

`辅助功能` --> `旁白` --> `语音`

当我们点击返回按钮时，会沿着相同的路由路径反向返回。线性路由的优势在于其简单且可预测的路由行为。这也意味着我们可以使用 Angular Router 的 API，例如 [LocationStrategy.historyGo()](#使用-locationstrategyhistorygo-进行导航)。

线性路由的缺点是无法支持复杂的用户体验，例如标签视图。这时就需要非线性路由。

### 非线性路由

对于许多正在学习使用 Ionic 构建移动应用的 Web 开发者来说，非线性路由可能是一个新概念。

非线性路由意味着用户应该返回的视图，不一定是屏幕上先前显示的那个视图。

以下是一个非线性路由的示例：

<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/non-linear-routing-demo.mp4')}
  controls
></video>

在上面的示例中，我们从「原创」标签页开始。点击一个卡片会进入「原创」标签页内的《足球教练》视图。

接着，我们切换到「搜索」标签页。然后，我们再次点击「原创」标签页，回到了《足球教练》视图。这时，我们就开始使用非线性路由了。

为什么这是非线性路由？我们之前所在的视图是「搜索」视图。但是，在《足球教练》视图按下返回按钮，应该会回到「原创」标签页的根视图。这是因为在移动应用中，每个标签页都被视为一个独立的堆栈。[使用标签页](#使用标签页) 部分会更详细地讨论这一点。

如果在《足球教练》视图简单地调用 `LocationStrategy.historyGo(-1)`，我们会回到「搜索」视图，这显然是不正确的。

非线性路由可以实现线性路由无法处理的复杂用户流程。但是，某些线性路由 API，如 `LocationStrategy.historyGo()`，不能在这种非线性环境中使用。这意味着在使用标签页或嵌套 outlet 时，不应使用 `LocationStrategy.historyGo()`。

### 应该选择哪一种？

我们建议在需要添加非线性路由之前，尽量保持应用的简单性。非线性路由非常强大，但它也给移动应用增加了相当的复杂性。

非线性路由最常见的两种用途是标签页和嵌套的 `ion-router-outlet`。我们建议只有当你的应用符合标签页或嵌套 router outlet 的使用场景时，才使用非线性路由。

更多关于标签页的信息，请参阅[使用标签页](#使用标签页)。

更多关于嵌套 router outlet 的信息，请参阅[嵌套路由](#嵌套路由)。

## 共享 URL 与嵌套路由

在设置路由时，一个常见的困惑点是决定使用共享 URL 还是嵌套路由。本部分将解释这两者，并帮助你决定使用哪一种。

### 共享 URL

共享 URL 是一种路由配置，其中路由共享 URL 的某些部分。以下是一个共享 URL 配置的示例：

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

上述路由被认为是「共享」的，因为它们重用了 URL 中的 `dashboard` 部分。

### 嵌套路由

嵌套路由是一种路由配置，其中路由被列为其他路由的子路由。以下是一个嵌套路由配置的示例：

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

上述路由是嵌套的，因为它们位于父路由的 `children` 数组中。注意，父路由渲染了 `DashboardRouterOutlet` 组件。当你嵌套路由时，需要渲染另一个 `ion-router-outlet` 实例。

### 应该选择哪一种？

当你希望从页面 A 过渡到页面 B，同时保留两个页面在 URL 中的关系时，共享 URL 非常适用。在前面的示例中，`/dashboard` 页面上的一个按钮可以过渡到 `/dashboard/stats` 页面。两个页面之间的关系通过 a) 页面过渡动画和 b) URL 得以保留。

当你想要在 outlet A 中渲染内容，同时在嵌套的 outlet B 中渲染子内容时，应该使用嵌套路由。你最常遇到的用例就是标签页。当你加载一个 Ionic 标签页 starter 应用时，你会看到 `ion-tab-bar` 和 `ion-tabs` 组件在第一个 `ion-router-outlet` 中渲染。`ion-tabs` 组件会渲染另一个 `ion-router-outlet`，后者负责渲染每个标签页的内容。

在移动应用中，嵌套路由合理的用例非常少。如果有疑问，请使用共享 URL 路由配置。我们强烈建议不要在标签页以外的上下文中使用嵌套路由，因为它会很快让你的应用导航变得混乱。

<LegacyAnchor id="working-with-tabs" />

## 使用标签页

对于标签页，Angular Router 为 Ionic 提供了确定应加载哪些组件的机制，但实际的主要工作是由标签页组件完成的。让我们看一个简单的例子。

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

这里我们加载了一个「tabs」路径。在这个例子中，我们将路径命名为「tabs」，但路径名称是可以更改的，可以根据你的应用需求来命名。在这个路由对象中，我们还可以定义一个子路由。在此示例中，顶级的子路由「tab1」充当了「出口」的角色，并且可以加载更多的子路由。这里我们只有一个子-子路由，它加载一个新的组件。标签页的标记如下：

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

如果你之前用 Ionic 构建过应用，应该对此很熟悉。我们创建了一个 `ion-tabs` 组件，并提供了一个 `ion-tab-bar`。`ion-tab-bar` 提供了一个 `ion-tab-button`，其 `tab` 属性与路由器配置中的标签「出口」相关联。注意，最新版本的 `@ionic/angular` 不再需要 `<ion-tab>`，而是允许开发者完全自定义标签栏，唯一的事实来源存在于路由器配置中。

### Ionic 中标签页的工作方式

Ionic 中的每个标签页都被视为一个独立的导航堆栈。这意味着如果你的应用中有三个标签页，每个标签页都有自己的导航堆栈。在每个堆栈内，你可以向前导航（推入视图）和向后导航（弹出视图）。

这个行为很重要，因为它与其他基于 Web 的 UI 库中发现的大多数标签页实现不同。其他库通常将标签页作为一个单一的历史堆栈来管理。

由于 Ionic 专注于帮助开发者构建移动应用，其标签页的设计旨在尽可能地匹配原生移动标签页的行为。因此，Ionic 标签页的某些行为可能与你见过的其他 UI 库的标签页实现有所不同。请继续阅读以了解更多关于这些差异的信息。

### 标签页内的子路由

当向标签页添加额外的路由时，你应该将它们编写为兄弟路由，并以父标签页路径作为前缀。下面的示例将 `/tabs/tab1/view` 路由定义为 `/tabs/tab1` 路由的兄弟路由。由于这个新路由有 `tab1` 前缀，它将在 `Tabs` 组件内渲染，并且标签一仍会在 `ion-tab-bar` 中被选中。

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

### 在标签页间切换

由于每个标签页都是独立的导航堆栈，需要注意这些导航堆栈之间不应该相互干扰。这意味着标签页一中不应该有一个能将用户路由到标签页二的按钮。换句话说，标签页的切换只能由用户点击标签栏中的标签按钮来完成。

实践中一个好的例子是 iOS App Store 和 Google Play Store 移动应用。这两个应用都提供了标签式界面，但它们都不会跨标签页路由用户。例如，iOS App Store 应用中的「游戏」标签页永远不会将用户引导到「搜索」标签页，反之亦然。

让我们来看看使用标签页时一些常见的错误。

**多个标签页引用的「设置」标签页**

一种常见的做法是创建一个「设置」视图作为其自身的标签页。如果开发者需要展示几个嵌套的设置菜单，这很好。但是，其他标签页绝不应该尝试路由到「设置」标签页。正如我们上面提到的，「设置」标签页被激活的唯一方式应该是用户点击相应的标签按钮。

如果你发现你的标签页需要引用「设置」标签页，我们建议使用 `ion-modal` 将「设置」视图制作成一个模态框。这是 iOS App Store 应用中的一种实践。通过这种方法，任何标签页都可以在不破坏「每个标签页都是独立堆栈」这一移动标签页模式的前提下，呈现这个模态框。

下面的示例展示了 iOS App Store 应用如何处理从多个标签页呈现「账户」视图。通过在模态框中呈现「账户」视图，应用可以在遵循移动标签页最佳实践的同时，跨多个标签页显示相同的视图。

<video
  style={{
    margin: '40px auto',
    display: 'flex',
  }}
  width="400"
  src={useBaseUrl('video/tabs-account-demo.mp4')}
  controls
></video>

**跨标签页复用视图**

另一个常见的做法是在多个标签页中展示相同的视图。开发者经常尝试通过将该视图放在单个标签页中，然后让其他标签页路由到那个标签页来实现这一点。正如我们上面提到的，这打破了移动标签页模式，应该避免。

相反，我们建议在每个标签页中都设置路由，指向同一个组件。这是 Spotify 等流行应用中的一种做法。例如，你可以从「主页」、「搜索」和「你的资料库」标签页访问某个专辑或播客。当访问该专辑或播客时，用户会停留在那个标签页内。应用通过为每个标签页创建路由，并在代码库中共享一个通用组件来实现这一点。

下面的示例展示了 Spotify 应用如何复用同一个专辑组件在多个标签页中展示内容。注意，每张截图都展示了同一个专辑，但来自不同的标签页。

|                     主页标签页                       |                      搜索标签页                       |
| :-------------------------------------------------: | :---------------------------------------------------: |
| <img src={useBaseUrl('img/usage/tabs-home.jpg')} /> | <img src={useBaseUrl('img/usage/tabs-search.jpg')} /> |