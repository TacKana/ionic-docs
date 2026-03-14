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
  <title>ion-grid：移动优先的自定义应用布局显示网格</title>
  <meta
    name="description"
    content="Ion-Grid 是一个移动优先的弹性盒子系统，用于构建自定义应用显示布局，提供基于屏幕尺寸的12列布局和不同断点。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

网格是一个强大的移动优先弹性盒子系统，用于构建自定义布局。它由三个单元组成：网格、[行](row.md)和[列](col.md)。列会扩展以填满行，并会调整大小以适应额外的列。它基于12列布局，并根据屏幕尺寸提供不同断点。列数可以使用CSS进行自定义。

## 概述

- 网格充当所有行和列的容器。网格占据其容器的全部宽度，但添加`fixed`属性将根据屏幕尺寸设置宽度，请参阅下面的[固定网格](#固定网格)。
- 行是列的水平分组，用于正确排列列。
- 内容应放置在列内，并且只有列可以是行的直接子元素。
- `size`属性表示每行默认12列中使用的列数。因此，可以向列添加`size="4"`以占据网格的1/3，即12列中的4列。
- 未设置size值的列将自动具有相等的宽度。例如，四个列将各自自动为25%宽。
- 列宽度设置为百分比，因此它们始终是流动的，并相对于其父元素调整大小。
- 各个列之间有内边距。但是，可以通过向网格添加`ion-no-padding`类来从网格和列中移除内边距。有关可应用于网格的更多样式，请参阅[CSS实用工具](../layout/css-utilities)。
- 有五个网格层级，每个响应式断点对应一个：所有断点（超小）、小、中、大和超大。
- 网格层级基于最小宽度，意味着它们适用于其层级及所有更大的层级（例如，`size-sm="4"`适用于小、中、大和超大设备）。
- 网格可以通过CSS变量进行自定义。请参阅[自定义网格](#自定义网格)。

## 默认断点

网格的默认断点及相应属性定义在下表中。目前无法自定义断点值。有关为何无法自定义的更多信息，请参阅[媒体查询中的变量](../theming/advanced#媒体查询中的变量)。

| 名称 | 值      | 宽度属性    | 偏移属性      | 推入属性    | 拉出属性    | 描述                          |
| ---- | ------- | ----------- | ------------- | ----------- | ----------- | ----------------------------- |
| xs   | 0       | `size`      | `offset`      | `push`      | `pull`      | 当 (min-width: 0) 时设置列    |
| sm   | 576px   | `sizeSm`    | `offsetSm`    | `pushSm`    | `pullSm`    | 当 (min-width: 576px) 时设置列 |
| md   | 768px   | `sizeMd`    | `offsetMd`    | `pushMd`    | `pullMd`    | 当 (min-width: 768px) 时设置列 |
| lg   | 992px   | `sizeLg`    | `offsetLg`    | `pushLg`    | `pullLg`    | 当 (min-width: 992px) 时设置列 |
| xl   | 1200px  | `sizeXl`    | `offsetXl`    | `pushXl`    | `pullXl`    | 当 (min-width: 1200px) 时设置列 |

## 基本用法

默认情况下，列在所有设备和屏幕尺寸的行内将占据相等的宽度。

import Basic from '@site/static/usage/v7/grid/basic/index.md';

<Basic />

## 固定网格

网格占据其容器的100%宽度。通过向网格添加`fixed`属性，宽度将根据屏幕尺寸设置。每个断点的网格宽度列在下表中，但可以自定义。有关更多信息，请参阅[自定义网格](#自定义网格)。在StackBlitz中打开以下示例并调整屏幕大小以查看网格宽度变化。

| 名称 | 值      | 描述                                       |
| ---- | ------- | ----------------------------------------- |
| xs   | 100%    | 对于xs屏幕，宽度为100%                    |
| sm   | 540px   | 当 (min-width: 576px) 时，设置网格宽度为540px |
| md   | 720px   | 当 (min-width: 768px) 时，设置网格宽度为720px |
| lg   | 960px   | 当 (min-width: 992px) 时，设置网格宽度为960px |
| xl   | 1140px  | 当 (min-width: 1200px) 时，设置网格宽度为1140px |

import Fixed from '@site/static/usage/v7/grid/fixed/index.md';

<Fixed />

## 列尺寸

列可以设置为特定尺寸以占据总列数中的一定数量，或根据内容调整其宽度。默认列数为12，但可以自定义。有关更多信息，请参阅下面的[列数](#列数)部分。

### 基于内容的尺寸

通过将`size`设置为`"auto"`，列可以根据其内容的自然宽度调整大小。这在将列设置为绝对宽度（例如特定像素数）时是必需的。自动宽度列旁边的列将调整大小以填满行。

import SizeAuto from '@site/static/usage/v7/grid/size-auto/index.md';

<SizeAuto />

### 指定尺寸

设置列的`size`，其他列将自动围绕它调整大小。如果所有列都指定了尺寸，并且总和未达到总列数，则列后会有空白空间。

import Size from '@site/static/usage/v7/grid/size/index.md';

<Size />

### 响应式尺寸

`size`属性将为所有[断点](#默认断点)更改列宽度。列还提供了几个以断点名附加到"size"末尾的尺寸属性。这些属性可用于根据屏幕尺寸更改列的宽度。在StackBlitz中打开以下示例并调整屏幕大小以查看列宽度变化。

import SizeResponsive from '@site/static/usage/v7/grid/size-responsive/index.md';

<SizeResponsive />

## 列偏移

列可以通过在总列数中向右移动一定数量的列来进行偏移。

### 指定偏移

可以使用`offset`属性将列向右移动。此属性通过指定列数增加列的左边距。如果存在右侧的列，它也会将它们向右移动。

import Offset from '@site/static/usage/v7/grid/offset/index.md';

<Offset />

### 响应式偏移

`offset`属性将为所有[断点](#默认断点)更改列的左边距。列还提供了几个以断点名附加到"offset"末尾的偏移属性。这些属性可用于根据屏幕尺寸更改列的偏移。在StackBlitz中打开以下示例并调整屏幕大小以查看列偏移变化。

import OffsetResponsive from '@site/static/usage/v7/grid/offset-responsive/index.md';

<OffsetResponsive />

## 列推入与拉出

列可以通过在总列数中向右推入或向左拉出一定数量的列。

### 指定推入与拉出

通过添加`push`和`pull`属性来重新排序列。这些属性通过指定列数调整列的`left`和`right`，从而轻松重新排序列。如果列被移动到另一个列的位置，这将导致列重叠。

import PushPull from '@site/static/usage/v7/grid/push-pull/index.md';

<PushPull />

### 响应式推入与拉出

`push`和`pull`属性将为所有[断点](#默认断点)更改列的位置。列还提供了几个以断点名附加到"push"/"pull"末尾的推入和拉出属性。这些属性可用于根据屏幕尺寸更改列的位置。在StackBlitz中打开以下示例并调整屏幕大小以查看列位置变化。

import PushPullResponsive from '@site/static/usage/v7/grid/push-pull-responsive/index.md';

<PushPullResponsive />

## 对齐

### 垂直对齐

通过向行添加不同的类，所有列可以在行内垂直对齐。有关可用类的列表，请参阅[CSS实用工具](/layout/css-utilities#flex-container-properties)。

import VerticalAlignment from '@site/static/usage/v7/grid/vertical-alignment/index.md';

<VerticalAlignment />

### 水平对齐

通过向行添加不同的类，所有列可以在行内水平对齐。有关可用类的列表，请参阅[CSS实用工具](/layout/css-utilities.md#flex-container-properties)。

import HorizontalAlignment from '@site/static/usage/v7/grid/horizontal-alignment/index.md';

<HorizontalAlignment />

## 自定义网格

使用我们内置的CSS变量，可以自定义预定义的网格属性。更改内边距值、列数等。

### 固定宽度

固定网格的宽度可以使用`--ion-grid-width` CSS变量为所有断点设置。要覆盖单个断点，请使用`--ion-grid-width-{breakpoint}` CSS变量。每个断点的默认值可以在[固定网格](#固定网格)部分找到。在StackBlitz中打开以下示例并调整屏幕大小以查看网格宽度变化。

import Width from '@site/static/usage/v7/grid/customizing/width/index.md';

<Width />

### 列数

网格列数可以使用`--ion-grid-columns` CSS变量进行修改。默认有12个网格列，但这可以更改为任何正整数，并用于计算每个单独列的宽度。

import ColumnNumber from '@site/static/usage/v7/grid/customizing/column-number/index.md';

<ColumnNumber />

### 内边距

网格容器的内边距可以使用`--ion-grid-padding` CSS变量为所有断点设置。要覆盖单个断点，请使用`--ion-grid-padding-{breakpoint}` CSS变量。

列的内边距可以使用`--ion-grid-column-padding` CSS变量为所有断点设置。要覆盖单个断点，请使用`--ion-grid-column-padding-{breakpoint}` CSS变量。

import Padding from '@site/static/usage/v7/grid/customizing/padding/index.md';

<Padding />

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS Shadow Parts

<Parts />

## CSS自定义属性

<CustomProps />

## 插槽

<Slots />