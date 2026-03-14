---
title: 'ion-item-sliding'
---

import Props from '@ionic-internal/component-api/v6/item-sliding/props.md';
import Events from '@ionic-internal/component-api/v6/item-sliding/events.md';
import Methods from '@ionic-internal/component-api/v6/item-sliding/methods.md';
import Parts from '@ionic-internal/component-api/v6/item-sliding/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/item-sliding/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/item-sliding/slots.md';

<head>
  <title>滑动按钮 | 使用 ion-item-sliding 实现从右向左滑动</title>
  <meta
    name="description"
    content="ion-item-sliding 组件包含可通过拖动显示按钮的列表项。当滑动项从左向右滑动时，会显示操作选项。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

滑动项包含一个可以通过拖动来显示操作按钮的列表项。它需要 [item](./item) 组件作为子元素。所有要显示的操作选项都应放置在 [item options](./item-options) 元素中。

## 基本用法

默认情况下，滑动项操作选项位于列表项的 `"end"` 侧。这意味着当从结束侧向起始侧滑动时（即从左向右阅读顺序下为从右向左滑动，从右向左阅读顺序下为从左向右滑动）会显示操作选项。若要将操作选项放置在相反侧，以便在相反方向滑动时显示，请在 [item options](./item-options) 元素上设置 side 属性为 `"start"`。最多可以同时使用两个 item options，以便根据滑动方向显示两组不同的操作选项。

import Basic from '@site/static/usage/v6/item-sliding/basic/index.md';

<Basic />

## 图标选项

当图标与文本一起放置在 [item option](./item-option) 中时，默认情况下图标会显示在文本上方。可以通过更改图标的 slot 为任意可用的 [item option slots](./item-option#slots) 来调整其位置。

import Icons from '@site/static/usage/v6/item-sliding/icons/index.md';

<Icons />

## 可展开选项

如果滑动超过某个点，操作选项可以展开以占据整个列表项的宽度。这可以与 [item options](./item-options) 上的 `ionSwipe` 事件结合使用，以便在列表项完全滑动时调用方法。

import Expandable from '@site/static/usage/v6/item-sliding/expandable/index.md';

<Expandable />

## 接口

### ItemSlidingCustomEvent

虽然不强制要求，但可以使用此接口替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更严格的类型检查。

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

## CSS Shadow Parts

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />