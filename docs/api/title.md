---
title: "ion-title"
---

import Props from '@ionic-internal/component-api/v8/title/props.md';
import Events from '@ionic-internal/component-api/v8/title/events.md';
import Methods from '@ionic-internal/component-api/v8/title/methods.md';
import Parts from '@ionic-internal/component-api/v8/title/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/title/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/title/slots.md';

<head>
  <title>ion-title: Ionic 框架工具栏应用标题组件</title>
  <meta name="description" content="ion-title 是设置工具栏标题的组件。阅读以了解更多关于标题和可折叠标题组件及其在 Ionic 框架应用中的用法。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Title 是一个文本组件，用于设置[工具栏](./toolbar)的标题。它可用于描述用户当前所在的屏幕或区域，或正在使用的应用。

## 基本用法

import Basic from '@site/static/usage/v8/title/basic/index.md';

<Basic />

## 可折叠大标题

当[内容](./content)滚动到滚动容器的起始位置时，将显示大标题。当标题滚动到页眉后面时，紧凑标题将淡入显示。

:::info

此功能仅适用于 iOS。

:::

import CollapsibleLargeTitle from '@site/static/usage/v8/title/collapsible-large-title/basic/index.md';

<CollapsibleLargeTitle />

### 可折叠按钮

[按钮](./buttons.md)组件可以与 [`collapse`](./buttons.md#可折叠按钮) 属性一起使用，以便在工具栏折叠时额外显示在页眉中。

import CollapsibleLargeTitleButtons from '@site/static/usage/v8/title/collapsible-large-title/buttons/index.md';

<CollapsibleLargeTitleButtons />

## 无障碍

### 标题

创建标题时，我们通常建议使用[语义化标题元素（h1-h6）](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)。但是，有时您可能需要将 Title 更新为被辅助技术视为特定级别的标题。例如，如果您在视图顶部有一个 Title，您可能希望它被视为一级标题。

为实现这一点，开发者应在 Title 上使用 [`heading` 角色](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role)。这将向辅助技术表明 Title 是一种标题类型。在此基础上，开发者应使用 [`aria-level` 属性](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level)来设置标题级别。

例如，如果我们想让 Title 表现得像 `h1` 元素，我们需要在 Title 上设置 `role="heading"` 和 `aria-level="1"`。在使用[焦点管理器](../developing/managing-focus#辅助技术焦点管理)时这是必需的。

由于可以在视图上同时使用多个 Title 元素和语义化标题元素，Ionic 不会自动设置 Title 的 `role` 或 `aria-level`。这由开发者负责处理。

## 主题

可折叠大标题应与其余内容无缝衔接。这意味着包含可折叠大标题的工具栏的背景颜色应始终与内容的背景颜色匹配。

默认情况下，包含标准标题的工具栏使用 `opacity: 0` 隐藏，并在您通过滚动折叠大标题时逐渐显示。因此，您在标准标题后面看到的背景颜色实际上是内容的背景颜色。

您可以通过设置 `--background` CSS 变量来更改包含标准标题的工具栏的背景颜色。这将产生页眉在折叠大标题时变色的效果。

在样式化大标题的文本颜色时，您应全局性地针对大标题，而不是在特定页面或选项卡的上下文中，否则在导航动画期间其样式将不会生效。

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
