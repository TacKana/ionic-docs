---
title: 'ion-reorder'
---

import Props from '@ionic-internal/component-api/v7/reorder/props.md';
import Events from '@ionic-internal/component-api/v7/reorder/events.md';
import Methods from '@ionic-internal/component-api/v7/reorder/methods.md';
import Parts from '@ionic-internal/component-api/v7/reorder/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/reorder/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/reorder/slots.md';

<head>
  <title>ion-reorder：拖拽图标以重新排序项目</title>
  <meta
    name="description"
    content="ion-reorder 是用于在 ion-reorder-group 内拖拽项目以调整顺序的锚点组件。了解如何自定义重排序图标和项目。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Reorder 是一个允许通过拖拽来改变项目在组内顺序的组件。它必须在 [reorder group](./reorder-group) 中使用，以提供可视化的拖拽排序界面。

Reorder 组件是用于拖拽项目的锚点。当重排序完成后，reorder group 会派发 `ionItemReorder` 事件，此时需要调用 `complete` 方法。

## 基本用法

Reorder 最简单的用法是将其放置在项目内部。默认情况下，reorder group 的重排序功能是禁用的。可以通过将 reorder group 的 `disabled` 属性设置为 `false` 来启用该功能。随后即可使用 reorder 图标来拖拽项目并调整它们的顺序。

import Basic from '@site/static/usage/v7/reorder/basic/index.md';

<Basic />

## 切换重排序功能

在某些情况下，可能需要实现重排序功能的切换。这可以通过基于函数或变量，使得 `disabled` 属性具备响应性来实现。

import TogglingDisabled from '@site/static/usage/v7/reorder/toggling-disabled/index.md';

<TogglingDisabled />

## 自定义 Reorder 图标

Reorder 组件在 iOS 上默认使用三条横线的图标，在 Material Design 上使用两条横线的图标。可以通过在 reorder 组件内部添加任意可用的 [Ionicons](https://ionic.io/ionicons) 图标组件来自定义。

import CustomIcon from '@site/static/usage/v7/reorder/custom-icon/index.md';

<CustomIcon />

## Reorder 包装器

Reorder 也可以作为项目的包装器使用，使项目本身成为拖拽锚点。点击下方任意项目并拖动即可重新排序列表。

import Wrapper from '@site/static/usage/v7/reorder/wrapper/index.md';

<Wrapper />

## 更新数据

如果在 reorder group 上调用 `complete` 方法时不传入参数，DOM 节点会被重新排序。如果项目是根据需要排序的数据数组渲染的，这可能导致数据和 DOM 不同步。

为了在重排序完成后对数组进行排序，应将数组作为参数传递给 `complete` 方法。`complete` 方法会排序数组并将其返回，以便重新赋值。请注意，传递数组将阻止 Ionic 重新排序 DOM 节点。

在某些情况下，应用可能需要自行对数组和 DOM 节点进行排序。如果确实需要这样做，应向 `complete` 方法传递 `false` 作为参数。这将阻止 Ionic 对 reorder group 内的任何 DOM 节点进行重排序。

无论采用哪种方法，如果项目在循环中提供，应为重排序项目提供稳定的标识。这意味着在 Angular 中使用 `track`，在 React 和 Vue 中使用 `key`。

import UpdatingData from '@site/static/usage/v7/reorder/updating-data/index.md';

<UpdatingData />

## 与虚拟滚动一起使用

Reorder 需要一个滚动容器才能正常工作。在使用虚拟滚动方案时，需要提供一个自定义的滚动目标。需要禁用内容上的滚动，并将 `.ion-content-scroll-host` 类添加到负责滚动的元素上。

import CustomScrollTarget from '@site/static/usage/v7/reorder/custom-scroll-target/index.md';

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