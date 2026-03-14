---
title: 图标组件
---

<head>
  <title>ion-icon：Ionic Framework 应用的图标组件</title>
  <meta
    name="description"
    content="Ion-icon 是一个用于显示精心设计的图标的组件，支持 SVG 和网页字体格式。"
  />
</head>

Icon（图标）是一个通过 <a href="https://ionic.io/ionicons">Ionicons</a> 库提供的简单组件，默认已预装在所有 Ionic Framework 应用中。它可以用来显示 Ionicons 集合中的任何图标，或者自定义的 SVG 图标。它还支持设置样式，例如尺寸和颜色。

要查看所有可用图标的列表，请访问 <a href="https://ionic.io/ionicons">ionic.io/ionicons</a>。如需了解更多信息，包括样式设置和自定义 SVG 的使用，请参阅<a href="https://ionic.io/ionicons/usage">使用指南页面</a>。

## 基本用法

import Basic from '@site/static/usage/v8/icon/basic/index.md';

<Basic />


## 无障碍访问

纯装饰性的图标应设置 `aria-hidden="true"`。这不会在视觉上隐藏图标，但会将其从辅助技术中隐藏。

```html
<ion-icon name="heart" aria-hidden="true"></ion-icon>
```


如果图标是可交互的，则应通过添加 `aria-label` 来定义替代文本。

```html
<ion-icon name="heart" aria-label="收藏"></ion-icon>
```

或者，如果图标位于另一个描述它的元素内部，则应在该元素上添加 `aria-label`，并使用 `aria-hidden` 隐藏图标。

```html
<ion-button aria-label="收藏">
  <ion-icon name="heart" aria-hidden="true"></ion-icon>
</ion-button>
```