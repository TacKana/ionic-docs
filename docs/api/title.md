---
title: 标题组件
---
import Props from '@ionic-internal/component-api/v8/title/props.md';
import Events from '@ionic-internal/component-api/v8/title/events.md';
import Methods from '@ionic-internal/component-api/v8/title/methods.md';
import Parts from '@ionic-internal/component-api/v8/title/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/title/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/title/slots.md';

<head>
  <title>ion-title: Ionic 框架工具栏应用标题组件</title>
  <meta name="description" content="ion-title 是一个用于设置工具栏标题的组件。进一步了解标题和可折叠标题组件及其在 Ionic 框架应用中的使用方法。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Title 是一个文本组件，用于为[工具栏](./toolbar)设置标题。它可以用来描述用户当前所在的屏幕或区域，或者正在使用的应用。

## 基础用法

import Basic from '@site/static/usage/v8/title/basic/index.md';

<Basic />

<LegacyAnchor id="collapsible-large-titles" />

## 可折叠大标题

当[内容区域](./content)滚动到滚动容器的起始位置时，大标题将显示。当标题滚动到标题栏后方时，缩略标题会淡入显示。

:::info

此功能仅在 iOS 上可用。

:::

import CollapsibleLargeTitle from '@site/static/usage/v8/title/collapsible-large-title/basic/index.md';

<CollapsibleLargeTitle />

### 可折叠按钮

[按钮](./buttons.md)组件可结合 [`collapse`](./buttons.md#collapse) 属性使用，在工具栏折叠时也显示在标题栏中。

import CollapsibleLargeTitleButtons from '@site/static/usage/v8/title/collapsible-large-title/buttons/index.md';

<CollapsibleLargeTitleButtons />

## 无障碍访问

### 标题层级

在创建标题时，我们通常建议使用[语义化的标题元素（h1-h6）](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)。然而，某些情况下你可能需要调整 Title 组件，使其被辅助技术识别为特定的标题级别。例如，如果一个 Title 位于视图顶部，你可能希望它被视为一级标题。

为实现此目的，开发者应在 Title 上使用 [`heading` 角色](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role)。这将向辅助技术表明 Title 是一种标题。接着，开发者应使用 [`aria-level` 属性](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) 来设置标题级别。

例如，若想使 Title 的行为类似于 `h1` 元素，我们应在 Title 上设置 `role="heading"` 和 `aria-level="1"`。在使用[焦点管理器](../developing/managing-focus#assistive-technology-focus-management)时这是必要的。

由于一个视图中可能同时使用多个 Title 元素和语义化标题元素，Ionic 不会自动设置 Title 的 `role` 或 `aria-level`。这需要开发者自行处理。

## 主题定制

可折叠大标题应与内容的其他部分呈现无缝衔接的效果。这意味着包含可折叠大标题的工具栏背景色应始终与内容区域的背景色保持一致。

默认情况下，包含标准标题的工具栏会使用 `opacity: 0` 隐藏，并随着滚动折叠大标题而逐渐显示。因此，你在标准标题后面看到的背景色实际上是内容区域的背景色。

你可以通过设置 `--background` CSS 变量来更改包含标准标题的工具栏背景色。这将产生随着大标题折叠而标题栏颜色变化的效果。

在设置大标题文本颜色样式时，应全局针对大标题进行设置，而不是在特定页面或标签页的上下文中设置，否则其样式在导航动画期间将不会被应用。

### CSS 自定义属性

import CSSCustomProperties from '@site/static/usage/v8/title/theming/css-properties/index.md';

<CSSCustomProperties />

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