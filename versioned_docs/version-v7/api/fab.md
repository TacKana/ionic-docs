---
title: 'ion-fab'
---

import Props from '@ionic-internal/component-api/v7/fab/props.md';
import Events from '@ionic-internal/component-api/v7/fab/events.md';
import Methods from '@ionic-internal/component-api/v7/fab/methods.md';
import Parts from '@ionic-internal/component-api/v7/fab/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/fab/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/fab/slots.md';

<head>
  <title>ion-fab：适用于 Android 和 iOS 的 Ionic 浮动操作按钮</title>
  <meta
    name="description"
    content="浮动操作按钮（FAB）是一种容器元素，包含一个或多个浮动操作按钮。在使用 Ionic Framework 创建 Android 和 iOS 应用时，请使用 ion-fab。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

浮动操作按钮（FAB）是包含一个或多个[浮动操作按钮](./fab-button)的容器元素。它们应放置在固定位置，不随内容滚动。FAB 应有一个主要的浮动操作按钮。FAB 还可以包含一个或多个[浮动操作列表](./fab-list)，这些列表包含在主浮动操作按钮被点击时显示的相关按钮。

## 基本用法

import BasicUsage from '@site/static/usage/v7/fab/basic/index.md';

<BasicUsage />

## 列表位置

[浮动操作列表](./fab-list)组件的 `side` 属性控制其相对于主浮动操作按钮的位置。只要所有浮动操作列表的 `side` 值不同，一个 FAB 可以包含多个浮动操作列表。

import ListSide from '@site/static/usage/v7/fab/list-side/index.md';

<ListSide />

## 定位

为了将 FAB 放置在固定位置，应将其分配给外层[内容](./content)组件的 `fixed` 插槽。使用 `vertical` 和 `horizontal` 属性来控制 FAB 在视口中的对齐方式。`edge` 属性将使浮动操作按钮与应用标题栏或页脚重叠。

import Positioning from '@site/static/usage/v7/fab/positioning/index.md';

<Positioning />

### 安全区域

如果没有 `ion-header` 或 `ion-footer` 组件，FAB 可能会被设备的刘海屏、状态栏或其他设备 UI 遮挡。在这些情况下，不会考虑顶部和底部的[安全区域](/v7/theming/advanced#safe-area-padding)。这可以通过使用 [`--ion-safe-area-(dir)` 变量](/v7/theming/advanced#application-variables) 来调整。

当使用 `vertical` 设置为 `"top"` 的 FAB 而没有 `ion-header` 时，需要设置顶部边距：

```css
ion-fab {
  margin-top: var(--ion-safe-area-top, 0);
}
```

当使用 `vertical` 设置为 `"bottom"` 的 FAB 而没有 `ion-footer` 时，需要设置底部边距：

```css
ion-fab {
  margin-bottom: var(--ion-safe-area-bottom, 0);
}
```

如果有 `ion-header`（对于 `vertical` 设置为 `"top"` 的 FAB）或 `ion-footer`（对于 `vertical` 设置为 `"bottom"` 的 FAB），则无需 CSS 调整，因为 FAB 会相对于标题栏或页脚定位。

import SafeArea from '@site/static/usage/v7/fab/safe-area/index.md';

<SafeArea />

## 按钮尺寸

将主浮动操作按钮的 `size` 属性设置为 `"small"` 会将其渲染为迷你尺寸。请注意，此属性在内部浮动操作按钮上使用时不产生效果。

import ButtonSizing from '@site/static/usage/v7/fab/button-sizing/index.md';

<ButtonSizing />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v7/fab/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSCustomProperties from '@site/static/usage/v7/fab/theming/css-custom-properties/index.md';

<CSSCustomProperties />

### CSS 阴影部件

import CSSShadowParts from '@site/static/usage/v7/fab/theming/css-shadow-parts/index.md';

<CSSShadowParts />

## 无障碍访问

### 标签

由于 FAB 仅允许包含图标，开发人员必须在每个 `ion-fab-button` 实例上提供 `aria-label`。没有此标签，辅助技术将无法传达每个按钮的用途。

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS 阴影部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />