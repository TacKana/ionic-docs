---
title: 'ion-backdrop'
---

import Props from '@ionic-internal/component-api/v6/backdrop/props.md';
import Events from '@ionic-internal/component-api/v6/backdrop/events.md';
import Methods from '@ionic-internal/component-api/v6/backdrop/methods.md';
import Parts from '@ionic-internal/component-api/v6/backdrop/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/backdrop/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/backdrop/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

背景幕（Backdrop）是一种全屏组件，会覆盖在其他组件之上。它通常用在那些需要在其他内容上方滑入的组件背后，并且可以用来关闭该组件。

## 基本用法

背景幕默认是透明的。它会阻止点击或触摸其背后的内容。

import Basic from '@site/static/usage/v6/backdrop/basic/index.md';

<Basic />

## 样式定制

可以通过直接为背景幕元素设置 CSS 属性来自定义其样式。常用的属性包括 `background-color`、`background` 和 `opacity`。

通过在内容上设置比背景幕更高的 `z-index`（默认值为 `2`），可以在背景幕上方显示内容。

import Styling from '@site/static/usage/v6/backdrop/styling/index.md';

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