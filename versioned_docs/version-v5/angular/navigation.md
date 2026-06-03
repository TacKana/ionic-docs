---
title: 导航
sidebar_label: 导航/路由
---

# Angular 导航

本指南介绍了在使用 Ionic 和 Angular 构建的应用中路由的工作原理。

Angular Router 是 Angular 应用中最重要的库之一。没有它，应用将是单视图/单上下文的应用，或者在浏览器重新加载时无法保持其导航状态。有了 Angular Router，我们可以创建丰富的、可链接的、具有丰富动画效果的应用（当然，与 Ionic 配合使用时）。让我们来看看 Angular Router 的基础知识以及如何为 Ionic 应用配置它。

## 简单的路由

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

这里最简单的分解是路径/组件查找。当我们的应用加载时，路由器通过读取用户尝试加载的 URL 来启动。在我们的示例中，我们的路由查找 `''`，这基本上就是我们的索引路由。因此，我们加载 `LoginComponent`。相当直接。这种路径与组件匹配的模式对我们路由配置中的每个条目都适用。但是，如果我们想在初始加载时加载不同的路径，该怎么办呢？

## 处理重定向

为此，我们可以使用路由重定向。重定向的工作方式与典型的路由对象相同，但包含一些不同的键。

```tsx
[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail', component: DetailComponent },
];
```

在我们的重定向中，我们查找应用的索引路径。然后，如果加载该路径，我们会重定向到 `login` 路由。最后的 `pathMatch` 键是必需的，用于告诉路由器应如何查找路径。

由于我们使用 `full`，我们告诉路由器应该比较整个路径，即使它最终像 `/route1/route2/route3` 这样的路径。这意味着如果我们有：

```tsx
{ path: '/route1/route2/route3', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
```

然后加载 `/route1/route2/route3`，我们会重定向。但如果加载 `/route1/route2/route4`，则不会重定向，因为路径不完全匹配。

或者，如果我们使用：

```tsx
{ path: '/route1/route2', redirectTo: 'login', pathMatch: 'prefix' },
{ path: 'login', component: LoginComponent },
```

那么加载 `/route1/route2/route3` 和 `/route1/route2/route4` 都会被重定向。这是因为 `pathMatch: 'prefix'` 只匹配路径的一部分。

## 导航到不同的路由

讨论路由固然很好，但如何实际导航到这些路由呢？为此，我们可以使用 `routerLink` 指令。让我们回到之前简单的路由设置：

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
    <ion-title>Login</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-button [routerLink]="['/detail']">前往详情</ion-button>
</ion-content>
```

这里的关键部分是 `ion-button` 和 `routerLink` 指令。RouterLink 的工作方式类似于典型的 `href`，但不是将 URL 构建为字符串，而是可以构建为数组，从而提供更复杂的路径。

我们也可以通过使用路由器 API 以编程方式进行导航。

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

## 懒加载路由

目前我们设置路由的方式使得它们被包含在与根 app.module 相同的代码块中，这并不理想。相反，路由器提供了一种设置，允许将组件隔离到各自的代码块中。

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

虽然类似，但 `loadChildren` 属性是一种通过使用原生 import 而不是直接引用组件来引用模块的方式。为此，我们需要为每个组件创建一个模块。

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
我们省略了一些额外内容，只包含必要部分。
:::

这里，我们有一个典型的 Angular 模块设置，以及一个 RouterModule 导入，但现在我们使用 `forChild` 并在该设置中声明组件。通过这种设置，当我们运行构建时，将会为应用组件、登录组件和详情组件生成单独的代码块。

## 在线示例

如果您希望动手实践上述概念和代码，请在 StackBlitz 上查看我们关于上述主题的[在线示例](https://stackblitz.com/edit/ionic-angular-routing?file=src/app/app-routing.module.ts)。

## 使用标签页

使用标签页时，Angular Router 为 Ionic 提供了知道应加载哪些组件的机制，但实际的繁重工作由标签页组件完成。让我们看一个简单的示例。

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

这里我们有一个要加载的 "tabs" 路径。在这个示例中，我们称该路径为 "tabs"，但路径名称可以更改。它们可以被称为适合您应用的任何名称。在该路由对象中，我们还可以定义一个子路由。在这个示例中，顶级子路由 "tab1" 充当我们的"出口"，并且可以加载额外的子路由。在这个示例中，我们有一个子-子路由，它只是加载一个新组件。标签页的标记如下：

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

如果您以前构建过 Ionic 应用，这应该很熟悉。我们创建一个 `ion-tabs` 组件，并提供一个 `ion-tab-bar`。`ion-tab-bar` 提供一个 `ion-tab-button`，其 `tab` 属性与路由器配置中的标签页"出口"相关联。请注意，最新版本的 `@ionic/angular` 不再需要 `<ion-tab>`，而是允许开发者完全自定义标签栏，单一数据源位于路由器配置中。
