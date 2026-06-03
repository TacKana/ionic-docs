---
title: 'ion-grid'
---

import Props from '@ionic-internal/component-api/v7/grid/props.md';
import Events from '@ionic-internal/component-api/v7/grid/events.md';
import Methods from '@ionic-internal/component-api/v7/grid/methods.md';
import Parts from '@ionic-internal/component-api/v7/grid/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/grid/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/grid/slots.md';

<head>
  <title>ion-grid：移动优先自定义应用布局的显示网格</title>
  <meta
    name="description"
    content="ion-grid 是一个移动优先的 flexbox 系统，用于构建自定义应用显示布局，具有 12 列布局和基于屏幕尺寸的不同断点。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

网格（Grid）是一个强大的移动优先 flexbox 系统，用于构建自定义布局。它由三个单元组成——网格、[行](row.md)和[列](col.md)。列将扩展以填满行，并会调整大小以适应额外的列。它基于 12 列布局，具有基于屏幕尺寸的不同断点。列数可以使用 CSS 自定义。

## 概述

- 网格作为所有行和列的容器。网格占据其容器的全部宽度，但添加 `fixed` 属性将根据屏幕尺寸设置宽度，请参阅下面的[固定网格](#固定网格)。
- 行是列的水平分组，使列正确排列。
- 内容应放置在列内，只有列可以是行的直接子元素。
- `size` 属性指示在默认每行 12 列中使用多少列。因此，向列添加 `size="4"` 将占据网格的 1/3，即 12 列中的 4 列。
- 没有设置 size 值的列将自动具有相等的宽度。例如，四列将每列自动占 25% 的宽度。
- 列宽以百分比设置，因此它们始终是流动的，并根据父元素调整大小。
- 各个列之间有内边距。但是，可以通过向网格添加 `ion-no-padding` 类来移除网格和列的内边距。请参阅[CSS 工具](../layout/css-utilities)了解可应用于网格的更多样式。
- 有五个网格层级，每个对应一个响应式断点：所有断点（超小）、小、中、大和超大。
- 网格层级基于最小宽度，意味着它们适用于其层级及所有更大的层级（例如，`size-sm="4"` 适用于小型、中型、大型和超大型设备）。
- 网格可以通过 CSS 变量进行自定义。请参阅[自定义网格](#自定义网格)。

## 默认断点

网格的默认断点和对应属性如下表所示。断点值目前无法自定义。关于为什么无法自定义的更多信息，请参阅[媒体查询中的变量](../theming/advanced#媒体查询中的变量)。

| 名称 | 值     | 宽度属性       | 偏移属性       | 推属性         | 拉属性         | 描述                            |
| ---- | ------ | -------------- | -------------- | -------------- | -------------- | ------------------------------- |
| xs   | 0      | `size`         | `offset`       | `push`         | `pull`         | 当 (min-width: 0) 时设置列      |
| sm   | 576px  | `sizeSm`       | `offsetSm`     | `pushSm`       | `pullSm`       | 当 (min-width: 576px) 时设置列  |
| md   | 768px  | `sizeMd`       | `offsetMd`     | `pushMd`       | `pullMd`       | 当 (min-width: 768px) 时设置列  |
| lg   | 992px  | `sizeLg`       | `offsetLg`     | `pushLg`       | `pullLg`       | 当 (min-width: 992px) 时设置列  |
| xl   | 1200px | `sizeXl`       | `offsetXl`     | `pushXl`       | `pullXl`       | 当 (min-width: 1200px) 时设置列 |

## 基本用法

默认情况下，对于所有设备和屏幕尺寸，列将在行内占据相等宽度。

import Basic from '@site/static/usage/v7/grid/basic/index.md';

<Basic />

## 固定网格

网格占据其容器 100% 的宽度。通过向网格添加 `fixed` 属性，宽度将根据屏幕尺寸设置。每个断点的网格宽度如下表所示，但也可以自定义。更多信息请参阅[自定义网格](#自定义网格)。在 StackBlitz 中打开以下示例并调整屏幕大小以查看网格宽度变化。

| 名称 | 值     | 描述                                    |
| ---- | ------ | --------------------------------------- |
| xs   | 100%   | xs 屏幕宽度为 100%                      |
| sm   | 540px  | 当 (min-width: 576px) 时将网格宽度设置为 540px |
| md   | 720px  | 当 (min-width: 768px) 时将网格宽度设置为 720px |
| lg   | 960px  | 当 (min-width: 992px) 时将网格宽度设置为 960px |
| xl   | 1140px | 当 (min-width: 1200px) 时将网格宽度设置为 1140px |

import Fixed from '@site/static/usage/v7/grid/fixed/index.md';

<Fixed />

## 列尺寸

列可以设置为特定尺寸，以占用总列数中的一定数量，或根据内容调整其宽度。默认列数为 12，但可以自定义。更多信息请参阅下面的[列数](#列数)部分。

### 基于内容的尺寸

通过将 `size` 设置为 `"auto"`，列可以根据其内容的自然宽度自行调整大小。当将列设置为绝对宽度（例如特定的像素数）时，这是必需的。自动宽度列旁边的列将调整大小以填满行。

import SizeAuto from '@site/static/usage/v7/grid/size-auto/index.md';

<SizeAuto />

### 指定尺寸

设置列的 `size`，其他列将自动在其周围调整大小。如果所有列都指定了尺寸且未达到总列数，则列之后会有空白空间。

import Size from '@site/static/usage/v7/grid/size/index.md';

<Size />

### 响应式尺寸

`size` 属性将为所有[断点](#默认断点)更改列宽。列还提供了多个在"size"末尾附加了断点名称的尺寸属性。这些属性可用于根据屏幕尺寸更改列的宽度。在 StackBlitz 中打开以下示例并调整屏幕大小以查看列宽变化。

import SizeResponsive from '@site/static/usage/v7/grid/size-responsive/index.md';

<SizeResponsive />

## 列偏移

列可以偏移，以向右移动总列数中的一定数量。

### 指定偏移

可以使用 `offset` 属性将列向右移动。此属性将列的左边距增加指定列数。它还会将右侧的列（如果有）向右移动。

import Offset from '@site/static/usage/v7/grid/offset/index.md';

<Offset />

### 响应式偏移

`offset` 属性将为所有[断点](#默认断点)更改列的左边距。列还提供了多个在"offset"末尾附加了断点名称的偏移属性。这些属性可用于根据屏幕尺寸更改列的偏移量。在 StackBlitz 中打开以下示例并调整屏幕大小以查看列偏移变化。

import OffsetResponsive from '@site/static/usage/v7/grid/offset-responsive/index.md';

<OffsetResponsive />

## 列推和拉

列可以向右推或向左拉，移动总列数中的一定数量。

### 指定推和拉

通过添加 `push` 和 `pull` 属性重新排序列。这些属性调整列的 `left` 和 `right` 值，使其按指定列数移动，从而轻松重新排序列。如果列被移动到另一个列所在的位置，它们将会重叠。

import PushPull from '@site/static/usage/v7/grid/push-pull/index.md';

<PushPull />

### 响应式推和拉

`push` 和 `pull` 属性将为所有[断点](#默认断点)更改列的位置。列还提供了多个在"push"/"pull"末尾附加了断点名称的 `push` 和 `pull` 属性。这些属性可用于根据屏幕尺寸更改列的位置。在 StackBlitz 中打开以下示例并调整屏幕大小以查看列位置变化。

import PushPullResponsive from '@site/static/usage/v7/grid/push-pull-responsive/index.md';

<PushPullResponsive />

## 对齐

### 垂直对齐

通过向行添加不同的类，可以在行内垂直对齐所有列。有关可用类的列表，请参阅[css 工具](/layout/css-utilities#flex-属性)。

import VerticalAlignment from '@site/static/usage/v7/grid/vertical-alignment/index.md';

<VerticalAlignment />

### 水平对齐

通过向行添加不同的类，可以在行内水平对齐所有列。有关可用类的列表，请参阅[css 工具](/layout/css-utilities.md#flex-属性)。

import HorizontalAlignment from '@site/static/usage/v7/grid/horizontal-alignment/index.md';

<HorizontalAlignment />

## 自定义网格

使用我们内置的 CSS 变量，可以自定义预定义的网格属性。更改内边距值、列数等。

### 固定宽度

可以使用 `--ion-grid-width` CSS 变量为所有断点设置固定网格的宽度。要覆盖单个断点，请使用 `--ion-grid-width-{breakpoint}` CSS 变量。每个断点的默认值可以在[固定网格](#固定网格)部分找到。在 StackBlitz 中打开以下示例并调整屏幕大小以查看网格宽度变化。

import Width from '@site/static/usage/v7/grid/customizing/width/index.md';

<Width />

### 列数

网格列数可以使用 `--ion-grid-columns` CSS 变量进行修改。默认有 12 个网格列，但可以更改为任何正整数，并用于计算每个单独列的宽度。

import ColumnNumber from '@site/static/usage/v7/grid/customizing/column-number/index.md';

<ColumnNumber />

### 内边距

可以使用 `--ion-grid-padding` CSS 变量为所有断点设置网格容器的内边距。要覆盖单个断点，请使用 `--ion-grid-padding-{breakpoint}` CSS 变量。

可以使用 `--ion-grid-column-padding` CSS 变量为所有断点设置列的内边距。要覆盖单个断点，请使用 `--ion-grid-column-padding-{breakpoint}` CSS 变量。

import Padding from '@site/static/usage/v7/grid/customizing/padding/index.md';

<Padding />

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
