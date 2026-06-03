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
    content="FAB（浮动操作按钮）是包含一个或多个 fab 按钮的容器元素。使用 Ionic 框架创建 Android 和 iOS 应用时使用 ion-fab。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

FAB（浮动操作按钮）是包含一个或多个[fab 按钮](./fab-button)的容器元素。它们应放置在固定位置，不随内容滚动。FAB 应有一个主 fab 按钮。FAB 还可以包含一个或多个[fab 列表](./fab-list)，其中包含相关按钮，当点击主 fab 按钮时显示。

## 基本用法

import BasicUsage from '@site/static/usage/v7/fab/basic/index.md';

<BasicUsage />

## 列表方向

[fab 列表](./fab-list)组件的 `side` 属性控制其相对于主 fab 按钮出现的位置。单个 fab 可以有多个 fab 列表，只要它们都有不同的 `side` 值。

import ListSide from '@site/static/usage/v7/fab/list-side/index.md';

<ListSide />

## 定位

为了将 fab 放置在固定位置，应将其分配给外部[内容](./content)组件的 `fixed` 插槽。使用 `vertical` 和 `horizontal` 属性控制 fab 在视口中的对齐方式。`edge` 属性将使 fab 按钮与应用的头部或底部重叠。

import Positioning from '@site/static/usage/v7/fab/positioning/index.md';

<Positioning />

### 安全区域

如果没有 `ion-header` 或 `ion-footer` 组件，fab 可能被设备的刘海、状态栏或其他设备 UI 遮挡。在这些情况下，顶部和底部的[安全区域](/theming/advanced#安全区域内边距)不会被考虑。可以通过使用 [`--ion-safe-area-(dir)` 变量](/theming/advanced#全局变量)进行调整。

当使用 `vertical` 设置为 `"top"` 的 fab 且没有 `ion-header` 时，需要设置顶部外边距：

```css
ion-fab {
  margin-top: var(--ion-safe-area-top, 0);
}
```

当使用 `vertical` 设置为 `"bottom"` 的 fab 且没有 `ion-footer` 时，需要设置底部外边距：

```css
ion-fab {
  margin-bottom: var(--ion-safe-area-bottom, 0);
}
```

如果有 `ion-header`（对于 `vertical` 设置为 `"top"` 的 fab）或 `ion-footer`（对于 `vertical` 设置为 `"bottom"` 的 fab），则无需调整 CSS，因为 fab 相对于头部或底部定位。

import SafeArea from '@site/static/usage/v7/fab/safe-area/index.md';

<SafeArea />

## 按钮尺寸

将主 fab 按钮的 `size` 属性设置为 `"small"` 将以迷你尺寸渲染。请注意，此属性在内部 fab 按钮上无效。

import ButtonSizing from '@site/static/usage/v7/fab/button-sizing/index.md';

<ButtonSizing />

## 主题

### 颜色

import Colors from '@site/static/usage/v7/fab/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSCustomProperties from '@site/static/usage/v7/fab/theming/css-custom-properties/index.md';

<CSSCustomProperties />

### CSS 阴影部分

import CSSShadowParts from '@site/static/usage/v7/fab/theming/css-shadow-parts/index.md';

<CSSShadowParts />

## 无障碍访问

### 标签

由于 FAB 可以只包含图标，开发者必须在每个 `ion-fab-button` 实例上提供 `aria-label`。没有此标签，辅助技术将无法宣布每个按钮的用途。

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
