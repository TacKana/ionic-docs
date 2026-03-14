---
title: 'ion-menu-toggle'
---

import Props from '@ionic-internal/component-api/v7/menu-toggle/props.md';
import Events from '@ionic-internal/component-api/v7/menu-toggle/events.md';
import Methods from '@ionic-internal/component-api/v7/menu-toggle/methods.md';
import Parts from '@ionic-internal/component-api/v7/menu-toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/menu-toggle/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/menu-toggle/slots.md';

<head>
  <title>ion-menu-toggle: 用于打开/关闭菜单的菜单切换组件</title>
  <meta
    name="description"
    content="MenuToggle 组件可用于切换菜单的打开或关闭状态——默认情况下，仅当所选菜单处于活动状态时才可见。阅读更多关于用法的信息。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

菜单切换组件可用于打开或关闭菜单。

仅当所选菜单启用时，菜单切换按钮才可见。如果菜单被禁用或作为分割窗格（split pane）呈现，菜单切换按钮将被隐藏。若要始终显示菜单切换按钮，可将 `autoHide` 属性设置为 `false`。

有关更多信息，请参阅[菜单](./menu#menu-toggle)文档。

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