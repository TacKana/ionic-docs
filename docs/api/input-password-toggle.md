---
title: "ion-input-password-toggle"
---
import Props from '@ionic-internal/component-api/v8/input-password-toggle/props.md';
import Events from '@ionic-internal/component-api/v8/input-password-toggle/events.md';
import Methods from '@ionic-internal/component-api/v8/input-password-toggle/methods.md';
import Parts from '@ionic-internal/component-api/v8/input-password-toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/input-password-toggle/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/input-password-toggle/slots.md';

<head>
  <title>ion-input-password-toggle: 切换 Input 中密码的可见性</title>
  <meta name="description" content="ion-input-password-toggle 是 ion-input 的配套组件。它允许用户切换密码输入中文本的可见性。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


InputPasswordToggle 组件是 [Input](./input) 的配套组件。它允许用户切换密码输入中文本的可见性。

## 基本用法

:::info
InputPasswordToggle 必须与 [`type`](./input/#类型) 属性设置为 `'text'` 或 `'password'` 的 [Input](./input) 一起使用。

使用任何其他 `type` 将导致记录警告。
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
