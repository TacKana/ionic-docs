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
  <title>ion-datetime-button：Ionic 日期时间选择器输入按钮</title>
  <meta
    name="description"
    content="日期时间按钮与日期时间实例关联，方便在弹出框、模态框等中显示日期时间。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

日期时间按钮（Datetime Button）与[日期时间](./datetime)组件关联，用于显示格式化的日期和时间。它还提供按钮，用于在模态框、弹出框等中显示日期时间。

## 概述

当空间受限时，应使用日期时间按钮。此组件显示显示当前日期和时间值的按钮。当按钮被点击时，日期或时间选择器会在覆盖层中打开。

在使用 Angular、React 或 Vue 等 JavaScript 框架的 Datetime Button 时，请务必使用 [ion-modal 的 keepContentsMounted 属性](./modal#挂载内部内容) 或 [ion-popover 的 keepContentsMounted 属性](./popover#挂载内部内容)。这允许关联的日期时间实例即使在覆盖层尚未显示时也能挂载。

## 基本用法

import Basic from '@site/static/usage/v7/datetime-button/basic/index.md';

<Basic />

## 本地化

`ion-datetime-button` 上的本地化文本由关联的 `ion-datetime` 实例上的 `locale` 属性决定。更多详细信息请参阅[日期时间本地化](./datetime#本地化)。

## 格式选项

你可以通过为关联的 Datetime 实例提供 `formatOptions` 来自定义 Datetime Button 中日期和时间的格式。更多详细信息请参阅[日期时间格式选项](./datetime#格式选项)。

import FormatOptions from '@site/static/usage/v7/datetime-button/format-options/index.md';

<FormatOptions />

## 与模态框和弹出框一起使用

`ion-datetime-button` 必须与已挂载的 `ion-datetime` 实例关联。因此，必须使用设置了 `keepContentsMounted` 属性为 `true` 的[内联模态框](./modal#内联模态框推荐)和[内联弹出框](./popover#内联弹出框)。

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
