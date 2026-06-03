---
title: Ionic Angular 快速入门
sidebar_label: 快速入门
---

<head>
  <title>使用 Ionic CLI 的 Ionic Angular 快速入门：Angular 基础</title>
  <meta
    name="description"
    content="Ionic Angular 快速入门涵盖了 Angular 和 Ionic 的基础知识，包括任何 Ionic 特有的功能。了解如何使用 Ionic CLI 构建 Angular 应用。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

欢迎！本指南将带您了解 Ionic Angular 开发的基础知识。您将学习如何设置开发环境、生成简单项目、探索项目结构，以及理解 Ionic 组件的工作原理。这是在构建第一个真正应用之前熟悉 Ionic Angular 的完美起点。

如果您正在寻找 Ionic Angular 的高层概览以及它如何融入 Angular 生态系统，请参阅 [Ionic Angular 概览](overview)。

## 前提条件

在开始之前，请确保您的机器上已安装 Node.js 和 npm。
您可以通过运行以下命令来检查：

```shell
node -v
npm -v
```

如果您没有安装 Node.js 和 npm，请[在此下载 Node.js](https://nodejs.org/en/download)（其中包含 npm）。

## 使用 Ionic CLI 创建项目

首先，安装最新的 [Ionic CLI](../cli)：

```shell
npm install -g @ionic/cli
```

然后，运行以下命令来创建并运行一个新项目：

```shell
ionic start myApp blank --type angular

cd myApp
ionic serve
```

在第一个提示中，选择 `Standalone`。

运行 `ionic serve` 后，您的项目将在浏览器中打开。

![Ionic Angular 首页截图](/img/guides/quickstart/home-page.png 'Ionic Angular 首页组件')

## 探索项目结构

您新应用的目录将如下所示：

```shell
└── src/
    └── app
        ├── app.component.html
        ├── app.component.scss
        ├── app.component.ts
        ├── app.routes.ts
        └── home/
            ├── home.page.html
            ├── home.page.scss
            ├── home.page.spec.ts
            └── home.page.ts
```

:::info
以下示例中的所有文件路径都是相对于项目根目录的。
:::

让我们逐个查看这些文件以了解应用的结构。

## 查看 App 组件

应用的根在 `app.component.ts` 中定义：

```ts title="src/app/app.component.ts"
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
```

以及它的模板在 `app.component.html` 中：

```html title="src/app/app.component.html"
<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>
```

这设置了应用的根，使用了 Ionic 的 `ion-app` 和 `ion-router-outlet` 组件。路由出口是页面显示的地方。

## 查看路由

路由在 `app.routes.ts` 中定义：

```ts title="src/app/app.routes.ts"
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
```

当您访问根 URL（`/`）时，`HomePage` 组件将被加载。

## 查看首页

首页组件定义在 `home.page.ts` 中，导入它使用的 Ionic 组件：

```ts title="src/app/home/home.page.ts"
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}
}
```

而模板在 `home.page.html` 文件中，使用了这些组件：

```html title="src/app/home/home.page.html"
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> Blank </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Blank</ion-title>
    </ion-toolbar>
  </ion-header>

  <div id="container">
    <strong>Ready to create an app?</strong>
    <p>
      Start with Ionic
      <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a>
    </p>
  </div>
</ion-content>
```

这创建了一个带有标题和可滚动内容区域的页面。第二个标题显示了一个[可折叠大标题](/api/title.md#可折叠大标题)，当位于内容顶部时显示，滚动时则折叠为第一个标题中较小的标题。

:::tip 了解更多
有关 Ionic 布局组件的详细信息，请参阅 [Header](/api/header.md)、[Toolbar](/api/toolbar.md)、[Title](/api/title.md) 和 [Content](/api/content.md) 的文档。
:::

## 添加 Ionic 组件

您可以使用更多 Ionic UI 组件来增强首页。例如，在 `ion-content` 末尾添加一个[按钮](/api/button.md)：

```html title="src/app/home/home.page.html"
<ion-content>
  <!-- existing content -->

  <ion-button>Navigate</ion-button>
</ion-content>
```

然后，在 `home.page.ts` 中导入 `IonButton` 组件：

```ts title="src/app/home/home.page.ts"
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  // ...existing config...
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar],
})
```

## 添加新页面

要添加新页面，使用 CLI 生成它：

```shell
ionic generate page new
```

路由将自动添加到 `app.routes.ts`。

在 `new.page.html` 中，您可以向[工具栏](/api/toolbar.md)添加一个[返回按钮](/api/back-button.md)：

```html title="src/app/new/new.page.html"
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/"></ion-back-button>
    </ion-buttons>
    <ion-title>new</ion-title>
  </ion-toolbar>
</ion-header>
```

并在 `new.page.ts` 中导入 `IonBackButton` 和 `IonButtons`：

```ts title="src/app/new/new.page.ts"
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  // ...existing config...
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar],
})
```

`ion-back-button` 将自动处理返回上一页的导航，如果没有历史记录则返回 `/`。

## 导航到新页面

要导航到新页面，更新 `home.page.html` 中的按钮：

```html title="src/app/home/home.page.html"
<ion-button [routerLink]="['/new']">Navigate</ion-button>
```

然后，在 `home.page.ts` 中导入 `RouterLink`：

```ts title="src/app/home/home.page.ts"
import { RouterLink } from '@angular/router';

@Component({
  // ...existing config...
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, RouterLink],
})
```

:::info
也可以使用 Angular 的 Router 服务进行导航。有关更多信息，请参阅 [Angular 导航文档](/angular/navigation.md#导航到不同的路由)。
:::

## 向新页面添加图标

Ionic Angular 预装了 [Ionicons](https://ionic.io/ionicons/)。您可以通过在 `ion-icon` 组件上设置 `name` 属性来使用任何图标。将以下图标添加到 `new.page.html`：

```html title="src/app/new/new.page.html"
<ion-content>
  <!-- existing content -->

  <ion-icon name="heart"></ion-icon>
  <ion-icon name="logo-ionic"></ion-icon>
</ion-content>
```

您还需要在 `new.page.ts` 中导入并注册这些图标：

```ts title="src/app/new/new.page.ts"
// ...existing imports...
import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, logoIonic } from 'ionicons/icons';

@Component({
  // ...existing config...
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar],
})
```

然后，更新页面的构造函数以使用 `addIcons`：

```ts title="src/app/new/new.page.ts"
export class NewPage implements OnInit {
  constructor() {
    addIcons({ heart, logoIonic });
  }

  ngOnInit() {}
}
```

或者，您可以在 `app.component.ts` 中注册图标，以便在整个应用中使用它们。

有关更多信息，请参阅[图标文档](/api/icon.md)和 [Ionicons 文档](https://ionic.io/ionicons/)。

## 调用组件方法

让我们添加一个可以滚动内容区域到底部的按钮。

更新 `new.page.html` 中的 `ion-content`，在现有图标之后包含一个按钮和一些项目：

```html title="src/app/new/new.page.html"
<ion-content [fullscreen]="true" #content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">new</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-icon name="heart"></ion-icon>
  <ion-icon name="logo-ionic"></ion-icon>

  <ion-button (click)="scrollToBottom()">Scroll to Bottom</ion-button>

  <!-- Add lots of content to make scrolling possible -->
  @for (item of items; track $index; let i = $index) {
  <ion-item>
    <ion-label>Item {{ i + 1 }}</ion-label>
  </ion-item>
  }
</ion-content>
```

在组件中，添加 `ViewChild` 导入、新的组件导入并定义 `scrollToBottom` 函数：

```ts title="src/app/new/new.page.ts"
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, logoIonic } from 'ionicons/icons';

@Component({
  // ...existing config...
  imports: [
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonTitle,
    IonToolbar,
  ],
})
export class NewPage implements OnInit {
  @ViewChild(IonContent) content!: IonContent;

  items = Array.from({ length: 50 }, (_, i) => i);

  constructor() {
    addIcons({ heart, logoIonic });
  }

  ngOnInit() {}

  scrollToBottom = () => {
    this.content.scrollToBottom(300);
  };
}
```

要调用 Ionic 组件的方法：

1. 为组件创建一个 `ViewChild` 引用
2. 直接在组件实例上调用方法

您可以在每个组件的 API 文档的 [Methods](/api/content.md#方法) 部分找到可用的方法。

## 在设备上运行

Ionic 的组件可以在任何地方运行：iOS、Android 和 PWA。要部署到移动端，请使用 [Capacitor](https://capacitorjs.com)：

```shell
ionic build
ionic cap add ios
ionic cap add android
```

在 IDE 中打开原生项目：

```shell
ionic cap open ios
ionic cap open android
```

更多信息请参阅 [Capacitor 入门指南](https://capacitorjs.com/docs/getting-started/with-ionic)。

## 进一步探索

本指南涵盖了创建 Ionic Angular 应用、添加导航以及介绍 Capacitor 用于原生构建的基础知识。要深入学习，请查看：

<DocsCards>

<DocsCard header="构建您的第一个应用" href="your-first-app" icon="/icons/component-content-icon.png">
  <p>使用 Ionic Angular 和原生设备功能构建一个真正的照片库应用。</p>
</DocsCard>

<DocsCard header="Angular 文档" href="https://angular.dev/overview" icon="/icons/logo-angular-icon.png">
  <p>从官方 Angular 文档中了解更多关于 Angular 核心概念、工具和最佳实践的信息。</p>
</DocsCard>

<DocsCard header="导航" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>了解如何使用 Angular Router 在 Ionic Angular 应用中处理路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，用于构建精美的应用。</p>
</DocsCard>

<DocsCard header="主题" href="/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>学习如何使用 Ionic 强大的主题系统自定义应用的外观和风格。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>了解如何使用 Capacitor 访问原生设备功能并将应用部署到 iOS、Android 和 Web。</p>
</DocsCard>

</DocsCards>
