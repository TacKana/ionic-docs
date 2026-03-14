---
title: 芯片组件
---
import Props from '@ionic-internal/component-api/v8/chip/props.md';
import Events from '@ionic-internal/component-api/v8/chip/events.md';
import Methods from '@ionic-internal/component-api/v8/chip/methods.md';
import Parts from '@ionic-internal/component-api/v8/chip/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/chip/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/chip/slots.md';

<head>
  <title>ion-chip: Ionic 框架应用中的文本、图标和头像组件</title>
  <meta name="description" content="ion-chips 以小方块形式呈现复杂实体，例如联系人。一个芯片可以包含多种不同元素，例如姓名、头像、文本和图标。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

芯片（Chips）以小方块形式呈现复杂实体，例如联系人。一个芯片可以包含多种不同元素，例如头像、文本和图标。

## 基本用法

import Basic from '@site/static/usage/v8/chip/basic/index.md';

<Basic />

## 插槽组件和图标

import SlotExample from '@site/static/usage/v8/chip/slots/index.md';

<SlotExample />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v8/chip/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/chip/theming/css-properties/index.md';

<CSSProps />

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