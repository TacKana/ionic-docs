---
sidebar_label: Navigation/Routing
---

# Angular 导航

本指南将介绍在使用 Ionic 和 Angular 构建的应用中路由是如何工作的。

Angular Router 是 Angular 应用中最重要的库之一。没有它，应用只能是单视图/单上下文的简单应用，或者在浏览器刷新时无法保持导航状态。有了 Angular Router，我们可以创建可链接且具有丰富动画效果的应用（当然还要结合 Ionic）。让我们来看看 Angular Router 的基础知识以及如何为 Ionic 应用进行配置。

## 简单路由

对于大多数应用来说，通常需要某种形式的路由。最基本的配置看起来像这样：

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

这里最简单的理解就是路径与组件的对应关系。当我们的应用加载时，路由器通过读取用户试图加载的 URL 来启动。在我们的示例中，路由查找 `''`，这实际上就是我们的索引路由。因此，我们会加载 `LoginComponent`。这相当直接。这种将路径与组件匹配的模式会应用于路由器配置中的每个条目。但是，如果我们想在初始加载时加载不同的路径呢？

## 处理重定向

为此，我们可以使用路由器重定向。重定向的工作方式与典型的路由对象相同，但包含几个不同的键。

```tsx
[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
];
```

在我们的重定向中，我们查找应用的索引路径。然后，如果加载该路径，我们会重定向到 `login` 路由。`pathMatch` 这个键是必需的，用于告诉路由器应该如何查找路径。

由于我们使用了 `full`，我们是在告诉路由器应该比较完整路径，即使最终路径类似于 `/route1/route2/route3`。这意味着如果我们有：

```tsx
{ path: '/route1/route2/route3', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
```

并加载 `/route1/route2/route3`，我们将被重定向。但如果加载 `/route1/route2/route4`，则不会重定向，因为路径不完全匹配。

或者，如果我们使用：

```tsx
{ path: '/route1/route2', redirectTo: 'login', pathMatch: 'prefix' },
{ path: 'login', component: LoginComponent },
```

那么加载 `/route1/route2/route3` 和 `/route1/route2/route4` 时，两条路由都会被重定向。这是因为 `pathMatch: 'prefix'` 只会匹配路径的一部分。

## 导航到不同路由

谈论路由固然重要，但如何实际导航到所述路由呢？为此，我们可以使用 `routerLink` 指令。让我们回顾一下之前的简单路由器设置：

```ts
RouterModule.forRoot([
  { path: '', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
]);
```

现在，从 `LoginComponent` 中，我们可以使用以下 HTML 导航到详情路由。

```html
<ion-header>
  <ion-toolbar>
    <ion-title>登录</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-button [routerLink]="['/detail']">前往详情页</ion-button>
</ion-content>
```

这里的重要部分是 `ion-button` 和 `routerLink` 指令。RouterLink 的工作原理与典型的 `href` 类似，但它不是将 URL 构建为字符串，而是可以构建为数组，从而提供更复杂的路径。

我们也可以通过使用路由器 API 在应用中进行编程式导航。

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

## 懒加载路由

当前我们设置路由的方式导致它们与根 app.module 包含在同一个代码块中，这并不理想。相反，路由器提供了一种设置，允许将组件隔离到它们自己的代码块中。

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

虽然类似，但 `loadChildren` 属性是一种通过使用原生 import 来引用模块的方式，而不是直接引用组件。不过，要做到这一点，我们需要为每个组件创建一个模块。

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
我们省略了一些额外内容，只包含了必要的部分。
:::

在这里，我们有一个典型的 Angular 模块设置，以及一个 RouterModule 导入，但我们现在使用的是 `forChild` 并在该设置中声明组件。通过这种设置，当我们运行构建时，将会为应用组件、登录组件和详情组件生成独立的代码块。

## 实时示例

如果您更愿意亲身体验上述概念和代码，请查看我们在 StackBlitz 上关于上述主题的 [实时示例](https://stackblitz.com/edit/ionic-angular-routing?file=src/app/app-routing.module.ts) 。

## 使用标签页

对于标签页，Angular Router 为 Ionic 提供了知道应该加载哪些组件的机制，但繁重的工作实际上是由标签页组件完成的。让我们看一个简单的例子。

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

这里我们加载了一个 "tabs" 路径。在这个例子中，我们将路径称为 "tabs"，但路径的名称可以更改。它们可以被称为任何适合您应用的名称。在该路由对象中，我们也可以定义一个子路由。在这个例子中，顶级子路由 "tab1" 充当我们的 "出口"，并且可以加载额外的子路由。对于这个例子，我们有一个单独的子子路由，它只加载一个新组件。标签页的标记如下：

```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab1">
      <ion-icon name="flash"></ion-icon>
      <ion-label>标签页一</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

如果您之前使用 Ionic 构建过应用，这应该感觉很熟悉。我们创建一个 `ion-tabs` 组件，并提供一个 `ion-tab-bar`。`ion-tab-bar` 提供一个带有 `tab` 属性的 `ion-tab-button`，该属性与路由器配置中的标签页 "出口" 相关联。请注意，最新版本的 `@ionic/angular` 不再需要 `<ion-tab>`，而是允许开发者完全自定义标签栏，单一事实来源存在于路由器配置中。