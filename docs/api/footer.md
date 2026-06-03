---
title: "ion-footer"
---
import Props from '@ionic-internal/component-api/v8/footer/props.md';
import Events from '@ionic-internal/component-api/v8/footer/events.md';
import Methods from '@ionic-internal/component-api/v8/footer/methods.md';
import Parts from '@ionic-internal/component-api/v8/footer/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/footer/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/footer/slots.md';

<head>
  <title>ion-footer: 页面底部 | Ionic 应用底部根组件</title>
  <meta name="description" content="Footer 是位于页面底部的根组件。Ionic footer 可以作为 ion-toolbar 的包装器，确保内容区域尺寸正确。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


Footer 是页面的根组件，它将自身对齐到页面底部。建议将其用作一个或多个[工具栏](./toolbar)的包装器，但它也可以用于包装任何元素。当在 footer 内部使用工具栏时，内容将被调整以使其尺寸正确，并且 footer 将考虑任何设备安全区域。

## 基本用法

import Basic from '@site/static/usage/v8/footer/basic/index.md';

<Basic />


## 半透明底部

通过设置 `translucent` 属性，Footer 可以匹配原生 iOS 应用中的透明效果。为了看到内容在底部后面滚动，需要在内容上设置 `fullscreen` 属性。此效果仅在模式为 `"ios"` 且设备支持 [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#browser_compatibility) 时生效。

import Translucent from '@site/static/usage/v8/footer/translucent/index.md';

<Translucent />


## 淡出底部

许多原生 iOS 应用在工具栏上具有淡出效果。这可以通过将 footer 上的 `collapse` 属性设置为 `"fade"` 来实现。当内容滚动到底部时，footer 的背景和边框将淡出。此效果仅在模式为 `"ios"` 时生效。

import Fade from '@site/static/usage/v8/footer/fade/index.md';

<Fade />


### 与虚拟滚动一起使用

淡出底部需要滚动容器才能正常工作。使用虚拟滚动解决方案时，需要提供自定义滚动目标。需要禁用内容上的滚动，并将 `.ion-content-scroll-host` 类添加到负责滚动的元素上。

import CustomScrollTarget from '@site/static/usage/v8/footer/custom-scroll-target/index.md';

<CustomScrollTarget />

## 边框

在 `"md"` 模式下，footer 顶部将具有 `box-shadow`。在 `"ios"` 模式下，顶部将具有 `border`。可以通过向 footer 添加 `.ion-no-border` 类来移除这些边框。

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
