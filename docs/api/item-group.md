---
title: 项目组组件
---
import Props from '@ionic-internal/component-api/v8/item-group/props.md';
import Events from '@ionic-internal/component-api/v8/item-group/events.md';
import Methods from '@ionic-internal/component-api/v8/item-group/methods.md';
import Parts from '@ionic-internal/component-api/v8/item-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/item-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/item-group/slots.md';

<head>
  <title>ion-item-group：将项目分组以划分为多个部分</title>
  <meta name="description" content="项目组是用于将相似项目组织在一起的容器。ion-item-group 可以包含项目分隔符，将项目划分为多个部分。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

项目组是用于将相似的 [项目](./item) 组织在一起的容器。它们可以包含 [项目分隔符](./item-divider) 以将项目划分为多个部分。它们也可用于对 [滑动项目](./item-sliding) 进行分组。

## 基本用法

import Basic from '@site/static/usage/v8/item-group/basic/index.md';

<Basic />

## 滑动项目

import SlidingItems from '@site/static/usage/v8/item-group/sliding-items/index.md';

<SlidingItems />


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