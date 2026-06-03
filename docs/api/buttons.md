---
title: "ion-buttons"
---
import Props from '@ionic-internal/component-api/v8/buttons/props.md';
import Events from '@ionic-internal/component-api/v8/buttons/events.md';
import Methods from '@ionic-internal/component-api/v8/buttons/methods.md';
import Parts from '@ionic-internal/component-api/v8/buttons/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/buttons/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/buttons/slots.md';

<head>
  <title>ion-buttons：带有命名插槽的工具栏按钮容器</title>
  <meta name="description" content="Buttons 组件是一个容器元素。放置在工具栏中的按钮应位于 ion-buttons 元素内部，并可使用命名插槽进行定位。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


Buttons 组件是一个容器元素。它应使用在[工具栏](./toolbar)内部，可以包含多种类型的按钮，包括标准[按钮](./button)、[菜单按钮](./menu-button)和[返回按钮](./back-button)。

## 基本用法

import Basic from '@site/static/usage/v8/buttons/basic/index.md';

<Basic />


## 按钮放置

按钮可以使用命名插槽放置在工具栏内部。下表描述了每个插槽。

| 插槽         | 描述                                                                                              |
|--------------|----------------------------------------------------------------------------------------------------------|
| `start`      | 在 LTR 中定位到内容的 `左侧`，在 RTL 中定位到 `右侧`。                                |
| `end`        | 在 LTR 中定位到内容的 `右侧`，在 RTL 中定位到 `左侧`。                                |
| `secondary`  | 在 `ios` 模式下定位到内容的 `左侧`，在 `md` 模式下直接定位到 `右侧`。  |
| `primary`    | 在 `ios` 模式下定位到内容的 `右侧`，在 `md` 模式下定位到最 `右侧`。      |

import Placement from '@site/static/usage/v8/buttons/placement/index.md';

<Placement />


## 按钮类型

工具栏中的按钮默认样式为透明，但这可以通过按钮上的 [`fill`](./button#填充) 属性更改。本示例中[返回按钮](./back-button)和[菜单按钮](./menu-button)上包含的属性仅用于展示目的；请参阅各自的文档以了解正确用法。

import Types from '@site/static/usage/v8/buttons/types/index.md';

<Types />


## 可折叠按钮

可以在按钮上设置 `collapse` 属性，使其在头部折叠时一并折叠。这通常与[可折叠大标题](./title#可折叠大标题)一起使用。

:::info

此功能仅适用于 iOS。

:::

<!-- Reuse the playground from the Title directory -->
import CollapsibleLargeTitleButtons from '@site/static/usage/v8/title/collapsible-large-title/buttons/index.md';

<CollapsibleLargeTitleButtons />


## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />
