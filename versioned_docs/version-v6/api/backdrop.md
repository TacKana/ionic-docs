---
title: 'ion-backdrop'
---

import Props from '@ionic-internal/component-api/v7/backdrop/props.md';
import Events from '@ionic-internal/component-api/v7/backdrop/events.md';
import Methods from '@ionic-internal/component-api/v7/backdrop/methods.md';
import Parts from '@ionic-internal/component-api/v7/backdrop/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/backdrop/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/backdrop/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

背景遮罩（Backdrop）是覆盖在其他组件之上的全屏组件。它们适用于在其他内容之上过渡进入的组件背后，并可用于关闭该组件。

## 基本用法

背景遮罩防止点击或触摸其背后的内容。默认情况下它是透明的，因此下面的演示包含了使其可见的 CSS。

import Basic from '@site/static/usage/v7/backdrop/basic/index.md';

<Basic />

## 样式

可以通过直接为背景遮罩元素分配 CSS 属性来自定义背景遮罩。常见属性包括 `background-color`、`background` 和 `opacity`。

可以通过在内容上设置高于背景遮罩（默认为 `2`）的 `z-index` 来在背景遮罩上方显示内容。

import Styling from '@site/static/usage/v7/backdrop/styling/index.md';

<Styling />

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
