---
sidebar_label: 'ion-router-outlet'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/router-outlet/props.md';
import Events from '@ionic-internal/component-api/v5/router-outlet/events.md';
import Methods from '@ionic-internal/component-api/v5/router-outlet/methods.md';
import Parts from '@ionic-internal/component-api/v5/router-outlet/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/router-outlet/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/router-outlet/slots.md';

# ion-router-outlet

路由出口（router outlet）是一个用于 Angular 或 Vue 应用内部路由的组件。它的行为类似于 Angular 内置的路由出口组件和 Vue 的路由视图组件，但包含了提供堆叠导航以及动画化视图进出效果的逻辑。

> 注意：此组件应仅用于 Angular 和 Vue 项目。对于原生 JavaScript 或 Stencil 项目，请使用 [`ion-router`](router.md) 和 [`ion-route`](route.md)。

虽然路由出口提供了导航相关的方法，但建议使用你所选框架的路由器中的导航方法。

## 生命周期钩子

在路由出口中渲染的路由可以访问与动画绑定的特定 Ionic 事件。

| 事件名称             | 触发时机                                                              |
| -------------------- | --------------------------------------------------------------------- |
| `ionViewWillEnter`   | 当即将要动画进入视图的路由组件触发。                                  |
| `ionViewDidEnter`    | 当路由到的组件动画完成时触发。                                        |
| `ionViewWillLeave`   | 当即将要动画离开的路由组件触发。                                      |
| `ionViewDidLeave`    | 当路由离开的组件动画完成时触发。                                      |

这些事件与 Ionic 的动画系统紧密集成，可用于在组件完成其动画时协调应用的各个部分。这些事件并非要替代框架自身的事件系统，而是作为补充。

对于处理路由守卫（Router Guards），旧的 `ionViewCanEnter` 和 `ionViewCanLeave` 已被替换为相应框架的等效功能。对于 Angular，有[路由守卫](https://angular.io/guide/router#milestone-5-route-guards)。

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS Shadow 部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />