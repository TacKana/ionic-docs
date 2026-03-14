---
title: Structure
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

# 结构体系

Ionic Framework 提供了多种不同的布局方式，可用于构建应用程序。从单页布局，到分屏视图和模态框。

## 页眉与页脚布局

### 页眉

<aside>
  <DocsCard href="../api/header" header="了解更多" icon="/icons/component-header-icon.png">
    <code>ion-header</code> API 文档
  </DocsCard>
</aside>

最简单的一种布局由 [页眉](../api/header.md) 和 [内容区域](../api/content.md) 组成。应用程序中的大多数页面通常都包含这两部分，但使用内容区域时并不强制要求必须有页眉。

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

如你所见，位于页眉中的工具栏会显示在内容区域的上方。有时应用程序需要在内容区域下方显示工具栏，这时就需要使用页脚。

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

### 页眉与页脚结合

这两种布局也可以在同一页面中结合使用，从而在内容区域的上方 *和* 下方都显示工具栏。

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

### 实时示例

你可以在此查看 Angular 版本的 [实时示例](https://stackblitz.com/edit/ionic-ng-header-footer)，以及 React 版本的 [实时示例](https://stackblitz.com/edit/ionic-react-head-foot)。

## 标签页布局

一种包含水平 [标签页](../api/tabs.md) 的布局，可用于让用户快速在不同内容视图之间切换。每个标签页都可以包含静态内容，或者通过使用 `ion-router-outlet` 或 `ion-nav` 来包含一个导航栈。

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

### 实时示例

你可以在此查看 Angular 版本的 [实时示例](https://stackblitz.com/edit/ionic-ng-tabs)，以及 React 版本的 [实时示例](https://stackblitz.com/edit/ionic-react-tab-layout)。

## 侧边菜单布局

移动应用程序中一种常见的标准布局，包含通过点击按钮或从侧面滑动来切换 [侧边菜单](../api/menu.md) 的功能。侧边菜单通常用于导航，但它们也可以包含任何内容。

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
      <p>点击左上角的图标可切换菜单。</p>
    </ion-content>
  </ion-page>
</ion-app>

<ion-menu-controller></ion-menu-controller>
```

### 实时示例

你可以在此查看 Angular 版本的 [实时示例](https://stackblitz.com/edit/ionic-ng-menu-layout)，以及 React 版本的 [实时示例](https://stackblitz.com/edit/ionic-react-menu)。

## 分屏布局

[分屏](../api/split-pane.md) 布局的结构更为复杂，因为它可以组合前述的各种布局。它允许在视口超过指定断点时显示多个视图。如果设备的屏幕尺寸小于特定大小，分屏视图将会被隐藏。

默认情况下，当屏幕大于 `768px`（即 `md` 断点）时，分屏视图将显示。但可以通过设置 `when` 属性来自定义使用不同的断点。下面是一个示例，其中分屏包含一个菜单，该菜单在 `sm` 及以上的屏幕尺寸（即视口大于 `576px`）时可见。通过水平调整浏览器大小，使应用程序小于此尺寸，分屏视图将会消失。

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

需要注意的是，具有与分屏指定的 `content-id` 匹配的 `id` 的元素，将始终作为主内容区域可见。这可以是任何元素，包括 [ion-nav](../api/nav.md)、[ion-router-outlet](../api/router-outlet.md) 或 [ion-tabs](../api/tabs.md)。

### 实时示例

你可以在此查看 Angular 版本的 [实时示例](https://stackblitz.com/edit/ionic-ng-split-pane)，以及 React 版本的 [实时示例](https://stackblitz.com/edit/ionic-react-split-pane)。