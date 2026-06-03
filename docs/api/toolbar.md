---
title: "ion-toolbar"
---

import Props from '@ionic-internal/component-api/v8/toolbar/props.md';
import Events from '@ionic-internal/component-api/v8/toolbar/events.md';
import Methods from '@ionic-internal/component-api/v8/toolbar/methods.md';
import Parts from '@ionic-internal/component-api/v8/toolbar/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/toolbar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/toolbar/slots.md';

<head>
  <title>ion-toolbar: 自定义应用菜单工具栏按钮和图标</title>
  <meta name="description" content="ion-toolbar 组件让您自定义应用菜单上的工具栏按钮。在内容上方或下方添加固定工具栏，或使用全屏模式随内容滚动。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

工具栏通常位于内容的上方或下方，为当前屏幕提供内容和操作。当放置在[内容](./content)内部时，工具栏将随内容一起滚动。

工具栏可以包含多种不同的组件，包括标题、按钮、图标、返回按钮、菜单按钮、搜索栏、分段、进度条等。

## 基本用法

建议将工具栏放在[页眉](./header)或[页脚](./footer)内部以获得正确的定位。当工具栏放置在页眉中时，它将固定在内容顶部显示。当放置在页脚中时，它将固定在底部显示。全屏内容将滚动到页眉或页脚中的工具栏后面。[标题](./title)组件可用于在工具栏内显示文本。

import Basic from '@site/static/usage/v8/toolbar/basic/index.md';

<Basic />

## 工具栏中的按钮

放置在工具栏中的按钮应放在[按钮](./buttons)组件内部。buttons 组件可以使用命名的[插槽](#插槽)定位在工具栏内部。`"primary"` 和 `"secondary"` 插槽在 `ios` 和 `md` 模式下的行为不同。

buttons 组件可以包裹标准[按钮](./button)、[返回按钮](./back-button)、[菜单按钮](./menu-button)，或其中任意多个的组合。工具栏中的按钮默认样式为透明，但可以使用按钮上的 [`fill`](./button#填充) 属性进行更改。此示例中返回按钮和菜单按钮上包含的属性仅用于展示目的；请参阅各自的文档以了解正确用法。

import Buttons from '@site/static/usage/v8/toolbar/buttons/index.md';

<Buttons />

## 工具栏中的搜索栏

可以将[搜索栏](./searchbar)放置在工具栏内部以搜索内容。它应该是工具栏的唯一子组件，并将占满整个宽度和高度。

import Searchbars from '@site/static/usage/v8/toolbar/searchbars/index.md';

<Searchbars />

## 工具栏中的分段

[分段](./segment)通常用于工具栏中，以在同一页面上的两个不同内容视图之间切换。它们可以与其他组件（如按钮）一起放置在工具栏中，但不应与标题一起放置。

import Segments from '@site/static/usage/v8/toolbar/segments/index.md';

<Segments />

## 工具栏中的进度条

[进度条](./progress-bar)用作加载指示器，以显示应用中的进行中进程。进度条可以与工具栏中的任何其他组件一起放置，因为它们将与工具栏底部对齐。

import ProgressBars from '@site/static/usage/v8/toolbar/progress-bars/index.md';

<ProgressBars />

## 主题

### 颜色

import Colors from '@site/static/usage/v8/toolbar/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/toolbar/theming/css-properties/index.md';

<CSSProps />

## 边框

在 `md` 模式下，`<ion-header>` 底部将有一个 box-shadow，`<ion-footer>` 顶部将有一个 box-shadow。在 `ios` 模式下，`<ion-header>` 底部将有一个边框，`<ion-footer>` 顶部将有一个边框。

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
