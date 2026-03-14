---
title: 'ion-fab'
---

import Props from '@ionic-internal/component-api/v6/fab/props.md';
import Events from '@ionic-internal/component-api/v6/fab/events.md';
import Methods from '@ionic-internal/component-api/v6/fab/methods.md';
import Parts from '@ionic-internal/component-api/v6/fab/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/fab/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/fab/slots.md';

<head>
  <title>ion-fab：用于 Android 和 iOS Ionic 应用的浮动操作按钮</title>
  <meta
    name="description"
    content="FAB（浮动操作按钮）是包含一个或多个 fab 按钮的容器元素。在使用 Ionic Framework 创建 Android 和 iOS 应用时使用 ion-fab。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

浮动操作按钮（FAB）是包含一个或多个 [fab 按钮](./fab-button) 的容器元素。它们应放置在固定位置，不随内容滚动。FAB 应有一个主 fab 按钮。FAB 也可以包含一个或多个 [fab 列表](./fab-list)，这些列表包含在主 fab 按钮被点击时显示的相关按钮。

## 基本用法

import BasicUsage from '@site/static/usage/v6/fab/basic/index.md';

<BasicUsage />

## 列表侧边

[fab 列表](./fab-list) 组件的 `side` 属性控制其相对于主 fab 按钮出现的位置。只要所有 fab 列表的 `side` 值不同，单个 fab 可以包含多个 fab 列表。

import ListSide from '@site/static/usage/v6/fab/list-side/index.md';

<ListSide />

## 定位

为了将 fab 放置在固定位置，应将其分配给外部 [内容](./content) 组件的 `fixed` 插槽。使用 `vertical` 和 `horizontal` 属性来控制 fab 在视口中的对齐方式。`edge` 属性将使 fab 按钮与应用标题或页脚重叠。

import Positioning from '@site/static/usage/v6/fab/positioning/index.md';

<Positioning />

## 按钮尺寸

将主 fab 按钮的 `size` 属性设置为 `"small"` 会将其渲染为迷你尺寸。请注意，此属性在与内部 fab 按钮一起使用时不会产生效果。

import ButtonSizing from '@site/static/usage/v6/fab/button-sizing/index.md';

<ButtonSizing />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v6/fab/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSCustomProperties from '@site/static/usage/v6/fab/theming/css-custom-properties/index.md';

<CSSCustomProperties />

### CSS 影子部件

import CSSShadowParts from '@site/static/usage/v6/fab/theming/css-shadow-parts/index.md';

<CSSShadowParts />

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS 影子部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />