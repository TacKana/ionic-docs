---
title: Ionic 包与 CDN
sidebar_label: 包与 CDN
---

<head>
  <title>Ionic Framework 包：CDN、Angular、Vue、React 和 JavaScript</title>
  <meta
    name="description"
    content="查看我们可用于在测试环境中快速开始使用 Ionic Framework 或 Ionicons CDN 的不同包：Angular、Vue、React 或 JavaScript。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Ionic Framework 提供了用于 Angular、React、Vue 和 JavaScript 的 npm 包，以及用于快速原型开发的 CDN 链接。在下方选择您的框架开始使用，或使用 CDN 在浏览器中测试 Ionic Framework 组件。

## Ionic Angular

启动一个新的 Ionic Angular 应用，或将 Ionic 添加到您现有的 Angular 项目中。

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

启动一个新的 Ionic React 应用，或将 Ionic 添加到您现有的 React 项目中。

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

启动一个新的 Ionic Vue 应用，或将 Ionic 添加到您现有的 Vue 项目中。

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

启动一个新的 Ionic JavaScript 应用。

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

Ionic Framework 可以通过 CDN 引入，以便在 [StackBlitz](https://stackblitz.com/)、[Plunker](https://plnkr.co/)、[Codepen](https://codepen.io) 或任何其他在线代码编辑器中进行快速测试！

建议使用 [jsdelivr](https://www.jsdelivr.com/) 从 CDN 访问 Framework。要获取最新版本，请在 HTML 文件的 `<head>` 元素内或在线代码编辑器中引入外部资源的位置添加以下内容：

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
```

这样，无需安装框架就可以使用所有 Ionic Framework 核心组件。CSS 包将包含所有 Ionic [全局样式表](/layout/global-stylesheets.md)。

## Ionicons CDN

Ionicons 默认包含在 Ionic Framework 中，因此如果您使用 Ionic，则无需额外安装。要在没有 Ionic Framework 的情况下使用 Ionicons，请在页面末尾附近、`</body>` 结束标签之前放置以下 `<script>` 标签。

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"></script>
```

有关使用 Ionicons 的更多信息，请访问 [Ionicons 文档](https://ionic.io/ionicons/usage)。
