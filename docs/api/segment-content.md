---
title: "ion-segment-content"
---

import Props from '@ionic-internal/component-api/v8/segment-content/props.md';
import Events from '@ionic-internal/component-api/v8/segment-content/events.md';
import Methods from '@ionic-internal/component-api/v8/segment-content/methods.md';
import Parts from '@ionic-internal/component-api/v8/segment-content/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/segment-content/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/segment-content/slots.md';

<head>
  <title>ion-segment-content：可滑动分段控件的显示控制元素</title>
  <meta name="description" content="ion-segment-content 是包装元素，用于在使用可滑动分段控件时控制子元素的显示。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

分段内容是包装元素，用于在使用可滑动分段控件时控制子元素的显示。分段内容元素是单个
[segment view](./segment-view.md) 实例的子元素，该实例与[分段控件](./segment.md)相关联。有关如何使用分段内容的更多信息，
请参阅我们的[可滑动分段控件](./segment.md#可滑动分段控件)文档。

## 用法

每个 `ion-segment-content` 需要一个唯一的 `id` 属性。这将用于通过按钮的
[contentId 属性](./segment-button.md#属性)将分段内容链接到分段按钮。

{/* 复用可滑动分段控件 playground */}

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
