---
title: "ion-menu"
---
import Props from '@ionic-internal/component-api/v8/menu/props.md';
import Events from '@ionic-internal/component-api/v8/menu/events.md';
import Methods from '@ionic-internal/component-api/v8/menu/methods.md';
import Parts from '@ionic-internal/component-api/v8/menu/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/menu/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/menu/slots.md';

<head>
  <title>ion-menu：API 框架文档 - 菜单组件类型</title>
  <meta name="description" content="ion-menu 组件是一种导航抽屉，从当前视图的侧面滑入。阅读我们的框架文档，了解 Ionic API 上可用的菜单类型。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


菜单组件是一种导航抽屉，从当前视图的侧面滑入。默认情况下，它使用起始侧（start side），在 LTR 方向中从左侧滑入，在 RTL 方向中从右侧滑入，但可以覆盖此侧设置。菜单会根据模式（mode）进行不同的显示，但显示类型可以更改为任何可用的菜单类型。

菜单元素应与根内容元素是同级关系。可以有任意数量的菜单附加到内容上。这些菜单可以从模板中进行控制，也可以通过 `MenuController` 以编程方式控制。

## 基本用法

import Basic from '@site/static/usage/v8/menu/basic/index.md';

<Basic />


## 菜单切换

[菜单切换](./menu-toggle)组件可用于创建自定义按钮来打开或关闭菜单。

import MenuToggle from '@site/static/usage/v8/menu/toggle/index.md';

<MenuToggle />


## 菜单类型

`type` 属性可用于自定义菜单在应用中的显示方式。

import MenuType from '@site/static/usage/v8/menu/type/index.md';

<MenuType />


## 菜单侧

菜单默认在 `"start"` 侧显示。在使用从左到右方向的应用中，这是左侧；在从右到左方向的应用中，这是右侧。菜单也可以设置为在 `"end"` 侧显示，即与 `"start"` 相反的一侧。

如果在应用中需要两侧都有菜单，可以通过将 `side` 值传递给 `MenuController` 的 `open` 方法来打开菜单。如果未提供侧，则将打开 `"start"` 侧的菜单。有关使用 `MenuController` 的示例，请参阅下面的[多个菜单](#多个菜单)部分。

import Sides from '@site/static/usage/v8/menu/sides/index.md';

<Sides />


## 多个菜单

当同一侧存在多个菜单时，我们需要通过 ID 而不是侧来引用它们。否则，可能会激活错误的菜单。

import Multiple from '@site/static/usage/v8/menu/multiple/index.md';

<Multiple />


## 主题

### CSS Shadow Parts

import Theming from '@site/static/usage/v8/menu/theming/index.md';

<Theming />

## 接口

### MenuCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

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
