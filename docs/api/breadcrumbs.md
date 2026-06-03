---
title: "ion-breadcrumbs"
---
import Props from '@ionic-internal/component-api/v8/breadcrumbs/props.md';
import Events from '@ionic-internal/component-api/v8/breadcrumbs/events.md';
import Methods from '@ionic-internal/component-api/v8/breadcrumbs/methods.md';
import Parts from '@ionic-internal/component-api/v8/breadcrumbs/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/breadcrumbs/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/breadcrumbs/slots.md';



import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

面包屑是用于指示用户在应用或网站中当前位置的导航项。它们适用于具有分层页面结构的大型网站和应用。面包屑可以根据可显示的最大数量进行折叠，并且可以点击折叠指示器以显示包含更多信息的弹出框或展开折叠的面包屑。

## 基本用法

import Basic from '@site/static/usage/v8/breadcrumbs/basic/index.md';

<Basic />

## 使用图标

### 项目图标

import IconsOnItems from '@site/static/usage/v8/breadcrumbs/icons/icons-on-items/index.md';

<IconsOnItems />

### 自定义分隔符

import CustomSeparators from '@site/static/usage/v8/breadcrumbs/icons/custom-separators/index.md';

<CustomSeparators />

## 折叠项目

### 最大项目数

如果项目数量超过 `maxItems` 的值，面包屑将被折叠。默认情况下，只会显示第一个和最后一个项目。

import MaxItems from '@site/static/usage/v8/breadcrumbs/collapsing-items/max-items/index.md';

<MaxItems />

### 折叠前后的项目

项目折叠后，可以通过 `itemsBeforeCollapse` 和 `itemsAfterCollapse` 属性控制显示的项目数量。

import ItemsBeforeAfter from '@site/static/usage/v8/breadcrumbs/collapsing-items/items-before-after/index.md';

<ItemsBeforeAfter />

### 点击折叠指示器 -- 展开面包屑

点击折叠指示器将触发 `ionCollapsedClick` 事件。例如，这可以用来展开面包屑。

import ExpandOnClick from '@site/static/usage/v8/breadcrumbs/collapsing-items/expand-on-click/index.md';

<ExpandOnClick />

### 点击折叠指示器 -- 显示弹出框

`ionCollapsedClick` 事件也可以用于显示覆盖层（在此例中为 `ion-popover`），展示隐藏的面包屑。

import PopoverOnClick from '@site/static/usage/v8/breadcrumbs/collapsing-items/popover-on-click/index.md';

<PopoverOnClick />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v8/breadcrumbs/theming/colors/index.md';

<Colors />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/breadcrumbs/theming/css-properties/index.md';

<CSSProps />


## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />
