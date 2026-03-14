---
title: 列表标题组件
---
import Props from '@ionic-internal/component-api/v8/list-header/props.md';
import Events from '@ionic-internal/component-api/v8/list-header/events.md';
import Methods from '@ionic-internal/component-api/v8/list-header/methods.md';
import Parts from '@ionic-internal/component-api/v8/list-header/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/list-header/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/list-header/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


列表标题是一种块级元素，用于描述[列表](./list)的内容。与[项目分隔线](./item-divider)不同，列表标题应仅在一组[项目](./item)的顶部使用一次。

## 基本用法

import Basic from '@site/static/usage/v8/list-header/basic/index.md';

<Basic />


## 列表标题中的按钮

在列表标题中放置一个[按钮](./button)有助于显示列表的部分内容，并通过按钮跳转到完整列表。

import Buttons from '@site/static/usage/v8/list-header/buttons/index.md';

<Buttons />


## 列表标题分隔线

默认情况下，列表标题不显示底部边框。可以将 `lines` 属性修改为 `"full"` 或 `"inset"`，分别显示全宽度边框或带有左侧内边距的嵌入边框。

import Lines from '@site/static/usage/v8/list-header/lines/index.md';

<Lines />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v8/list-header/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/list-header/theming/css-properties/index.md';

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