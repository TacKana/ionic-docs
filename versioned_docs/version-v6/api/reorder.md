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
  <title>ion-reorder：拖放图标以重新排序项目</title>
  <meta
    name="description"
    content="ion-reorder 是用于拖放 ion-reorder-group 内部项目的锚点。阅读了解更多关于自定义重新排序图标和项目的信息。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Reorder（重新排序）是一个允许拖拽项目以更改其在一组项目中顺序的组件。它必须在[重新排序组（reorder group）](./reorder-group)内使用，以提供可视化拖放界面。

重新排序锚点用于拖放项目。重新排序完成后，`ionItemReorder` 事件将从重新排序组分发，并且需要调用 `complete` 方法。

## 基本用法

重新排序最基本的示例是将其放入项目内部。默认情况下，重新排序组的功能是禁用的。可以通过将重新排序组上的 `disabled` 属性设置为 `false` 来启用。然后可以使用重新排序图标拖放项目并重新排序它们。

import Basic from '@site/static/usage/v7/reorder/basic/index.md';

<Basic />

## 切换重新排序

在某些情况下，可能需要提供切换重新排序功能的选项。这可以通过使 `disabled` 属性基于函数或变量变为响应式来实现。

import TogglingDisabled from '@site/static/usage/v7/reorder/toggling-disabled/index.md';

<TogglingDisabled />

## 自定义重新排序图标

重新排序组件在 iOS 上使用三条线的重新排序图标，在 Material Design 上使用两条线。可以通过在重新排序内部添加带有任何可用 Ionicons 的[图标（Icon）](https://ionic.io/ionicons)组件来自定义。

import CustomIcon from '@site/static/usage/v7/reorder/custom-icon/index.md';

<CustomIcon />

## 重新排序包装器

Reorder 也可以用作项目的包装器，使项目本身成为锚点。点击下方项目的任意位置并拖动即可重新排序列表。

import Wrapper from '@site/static/usage/v7/reorder/wrapper/index.md';

<Wrapper />

## 更新数据

当在重新排序组上调用不带参数的 `complete` 方法时，DOM 节点将被重新排序。如果项目是从需要排序的数据数组中渲染的，这可能导致数据和 DOM 不同步。

为了在重新排序完成后对数组进行排序，应将数组作为参数传递给 `complete` 方法。`complete` 方法将对数组进行排序并返回，以便可以重新赋值。请注意，传递数组将阻止 Ionic 重新排序 DOM 节点。

在某些情况下，应用可能需要自行重新排序数组和 DOM 节点。如果需要这样做，应将 `false` 作为参数传递给 `complete` 方法。这将阻止 Ionic 重新排序重新排序组内的任何 DOM 节点。

无论采用哪种方法，如果项目在循环中提供，则应为重新排序项目提供稳定的标识。这意味着 Angular 使用 `track`，React 和 Vue 使用 `key`。

import UpdatingData from '@site/static/usage/v7/reorder/updating-data/index.md';

<UpdatingData />

## 与虚拟滚动一起使用

重新排序需要滚动容器才能正常工作。使用虚拟滚动解决方案时，需要提供自定义滚动目标。需要禁用内容上的滚动，并将 `.ion-content-scroll-host` 类添加到负责滚动的元素上。

import CustomScrollTarget from '@site/static/usage/v7/reorder/custom-scroll-target/index.md';

<CustomScrollTarget />

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
