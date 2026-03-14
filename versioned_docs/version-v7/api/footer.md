---
title: 'ion-footer'
---

import Props from '@ionic-internal/component-api/v7/footer/props.md';
import Events from '@ionic-internal/component-api/v7/footer/events.md';
import Methods from '@ionic-internal/component-api/v7/footer/methods.md';
import Parts from '@ionic-internal/component-api/v7/footer/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/footer/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/footer/slots.md';

<head>
  <title>ion-footer: 页面页脚 | Ionic 应用页脚根组件</title>
  <meta
    name="description"
    content="页脚（footer）是一个位于页面底部的根组件。Ionic 页脚可以作为 ion-toolbar 的包装器，以确保内容区域尺寸正确。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

页脚（Footer）是页面底部对齐的根组件。建议将其用作一个或多个 [工具栏（toolbar）](./toolbar) 的包装器，但也可用于包装任何元素。当工具栏在页脚内部使用时，内容将进行调整以确保尺寸正确，并且页脚会考虑任何设备安全区域。

## 基本用法

import Basic from '@site/static/usage/v7/footer/basic/index.md';

<Basic />

## 半透明页脚

通过设置 `translucent` 属性，页脚可以匹配原生 iOS 应用程序中的透明度效果。为了看到内容在页脚背后滚动的效果，需要在内容上设置 `fullscreen` 属性。此效果仅在模式为 `"ios"` 且设备支持 [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#browser_compatibility) 时生效。

import Translucent from '@site/static/usage/v7/footer/translucent/index.md';

<Translucent />

## 淡出页脚

许多原生 iOS 应用程序在工具栏上具有淡出效果。这可以通过将页脚的 `collapse` 属性设置为 `"fade"` 来实现。当内容滚动到底部时，页脚的背景和边框将逐渐淡出。此效果仅在模式为 `"ios"` 时生效。

import Fade from '@site/static/usage/v7/footer/fade/index.md';

<Fade />

### 与虚拟滚动结合使用

淡出页脚需要一个滚动容器才能正常工作。当使用虚拟滚动解决方案时，需要提供一个自定义的滚动目标。需要禁用内容上的滚动，并将 `.ion-content-scroll-host` 类添加到负责滚动的元素上。

import CustomScrollTarget from '@site/static/usage/v7/footer/custom-scroll-target/index.md';

<CustomScrollTarget />

## 边框

在 `"md"` 模式下，页脚顶部会有一个 `box-shadow`。在 `"ios"` 模式下，页脚顶部会有一条 `border`。可以通过向页脚添加 `.ion-no-border` 类来移除这些边框。

import NoBorder from '@site/static/usage/v7/footer/no-border/index.md';

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