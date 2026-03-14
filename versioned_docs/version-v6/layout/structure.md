---
title: Structure
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>结构布局 | Ionic 应用内容布局结构</title>
  <meta
    name="description"
    content="Ionic 提供了多种不同的布局，可用于构建应用及其内容——从单页布局到分屏视图和模态框。"
  />
</head>

Ionic 框架提供了多种不同的布局，可用于构建应用程序。从单页布局到分屏视图和模态框，一应俱全。

## 页眉和页脚布局

### 页眉

<aside>
  <DocsCard href="../api/header" header="了解更多" icon="/icons/component-header-icon.png">
    <code>ion-header</code> API 文档
  </DocsCard>
</aside>

最简单的布局由[页眉](../api/header.md)和[内容区](../api/content.md)组成。应用中大多数页面通常都包含这两部分，但使用内容区并不一定需要页眉。

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Header</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <h1>Main Content</h1>
  </ion-content>
</ion-app>
```

### 页脚

<aside>
  <DocsCard href="../api/footer" header="了解更多" icon="/icons/component-footer-icon.png">
    <code>ion-footer</code> API 文档
  </DocsCard>
</aside>

如你所见，页眉中的工具栏位于内容区上方。有时应用需要在内容区下方显示工具栏，这时就需要使用页脚。

```html
<ion-app>
  <ion-content class="ion-padding">
    <h1>Main Content</h1>
  </ion-content>

  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</ion-app>
```

### 页眉和页脚组合

两者也可以结合在同一页面上，从而在内容区**上方和下方**都显示工具栏。

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Header</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <h1>Main Content</h1>
  </ion-content>

  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</ion-app>
```

### 在线示例

你可以在 Angular [这里](https://stackblitz.com/edit/ionic-ng-header-footer) 和 React [这里](https://stackblitz.com/edit/ionic-react-head-foot) 查看此设置的在线示例。

## 标签页布局

由水平[标签页](../api/tabs.md)组成的布局可用于让用户快速切换不同的内容视图。每个标签页可以包含静态内容，或者通过使用 `ion-router-outlet` 或 `ion-nav` 来承载一个导航栈。

```html
<ion-app>
  <ion-tabs>
    <ion-tab tab="home">
      <h1>Home Content</h1>
    </ion-tab>
    <ion-tab tab="settings">
      <h1>Settings Content</h1>
    </ion-tab>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home">
        <ion-label>Home</ion-label>
        <ion-icon name="home"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="settings">
        <ion-label>Settings</ion-label>
        <ion-icon name="settings"></ion-icon>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</ion-app>
```

### 在线示例

你可以在 Angular [这里](https://stackblitz.com/edit/ionic-ng-tabs) 和 React [这里](https://stackblitz.com/edit/ionic-react-tab-layout) 查看此设置的在线示例。

## 侧边菜单布局

移动应用中一种常见的标准布局是能够通过点击按钮或从侧边滑出，来切换显示侧边[菜单](../api/menu.md)。侧边菜单通常用于导航，但它们也可以包含任何内容。

```html
<ion-app>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header> Navigate </ion-list-header>
        <ion-menu-toggle auto-hide="false">
          <ion-item button>
            <ion-icon slot="start" name="home"></ion-icon>
            <ion-label> Home </ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-page class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-toggle>
            <ion-button>
              <ion-icon slot="icon-only" name="menu"></ion-icon>
            </ion-button>
          </ion-menu-toggle>
        </ion-buttons>
        <ion-title>Header</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Main Content</h1>
      <p>点击左上角的图标以切换菜单。</p>
    </ion-content>
  </ion-page>
</ion-app>

<ion-menu-controller></ion-menu-controller>
```

### 在线示例

你可以在 Angular [这里](https://stackblitz.com/edit/ionic-ng-menu-layout) 和 React [这里](https://stackblitz.com/edit/ionic-react-menu) 查看此设置的在线示例。

## 分屏布局

[分屏](../api/split-pane.md)布局的结构更为复杂，因为它可以结合之前的布局方式。当视口宽度大于指定断点时，它允许多个视图同时显示。如果设备屏幕尺寸小于特定大小，分屏视图则会隐藏。

默认情况下，当屏幕大于 `768px`（即 `md` 断点）时，分屏视图才会显示。但可以通过设置 `when` 属性来自定义，以使用不同的断点。下面是一个示例，其中分屏包含一个菜单，该菜单在 `sm` 及以上屏幕尺寸（即视口宽度大于 `576px`）时可见。通过水平调整浏览器窗口大小，使应用小于此宽度时，分屏视图将会消失。

```html
<ion-app>
  <ion-split-pane when="sm" content-id="main-content">
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <ion-list-header> Navigate </ion-list-header>
          <ion-menu-toggle auto-hide="false">
            <ion-item button>
              <ion-icon slot="start" name="home"></ion-icon>
              <ion-label> Home </ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>

    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-toggle>
              <ion-button>
                <ion-icon slot="icon-only" name="menu"></ion-icon>
              </ion-button>
            </ion-menu-toggle>
          </ion-buttons>
          <ion-title>Header</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h1>Main Content</h1>
      </ion-content>
    </div>
  </ion-split-pane>
</ion-app>
```

需要注意的是，`id` 与分屏指定的 `content-id` 相匹配的元素，将作为始终可见的主要内容区。这可以是任何元素，包括 [ion-nav](../api/nav.md)、[ion-router-outlet](../api/router-outlet.md) 或 [ion-tabs](../api/tabs.md)。

### 在线示例

你可以在 Angular [这里](https://stackblitz.com/edit/ionic-ng-split-pane) 和 React [这里](https://stackblitz.com/edit/ionic-react-split-pane) 查看此设置的在线示例。