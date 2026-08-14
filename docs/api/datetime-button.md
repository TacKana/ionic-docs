---
title: "ion-datetime-button"
---
import Props from '@ionic-internal/component-api/v8/datetime-button/props.md';
import Events from '@ionic-internal/component-api/v8/datetime-button/events.md';
import Methods from '@ionic-internal/component-api/v8/datetime-button/methods.md';
import Parts from '@ionic-internal/component-api/v8/datetime-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/datetime-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/datetime-button/slots.md';

<head>
  <title>ion-datetime-button: Ionic 日期时间选择器输入按钮</title>
  <meta name="description" content="Datetime Button 与 datetime 实例关联，可轻松在弹出框、模态框等中展示日期时间。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Datetime Button 与 [Datetime](./datetime) 组件关联，以显示格式化后的日期和时间。它还提供按钮，用于在模态框、弹出框等中展示日期时间。

## 概述

Datetime Button 应在空间受限时使用。该组件显示当前日期和时间值的按钮。点击按钮时，日期或时间选择器会在覆盖层中打开。

在将 Datetime Button 与 Angular、React 或 Vue 等 JavaScript 框架一起使用时，请确保使用 [ion-modal 上的 keepContentsMounted 属性](./modal#挂载内部内容) 或 [ion-popover 上的 keepContentsMounted 属性](./popover#挂载内部内容)。这允许关联的 datetime 实例在覆盖层尚未显示时就被挂载。

## 基本用法

import Basic from '@site/static/usage/v8/datetime-button/basic/index.md';

<Basic />

## 本地化

`ion-datetime-button` 上的本地化文本由关联的 `ion-datetime` 实例上的 `locale` 属性决定。更多详情请参阅 [Datetime 本地化](./datetime#本地化)。

## 格式选项

您可以通过在关联的 Datetime 实例上提供 `formatOptions` 来自定义 Datetime Button 中日期和时间的格式。更多详情请参阅 [Datetime 格式选项](./datetime#格式选项)。

import FormatOptions from '@site/static/usage/v8/datetime-button/format-options/index.md';

<FormatOptions />

## 与模态框和弹出框一起使用

`ion-datetime-button` 必须与已挂载的 `ion-datetime` 实例关联。因此，必须使用将 `keepContentsMounted` 属性设置为 `true` 的[内联模态框](./modal#内联-modal推荐)和[内联弹出框](./popover#内联-popover)。

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
