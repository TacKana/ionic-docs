---
title: "ion-grid"
---
import Props from '@ionic-internal/component-api/v8/grid/props.md';
import Events from '@ionic-internal/component-api/v8/grid/events.md';
import Methods from '@ionic-internal/component-api/v8/grid/methods.md';
import Parts from '@ionic-internal/component-api/v8/grid/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/grid/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/grid/slots.md';

<head>
  <title>ion-grid: 移动优先的自定义应用布局显示网格</title>
  <meta name="description" content="Ion-Grid 是一个移动优先的 flexbox 系统，用于使用 12 列布局和基于屏幕大小的不同断点构建自定义应用显示布局。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


网格是一个强大的移动优先 flexbox 系统，用于构建自定义布局。它由三个单元组成 —— 网格、[行](row.md)和[列](col.md)。列将扩展以填满行，并将调整大小以适应更多列。它基于 12 列布局，根据屏幕大小有不同的断点。列数可以使用 CSS 自定义。

## 概述

- 网格充当所有行和列的容器。网格占据其容器的全部宽度，但添加 `fixed` 属性将根据屏幕大小设置宽度，请参阅下面的[固定网格](#固定网格)。
- 行是列的水平分组，使列正确对齐。
- 内容应放置在列内，只有列可以是行的直接子元素。
- `size` 属性指示在默认每行 12 列中使用的列数。因此，可以向列添加 `size="4"` 以占据网格的 1/3（即 12 列中的 4 列）。
- 没有 size 值的列将自动具有相等的宽度。例如，四列将各自动占 25% 的宽度。
- 列宽以百分比设置，因此它们始终是流式的，并相对于其父元素调整大小。
- 各个列之间有内边距。但是，可以通过向网格添加 `ion-no-padding` 类来移除网格和列的内边距。请参阅[CSS 实用工具](../layout/css-utilities)了解可应用于网格的更多样式。
- 有五个网格层级，每个对应一个响应式断点：所有断点（超小）、小、中、大和超大。
- 网格层级基于最小宽度，意味着它们适用于自己的层级和所有更大的层级（例如，`size-sm="4"` 适用于小、中、大和超大设备）。
- 可以通过 CSS 变量自定义网格。请参阅[自定义网格](#自定义网格)。

## 默认断点

网格的默认断点和相应属性定义在下表中。当前无法自定义断点值。有关为何无法自定义的更多信息，请参阅[媒体查询中的变量](../theming/advanced#媒体查询中的变量)。

| 名称 | 值    | 宽度属性       | 偏移属性      | 推属性        | 拉属性        | 描述                                   |
| ---- | ------ | -------------- | --------------- | ------------- | ------------- | ------------------------------------ |
| xs   | 0      | `size`         | `offset`        | `push`        | `pull`        | 当 (min-width: 0) 时设置列      |
| sm   | 576px  | `sizeSm`       | `offsetSm`      | `pushSm`      | `pullSm`      | 当 (min-width: 576px) 时设置列  |
| md   | 768px  | `sizeMd`       | `offsetMd`      | `pushMd`      | `pullMd`      | 当 (min-width: 768px) 时设置列  |
| lg   | 992px  | `sizeLg`       | `offsetLg`      | `pushLg`      | `pullLg`      | 当 (min-width: 992px) 时设置列  |
| xl   | 1200px | `sizeXl`       | `offsetXl`      | `pushXl`      | `pullXl`      | 当 (min-width: 1200px) 时设置列 |


## 基本用法

默认情况下，列在所有设备和屏幕尺寸下将在行内占据相等的宽度。

import Basic from '@site/static/usage/v8/grid/basic/index.md';

<Basic />


## 固定网格

网格占据其容器 100% 的宽度。通过向网格添加 `fixed` 属性，宽度将根据屏幕大小设置。每个断点的网格宽度列在下表中，但可以进行自定义。更多信息请参阅[自定义网格](#自定义网格)。在 StackBlitz 中打开以下示例并调整屏幕大小，查看网格宽度变化。

| 名称 | 值    | 描述                                       |
| ---- | ------ | ------------------------------------------------- |
| xs   | 100%   | xs 屏幕宽度为 100%                      |
| sm   | 540px  | 当 (min-width: 576px) 时设置网格宽度为 540px   |
| md   | 720px  | 当 (min-width: 768px) 时设置网格宽度为 720px   |
| lg   | 960px  | 当 (min-width: 992px) 时设置网格宽度为 960px   |
| xl   | 1140px | 当 (min-width: 1200px) 时设置网格宽度为 1140px |

import Fixed from '@site/static/usage/v8/grid/fixed/index.md';

<Fixed />


## 列大小

可以将列设置为特定大小，以占用总列数中的一定数量，或根据其内容调整宽度。默认列数为 12，但可以自定义。更多信息请参阅下面的[列数](#列数)部分。

### 基于内容的大小

将 `size` 设置为 `"auto"` 后，列可以根据其内容的自然宽度自行调整大小。这在将列设置为绝对宽度（如特定像素数）时是必需的。自动宽度列旁边的列将调整大小以填满行。

import SizeAuto from '@site/static/usage/v8/grid/size-auto/index.md';

<SizeAuto />


### 指定大小

设置列的 `size`，其他列将自动围绕它调整大小。如果所有列都指定了大小，但总和未达到总列数，则列之后会有空白空间。

import Size from '@site/static/usage/v8/grid/size/index.md';

<Size />

### 响应式大小

`size` 属性将为所有[断点](#默认断点)更改列宽。Column 还提供了几个在 "size" 末尾附加了断点名称的大小属性。这些属性可用于根据屏幕大小更改列的宽度。在 StackBlitz 中打开以下示例并调整屏幕大小，查看列宽变化。

import SizeResponsive from '@site/static/usage/v8/grid/size-responsive/index.md';

<SizeResponsive />


## 列偏移

可以将列偏移以向右移动一定数量的列。

### 指定偏移

可以使用 `offset` 属性将列向右移动。此属性将列的左边距增加指定列数。它还会向右移动其右侧的列（如果有）。

import Offset from '@site/static/usage/v8/grid/offset/index.md';

<Offset />

### 响应式偏移

`offset` 属性将为所有[断点](#默认断点)更改列的左外边距。Column 还提供了几个在 "offset" 末尾附加了断点名称的偏移属性。这些属性可用于根据屏幕大小更改列的偏移量。在 StackBlitz 中打开以下示例并调整屏幕大小，查看列偏移变化。

import OffsetResponsive from '@site/static/usage/v8/grid/offset-responsive/index.md';

<OffsetResponsive />


## 列的推与拉

可以将列向右推或向左拉一定数量的列。

### 指定推与拉

通过添加 `push` 和 `pull` 属性重新排序列。这些属性将列的 `left` 和 `right` 调整指定的列数，从而方便地重新排序列。如果列被移动到另一个列的位置，它们将会重叠。

import PushPull from '@site/static/usage/v8/grid/push-pull/index.md';

<PushPull />

### 响应式推与拉

`push` 和 `pull` 属性将为所有[断点](#默认断点)更改列的位置。Column 还提供了几个在 "push"/"pull" 末尾附加了断点名称的 `push` 和 `pull` 属性。这些属性可用于根据屏幕大小更改列的位置。在 StackBlitz 中打开以下示例并调整屏幕大小，查看列位置变化。

import PushPullResponsive from '@site/static/usage/v8/grid/push-pull-responsive/index.md';

<PushPullResponsive />

## 对齐

### 垂直对齐

通过向行添加不同的类，所有列可以在行内垂直对齐。有关可用类的列表，请参阅[CSS 实用工具](/layout/css-utilities#flex-容器属性)。

import VerticalAlignment from '@site/static/usage/v8/grid/vertical-alignment/index.md';

<VerticalAlignment />


### 水平对齐

通过向行添加不同的类，所有列可以在行内水平对齐。有关可用类的列表，请参阅[CSS 实用工具](/layout/css-utilities.md#flex-容器属性)。

import HorizontalAlignment from '@site/static/usage/v8/grid/horizontal-alignment/index.md';

<HorizontalAlignment />

## 自定义网格

使用我们内置的 CSS 变量，可以自定义预定义的网格属性。更改内边距值、列数等。

### 固定宽度

固定网格的宽度可以使用 `--ion-grid-width` CSS 变量为所有断点设置。要覆盖单个断点，请使用 `--ion-grid-width-{breakpoint}` CSS 变量。每个断点的默认值可以在[固定网格](#固定网格)部分找到。在 StackBlitz 中打开以下示例并调整屏幕大小，查看网格宽度变化。

import Width from '@site/static/usage/v8/grid/customizing/width/index.md';

<Width />

### 列数

可以使用 `--ion-grid-columns` CSS 变量修改网格列的数量。默认有 12 列，但可以更改为任何正整数，并用于计算每列的宽度。

import ColumnNumber from '@site/static/usage/v8/grid/customizing/column-number/index.md';

<ColumnNumber />

### 内边距

网格容器的内边距可以使用 `--ion-grid-padding` CSS 变量为所有断点设置。要覆盖单个断点，请使用 `--ion-grid-padding-{breakpoint}` CSS 变量。

列的内边距可以使用 `--ion-grid-column-padding` CSS 变量为所有断点设置。要覆盖单个断点，请使用 `--ion-grid-column-padding-{breakpoint}` CSS 变量。

import Padding from '@site/static/usage/v8/grid/customizing/padding/index.md';

<Padding />

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
