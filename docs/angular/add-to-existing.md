---
title: 添加到现有 Angular 项目
sidebar_label: 添加到现有项目
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>将 Ionic Angular 添加到现有项目：集成指南</title>
  <meta
    name="description"
    content="了解如何将 Ionic Angular 添加到现有的 Angular 项目中。将 Ionic 组件和功能集成到现有 Angular 应用程序的分步指南。"
  />
</head>

本指南介绍如何将 Ionic Angular 添加到现有的 Angular 项目。如果你希望从头开始创建新项目，请查看 [Ionic Angular 快速入门](/angular/quickstart.md) 指南。有关 Ionic Angular 与 Angular 配合方式的概述（包括版本支持和工具），请查看 [Ionic Angular 概述](/angular/overview.md)。

:::tip

本指南对样式表使用 `.css` 文件扩展名。如果你使用其他样式表格式（如 `.scss`、`.sass` 或 `.less`）创建 Angular 应用，请改用相应的扩展名。

:::

## 设置

:::info

本指南遵循使用 Angular CLI 创建的 Angular 应用的结构。如果你使用其他方法创建 Angular 应用，文件结构和设置可能会有所不同。

:::

你可以使用 Angular CLI 的 `ng add` 功能或手动安装的方式将 Ionic Angular 添加到现有的 Angular 项目中。

### 使用 ng add

添加 Ionic Angular 最简单的方法是使用 Angular CLI 的 `ng add` 功能：

```bash
ng add @ionic/angular
```

这将安装 `@ionic/angular` 包，并自动配置必要的导入和样式。

### 手动安装

如果你倾向于手动安装 Ionic Angular，可以按照以下步骤操作：

#### 1. 安装包

```bash
npm install @ionic/angular
```

#### 2. 添加 Ionic Framework 样式表

将 `angular.json` 中现有的 `styles` 数组替换为以下内容：

```json title="angular.json"
"styles": [
  "src/styles.css",
  {
    "input": "node_modules/@ionic/angular/css/core.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/normalize.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/structure.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/typography.css"
  }
]
```

:::info

虽然 `core.css` 是必需的，但 `normalize.css`、`structure.css` 和 `typography.css` 是推荐而非必需的。它们可以规范化跨浏览器差异、确保正确的滚动行为，并提供一致的排版和表单样式。如果不使用它们，你可能需要自行处理这些问题。更多详情请参阅[全局样式表](/layout/global-stylesheets.md)。

:::

#### 3. 配置 Ionic Angular

更新 `src/app/app.config.ts` 以包含 `provideIonicAngular`：

```typescript title="src/app/app.config.ts"
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideIonicAngular({}),
  ],
};
```

## 使用独立组件

完成上述设置后，你可以开始在现有 Angular 应用中使用 Ionic 组件。以下是使用示例：

将 `src/app/app.html` 更新为以下内容：

```html title="src/app/app.html"
<ion-button>Button</ion-button> <ion-datetime></ion-datetime>
```

然后，在 `src/app/app.ts` 中导入组件：

```ts title="src/app/app.ts"
import { Component } from '@angular/core';
import { IonButton, IonDatetime } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  imports: [IonButton, IonDatetime],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
```

访问[组件](/components.md)页面查看所有可用的 Ionic 组件。

## 使用 Ionic 页面

如果你希望使用带有完整导航和页面过渡效果的 Ionic 页面，请按照以下额外设置步骤操作。

#### 1. 添加更多 Ionic Framework 样式表

将 `angular.json` 中现有的 `styles` 数组替换为以下内容：

```json title="angular.json"
"styles": [
  "src/styles.css",
  {
    "input": "node_modules/@ionic/angular/css/core.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/normalize.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/structure.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/typography.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/display.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/padding.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/float-elements.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/text-alignment.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/text-transformation.css"
  },
  {
    "input": "node_modules/@ionic/angular/css/flex-utils.css"
  },
  {
    "input": "src/theme/variables.css"
  }
]
```

这些样式表设置了整体页面结构，并提供[CSS 工具类](/layout/css-utilities.md)以加快开发速度。部分样式表是可选的。关于哪些样式表是必需的，请查看[全局样式表](/layout/global-stylesheets.md)。

#### 2. 设置主题

创建一个 `src/theme/variables.css` 文件，内容如下：

```css title="src/theme/variables.css"
/**
 * Ionic 深色主题
 * -----------------------------------------------------
 * 更多信息请参考：
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import "@ionic/angular/css/palettes/dark.always.css"; */
/* @import "@ionic/angular/css/palettes/dark.class.css"; */
@import '@ionic/angular/css/palettes/dark.system.css';
```

当系统设置为偏好深色外观时，该文件为你的 Ionic 应用启用[深色模式支持](/theming/dark-mode.md)。你可以通过取消注释不同的深色调色板导入或添加自定义 CSS 变量来自定义主题行为。

#### 3. 更新应用组件

将 `src/app/app.html` 更新为以下内容：

```html title="src/app/app.html"
<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>
```

然后，更新 `src/app/app.ts` 以包含组件导入：

```ts title="src/app/app.ts"
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  imports: [IonApp, IonRouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
```

#### 4. 创建首页

首先在 `src/app/home/home.html` 添加一个模板：

```html title="src/app/home/home.html"
<ion-header translucent="true">
  <ion-toolbar>
    <ion-title>Home</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Home</ion-title>
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

然后，创建 `src/app/home/home.ts`，内容如下：

```ts title="src/app/home/home.ts"
import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {}
```

最后，添加一个 `src/app/home/home.css` 文件：

```css title="src/app/home/home.css"
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
```

#### 5. 设置路由

更新 `src/app/app.routes.ts` 以添加 `home` 路由：

```ts title="src/app/app.routes.ts"
import { Routes } from '@angular/router';
import { HomePage } from './home/home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
];
```

大功告成！你的 Ionic Angular 应用现已配置为完整支持 Ionic 页面。运行 `ng serve` 启动开发服务器并查看你的应用。

## 后续步骤

现在你已经将 Ionic Angular 集成到项目中，接下来可以查看：

<DocsCards>

<DocsCard header="导航" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>了解如何使用 Angular Router 在 Ionic Angular 应用中处理路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，构建精美的应用。</p>
</DocsCard>

<DocsCard header="主题" href="/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>学习如何使用 Ionic 强大的主题系统自定义应用的外观和风格。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>了解如何使用 Capacitor 访问原生设备功能，并将应用部署到 iOS、Android 和 Web。</p>
</DocsCard>

</DocsCards>
