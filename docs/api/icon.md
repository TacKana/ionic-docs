---
title: 'ion-icon'
---

<head>
  <title>ion-icon: Ionic Framework 应用图标组件</title>
  <meta
    name="description"
    content="Ion-icon 是一个用于显示精美设计图标的组件，支持 SVG 和网页字体。"
  />
</head>

Icon 是一个通过 <a href="https://ionic.io/ionicons">Ionicons</a> 库提供的简单组件，默认随所有 Ionic Framework 应用预装。它可以用于显示 Ionicons 图标集中的任何图标或自定义 SVG。它还支持大小和颜色等样式。

有关所有可用图标的列表，请参阅 <a href="https://ionic.io/ionicons">ionic.io/ionicons</a>。有关包括样式和自定义 SVG 用法的更多信息，请参阅<a href="https://ionic.io/ionicons/usage">用法页面</a>。

## 基本用法

import Basic from '@site/static/usage/v8/icon/basic/index.md';

<Basic />


## 辅助功能

纯装饰性内容的图标应设置 <code>aria-hidden="true"</code>。这不会在视觉上隐藏图标，但会从辅助技术中隐藏该元素。

```html
<ion-icon name="heart" aria-hidden="true"></ion-icon>
```


如果图标是可交互的，则应通过添加 <code>aria-label</code> 来定义替代文本。

```html
<ion-icon name="heart" aria-label="Favorite"></ion-icon>
```

或者，如果图标位于它所描述的另一个元素内部，则应向该元素添加 <code>aria-label</code>，并使用 <code>aria-hidden</code> 隐藏图标。

```html
<ion-button aria-label="Favorite">
  <ion-icon name="heart" aria-hidden="true"></ion-icon>
</ion-button>
```
