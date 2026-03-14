---
title: 拆分面板组件
---

import Props from '@ionic-internal/component-api/v8/split-pane/props.md';
import Events from '@ionic-internal/component-api/v8/split-pane/events.md';
import Methods from '@ionic-internal/component-api/v8/split-pane/methods.md';
import Parts from '@ionic-internal/component-api/v8/split-pane/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/split-pane/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/split-pane/slots.md';

<head>
  <title>ion-split-pane：用于菜单和多视图布局的拆分面板</title>
  <meta name="description" content="ion-split-pane 在创建多视图应用布局时非常有用。它允许在视口宽度增加时显示 UI 元素，例如菜单。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

拆分面板在创建多视图布局时非常有用。它允许在视口宽度增加时显示 UI 元素，例如菜单。

如果设备屏幕宽度低于某个特定尺寸，拆分面板将收起，菜单将被隐藏。这非常适合创建将在浏览器中运行，并通过应用商店部署到手机和平板电脑的应用。

## 基本用法

:::note
此演示将 `when` 属性设置为 `'xs'`，因此拆分面板始终显示。如果希望拆分面板在较小的视口中收起，则您的 Ionic 应用无需此设置。有关更多信息，请参阅 [设置断点](#设置断点)。
:::

import Basic from '@site/static/usage/v8/split-pane/basic/index.md';

<Basic />

## 设置断点

默认情况下，当屏幕大于 992px 时，拆分面板会展开。要自定义此行为，请在 `when` 属性中传递一个断点。`when` 属性可以接受布尔值、任何有效的媒体查询或 Ionic 的预定义尺寸之一。

```html
<!-- 可以是 "xs", "sm", "md", "lg", 或 "xl" -->
<ion-split-pane when="md"></ion-split-pane>

<!-- 可以是任何有效的媒体查询 https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries -->
<ion-split-pane when="(min-width: 40px)"></ion-split-pane>
```

| 尺寸  | 值                    | 描述                                                   |
|-------|-----------------------|--------------------------------------------------------|
| `xs`  | `(min-width: 0px)`    | 当最小宽度为 0px 时显示拆分面板（即始终显示）          |
| `sm`  | `(min-width: 576px)`  | 当最小宽度为 576px 时显示拆分面板                      |
| `md`  | `(min-width: 768px)`  | 当最小宽度为 768px 时显示拆分面板                      |
| `lg`  | `(min-width: 992px)`  | 当最小宽度为 992px 时显示拆分面板（默认断点）          |
| `xl`  | `(min-width: 1200px)` | 当最小宽度为 1200px 时显示拆分面板                     |

## 主题定制

### CSS 自定义属性

import CSSProperties from '@site/static/usage/v8/split-pane/theming/css-properties/index.md';

<CSSProperties />

## 属性
<Props />

## 事件
<Events />

## 方法
<Methods />

## CSS Shadow Parts
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />