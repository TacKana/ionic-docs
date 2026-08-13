---
title: "ion-picker-legacy"
---
import Props from '@ionic-internal/component-api/v8/picker-legacy/props.md';
import Events from '@ionic-internal/component-api/v8/picker-legacy/events.md';
import Methods from '@ionic-internal/component-api/v8/picker-legacy/methods.md';
import Parts from '@ionic-internal/component-api/v8/picker-legacy/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/picker-legacy/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/picker-legacy/slots.md';

<head>
  <title>ion-picker-legacy：显示按钮和列的对话框</title>
  <meta name="description" content="Picker 是一个对话框，显示一行按钮及其下方的列。Ion-picker-legacy 显示在应用内容上方、视口底部。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

:::warning[弃用说明]

`ion-picker-legacy` 已弃用，将在下一个主要版本中移除。请尽快迁移到 [`ion-picker`](./picker.md)。

:::

Picker 是一个对话框，显示一行按钮及其下方的列。它显示在应用内容上方、视口底部。

## 内联 Picker（推荐）

`ion-picker-legacy` 可以通过直接在模板中编写组件来使用。这减少了呈现 Picker 时需要连接的处理程序数量。

import Trigger from '@site/static/usage/v8/picker-legacy/inline/trigger/index.md';

<Trigger />

### 使用 `isOpen`

`ion-picker-legacy` 上的 `isOpen` 属性允许开发者从应用状态控制 Picker 的呈现状态。这意味着当 `isOpen` 设置为 `true` 时，Picker 将呈现；当 `isOpen` 设置为 `false` 时，Picker 将关闭。

`isOpen` 使用单向数据绑定，这意味着 Picker 关闭时它不会自动设置为 `false`。开发者应监听 `ionPickerDidDismiss` 或 `didDismiss` 事件并将 `isOpen` 设置为 `false`。这样做的原因是防止 `ion-picker` 的内部逻辑与应用状态紧密耦合。使用单向数据绑定时，Picker 只需关注响应式变量提供的布尔值。而使用双向数据绑定时，Picker 需要同时关注布尔值和响应式变量本身的存在性。这可能导致不确定的行为，并使应用更难调试。

import IsOpen from '@site/static/usage/v8/picker-legacy/inline/isOpen/index.md';

<IsOpen />

## 控制器 Picker

在需要对 Picker 的呈现和关闭进行更多控制的情况下，可以使用 `pickerController`。

import Controller from '@site/static/usage/v8/picker-legacy/controller/index.md';

<Controller />

## 多列

`columns` 属性可用于显示具有多个不同选项列的 Picker。

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
   * 更改此值可以设置选择器列的初始值。
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
   * 要分配给选择器列选项的 aria-label 的可选文本。
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
