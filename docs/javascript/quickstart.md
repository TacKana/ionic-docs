---
title: Ionic JavaScript 快速入门
sidebar_label: 快速入门
---

<head>
  <title>Ionic JavaScript 快速入门：JavaScript 基础知识</title>
  <meta
    name="description"
    content="Ionic JavaScript 快速入门涵盖了 JavaScript 和 Ionic 的基础知识，包括任何 Ionic 特有的功能。学习如何构建 JavaScript 应用。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

欢迎！本指南将引导您了解使用 Vite 进行 Ionic JavaScript 开发的基础知识。您将学习如何设置开发环境、创建一个简单的项目、探索项目结构，并理解 Ionic 组件的工作原理。这是在构建第一个实际应用之前熟悉 Ionic JavaScript 的完美方式。

如果您想了解 Ionic JavaScript 是什么以及它如何融入 Web 开发生态系统的高层概述，请查看 [Ionic JavaScript 概览](overview)。

## 先决条件

在开始之前，请确保您的计算机上已安装 Node.js 和 npm。
可以通过运行以下命令来检查：

```shell
node -v
npm -v
```

如果您没有安装 Node.js 和 npm，请[在此处下载 Node.js](https://nodejs.org/en/download)（其中包含 npm）。

## 使用 Vite 创建项目

首先，使用原生 JavaScript 创建一个新的 Vite 项目：

```shell
npm create vite@latest my-app -- --template vanilla

cd my-app
```

安装项目依赖项和 Ionic Core：

```shell
npm install
npm install @ionic/core
```

安装完成后，启动开发服务器：

```shell
npm run dev
```

打开浏览器并访问控制台中显示的 URL。

## 探索项目结构

您的新应用目录将如下所示：

```shell
├── index.html
└── src/
    ├── counter.js
    ├── main.js
    └── style.css
```

:::warning 删除文件
可以删除 `counter.js` 和 `style.css` 文件。我们不会使用它们。
:::

:::info
以下示例中的所有文件路径都是相对于项目根目录的。
:::

让我们配置项目、初始化 Ionic 并添加组件来创建我们的应用。

## 配置 Vite

安装 `vite-plugin-static-copy` 包：

```shell
npm install vite-plugin-static-copy --save-dev
```

在项目根目录下添加一个 `vite.config.js` 文件，内容如下：

```js title="vite.config.js"
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  optimizeDeps: {
    exclude: ['@ionic/core'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
      external: ['/ionic.esm.js'],
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@ionic/core/dist/ionic/*',
          dest: '',
        },
      ],
    }),
  ],
});
```

这会复制 Capacitor 处理延迟加载 Ionic 组件所需的必要 Ionic 文件。

## 初始化 Ionic

将 `main.js` 的内容替换为以下内容：

```js title="src/main.js"
// 加载 Ionic
(async () => {
  // 将路径设置为变量以防止 Vite 在开发时分析
  const ionicPath = '/ionic.esm.js';
  await import(/* @vite-ignore */ ionicPath);
})();

// Ionic 组件正常工作所需的核心 CSS
import '@ionic/core/css/core.css';

// 使用 Ionic 构建的应用的基础 CSS
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

// 可选的 CSS 工具，可以注释掉
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';
```

这会根据环境初始化 Ionic，然后导入所有可用的 CSS 文件。

## 添加应用组件

更新您的 `index.html` 以配置元数据并使用 Ionic 组件：

```html title="index.html"
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta
      name="viewport"
      content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <title>my-app</title>
  </head>
  <body>
    <ion-app>
      <ion-router>
        <ion-route url="/" component="home-page"></ion-route>
        <ion-route url="/new" component="new-page"></ion-route>
      </ion-router>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>

    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

这设置了应用的根组件，使用了 Ionic 的 `ion-app`、`ion-router` 和 `ion-router-outlet` 组件。关键变化是将默认的 `<div id="app">` 替换为 Ionic 的路由和布局组件。路由器出口是您的页面将显示的地方。

## 查看路由

路由在 `index.html` 中使用 `ion-router` 内的 `ion-route` 组件定义：

```html title="index.html"
<ion-router>
  <ion-route url="/" component="home-page"></ion-route>
  <ion-route url="/new" component="new-page"></ion-route>
</ion-router>
```

当您访问根 URL (`/`) 时，将会加载 `home-page` 组件。当您访问 `/new` URL 时，将会加载 `new-page` 组件。接下来我们将定义这些组件。

## 添加首页

在 `src` 文件夹内创建一个名为 `pages` 的新目录，然后在该目录中添加一个名为 `HomePage.js` 的文件，内容如下：

```js title="src/pages/HomePage.js"
class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title>Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div id="container">
          <strong>准备创建应用了吗？</strong>
          <p>
            从 Ionic
            <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI 组件</a> 开始
          </p>
        </div>
      </ion-content>
    `;
  }
}

customElements.define('home-page', HomePage);
```

这将创建一个名为 `home-page` 的自定义元素，其中包含首页的布局。该页面使用 Ionic 的布局组件创建了一个带有工具栏和可滚动内容区域的标题栏。

:::tip 了解更多
有关 Ionic 布局组件的详细信息，请参阅 [Header](/docs/api/header.md)、[Toolbar](/docs/api/toolbar.md)、[Title](/docs/api/title.md) 和 [Content](/docs/api/content.md) 文档。
:::

接下来，在 `index.html` 中的 `main.js` 导入之前添加一个 `<script>` 标签来导入首页：

```html title="index.html"
<script type="module">
  import './src/pages/HomePage.js';
</script>

<script type="module" src="/src/main.js"></script>
```

此时，您的浏览器应该会显示首页。

![Ionic Core 首页截图](/img/guides/quickstart/unstyled-home-page.png 'Ionic Core 首页组件')

## 添加 Ionic 组件

您可以使用更多 Ionic UI 组件来增强首页。例如，添加一个[按钮](/docs/api/button.md)来导航到另一个页面。更新 `HomePage.js` 中的 `HomePage` 组件：

```js title="src/pages/HomePage.js"
class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title>Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div id="container">
          <strong>准备创建应用了吗？</strong>
          <p>
            从 Ionic
            <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI 组件</a> 开始
          </p>
        </div>

        <ion-button>导航</ion-button>
      </ion-content>
    `;
  }
}

customElements.define('home-page', HomePage);
```

## 添加新页面

在 `src/pages` 中添加一个名为 `NewPage.js` 的新文件，内容如下：

```js title="src/pages/NewPage.js"
class NewPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>New</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h2>欢迎来到新页面！</h2>
      </ion-content>
    `;
  }
}

customElements.define('new-page', NewPage);
```

这将创建一个在[工具栏](/docs/api/toolbar.md)中带有[返回按钮](/docs/api/back-button.md)的页面。返回按钮将自动处理导航回上一页，或者如果没有历史记录则导航到 `/`。

接下来，更新 `index.html` 文件中导入首页的 `<script>` 标签，以同时导入新页面：

```html title="index.html"
<script type="module">
  import './src/pages/HomePage.js';
  import './src/pages/NewPage.js';
</script>
```

## 导航到新页面

要导航到新页面，请将 `HomePage.js` 中的按钮更新为放在 `ion-router-link` 内：

```html title="src/pages/HomePage.js"
<ion-router-link href="/new">
  <ion-button>导航</ion-button>
</ion-router-link>
```

当按钮被点击时，Ionic 的路由器将自动导航到 `/new` 路由并显示 `new-page` 组件。

:::info
导航也可以通过编程方式使用 `document.querySelector('ion-router').push('/new')` 来执行。更多信息请参阅 [Ionic Router 文档](/docs/api/router.md)。
:::

## 为新页面添加图标

Ionic JavaScript 支持 [Ionicons](https://ionic.io/ionicons/)。要使用图标，您需要导入它们，使用 `addIcons` 注册它们，然后通过 `ion-icon` 组件使用它们。

在 `main.js` 中添加必要的导入并注册图标：

```js title="src/main.js"
// ...Ionic 初始化

// 图标导入
import { addIcons } from 'ionicons';
import { heart, logoIonic } from 'ionicons/icons';

addIcons({ heart, logoIonic });

// ...CSS 导入
```

接下来，更新 `NewPage.js` 以包含图标：

```js title="src/pages/NewPage.js"
class NewPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>New</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h2>欢迎来到新页面！</h2>

        <ion-icon name="heart"></ion-icon>
        <ion-icon name="logo-ionic"></ion-icon>
      </ion-content>
    `;
  }
}

customElements.define('new-page', NewPage);
```

更多信息请参阅[图标文档](/docs/api/icon.md)和[Ionicons 文档](https://ionic.io/ionicons/)。

## 调用组件方法

让我们添加一个可以将内容区域滚动到底部的按钮。更新 `NewPage.js` 以包含可滚动内容和滚动按钮：

```js title="src/pages/NewPage.js"
class NewPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>New</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h2>欢迎来到新页面！</h2>

        <ion-icon name="heart"></ion-icon>
        <ion-icon name="logo-ionic"></ion-icon>

        <ion-button id="scroll-btn">滚动到底部</ion-button>

        <!-- 添加大量内容以使滚动成为可能 -->
        <div id="item-list"></div>
      </ion-content>
    `;

    // 在元素连接后生成项目并添加滚动功能
    this.setupScrolling();
  }

  setupScrolling() {
    // 等待 ion-content 准备就绪
    customElements.whenDefined('ion-content').then(() => {
      // 生成项目
      const itemList = this.querySelector('#item-list');
      for (let i = 1; i <= 50; i++) {
        const item = document.createElement('ion-item');
        const label = document.createElement('ion-label');
        label.textContent = `项目 ${i}`;
        item.appendChild(label);
        itemList.appendChild(item);
      }

      // 添加滚动功能
      const scrollBtn = this.querySelector('#scroll-btn');
      const content = this.querySelector('ion-content');

      if (scrollBtn && content) {
        scrollBtn.addEventListener('click', () => {
          content.scrollToBottom(300);
        });
      }
    });
  }
}

customElements.define('new-page', NewPage);
```

要调用 Ionic 组件上的方法：

1. 使用 `querySelector` 获取对组件元素的引用
2. 直接在元素上调用方法

您可以在每个组件的 API 文档的[方法](/docs/api/content.md#methods)部分找到可用的方法。

## 在设备上运行

Ionic 的组件在任何地方都能工作：iOS、Android 和 PWA 上。要部署到移动设备，请使用 [Capacitor](https://capacitorjs.com)：

```shell
npm install @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android
npx cap init

npm run build

npx cap add ios
npx cap add android
```

在各自的 IDE 中打开原生项目：

```shell
npx cap open ios
npx cap open android
```

更多信息请参阅 [Capacitor 入门指南](https://capacitorjs.com/docs/getting-started/with-ionic)。

## 框架集成

Ionic Core 也适用于支持自定义元素的其他框架和库，例如 [Alpine.js](https://alpinejs.dev/)、[Lit](https://lit.dev/) 和 [Svelte](https://svelte.dev/)。但是，当在这些库中使用 Ionic Core 时，您将无法使用与 Ionic 官方 Angular、React 和 Vue 框架集成紧密耦合的内置表单和路由功能，而需要使用它们各自的路由和表单解决方案。

## 深入探索

本指南涵盖了使用 Vite 创建 Ionic JavaScript 应用的基础知识、添加导航以及引入 Capacitor 进行原生构建。要深入了解，请查看：

<DocsCards>

<DocsCard header="Vite 文档" href="https://vite.dev/guide/" icon="/icons/logo-vite-icon.png">
  <p>学习 Ionic JavaScript 应用的高级 Vite 配置和优化技术。</p>
</DocsCard>

<DocsCard
  header="JavaScript 文档"
  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  icon="/icons/logo-javascript-icon.png"
>
  <p>从 MDN Web Docs 了解更多关于 JavaScript 核心概念、工具和最佳实践的信息。</p>
</DocsCard>

<DocsCard header="导航" href="/docs/api/router" icon="/icons/component-navigation-icon.png">
  <p>了解如何使用 Ionic Router 处理 Ionic JavaScript 应用中的路由和导航。</p>
</DocsCard>

<DocsCard header="组件" href="/docs/components" icon="/icons/guide-components-icon.png">
  <p>探索 Ionic 丰富的 UI 组件库，用于构建精美的应用。</p>
</DocsCard>

<DocsCard header="主题" href="/docs/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>学习如何使用 Ionic 强大的主题系统自定义应用的外观和感觉。</p>
</DocsCard>

<DocsCard header="Capacitor 文档" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>探索如何使用 Capacitor 访问原生设备功能并将应用部署到 iOS、Android 和 Web。</p>
</DocsCard>

</DocsCards>