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

Ionic 提供了不同的包，可用于在测试环境、Angular、任何其他框架或不使用任何框架的情况下快速开始使用 Ionic Framework 或 Ionicons。

## Ionic Framework CDN

Ionic Framework 可以通过 CDN 引入，以便在 [Plunker](https://plnkr.co/)、[Codepen](https://codepen.io) 或任何其他在线代码编辑器中进行快速测试！

推荐使用 [jsdelivr](https://www.jsdelivr.com/) 从 CDN 访问 Framework。要获取最新版本，请在 HTML 文件的 `<head>` 元素内或在线代码编辑器中引入外部资源的位置添加以下内容：

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
```

如此一来，无需安装框架即可使用所有 Ionic Framework 核心组件。CSS 捆绑包将包含所有 Ionic [全局样式表](../layout/global-stylesheets)。

:::note
这不会安装 Angular 或任何其他框架。这样可以在没有框架的情况下使用 Ionic Framework 核心组件。
:::

## Ionic + Angular

在 Angular 项目中使用 Ionic Framework 时，请从 [npm](../reference/glossary.md#npm) 安装最新的 `@ionic/angular` 包。这包含了所有 Ionic Framework 组件以及 Angular 特定的服务和功能。

```shell
npm install @ionic/angular@latest --save
```

每次有新的 Ionic Framework 发布时，都需要更新此[版本](../reference/versioning.md)以获取最新的功能和修复。也可以[使用 npm 更新版本](../developing/tips.md#更新依赖)。

要将 Ionic 添加到已有的 Angular 项目中，请使用 Angular CLI 的 `ng add` 功能。

```shell
ng add @ionic/angular
```

这将添加 `@ionic/angular` 包的必要导入以及所需的样式。

## Ionic + React

要将 Ionic Framework 添加到已有的 React 项目中，请安装 `@ionic/react` 和 `@ionic/react-router` 包。

```shell
$ npm install @ionic/react
$ npm install @ionic/react-router
```

### CSS

要在 React 项目中引入必要的 CSS，请在根 App 组件中添加以下内容。

```javascript
/* Ionic 组件正常工作所需的核心 CSS */
import '@ionic/react/css/core.css';

/* 使用 Ionic 构建的应用的基本 CSS */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* 可选的 CSS 工具，可按需注释掉 */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
```

## Ionic + Vue

要将 Ionic Framework 添加到已有的 Vue 项目中，请安装 `@ionic/vue` 和 `@ionic/vue-router` 包。

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

请确保在 `router.isReady()` 解析完成后才挂载您的应用。

### 路由

在 Vue 应用中设置路由时，您需要从 `@ionic/vue-router` 而非 `vue-router` 导入依赖。

**router/index.js**

```javascript
import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  // 路由配置写在这里
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

### CSS

要在 Vue 项目中引入必要的 CSS，请在 `main.js` 文件中添加以下内容。

```javascript
/* Ionic 组件正常工作所需的核心 CSS */
import '@ionic/vue/css/core.css';

/* 使用 Ionic 构建的应用的基本 CSS */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* 可选的 CSS 工具，可按需注释掉 */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
```

从这里，您可以在我们的 [Ionic Vue 快速入门指南](https://ionicframework.com/docs/vue/quickstart)中了解如何使用 Ionic Framework 进行开发。

## Ionicons CDN

Ionicons 默认随 Ionic Framework 一起打包，因此如果您使用 Ionic，则无需额外安装。要在没有 Ionic Framework 的情况下使用 Ionicons，请在页面末尾、`</body>` 关闭标签之前放置以下 `<script>` 标签。

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"></script>
```

:::note
请参阅 [Ionicons 使用说明](https://ionic.io/ionicons/usage)了解更多关于使用 Ionicons 的信息。
:::
