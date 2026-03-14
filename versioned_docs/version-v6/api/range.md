---
title: 'ion-range'
---

import Props from '@ionic-internal/component-api/v6/range/props.md';
import Events from '@ionic-internal/component-api/v6/range/events.md';
import Methods from '@ionic-internal/component-api/v6/range/methods.md';
import Parts from '@ionic-internal/component-api/v6/range/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/range/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/range/slots.md';

<head>
  <title>范围滑块 | ion-range：带标签的滑块旋钮控件</title>
  <meta
    name="description"
    content="ion-range 允许通过移动滑块来选择一定范围的值。它支持双旋钮，其中一个旋钮控制数值，标签可以放置在任何一侧。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

范围滑块允许用户通过移动滑块旋钮来从一个数值范围中进行选择。默认情况下，一个旋钮控制范围的值。可以通过使用[双旋钮](#双旋钮)来自定义此行为。

默认情况下，范围滑块的最小值为 `0`，最大值为 `100`。这可以通过 `min` 和 `max` 属性进行配置。

## 基本用法

import Basic from '@site/static/usage/v6/range/basic/index.md';

<Basic />

## 范围标签

通过向元素添加 `slot="start"` 或 `slot="end"`，可以将标签和自定义 UI 元素放置在范围滑块的两侧。该元素可以是任何元素，例如 `ion-label`、`ion-icon` 或 `div`。如果文档的文本方向设置为从左到右，那么分配到 `start` 位置的内容将显示在范围滑块的左侧，而分配到 `end` 位置的内容将显示在右侧。在从右到左（rtl）的文本方向中，分配到 `start` 位置的内容将显示在范围滑块的右侧，而分配到 `end` 位置的内容将显示在左侧。

import SlotsPlayground from '@site/static/usage/v6/range/slots/index.md';

<SlotsPlayground />

## 双旋钮

双旋钮引入了两个旋钮控件，用户可以使用它们来选择下限和上限的值。当选中时，范围滑块将发出一个 `ionChange` 事件，附带一个 [RangeValue](#rangevalue)，其中包含所选的上限和下限值。

import DualKnobs from '@site/static/usage/v6/range/dual-knobs/index.md';

<DualKnobs />

## 数值提示

`pin` 属性将在拖动时在旋钮上方显示范围滑块的值。这允许用户在范围滑块中选择特定值。

通过 `pinFormatter` 函数，开发者可以自定义范围滑块值向用户的显示格式。

import Pins from '@site/static/usage/v6/range/pins/index.md';

<Pins />

## 吸附与刻度

刻度显示范围滑块上每个可用值的指示。要使用刻度，开发者必须将 `snaps` 和 `ticks` 属性都设置为 `true`。

启用吸附功能后，范围滑块旋钮在拖动和释放时将吸附到最接近的可用值。

import SnappingTicks from '@site/static/usage/v6/range/snapping-ticks/index.md';

<SnappingTicks />

## 事件处理

### 使用 `ionChange`

当范围滑块旋钮值发生变化时，会发出 `ionChange` 事件。

import IonChangeEvent from '@site/static/usage/v6/range/ion-change-event/index.md';

<IonChangeEvent />

### 使用 `ionKnobMoveStart` 和 `ionKnobMoveEnd`

当范围滑块旋钮开始拖动时（无论是通过鼠标拖动、触摸手势还是键盘交互），会发出 `ionKnobMoveStart` 事件。相反，当范围滑块旋钮被释放时，会发出 `ionKnobMoveEnd` 事件。这两个事件都带有 `RangeValue` 类型，并与 `dualKnobs` 属性结合使用。

import IonKnobMoveEvent from '@site/static/usage/v6/range/ion-knob-move-event/index.md';

<IonKnobMoveEvent />

## 主题定制

### CSS 自定义属性

范围滑块包含了 [CSS 变量](#css-custom-properties)，可以快速为主题化和自定义范围滑块组件的外观，以匹配应用程序的设计。

import CSSProps from '@site/static/usage/v6/range/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

范围滑块包含了 [CSS Shadow Parts](#css-shadow-parts)，允许完全自定义范围滑块组件内的特定元素节点。CSS Shadow Parts 提供了最多的自定义能力，是在需要对范围滑块组件进行高级样式定制时的推荐方法。

import CSSParts from '@site/static/usage/v6/range/theming/css-shadow-parts/index.md';

<CSSParts />

## 接口

### RangeChangeEventDetail

```typescript
interface RangeChangeEventDetail {
  value: RangeValue;
}
```

### RangeKnobMoveStartEventDetail

```typescript
interface RangeKnobMoveStartEventDetail {
  value: RangeValue;
}
```

### RangeKnobMoveEndEventDetail

```typescript
interface RangeKnobMoveEndEventDetail {
  value: RangeValue;
}
```

### RangeCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，以便在此组件发出的 Ionic 事件中获得更强的类型检查。

```typescript
interface RangeCustomEvent extends CustomEvent {
  detail: RangeChangeEventDetail;
  target: HTMLIonRangeElement;
}
```

## 类型

### RangeValue

```typescript
type RangeValue = number | { lower: number; upper: number };
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