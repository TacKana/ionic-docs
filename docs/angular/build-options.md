import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 构建选项

开发者在使用 Ionic 组件时有两种选择：独立组件（Standalone）或模块方式（Modules）。本指南将详细介绍这两种方式，以及它们各自的优缺点。

虽然独立组件的方式更新，并且使用了更现代的 Angular API，但 Ionic 会继续支持模块方式。本文档网站上的大多数 Angular 示例都采用模块方式。

<LegacyAnchor id="从模块迁移到独立组件" />

## 独立组件（Standalone）

:::info
Ionic UI 组件作为 Angular 独立组件从 Ionic v7.5 版本开始支持。
:::

### 概述

开发者可以将 Ionic 组件作为独立组件使用，以利用 tree-shaking 和更新的 Angular 特性。这种方式需要在要使用这些组件的 Angular 组件中导入具体的 Ionic 组件。即使您的 Angular 应用是基于 NgModule 的，也可以使用 Ionic 独立组件。

有关如何更新您的 Ionic 应用以使用 Ionic 独立组件，请参阅[从模块方式迁移到独立组件](#从模块方式迁移到独立组件)指南。

**优点**

1. 支持 tree-shaking，使最终构建产物仅包含运行应用所需的代码，从而减小整体构建体积。
2. 无需使用 NgModule，简化了开发体验，使代码更易于理解。
3. 允许开发者使用更新的 Angular 特性，例如 [ESBuild](https://angular.io/guide/esbuild)。

**缺点**

1. Ionic 组件需要在使用它们的每个 Angular 组件中导入，这可能会耗费一些时间来设置。

### 在基于独立组件的应用中使用

:::warning
所有 Ionic 的导入都应来自 `@ionic/angular/standalone` 子模块。这包括组件、指令、提供者和类型等导入。从 `@ionic/angular` 导入可能会引入懒加载的 Ionic 代码，从而干扰 tree-shaking。
:::

**启动与配置**

在 Angular 应用调用 `bootstrapApplication` 时，需要使用 `provideIonicAngular` 函数来配置 Ionic Angular。开发者可以将任何 [IonicConfig](../developing/config#ionicconfig) 值作为对象传递给此函数。请注意，即使不传递任何自定义配置，也需要调用 `provideIonicAngular`。

```typescript title="main.ts"
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'ios' }),
    provideRouter(routes),
  ],
});
```

**组件**

在下面的示例中，我们从 `@ionic/angular/standalone` 导入了 `IonContent` 和 `IonButton`，并将它们传递给 `imports` 数组，以便在组件模板中使用。如果我们没有导入这些组件并提供给 `imports` 数组，将会出现编译错误。

```typescript title="home.page.ts"
import { Component } from '@angular/core';
import { IonButton, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent],
})
export class HomePage {
  constructor() {}
}
```

**图标**

需要在 Angular 组件中定义图标 SVG 数据，以便正确加载。开发者可以使用 `ionicons` 提供的 `addIcons` 函数，将 SVG 数据映射到一个字符串名称。然后，可以通过 `IonIcon` 的 `name` 属性使用该字符串名称来引用图标。

我们建议在 Angular 组件的 `constructor` 中调用 `addIcons`，这样只有在该 Angular 组件被使用时才会添加数据。

对于使用 Ionicons 7.2 或更高版本的开发者，只传递 SVG 数据会导致自动生成字符串名称。

```typescript title="home.page.ts"
import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon],
})
export class HomePage {
  constructor() {
    /**
     * 在 Ionicons 7.2+ 中，此图标
     * 会被映射到 "logo-ionic" 键。
     * 或者，开发者可以这样做：
     * addIcons({ 'logo-ionic': logoIonic });
     */
    addIcons({ logoIonic });
  }
}
```

图标也可以在入口点（如 `app.component.ts`）中注册，以避免多次调用 `addIcons`。开发者应注意，由于注册的图标需要在应用启动时加载，因此初始应用块可能会增大。但是，如果您的应用使用的图标数量较少，则此影响可能很小。

```typescript title="app.component.ts"
import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
})
export class AppComponent {
  constructor() {
    /**
     * 您希望在应用中使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后在应用中的任何位置通过名称引用。
     */
    addIcons({ logoIonic });
  }
}
```

在应用入口点注册的图标可以在应用中的任何位置通过名称引用。

```html title="home.page.html"
<!--
  logoIonic 是在 app.component.ts 中注册的，而不是在 home.page.ts 中，
  但它仍然可以在 home.page.html 中使用。
-->
<ion-icon name="logo-ionic"></ion-icon>
```

**路由**

如果希望在 Ionic 组件上使用 `routerLink`、`routerAction` 或 `routerDirection`，开发者应导入 `IonRouterLink` 指令。如果希望在锚点（`<a>`）元素上使用这些路由功能，则应导入 `IonRouterLinkWithHref`。

```typescript title="home.page.ts"
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    RouterLink, // 需要此导入以获得 @angular/router 的基础 routerLink 行为
    IonRouterLink, // 如果您使用的是 <a> 元素，请使用 IonRouterLinkWithHref
  ],
})
export class HomePage {}
```

```html title="home.page.html"
<ion-button routerLink="/foo" routerDirection="root">前往 Foo 页面</ion-button>
```

**测试**

Ionic Angular 的独立组件使用 ES Modules。因此，使用 Jest 的开发者应确保 ES Modules 被转译成 Jest 可以使用的格式。使用 Jest 的开发者应将以下内容添加到 Jest 配置中：

<Tabs groupId="package-manager" defaultValue="npm" values={[{ value: 'npm', label: 'npm' }, { value: 'pnpm', label: 'pnpm' }]}>
<TabItem value="npm">

```json

"transformIgnorePatterns": ["<rootDir>/node_modules/(?!(@ionic/angular|@ionic/core|ionicons|@stencil/core|@angular/*)/)"]
```

</TabItem>
<TabItem value="pnpm">

```json

"transformIgnorePatterns": ["<rootDir>/node_modules/.pnpm/(?!(@ionic/angular|@ionic/core|ionicons|@stencil/core|@angular/*)@)"]
```

</TabItem>
</Tabs>

### 在基于 NgModule 的应用中使用

:::warning
所有 Ionic 的导入都应来自 `@ionic/angular/standalone` 子模块。这包括组件、指令、提供者和类型等导入。从 `@ionic/angular` 导入可能会引入懒加载的 Ionic 代码，从而干扰 tree-shaking。
:::

**启动与配置**

在 `app.module.ts` 的 `providers` 数组中，需要使用 `provideIonicAngular` 函数来配置 Ionic Angular。开发者可以将任何 [IonicConfig](../developing/config#ionicconfig) 值作为对象传递给此函数。请注意，即使不传递任何自定义配置，也需要调用 `provideIonicAngular`。

```typescript title="app.module.ts"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideIonicAngular(), { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**组件**

在下面的示例中，我们从 `@ionic/angular/standalone` 导入了 `IonContent` 和 `IonButton`，并将它们传递给 Angular 组件对应 NgModule 的 `imports` 数组，以便在组件模板中使用。如果我们没有导入这些组件并提供给 `imports` 数组，将会出现编译错误。

```typescript title="home.module.ts"
import { NgModule } from '@angular/core';
import { IonButton, IonContent } from '@ionic/angular/standalone';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [IonButton, IonContent, HomePageRoutingModule],
  declarations: [HomePage],
})
export class HomePageModule {}
```

**图标**

需要在 Angular 组件中定义图标 SVG 数据，以便正确加载。开发者可以使用 `ionicons` 提供的 `addIcons` 函数，将 SVG 数据映射到一个字符串名称。然后，可以通过 `IonIcon` 的 `name` 属性使用该字符串名称来引用图标。`IonIcon` 组件应与其他 Ionic 组件一样在 `app.module.ts` 中添加。

我们建议在 Angular 组件的 `constructor` 中调用 `addIcons`，这样只有在该 Angular 组件被使用时才会添加数据。

对于使用 Ionicons 7.2 或更高版本的开发者，只传递 SVG 数据会导致自动生成字符串名称。

```typescript title="home.page.ts"
import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    /**
     * 在 Ionicons 7.2+ 中，此图标
     * 会被映射到 "logo-ionic" 键。
     * 或者，开发者可以这样做：
     * addIcons({ 'logo-ionic': logoIonic });
     */
    addIcons({ logoIonic });
  }
}
```

图标也可以在入口点（如 `app.component.ts`）中注册，以避免多次调用 `addIcons`。开发者应注意，由于注册的图标需要在应用启动时加载，因此初始应用块可能会增大。但是，如果您的应用使用的图标数量较少，则此影响可能很小。

```typescript title="app.component.ts"
import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    /**
     * 您希望在应用中使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后在应用中的任何位置通过名称引用。
     */
    addIcons({ logoIonic });
  }
}
```

在应用入口点注册的图标可以在应用中的任何位置通过名称引用。

```html title="home.page.html"
<!--
  logoIonic 是在 app.component.ts 中注册的，而不是在 home.page.ts 中，
  但它仍然可以在 home.page.html 中使用。
-->
<ion-icon name="logo-ionic"></ion-icon>
```

**路由**

如果希望在 Ionic 组件上使用 `routerLink`、`routerAction` 或 `routerDirection`，开发者应导入 `IonRouterLink` 指令。如果希望在锚点（`<a>`）元素上使用这些路由功能，则应导入 `IonRouterLinkWithHref`。

```typescript title="home.module.ts"
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    IonButton,
    RouterLink, // 需要此导入以获得 @angular/router 的基础 routerLink 行为
    IonRouterLink, // 如果您使用的是 <a> 元素，请使用 IonRouterLinkWithHref
    HomePageRoutingModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
```

```html title="home.page.html"
<ion-button routerLink="/foo" routerDirection="root">前往 Foo 页面</ion-button>
```

**测试**

Ionic Angular 的独立组件使用 ES Modules。因此，使用 Jest 的开发者应确保 ES Modules 被转译成 Jest 可以使用的格式。使用 Jest 的开发者应将以下内容添加到 Jest 配置中：

<Tabs groupId="package-manager" defaultValue="npm" values={[{ value: 'npm', label: 'npm' }, { value: 'pnpm', label: 'pnpm' }]}>
<TabItem value="npm">

```json

"transformIgnorePatterns": ["<rootDir>/node_modules/(?!(@ionic/angular|@ionic/core|ionicons|@stencil/core|@angular/*)/)"]
```

</TabItem>
<TabItem value="pnpm">

```json

"transformIgnorePatterns": ["<rootDir>/node_modules/.pnpm/(?!(@ionic/angular|@ionic/core|ionicons|@stencil/core|@angular/*)@)"]
```

</TabItem>
</Tabs>

## 模块方式（Modules）

### 概述

开发者也可以通过模块方式来使用 Ionic：在 `app.module.ts` 的 `imports` 数组中导入 `IonicModule` 并调用 `IonicModule.forRoot()`。这会注册一个 Ionic 版本，其中 Ionic 组件将在运行时被懒加载。

**优点**

1. 由于组件是按需懒加载的，开发者无需花费时间手动导入和注册每个 Ionic 组件。

**缺点**

1. 懒加载 Ionic 组件意味着编译器在构建时不知道哪些组件是必需的。这可能导致最终的应用包体积比实际需要的大得多。
2. 开发者无法使用更新的 Angular 特性，例如 [ESBuild](https://angular.io/guide/esbuild)。

### 使用方法

在下面的示例中，我们使用 `IonicModule` 来创建一个懒加载版本的 Ionic。然后，我们可以在不显式导入的情况下引用任何 Ionic 组件。

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## 从模块方式迁移到独立组件

:::tip
尝试使用我们的自动化迁移工具迁移到独立组件！

请参阅 https://github.com/ionic-team/ionic-angular-standalone-codemods 了解如何开始使用。所有与迁移工具相关的问题都应提交到链接的仓库。
:::

独立组件选项比模块选项更新，因此开发者可能希望在应用开发过程中进行切换。本指南详细说明了迁移所需的步骤。

迁移到 Ionic 独立组件必须一次性完成，不能逐步进行。模块方式和独立组件方式使用 Ionic 的两种不同构建系统，不能同时使用。

我们鼓励开发者尝试[自动化迁移工具](https://github.com/ionic-team/ionic-angular-standalone-codemods)，但如果他们想手动迁移应用，也可以按照以下步骤操作。

### 针对基于独立组件的应用

如果您的 Angular 应用已经使用了独立组件架构，并且您也希望将 Ionic UI 组件作为独立组件使用，请遵循以下步骤。

1. 运行 `npm install @ionic/angular@latest` 以确保您运行的是最新版本的 Ionic。Ionic UI 独立组件从 Ionic v7.5 或更高版本开始支持。

2. 运行 `npm install ionicons@latest` 以确保您运行的是最新版本的 Ionicons。Ionicons v7.2 带来了可用性改进，减少了将图标与独立组件一起使用所需的代码样板。

3. 移除 `main.ts` 中对 `IonicModule` 的调用，改用从 `@ionic/angular/standalone` 导入的 `provideIonicAngular`。任何传递给 `IonicModule.forRoot` 的配置都可以作为对象传递给这个新函数。

```diff title="main.ts"
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
- import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
+ import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    /**
     * 此自定义配置作为示例，
     * 说明如何将配置传递给 provideIonicAngular。
     * 您不需要设置 "mode: 'ios'" 来
     * 使用 Ionic 独立组件。
     */
-   importProvidersFrom(IonicModule.forRoot({ mode: 'ios' })),
+   provideIonicAngular({ mode: 'ios' }),
    provideRouter(routes),
  ],
});
```

4. 移除应用中任何其他位置对 `IonicModule` 的引用。

5. 将任何现有从 `@ionic/angular` 的导入更新为从 `@ionic/angular/standalone` 导入。

```diff
- import { Platform } from '@ionic/angular';
+ import { Platform } from '@ionic/angular/standalone';
```

6. 在使用它们的每个 Angular 组件中添加每个 Ionic 组件的导入。确保将这些导入传递给 Angular 组件的 `imports` 数组。

```diff title="app.component.ts"
import { Component } from '@angular/core';
+ import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
+ imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
```

7. 如果您正在使用 Ionicons，请使用 `addIcons` 在每个 Angular 组件中定义使用的图标 SVG 数据。这允许您继续在组件模板中通过字符串名称引用图标。请注意，您需要为添加的任何其他图标执行此操作。

```diff title="test.component.ts"
import { Component } from '@angular/core';
+ import { IonIcon } from '@ionic/angular/standalone';
+ import { addIcons } from 'ionicons';
+ import { alarm, logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
+ imports: [IonIcon],
})
export class TestComponent {
  constructor() {
+   addIcons({ alarm, logoIonic });
  }
}
```

8. 如果存在，请从 `angular.json` 文件中移除以下代码。请注意，它可能出现多次。

```diff title="angular.json"
- {
-   "glob": "**/*.svg",
-   "input": "node_modules/ionicons/dist/ionicons/svg",
-   "output": "./svg"
- }
```

9. 如果您正在使用 `routerLink`、`routerDirection` 或 `routerAction`，请确保为 Ionic 组件导入 `IonRouterLink` 指令，或者为 `<a>` 元素导入 `IonRouterLinkWithHref` 指令。

```diff title="test.component.ts"
import { Component } from '@angular/core';
- import { IonButton } from '@ionic/angular/standalone';
+ import { IonButton, IonRouterLink } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonButton,
+   IonRouterLink
  ],
})
export class TestComponent {}
```

10. 如果您使用的是 VSCode，建议忽略 `@ionic/angular/common` 和 `@ionic/angular` 模块说明符的导入建议。

```json title=".vscode/settings.json"
{
  "typescript.preferences.autoImportFileExcludePatterns": ["@ionic/angular/common", "@ionic/angular"]
}
```

### 针对基于 NgModule 的应用

如果您的 Angular 应用仍然使用 NgModule 架构，但您现在希望采用 Ionic UI 组件作为独立组件，请遵循以下步骤。

1. 运行 `npm install @ionic/angular@latest` 以确保您运行的是最新版本的 Ionic。Ionic UI 独立组件从 Ionic v7.5 或更高版本开始支持。

2. 运行 `npm install ionicons@latest` 以确保您运行的是最新版本的 Ionicons。Ionicons v7.2 带来了可用性改进，减少了将图标与独立组件一起使用所需的代码样板。

3. 移除 `app.module.ts` 中对 `IonicModule` 的调用，改用从 `@ionic/angular/standalone` 导入的 `provideIonicAngular`。任何传递给 `IonicModule.forRoot` 的配置都可以作为对象传递给这个新函数。

```diff title="app.module.ts"
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
- import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
+ import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [AppComponent],
- imports: [BrowserModule, IonicModule.forRoot({ mode: 'ios' }), AppRoutingModule],
+ imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    /**
     * 此自定义配置作为示例，
     * 说明如何将配置传递给 provideIonicAngular。
     * 您不需要设置 "mode: 'ios'" 来
     * 使用 Ionic 独立组件。
     */
+   provideIonicAngular({ mode: 'ios' }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

4. 移除应用中任何其他位置对 `IonicModule` 的引用。

5. 将任何现有从 `@ionic/angular` 的导入更新为从 `@ionic/angular/standalone` 导入。

```diff
- import { Platform } from '@ionic/angular';
+ import { Platform } from '@ionic/angular/standalone';
```

6. 在使用它们的 Angular 组件对应的 NgModule 中添加每个 Ionic 组件的导入。确保将这些组件传递给模块的 `imports` 数组。

```diff title="app.module.ts"
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
- import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';
+ import { provideIonicAngular, IonicRouteStrategy, IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [AppComponent],
- imports: [BrowserModule, AppRoutingModule],
+ imports: [BrowserModule, AppRoutingModule, IonApp, IonRouterOutlet],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'ios' })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

例如，所有使用 Ionic 组件的模块都需要在其组件模块中导入这些 Ionic 组件。

```diff title="home.module.ts"
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

+ import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
+    IonContent,
+    IonHeader,
+    IonTitle,
+    IonToolbar
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
```

7. 如果您正在使用 Ionicons，请使用 `addIcons` 在每个 Angular 组件中定义使用的图标 SVG 数据。这允许您继续在组件模板中通过字符串名称引用图标。请注意，您需要为添加的任何其他图标执行此操作。`IonIcon` 组件仍应在 NgModule 中提供。

```diff title="test.component.ts"
import { Component } from '@angular/core';
+ import { addIcons } from 'ionicons';
+ import { alarm, logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class TestComponent {
  constructor() {
+   addIcons({ alarm, logoIonic });
  }
}
```

```diff title="test.module.ts"
import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
+ import { IonIcon } from '@ionic/angular/standalone';

@NgModule({
  imports: [
+   IonIcon,
  ],
  declarations: [TestComponent]
})
export class TestComponentModule {}
```

8. 如果存在，请从 `angular.json` 文件中移除以下代码。请注意，它可能出现多次。

```diff title="angular.json"
- {
-   "glob": "**/*.svg",
-   "input": "node_modules/ionicons/dist/ionicons/svg",
-   "output": "./svg"
- }
```

9. 如果您正在使用 `routerLink`、`routerDirection` 或 `routerAction`，请确保为 Ionic 组件导入 `IonRouterLink` 指令，或者为 `<a>` 元素导入 `IonRouterLinkWithHref` 指令。

```diff title="test.module.ts"
import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
- import { IonButton } from '@ionic/angular/standalone';
+ import { IonButton, IonRouterLink } from '@ionic/angular/standalone';

@NgModule({
  imports: [
    IonButton,
+   IonRouterLink,
  ],
  declarations: [TestComponent]
})
```

10. 如果您使用的是 VSCode，建议忽略 `@ionic/angular/common` 和 `@ionic/angular` 模块说明符的导入建议。

```json title=".vscode/settings.json"
{
  "typescript.preferences.autoImportFileExcludePatterns": ["@ionic/angular/common", "@ionic/angular"]
}
```