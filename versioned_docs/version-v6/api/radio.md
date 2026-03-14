---
title: 'ion-radio'
---

import Props from '@ionic-internal/component-api/v6/radio/props.md';
import Events from '@ionic-internal/component-api/v6/radio/events.md';
import Methods from '@ionic-internal/component-api/v6/radio/methods.md';
import Parts from '@ionic-internal/component-api/v6/radio/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/radio/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/radio/slots.md';

<head>
  <title>ion-radio 组件：适用于 iOS 和 Android 的单选属性</title>
  <meta
    name="description"
    content="在 iOS 和 Android 设备上，单选组件应配合 ion-radio-groups 使用。阅读本文了解更多关于单选属性的使用方法和安装指南。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

单选按钮应放置在 [单选按钮组](./radio-group) 中使用。点击一个单选按钮会选中它，并取消之前选中的按钮（如果存在）。也可以通过编程方式，将父级单选按钮组的 value 属性设置为该单选按钮的值来选中它。

当单选按钮位于单选按钮组内时，同一时间只能有一个按钮被选中。如果需要选择多个选项，则应使用 [复选框](./checkbox)。组内的单选按钮可以设置为禁用状态，以防止用户与其交互。

## 基本用法

import Basic from '@site/static/usage/v6/radio/basic/index.md';

<Basic />

## 取消选中单选按钮

默认情况下，单选按钮一旦被选中就无法取消；再次点击仍会保持选中状态。可以通过在父级单选按钮组上使用 `allowEmptySelection` 属性来修改此行为，从而允许取消选中单选按钮。

import EmptySelection from '@site/static/usage/v6/radio/empty-selection/index.md';

<EmptySelection />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v6/radio/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v6/radio/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v6/radio/theming/css-shadow-parts/index.md';

<CSSParts />

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