---
title: 范围滑块组件
---
import Props from '@ionic-internal/component-api/v8/range/props.md';
import Events from '@ionic-internal/component-api/v8/range/events.md';
import Methods from '@ionic-internal/component-api/v8/range/methods.md';
import Parts from '@ionic-internal/component-api/v8/range/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/range/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/range/slots.md';

<head>
  <title>ion-range：带标签的范围滑块控件</title>
  <meta name="description" content="ion-range 允许您通过移动滑块从一系列值中进行选择。它支持双滑块，但一个控制数值，标签可以放置在任意一侧。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


范围滑块（Range slider）允许用户通过移动滑块旋钮从一系列值中进行选择。默认情况下，一个旋钮控制范围的值。此行为可以使用[双旋钮](#dual-knobs)进行自定义。

默认情况下，范围滑块的最小值为 `0`，最大值为 `100`。这可以通过 `min` 和 `max` 属性进行配置。

## 标签

标签应用于描述范围。它们可以视觉上使用，并且当用户聚焦在范围上时，屏幕阅读器也会读出它们。这使用户易于理解范围的意图。Range 有几种分配标签的方式：

- `label` 属性：用于纯文本标签
- `label` 插槽：用于自定义 HTML 标签
- `aria-label`：用于为屏幕阅读器提供标签，但不添加可见标签

### 标签位置

下面的示例展示了如何使用 `labelPlacement` 属性来更改标签相对于范围的位置。虽然这里使用了 `label` 属性，但 `labelPlacement` 也可以与 `label` 插槽一起使用。

import LabelsPlayground from '@site/static/usage/v8/range/labels/index.md';

<LabelsPlayground />

### 标签插槽

虽然纯文本标签应通过 `label` 属性传入，但如果需要自定义 HTML，则可以通过 `label` 插槽传入。

import LabelSlotPlayground from '@site/static/usage/v8/range/label-slot/index.md';

<LabelSlotPlayground />

### 无可见标签

如果不需要可见标签，开发人员仍应提供 `aria-label`，以便屏幕阅读器可以访问范围。

import NoVisibleLabel from '@site/static/usage/v8/range/no-visible-label/index.md';

<NoVisibleLabel />

## 装饰元素

装饰性元素可以传递到范围的 `start` 或 `end` 插槽中。这对于添加图标（例如低音量或高音量图标）很有用。由于这些元素是装饰性的，它们不应被屏幕阅读器等辅助技术宣布。

如果文档的方向性设置为从左到右，则插入到 `start` 位置的内容将显示在范围的左侧，而插入到 `end` 位置的内容将显示在范围的右侧。在从右到左（rtl）的方向性中，插入到 `start` 位置的内容将显示在范围的右侧，而插入到 `end` 位置的内容将显示在范围的左侧。

import DecorationsPlayground from '@site/static/usage/v8/range/slots/index.md';

<DecorationsPlayground />

<LegacyAnchor id="dual-knobs" />

## 双旋钮

双旋钮引入了两个旋钮控件，用户可以使用它们来选择下限和上限的值。选择后，Range 将发出一个包含所选上限和下限值的 `ionChange` 事件，其类型为 [RangeValue](#rangevalue)。

import DualKnobs from '@site/static/usage/v8/range/dual-knobs/index.md';

<DualKnobs />

## 数值提示

`pin` 属性将在拖动旋钮时在旋钮上方显示 Range 的值。这允许用户在 Range 中选择特定值。

通过 `pinFormatter` 函数，开发人员可以自定义范围值对用户的格式。

import Pins from '@site/static/usage/v8/range/pins/index.md';

<Pins />

## 吸附与刻度

刻度显示 Range 上每个可用值的指示。为了使用刻度，开发人员必须将 `snaps` 和 `ticks` 属性都设置为 `true`。

启用吸附后，Range 旋钮将在拖动和释放时吸附到最近的可用值。

import SnappingTicks from '@site/static/usage/v8/range/snapping-ticks/index.md';

<SnappingTicks />

## 事件处理

### 使用 `ionChange`

当 Range 旋钮值更改时，会发出 `ionChange` 事件。

import IonChangeEvent from '@site/static/usage/v8/range/ion-change-event/index.md';

<IonChangeEvent />

### 使用 `ionKnobMoveStart` 和 `ionKnobMoveEnd`

当 Range 旋钮开始拖动时（无论是通过鼠标拖动、触摸手势还是键盘交互），会发出 `ionKnobMoveStart` 事件。相反，当 Range 旋钮释放时，会发出 `ionKnobMoveEnd` 事件。两个事件都使用 `RangeValue` 类型发出，并与 `dualKnobs` 属性结合使用。

import IonKnobMoveEvent from '@site/static/usage/v8/range/ion-knob-move-event/index.md';

<IonKnobMoveEvent />

## 主题化

### CSS 自定义属性

Range 包含 [CSS 变量](#css-custom-properties)，可以快速主题化和自定义 Range 组件的外观，以匹配您应用程序的设计。

import CSSProps from '@site/static/usage/v8/range/theming/css-properties/index.md';

<CSSProps />

### CSS 阴影部件

Range 包含 [CSS 阴影部件](#css-shadow-parts)，以允许完全自定义 Range 组件内的特定元素节点。CSS 阴影部件提供了最多的自定义功能，是在需要对 Range 组件进行高级样式设置时的推荐方法。

当启用 `dualKnobs` 时，会暴露额外的阴影部件，以允许每个旋钮独立设置样式。这些部件以两种形式提供：**静态标识部件**（`A` 和 `B`）和**动态位置部件**（`lower` 和 `upper`）。A 和 B 部件始终引用相同的物理旋钮，即使旋钮交叉。相比之下，lower 和 upper 部件反映当前值的位置，并在旋钮交叉时自动交换。这允许通过一致标识或范围内的相对值进行样式设置。

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

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更强的类型检查。

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

<LegacyAnchor id="css-shadow-parts" />

## CSS 阴影部件
<Parts />

<LegacyAnchor id="css-custom-properties" />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />