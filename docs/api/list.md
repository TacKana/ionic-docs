---
title: "ion-list"
---
import Props from '@ionic-internal/component-api/v8/list/props.md';
import Events from '@ionic-internal/component-api/v8/list/events.md';
import Methods from '@ionic-internal/component-api/v8/list/methods.md';
import Parts from '@ionic-internal/component-api/v8/list/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/list/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/list/slots.md';

<head>
  <title>ion-list：适用于 iOS 和 Android 应用的列表项视图组件</title>
  <meta name="description" content="ion-list 由包含文本、图标、切换开关等多行项目组成。了解适用于 iOS 和 Android Ionic 应用的列表视图组件。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


列表由多行 [项目](./item) 组成，可包含文本、按钮、切换开关、图标、缩略图等。列表通常包含具有相似数据内容的项目，例如图片和文本。

列表支持多种交互方式，包括滑动项目以显示操作选项、拖动以在列表中[重新排序](./reorder)项目以及删除项目。

## 基本用法

import Basic from '@site/static/usage/v8/list/basic/index.md';

<Basic />


## 内嵌列表

对列表添加 `inset` 属性将为列表应用外边距。在 `ios` 模式下，还会为列表添加圆角。

import Inset from '@site/static/usage/v8/list/inset/index.md';

<Inset />


## 列表边框线

对列表添加 `lines` 属性将调整列表中所有项目的底部边框。设置为 `"full"` 将显示全宽边框，`"inset"` 将显示带左内边距的边框，`"none"` 将不显示边框。如果列表中的某个项目上设置了 `lines` 属性，则该项目的设置将优先于列表上的设置。

import Lines from '@site/static/usage/v8/list/lines/index.md';

<Lines />



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
