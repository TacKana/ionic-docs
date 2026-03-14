---
title: 'ion-footer'
---

import Props from '@ionic-internal/component-api/v6/footer/props.md';
import Events from '@ionic-internal/component-api/v6/footer/events.md';
import Methods from '@ionic-internal/component-api/v6/footer/methods.md';
import Parts from '@ionic-internal/component-api/v6/footer/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/footer/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/footer/slots.md';

<head>
  <title>页面页脚 | Ionic 应用页脚：根页面组件包装器</title>
  <meta
    name="description"
    content="页脚是位于页面底部的根组件。Ionic 页脚可以包装 ion-toolbar，以确保内容区域尺寸正确。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

页脚是页面的根组件，会将自己对齐到页面底部。建议将其用作一个或多个 [工具栏](./toolbar) 的包装器，但也可以用来包装任何元素。当工具栏在页脚内部使用时，内容会被调整以确保尺寸正确，并且页脚会考虑任何设备的安全区域。

## 基本用法

import Basic from '@site/static/usage/v6/footer/basic/index.md';

<Basic />

## 半透明页脚

通过设置 `translucent` 属性，页脚可以匹配原生 iOS 应用程序中的透明度效果。为了看到内容在页脚后面滚动，需要在内容上设置 `fullscreen` 属性。此效果仅在模式为 `"ios"` 且设备支持 [背景滤镜](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#browser_compatibility) 时适用。

import Translucent from '@site/static/usage/v6/footer/translucent/index.md';

<Translucent />

## 淡出页脚

许多原生 iOS 应用程序的工具栏都具有淡出效果。这可以通过将页脚上的 `collapse` 属性设置为 `"fade"` 来实现。当内容滚动到底部时，页脚的背景和边框会逐渐淡出。此效果仅在模式为 `"ios"` 时适用。

import Fade from '@site/static/usage/v6/footer/fade/index.md';

<Fade />

### 与虚拟滚动一起使用

淡出页脚需要滚动容器才能正常工作。当使用虚拟滚动方案时，需要提供一个自定义的滚动目标。需要禁用内容上的滚动，并且负责滚动的元素需要添加 `.ion-content-scroll-host` 类。

import CustomScrollTarget from '@site/static/usage/v6/footer/custom-scroll-target/index.md';

<CustomScrollTarget />

## 边框

在 `"md"` 模式下，页脚顶部会有一个 `box-shadow`。在 `"ios"` 模式下，页脚顶部会有一条 `border`。可以通过向页脚添加 `.ion-no-border` 类来移除这些边框。

import NoBorder from '@site/static/usage/v6/footer/no-border/index.md';

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