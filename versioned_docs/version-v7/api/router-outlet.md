---
title: 'ion-router-outlet'
---

import Props from '@ionic-internal/component-api/v7/router-outlet/props.md';
import Events from '@ionic-internal/component-api/v7/router-outlet/events.md';
import Methods from '@ionic-internal/component-api/v7/router-outlet/methods.md';
import Parts from '@ionic-internal/component-api/v7/router-outlet/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/router-outlet/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/router-outlet/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

路由出口（Router outlet）的行为类似于 Angular 内置的路由出口组件和 Vue 的路由视图组件，但包含了提供堆叠导航和为视图添加进出动画的逻辑。

虽然路由出口有用于导航的方法，但建议使用框架路由器的导航方法。

## 生命周期钩子

在路由出口中渲染的路由可以访问特定的 Ionic 事件，这些事件与动画相连接

| 事件名称           | 触发条件                               |
| ------------------ | -------------------------------------- |
| `ionViewWillEnter` | 当路由到的组件即将动画进入视图时触发。 |
| `ionViewDidEnter`  | 当路由到的组件完成动画时触发。         |
| `ionViewWillLeave` | 当路由来源组件即将开始动画时触发。     |
| `ionViewDidLeave`  | 当路由到的组件完成动画时触发。         |

这些事件与 Ionic 的动画系统相关联，可用于在组件完成动画时协调应用的各个部分。这些事件不是你框架自身事件系统的替代品，而是补充。

对于处理路由守卫，旧的 `ionViewCanEnter` 和 `ionViewCanLeave` 已被框架特定的等效机制取代。对于 Angular，有[路由守卫](https://angular.io/guide/router#milestone-5-route-guards)。

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
