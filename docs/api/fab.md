---
title: "ion-fab"
---
import Props from '@ionic-internal/component-api/v8/fab/props.md';
import Events from '@ionic-internal/component-api/v8/fab/events.md';
import Methods from '@ionic-internal/component-api/v8/fab/methods.md';
import Parts from '@ionic-internal/component-api/v8/fab/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/fab/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/fab/slots.md';

<head>
  <title>ion-fab: Android 和 iOS 的浮动操作按钮</title>
  <meta name="description" content="FAB（浮动操作按钮）是包含一个或多个 fab 按钮的容器元素。使用 Ionic Framework 创建 Android 和 iOS 应用时使用 ion-fab。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

FAB 是包含一个或多个 [fab 按钮](./fab-button) 的容器元素。它们应放置在不会随内容滚动的固定位置。FAB 应有一个主 fab 按钮。FAB 还可以包含一个或多个 [fab 列表](./fab-list)，这些列表包含相关的按钮，点击主 fab 按钮时会显示。

## 基本用法

import BasicUsage from '@site/static/usage/v8/fab/basic/index.md';

<BasicUsage />

## 列表侧边

[fab 列表](./fab-list)组件的 `side` 属性控制其相对于主 fab 按钮出现的位置。单个 fab 可以有多个 fab 列表，只要它们都有不同的 `side` 值。

import ListSide from '@site/static/usage/v8/fab/list-side/index.md';

<ListSide />

## 定位

要将 fab 放置在固定位置，应将其分配给外部 [content](./content) 组件的 `fixed` 插槽。使用 `vertical` 和 `horizontal` 属性来控制 fab 在视口中的对齐方式。`edge` 属性将使 fab 按钮与应用的头部或底部重叠。

import Positioning from '@site/static/usage/v8/fab/positioning/index.md';

<Positioning />

### 安全区域

如果没有 `ion-header` 或 `ion-footer` 组件，fab 可能会被设备的刘海屏、状态栏或其他设备 UI 遮挡。在这些情况下，顶部和底部的[安全区域](/theming/advanced#安全区域内边距)不会被考虑在内。可以通过使用 [`--ion-safe-area-(dir)` 变量](/theming/advanced#应用变量)进行调整。

当使用 `vertical` 设置为 `"top"` 但没有 `ion-header` 的 fab 时，需要设置顶部边距：

```css
ion-fab {
  margin-top: var(--ion-safe-area-top, 0);
}
```

当使用 `vertical` 设置为 `"bottom"` 但没有 `ion-footer` 的 fab 时，需要设置底部边距：

```css
ion-fab {
  margin-bottom: var(--ion-safe-area-bottom, 0);
}
```

如果有 `ion-header`（对于 `vertical` 设置为 `"top"` 的 fab）或 `ion-footer`（对于 `vertical` 设置为 `"bottom"` 的 fab），则无需进行 CSS 调整，因为 fab 相对于头部或底部进行定位。

import SafeArea from '@site/static/usage/v8/fab/safe-area/index.md';

<SafeArea />

### 相对于无限列表

在视图中包含许多交互元素的场景中，例如无限滚动列表，如果浮动操作按钮（FAB）放置在 DOM 中所有项目的下方，用户可能难以导航到它。

通过将 [Content](./content) 上的 `fixedSlotPlacement` 属性设置为 `before`，FAB 将放置在 DOM 中主要内容之前。这确保 FAB 在其他交互元素获得焦点之前接收键盘焦点，使用户更容易访问 FAB。

import BeforeContent from '@site/static/usage/v8/fab/before-content/index.md';

<BeforeContent />

## 按钮大小

将主 fab 按钮的 `size` 属性设置为 `"small"` 将以迷你尺寸渲染它。请注意，此属性对内部 fab 按钮没有影响。

import ButtonSizing from '@site/static/usage/v8/fab/button-sizing/index.md';

<ButtonSizing />

## 主题

### 颜色

import Colors from '@site/static/usage/v8/fab/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSCustomProperties from '@site/static/usage/v8/fab/theming/css-custom-properties/index.md';

<CSSCustomProperties />

### CSS Shadow Parts

import CSSShadowParts from '@site/static/usage/v8/fab/theming/css-shadow-parts/index.md';

<CSSShadowParts />

## 辅助功能

### 标签

由于 FAB 只能包含图标，开发人员必须在每个 `ion-fab-button` 实例上提供 `aria-label`。如果没有此标签，辅助技术将无法宣布每个按钮的用途。

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
