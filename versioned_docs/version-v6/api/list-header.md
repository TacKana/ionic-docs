---
title: 'ion-list-header'
---

import Props from '@ionic-internal/component-api/v6/list-header/props.md';
import Events from '@ionic-internal/component-api/v6/list-header/events.md';
import Methods from '@ionic-internal/component-api/v6/list-header/methods.md';
import Parts from '@ionic-internal/component-api/v6/list-header/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/list-header/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/list-header/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

列表标题（List headers）是用于描述[列表（list）](./list)内容的块级元素。与[项目分隔线（item dividers）](./item-divider)不同，列表标题应仅在[项目（items）](./item)列表的顶部使用一次。

## 基本用法

import Basic from '@site/static/usage/v6/list-header/basic/index.md';

<Basic />

## 列表标题中的按钮

在列表标题中放置一个[按钮（button）](./button)可以用于显示部分列表内容，并通过该按钮重定向到完整列表。

import Buttons from '@site/static/usage/v6/list-header/buttons/index.md';

<Buttons />

## 列表标题分隔线

默认情况下，列表标题不显示底部边框。可以将 `lines` 属性修改为 `"full"` 或 `"inset"`，分别显示全宽边框或带左侧内边距的内嵌边框。

import Lines from '@site/static/usage/v6/list-header/lines/index.md';

<Lines />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v6/list-header/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v6/list-header/theming/css-properties/index.md';

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