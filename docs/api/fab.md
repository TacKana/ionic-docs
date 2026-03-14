---
title: 悬浮操作按钮组件
---
import Props from '@ionic-internal/component-api/v8/fab/props.md';
import Events from '@ionic-internal/component-api/v8/fab/events.md';
import Methods from '@ionic-internal/component-api/v8/fab/methods.md';
import Parts from '@ionic-internal/component-api/v8/fab/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/fab/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/fab/slots.md';

<head>
  <title>ion-fab: 适用于 Android 和 iOS 的 Ionic 浮动操作按钮</title>
  <meta name="description" content="浮动操作按钮 (FAB) 是包含一个或多个浮动操作按钮的容器元素。在使用 Ionic Framework 创建 Android 和 iOS 应用时使用 ion-fab 组件。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

浮动操作按钮 (FAB) 是包含一个或多个 [浮动操作按钮](./fab-button) 的容器元素。它们应放置在固定位置，不随内容滚动。每个 FAB 应有一个主浮动操作按钮。FAB 还可以包含一个或多个 [浮动操作按钮列表](./fab-list)，这些列表包含在主浮动操作按钮被点击时显示的相关按钮。

## 基本用法

import BasicUsage from '@site/static/usage/v8/fab/basic/index.md';

<BasicUsage />

## 列表位置

[浮动操作按钮列表](./fab-list) 组件的 `side` 属性控制其相对于主浮动操作按钮显示的位置。只要所有列表的 `side` 值不同，一个 FAB 可以包含多个浮动操作按钮列表。

import ListSide from '@site/static/usage/v8/fab/list-side/index.md';

<ListSide />

## 定位

要将 FAB 放置在固定位置，应将其分配给外层 [内容](./content) 组件的 `fixed` 插槽。使用 `vertical` 和 `horizontal` 属性来控制 FAB 在视口中的对齐方式。`edge` 属性将使浮动操作按钮与应用页眉或页脚重叠。

import Positioning from '@site/static/usage/v8/fab/positioning/index.md';

<Positioning />

### 安全区域

如果没有 `ion-header` 或 `ion-footer` 组件，FAB 可能会被设备的刘海屏、状态栏或其他设备 UI 遮挡。在这些情况下，顶部和底部的 [安全区域](/docs/theming/advanced#safe-area-padding) 不会被计入。可以通过使用 [`--ion-safe-area-(dir)` 变量](/docs/theming/advanced#application-variables) 来调整。

当使用 `vertical` 设置为 `"top"` 的 FAB 且没有 `ion-header` 时，需要设置顶部边距：

```css
ion-fab {
  margin-top: var(--ion-safe-area-top, 0);
}
```

当使用 `vertical` 设置为 `"bottom"` 的 FAB 且没有 `ion-footer` 时，需要设置底部边距：

```css
ion-fab {
  margin-bottom: var(--ion-safe-area-bottom, 0);
}
```

如果有 `ion-header`（对于 `vertical` 设置为 `"top"` 的 FAB）或 `ion-footer`（对于 `vertical` 设置为 `"bottom"` 的 FAB），则不需要进行 CSS 调整，因为 FAB 会相对于页眉或页脚定位。

import SafeArea from '@site/static/usage/v8/fab/safe-area/index.md';

<SafeArea />

### 相对于无限列表

在某些场景下，视图中包含许多交互元素，例如无限滚动的列表，如果将浮动操作按钮 (FAB) 放置在 DOM 中所有项目之后，用户可能难以导航到它。

通过在 [Content](./content) 上设置 `fixedSlotPlacement` 属性为 `before`，FAB 将被放置在 DOM 中主内容之前。这确保 FAB 在其他交互元素获得焦点之前获得键盘焦点，从而使用户更容易访问 FAB。

import BeforeContent from '@site/static/usage/v8/fab/before-content/index.md';

<BeforeContent />

## 按钮尺寸

将主浮动操作按钮的 `size` 属性设置为 `"small"` 会将其渲染为迷你尺寸。请注意，此属性在内层浮动操作按钮上使用时不会产生效果。

import ButtonSizing from '@site/static/usage/v8/fab/button-sizing/index.md';

<ButtonSizing />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v8/fab/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSCustomProperties from '@site/static/usage/v8/fab/theming/css-custom-properties/index.md';

<CSSCustomProperties />

### CSS Shadow Parts

import CSSShadowParts from '@site/static/usage/v8/fab/theming/css-shadow-parts/index.md';

<CSSShadowParts />

## 可访问性

### 标签

由于 FAB 只能包含图标，开发者必须在每个 `ion-fab-button` 实例上提供 `aria-label`。没有此标签，辅助技术将无法宣布每个按钮的用途。

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