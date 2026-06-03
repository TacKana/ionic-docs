---
title: 'ion-item-sliding'
---

import Props from '@ionic-internal/component-api/v7/item-sliding/props.md';
import Events from '@ionic-internal/component-api/v7/item-sliding/events.md';
import Methods from '@ionic-internal/component-api/v7/item-sliding/methods.md';
import Parts from '@ionic-internal/component-api/v7/item-sliding/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/item-sliding/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/item-sliding/slots.md';

<head>
  <title>ion-item-sliding：滑动按钮 | 从右向左滑动</title>
  <meta
    name="description"
    content="ion-item-sliding 组件包含可拖动以显示按钮的项目。当滑动项目从右向左滑动时显示选项。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

滑动项目包含一个可以拖动以显示选项按钮的项目。它需要一个[项目（item）](./item)组件作为子元素。所有要显示的选项应放置在[项目选项（item options）](./item-options)元素中。

## 基本用法

滑动项目选项默认放置在项目的 `"end"` 侧。这意味着当项目从 end 向 start 方向滑动时，即 LTR 中从右向左滑动（RTL 中从左向右滑动），选项会显示。要将它们放在另一侧，以便在相反方向滑动时显示，请在[项目选项（item options）](./item-options)元素上将 side 属性设置为 `"start"`。可以同时使用两个项目选项，以根据滑动方向显示两组不同的选项。

import Basic from '@site/static/usage/v7/item-sliding/basic/index.md';

<Basic />

## 图标选项

当图标与文本一起放置在[项目选项（item option）](./item-option)中时，默认情况下图标显示在文本上方。可以将图标上的插槽更改为任何可用的[项目选项插槽](./item-option#插槽)来改变其位置。

import Icons from '@site/static/usage/v7/item-sliding/icons/index.md';

<Icons />

## 可展开选项

如果你滑动超过某个点，选项可以展开以占据父级 `ion-item` 的全部宽度。这可以与[项目选项（item options）](./item-options)上的 `ionSwipe` 事件结合使用，以在项目完全滑动时调用方法。

import Expandable from '@site/static/usage/v7/item-sliding/expandable/index.md';

<Expandable />

## 接口

### ItemSlidingCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

```typescript
interface ItemSlidingCustomEvent extends CustomEvent {
  target: HTMLIonItemSlidingElement;
}
```

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
