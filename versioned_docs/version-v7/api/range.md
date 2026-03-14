---
title: 'ion-range'
---

import Props from '@ionic-internal/component-api/v7/range/props.md';
import Events from '@ionic-internal/component-api/v7/range/events.md';
import Methods from '@ionic-internal/component-api/v7/range/methods.md';
import Parts from '@ionic-internal/component-api/v7/range/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/range/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/range/slots.md';

<head>
  <title>ion-range：带标签的范围滑块旋钮控件</title>
  <meta
    name="description"
    content="ion-range 允许通过移动滑块来从一系列值中进行选择。它支持双旋钮，但一个旋钮控制值，标签可以放置在任意一侧。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

范围滑块允许用户通过移动滑块旋钮从一系列值中进行选择。默认情况下，一个旋钮控制范围的值。此行为可以使用[双旋钮](#双旋钮)进行自定义。

默认情况下，范围滑块的最小值为 `0`，最大值为 `100`。这可以通过 `min` 和 `max` 属性进行配置。

## 标签

标签应用于描述范围。它们可以用于视觉展示，并且当用户聚焦在范围滑块上时，屏幕阅读器也会朗读它们。这使得用户更容易理解范围的意图。范围滑块有几种分配标签的方式：

- `label` 属性：用于纯文本标签
- `label` 插槽：用于自定义 HTML 标签
- `aria-label`：用于为屏幕阅读器提供标签，但不添加可见标签

### 标签位置

下面的演示展示了如何使用 `labelPlacement` 属性来更改标签相对于范围滑块的位置。虽然这里使用了 `label` 属性，但 `labelPlacement` 也可以与 `label` 插槽一起使用。

import LabelsPlayground from '@site/static/usage/v7/range/labels/index.md';

<LabelsPlayground />

### 标签插槽

虽然纯文本标签应通过 `label` 属性传递，但如果需要自定义 HTML，可以通过 `label` 插槽传递。

import LabelSlotPlayground from '@site/static/usage/v7/range/label-slot/index.md';

<LabelSlotPlayground />

### 无可见标签

如果不需要可见标签，开发者仍应提供 `aria-label`，以便范围滑块对屏幕阅读器可访问。

import NoVisibleLabel from '@site/static/usage/v7/range/no-visible-label/index.md';

<NoVisibleLabel />

## 装饰元素

装饰元素可以传递到范围滑块的 `start` 或 `end` 插槽中。这对于添加图标（如低音量或高音量图标）非常有用。由于这些元素是装饰性的，它们不应被屏幕阅读器等辅助技术朗读。

如果文档的方向性设置为从左到右，则插入到 `start` 位置的内容将显示在范围滑块的左侧，而插入到 `end` 位置的内容将显示在范围滑块的右侧。在从右到左（rtl）的方向性中，插入到 `start` 位置的内容将显示在范围滑块的右侧，而插入到 `end` 位置的内容将显示在范围滑块的左侧。

import DecorationsPlayground from '@site/static/usage/v7/range/slots/index.md';

<DecorationsPlayground />

## 双旋钮

双旋钮引入了两个旋钮控件，用户可以使用它们来选择下限和上限的值。选择后，范围滑块将发出一个 `ionChange` 事件，并附带一个 [RangeValue](#rangevalue)，其中包含所选的上限和下限值。

import DualKnobs from '@site/static/usage/v7/range/dual-knobs/index.md';

<DualKnobs />

## 数值提示

`pin` 属性将在拖动旋钮时在旋钮上方显示范围滑块的值。这允许用户在范围滑块中选择特定值。

通过 `pinFormatter` 函数，开发者可以自定义范围滑块值的显示格式。

import Pins from '@site/static/usage/v7/range/pins/index.md';

<Pins />

## 吸附与刻度

刻度显示范围滑块上每个可用值的指示。为了使用刻度，开发者必须将 `snaps` 和 `ticks` 属性都设置为 `true`。

启用吸附后，范围滑块旋钮将在拖动和释放时吸附到最近的可用值。

import SnappingTicks from '@site/static/usage/v7/range/snapping-ticks/index.md';

<SnappingTicks />

## 事件处理

### 使用 `ionChange`

`ionChange` 事件在范围滑块旋钮值更改时发出。

import IonChangeEvent from '@site/static/usage/v7/range/ion-change-event/index.md';

<IonChangeEvent />

### 使用 `ionKnobMoveStart` 和 `ionKnobMoveEnd`

`ionKnobMoveStart` 事件在范围滑块旋钮开始拖动时发出，无论是通过鼠标拖动、触摸手势还是键盘交互。相反，`ionKnobMoveEnd` 事件在范围滑块旋钮释放时发出。两个事件都使用 `RangeValue` 类型发出，并与 `dualKnobs` 属性结合使用。

import IonKnobMoveEvent from '@site/static/usage/v7/range/ion-knob-move-event/index.md';

<IonKnobMoveEvent />

## 主题定制

### CSS 自定义属性

范围滑块包含 [CSS 变量](#css自定义属性)，用于快速主题化和自定义范围滑块组件的外观，以匹配您的应用程序设计。

import CSSProps from '@site/static/usage/v7/range/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

范围滑块包含 [CSS Shadow Parts](#css-shadow-parts)，以允许完全自定义范围滑块组件内的特定元素节点。CSS Shadow Parts 提供了最多的自定义功能，是需要对范围滑块组件进行高级样式设置时的推荐方法。

import CSSParts from '@site/static/usage/v7/range/theming/css-shadow-parts/index.md';

<CSSParts />

## 从旧版范围滑块语法迁移

Ionic 7.0 引入了更简单的范围滑块语法。这种新语法减少了设置范围滑块所需的样板代码，解决了可访问性问题，并改善了开发者体验。

开发者可以逐个范围滑块执行此迁移。虽然开发者可以继续使用旧版语法，但我们建议尽快迁移。

### 使用现代语法

使用现代语法涉及移除 `ion-label` 并使用 `label` 属性将标签传递给 `ion-range`。标签的位置可以使用 `labelPlacement` 属性进行配置。

如果标签需要自定义 HTML，可以直接使用 `label` 插槽将其传递到 `ion-range` 内部。

import Migration from '@site/static/usage/v7/range/migration/index.md';

<Migration />

:::note
在 Ionic 的早期版本中，`ion-range` 需要 `ion-item` 才能正常工作。从 Ionic 7.0 开始，只有当项目放置在 `ion-list` 中时，才应在 `ion-item` 中使用 `ion-range`。此外，`ion-range` 不再需要 `ion-item` 即可正常工作。
:::

### 使用旧版语法

Ionic 使用启发式方法检测应用程序是否使用现代范围滑块语法。在某些情况下，可能更倾向于继续使用旧版语法。开发者可以将 `ion-range` 上的 `legacy` 属性设置为 `true`，以强制该范围滑块实例使用旧版语法。

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