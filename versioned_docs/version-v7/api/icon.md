---
title: 'ion-icon'
---

<head>
  <title>ion-icon：Ionic 框架应用图标组件</title>
  <meta
    name="description"
    content="ion-icon 是用于显示高级设计图标的组件，支持 SVG 和 Web 字体。"
  />
</head>

图标（Icon）是一个简单的组件，通过 <a href="https://ionic.io/ionicons">Ionicons</a> 库提供，该库默认随所有 Ionic 框架应用预装。它可以用于显示 Ionicons 集中的任何图标，或自定义 SVG。它还支持样式，如尺寸和颜色。

有关所有可用图标的列表，请参阅 <a href="https://ionic.io/ionicons">ionic.io/ionicons</a>。有关包括样式和自定义 SVG 使用的更多信息，请参阅 <a href="https://ionic.io/ionicons/usage">使用页面</a>。

## 基本用法

import Basic from '@site/static/usage/v7/icon/basic/index.md';

<Basic />

## 无障碍访问

纯装饰性内容的图标应设置 <code>aria-hidden="true"</code>。这不会在视觉上隐藏图标，但会将元素从辅助技术中隐藏。

```html
<ion-icon name="heart" aria-hidden="true"></ion-icon>
```

如果图标是可交互的，应通过添加 <code>aria-label</code> 来定义替代文本。

```html
<ion-icon name="heart" aria-label="Favorite"></ion-icon>
```

或者，如果图标位于它所描述的另一个元素内部，则该元素应添加 <code>aria-label</code>，图标应使用 <code>aria-hidden</code> 隐藏。

```html
<ion-button aria-label="Favorite">
  <ion-icon name="heart" aria-hidden="true"></ion-icon>
</ion-button>
```
