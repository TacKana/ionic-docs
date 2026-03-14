---
title: 返回按钮组件
---
import Props from '@ionic-internal/component-api/v8/back-button/props.md';
import Events from '@ionic-internal/component-api/v8/back-button/events.md';
import Methods from '@ionic-internal/component-api/v8/back-button/methods.md';
import Parts from '@ionic-internal/component-api/v8/back-button/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/back-button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/back-button/slots.md';

<head>
  <title>ion-back-button: 应用程序自定义返回按钮</title>
  <meta name="description" content="ion-back-button 是为 Android、iOS 和渐进式 Web 应用设计的自定义返回按钮。使用 Ionic 框架组件轻松构建应用程序。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


返回按钮在点击时会导航回应用的历史记录。除非设置了 [`defaultHref`](#默认返回历史)，否则仅当导航堆栈中存在历史记录时才会显示此按钮。返回按钮会根据模式显示不同的文本和图标，但这些都可以进行自定义。

## 基本用法

import Basic from '@site/static/usage/v8/back-button/basic/index.md';

<Basic />

## 自定义返回按钮

默认情况下，返回按钮在 `ios` 模式下会显示文本 `"Back"` 和 `"chevron-back"` 图标，在 `md` 模式下会显示 `"arrow-back-sharp"` 图标。可以通过设置 `icon` 或 `text` 属性为每个返回按钮组件自定义这些内容。或者，也可以在全局配置中使用 `backButtonIcon` 或 `backButtonText` 属性进行全局设置。更多信息请参阅 [Config 文档](../developing/config)。

import Custom from '@site/static/usage/v8/back-button/custom/index.md';

<Custom />

## 默认返回历史

有时应用可能需要在没有历史记录时也显示返回按钮并执行回退导航。这可以通过在返回按钮上设置 `defaultHref` 属性指向一个路径来实现。要使用 `defaultHref`，应用必须包含一个设置了路径的路由器。

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