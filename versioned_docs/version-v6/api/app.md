---
title: 'ion-app'
---

import Props from '@ionic-internal/component-api/v6/app/props.md';
import Events from '@ionic-internal/component-api/v6/app/events.md';
import Methods from '@ionic-internal/component-api/v6/app/methods.md';
import Parts from '@ionic-internal/component-api/v6/app/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/app/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/app/slots.md';

<head>
  <title>ion-app：Ionic 应用的容器元素</title>
  <meta
    name="description"
    content="ion-app 是 Ionic 应用的容器元素。应用中可以包含多个 Ionic 组件，例如菜单、页眉、内容和页脚。阅读以了解更多信息。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

App 是 Ionic 应用的容器元素。每个项目应该只有一个 `<ion-app>` 元素。一个应用可以包含多个 Ionic 组件，包括菜单、页眉、内容和页脚。叠加层组件在显示时会附加到 `<ion-app>` 上。

使用 `ion-app` 可以启用以下行为：

- 无需任何原生插件即可使用 [键盘生命周期事件](../developing/keyboard#keyboard-lifecycle-events)
- 用于自定义 Android 设备上硬件返回键行为的 [硬件返回键监听器](../developing/hardware-back-button)
- Capacitor 或 Cordova 中的状态栏支持，允许用户通过点击状态栏滚动到视图顶部
- 滚动辅助工具，可以滚动内容以确保聚焦的文本输入框不会被屏幕键盘遮挡
- 在 Material Design 模式下激活按钮时的 [涟漪效果](./ripple-effect)
- 其他点击和聚焦工具，使 Ionic 应用的使用体验更加原生

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