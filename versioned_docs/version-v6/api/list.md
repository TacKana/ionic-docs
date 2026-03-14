---
title: 'ion-list'
---

import Props from '@ionic-internal/component-api/v6/list/props.md';
import Events from '@ionic-internal/component-api/v6/list/events.md';
import Methods from '@ionic-internal/component-api/v6/list/methods.md';
import Parts from '@ionic-internal/component-api/v6/list/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/list/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/list/slots.md';

<head>
  <title>ion-list：适用于 iOS 和 Android 应用的列表视图组件</title>
  <meta
    name="description"
    content="ion-list 由多行项目组成，可包含文本、图标、开关等。了解适用于 iOS 和 Android Ionic 应用的列表视图组件。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

列表由多行[项目](./item)组成，这些项目可以包含文本、按钮、开关、图标、缩略图等等。列表通常包含具有相似数据内容（例如图像和文本）的项目。

列表支持多种交互方式，包括滑动项目以显示选项、拖拽以[重新排序](./reorder)列表中的项目，以及删除项目。

## 基本用法

import Basic from '@site/static/usage/v6/list/basic/index.md';

<Basic />

## 内嵌列表

向列表添加 `inset` 属性会在列表周围应用边距。在 `ios` 模式下，它还会为列表添加圆角。

import Inset from '@site/static/usage/v6/list/inset/index.md';

<Inset />

## 列表分隔线

向列表添加 `lines` 属性会调整列表中所有项目的底部边框。将其设置为 `"full"` 将显示全宽边框，`"inset"` 将显示带左内边距的边框，而 `"none"` 则不显示边框。如果在列表中的某个项目上设置了 `lines` 属性，则该属性将优先于列表上的属性。

import Lines from '@site/static/usage/v6/list/lines/index.md';

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