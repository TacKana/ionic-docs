---
sidebar_label: 'ion-menu-toggle'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/menu-toggle/props.md';
import Events from '@ionic-internal/component-api/v5/menu-toggle/events.md';
import Methods from '@ionic-internal/component-api/v5/menu-toggle/methods.md';
import Parts from '@ionic-internal/component-api/v5/menu-toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/menu-toggle/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/menu-toggle/slots.md';

# ion-menu-toggle

MenuToggle 组件可用于打开或关闭菜单。

默认情况下，它仅在选中的菜单处于活动状态时才可见。当菜单可以打开/关闭时，它被视为活动状态。如果菜单被禁用或正以分割窗格（split-pane）形式呈现，菜单会被标记为非活动状态，并且 ion-menu-toggle 会自行隐藏。

如果需要保持 `ion-menu-toggle` 始终可见，可以将 `autoHide` 属性设置为 `false`。

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