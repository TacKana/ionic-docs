---
title: 按钮组件组
---
import Props from '@ionic-internal/component-api/v8/buttons/props.md';
import Events from '@ionic-internal/component-api/v8/buttons/events.md';
import Methods from '@ionic-internal/component-api/v8/buttons/methods.md';
import Parts from '@ionic-internal/component-api/v8/buttons/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/buttons/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/buttons/slots.md';

<head>
  <title>ion-buttons: 带命名插槽的工具栏按钮容器</title>
  <meta name="description" content="Buttons 组件是一个容器元素。放置在工具栏中的按钮应位于 ion-buttons 元素内，并可使用命名插槽进行定位。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


Buttons 组件是一个容器元素。它应放置在 [toolbar](./toolbar) 内部，并可包含多种类型的按钮，包括标准 [button](./button)、[menu button](./menu-button) 和 [back button](./back-button)。

## 基本用法

import Basic from '@site/static/usage/v8/buttons/basic/index.md';

<Basic />


## 按钮位置

可以使用命名插槽将按钮定位在工具栏内部。下表描述了每个插槽。

| 插槽         | 描述                                                                                              |
|--------------|----------------------------------------------------------------------------------------------------------|
| `start`      | 在 LTR 语言中定位到内容的`左侧`，在 RTL 语言中定位到`右侧`。                                |
| `end`        | 在 LTR 语言中定位到内容的`右侧`，在 RTL 语言中定位到`左侧`。                                |
| `secondary`  | 在 `ios` 模式下将元素定位到内容的`左侧`，在 `md` 模式下直接定位到`右侧`。  |
| `primary`    | 在 `ios` 模式下将元素定位到内容的`右侧`，在 `md` 模式下定位到最`右侧`。      |

import Placement from '@site/static/usage/v8/buttons/placement/index.md';

<Placement />


## 按钮类型

工具栏中的按钮默认样式为透明（clear），但可以通过设置按钮的 [`fill`](./button#fill) 属性来更改。此示例中 [back button](./back-button) 和 [menu button](./menu-button) 包含的属性仅用于演示；请参阅各自文档了解正确用法。

import Types from '@site/static/usage/v8/buttons/types/index.md';

<Types />


## 可折叠按钮

可以在 buttons 上设置 `collapse` 属性，使其在标题折叠时一同折叠。这通常与 [可折叠大标题](./title#collapsible-large-titles) 一起使用。

:::info

此功能仅适用于 iOS 平台。

:::

<!-- 复用 Title 目录中的示例 -->
import CollapsibleLargeTitleButtons from '@site/static/usage/v8/title/collapsible-large-title/buttons/index.md';

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