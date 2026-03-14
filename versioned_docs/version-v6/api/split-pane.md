---
title: 'ion-split-pane'
---

import Props from '@ionic-internal/component-api/v6/split-pane/props.md';
import Events from '@ionic-internal/component-api/v6/split-pane/events.md';
import Methods from '@ionic-internal/component-api/v6/split-pane/methods.md';
import Parts from '@ionic-internal/component-api/v6/split-pane/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/split-pane/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/split-pane/slots.md';

<head>
  <title>ion-split-pane：用于菜单和多视图布局的拆分面板</title>
  <meta
    name="description"
    content="ion-split-pane 在创建多视图应用布局时非常实用。它允许在视口宽度增加时显示如菜单等UI元素。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

拆分面板在创建多视图布局时非常实用。它允许在视口宽度增加时显示如菜单等 UI 元素。

如果设备屏幕宽度小于特定尺寸，拆分面板将会收起，菜单将被隐藏。这对于创建既能在浏览器中访问，又能通过应用商店部署到手机和平板的应用来说非常理想。

## 基本用法

:::note
此演示将 `when` 属性设置为 `'xs'`，因此拆分面板始终显示。如果您希望拆分面板在较小视口上收起，您的 Ionic 应用则无需此设置。更多信息请参阅[设置断点](#设置断点)。
:::

import Basic from '@site/static/usage/v6/split-pane/basic/index.md';

<Basic />

## 设置断点

默认情况下，当屏幕宽度大于 992px 时，拆分面板会展开。要自定义此行为，请在 `when` 属性中传入一个断点。`when` 属性可以接受布尔值、任何有效的媒体查询或 Ionic 预定义的尺寸之一。

```html
<!-- 可以是 "xs", "sm", "md", "lg" 或 "xl" -->
<ion-split-pane when="md"></ion-split-pane>

<!-- 可以是任何有效的媒体查询 https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries -->
<ion-split-pane when="(min-width: 40px)"></ion-split-pane>
```

| 尺寸 | 值                    | 说明                                           |
| ---- | --------------------- | ---------------------------------------------- |
| `xs` | `(min-width: 0px)`    | 当最小宽度为 0px 时显示拆分面板（即始终显示） |
| `sm` | `(min-width: 576px)`  | 当最小宽度为 576px 时显示拆分面板             |
| `md` | `(min-width: 768px)`  | 当最小宽度为 768px 时显示拆分面板             |
| `lg` | `(min-width: 992px)`  | 当最小宽度为 992px 时显示拆分面板（默认断点） |
| `xl` | `(min-width: 1200px)` | 当最小宽度为 1200px 时显示拆分面板            |

## 主题定制

### CSS 自定义属性

import CSSProperties from '@site/static/usage/v6/split-pane/theming/css-properties/index.md';

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