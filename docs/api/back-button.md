---
title: "ion-back-button"
---
import Props from '@ionic-internal/component-api/v8/back-button/props.md';
import Events from '@ionic-internal/component-api/v8/back-button/events.md';
import Methods from '@ionic-internal/component-api/v8/back-button/methods.md';
import Parts from '@ionic-internal/component-api/v8/back-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/back-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/back-button/slots.md';

<head>
  <title>ion-back-button：应用的自定义菜单返回按钮</title>
  <meta name="description" content="ion-back-button 是适用于 Android、iOS 和渐进式 Web 应用的自定义菜单图标。使用 Ionic Framework 组件轻松构建应用。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


返回按钮在点击时会在应用的历史记录中向后导航。除非设置了 [`defaultHref`](#默认返回历史)，否则仅在导航堆栈中存在历史记录时才会显示。返回按钮根据模式显示不同的文本和图标，但这是可以自定义的。

## 基本用法

import Basic from '@site/static/usage/v8/back-button/basic/index.md';

<Basic />

## 自定义返回按钮

默认情况下，返回按钮在 `ios` 上显示文本 `"Back"` 和 `"chevron-back"` 图标，在 `md` 上显示 `"arrow-back-sharp"` 图标。可以通过设置 `icon` 或 `text` 属性来为每个返回按钮组件自定义。或者，可以使用全局配置中的 `backButtonIcon` 或 `backButtonText` 属性进行全局设置。更多信息请参见[配置文档](../developing/config)。

import Custom from '@site/static/usage/v8/back-button/custom/index.md';

<Custom />

## 默认返回历史

有时应用可能需要在没有历史记录时显示返回按钮并导航返回。可以通过将返回按钮的 `defaultHref` 设置为路径来实现。要使用 `defaultHref`，应用必须包含一个设置了路径的路由器。

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
