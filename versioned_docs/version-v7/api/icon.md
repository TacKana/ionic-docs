---
title: 'ion-icon'
---

<head>
  <title>ion-icon：Ionic Framework 应用的图标组件</title>
  <meta
    name="description"
    content="ion-icon 是一个用于显示优质设计图标的组件，支持 SVG 和网页字体格式。"
  />
</head>

图标是一个简单的组件，通过 <a href="https://ionic.io/ionicons">Ionicons</a> 库提供，默认情况下已预先打包在所有 Ionic Framework 应用中。它可用于显示 Ionicons 集合中的任何图标或自定义 SVG。它还支持尺寸和颜色等样式设置。

如需查看所有可用图标的列表，请访问 <a href="https://ionic.io/ionicons">ionic.io/ionicons</a>。有关样式设置和自定义 SVG 用法等更多信息，请参阅 <a href="https://ionic.io/ionicons/usage">使用说明页面</a>。

## 基本用法

import Basic from '@site/static/usage/v7/icon/basic/index.md';

<Basic />

## 无障碍访问

纯装饰性的图标应设置 `aria-hidden="true"`。这不会在视觉上隐藏图标，但会从辅助技术中隐藏该元素。

```html
<ion-icon name="heart" aria-hidden="true"></ion-icon>
```

如果图标是交互式的，则应通过添加 `aria-label` 来定义替代文本。

```html
<ion-icon name="heart" aria-label="收藏"></ion-icon>
```

或者，如果图标位于描述它的另一个元素内部，则该元素应添加 `aria-label`，并使用 `aria-hidden` 隐藏图标。

```html
<ion-button aria-label="收藏">
  <ion-icon name="heart" aria-hidden="true"></ion-icon>
</ion-button>
```