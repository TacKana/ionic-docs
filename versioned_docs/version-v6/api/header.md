---
title: 'ion-header'
---

import Props from '@ionic-internal/component-api/v6/header/props.md';
import Events from '@ionic-internal/component-api/v6/header/events.md';
import Methods from '@ionic-internal/component-api/v6/header/methods.md';
import Parts from '@ionic-internal/component-api/v6/header/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/header/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/header/slots.md';

<head>
  <title>ion-header：Ionic 框架应用中的头部父组件</title>
  <meta
    name="description"
    content="ion-header 是用于包裹工具栏的父组件。请注意，ion-header 必须是页面的三个根元素之一。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

Header（头部）是页面的根组件，它会自动对齐到页面顶部。建议将其用作一个或多个 [工具栏](./toolbar) 的包装器，但它也可以用来包裹任何元素。当在 header 内部使用工具栏时，内容会被调整以确保尺寸正确，并且 header 会考虑任何设备的安全区域。

## 基本用法

import Basic from '@site/static/usage/v6/header/basic/index.md';

<Basic />

## 半透明头部

通过设置 `translucent` 属性，header 可以实现与原生 iOS 应用相同的透明度效果。为了看到内容在 header 后面滚动，需要在 content 上设置 `fullscreen` 属性。此效果仅在模式为 `"ios"` 且设备支持 [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#browser_compatibility) 时生效。

import Translucent from '@site/static/usage/v6/header/translucent/index.md';

<Translucent />

## 紧凑式头部

Ionic 提供了类似原生 iOS 应用的功能：显示一个大的工具栏标题，然后在滚动时将其折叠为小标题。这可以通过添加两个 header 来实现：一个在 content 上方，一个在 content 内部，然后将 content 内部的 header 的 `collapse` 属性设置为 `"condense"`。此效果仅在模式为 `"ios"` 时生效。

import Condense from '@site/static/usage/v6/header/condense/index.md';

<Condense />

## 淡入头部

许多原生 iOS 应用在工具栏上具有淡入效果。这可以通过将 header 的 `collapse` 属性设置为 `"fade"` 来实现。当页面首次加载时，header 的背景和边框将被隐藏。随着内容滚动，header 会逐渐淡入显示。此效果仅在模式为 `"ios"` 时生效。

此功能也可以与 [紧凑式头部](#condensed-header) 结合使用。应将 `collapse` 属性设置为 `"fade"` 的 header 放在 content 外部。

import Fade from '@site/static/usage/v6/header/fade/index.md';

<Fade />

### 与虚拟滚动结合使用

淡入头部需要一个滚动容器才能正常工作。当使用虚拟滚动解决方案时，需要提供一个自定义的滚动目标。必须禁用 content 上的滚动，并将 `.ion-content-scroll-host` 类添加到负责滚动的元素上。

import CustomScrollTarget from '@site/static/usage/v6/header/custom-scroll-target/index.md';

<CustomScrollTarget />

## 边框

在 `"md"` 模式下，header 底部会有一个 `box-shadow`。在 `"ios"` 模式下，其底部会有一条 `border`。可以通过向 header 添加 `.ion-no-border` 类来移除这些边框。

import NoBorder from '@site/static/usage/v6/header/no-border/index.md';

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