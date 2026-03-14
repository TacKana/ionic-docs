---
title: 密码可见性切换组件
---
import Props from '@ionic-internal/component-api/v8/input-password-toggle/props.md';
import Events from '@ionic-internal/component-api/v8/input-password-toggle/events.md';
import Methods from '@ionic-internal/component-api/v8/input-password-toggle/methods.md';
import Parts from '@ionic-internal/component-api/v8/input-password-toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/input-password-toggle/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/input-password-toggle/slots.md';

<head>
  <title>ion-input-password-toggle：切换输入框中密码的可见性</title>
  <meta name="description" content="ion-input-password-toggle 是 ion-input 的配套组件。它允许用户在密码输入框内切换文本内容的可见性。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


InputPasswordToggle 组件是 [Input](./input) 的配套组件。它允许用户在密码输入框内切换文本内容的可见性。

## 基本用法

:::info
InputPasswordToggle 必须与 [Input](./input) 组件配合使用，并且该 Input 的 [`type`](./input/#type) 属性必须设置为 `'text'` 或 `'password'`。

使用任何其他 `type` 类型都会导致控制台输出警告信息。
:::

import Basic from '@site/static/usage/v8/input-password-toggle/basic/index.md';

<Basic />

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