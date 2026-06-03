---
title: 结构
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>结构布局 | Ionic 应用内容布局的结构</title>
  <meta
    name="description"
    content="Ionic 提供了几种不同的布局，可用于构建应用及其内容——从单页面布局到拆分窗格视图和模态框。"
  />
</head>

Ionic Framework 提供了几种不同的布局，可用于构建应用。从单页面布局到拆分窗格视图和模态框。

## 页眉和页脚布局

### 页眉

<aside>
  <DocsCard href="../api/header" header="了解更多" icon="/icons/component-header-icon.png">
    <code>ion-header</code> API 文档
  </DocsCard>
</aside>

最简单的可用布局包括[页眉](../api/header.md)和[内容](../api/content.md)。应用中的大多数页面通常都有这两者，但使用内容并不一定需要页眉。

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>页眉</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <h1>主要内容</h1>
  </ion-content>
</ion-app>
```

### 页脚

<aside>
  <DocsCard href="../api/footer" header="了解更多" icon="/icons/component-footer-icon.png">
    <code>ion-footer</code> API 文档
  </DocsCard>
</aside>

如你所见，页眉中的工具栏出现在内容上方。有时应用需要在内容下方有一个工具栏，这时就会使用页脚。

```html
<ion-app>
  <ion-content class="ion-padding">
    <h1>主要内容</h1>
  </ion-content>

  <ion-footer>
    <ion-toolbar>
      <ion-title>页脚</ion-title>
    </ion-toolbar>
  </ion-footer>
</ion-app>
```

### 页眉和页脚

这些也可以在一个页面上组合使用，在内容的上方_和_下方都有工具栏。

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>页眉</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <h1>主要内容</h1>
  </ion-content>

  <ion-footer>
    <ion-toolbar>
      <ion-title>页脚</ion-title>
    </ion-toolbar>
  </ion-footer>
</ion-app>
```

### 在线示例

你可以在此处查看 Angular 中的[在线示例](https://stackblitz.com/edit/ionic-ng-header-footer)，以及 React 中的[在线示例](https://stackblitz.com/edit/ionic-react-head-foot)。

## 标签页布局

一个由水平[标签页](../api/tabs.md)组成的布局可用于让用户在内容视图之间快速切换。每个标签页可以包含静态内容，也可以通过使用 `ion-router-outlet` 或 `ion-nav` 包含导航栈。

```html
<ion-app>
  <ion-tabs>
    <ion-tab tab="home">
      <h1>首页内容</h1>
    </ion-tab>
    <ion-tab tab="settings">
      <h1>设置内容</h1>
    </ion-tab>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home">
        <ion-label>首页</ion-label>
        <ion-icon name="home"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="settings">
        <ion-label>设置</ion-label>
        <ion-icon name="settings"></ion-icon>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</ion-app>
```

### 在线示例

你可以在此处查看 Angular 中的[在线示例](https://stackblitz.com/edit/ionic-ng-tabs)，以及 React 中的[在线示例](https://stackblitz.com/edit/ionic-react-tab-layout)。

## 菜单布局

移动应用中的一种标准布局包括通过点击按钮或从侧边滑动来切换侧边[菜单](../api/menu.md)的功能。侧边菜单通常用于导航，但也可以包含任何内容。

```html
<ion-app>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>菜单</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header> 导航 </ion-list-header>
        <ion-menu-toggle auto-hide="false">
          <ion-item button>
            <ion-icon slot="start" name="home"></ion-icon>
            <ion-label> 首页 </ion-label>
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
        <ion-title>页眉</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>主要内容</h1>
      <p>点击左上角的图标来切换菜单。</p>
    </ion-content>
  </ion-page>
</ion-app>

<ion-menu-controller></ion-menu-controller>
```

### 在线示例

你可以在此处查看 Angular 中的[在线示例](https://stackblitz.com/edit/ionic-ng-menu-layout)，以及 React 中的[在线示例](https://stackblitz.com/edit/ionic-react-menu)。

## 拆分窗格布局

[拆分窗格](../api/split-pane.md)布局具有更复杂的结构，因为它可以组合之前的布局。当视口超过指定的断点时，它允许同时显示多个视图。如果设备屏幕尺寸低于某个大小，拆分窗格视图将被隐藏。

默认情况下，拆分窗格视图在屏幕大于 `768px`（即 `md` 断点）时显示，但这可以通过设置 `when` 属性来自定义使用不同的断点。下面的示例中，拆分窗格包含一个菜单，该菜单在 `sm` 屏幕及以上可见，即视口大于 `576px` 时。通过水平调整浏览器大小，使应用小于此尺寸，拆分窗格视图将消失。

```html
<ion-app>
  <ion-split-pane when="sm" content-id="main-content">
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>菜单</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <ion-list-header> 导航 </ion-list-header>
          <ion-menu-toggle auto-hide="false">
            <ion-item button>
              <ion-icon slot="start" name="home"></ion-icon>
              <ion-label> 首页 </ion-label>
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
          <ion-title>页眉</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h1>主要内容</h1>
      </ion-content>
    </div>
  </ion-split-pane>
</ion-app>
```

需要注意的是，`id` 与拆分窗格指定的 `content-id` 匹配的元素将是始终可见的主要内容。这可以是任何元素，包括 [ion-nav](../api/nav.md)、[ion-router-outlet](../api/router-outlet.md) 或 [ion-tabs](../api/tabs.md)。

### 在线示例

你可以在此处查看 Angular 中的[在线示例](https://stackblitz.com/edit/ionic-ng-split-pane)，以及 React 中的[在线示例](https://stackblitz.com/edit/ionic-react-split-pane)。
