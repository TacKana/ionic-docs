---
title: 页面底部栏组件
---
import Props from '@ionic-internal/component-api/v8/footer/props.md';
import Events from '@ionic-internal/component-api/v8/footer/events.md';
import Methods from '@ionic-internal/component-api/v8/footer/methods.md';
import Parts from '@ionic-internal/component-api/v8/footer/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/footer/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/footer/slots.md';

<head>
  <title>ion-footer：页面底部栏 | Ionic 应用底部根组件</title>
  <meta name="description" content="底部栏是位于页面底部的根组件。Ionic 底部栏可以作为 ion-toolbar 的包装器，以确保内容区域尺寸正确。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

底部栏是页面的根组件，它将自己对齐到页面底部。建议将其用作一个或多个 [工具栏](./toolbar) 的包装器，但也可以用于包装任何元素。当在底部栏内部使用工具栏时，内容将被调整以确保尺寸正确，并且底部栏会考虑任何设备安全区域。

## 基本用法

import Basic from '@site/static/usage/v8/footer/basic/index.md';

<Basic />


## 半透明底部栏

通过设置 `translucent` 属性，底部栏可以匹配原生 iOS 应用程序中的透明度效果。为了看到内容在底部栏后面滚动，需要在内容上设置 `fullscreen` 属性。此效果仅在模式为 `"ios"` 且设备支持 [背景滤镜](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#browser_compatibility) 时适用。

import Translucent from '@site/static/usage/v8/footer/translucent/index.md';

<Translucent />


## 淡出式底部栏

许多原生 iOS 应用程序在工具栏上具有淡出效果。这可以通过将底部栏的 `collapse` 属性设置为 `"fade"` 来实现。当内容滚动到底部时，底部栏的背景和边框会逐渐淡出。此效果仅在模式为 `"ios"` 时适用。

import Fade from '@site/static/usage/v8/footer/fade/index.md';

<Fade />


### 与虚拟滚动结合使用

淡出式底部栏需要一个滚动容器才能正常工作。当使用虚拟滚动解决方案时，需要提供一个自定义的滚动目标。需要禁用内容上的滚动，并且将 `.ion-content-scroll-host` 类添加到负责滚动的元素上。

import CustomScrollTarget from '@site/static/usage/v8/footer/custom-scroll-target/index.md';

<CustomScrollTarget />

## 边框

在 `"md"` 模式下，底部栏的顶部会有一个 `box-shadow`。在 `"ios"` 模式下，它的顶部会有一条 `border`。可以通过向底部栏添加 `.ion-no-border` 类来移除这些边框。

import NoBorder from '@site/static/usage/v8/footer/no-border/index.md';

<NoBorder />


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