---
title: Ionic 包
sidebar_label: 包与 CDN
---

<head>
  <title>Ionic Framework 包：CDN、Angular、Vue 和 React</title>
  <meta
    name="description"
    content="查看我们不同的包，可用于在测试环境、Angular、Vue、React 或不使用任何框架的情况下快速开始使用 Ionic Framework 或 Ionicons CDN。"
  />
</head>

Ionic 提供不同的包，可用于在测试环境、Angular、任何其他框架或不使用任何框架的情况下快速开始使用 Ionic Framework 或 Ionicons。

## Ionic Framework CDN

Ionic Framework 可以通过 CDN 引入，以便在 [Plunker](https://plnkr.co/)、[Codepen](https://codepen.io) 或任何其他在线代码编辑器中进行快速测试！

建议使用 [jsdelivr](https://www.jsdelivr.com/) 从 CDN 访问 Framework。要获取最新版本，请在 HTML 文件的 `<head>` 元素内或在线代码编辑器中引入外部资源的位置添加以下内容：

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
```

这样，无需安装框架就可以使用所有 Ionic Framework 核心组件。CSS 包将包含所有 Ionic [全局样式表](../layout/global-stylesheets)。

:::note
这不会安装 Angular 或任何其他框架。这允许在不使用框架的情况下使用 Ionic Framework 核心组件。
:::

## Ionic + Angular

在 Angular 项目中使用 Ionic Framework 时，请从 [npm](../reference/glossary.md#npm) 安装最新的 `@ionic/angular` 包。该包附带所有 Ionic Framework 组件以及 Angular 特定的服务和功能。

```shell
npm install @ionic/angular@latest --save
```

每次有新的 Ionic Framework 版本发布时，都需要更新此[版本](../reference/versioning.md)以获取最新的功能和修复。你也可以通过 npm [更新版本](../developing/tips.md#updating-dependencies)。

要向已有的 Angular 项目添加 Ionic，请使用 Angular CLI 的 `ng add` 功能。

```shell
ng add @ionic/angular
```

这将添加必要的导入到 `@ionic/angular` 包，并添加所需的样式。

## Ionic + React

要向已有的 React 项目添加 Ionic Framework，请安装 `@ionic/react` 和 `@ionic/react-router` 包。

```shell
$ npm install @ionic/react
$ npm install @ionic/react-router
```

### CSS

要在 React 项目中包含必要的 CSS，请将以下内容添加到根 App 组件中。

```javascript
/* Ionic 组件正常工作所需的核心 CSS */
import '@ionic/react/css/core.css';

/* 使用 Ionic 构建的应用的基本 CSS */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* 可选的 CSS 工具，可注释掉 */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
```

## Ionic + Vue

要向已有的 Vue 项目添加 Ionic Framework，请安装 `@ionic/vue` 和 `@ionic/vue-router` 包。

```shell
npm install @ionic/vue @ionic/vue-router
```

之后，你需要在 Vue 应用中安装 `IonicVue` 插件。

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

确保在 `router.isReady()` 解析完成后挂载你的应用。

### 路由

在 Vue 应用中设置路由时，你需要从 `@ionic/vue-router` 而不是 `vue-router` 导入依赖项。

**router/index.js**

```javascript
import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  // 路由配置
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

### CSS

要在 Vue 项目中包含必要的 CSS，请将以下内容添加到你的 `main.js` 文件中。

```javascript
/* Ionic 组件正常工作所需的核心 CSS */
import '@ionic/vue/css/core.css';

/* 使用 Ionic 构建的应用的基本 CSS */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* 可选的 CSS 工具，可注释掉 */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
```

从这里，你可以通过我们的 [Ionic Vue 快速入门指南](https://ionicframework.com/docs/vue/quickstart)了解如何使用 Ionic Framework 进行开发。

## Ionicons CDN

Ionicons 默认随 Ionic Framework 一起打包，因此如果你使用 Ionic，则无需安装。要在不使用 Ionic Framework 的情况下使用 Ionicons，请在页面末尾、关闭 `</body>` 标签之前放置以下 `<script>`。

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"></script>
```

:::note
有关使用 Ionicons 的更多信息，请参阅 [Ionicons 使用说明](https://ionic.io/ionicons/usage)。
:::
