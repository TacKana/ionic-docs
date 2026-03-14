---
title: Ionic 软件包
sidebar_label: 软件包与 CDN
---

<head>
  <title>Ionic Framework 软件包：CDN、Angular、Vue 和 React</title>
  <meta
    name="description"
    content="查看我们提供的不同软件包，这些软件包可用于在测试环境、Angular、Vue、React 或无框架项目中快速开始使用 Ionic Framework 或 Ionicons CDN。"
  />
</head>

Ionic 提供了不同的软件包，可用于在测试环境、Angular、其他框架或无框架项目中快速开始使用 Ionic Framework 或 Ionicons。

## Ionic Framework CDN

Ionic Framework 可以通过 CDN 引入，以便在 [Plunker](https://plnkr.co/)、[Codepen](https://codepen.io) 或其他在线代码编辑器中进行快速测试！

建议使用 [jsdelivr](https://www.jsdelivr.com/) 从 CDN 获取框架。要获取最新版本，请在 HTML 文件的 `<head>` 元素内或在线代码编辑器中包含外部资源的位置添加以下内容：

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
```

通过这种方式，您可以使用所有 Ionic Framework 核心组件，而无需安装任何框架。CSS 包将包含所有的 Ionic [全局样式表](../layout/global-stylesheets)。

:::note
这种方式不会安装 Angular 或其他任何框架。它允许您在没有框架的情况下使用 Ionic Framework 核心组件。
:::

## Ionic + Angular

在 Angular 项目中使用 Ionic Framework 时，请从 [npm](../reference/glossary.md#npm) 安装最新的 `@ionic/angular` 软件包。该软件包包含了所有 Ionic Framework 组件以及 Angular 特定的服务和功能。

```shell
npm install @ionic/angular@latest --save
```

每次 Ionic Framework 发布新版本时，都需要更新此[版本](../reference/versioning.md)以获取最新的功能和修复。版本也可以通过 [npm 进行更新](../developing/tips.md#updating-dependencies)。

要将 Ionic 添加到现有的 Angular 项目中，可以使用 Angular CLI 的 `ng add` 功能。

```shell
ng add @ionic/angular
```

这将添加对 `@ionic/angular` 软件包的必要导入，并添加所需的样式。

## Ionic + React

要将 Ionic Framework 添加到现有的 React 项目中，请安装 `@ionic/react` 和 `@ionic/react-router` 软件包。

```shell
$ npm install @ionic/react
$ npm install @ionic/react-router
```

### CSS

要在 React 项目中包含必要的 CSS，请将以下内容添加到根 App 组件中。

```javascript
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
```

## Ionic + Vue

要将 Ionic Framework 添加到现有的 Vue 项目中，请安装 `@ionic/vue` 和 `@ionic/vue-router` 软件包。

```shell
npm install @ionic/vue @ionic/vue-router
```

之后，您需要在 Vue 应用中安装 `IonicVue` 插件。

**main.js**

```javascript
import { IonicVue } from '@ionic/vue';

import App from './App.vue';
import router from './router';

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
```

请确保在 `router.isReady()` 解析完成后再挂载您的应用。

### 路由

在 Vue 应用中设置路由时，您需要从 `@ionic/vue-router` 导入依赖项，而不是从 `vue-router` 导入。

**router/index.js**

```javascript
import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  // 路由定义放在这里
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

### CSS

要在 Vue 项目中包含必要的 CSS，请将以下内容添加到您的 `main.js` 文件中。

```javascript
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
```

从这里开始，您可以在我们的 [Ionic Vue 快速入门指南](https://ionicframework.com/docs/vue/quickstart) 中了解如何使用 Ionic Framework 进行开发。

## Ionicons CDN

Ionicons 默认与 Ionic Framework 打包在一起，因此如果您正在使用 Ionic，则无需额外安装。要在没有 Ionic Framework 的情况下使用 Ionicons，请将以下 `<script>` 标签放在页面末尾，紧邻闭合的 `</body>` 标签之前。

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"></script>
```

:::note
有关使用 Ionicons 的更多信息，请参阅 [Ionicons 使用指南](https://ionic.io/ionicons/usage)。
:::