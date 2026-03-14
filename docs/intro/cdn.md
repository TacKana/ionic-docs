---
title: Ionic 软件包与 CDN
sidebar_label: 软件包与 CDN
---

<head>
  <title>Ionic Framework 软件包：CDN、Angular、Vue、React 与 JavaScript</title>
  <meta
    name="description"
    content="查看我们提供的不同软件包，它们可以用于在测试环境、Angular、Vue、React 或 JavaScript 项目中快速开始使用 Ionic Framework 或 Ionicons CDN。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Ionic Framework 为 Angular、React、Vue 和 JavaScript 提供了 npm 软件包，同时还提供了用于快速原型的 CDN 链接。请选择下方您要使用的框架开始使用，或者使用 CDN 在浏览器中测试 Ionic Framework 组件。

## Ionic Angular

开始一个新的 Ionic Angular 应用，或将 Ionic 添加到您现有的 Angular 项目中。

<DocsCards>

<DocsCard
  header="新建 Angular 项目"
  href="../angular/quickstart"
  iconset="/icons/logo-angular-icon.png,/icons/guide-quickstart-icon.png"
>
  <p>使用 Ionic CLI 创建一个新的 Ionic Angular 应用。</p>
</DocsCard>

<DocsCard
  header="现有 Angular 项目"
  href="../angular/add-to-existing"
  iconset="/icons/logo-angular-icon.png,/icons/guide-package-icon.png"
>
  <p>将 Ionic Angular 添加到现有的 Angular 项目中。</p>
</DocsCard>

</DocsCards>

## Ionic React

开始一个新的 Ionic React 应用，或将 Ionic 添加到您现有的 React 项目中。

<DocsCards>

<DocsCard
  header="新建 React 项目"
  href="../react/quickstart"
  iconset="/icons/logo-react-icon.png,/icons/guide-quickstart-icon.png"
>
  <p>使用 Ionic CLI 创建一个新的 Ionic React 应用。</p>
</DocsCard>

<DocsCard
  header="现有 React 项目"
  href="../react/add-to-existing"
  iconset="/icons/logo-react-icon.png,/icons/guide-package-icon.png"
>
  <p>将 Ionic React 添加到现有的 React 项目中。</p>
</DocsCard>

</DocsCards>

## Ionic Vue

开始一个新的 Ionic Vue 应用，或将 Ionic 添加到您现有的 Vue 项目中。

<DocsCards>

<DocsCard
  header="新建 Vue 项目"
  href="../vue/quickstart"
  iconset="/icons/logo-vue-icon.png,/icons/guide-quickstart-icon.png"
>
  <p>使用 Ionic CLI 创建一个新的 Ionic Vue 应用。</p>
</DocsCard>

<DocsCard
  header="现有 Vue 项目"
  href="../vue/add-to-existing"
  iconset="/icons/logo-vue-icon.png,/icons/guide-package-icon.png"
>
  <p>将 Ionic Vue 添加到现有的 Vue 项目中。</p>
</DocsCard>

</DocsCards>

## Ionic JavaScript

开始一个新的 Ionic JavaScript 应用。

<DocsCards>

<DocsCard
  header="新建 JavaScript 项目"
  href="../javascript/quickstart"
  iconset="/icons/logo-javascript-icon.png,/icons/guide-quickstart-icon.png"
>
  <p>使用 Vite 创建一个新的 Ionic JavaScript 应用。</p>
</DocsCard>

</DocsCards>

## Ionic Framework CDN

可以从 CDN 引入 Ionic Framework，以便在 [StackBlitz](https://stackblitz.com/)、[Plunker](https://plnkr.co/)、[Codepen](https://codepen.io) 或任何其他在线代码编辑器中进行快速测试！

推荐使用 [jsdelivr](https://www.jsdelivr.com/) 从 CDN 获取框架。要获取最新版本，请在 HTML 文件的 `<head>` 元素内，或者在线代码编辑器中引入外部资源的位置添加以下代码：

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
```

通过这种方式，您无需安装任何框架即可使用所有 Ionic Framework 核心组件。CSS 包将包含所有 Ionic [全局样式表](/docs/layout/global-stylesheets.md)。

## Ionicons CDN

Ionic Framework 默认已打包了 Ionicons，因此如果您正在使用 Ionic，就无需单独安装。要在不使用 Ionic Framework 的情况下使用 Ionicons，请将以下 `<script>` 标签放置在页面末尾，紧邻闭合的 `</body>` 标签之前。

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"></script>
```

有关使用 Ionicons 的更多信息，请访问 [Ionicons 文档](https://ionic.io/ionicons/usage)。