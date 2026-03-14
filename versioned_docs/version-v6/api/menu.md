---
title: 'ion-menu'
---

import Props from '@ionic-internal/component-api/v6/menu/props.md';
import Events from '@ionic-internal/component-api/v6/menu/events.md';
import Methods from '@ionic-internal/component-api/v6/menu/methods.md';
import Parts from '@ionic-internal/component-api/v6/menu/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/menu/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/menu/slots.md';

<head>
  <title>ion-menu：Ionic API 中各类菜单组件的框架文档</title>
  <meta
    name="description"
    content="ion-menu 组件是从当前视图侧面滑入的导航抽屉。请阅读我们的框架文档，了解 Ionic API 中可用的菜单类型。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

菜单组件是一个从当前视图侧面滑入的导航抽屉。
默认情况下，它从左侧滑入，但可以覆盖此设置以从其他侧滑入。
菜单将根据当前模式以不同方式显示，但显示类型可以更改为任何可用的菜单类型。
菜单元素应是根内容元素的同级元素。
可以附加任意数量的菜单到内容上。
这些菜单可以通过模板控制，也可以使用 MenuController 进行编程控制。

## 基本用法

import BasicUsage from '@site/static/usage/v6/menu/basic/index.md';

<BasicUsage />

## 菜单开关

[ion-menu-toggle](./menu-toggle) 组件可用于创建可打开或关闭菜单的自定义按钮。

import MenuToggle from '@site/static/usage/v6/menu/toggle/index.md';

<MenuToggle />

## 菜单类型

`type` 属性可用于自定义菜单在应用中的显示方式。

import MenuType from '@site/static/usage/v6/menu/type/index.md';

<MenuType />

## 主题定制

### CSS Shadow Parts

import Theming from '@site/static/usage/v6/menu/theming/index.md';

<Theming />

## 接口

### MenuCustomEvent

虽然不是必需的，但可以使用此接口替代 `CustomEvent` 接口，以便在从此组件发出的 Ionic 事件中获得更强的类型提示。

```typescript
interface MenuCustomEvent<T = any> extends CustomEvent {
  detail: T;
  target: HTMLIonMenuElement;
}
```

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