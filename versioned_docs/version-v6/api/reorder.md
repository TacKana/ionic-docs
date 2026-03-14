---
title: 'ion-reorder'
---

import Props from '@ionic-internal/component-api/v6/reorder/props.md';
import Events from '@ionic-internal/component-api/v6/reorder/events.md';
import Methods from '@ionic-internal/component-api/v6/reorder/methods.md';
import Parts from '@ionic-internal/component-api/v6/reorder/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/reorder/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/reorder/slots.md';

<head>
  <title>项目重排 | ion-reorder: 拖拽图标重新排序项目</title>
  <meta
    name="description"
    content="ion-reorder 是在 ion-reorder-group 内部用于拖拽和放置项目的锚点。阅读以了解更多关于自定义重排图标和项目的信息。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Reorder 组件允许用户通过拖拽来改变项目在组内的顺序。它必须用在 [reorder group](./reorder-group) 内部，以提供视觉上的拖放界面。

Reorder 是用于拖放项目的锚点。重排完成后，`ionItemReorder` 事件会从重排组中发出，此时需要调用 `complete` 方法。

## 基本用法

Reorder 的最基本示例是将其插入到项目内部。默认情况下，重排组的功能是禁用的。可以通过将重排组的 `disabled` 属性设置为 `false` 来启用。然后就可以使用重排图标来拖放项目并重新排序。

import Basic from '@site/static/usage/v6/reorder/basic/index.md';

<Basic />

## 切换重排功能

在某些情况下，可能需要能够切换重排功能。这可以通过让 `disabled` 属性根据函数或变量动态响应来实现。

import TogglingDisabled from '@site/static/usage/v6/reorder/toggling-disabled/index.md';

<TogglingDisabled />

## 自定义重排图标

Reorder 组件在 iOS 上使用三条线的图标，在 Material Design 上使用两条线的图标。可以通过在 reorder 内部添加一个 [Icon](https://ionic.io/ionicons) 组件并选择任意可用的 Ionicons 图标来自定义。

import CustomIcon from '@site/static/usage/v6/reorder/custom-icon/index.md';

<CustomIcon />

## 重排包装器

Reorder 也可以用作项目的包装器，使项目本身成为拖拽锚点。点击下方任意项目并拖拽即可重新排序列表。

import Wrapper from '@site/static/usage/v6/reorder/wrapper/index.md';

<Wrapper />

## 更新数据

当在重排组上调用不带参数的 `complete` 方法时，DOM 节点会被重新排序。如果项目是从需要排序的数据数组渲染的，这可能导致数据和 DOM 不同步。为了在重排完成后对数组进行排序，应将数组作为参数传递给 `complete` 方法。`complete` 方法将对数组进行排序并返回，以便重新赋值。

在某些情况下，应用可能需要自行对数组和 DOM 节点进行重排。如果需要这样做，应将 `false` 作为参数传递给 `complete` 方法。这将阻止 Ionic 对重排组内的任何 DOM 节点进行重新排序。

import UpdatingData from '@site/static/usage/v6/reorder/updating-data/index.md';

<UpdatingData />

## 与虚拟滚动一起使用

Reorder 需要一个滚动容器才能正常工作。当使用虚拟滚动方案时，需要提供一个自定义的滚动目标。需要禁用内容上的滚动，并将 `.ion-content-scroll-host` 类添加到负责滚动的元素上。

import CustomScrollTarget from '@site/static/usage/v6/reorder/custom-scroll-target/index.md';

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