---
title: 'ion-buttons'
---

import Props from '@ionic-internal/component-api/v7/buttons/props.md';
import Events from '@ionic-internal/component-api/v7/buttons/events.md';
import Methods from '@ionic-internal/component-api/v7/buttons/methods.md';
import Parts from '@ionic-internal/component-api/v7/buttons/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/buttons/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/buttons/slots.md';

<head>
  <title>ion-buttons：带有按钮命名插槽的工具栏元素</title>
  <meta
    name="description"
    content="按钮组件是一个容器元素。放置在工具栏中的按钮应位于 ion-buttons 元素内，并可通过命名插槽进行定位。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

按钮组件是一个容器元素。它应放置在[工具栏](./toolbar)内部，并可包含多种类型的按钮，包括标准[按钮](./button)、[菜单按钮](./menu-button)和[返回按钮](./back-button)。

## 基本用法

import Basic from '@site/static/usage/v7/buttons/basic/index.md';

<Basic />

## 按钮放置位置

按钮可以通过命名插槽定位在工具栏内部。下表描述了每个插槽的作用。

| 插槽         | 描述                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------ |
| `start`      | 在 LTR 语言中定位到内容的`左侧`，在 RTL 语言中定位到内容的`右侧`。                                 |
| `end`        | 在 LTR 语言中定位到内容的`右侧`，在 RTL 语言中定位到内容的`左侧`。                                 |
| `secondary`  | 在 `ios` 模式下定位到内容的`左侧`，在 `md` 模式下直接定位到内容的`右侧`。                           |
| `primary`    | 在 `ios` 模式下定位到内容的`右侧`，在 `md` 模式下定位到内容的`最右侧`。                             |

import Placement from '@site/static/usage/v7/buttons/placement/index.md';

<Placement />

## 按钮类型

工具栏中的按钮默认样式为透明，但可以通过按钮上的 [`fill`](./button#fill) 属性进行更改。此示例中[返回按钮](./back-button)和[菜单按钮](./menu-button)包含的属性仅用于展示目的；请参阅它们各自的文档以了解正确用法。

import Types from '@site/static/usage/v7/buttons/types/index.md';

<Types />

## 可折叠按钮

可以在按钮上设置 `collapse` 属性，以便在标题折叠时折叠这些按钮。这通常与[可折叠大标题](./title#collapsible-large-titles)一起使用。

:::info

此功能仅适用于 iOS。

:::

<!-- 复用 Title 目录中的示例 -->

import CollapsibleLargeTitleButtons from '@site/static/usage/v7/title/collapsible-large-title/buttons/index.md';

<CollapsibleLargeTitleButtons />

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