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
  <title>ion-footer：页面底部 | Ionic 应用底部根组件</title>
  <meta
    name="description"
    content="底部（Footer）是位于页面底部的根组件。Ionic 底部可以是 ion-toolbar 的包装器，确保内容区域尺寸正确。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

底部（Footer）是页面的根组件，它将自身对齐到页面底部。建议将其用作一个或多个[工具栏](./toolbar)的包装器，但也可用于包装任何元素。当在底部内部使用工具栏时，内容将被调整以确保尺寸正确，并且底部会考虑任何设备安全区域。

## 基本用法

import Basic from '@site/static/usage/v7/footer/basic/index.md';

<Basic />

## 半透明底部

通过设置 `translucent` 属性，底部可以匹配原生 iOS 应用中的透明效果。为了看到内容在底部后面滚动，需要在内容上设置 `fullscreen` 属性。此效果仅在模式为 `"ios"` 且设备支持 [backdrop-filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backdrop-filter#browser_compatibility) 时生效。

import Translucent from '@site/static/usage/v7/footer/translucent/index.md';

<Translucent />

## 淡出底部

许多原生 iOS 应用在工具栏上有淡出效果。这可以通过将底部上的 `collapse` 属性设置为 `"fade"` 来实现。当内容滚动到底部时，底部上的背景和边框将淡出。此效果仅在模式为 `"ios"` 时生效。

import Fade from '@site/static/usage/v7/footer/fade/index.md';

<Fade />

### 与虚拟滚动一起使用

淡出底部需要滚动容器才能正常工作。使用虚拟滚动解决方案时，需要提供自定义滚动目标。需要禁用内容上的滚动，并将 `.ion-content-scroll-host` 类添加到负责滚动的元素上。

import CustomScrollTarget from '@site/static/usage/v7/footer/custom-scroll-target/index.md';

<CustomScrollTarget />

## 边框

在 `"md"` 模式下，底部将在顶部有一个 `box-shadow`。在 `"ios"` 模式下，它将在顶部有一个 `border`。可以通过向底部添加 `.ion-no-border` 类来移除它们。

import NoBorder from '@site/static/usage/v7/footer/no-border/index.md';

<NoBorder />

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
