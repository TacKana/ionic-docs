---
title: 'ion-back-button'
---

import Props from '@ionic-internal/component-api/v6/back-button/props.md';
import Events from '@ionic-internal/component-api/v6/back-button/events.md';
import Methods from '@ionic-internal/component-api/v6/back-button/methods.md';
import Parts from '@ionic-internal/component-api/v6/back-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/back-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/back-button/slots.md';

<head>
  <title>返回按钮 | ion-back-button：应用程序的自定义菜单图标</title>
  <meta
    name="description"
    content="ion-back-button 是适用于 Android、iOS 和渐进式网络应用程序的自定义菜单图标。使用 Ionic Framework 组件轻松构建应用程序。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

返回按钮在点击时导航回应用程序的历史记录。除非设置了 [`defaultHref`](#默认返回历史记录)，否则只有在导航栈中存在历史记录时才会显示返回按钮。返回按钮会根据模式显示不同的文本和图标，但可以自定义。

## 基本用法

import Basic from '@site/static/usage/v6/back-button/basic/index.md';

<Basic />

## 自定义返回按钮

默认情况下，返回按钮在 `ios` 模式下会显示文本 `"Back"` 和 `"chevron-back"` 图标，在 `md` 模式下显示 `"arrow-back-sharp"` 图标。可以通过设置 `icon` 或 `text` 属性来自定义每个返回按钮组件。或者，也可以通过全局配置中的 `backButtonIcon` 或 `backButtonText` 属性进行全局设置。更多信息请参阅 [配置文档](../developing/config)。

import Custom from '@site/static/usage/v6/back-button/custom/index.md';

<Custom />

## 默认返回历史记录

有时应用程序可能需要在没有历史记录时显示返回按钮并导航回退。这可以通过在返回按钮上设置 `defaultHref` 属性为一个路径来实现。要使用 `defaultHref`，应用程序必须包含一个设置了路径的路由器。

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