---
title: 背景幕组件
---
import Props from '@ionic-internal/component-api/v8/backdrop/props.md';
import Events from '@ionic-internal/component-api/v8/backdrop/events.md';
import Methods from '@ionic-internal/component-api/v8/backdrop/methods.md';
import Parts from '@ionic-internal/component-api/v8/backdrop/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/backdrop/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/backdrop/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

背景幕（Backdrop）是全屏组件，会覆盖在其他组件之上。它们通常用在那些从其他内容上方滑入的组件背后，并且可以用于关闭该组件。

## 基本用法

背景幕会阻止点击或触摸其背后的内容。默认情况下它是透明的，因此下面的演示包含了使其可见的 CSS。

import Basic from '@site/static/usage/v8/backdrop/basic/index.md';

<Basic />

## 样式设置

可以通过直接向背景幕元素分配 CSS 属性来自定义背景幕。常见的属性包括 `background-color`、`background` 和 `opacity`。

可以通过在内容上设置比背景幕更高的 `z-index` 值（默认为 `2`）来在背景幕上方显示内容。

import Styling from '@site/static/usage/v8/backdrop/styling/index.md';

<Styling />

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