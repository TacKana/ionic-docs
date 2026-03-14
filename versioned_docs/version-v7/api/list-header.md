---
title: 'ion-list-header'
---

import Props from '@ionic-internal/component-api/v7/list-header/props.md';
import Events from '@ionic-internal/component-api/v7/list-header/events.md';
import Methods from '@ionic-internal/component-api/v7/list-header/methods.md';
import Parts from '@ionic-internal/component-api/v7/list-header/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/list-header/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/list-header/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

列表头部（List headers）是用于描述[列表（list）](./list)内容的块级元素。与[项目分隔符（item dividers）](./item-divider)不同，列表头部应当仅出现在[项目（items）](./item)列表的顶部一次。

## 基本用法

import Basic from '@site/static/usage/v7/list-header/basic/index.md';

<Basic />

## 列表头部中的按钮

在列表头部放置[按钮（button）](./button)有助于显示列表的一部分内容，并通过按钮引导用户查看完整列表。

import Buttons from '@site/static/usage/v7/list-header/buttons/index.md';

<Buttons />

## 列表头部线条

默认情况下，列表头部不显示底部边框。通过将 `lines` 属性修改为 `"full"` 或 `"inset"`，可以分别显示全宽边框或带有左侧内边距的嵌入边框。

import Lines from '@site/static/usage/v7/list-header/lines/index.md';

<Lines />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v7/list-header/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/list-header/theming/css-properties/index.md';

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