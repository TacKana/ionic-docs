---
title: "ion-item-sliding"
---
import Props from '@ionic-internal/component-api/v8/item-sliding/props.md';
import Events from '@ionic-internal/component-api/v8/item-sliding/events.md';
import Methods from '@ionic-internal/component-api/v8/item-sliding/methods.md';
import Parts from '@ionic-internal/component-api/v8/item-sliding/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/item-sliding/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/item-sliding/slots.md';

<head>
  <title>ion-item-sliding: 滑动按钮 | 从右向左滑动</title>
  <meta name="description" content="ion-item-sliding 组件包含可拖拽以显示按钮的项目。当滑动项目从右向左滑动时显示选项。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


滑动项目包含一个可以拖拽以显示选项按钮的项目。它需要一个 [item](./item) 组件作为子元素。要显示的所有选项都应放置在 [item options](./item-options) 元素中。


## 基本用法

滑动项目选项默认放置在项目的 `"end"` 侧。这意味着当项目从 end 向 start 方向滑动时（即 LTR 中从右向左，RTL 中从左向右）会显示选项。要将它们放在相反侧，使其在反向滑动时显示，请在 [item options](./item-options) 元素上将 `side` 属性设置为 `"start"`。最多可以同时使用两个 item options，以根据不同滑动方向显示两组不同的选项。

import Basic from '@site/static/usage/v8/item-sliding/basic/index.md';

<Basic />


## 图标选项

当在 [item option](./item-option) 中将图标与文本并排放置时，默认情况下图标会显示在文本上方。可以将图标上的插槽更改为任何可用的 [item option 插槽](./item-option#slots) 来更改其位置。

import Icons from '@site/static/usage/v8/item-sliding/icons/index.md';

<Icons />


## 可展开选项

如果您滑动超过某个点，选项可以展开以占据父级 `ion-item` 的完整宽度。这可以与 [item options](./item-options) 上的 `ionSwipe` 事件结合使用，在项目完全滑动时调用方法。

import Expandable from '@site/static/usage/v8/item-sliding/expandable/index.md';

<Expandable />


## 接口

### ItemSlidingCustomEvent

虽然不是必需的，但此接口可用于替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

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
