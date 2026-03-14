---
title: 'ion-title'
---

import Props from '@ionic-internal/component-api/v6/title/props.md';
import Events from '@ionic-internal/component-api/v6/title/events.md';
import Methods from '@ionic-internal/component-api/v6/title/methods.md';
import Parts from '@ionic-internal/component-api/v6/title/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/title/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/title/slots.md';

<head>
  <title>ion-title：用于工具栏的 Ionic 框架应用标题组件</title>
  <meta
    name="description"
    content="ion-title 是用于设置工具栏标题的组件。阅读以了解更多关于标题、可折叠标题组件及其在 Ionic 框架应用中的用法。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

标题是一个文本组件，用于为 [工具栏](./toolbar) 设置标题。它可以用来描述用户当前所在的屏幕或区域，或者正在使用的应用程序。

## 基础用法

import Basic from '@site/static/usage/v6/title/basic/index.md';

<Basic />

## 可折叠大标题

当 [内容](./content) 滚动到滚动容器的起始位置时，大标题将会显示。当标题滚动到页眉后面时，紧凑标题会逐渐淡入。

:::info

此功能仅适用于 iOS 系统。

:::

import CollapsibleLargeTitle from '@site/static/usage/v6/title/collapsible-large-title/basic/index.md';

<CollapsibleLargeTitle />

### 可折叠按钮

[按钮](./buttons.md)组件可以与 [`collapse`](./buttons.md#collapse) 属性一起使用，以便在工具栏折叠时额外显示在页眉中。

import CollapsibleLargeTitleButtons from '@site/static/usage/v6/title/collapsible-large-title/buttons/index.md';

<CollapsibleLargeTitleButtons />

## 主题定制

可折叠大标题应与您内容的其余部分无缝衔接。这意味着包含可折叠大标题的工具栏背景色应始终与内容的背景色保持一致。

默认情况下，包含标准标题的工具栏会使用 `opacity: 0` 隐藏，并在您通过滚动折叠大标题时逐渐显示。因此，您在标准标题后面看到的背景色实际上是内容的背景色。

您可以通过设置 `--background` CSS 变量来更改包含标准标题的工具栏的背景色。这将产生在折叠大标题时页眉颜色发生变化的效果。

在设置大标题的文本颜色样式时，您应该全局地针对大标题进行设置，而不是在特定页面或标签页的上下文中进行，否则其样式在导航动画期间将不会生效。

### CSS 自定义属性

import CSSCustomProperties from '@site/static/usage/v6/title/theming/css-properties/index.md';

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