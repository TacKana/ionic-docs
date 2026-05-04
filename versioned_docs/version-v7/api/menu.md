---
title: 'ion-menu'
---

import Props from '@ionic-internal/component-api/v7/menu/props.md';
import Events from '@ionic-internal/component-api/v7/menu/events.md';
import Methods from '@ionic-internal/component-api/v7/menu/methods.md';
import Parts from '@ionic-internal/component-api/v7/menu/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/menu/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/menu/slots.md';

<head>
  <title>ion-menu：菜单组件类型的 API 框架文档</title>
  <meta
    name="description"
    content="ion-menu 组件是一种从当前视图侧面滑入的导航抽屉。请阅读我们的框架文档，了解 Ionic API 上可用的菜单类型。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

菜单组件是一种从当前视图侧面滑入的导航抽屉。默认情况下，它使用起始侧（对于 LTR 从左滑入，对于 RTL 从右滑入），但该侧边可以被覆盖。菜单会根据模式以不同方式显示，但显示类型可以更改为任何可用的菜单类型。

菜单元素应是根内容元素的同级元素。可以有任意数量的菜单附加到内容上。这些可以通过模板控制，也可以使用 `MenuController` 以编程方式控制。

<LegacyAnchor id="menu-toggle" />

## 基本用法

import Basic from '@site/static/usage/v7/menu/basic/index.md';

<Basic />

## 菜单切换器

[菜单切换器](./menu-toggle) 组件可用于创建可以打开或关闭菜单的自定义按钮。

import MenuToggle from '@site/static/usage/v7/menu/toggle/index.md';

<MenuToggle />

## 菜单类型

`type` 属性可用于自定义菜单在应用程序中的显示方式。

import MenuType from '@site/static/usage/v7/menu/type/index.md';

<MenuType />

## 菜单侧边

菜单默认在 `"start"` 侧显示。在使用从左到右方向的应用程序中，这是左侧；在从右到左的应用程序中，这将是右侧。菜单也可以设置为在 `"end"` 侧显示，这是 `"start"` 的对侧。

如果应用程序中两侧都需要菜单，则可以通过将 `side` 值传递给 `MenuController` 上的 `open` 方法来打开菜单。如果未提供侧边，则将打开 `"start"` 侧的菜单。请参阅下面的 [多个菜单](#多个菜单) 部分，了解使用 `MenuController` 的示例。

import Sides from '@site/static/usage/v7/menu/sides/index.md';

<Sides />

## 多个菜单

当同一侧存在多个菜单时，我们需要通过 ID 而不是侧边来引用它们。否则，可能会激活错误的菜单。

import Multiple from '@site/static/usage/v7/menu/multiple/index.md';

<Multiple />

## 主题定制

### CSS 影子部件

import Theming from '@site/static/usage/v7/menu/theming/index.md';

<Theming />

## 接口

### MenuCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更严格的类型检查。

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

## CSS 影子部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />