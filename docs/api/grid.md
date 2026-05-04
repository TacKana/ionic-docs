---
title: 网格组件
---
import Props from '@ionic-internal/component-api/v8/grid/props.md';
import Events from '@ionic-internal/component-api/v8/grid/events.md';
import Methods from '@ionic-internal/component-api/v8/grid/methods.md';
import Parts from '@ionic-internal/component-api/v8/grid/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/grid/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/grid/slots.md';

<head>
  <title>ion-grid：构建移动优先自定义应用布局的显示网格</title>
  <meta name="description" content="Ion-Grid 是一个移动优先的弹性盒子系统，采用 12 列布局，并基于屏幕尺寸提供不同的断点，用于构建自定义的应用显示布局。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


网格是一个强大的移动优先弹性盒子系统，用于构建自定义布局。它由三个单元组成——一个网格、[行(row(s))](row.md) 和 [列(col(s))](col.md)。列将扩展以填满行，并会调整大小以适应额外的列。它基于 12 列布局，并根据屏幕尺寸提供不同的断点。列数可以使用 CSS 进行自定义。

## 概述

- 网格充当所有行和列的容器。网格会占据其容器的全部宽度，
  但添加 `fixed` 属性将根据屏幕尺寸设置宽度，请参阅下面的 [固定网格](#fixed-grid)。
- 行是列的水平分组，用于正确排列列。
- 内容应放置在列内，并且只有列可以是行的直接子元素。
- `size` 属性表示每行默认 12 列中要使用的列数。
  因此，可以向列添加 `size="4"` 以占据网格的 1/3，即 12 列中的 4 列。
- 未指定 size 值的列将自动具有相等的宽度。例如，四个列将各自自动为 25% 宽。
- 列宽设置为百分比，因此它们始终是流动的，并相对于其父元素调整大小。
- 各个列之间有内边距。但是，可以通过向网格添加 `ion-no-padding` 类来移除网格和列的内边距。有关可应用于网格的更多样式，请参阅 [CSS 工具类](../layout/css-utilities)。
- 有五个网格层级，每个响应式断点对应一个：所有断点（超小）、小、中、大和超大。
- 网格层级基于最小宽度，这意味着它们适用于其层级及所有更大的层级
  （例如，`size-sm="4"` 适用于小、中、大和超大设备）。
- 网格可以通过 CSS 变量进行自定义。请参阅 [自定义网格](#customizing-the-grid)。

<LegacyAnchor id="default-breakpoints" />

## 默认断点

网格的默认断点及相应属性定义在下表中。目前无法自定义断点值。有关为何无法自定义的更多信息，请参阅 [媒体查询中的变量](../theming/advanced#variables-in-media-queries)。

| 名称 | 值      | 宽度属性     | 偏移属性       | 推属性       | 拉属性       | 描述                                |
| ---- | ------- | ------------ | -------------- | ------------ | ------------ | ----------------------------------- |
| xs   | 0       | `size`       | `offset`       | `push`       | `pull`       | 设置列当 (最小宽度: 0)              |
| sm   | 576px   | `sizeSm`     | `offsetSm`     | `pushSm`     | `pullSm`     | 设置列当 (最小宽度: 576px)          |
| md   | 768px   | `sizeMd`     | `offsetMd`     | `pushMd`     | `pullMd`     | 设置列当 (最小宽度: 768px)          |
| lg   | 992px   | `sizeLg`     | `offsetLg`     | `pushLg`     | `pullLg`     | 设置列当 (最小宽度: 992px)          |
| xl   | 1200px  | `sizeXl`     | `offsetXl`     | `pushXl`     | `pullXl`     | 设置列当 (最小宽度: 1200px)         |


## 基本用法

默认情况下，对于所有设备和屏幕尺寸，列将在行内占据相等的宽度。

import Basic from '@site/static/usage/v8/grid/basic/index.md';

<Basic />


<LegacyAnchor id="fixed-grid" />

## 固定网格

网格占据其容器 100% 的宽度。通过向网格添加 `fixed` 属性，宽度将根据屏幕尺寸设置。每个断点的网格宽度列在下表中，但可以自定义。更多信息请参阅 [自定义网格](#customizing-the-grid)。在 StackBlitz 中打开以下示例并调整屏幕大小以查看网格宽度的变化。

| 名称 | 值      | 描述                                       |
| ---- | ------- | ------------------------------------------ |
| xs   | 100%    | 对于 xs 屏幕，宽度为 100%                  |
| sm   | 540px   | 当 (最小宽度: 576px) 时，设置网格宽度为 540px  |
| md   | 720px   | 当 (最小宽度: 768px) 时，设置网格宽度为 720px  |
| lg   | 960px   | 当 (最小宽度: 992px) 时，设置网格宽度为 960px  |
| xl   | 1140px  | 当 (最小宽度: 1200px) 时，设置网格宽度为 1140px |

import Fixed from '@site/static/usage/v8/grid/fixed/index.md';

<Fixed />


## 列尺寸

可以将列设置为特定尺寸，以占据总列数中的一定数量，或根据内容调整其宽度。默认列数为 12，但这可以自定义。更多信息请参阅下面的 [列数](#number-of-columns) 部分。

### 基于内容的尺寸

通过将 `size` 设置为 `"auto"`，列可以根据其内容的自然宽度调整自身大小。当将列设置为绝对宽度（例如特定的像素数）时，这是必要的。自动宽度列旁边的列将调整大小以填充行。

import SizeAuto from '@site/static/usage/v8/grid/size-auto/index.md';

<SizeAuto />


### 指定尺寸

设置列的 `size`，其他列将自动围绕其调整大小。如果在所有列上都指定了尺寸，且总和未达到总列数，则列后面将会有空白区域。

import Size from '@site/static/usage/v8/grid/size/index.md';

<Size />

### 响应式尺寸

`size` 属性将改变所有 [断点](#default-breakpoints) 的列宽。列还提供了几个以断点名附加在 "size" 之后的尺寸属性。这些属性可用于根据屏幕尺寸改变列的宽度。在 StackBlitz 中打开以下示例并调整屏幕大小以查看列宽的变化。

import SizeResponsive from '@site/static/usage/v8/grid/size-responsive/index.md';

<SizeResponsive />


## 列偏移

列可以通过总列数中的一定列数偏移到右侧。

### 指定偏移

可以使用 `offset` 属性将列向右移动。该属性通过指定列数增加列的左边距。如果存在右侧的列，它也会将它们向右移动。

import Offset from '@site/static/usage/v8/grid/offset/index.md';

<Offset />

### 响应式偏移

`offset` 属性将改变所有 [断点](#default-breakpoints) 的列的左边距。列还提供了几个以断点名附加在 "offset" 之后的偏移属性。这些属性可用于根据屏幕尺寸改变列的偏移量。在 StackBlitz 中打开以下示例并调整屏幕大小以查看列偏移的变化。

import OffsetResponsive from '@site/static/usage/v8/grid/offset-responsive/index.md';

<OffsetResponsive />


## 列推拉

列可以通过总列数中的一定列数被推到右侧或拉到左侧。

### 指定推拉

通过添加 `push` 和 `pull` 属性来重新排序列。这些属性通过指定的列数调整列的 `left` 和 `right`，从而轻松地重新排序列。如果列被移动到另一个列所在的位置，这将导致列重叠。

import PushPull from '@site/static/usage/v8/grid/push-pull/index.md';

<PushPull />

### 响应式推拉

`push` 和 `pull` 属性将改变所有 [断点](#default-breakpoints) 的列的位置。列还提供了几个以断点名附加在 "push" / "pull" 之后的推拉属性。这些属性可用于根据屏幕尺寸改变列的位置。在 StackBlitz 中打开以下示例并调整屏幕大小以查看列位置的变化。

import PushPullResponsive from '@site/static/usage/v8/grid/push-pull-responsive/index.md';

<PushPullResponsive />

## 对齐

### 垂直对齐

可以通过向行添加不同的类来垂直对齐行内的所有列。有关可用类的列表，请参阅 [css 工具类](/layout/css-utilities#flex-container-properties)。

import VerticalAlignment from '@site/static/usage/v8/grid/vertical-alignment/index.md';

<VerticalAlignment />


### 水平对齐

可以通过向行添加不同的类来水平对齐行内的所有列。有关可用类的列表，请参阅 [css 工具类](/layout/css-utilities.md#flex-container-properties)。

import HorizontalAlignment from '@site/static/usage/v8/grid/horizontal-alignment/index.md';

<HorizontalAlignment />

<LegacyAnchor id="customizing-the-grid" />

## 自定义网格

使用我们内置的 CSS 变量，可以自定义预定义的网格属性。更改内边距的值、列数等。

### 固定宽度

固定网格的宽度可以使用 `--ion-grid-width` CSS 变量为所有断点设置。要覆盖单个断点，请使用 `--ion-grid-width-{breakpoint}` CSS 变量。每个断点的默认值可以在 [固定网格](#fixed-grid) 部分找到。在 StackBlitz 中打开以下示例并调整屏幕大小以查看网格宽度的变化。

import Width from '@site/static/usage/v8/grid/customizing/width/index.md';

<Width />

<LegacyAnchor id="number-of-columns" />

### 列数

网格列数可以使用 `--ion-grid-columns` CSS 变量进行修改。默认有 12 个网格列，但这可以更改为任何正整数，并用于计算每个单独列的宽度。

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