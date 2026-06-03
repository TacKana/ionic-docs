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
  <title>ion-range：带标签的范围滑块旋钮控制</title>
  <meta
    name="description"
    content="ion-range 让你通过移动滑块从一系列值中进行选择。它支持双旋钮，但一个旋钮控制值，标签可以放在任一侧。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

范围滑块（Range slider）让用户通过移动滑块旋钮从一系列值中进行选择。默认情况下，一个旋钮控制范围的值。此行为可以使用[双旋钮](#双旋钮)进行自定义。

默认情况下，范围滑块的最小值为 `0`，最大值为 `100`。这可以通过 `min` 和 `max` 属性进行配置。

## 标签

标签应用于描述范围。它们可以在视觉上使用，当用户聚焦范围时，屏幕阅读器也会将其读出。这使用户能够轻松理解范围的用途。范围有几种分配标签的方式：

- `label` 属性：用于纯文本标签
- `label` 插槽：用于自定义 HTML 标签
- `aria-label`：用于为屏幕阅读器提供标签，但不添加可见标签

### 标签位置

下面的演示展示了如何使用 `labelPlacement` 属性更改标签相对于范围的位置。虽然这里使用了 `label` 属性，但 `labelPlacement` 也可以与 `label` 插槽一起使用。

import LabelsPlayground from '@site/static/usage/v7/range/labels/index.md';

<LabelsPlayground />

### 标签插槽

虽然纯文本标签应通过 `label` 属性传递，但如果需要自定义 HTML，可以通过 `label` 插槽传递。

import LabelSlotPlayground from '@site/static/usage/v7/range/label-slot/index.md';

<LabelSlotPlayground />

### 无可见标签

如果不需要可见标签，开发者仍应提供 `aria-label`，以便屏幕阅读器可以访问范围。

import NoVisibleLabel from '@site/static/usage/v7/range/no-visible-label/index.md';

<NoVisibleLabel />

## 装饰

装饰元素可以传递到范围的 `start` 或 `end` 插槽中。这对于添加图标（如低音量或高音量图标）非常有用。由于这些元素是装饰性的，因此不应由屏幕阅读器等辅助技术宣读。

如果文档的方向设置为从左到右，则放置在 `start` 插槽的内容将显示在范围的左侧，而放置在 `end` 插槽的内容将显示在范围的右侧。在从右到左（rtl）方向上，放置在 `start` 插槽的内容将显示在范围的右侧，而放置在 `end` 插槽的内容将显示在范围的左侧。

import DecorationsPlayground from '@site/static/usage/v7/range/slots/index.md';

<DecorationsPlayground />

## 双旋钮

双旋钮引入两个旋钮控件，用户可以使用它们在下限和上限选择一个值。选中时，范围将发出一个带有 [RangeValue](#rangevalue) 的 `ionChange` 事件，包含选中的上限和下限值。

import DualKnobs from '@site/static/usage/v7/range/dual-knobs/index.md';

<DualKnobs />

## 固定值显示

`pin` 属性将在拖动时在旋钮上方显示范围的值。这允许用户选择范围内的特定值。

使用 `pinFormatter` 函数，开发者可以自定义范围值的格式化方式。

import Pins from '@site/static/usage/v7/range/pins/index.md';

<Pins />

## 吸附和刻度

刻度显示范围内每个可用值的指示。为了使用刻度，开发者必须将 `snaps` 和 `ticks` 属性都设置为 `true`。

启用吸附后，范围旋钮在拖动和释放时将吸附到最近的可用值。

import SnappingTicks from '@site/static/usage/v7/range/snapping-ticks/index.md';

<SnappingTicks />

## 事件处理

### 使用 `ionChange`

`ionChange` 事件在范围旋钮值变化时发出。

import IonChangeEvent from '@site/static/usage/v7/range/ion-change-event/index.md';

<IonChangeEvent />

### 使用 `ionKnobMoveStart` 和 `ionKnobMoveEnd`

`ionKnobMoveStart` 事件在范围旋钮开始拖动时发出，无论是通过鼠标拖动、触摸手势还是键盘交互。相反，`ionKnobMoveEnd` 在范围旋钮释放时发出。两个事件都以 `RangeValue` 类型发出，并与 `dualKnobs` 属性配合使用。

import IonKnobMoveEvent from '@site/static/usage/v7/range/ion-knob-move-event/index.md';

<IonKnobMoveEvent />

## 主题

### CSS 自定义属性

Range 包含 [CSS 变量](#css-自定义属性)，可快速主题化和自定义 Range 组件的外观，以匹配你的应用设计。

import CSSProps from '@site/static/usage/v7/range/theming/css-properties/index.md';

<CSSProps />

### CSS 阴影部分

Range 包含 [CSS 阴影部分](#css-阴影部分)，允许完全自定义 Range 组件内的特定元素节点。CSS 阴影部分提供最大的自定义能力，是需要在 Range 组件中进行高级样式设置时的推荐方法。

import CSSParts from '@site/static/usage/v7/range/theming/css-shadow-parts/index.md';

<CSSParts />

## 从旧版范围语法迁移

Ionic 7.0 引入了更简单的范围语法。这种新语法减少了设置范围所需的样板代码，解决了无障碍访问问题，并改善了开发者体验。

开发者可以逐个迁移每个范围。虽然开发者可以继续使用旧版语法，但我们建议尽快迁移。

### 使用现代语法

使用现代语法需要移除 `ion-label` 并使用 `label` 属性将标签传递给 `ion-range`。标签的位置可以使用 `labelPlacement` 属性进行配置。

如果需要为标签使用自定义 HTML，可以通过 `label` 插槽直接传递到 `ion-range` 内部。

import Migration from '@site/static/usage/v7/range/migration/index.md';

<Migration />

:::note
在之前的 Ionic 版本中，`ion-item` 是 `ion-range` 正常运行所必需的。从 Ionic 7.0 开始，仅当项目放置在 `ion-list` 中时，才应在 `ion-item` 中使用 `ion-range`。此外，`ion-range` 的正常运行不再需要 `ion-item`。
:::

### 使用旧版语法

Ionic 使用启发式方法检测应用是否在使用现代范围语法。在某些情况下，继续使用旧版语法可能更可取。开发者可以将 `ion-range` 上的 `legacy` 属性设置为 `true`，以强制该范围实例使用旧版语法。

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
type RangeValue = number | { lower: number; upper: number };
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
