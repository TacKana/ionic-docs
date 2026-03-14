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

背景遮罩层是一种全屏组件，会覆盖在其他组件之上。它们通常用于在内容上层切换显示的组件背后，并且可以用来关闭该组件。

## 基本用法

背景遮罩层会阻止点击或触摸其背后的内容。默认情况下它是透明的，因此下面的演示示例添加了 CSS 样式使其可见。

import Basic from '@site/static/usage/v7/backdrop/basic/index.md';

<Basic />

## 样式设置

通过直接设置背景遮罩层元素的 CSS 属性，可以对其进行自定义。常用的属性包括 `background-color`、`background` 和 `opacity`。

通过在内容上设置比背景遮罩层（默认为 `2`）更高的 `z-index`，可以在遮罩层上方显示内容。

import Styling from '@site/static/usage/v7/backdrop/styling/index.md';

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