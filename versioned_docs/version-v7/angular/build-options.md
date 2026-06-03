# 构建选项

开发者有两种使用 Ionic 组件的选项：Standalone（独立组件）或 Modules（模块）。本指南涵盖了这两种选项以及各自的优缺点。

虽然 Standalone 方法较新，使用了更现代的 Angular API，但 Modules 方法将继续在 Ionic 中得到支持。本文档网站上的大多数 Angular 示例都使用 Modules 方法。

## Standalone（独立组件）

:::info
Ionic UI 组件作为 Angular 独立组件支持从 Ionic v7.5 开始。
:::

### 概述

开发者可以将 Ionic 组件用作独立组件，以利用 tree-shaking 和更新的 Angular 功能。此选项需要在要使用这些组件的 Angular 组件中导入特定的 Ionic 组件。即使您的 Angular 应用是基于 NgModule 的，也可以使用 Ionic 独立组件。

有关如何更新 Ionic 应用以使用 Ionic 独立组件的说明，请参阅[从 Modules 迁移到 Standalone 指南](#从-modules-迁移到-standalone)。

**优点**

1. 启用 tree-shaking，使最终构建输出仅包含运行应用所需的代码，从而减少整体构建大小。
2. 避免使用 NgModules，简化开发体验并使代码更易于理解。
3. 允许开发者同时使用更新的 Angular 功能，如 [ESBuild](https://angular.io/guide/esbuild)。

**缺点**

1. Ionic 组件需要在使用它们的每个 Angular 组件中导入，这可能很耗时。

### 在基于 Standalone 的应用中使用

:::caution
所有 Ionic 导入都应从 `@ionic/angular/standalone` 子模块导入。这包括组件、指令、提供者和类型等导入。从 `@ionic/angular` 导入可能会引入延迟加载的 Ionic 代码，从而干扰 tree-shaking。
:::

**引导和配置**

当 Angular 应用调用 `bootstrapApplication` 时，需要使用 `provideIonicAngular` 函数来配置 Ionic Angular。开发者可以在此函数中以对象形式传递任何 [IonicConfig](../developing/config#ionicconfig) 值。请注意，即使没有传递自定义配置，也需要调用 `provideIonicAngular`。

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

在下面的示例中，我们从 `@ionic/angular/standalone` 导入 `IonContent` 和 `IonButton`，并将它们传递给 `imports` 以便在组件模板中使用。如果这些组件未被导入并提供给 `imports` 数组，我们将收到编译器错误。

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

图标 SVG 数据需要在 Angular 组件中定义，以便正确加载。开发者可以使用 `ionicons` 中的 `addIcons` 函数将 SVG 数据映射到字符串名称。然后，开发者可以通过 `IonIcon` 上的 `name` 属性使用字符串名称来引用图标。

我们建议在 Angular 组件的 `constructor` 中调用 `addIcons`，这样只有在使用 Angular 组件时才会添加数据。

对于使用 Ionicons 7.2 或更新版本的开发者，只传递 SVG 数据将自动生成字符串名称。

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
     * On Ionicons 7.2+ this icon
     * gets mapped to a "logo-ionic" key.
     * Alternatively, developers can do:
     * addIcons({ 'logo-ionic': logoIonic });
     */
    addIcons({ logoIonic });
  }
}
```

图标也可以在入口点（如 `app.component.ts`）注册，以避免多次调用 `addIcons`。开发者应注意，初始应用块可能会增大，因为注册的图标需要在应用启动时加载。但是，如果您的应用使用少量图标，这种影响可能很小。

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
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ logoIonic });
  }
}
```

在应用入口点注册的图标随后可以在应用中的任何位置通过名称引用。

```html title="home.page.html"
<!--
  logoIonic was registered in app.component.ts instead of home.page.ts,
  but it can still be used in home.page.html.
-->
<ion-icon name="logo-ionic"></ion-icon>
```

**路由**

希望在 Ionic 组件上使用 `routerLink`、`routerAction` 或 `routerDirection` 的开发者应导入 `IonRouterLink` 指令。希望在锚点（`<a>`）元素上使用这些路由功能的开发者应导入 `IonRouterLinkWithHref`。

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
    RouterLink, // required to get base routerLink behavior for @angular/router
    IonRouterLink, // use IonRouterLinkWithHref if you are using an <a> element instead
  ],
})
export class HomePage {}
```

```html title="home.page.html"
<ion-button routerLink="/foo" routerDirection="root">Go to Foo Page</ion-button>
```

### 在基于 NgModule 的应用中使用

:::caution
所有 Ionic 导入都应从 `@ionic/angular/standalone` 子模块导入。这包括组件、指令、提供者和类型等导入。从 `@ionic/angular` 导入可能会引入延迟加载的 Ionic 代码，从而干扰 tree-shaking。
:::

**引导和配置**

Ionic Angular 需要在 `app.module.ts` 的 `providers` 数组中使用 `provideIonicAngular` 函数进行配置。开发者可以在此函数中以对象形式传递任何 [IonicConfig](../developing/config#ionicconfig) 值。请注意，即使没有传递自定义配置，也需要调用 `provideIonicAngular`。

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

在下面的示例中，我们从 `@ionic/angular/standalone` 导入 `IonContent` 和 `IonButton`，并将它们传递给 Angular 组件 NgModule 的 `imports` 数组，以便在组件模板中使用。如果这些组件未被导入并提供给 `imports` 数组，我们将收到编译器错误。

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

图标 SVG 数据需要在 Angular 组件中定义，以便正确加载。开发者可以使用 `ionicons` 中的 `addIcons` 函数将 SVG 数据映射到字符串名称。然后，开发者可以通过 `IonIcon` 上的 `name` 属性使用字符串名称来引用图标。`IonIcon` 组件应像其他 Ionic 组件一样添加到 `app.module.ts` 中。

我们建议在 Angular 组件的 `constructor` 中调用 `addIcons`，这样只有在使用 Angular 组件时才会添加数据。

对于使用 Ionicons 7.2 或更新版本的开发者，只传递 SVG 数据将自动生成字符串名称。

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
     * On Ionicons 7.2+ this icon
     * gets mapped to a "logo-ionic" key.
     * Alternatively, developers can do:
     * addIcons({ 'logo-ionic': logoIonic });
     */
    addIcons({ logoIonic });
  }
}
```

图标也可以在入口点（如 `app.component.ts`）注册，以避免多次调用 `addIcons`。开发者应注意，初始应用块可能会增大，因为注册的图标需要在应用启动时加载。但是，如果您的应用使用少量图标，这种影响可能很小。

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
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ logoIonic });
  }
}
```

在应用入口点注册的图标随后可以在应用中的任何位置通过名称引用。

```html title="home.page.html"
<!--
  logoIonic was registered in app.component.ts instead of home.page.ts,
  but it can still be used in home.page.html.
-->
<ion-icon name="logo-ionic"></ion-icon>
```

**路由**

希望在 Ionic 组件上使用 `routerLink`、`routerAction` 或 `routerDirection` 的开发者应导入 `IonRouterLink` 指令。希望在锚点（`<a>`）元素上使用这些路由功能的开发者应导入 `IonRouterLinkWithHref`。

```typescript title="home.module.ts"
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    IonButton,
    RouterLink, // required to get base routerLink behavior for @angular/router
    IonRouterLink, // use IonRouterLinkWithHref if you are using an <a> element instead
    HomePageRoutingModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
```

```html title="home.page.html"
<ion-button routerLink="/foo" routerDirection="root">Go to Foo Page</ion-button>
```

## Modules（模块）

### 概述

开发者也可以使用 Modules 方法，即在 `app.module.ts` 的 `imports` 数组中导入 `IonicModule` 并调用 `IonicModule.forRoot()`。这将注册一个 Ionic 版本，其中 Ionic 组件将在运行时延迟加载。

**优点**

1. 由于组件按需延迟加载，开发者无需花时间手动导入和注册每个 Ionic 组件。

**缺点**

1. 延迟加载 Ionic 组件意味着编译器在构建时不知道需要哪些组件。这意味着最终的应用包可能比实际需要的大得多。
2. 开发者无法使用更新的 Angular 功能，如 [ESBuild](https://angular.io/guide/esbuild)。

### 用法

在下面的示例中，我们使用 `IonicModule` 创建了一个延迟加载的 Ionic 版本。然后，我们可以在不显式导入的情况下引用任何 Ionic 组件。

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

## 从 Modules 迁移到 Standalone

:::tip
尝试我们的自动迁移工具来迁移到 Standalone！

请参阅 https://github.com/ionic-team/ionic-angular-standalone-codemods 了解如何开始。与迁移工具相关的所有问题应提交到链接的仓库。
:::

Standalone 选项比 Modules 选项更新，因此开发者可能希望在应用开发过程中进行切换。本指南详细介绍了迁移所需的步骤。

迁移到 Ionic 独立组件必须一次性完成，不能逐步进行。Modules 和 Standalone 方法使用 Ionic 的两种不同构建系统，不能同时使用。

鼓励开发者尝试[自动迁移工具](https://github.com/ionic-team/ionic-angular-standalone-codemods)，但如果愿意，也可以按照以下步骤手动迁移应用。

### 基于 Standalone 的应用

如果您的 Angular 应用已经在使用独立架构，并且您也希望将 Ionic UI 组件用作独立组件，请按照以下步骤操作。

1. 运行 `npm install @ionic/angular@latest` 以确保您运行的是最新版本的 Ionic。Ionic UI 独立组件从 Ionic v7.5 或更高版本开始支持。

2. 运行 `npm install ionicons@latest` 以确保您运行的是最新版本的 Ionicons。Ionicons v7.2 带来了可用性改进，减少了在独立组件中使用图标所需的代码样板。

3. 移除 `main.ts` 中对 `IonicModule` 的调用，改为使用从 `@ionic/angular/standalone` 导入的 `provideIonicAngular`。传递给 `IonicModule.forRoot` 的任何配置都可以作为对象传递给这个新函数。

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
     * The custom config serves as an example
     * of how to pass a config to provideIonicAngular.
     * You do not need to set "mode: 'ios'" to
     * use Ionic standalone components.
     */
-   importProvidersFrom(IonicModule.forRoot({ mode: 'ios' })),
+   provideIonicAngular({ mode: 'ios' }),
    provideRouter(routes),
  ],
});
```

4. 移除应用中其他地方对 `IonicModule` 的任何引用。

5. 将从 `@ionic/angular` 导入的语句更新为从 `@ionic/angular/standalone` 导入。

```diff
- import { Platform } from '@ionic/angular';
+ import { Platform } from '@ionic/angular/standalone';
```

6. 在使用每个 Ionic 组件的 Angular 组件中添加相应的导入。确保将导入传递给 Angular 组件上的 `imports` 数组。

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

7. 如果您正在使用 Ionicons，使用 `addIcons` 在每个 Angular 组件中定义使用的图标 SVG 数据。这样您就可以继续在组件模板中通过字符串名称引用图标。请注意，您需要为添加的任何额外图标执行此操作。

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

8. 从 `angular.json` 文件中移除以下代码（如果存在）。请注意，它可能多次出现。

```diff title="angular.json"
- {
-   "glob": "**/*.svg",
-   "input": "node_modules/ionicons/dist/ionicons/svg",
-   "output": "./svg"
- }
```

9. 如果您正在使用 `routerLink`、`routerDirection` 或 `routerAction`，请确保为 Ionic 组件导入 `IonRouterLink` 指令，或为 `<a>` 元素导入 `IonRouterLinkWithHref` 指令。

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

10. 如果您正在使用 VSCode，建议忽略 `@ionic/angular/common` 和 `@ionic/angular` 模块说明符的导入建议。

```json title=".vscode/settings.json"
{
  "typescript.preferences.autoImportFileExcludePatterns": ["@ionic/angular/common", "@ionic/angular"]
}
```

### 基于 NgModule 的应用

如果您的 Angular 应用仍在使用 NgModule 架构，但您现在希望采用 Ionic UI 组件作为独立组件，请按照以下步骤操作。

1. 运行 `npm install @ionic/angular@latest` 以确保您运行的是最新版本的 Ionic。Ionic UI 独立组件从 Ionic v7.5 或更高版本开始支持。

2. 运行 `npm install ionicons@latest` 以确保您运行的是最新版本的 Ionicons。Ionicons v7.2 带来了可用性改进，减少了在独立组件中使用图标所需的代码样板。

3. 移除 `app.module.ts` 中对 `IonicModule` 的调用，改为使用从 `@ionic/angular/standalone` 导入的 `provideIonicAngular`。传递给 `IonicModule.forRoot` 的任何配置都可以作为对象传递给这个新函数。

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
     * The custom config serves as an example
     * of how to pass a config to provideIonicAngular.
     * You do not need to set "mode: 'ios'" to
     * use Ionic standalone components.
     */
+   provideIonicAngular({ mode: 'ios' }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

4. 移除应用中其他地方对 `IonicModule` 的任何引用。

5. 将从 `@ionic/angular` 导入的语句更新为从 `@ionic/angular/standalone` 导入。

```diff
- import { Platform } from '@ionic/angular';
+ import { Platform } from '@ionic/angular/standalone';
```

6. 在使用每个 Ionic 组件的 Angular 组件的 NgModule 中添加相应的导入。确保将组件传递给模块的 `imports` 数组。

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

例如，所有使用 Ionic 组件的模块都需要在其组件模块中导入 Ionic 组件。

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

7. 如果您正在使用 Ionicons，使用 `addIcons` 在每个 Angular 组件中定义使用的图标 SVG 数据。这样您就可以继续在组件模板中通过字符串名称引用图标。请注意，您需要为添加的任何额外图标执行此操作。`IonIcon` 组件仍应在 NgModule 中提供。

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

8. 从 `angular.json` 文件中移除以下代码（如果存在）。请注意，它可能多次出现。

```diff title="angular.json"
- {
-   "glob": "**/*.svg",
-   "input": "node_modules/ionicons/dist/ionicons/svg",
-   "output": "./svg"
- }
```

9. 如果您正在使用 `routerLink`、`routerDirection` 或 `routerAction`，请确保为 Ionic 组件导入 `IonRouterLink` 指令，或为 `<a>` 元素导入 `IonRouterLinkWithHref` 指令。

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

10. 如果您正在使用 VSCode，建议忽略 `@ionic/angular/common` 和 `@ionic/angular` 模块说明符的导入建议。

```json title=".vscode/settings.json"
{
  "typescript.preferences.autoImportFileExcludePatterns": ["@ionic/angular/common", "@ionic/angular"]
}
```
