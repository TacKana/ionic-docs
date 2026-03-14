---
title: 可滑动分段组件的显示控制元素
---

import Props from '@ionic-internal/component-api/v8/segment-content/props.md';
import Events from '@ionic-internal/component-api/v8/segment-content/events.md';
import Methods from '@ionic-internal/component-api/v8/segment-content/methods.md';
import Parts from '@ionic-internal/component-api/v8/segment-content/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/segment-content/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/segment-content/slots.md';

<head>
  <title>ion-segment-content：可滑动分段组件的显示控制元素</title>
  <meta name="description" content="ion-segment-content 是包装器元素，用于在使用可滑动分段组件时控制子元素的显示。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Segment content（分段内容）是一个包装器元素，用于在使用可滑动分段组件时控制子元素的显示。分段内容元素是单个 [segment view（分段视图）](./segment-view.md) 实例的子元素，该实例链接到一个 [segment（分段组件）](./segment.md)。有关如何使用分段内容的更多信息，请参阅我们的 [可滑动分段组件](./segment.md#swipeable-segments) 文档。

## 使用方法

每个 `ion-segment-content` 都需要一个唯一的 `id` 属性。这将用于通过分段按钮的 [contentId 属性](./segment-button.md#properties) 将分段内容链接到分段按钮。

<!-- 复用可滑动分段组件示例 -->

import Swipeable from '@site/static/usage/v8/segment/swipeable/index.md';

<Swipeable />

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