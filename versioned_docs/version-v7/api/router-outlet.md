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

路由出口（router-outlet）的行为方式类似于 Angular 内置的路由出口组件和 Vue 的路由视图组件，但包含了提供堆叠导航以及视图进出动画的逻辑。

尽管路由出口提供了导航相关的方法，但建议使用您所用框架的路由器中的导航方法。

## 生命周期钩子

在路由出口中渲染的路由可以访问特定的 Ionic 事件，这些事件与动画系统关联。

| 事件名称           | 触发时机                                                   |
| ------------------ | ---------------------------------------------------------- |
| `ionViewWillEnter` | 当即将要路由到的组件开始进入视图动画时触发。               |
| `ionViewDidEnter`  | 当要路由到的组件已完成进入动画时触发。                     |
| `ionViewWillLeave` | 当即将要离开的组件开始动画时触发。                         |
| `ionViewDidLeave`  | 当要离开的组件已完成动画时触发。                           |

这些事件与 Ionic 的动画系统紧密集成，可用于在组件完成动画时协调应用的各个部分。这些事件并非用于替代您框架自身的事件系统，而是一种补充。

对于路由守卫（Router Guards）的处理，较早的 `ionViewCanEnter` 和 `ionViewCanLeave` 已被替换为各框架特有的等效方案。对于 Angular，可以使用 [路由守卫](https://angular.io/guide/router#milestone-5-route-guards)。

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