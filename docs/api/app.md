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
  <title>ion-app: Ionic 应用的容器元素</title>
  <meta name="description" content="ion-app 是 Ionic 应用的容器元素。应用可以包含许多 Ionic 组件，包括菜单、页眉、内容和页脚。阅读以了解更多。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

`ion-app` 是 Ionic 应用的容器元素。每个项目应该只有一个 `<ion-app>` 元素。一个应用可以包含许多 Ionic 组件，包括菜单、页眉、内容和页脚。当叠加层组件显示时，它们会被附加到 `<ion-app>` 中。

使用 `ion-app` 可以启用以下行为：

* 无需任何原生插件即可使用 [键盘生命周期事件](../developing/keyboard#keyboard-lifecycle-events)
* 在 Android 设备上自定义硬件返回键行为的 [硬件返回键监听器](../developing/hardware-back-button)
* Capacitor 或 Cordova 中的状态栏支持，允许用户通过点击状态栏滚动到视图顶部
* 滚动辅助工具，可滚动内容，使聚焦的文本输入不被屏幕键盘遮挡
* 在 Material Design 模式下激活按钮时的 [涟漪效果](./ripple-effect)
* 其他点击和聚焦工具，使 Ionic 应用的使用体验更接近原生

## 编程式聚焦

Ionic 为带有 `ion-focusable` 类的组件提供了聚焦工具。当按下某些键盘键（如 <kbd>Tab</kbd> ）时，这些工具会自动管理组件的聚焦。组件也可以通过使用 `ion-app` 中的 `setFocus` 方法，在响应用户操作时以编程方式聚焦。

import SetFocus from '@site/static/usage/v8/app/set-focus/index.md';

<SetFocus />

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