---
title: 页面头部栏组件
---
import Props from '@ionic-internal/component-api/v8/header/props.md';
import Events from '@ionic-internal/component-api/v8/header/events.md';
import Methods from '@ionic-internal/component-api/v8/header/methods.md';
import Parts from '@ionic-internal/component-api/v8/header/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/header/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/header/slots.md';

<head>
  <title>ion-header: Ionic 框架应用中的头部父组件</title>
  <meta name="description" content="ion-header 是用于包裹工具栏的父组件。需要注意的是，ion-header 必须是页面的三个根元素之一。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


头部（Header）是页面的根组件，它会自动对齐到页面顶部。建议将其用作一个或多个 [工具栏（toolbar）](./toolbar) 的包装器，但它也可以用来包裹任何元素。当在头部内使用工具栏时，内容会被调整以确保尺寸正确，并且头部会考虑设备的任何安全区域。


## 基础用法

import Basic from '@site/static/usage/v8/header/basic/index.md';

<Basic />


## 半透明头部

通过设置 `translucent` 属性，头部可以匹配原生 iOS 应用中的透明度效果。为了看到头部后面滚动的内容，需要在内容上设置 `fullscreen` 属性。此效果仅在模式为 `"ios"` 且设备支持 [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#browser_compatibility) 时生效。

import Translucent from '@site/static/usage/v8/header/translucent/index.md';

<Translucent />


<LegacyAnchor id="condensed-header" />

## 收缩式头部

Ionic 提供了原生 iOS 应用中的功能：显示一个大的工具栏标题，然后在滚动时将其收缩为小标题。这可以通过添加两个头部来实现，一个在内容上方，另一个在内容内部，然后将内容内部头部的 `collapse` 属性设置为 `"condense"`。此效果仅在模式为 `"ios"` 时生效。

import Condense from '@site/static/usage/v8/header/condense/index.md';

<Condense />


## 淡入淡出头部

许多原生 iOS 应用在工具栏上具有淡入淡出效果。这可以通过将头部的 `collapse` 属性设置为 `"fade"` 来实现。当页面首次加载时，头部的背景和边框将被隐藏。随着内容滚动，头部会逐渐淡入显示。此效果仅在模式为 `"ios"` 时生效。

此功能也可以与 [收缩式头部](#condensed-header) 结合使用。应将值为 `"fade"` 的 `collapse` 属性设置在内容外部的头部上。

import Fade from '@site/static/usage/v8/header/fade/index.md';

<Fade />


### 与虚拟滚动结合使用

淡入淡出头部需要一个滚动容器才能正常工作。当使用虚拟滚动方案时，需要提供一个自定义滚动目标。需要禁用内容的滚动，并将 `.ion-content-scroll-host` 类添加到负责滚动的元素上。

import CustomScrollTarget from '@site/static/usage/v8/header/custom-scroll-target/index.md';

<CustomScrollTarget />


## 边框

在 `"md"` 模式下，头部底部会有一个 `box-shadow`。在 `"ios"` 模式下，头部底部会有一条 `border`。可以通过向头部添加 `.ion-no-border` 类来移除这些边框。

import NoBorder from '@site/static/usage/v8/header/no-border/index.md';

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