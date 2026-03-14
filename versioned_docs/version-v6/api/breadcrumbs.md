---
title: 'ion-breadcrumbs'
---

import Props from '@ionic-internal/component-api/v6/breadcrumbs/props.md';
import Events from '@ionic-internal/component-api/v6/breadcrumbs/events.md';
import Methods from '@ionic-internal/component-api/v6/breadcrumbs/methods.md';
import Parts from '@ionic-internal/component-api/v6/breadcrumbs/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/breadcrumbs/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/breadcrumbs/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

面包屑（Breadcrumbs）是用于指示用户在应用或网站中所处位置的导航项。它们适用于具有分层页面结构的大型站点和应用。面包屑可以根据可显示的最大数量进行折叠，用户可以点击折叠指示器以弹出包含更多信息的浮层，或展开被折叠的面包屑条目。

## 基础用法

import Basic from '@site/static/usage/v6/breadcrumbs/basic/index.md';

<Basic />

## 使用图标

### 在条目上添加图标

import IconsOnItems from '@site/static/usage/v6/breadcrumbs/icons/icons-on-items/index.md';

<IconsOnItems />

### 自定义分隔符

import CustomSeparators from '@site/static/usage/v6/breadcrumbs/icons/custom-separators/index.md';

<CustomSeparators />

## 折叠条目

### 最大条目数

如果条目数量超过 `maxItems` 的值，面包屑将被折叠。默认情况下，只会显示第一个和最后一个条目。

import MaxItems from '@site/static/usage/v6/breadcrumbs/collapsing-items/max-items/index.md';

<MaxItems />

### 折叠前后显示的条目数

当条目被折叠后，可以通过 `itemsBeforeCollapse` 和 `itemsAfterCollapse` 属性来控制显示条目的数量。

import ItemsBeforeAfter from '@site/static/usage/v6/breadcrumbs/collapsing-items/items-before-after/index.md';

<ItemsBeforeAfter />

### 点击折叠指示器——展开面包屑

点击折叠指示器会触发 `ionCollapsedClick` 事件。例如，这可以用于展开面包屑。

import ExpandOnClick from '@site/static/usage/v6/breadcrumbs/collapsing-items/expand-on-click/index.md';

<ExpandOnClick />

### 点击折叠指示器——显示弹出层

`ionCollapsedClick` 事件也可用于显示一个浮层（在本例中为 `ion-popover`），以展示隐藏的面包屑条目。

import PopoverOnClick from '@site/static/usage/v6/breadcrumbs/collapsing-items/popover-on-click/index.md';

<PopoverOnClick />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v6/breadcrumbs/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v6/breadcrumbs/theming/css-properties/index.md';

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