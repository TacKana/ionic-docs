---
title: "ion-range"
---
import Props from '@ionic-internal/component-api/v8/range/props.md';
import Events from '@ionic-internal/component-api/v8/range/events.md';
import Methods from '@ionic-internal/component-api/v8/range/methods.md';
import Parts from '@ionic-internal/component-api/v8/range/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/range/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/range/slots.md';

<head>
  <title>ion-range：带标签的范围滑块旋钮控件</title>
  <meta name="description" content="ion-range 允许您通过移动滑块从一系列值中进行选择。它支持双旋钮，但一个旋钮控制值，标签可以放置在任一侧。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


范围滑块允许用户通过移动滑块旋钮从一系列值中进行选择。默认情况下，一个旋钮控制范围的值。此行为可以通过[双旋钮](#双旋钮)进行自定义。

默认情况下，范围滑块的最小值为 `0`，最大值为 `100`。这可以通过 `min` 和 `max` 属性进行配置。

## 标签

应使用标签来描述范围。它们可以在视觉上使用，当用户聚焦到范围上时，屏幕阅读器也会读出它们。这使用户可以轻松理解范围的意图。Range 有多种分配标签的方式：

- `label` 属性：用于纯文本标签
- `label` 插槽：用于自定义 HTML 标签
- `aria-label`：用于为屏幕阅读器提供标签，但不添加可见标签

### 标签位置

下面的演示展示了如何使用 `labelPlacement` 属性更改标签相对于范围的位置。虽然这里使用了 `label` 属性，但 `labelPlacement` 也可以与 `label` 插槽一起使用。

import LabelsPlayground from '@site/static/usage/v8/range/labels/index.md';

<LabelsPlayground />

### 标签插槽

纯文本标签应通过 `label` 属性传入，但若需要自定义 HTML，则可以通过 `label` 插槽传入。

import LabelSlotPlayground from '@site/static/usage/v8/range/label-slot/index.md';

<LabelSlotPlayground />

### 无可见标签

如果不需要可见标签，开发者仍应提供 `aria-label`，以便屏幕阅读器可以访问范围。

import NoVisibleLabel from '@site/static/usage/v8/range/no-visible-label/index.md';

<NoVisibleLabel />

## 装饰

装饰性元素可以通过范围的 `start` 或 `end` 插槽传入。这对于添加图标（如低音量或高音量图标）非常有用。由于这些元素是装饰性的，它们不应被屏幕阅读器等辅助技术播报。

如果文档的方向设置为从左到右，则放入 `start` 位置的插槽内容将显示在范围的左侧，而放入 `end` 位置的插槽内容将显示在范围的右侧。在从右到左（rtl）的方向中，放入 `start` 位置的插槽内容将显示在范围的右侧，而放入 `end` 位置的插槽内容将显示在范围的左侧。

import DecorationsPlayground from '@site/static/usage/v8/range/slots/index.md';

<DecorationsPlayground />

## 双旋钮

双旋钮引入了两个旋钮控件，用户可以使用它们在上下边界之间选择值。选中后，Range 将发出一个 `ionChange` 事件，其中包含一个 [RangeValue](#rangevalue)，包含选中的上限和下限值。

import DualKnobs from '@site/static/usage/v8/range/dual-knobs/index.md';

<DualKnobs />

## 大头针

`pin` 属性将在拖动时在旋钮上方显示 Range 的值。这允许用户在范围内选择特定的值。

使用 `pinFormatter` 函数，开发者可以自定义向用户显示的范围值格式。

import Pins from '@site/static/usage/v8/range/pins/index.md';

<Pins />

## 吸附和刻度

刻度显示 Range 上每个可用值的指示标记。为了使用刻度，开发者必须将 `snaps` 和 `ticks` 属性都设置为 `true`。

启用吸附后，Range 旋钮在拖动和释放时将吸附到最近的可用值。

import SnappingTicks from '@site/static/usage/v8/range/snapping-ticks/index.md';

<SnappingTicks />

## 事件处理

### 使用 `ionChange`

`ionChange` 事件在 Range 旋钮值发生变化时触发。

import IonChangeEvent from '@site/static/usage/v8/range/ion-change-event/index.md';

<IonChangeEvent />

### 使用 `ionKnobMoveStart` 和 `ionKnobMoveEnd`

`ionKnobMoveStart` 事件在 Range 旋钮开始拖动时触发，无论是通过鼠标拖拽、触摸手势还是键盘交互。相反，`ionKnobMoveEnd` 在 Range 旋钮释放时触发。两个事件都以 `RangeValue` 类型触发，并与 `dualKnobs` 属性配合使用。

import IonKnobMoveEvent from '@site/static/usage/v8/range/ion-knob-move-event/index.md';

<IonKnobMoveEvent />

## 主题

### CSS 自定义属性

Range 包含 [CSS 变量](#css-自定义属性)，可快速设置主题并自定义 Range 组件的外观以匹配您的应用设计。

import CSSProps from '@site/static/usage/v8/range/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

Range 包含 [CSS 阴影部分](#css-shadow-parts)，允许完全自定义 Range 组件中的特定元素节点。CSS 阴影部分 提供最大的自定义能力，是在需要对 Range 组件进行高级样式设计时的推荐方法。

当启用 `dualKnobs` 时，会暴露额外的 Shadow Parts，允许每个旋钮独立设置样式。这些有两种形式：**静态标识部分**（`A` 和 `B`）和**动态位置部分**（`lower` 和 `upper`）。A 和 B 部分始终指向相同的物理旋钮，即使旋钮交叉。相比之下，lower 和 upper 部分反映当前值位置，并在旋钮交叉时自动交换。这样可以通过一致的标识或范围内的相对值进行样式设计。

import CSSParts from '@site/static/usage/v8/range/theming/css-shadow-parts/index.md';

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

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

```typescript
interface RangeCustomEvent extends CustomEvent {
  detail: RangeChangeEventDetail;
  target: HTMLIonRangeElement;
}
```

## 类型

### RangeValue

```typescript
type RangeValue = number | { lower: number, upper: number };
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
