---
title: "ion-router-outlet"
---

import Props from '@ionic-internal/component-api/v8/router-outlet/props.md';
import Events from '@ionic-internal/component-api/v8/router-outlet/events.md';
import Methods from '@ionic-internal/component-api/v8/router-outlet/methods.md';
import Parts from '@ionic-internal/component-api/v8/router-outlet/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/router-outlet/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/router-outlet/slots.md';



import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


路由输出组件的行为类似于 Angular 内置的路由输出组件和 Vue 的路由视图组件，但它包含了提供堆叠导航以及视图进出动画的逻辑。

虽然路由输出组件有用于导航的方法，但建议使用你所用框架路由器的导航方法。

## 生命周期钩子

在路由输出组件中渲染的路由可以访问与动画相关联的特定 Ionic 事件。


| 事件名称            | 触发时机                               |
|--------------------|----------------------------------------|
| `ionViewWillEnter` | 当路由目标组件即将动画进入视图时触发。    |
| `ionViewDidEnter`  | 当路由目标组件已完成动画进入视图时触发。  |
| `ionViewWillLeave` | 当路由来源组件即将动画离开时触发。        |
| `ionViewDidLeave`  | 当路由目标组件已完成动画离开时触发。      |


这些事件与 Ionic 的动画系统相关联，可用于在组件完成动画后协调应用各部分。这些事件不是你所用框架自有事件系统的替代品，而是补充。

关于路由守卫的处理，旧的 `ionViewCanEnter` 和 `ionViewCanLeave` 已被各框架对应的方案所取代。对于 Angular，有[路由守卫](https://angular.io/guide/router#milestone-5-route-guards)。




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
