---
title: 'ion-datetime-button'
---

import Props from '@ionic-internal/component-api/v6/datetime-button/props.md';
import Events from '@ionic-internal/component-api/v6/datetime-button/events.md';
import Methods from '@ionic-internal/component-api/v6/datetime-button/methods.md';
import Parts from '@ionic-internal/component-api/v6/datetime-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/datetime-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/datetime-button/slots.md';

<head>
  <title>ion-datetime-button: 用于与日期时间选择器交互的 Ionic API 输入组件</title>
  <meta
    name="description"
    content="日期时间按钮与日期时间实例关联，可轻松在弹出框、模态框等场景中使用日期时间选择器。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

日期时间按钮与 [Datetime](./datetime) 组件关联，用于显示格式化后的日期和时间。它同时提供按钮，可在模态框、弹出框等场景中展示日期时间选择器。

## 概览

当空间受限时，应使用日期时间按钮组件。该组件显示展示当前日期和时间值的按钮。点击按钮时，日期或时间选择器将在叠加层中打开。

当在 Angular、React 或 Vue 等 JavaScript 框架中使用日期时间按钮时，请确保使用 [ion-modal 上的 keepContentsMounted 属性](./modal#keepcontentsmounted) 或 [ion-popover 上的 keepContentsMounted 属性](./popover#keepcontentsmounted)。这样即使叠加层尚未呈现，也能挂载关联的日期时间实例。

## 基本用法

import Basic from '@site/static/usage/v6/datetime-button/basic/index.md';

<Basic />

## 本地化

`ion-datetime-button` 上的本地化文本由关联的 `ion-datetime` 实例的 `locale` 属性决定。更多详情请参阅 [Datetime 本地化](./datetime#localization)。

## 与模态框和弹出框配合使用

`ion-datetime-button` 必须与已挂载的 `ion-datetime` 实例关联。因此，必须使用 [内联模态框](./modal#inline-modals-recommended) 和 [内联弹出框](./popover#inline-popovers)，并将 `keepContentsMounted` 属性设置为 `true`。

<!--
## 自定义

TODO

### 按钮

TODO

### 主题定制

TODO
-->

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