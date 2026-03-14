---
title: 选择器组件（已弃用）
---
import Props from '@ionic-internal/component-api/v8/picker-legacy/props.md';
import Events from '@ionic-internal/component-api/v8/picker-legacy/events.md';
import Methods from '@ionic-internal/component-api/v8/picker-legacy/methods.md';
import Parts from '@ionic-internal/component-api/v8/picker-legacy/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/picker-legacy/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/picker-legacy/slots.md';

<head>
  <title>ion-picker-legacy：显示按钮和列的选择器对话框</title>
  <meta name="description" content="选择器是一种对话框，显示一行按钮和下方的多列选项。ion-picker-legacy 会出现在应用内容的上方，并位于视口的底部。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

:::warning 弃用提示

`ion-picker-legacy` 已弃用，并将在下一个主要版本中移除。请尽快迁移至 [`ion-picker`](./picker.md)。

:::

选择器（Picker）是一种对话框，它显示一行按钮以及下方的多列选项。该组件会悬浮在应用内容之上，并位于视口的底部。

## 内联选择器（推荐）

通过在模板中直接编写组件，即可使用 `ion-picker-legacy`。这种方式可以减少呈现选择器时需要连接的处理程序数量。

import Trigger from '@site/static/usage/v8/picker-legacy/inline/trigger/index.md';

<Trigger />

### 使用 `isOpen` 属性

`ion-picker-legacy` 上的 `isOpen` 属性允许开发者通过应用状态来控制选择器的呈现状态。这意味着当 `isOpen` 设置为 `true` 时，选择器将被呈现；当 `isOpen` 设置为 `false` 时，选择器将被关闭。

`isOpen` 采用单向数据绑定方式，这意味着选择器关闭时，该值不会自动设置为 `false`。开发者应监听 `ionPickerDidDismiss` 或 `didDismiss` 事件，并将 `isOpen` 设置为 `false`。这样做是为了避免 `ion-picker` 的内部逻辑与应用状态紧密耦合。通过单向数据绑定，选择器只需关注响应式变量提供的布尔值。而如果采用双向数据绑定，选择器不仅需要关注布尔值，还需要考虑响应式变量本身的存在性，这可能导致不确定的行为，并使应用更难调试。

import IsOpen from '@site/static/usage/v8/picker-legacy/inline/isOpen/index.md';

<IsOpen />

## 控制器选择器

当需要对选择器的呈现和关闭时机进行更精细的控制时，可以使用 `pickerController`。

import Controller from '@site/static/usage/v8/picker-legacy/controller/index.md';

<Controller />

## 多列选择器

通过 `columns` 属性，可以显示包含多列不同选项的选择器。

import MultipleColumn from '@site/static/usage/v8/picker-legacy/multiple-column/index.md';

<MultipleColumn />

## 接口

### PickerButton

```typescript
interface PickerButton {
  text?: string;
  role?: string;
  cssClass?: string | string[];
  handler?: (value: any) => boolean | void;
}
```

### PickerColumn

```typescript
interface PickerColumn {
  name: string;
  align?: string;
  /**
   * 修改此值可设置选择器列的初始值。
   */
  selectedIndex?: number;
  prevSelected?: number;
  prefix?: string;
  suffix?: string;
  options: PickerColumnOption[];
  cssClass?: string | string[];
  columnWidth?: string;
  prefixWidth?: string;
  suffixWidth?: string;
  optionsWidth?: string;
}
```

### PickerColumnOption

```typescript
interface PickerColumnOption {
  text?: string;
  value?: any;
  disabled?: boolean;
  duration?: number;
  transform?: string;
  selected?: boolean;
  /**
   * 可选的文本，将作为 aria-label 分配给选择器列选项。
   */
  ariaLabel?: string;
}
```

### PickerOptions

```typescript
interface PickerOptions {
  columns: PickerColumn[];
  buttons?: PickerButton[];
  cssClass?: string | string[];
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  animated?: boolean;

  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
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