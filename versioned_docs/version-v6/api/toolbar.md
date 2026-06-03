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
  <title>ion-toolbar：自定义应用菜单工具栏按钮和图标</title>
  <meta
    name="description"
    content="ion-toolbar 组件让你自定义应用菜单上的工具栏按钮。在内容上方或下方添加固定工具栏，或使用全屏与内容一起滚动。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

工具栏（Toolbar）通常位于内容的上方或下方，提供当前屏幕的内容和操作。当放置在[内容（content）](./content)内部时，工具栏将随内容滚动。

工具栏可以包含多种不同的组件，包括标题、按钮、图标、返回按钮、菜单按钮、搜索栏、分段控件、进度条等。

## 基本用法

建议将工具栏放在[头部（header）](./header)或[底部（footer）](./footer)内部以获得正确的定位。当工具栏放置在头部时，它将固定在内容的顶部。当放置到底部时，它将固定在底部。全屏内容将在头部或底部中的工具栏后面滚动。[标题（title）](./title)组件可用于在工具栏内显示文本。

import Basic from '@site/static/usage/v7/toolbar/basic/index.md';

<Basic />

## 工具栏中的按钮

放置在工具栏中的按钮应放在[buttons（按钮）](./buttons)组件内部。按钮组件可以使用命名[插槽（slot）](#插槽)定位在工具栏内。`"primary"` 和 `"secondary"` 插槽在 `ios` 和 `md` 模式下的行为不同。

按钮组件可以包装标准[按钮（button）](./button)、[返回按钮（back button）](./back-button)、[菜单按钮（menu button）](./menu-button)，或其中的多个。工具栏中的按钮默认样式为透明，但可以通过按钮上的 [`fill`](./button#填充fill) 属性更改。此示例中包含的返回按钮和菜单按钮上的属性仅用于展示目的；请参阅各自文档了解正确用法。

import Buttons from '@site/static/usage/v7/toolbar/buttons/index.md';

<Buttons />

## 工具栏中的搜索栏

[搜索栏（searchbar）](./searchbar)可以放置在工具栏内部以搜索内容。它应该是工具栏的唯一子组件，并将占据全宽和全高。

import Searchbars from '@site/static/usage/v7/toolbar/searchbars/index.md';

<Searchbars />

## 工具栏中的分段控件

[分段控件（Segment）](./segment)通常用于工具栏中，以在同一页面的两种不同内容视图之间切换。它们可以与其他组件（如按钮）一起放置在工具栏中，但不应与标题一起放置。

import Segments from '@site/static/usage/v7/toolbar/segments/index.md';

<Segments />

## 工具栏中的进度条

[进度条（progress bar）](./progress-bar)用作加载指示器，显示应用中正在进行的进程。进度条可以放置在工具栏内任何其他组件中，因为它们将与工具栏底部对齐。

import ProgressBars from '@site/static/usage/v7/toolbar/progress-bars/index.md';

<ProgressBars />

## 主题

### 颜色

import Colors from '@site/static/usage/v7/toolbar/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/toolbar/theming/css-properties/index.md';

<CSSProps />

## 边框

在 `md` 模式下，`<ion-header>` 将在底部有一个 box-shadow，`<ion-footer>` 将在顶部有一个 box-shadow。在 `ios` 模式下，`<ion-header>` 将在底部有一个 border，`<ion-footer>` 将在顶部有一个 border。

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
