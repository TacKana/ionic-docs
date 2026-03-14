---
title: 路由出口组件
---

import Props from '@ionic-internal/component-api/v8/router-outlet/props.md';
import Events from '@ionic-internal/component-api/v8/router-outlet/events.md';
import Methods from '@ionic-internal/component-api/v8/router-outlet/methods.md';
import Parts from '@ionic-internal/component-api/v8/router-outlet/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/router-outlet/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/router-outlet/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

路由出口（router outlet）的行为类似于 Angular 内置的路由出口组件和 Vue 的路由视图组件，但它包含了提供堆叠导航以及在视图间进行进出动画的逻辑。

尽管路由出口本身提供了导航方法，但建议使用您框架路由器中的导航方法。

## 生命周期钩子

在路由出口中渲染的路由可以访问特定于 Ionic 的事件，这些事件与动画系统相关联：

| 事件名称            | 触发时机                                                       |
|---------------------|---------------------------------------------------------------|
| `ionViewWillEnter`  | 当即将路由到的组件准备开始进入动画时触发。                     |
| `ionViewDidEnter`   | 当即将路由到的组件已完成进入动画时触发。                       |
| `ionViewWillLeave`  | 当即将离开的组件准备开始离开动画时触发。                       |
| `ionViewDidLeave`   | 当即将离开的组件已完成离开动画时触发。                         |

这些事件与 Ionic 的动画系统紧密集成，可用于在组件完成动画时协调应用程序的各个部分。这些事件并非替代您框架自带的事件系统，而是作为补充。

对于路由守卫（Router Guards）的处理，原有的 `ionViewCanEnter` 和 `ionViewCanLeave` 已被替换为框架特定的等效方法。对于 Angular，请参考[路由守卫](https://angular.io/guide/router#milestone-5-route-guards)。

## 属性
<Props />

## 事件
<Events />

## 方法
<Methods />

## CSS 影子部件
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />