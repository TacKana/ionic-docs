---
title: 'ion-title'
---

import Props from '@ionic-internal/component-api/v7/title/props.md';
import Events from '@ionic-internal/component-api/v7/title/events.md';
import Methods from '@ionic-internal/component-api/v7/title/methods.md';
import Parts from '@ionic-internal/component-api/v7/title/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/title/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/title/slots.md';

<head>
  <title>ion-title：Ionic 框架应用工具栏标题组件</title>
  <meta
    name="description"
    content="ion-title 是设置工具栏标题的组件。阅读了解更多关于 Ionic 框架应用的标题和可折叠标题组件及用法。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

标题（Title）是设置[工具栏（toolbar）](./toolbar)标题的文本组件。它可用于描述用户当前所在的屏幕或部分，或正在使用的应用。

## 基本

import Basic from '@site/static/usage/v7/title/basic/index.md';

<Basic />

## 可折叠大标题

当[内容（content）](./content)滚动到滚动容器的起始位置时，将显示大标题。当标题滚动到头部后面时，紧凑标题将淡入。

:::info

此功能仅适用于 iOS。

:::

import CollapsibleLargeTitle from '@site/static/usage/v7/title/collapsible-large-title/basic/index.md';

<CollapsibleLargeTitle />

### 可折叠按钮

[buttons（按钮）](./buttons.md)组件可以与 [`collapse`](./buttons.md#可折叠按钮) 属性一起使用，以在工具栏折叠时额外显示在头部。

import CollapsibleLargeTitleButtons from '@site/static/usage/v7/title/collapsible-large-title/buttons/index.md';

<CollapsibleLargeTitleButtons />

## 无障碍访问

### 标题

创建标题时，我们通常建议使用[语义化标题元素（h1-h6）](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements)。但是，在某些情况下，你可能需要更新 Title，使其被辅助技术视为特定标题。例如，如果你在视图顶部有一个 Title，你可能希望将其视为 1 级标题。

为了实现这一点，开发者应在 Title 上使用 [`heading` 角色](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Roles/heading_role)。这将向辅助技术指示 Title 是一种标题。然后，开发者应使用 [`aria-level` 属性](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-level)设置标题级别。

例如，如果我们希望 Title 表现得像 `h1` 元素，我们需要在 Title 上设置 `role="heading"` 和 `aria-level="1"`。

由于多个 Title 元素可以与语义化标题元素一起在视图上使用，Ionic 不会自动设置 Title 的 `role` 或 `aria-level`。这是开发者的责任。

## 主题

可折叠大标题应与内容的其余部分无缝衔接。这意味着包含可折叠大标题的工具栏的背景颜色应始终与内容的背景颜色匹配。

默认情况下，包含标准标题的工具栏使用 `opacity: 0` 隐藏，并在通过滚动折叠大标题时逐渐显示。因此，你在标准标题后面看到的背景颜色实际上是内容的背景颜色。

你可以通过设置 `--background` CSS 变量来更改带有标准标题的工具栏的背景颜色。这将产生在折叠大标题时头部颜色发生变化的效果。

在设置大标题的文本颜色时，你应该全局定位大标题，而不是在特定页面或标签的上下文中，否则其样式在导航动画期间将不会应用。

### CSS 自定义属性

import CSSCustomProperties from '@site/static/usage/v7/title/theming/css-properties/index.md';

<CSSCustomProperties />

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
