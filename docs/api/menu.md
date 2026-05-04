---
title: 菜单组件
---
import Props from '@ionic-internal/component-api/v8/menu/props.md';
import Events from '@ionic-internal/component-api/v8/menu/events.md';
import Methods from '@ionic-internal/component-api/v8/menu/methods.md';
import Parts from '@ionic-internal/component-api/v8/menu/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/menu/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/menu/slots.md';

<head>
  <title>ion-menu：菜单组件的 API 框架文档</title>
  <meta name="description" content="ion-menu 组件是从当前视图侧面滑入的导航抽屉。请阅读 Ionic API 上可用的菜单类型的框架文档。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


菜单组件是一个从当前视图侧面滑入的导航抽屉。默认情况下，它使用起始侧（对于从左到右的布局是左侧，对于从右到左的布局是右侧），但可以通过配置覆盖该侧边。菜单的显示方式会根据模式有所不同，不过显示类型可以更改为任何可用的菜单类型。

菜单元素应该是根内容元素的同级元素。可以附加任意数量的菜单到内容上。这些菜单可以通过模板控制，也可以使用 `MenuController` 以编程方式控制。

## 基本用法

import Basic from '@site/static/usage/v8/menu/basic/index.md';

<Basic />


<LegacyAnchor id="menu-toggle" />

## 菜单切换开关

[menu toggle](./menu-toggle) 组件可用于创建可以打开或关闭菜单的自定义按钮。

import MenuToggle from '@site/static/usage/v8/menu/toggle/index.md';

<MenuToggle />


## 菜单类型

`type` 属性可用于自定义菜单在应用程序中的显示方式。

import MenuType from '@site/static/usage/v8/menu/type/index.md';

<MenuType />


## 菜单侧边

菜单默认显示在 `"start"` 侧。在使用从左到右方向的应用中，这是左侧；在从右到左的应用中，这将是右侧。菜单也可以设置为显示在 `"end"` 侧，这与 `"start"` 侧相反。

如果应用中需要同时使用两侧的菜单，可以通过将 `side` 值传递给 `MenuController` 上的 `open` 方法来打开菜单。如果未提供侧边，将打开 `"start"` 侧的菜单。请参阅下面的[多菜单](#multiple-menus)部分，查看使用 `MenuController` 的示例。

import Sides from '@site/static/usage/v8/menu/sides/index.md';

<Sides />


<LegacyAnchor id="multiple-menus" />

## 多菜单

当同一侧存在多个菜单时，我们需要通过 ID 而不是侧边来引用它们。否则，可能会激活错误的菜单。

import Multiple from '@site/static/usage/v8/menu/multiple/index.md';

<Multiple />


## 主题定制

### CSS Shadow Parts

import Theming from '@site/static/usage/v8/menu/theming/index.md';

<Theming />

## 接口

### MenuCustomEvent

虽然这不是必需的，但此接口可用于替代 `CustomEvent` 接口，以便为此组件发出的 Ionic 事件提供更强的类型定义。

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