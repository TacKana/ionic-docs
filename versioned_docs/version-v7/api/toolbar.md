---
title: 'ion-toolbar'
---

import Props from '@ionic-internal/component-api/v7/toolbar/props.md';
import Events from '@ionic-internal/component-api/v7/toolbar/events.md';
import Methods from '@ionic-internal/component-api/v7/toolbar/methods.md';
import Parts from '@ionic-internal/component-api/v7/toolbar/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/toolbar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/toolbar/slots.md';

<head>
  <title>ion-toolbar：自定义应用菜单工具栏按钮与图标</title>
  <meta
    name="description"
    content="ion-toolbar 组件可让您自定义应用菜单的工具栏按钮。在内容上方或下方添加固定工具栏，或使用全屏模式随内容滚动。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

工具栏通常位于内容的上方或下方，并为当前屏幕提供内容和操作。当工具栏放置在[内容区域](./content)内时，它会随内容一起滚动。

工具栏可以包含多种不同的组件，包括标题、按钮、图标、返回按钮、菜单按钮、搜索栏、分段控件、进度条等。

## 基本用法

建议将工具栏放在[页眉](./header)或[页脚](./footer)中以获得正确的位置。当工具栏放在页眉中时，它会固定在内容区域的顶部。当放在页脚中时，它会固定在底部。全屏内容会在页眉或页脚中的工具栏后面滚动。可以使用[标题](./title)组件在工具栏内显示文本。

import Basic from '@site/static/usage/v7/toolbar/basic/index.md';

<Basic />

## 工具栏中的按钮

放置在工具栏中的按钮应放在[按钮](./buttons)组件内。按钮组件可以通过指定的[插槽](#slots)在工具栏内定位。`"primary"` 和 `"secondary"` 插槽在 `ios` 和 `md` 模式下的行为不同。

按钮组件可以包裹一个标准的[按钮](./button)、[返回按钮](./back-button)、[菜单按钮](./menu-button)，或其中任意多个。工具栏中的按钮默认样式为透明，但可以通过按钮上的 [`fill`](./button#fill) 属性来更改。本例中返回按钮和菜单按钮上包含的属性仅用于展示目的；请参阅它们各自的文档以了解正确用法。

import Buttons from '@site/static/usage/v7/toolbar/buttons/index.md';

<Buttons />

## 工具栏中的搜索栏

可以将[搜索栏](./searchbar)放在工具栏内以搜索内容。它应该是工具栏的唯一子组件，并且会占据整个宽度和高度。

import Searchbars from '@site/static/usage/v7/toolbar/searchbars/index.md';

<Searchbars />

## 工具栏中的分段控件

[分段控件](./segment)通常用于工具栏中，以在同一页面上切换两种不同的内容视图。它们可以与其他组件（如按钮）一起放在工具栏中，但不应与标题并列放置。

import Segments from '@site/static/usage/v7/toolbar/segments/index.md';

<Segments />

## 工具栏中的进度条

[进度条](./progress-bar)用作加载指示器，显示应用中的进行中的过程。进度条可以与工具栏内的任何其他组件一起放置，因为它们会与工具栏底部对齐。

import ProgressBars from '@site/static/usage/v7/toolbar/progress-bars/index.md';

<ProgressBars />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v7/toolbar/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/toolbar/theming/css-properties/index.md';

<CSSProps />

## 边框

在 `md` 模式下，`<ion-header>` 底部会有一个阴影，而 `<ion-footer>` 顶部会有一个阴影。在 `ios` 模式下，`<ion-header>` 底部会有一条边框，而 `<ion-footer>` 顶部会有一条边框。

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