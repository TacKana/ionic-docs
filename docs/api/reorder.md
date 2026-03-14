---
title: 可排序项目组件
---
import Props from '@ionic-internal/component-api/v8/reorder/props.md';
import Events from '@ionic-internal/component-api/v8/reorder/events.md';
import Methods from '@ionic-internal/component-api/v8/reorder/methods.md';
import Parts from '@ionic-internal/component-api/v8/reorder/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/reorder/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/reorder/slots.md';

<head>
  <title>ion-reorder：拖拽图标以重新排序项目</title>
  <meta name="description" content="ion-reorder 是用于在 ion-reorder-group 内部拖放项目的锚点。阅读以了解更多关于自定义重排序图标和项目的信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Reorder 是一个组件，允许通过拖拽来改变项目在组内的顺序。它必须用在 [reorder group](./reorder-group) 内部，以提供可视化的拖放界面。

Reorder 是用于拖放项目的锚点。一旦重排序完成，`ionReorderEnd` 事件将从 reorder group 中分发，并且需要调用 `complete` 方法。


## 基本用法

Reorder 最基本的使用示例是将其放在一个项目内部。默认情况下，reorder group 的重排序功能是禁用的。可以通过将 reorder group 的 `disabled` 属性设置为 `false` 来启用。然后就可以使用重排序图标来拖放项目并重新排序。

import Basic from '@site/static/usage/v8/reorder/basic/index.md';

<Basic />


## 切换重排序功能

在某些情况下，可能希望有切换重排序功能的选项。这可以通过使 `disabled` 属性基于函数或变量变为响应式来实现。

import TogglingDisabled from '@site/static/usage/v8/reorder/toggling-disabled/index.md';

<TogglingDisabled />


## 自定义重排序图标

Reorder 组件在 iOS 上使用带有三条线的图标，在 Material Design 上使用带有两条线的图标。可以通过在 reorder 内部添加一个 [Icon](https://ionic.io/ionicons) 组件，并使用任何可用的 Ionicons 来自定义图标。

import CustomIcon from '@site/static/usage/v8/reorder/custom-icon/index.md';

<CustomIcon />


## Reorder 包装器

Reorder 也可以用作项目的包装器，使项目本身成为锚点。点击下方任意项目的任意位置并拖动即可重新排序列表。

import Wrapper from '@site/static/usage/v8/reorder/wrapper/index.md';

<Wrapper />


## 更新数据

当在 reorder group 上调用不带参数的 `complete` 方法时，DOM 节点将被重新排序。如果项目是从一个需要排序的数据数组渲染的，这可能导致数据和 DOM 不同步。

为了在重排序完成后对数组进行排序，应该将数组作为参数传递给 `complete` 方法。`complete` 方法将对数组进行排序并返回它，以便可以重新赋值。请注意，传递数组将阻止 Ionic 重新排序 DOM 节点。

在某些情况下，应用程序可能需要自行重新排序数组和 DOM 节点。如果需要这样做，应向 `complete` 方法传递 `false` 作为参数。这将阻止 Ionic 重新排序 reorder group 内的任何 DOM 节点。

无论采用哪种方法，如果项目在循环中提供，则应为其提供稳定的标识。这意味着在 Angular 中使用 `track`，在 React 和 Vue 中使用 `key`。

import UpdatingData from '@site/static/usage/v8/reorder/updating-data/index.md';

<UpdatingData />

## 事件处理

### 使用 `ionReorderStart` 和 `ionReorderEnd`

当用户开始重排序手势时，会触发 `ionReorderStart` 事件。该事件在用户点击并按住项目时触发，发生在任何移动之前。这对于为重排序操作准备 UI 很有用，例如隐藏某些元素或更新项目的视觉状态。例如，列表项中的图标可以在拖拽时隐藏，并在重排序完成后再次显示。

当用户完成重排序手势时，会触发 `ionReorderEnd` 事件。这发生在用户释放他们正在拖动的项目时，例如在触摸屏上抬起手指或释放鼠标按钮。该事件包含项目的 `from` 和 `to` 索引，以及应调用的 `complete` 方法以完成重排序操作。`from` 索引始终是手势开始时项目的位置，而 `to` 索引是其最终位置。即使没有项目改变位置，该事件也会触发，在这种情况下，`from` 和 `to` 索引将相同。

import ReorderStartEndEvents from '@site/static/usage/v8/reorder/reorder-start-end-events/index.md';

<ReorderStartEndEvents />

### 使用 `ionReorderMove`

在用户拖拽项目期间，`ionReorderMove` 事件会在重排序手势期间持续触发。该事件包含项目的 `from` 和 `to` 索引。与 `ionReorderEnd` 不同，此事件中的 `from` 索引表示项目的最后已知位置（随着项目移动而更新），而 `to` 索引表示其当前位置。如果项目自上次事件以来没有改变位置，则 `from` 和 `to` 索引将相同。此事件对于跟踪拖拽操作期间的位置变化很有用。例如，可以在项目被拖拽时实时更新其排名或编号，以保持逻辑上的升序。

:::warning
不要在 `ionReorderMove` 事件中调用 `complete` 方法，因为它可能会破坏手势。
:::

import ReorderMoveEvent from '@site/static/usage/v8/reorder/reorder-move-event/index.md';

<ReorderMoveEvent />

## 与虚拟滚动一起使用

Reorder 需要一个滚动容器才能正常工作。当使用虚拟滚动方案时，需要提供一个自定义的滚动目标。必须禁用内容的滚动，并且负责滚动的元素需要添加 `.ion-content-scroll-host` 类。

import CustomScrollTarget from '@site/static/usage/v8/reorder/custom-scroll-target/index.md';

<CustomScrollTarget />


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