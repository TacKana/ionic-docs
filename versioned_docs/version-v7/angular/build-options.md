# 构建选项

开发者有两种使用 Ionic 组件的选项：独立组件模式或模块模式。本指南涵盖了这两种选项以及每种方法的优缺点。

虽然独立组件模式较新并使用了更现代的 Angular API，但 Ionic 将继续支持模块模式。本文档网站上的大多数 Angular 示例都使用模块模式。

## 独立组件模式

:::info
从 Ionic v7.5 开始支持将 Ionic UI 组件作为 Angular 独立组件使用。
:::

### 概述

开发者可以将 Ionic 组件作为独立组件使用，以利用摇树优化和更新的 Angular 特性。此选项涉及在要使用它们的 Angular 组件中导入特定的 Ionic 组件。即使您的 Angular 应用程序是基于 NgModule 的，开发者也可以使用 Ionic 独立组件。

有关如何更新您的 Ionic 应用程序以使用 Ionic 独立组件的说明，请参阅[从模块模式迁移到独立组件模式指南](#从模块模式迁移到独立组件模式)。

**优点**

1.  启用摇树优化，因此最终构建输出仅包含运行应用程序所需的代码，从而减少总体构建大小。
2.  避免使用 NgModules，以简化开发体验并使代码更易于理解。
3.  允许开发者同时使用更新的 Angular 特性，例如 [ESBuild](https://angular.io/guide/esbuild)。

**缺点**

1.  Ionic 组件需要导入到使用它们的每个 Angular 组件中，这可能会耗费时间进行设置。

### 在基于独立组件的应用程序中使用

:::caution
所有 Ionic 导入都应从 `@ionic/angular/standalone` 子模块导入。这包括组件、指令、提供者和类型等导入。从 `@ionic/angular` 导入可能会引入延迟加载的 Ionic 代码，这可能会干扰摇树优化。
:::

**引导和配置**

当 Angular 应用程序使用 `provideIonicAngular` 函数调用 `bootstrapApplication` 时，需要配置 Ionic Angular。开发者可以在此函数中将任何 [IonicConfig](../developing/config#ionicconfig) 值作为对象传递。请注意，即使未传递自定义配置，也需要调用 `provideIonicAngular`。

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

在下面的示例中，我们从 `@ionic/angular/standalone` 导入 `IonContent` 和 `IonButton`，并将它们传递给 `imports` 以在组件模板中使用。如果未导入这些组件并提供给 `imports` 数组，我们将收到编译器错误。

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

需要在 Angular 组件中定义图标 SVG 数据，以便正确加载。开发者可以使用 `ionicons` 中的 `addIcons` 函数将 SVG 数据映射到字符串名称。然后，开发者可以使用 `IonIcon` 上的 `name` 属性通过其字符串名称引用图标。

我们建议在 Angular 组件 `constructor` 中调用 `addIcons`，这样只有在使用 Angular 组件时才会添加数据。

对于使用 Ionicons 7.2 或更新版本的开发者，仅传递 SVG 数据将自动生成字符串名称。

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
     * 在 Ionicons 7.2+ 上，此图标
     * 被映射到 "logo-ionic" 键。
     * 或者，开发者可以执行：
     * addIcons({ 'logo-ionic': logoIonic });
     */
    addIcons({ logoIonic });
  }
}
```

图标也可以在入口点（如 `app.component.ts`）中注册，以避免多次调用 `addIcons`。开发者应注意，初始应用程序块可能会增加，因为需要在应用程序启动时加载已注册的图标。但是，如果您的应用程序使用少量图标，则此影响可能很小。

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
     * 您想要在应用程序中使用的任何图标
     * 都可以在 app.component.ts 中注册，然后
     * 在应用程序的任何位置按名称引用。
     */
    addIcons({ logoIonic });
  }
}
```

在应用程序入口点注册的图标可以在应用程序中的任何位置按名称引用。

```html title="home.page.html"
<!--
  logoIonic 是在 app.component.ts 而不是 home.page.ts 中注册的，
  但它仍然可以在 home.page.html 中使用。
-->
<ion-icon name="logo-ionic"></ion-icon>
```

**路由**

希望在 Ionic 组件上使用 `routerLink`、`routerAction` 或 `routerDirection` 的开发者应导入 `IonRouterLink` 指令。希望在锚点（`<a>`）元素上使用这些路由特性的开发者应导入 `IonRouterLinkWithHref`。

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
    RouterLink, // 需要获取 @angular/router 的基本 routerLink 行为
    IonRouterLink, // 如果您使用的是 <a> 元素，请改用 IonRouterLinkWithHref
  ],
})
export class HomePage {}
```

```html title="home.page.html"
<ion-button routerLink="/foo" routerDirection="root">前往 Foo 页面</ion-button>
```

### 在基于 NgModule 的应用程序中使用

:::caution
所有 Ionic 导入都应从 `@ionic/angular/standalone` 子模块导入。这包括组件、指令、提供者和类型等导入。从 `@ionic/angular` 导入可能会引入延迟加载的 Ionic 代码，这可能会干扰摇树优化。
:::

**引导和配置**

需要在 `app.module.ts` 的 `providers` 数组中使用 `provideIonicAngular` 函数配置 Ionic Angular。开发者可以在此函数中将任何 [IonicConfig](../developing/config#ionicconfig) 值作为对象传递。请注意，即使未传递自定义配置，也需要调用 `provideIonicAngular`。

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

在下面的示例中，我们从 `@ionic/angular/standalone` 导入 `IonContent` 和 `IonButton`，并将它们传递给 Angular 组件 NgModule 中的 `imports` 数组，以在组件模板中使用。如果未导入这些组件并提供给 `imports` 数组，我们将收到编译器错误。

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

需要在 Angular 组件中定义图标 SVG 数据，以便正确加载。开发者可以使用 `ionicons` 中的 `addIcons` 函数将 SVG 数据映射到字符串名称。然后，开发者可以使用 `IonIcon` 上的 `name` 属性通过其字符串名称引用图标。`IonIcon` 组件应像其他 Ionic 组件一样在 `app.module.ts` 中添加。

我们建议在 Angular 组件 `constructor` 中调用 `addIcons`，这样只有在使用 Angular 组件时才会添加数据。

对于使用 Ionicons 7.2 或更新版本的开发者，仅传递 SVG 数据将自动生成字符串名称。

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
     * 在 Ionicons 7.2+ 上，此图标
     * 被映射到 "logo-ionic" 键。
     * 或者，开发者可以执行：
     * addIcons({ 'logo-ionic': logoIonic });
     */
    addIcons({ logoIonic });
  }
}
```

图标也可以在入口点（如 `app.component.ts`）中注册，以避免多次调用 `addIcons`。开发者应注意，初始应用程序块可能会增加，因为需要在应用程序启动时加载已注册的图标。但是，如果您的应用程序使用少量图标，则此影响可能很小。

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
     * 您想要在应用程序中使用的任何图标
     * 都可以在 app.component.ts 中注册，然后
     * 在应用程序的任何位置按名称引用。
     */
    addIcons({ logoIonic });
  }
}
```

在应用程序入口点注册的图标可以在应用程序中的任何位置按名称引用。

```html title="home.page.html"
<!--
  logoIonic 是在 app.component.ts 而不是 home.page.ts 中注册的，
  但它仍然可以在 home.page.html 中使用。
-->
<ion-icon name="logo-ionic"></ion-icon>
```

**路由**

希望在 Ionic 组件上使用 `routerLink`、`routerAction` 或 `routerDirection` 的开发者应导入 `IonRouterLink` 指令。希望在锚点（`<a>`）元素上使用这些路由特性的开发者应导入 `IonRouterLinkWithHref`。

```typescript title="home.module.ts"
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    IonButton,
    RouterLink, // 需要获取 @angular/router 的基本 routerLink 行为
    IonRouterLink, // 如果您使用的是 <a> 元素，请改用 IonRouterLinkWithHref
    HomePageRoutingModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
```

```html title="home.page.html"
<ion-button routerLink="/foo" routerDirection="root">前往 Foo 页面</ion-button>
```

## 模块模式

### 概述

开发者还可以使用模块模式，方法是在 `app.module.ts` 的 `imports` 数组中导入 `IonicModule` 并调用 `IonicModule.forRoot()`。这会注册一个 Ionic 版本，其中 Ionic 组件将在运行时延迟加载。

**优点**

1.  由于组件是按需延迟加载的，开发者无需花费时间手动导入和注册每个 Ionic 组件。

**缺点**

1.  延迟加载 Ionic 组件意味着编译器在构建时不知道需要哪些组件。这意味着您的最终应用程序包可能比实际需要的要大得多。
2.  开发者无法使用更新的 Angular 特性，例如 [ESBuild](https://angular.io/guide/esbuild)。

### 用法

在下面的示例中，我们使用 `IonicModule` 创建一个延迟加载版本的 Ionic。然后我们可以引用任何 Ionic 组件，而无需显式导入它。

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

## 从模块模式迁移到独立组件模式

:::tip
尝试我们用于迁移到独立组件的自动化工具！

有关如何开始的说明，请参阅 https://github.com/ionic-team/ionic-angular-standalone-codemods。与迁移工具相关的所有问题都应归档到链接的仓库中。
:::

独立组件选项比模块选项更新，因此开发者可能希望在应用程序开发过程中进行切换。本指南详细说明了迁移所需的步骤。

迁移到 Ionic 独立组件必须同时完成，不能逐步进行。模块模式和独立组件模式使用 Ionic 的两个不同构建系统，不能同时使用。

鼓励开发者尝试[自动化迁移工具](https://github.com/ionic-team/ionic-angular-standalone-codemods)，但如果他们想手动迁移应用程序，也可以按照以下步骤操作。

### 基于独立组件的应用程序

如果您的 Angular 应用程序已经使用独立组件架构，并且您现在也想将 Ionic UI 组件用作独立组件，请按照以下步骤操作。

1.  运行 `npm install @ionic/angular@latest` 以确保您运行的是最新版本的 Ionic。Ionic v7.5 或更新版本支持 Ionic UI 独立组件。

2.  运行 `npm install ionicons@latest` 以确保您运行的是最新版本的 Ionicons。Ionicons v7.2 带来了可用性改进，减少了将图标与独立组件一起使用所需的代码样板。

3.  删除 `main.ts` 中的 `IonicModule` 调用，改用从 `@ionic/angular/standalone` 导入的 `provideIonicAngular`。传递给 `IonicModule.forRoot` 的任何配置都可以作为对象传递给这个新函数。

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
     * 自定义配置作为示例
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

4.  删除应用程序中其他任何地方对 `IonicModule` 的引用。

5.  将任何从 `@ionic/angular` 的现有导入更新为从 `@ionic/angular/standalone` 导入。

```diff
- import { Platform } from '@ionic/angular';
+ import { Platform } from '@ionic/angular/standalone';
```

6.  在使用它们的每个 Angular 组件中添加对每个 Ionic 组件的导入。确保将导入传递给 Angular 组件上的 `imports` 数组。

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

7.  如果您正在使用 Ionicons，请使用 `addIcons` 在每个 Angular 组件中定义使用的图标 SVG 数据。这允许您继续在组件模板中通过字符串名称引用图标。请注意，您需要对添加的任何其他图标执行此操作。

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

8.  如果存在，请从您的 `angular.json` 文件中删除以下代码。请注意，它可能出现多次。

```diff title="angular.json"
- {
-   "glob": "**/*.svg",
-   "input": "node_modules/ionicons/dist/ionicons/svg",
-   "output": "./svg"
- }
```

9.  如果您使用 `routerLink`、`routerDirection` 或 `routerAction`，请确保为 Ionic 组件导入 `IonRouterLink` 指令，或为 `<a>` 元素导入 `IonRouterLinkWithHref` 指令。

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

10. 如果您使用 VSCode，建议忽略 `@ionic/angular/common` 和 `@ionic/angular` 模块说明符以获取导入建议。

```json title=".vscode/settings.json"
{
  "typescript.preferences.autoImportFileExcludePatterns": ["@ionic/angular/common", "@ionic/angular"]
}
```

### 基于 NgModule 的应用程序

如果您的 Angular 应用程序仍在使用 NgModule 架构，但您现在想采用 Ionic UI 组件作为独立组件，请按照以下步骤操作。

1.  运行 `npm install @ionic/angular@latest` 以确保您运行的是最新版本的 Ionic。Ionic v7.5 或更新版本支持 Ionic UI 独立组件。

2.  运行 `npm install ionicons@latest` 以确保您运行的是最新版本的 Ionicons。Ionicons v7.2 带来了可用性改进，减少了将图标与独立组件一起使用所需的代码样板。

3.  删除 `app.module.ts` 中的 `IonicModule` 调用，改用从 `@ionic/angular/standalone` 导入的 `provideIonicAngular`。传递给 `IonicModule.forRoot` 的任何配置都可以作为对象传递给这个新函数。

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
     * 自定义配置作为示例
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

4.  删除应用程序中其他任何地方对 `IonicModule` 的引用。

5.  将任何从 `@ionic/angular` 的现有导入更新为从 `@ionic/angular/standalone` 导入。

```diff
- import { Platform } from '@ionic/angular';
+ import { Platform } from '@ionic/angular/standalone';
```

6.  在使用它们的 Angular 组件的 NgModule 中添加对每个 Ionic 组件的导入。确保将组件传递给模块上的 `imports` 数组。

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

7.  如果您正在使用 Ionicons，请使用 `addIcons` 在每个 Angular 组件中定义使用的图标 SVG 数据。这允许您继续在组件模板中通过字符串名称引用图标。请注意，您需要对添加的任何其他图标执行此操作。`IonIcon` 组件仍应在 NgModule 中提供。

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

8.  如果存在，请从您的 `angular.json` 文件中删除以下代码。请注意，它可能出现多次。

```diff title="angular.json"
- {
-   "glob": "**/*.svg",
-   "input": "node_modules/ionicons/dist/ionicons/svg",
-   "output": "./svg"
- }
```

9.  如果您使用 `routerLink`、`routerDirection` 或 `routerAction`，请确保为 Ionic 组件导入 `IonRouterLink` 指令，或为 `<a>` 元素导入 `IonRouterLinkWithHref` 指令。

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

10. 如果您使用 VSCode，建议忽略 `@ionic/angular/common` 和 `@ionic/angular` 模块说明符以获取导入建议。

```json title=".vscode/settings.json"
{
  "typescript.preferences.autoImportFileExcludePatterns": ["@ionic/angular/common", "@ionic/angular"]
}
```