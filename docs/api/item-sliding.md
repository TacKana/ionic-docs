---
title: 滑动项组件
---
import Props from '@ionic-internal/component-api/v8/item-sliding/props.md';
import Events from '@ionic-internal/component-api/v8/item-sliding/events.md';
import Methods from '@ionic-internal/component-api/v8/item-sliding/methods.md';
import Parts from '@ionic-internal/component-api/v8/item-sliding/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/item-sliding/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/item-sliding/slots.md';

<head>
  <title>ion-item-sliding：滑动按钮 | 从右向左滑动</title>
  <meta name="description" content="ion-item-sliding 组件包含可通过拖动显示按钮的项目。当滑动项目从左向右滑动时，选项会显示出来。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

滑动项（sliding item）包含一个可通过拖动显示选项按钮的项目。它需要一个 [item](./item) 组件作为子元素。所有要显示的选项都应放置在 [item options](./item-options) 元素中。

## 基本用法

滑动项的选项默认放置在项目的 `"end"` 侧。这意味着当项目从 end 向 start 方向滑动时（例如，在 LTR 布局中从右向左滑动，在 RTL 布局中从左向右滑动）会显示选项。要将它们放置在相反的一侧，以便在反方向滑动时显示选项，请在 [item options](./item-options) 元素上设置 side 属性为 `"start"`。最多可以同时使用两个 item options，以便根据滑动方向显示两组不同的选项。

import Basic from '@site/static/usage/v8/item-sliding/basic/index.md';

<Basic />


## 图标选项

当图标与文本一起放置在 [item option](./item-option) 中时，默认会将图标显示在文本上方。可以通过更改图标上的 slot 属性为任何可用的 [item option slots](./item-option#slots) 来改变其位置。

import Icons from '@site/static/usage/v8/item-sliding/icons/index.md';

<Icons />


## 可扩展选项

如果滑动超过某个点，选项可以扩展以占据父 `ion-item` 的整个宽度。这可以与 [item options](./item-options) 上的 `ionSwipe` 事件结合使用，以便在项目完全滑动时调用方法。

import Expandable from '@site/static/usage/v8/item-sliding/expandable/index.md';

<Expandable />


## 接口

### ItemSlidingCustomEvent

虽然不是必需的，但此接口可用于替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更严格的类型检查。

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