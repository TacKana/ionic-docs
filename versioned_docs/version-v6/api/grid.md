---
title: 'ion-grid'
---

import Props from '@ionic-internal/component-api/v6/grid/props.md';
import Events from '@ionic-internal/component-api/v6/grid/events.md';
import Methods from '@ionic-internal/component-api/v6/grid/methods.md';
import Parts from '@ionic-internal/component-api/v6/grid/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/grid/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/grid/slots.md';

<head>
  <title>Ion-Grid：构建移动优先自定义应用布局的显示网格</title>
  <meta
    name="description"
    content="Ion-Grid 是一个移动优先的弹性盒系统，用于构建自定义应用显示布局，它基于 12 列布局，并根据屏幕尺寸提供不同的断点。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

网格是一个强大的移动优先弹性盒系统，用于构建自定义布局。它由三个单元组成：网格、[行](row.md)和[列](col.md)。列会自动扩展以填满行，并会调整大小以适应额外的列。它基于 12 列布局，并根据屏幕尺寸提供不同的断点。列的数量可以使用 CSS 进行自定义。

## 概述

- 网格充当所有行和列的容器。网格会占据其容器的全部宽度，但添加 `fixed` 属性将根据屏幕尺寸设置宽度，详见下方的[固定网格](#固定网格)。
- 行是列的水平分组，用于正确排列列。
- 内容应放置在列内，并且只有列可以是行的直接子元素。
- `size` 属性表示每行默认 12 列中要使用的列数。例如，向列添加 `size="4"` 可以占据网格的 1/3，即 12 列中的 4 列。
- 未设置 `size` 值的列将自动具有相等的宽度。例如，四个列将自动各占 25% 的宽度。
- 列宽度以百分比设置，因此它们始终是流动的，并相对于其父元素调整大小。
- 各个列之间存在内边距。但是，可以通过向网格添加 `ion-no-padding` 类来移除网格和列的内边距。有关可应用于网格的更多样式，请参阅 [CSS 实用工具](../layout/css-utilities)。
- 有五个网格层级，分别对应每个响应式断点：所有断点（超小）、小、中、大和超大。
- 网格层级基于最小宽度，这意味着它们适用于其层级及所有更大的层级（例如，`size-sm="4"` 适用于小、中、大和超大设备）。
- 网格可以通过 CSS 变量进行自定义。请参阅[自定义网格](#自定义网格)。

## 默认断点

网格的默认断点及相应属性定义如下表。目前无法自定义断点值。有关为何无法自定义的更多信息，请参阅[媒体查询中的变量](../theming/advanced#媒体查询中的变量)。

| 名称 | 值      | 宽度属性   | 偏移属性    | 推入属性  | 拉出属性  | 描述                           |
| ---- | ------- | ---------- | ----------- | --------- | --------- | ------------------------------ |
| xs   | 0       | `size`     | `offset`    | `push`    | `pull`    | 当 (min-width: 0) 时设置列     |
| sm   | 576px   | `sizeSm`   | `offsetSm`  | `pushSm`  | `pullSm`  | 当 (min-width: 576px) 时设置列 |
| md   | 768px   | `sizeMd`   | `offsetMd`  | `pushMd`  | `pullMd`  | 当 (min-width: 768px) 时设置列 |
| lg   | 992px   | `sizeLg`   | `offsetLg`  | `pushLg`  | `pullLg`  | 当 (min-width: 992px) 时设置列 |
| xl   | 1200px  | `sizeXl`   | `offsetXl`  | `pushXl`  | `pullXl`  | 当 (min-width: 1200px) 时设置列 |

## 基本用法

默认情况下，列在所有设备和屏幕尺寸的行内将占据相等的宽度。

import Basic from '@site/static/usage/v6/grid/basic/index.md';

<Basic />

## 固定网格

网格会占据其容器的 100% 宽度。通过向网格添加 `fixed` 属性，宽度将根据屏幕尺寸设置。每个断点的网格宽度列于下表，但可以自定义。更多信息请参阅[自定义网格](#自定义网格)。在 StackBlitz 中打开以下示例并调整屏幕大小，以查看网格宽度的变化。

| 名称 | 值      | 描述                                       |
| ---- | ------- | ------------------------------------------ |
| xs   | 100%    | 在 xs 屏幕上宽度为 100%                    |
| sm   | 540px   | 当 (min-width: 576px) 时设置网格宽度为 540px |
| md   | 720px   | 当 (min-width: 768px) 时设置网格宽度为 720px |
| lg   | 960px   | 当 (min-width: 992px) 时设置网格宽度为 960px |
| xl   | 1140px  | 当 (min-width: 1200px) 时设置网格宽度为 1140px |

import Fixed from '@site/static/usage/v6/grid/fixed/index.md';

<Fixed />

## 列尺寸

可以将列设置为特定尺寸，以占据总列数中的一定数量，或者根据内容调整其宽度。默认列数为 12，但可以自定义。更多信息请参阅下方的[列数](#列数)部分。

### 基于内容的尺寸

通过将 `size` 设置为 `"auto"`，列可以根据其内容的自然宽度自行调整大小。当需要将列设置为绝对宽度（例如特定的像素数）时，这是必要的。位于自动宽度列旁边的列将调整大小以填满行。

import SizeAuto from '@site/static/usage/v6/grid/size-auto/index.md';

<SizeAuto />

### 指定尺寸

设置一个列的 `size`，其他列将自动围绕它调整大小。如果在所有列上都指定了尺寸，并且这些尺寸之和未达到总列数，列后会出现空白空间。

import Size from '@site/static/usage/v6/grid/size/index.md';

<Size />

### 响应式尺寸

`size` 属性将改变所有[断点](#默认断点)的列宽。列还提供了几个在 "size" 后附加断点名称的尺寸属性。这些属性可用于根据屏幕尺寸改变列的宽度。在 StackBlitz 中打开以下示例并调整屏幕大小，以查看列宽的变化。

import SizeResponsive from '@site/static/usage/v6/grid/size-responsive/index.md';

<SizeResponsive />

## 列偏移

可以通过指定总列数中的若干列来将列向右偏移。

### 指定偏移

可以使用 `offset` 属性将列向右移动。此属性通过指定的列数增加列的左边距。如果存在右侧的列，也会将它们向右移动。

import Offset from '@site/static/usage/v6/grid/offset/index.md';

<Offset />

### 响应式偏移

`offset` 属性将改变所有[断点](#默认断点)的列的左边距。列还提供了几个在 "offset" 后附加断点名称的偏移属性。这些属性可用于根据屏幕尺寸改变列的偏移量。在 StackBlitz 中打开以下示例并调整屏幕大小，以查看列偏移的变化。

import OffsetResponsive from '@site/static/usage/v6/grid/offset-responsive/index.md';

<OffsetResponsive />

## 列推入与拉出

可以通过指定总列数中的若干列将列向右推入或向左拉出。

### 指定推入与拉出

通过添加 `push` 和 `pull` 属性来重新排列列。这些属性通过指定的列数调整列的 `left` 和 `right`，从而轻松重新排列列。如果列被移动到另一个列所在的位置，这将导致列重叠。

import PushPull from '@site/static/usage/v6/grid/push-pull/index.md';

<PushPull />

### 响应式推入与拉出

`push` 和 `pull` 属性将改变所有[断点](#默认断点)的列的位置。列还提供了几个在 "push" / "pull" 后附加断点名称的 `push` 和 `pull` 属性。这些属性可用于根据屏幕尺寸改变列的位置。在 StackBlitz 中打开以下示例并调整屏幕大小，以查看列位置的变化。

import PushPullResponsive from '@site/static/usage/v6/grid/push-pull-responsive/index.md';

<PushPullResponsive />

## 对齐

### 垂直对齐

通过向行添加不同的类，可以在行内垂直对齐所有列。有关可用类的列表，请参阅 [CSS 实用工具](/layout/css-utilities#flex-container-properties)。

import VerticalAlignment from '@site/static/usage/v6/grid/vertical-alignment/index.md';

<VerticalAlignment />

### 水平对齐

通过向行添加不同的类，可以在行内水平对齐所有列。有关可用类的列表，请参阅 [CSS 实用工具](/layout/css-utilities.md#flex-container-properties)。

import HorizontalAlignment from '@site/static/usage/v6/grid/horizontal-alignment/index.md';

<HorizontalAlignment />

## 自定义网格

使用我们内置的 CSS 变量，可以自定义预定义的网格属性。更改内边距的值、列数等。

### 固定宽度

可以使用 `--ion-grid-width` CSS 变量为所有断点设置固定网格的宽度。要覆盖单个断点，请使用 `--ion-grid-width-{breakpoint}` CSS 变量。每个断点的默认值可以在[固定网格](#固定网格)部分找到。在 StackBlitz 中打开以下示例并调整屏幕大小，以查看网格宽度的变化。

import Width from '@site/static/usage/v6/grid/customizing/width/index.md';

<Width />

### 列数

可以使用 `--ion-grid-columns` CSS 变量修改网格列数。默认情况下有 12 个网格列，但这可以更改为任何正整数，并用于计算每个单独列的宽度。

import ColumnNumber from '@site/static/usage/v6/grid/customizing/column-number/index.md';

<ColumnNumber />

### 内边距

可以使用 `--ion-grid-padding` CSS 变量为所有断点设置网格容器的内边距。要覆盖单个断点，请使用 `--ion-grid-padding-{breakpoint}` CSS 变量。

可以使用 `--ion-grid-column-padding` CSS 变量为所有断点设置列的内边距。要覆盖单个断点，请使用 `--ion-grid-column-padding-{breakpoint}` CSS 变量。

import Padding from '@site/static/usage/v6/grid/customizing/padding/index.md';

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