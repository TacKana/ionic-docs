---
title: 'ion-app'
---

import Props from '@ionic-internal/component-api/v7/app/props.md';
import Events from '@ionic-internal/component-api/v7/app/events.md';
import Methods from '@ionic-internal/component-api/v7/app/methods.md';
import Parts from '@ionic-internal/component-api/v7/app/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/app/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/app/slots.md';

<head>
  <title>ion-app：Ionic 应用的容器元素</title>
  <meta
    name="description"
    content="ion-app 是 Ionic 应用的容器元素。应用可以包含许多 Ionic 组件，包括菜单、头部、内容和底部。阅读了解更多。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

App 是 Ionic 应用的容器元素。每个项目只应有一个 `<ion-app>` 元素。一个应用可以包含许多 Ionic 组件，包括菜单、头部、内容和底部。覆盖层组件在显示时会追加到 `<ion-app>` 中。

使用 `ion-app` 可以启用以下行为：

- [键盘生命周期事件](../developing/keyboard#键盘生命周期事件)，无需任何原生插件
- [硬件返回按钮监听器](../developing/hardware-back-button)，用于自定义 Android 设备上的硬件返回按钮行为
- Capacitor 或 Cordova 中的状态栏支持，允许用户通过点击状态栏滚动到视图顶部
- 滚动辅助工具，可滚动内容以使焦点文本输入不被屏幕键盘遮挡
- Material Design 模式下激活按钮时的[涟漪效果](./ripple-effect)
- 其他触摸和焦点工具，使 Ionic 应用的使用体验更接近原生应用

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
