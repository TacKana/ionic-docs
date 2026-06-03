---
title: "ion-reorder"
---
import Props from '@ionic-internal/component-api/v8/reorder/props.md';
import Events from '@ionic-internal/component-api/v8/reorder/events.md';
import Methods from '@ionic-internal/component-api/v8/reorder/methods.md';
import Parts from '@ionic-internal/component-api/v8/reorder/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/reorder/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/reorder/slots.md';

<head>
  <title>ion-reorder：用于重新排序项目的拖放图标</title>
  <meta name="description" content="Ion-reorder 是用于在 ion-reorder-group 内拖放项目的锚点。阅读以了解更多关于自定义重新排序图标和项目的信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


Reorder 是一个允许拖动项目以更改其在项目组中顺序的组件。它必须在[重新排序组](./reorder-group)内使用，以提供可视化的拖放界面。

重新排序是用于拖放项目的锚点。重新排序完成后，将从重新排序组发出 `ionReorderEnd` 事件，并且需要调用 `complete` 方法。


## 基本用法

重新排序最基本的示例是将其插入到项目（item）内部。默认情况下，重新排序组的功能是禁用的。可以通过将重新排序组上的 `disabled` 属性设置为 `false` 来启用它。然后可以使用重新排序图标拖放项目并对其重新排序。

import Basic from '@site/static/usage/v8/reorder/basic/index.md';

<Basic />


## 切换重新排序

在某些情况下，可能需要提供切换重新排序功能的选项。这可以通过使 `disabled` 属性基于函数或变量具有响应性来实现。

import TogglingDisabled from '@site/static/usage/v8/reorder/toggling-disabled/index.md';

<TogglingDisabled />


## 自定义重新排序图标

重新排序组件在 iOS 上使用三条线的重新排序图标，在 Material Design 上使用两条线的图标。可以通过在 reorder 内部添加一个使用任何可用 Ionicons 的 [Icon](https://ionic.io/ionicons) 组件来自定义此图标。

import CustomIcon from '@site/static/usage/v8/reorder/custom-icon/index.md';

<CustomIcon />


## Reorder 包装器

Reorder 也可以用作项目（item）的包装器，使项目本身成为锚点。点击下方任意项目并拖动以重新排序列表。

import Wrapper from '@site/static/usage/v8/reorder/wrapper/index.md';

<Wrapper />


## 更新数据

当在重新排序组上调用 `complete` 方法且不带参数时，DOM 节点将被重新排序。如果项目是从需要排序的数据数组中渲染的，这可能导致数据和 DOM 不同步。

为了在重新排序完成后对数组进行排序，应将数组作为参数传递给 `complete` 方法。`complete` 方法将对数组进行排序并返回它，以便可以重新赋值。注意，传递数组将阻止 Ionic 重新排序 DOM 节点。

在某些情况下，应用可能需要自行重新排序数组和 DOM 节点。如果需要这样做，应将 `false` 作为参数传递给 `complete` 方法。这将阻止 Ionic 重新排序重新排序组内的任何 DOM 节点。

无论采用何种方法，如果在循环中提供重新排序项目，应提供稳定的标识。这意味着在 Angular 中使用 `track`，在 React 和 Vue 中使用 `key`。

import UpdatingData from '@site/static/usage/v8/reorder/updating-data/index.md';

<UpdatingData />

## 事件处理

### 使用 `ionReorderStart` 和 `ionReorderEnd`

`ionReorderStart` 事件在用户开始重新排序手势时触发。该事件在用户点击并按住一个项目时触发，在任何移动发生之前。这对于为重新排序操作准备 UI 非常有用，例如隐藏某些元素或更新项目的视觉状态。例如，列表项目中的图标可以在拖拽时隐藏，并在重新排序完成后再次显示。

`ionReorderEnd` 事件在用户完成重新排序手势时触发。这发生在用户释放他们拖动的项目时，例如在触摸屏上抬起手指或松开鼠标按钮。该事件包含项目的 `from` 和 `to` 索引，以及应调用的 `complete` 方法来最终确定重新排序操作。`from` 索引始终是手势开始时项目的位置，而 `to` 索引是其最终位置。即使没有项目改变位置，此事件也会触发，在这种情况下 `from` 和 `to` 索引将相同。

import ReorderStartEndEvents from '@site/static/usage/v8/reorder/reorder-start-end-events/index.md';

<ReorderStartEndEvents />

### 使用 `ionReorderMove`

`ionReorderMove` 事件在用户拖拽项目期间持续触发。该事件包含项目的 `from` 和 `to` 索引。与 `ionReorderEnd` 不同，此事件中的 `from` 索引表示项目的上一个已知位置（随着项目移动而更新），而 `to` 索引表示其当前位置。如果自上一个事件以来项目未改变位置，则 `from` 和 `to` 索引将相同。此事件对于跟踪拖拽操作期间的位置变化非常有用。例如，可以在拖拽项目时实时更新项目的排名或编号，以保持逻辑上的升序排列。

:::warning
不要在 `ionReorderMove` 事件期间调用 `complete` 方法，因为它可能破坏手势。
:::

import ReorderMoveEvent from '@site/static/usage/v8/reorder/reorder-move-event/index.md';

<ReorderMoveEvent />

## 与虚拟滚动一起使用

Reorder 需要滚动容器才能正常工作。使用虚拟滚动解决方案时，需要提供自定义滚动目标。需要禁用在内容上的滚动，并将 `.ion-content-scroll-host` 类添加到负责滚动的元素上。

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
