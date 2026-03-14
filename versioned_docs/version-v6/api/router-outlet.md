---
title: 'ion-router-outlet'
---

import Props from '@ionic-internal/component-api/v6/router-outlet/props.md';
import Events from '@ionic-internal/component-api/v6/router-outlet/events.md';
import Methods from '@ionic-internal/component-api/v6/router-outlet/methods.md';
import Parts from '@ionic-internal/component-api/v6/router-outlet/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/router-outlet/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/router-outlet/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

路由出口（router outlet）的行为方式类似于 Angular 内置的路由出口组件和 Vue 的路由视图组件，但它包含了提供堆叠式导航以及视图进出动画的逻辑。

尽管路由出口提供了导航相关的方法，但建议使用你所用框架的路由器中的导航方法。

## 生命周期钩子

在路由出口中渲染的路由可以访问特定的 Ionic 事件，这些事件与动画系统相连接

| 事件名称             | 触发时机                                                   |
| -------------------- | ---------------------------------------------------------- |
| `ionViewWillEnter` | 当即将进入视图的组件开始动画前触发。 |
| `ionViewDidEnter`  | 当即将进入视图的组件动画完成后触发。 |
| `ionViewWillLeave` | 当即将离开视图的组件开始动画前触发。 |
| `ionViewDidLeave`  | 当即将离开视图的组件动画完成后触发。 |

这些事件与 Ionic 的动画系统绑定，可用于在组件完成动画时协调应用程序的各个部分。这些事件并非替代你框架自带的事件系统，而是作为补充。

对于路由守卫（Router Guards）的处理，较旧的 `ionViewCanEnter` 和 `ionViewCanLeave` 已被各框架特定的等效方法取代。对于 Angular，可以使用[路由守卫](https://angular.io/guide/router#milestone-5-route-guards)。

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