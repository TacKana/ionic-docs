---
title: 'ion-datetime-button'
---

import Props from '@ionic-internal/component-api/v7/datetime-button/props.md';
import Events from '@ionic-internal/component-api/v7/datetime-button/events.md';
import Methods from '@ionic-internal/component-api/v7/datetime-button/methods.md';
import Parts from '@ionic-internal/component-api/v7/datetime-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/datetime-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/datetime-button/slots.md';

<head>
  <title>ion-datetime-button: Ionic 日期时间选择器输入组件</title>
  <meta
    name="description"
    content="日期时间按钮与日期时间实例关联，可轻松在弹出层、模态框等界面中显示日期时间。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

日期时间按钮与 [Datetime](./datetime) 组件关联，用于显示格式化后的日期和时间。它还提供按钮，以便在模态框、弹出层等界面中展示日期时间选择器。

## 概述

在空间受限的情况下应使用日期时间按钮。此组件显示展示当前日期和时间值的按钮。点击按钮时，日期或时间选择器将在叠加层中打开。

当在 Angular、React 或 Vue 等 JavaScript 框架中使用日期时间按钮时，请确保在 ion-modal 上使用 [keepContentsMounted 属性](./modal#keepcontentsmounted) 或在 ion-popover 上使用 [keepContentsMounted 属性](./popover#keepcontentsmounted)。这样即使在叠加层尚未显示时，关联的日期时间实例也能保持挂载状态。

## 基本用法

import Basic from '@site/static/usage/v7/datetime-button/basic/index.md';

<Basic />

## 本地化

`ion-datetime-button` 上的本地化文本由关联的 `ion-datetime` 实例上的 `locale` 属性决定。更多详情请参阅 [Datetime 本地化](./datetime#localization)。

## 格式选项

您可以通过在关联的 Datetime 实例上提供 `formatOptions` 来自定义日期时间按钮中日期和时间的格式。更多详情请参阅 [Datetime 格式选项](./datetime#format-options)。

import FormatOptions from '@site/static/usage/v7/datetime-button/format-options/index.md';

<FormatOptions />

## 与模态框和弹出层配合使用

`ion-datetime-button` 必须与已挂载的 `ion-datetime` 实例关联。因此，必须使用 [内联模态框](./modal#inline-modals-recommended) 和 [内联弹出层](./popover#inline-popovers)，并将 `keepContentsMounted` 属性设置为 `true`。

<!--
## 自定义

待办事项

### 按钮

待办事项

### 主题定制

待办事项
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