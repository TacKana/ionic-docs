---
title: "ion-app"
---
import Props from '@ionic-internal/component-api/v8/app/props.md';
import Events from '@ionic-internal/component-api/v8/app/events.md';
import Methods from '@ionic-internal/component-api/v8/app/methods.md';
import Parts from '@ionic-internal/component-api/v8/app/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/app/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/app/slots.md';

<head>
  <title>ion-app：Ionic 应用的容器元素</title>
  <meta name="description" content="ion-app 是 Ionic 应用的容器元素。应用可以包含许多 Ionic 组件，包括菜单、头部、内容和底部。阅读以了解更多。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

App 是 Ionic 应用的容器元素。每个项目只应有一个 `<ion-app>` 元素。一个应用可以包含许多 Ionic 组件，包括菜单、头部、内容和底部。覆盖层组件在显示时会被附加到 `<ion-app>` 中。

使用 `ion-app` 可启用以下行为：

* [键盘生命周期事件](../developing/keyboard#键盘生命周期事件)，无需任何原生插件
* [硬件返回按钮监听](../developing/hardware-back-button)，用于自定义 Android 设备上的硬件返回按钮行为
* Capacitor 或 Cordova 中的状态栏支持，允许用户通过点击状态栏滚动到视图顶部
* 滚动辅助工具，可滚动内容以使聚焦的文本输入框不被屏幕键盘遮挡
* 在 Material Design 模式下激活按钮时的[涟漪效果](./ripple-effect)
* 其他点击和焦点辅助工具，使使用 Ionic 应用的体验更加原生

## 编程式焦点

Ionic 为带有 `ion-focusable` 类的组件提供了焦点辅助工具。当按下某些键盘键（如 <kbd>Tab</kbd>）时，这些工具会自动管理组件的焦点。组件还可以使用 `ion-app` 的 `setFocus` 方法，在响应用户操作时通过编程方式获得焦点。

import SetFocus from '@site/static/usage/v8/app/set-focus/index.md';

<SetFocus />

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
