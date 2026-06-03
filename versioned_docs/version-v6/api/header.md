---
title: 'ion-header'
---

import Props from '@ionic-internal/component-api/v7/header/props.md';
import Events from '@ionic-internal/component-api/v7/header/events.md';
import Methods from '@ionic-internal/component-api/v7/header/methods.md';
import Parts from '@ionic-internal/component-api/v7/header/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/header/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/header/slots.md';

<head>
  <title>ion-header：Ionic 框架应用的头部父组件</title>
  <meta
    name="description"
    content="ion-header 是容纳工具栏的父组件。需要注意的是，ion-header 需要是页面的三个根元素之一。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

头部（Header）是页面的根组件，它将自身对齐到页面顶部。建议将其用作一个或多个[工具栏](./toolbar)的包装器，但也可用于包装任何元素。当在头部内部使用工具栏时，内容将被调整以确保尺寸正确，并且头部会考虑任何设备安全区域。

## 基本用法

import Basic from '@site/static/usage/v7/header/basic/index.md';

<Basic />

## 半透明头部

通过设置 `translucent` 属性，头部可以匹配原生 iOS 应用中的透明效果。为了看到内容在头部后面滚动，需要在内容上设置 `fullscreen` 属性。此效果仅在模式为 `"ios"` 且设备支持 [backdrop-filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backdrop-filter#browser_compatibility) 时生效。

import Translucent from '@site/static/usage/v7/header/translucent/index.md';

<Translucent />

## 紧凑头部

Ionic 提供了原生 iOS 应用中的功能，可以显示大工具栏标题，然后在滚动时将其折叠为小标题。这可以通过添加两个头部来实现，一个在内容上方，一个在内容内部，然后将内容内部头部的 `collapse` 属性设置为 `"condense"`。此效果仅在模式为 "ios" 时生效。

import Condense from '@site/static/usage/v7/header/condense/index.md';

<Condense />

## 淡入头部

许多原生 iOS 应用在工具栏上有淡入效果。这可以通过将头部上的 `collapse` 属性设置为 `"fade"` 来实现。当页面首次加载时，头部上的背景和边框将被隐藏。随着内容滚动，头部将淡入。此效果仅在模式为 "ios" 时生效。

此功能也可以与[紧凑头部](#紧凑头部)结合使用。`collapse` 属性值为 `"fade"` 应设置在内容外部的头部上。

import Fade from '@site/static/usage/v7/header/fade/index.md';

<Fade />

### 与虚拟滚动一起使用

淡入头部需要滚动容器才能正常工作。使用虚拟滚动解决方案时，需要提供自定义滚动目标。需要禁用内容上的滚动，并将 `.ion-content-scroll-host` 类添加到负责滚动的元素上。

import CustomScrollTarget from '@site/static/usage/v7/header/custom-scroll-target/index.md';

<CustomScrollTarget />

## 边框

在 `"md"` 模式下，头部将在底部有一个 `box-shadow`。在 `"ios"` 模式下，它将在底部有一个 `border`。可以通过向头部添加 `.ion-no-border` 类来移除它们。

import NoBorder from '@site/static/usage/v7/header/no-border/index.md';

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
