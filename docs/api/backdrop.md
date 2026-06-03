---
title: "ion-backdrop"
---
import Props from '@ionic-internal/component-api/v8/backdrop/props.md';
import Events from '@ionic-internal/component-api/v8/backdrop/events.md';
import Methods from '@ionic-internal/component-api/v8/backdrop/methods.md';
import Parts from '@ionic-internal/component-api/v8/backdrop/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/backdrop/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/backdrop/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

背景遮罩是全屏组件，覆盖在其他组件之上。它们适用于在其他内容上方过渡显示的组件背后，并可用于关闭该组件。

## 基本用法

背景遮罩可防止点击或触摸其背后的内容。默认情况下它是透明的，因此下面的演示包含使其可见的 CSS。

import Basic from '@site/static/usage/v8/backdrop/basic/index.md';

<Basic />

## 样式

可以通过直接将 CSS 属性分配给背景遮罩元素来自定义背景遮罩。常用属性包括 `background-color`、`background` 和 `opacity`。

通过为内容设置高于背景遮罩（默认为 `2`）的 `z-index`，可以在背景遮罩上方显示内容。

import Styling from '@site/static/usage/v8/backdrop/styling/index.md';

<Styling />

## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />