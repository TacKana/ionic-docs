---
title: 'ion-picker'
---

import Props from '@ionic-internal/component-api/v7/picker/props.md';
import Events from '@ionic-internal/component-api/v7/picker/events.md';
import Methods from '@ionic-internal/component-api/v7/picker/methods.md';
import Parts from '@ionic-internal/component-api/v7/picker/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/picker/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/picker/slots.md';

<head>
  <title>ion-picker：显示按钮和列的对话框组件</title>
  <meta
    name="description"
    content="选择器（Picker）是一种对话框，显示一行按钮和下方的列。ion-picker 会出现在应用内容的上方和视口的底部。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

选择器（Picker）是一种对话框，显示一行按钮和下方的列。它会出现在应用内容的上方和视口的底部。

## 内联选择器（推荐）

通过直接在模板中编写组件，可以使用 `ion-picker`。这减少了展示选择器时需要连接的处理程序数量。

import Trigger from '@site/static/usage/v7/picker/inline/trigger/index.md';

<Trigger />

### 使用 `isOpen` 属性

`ion-picker` 上的 `isOpen` 属性允许开发者通过应用状态来控制选择器的呈现状态。这意味着当 `isOpen` 设为 `true` 时，选择器将显示；当 `isOpen` 设为 `false` 时，选择器将关闭。

`isOpen` 使用单向数据绑定，这意味着当选择器关闭时，它不会自动设置为 `false`。开发者应该监听 `ionPickerDidDismiss` 或 `didDismiss` 事件，并将 `isOpen` 设置为 `false`。这样做的原因是防止 `ion-picker` 的内部逻辑与应用程序状态紧密耦合。使用单向数据绑定，选择器只需关注响应式变量提供的布尔值。而使用双向数据绑定，选择器需要同时关注布尔值以及响应式变量本身的存在。这可能导致不确定的行为，并使应用程序更难调试。

import IsOpen from '@site/static/usage/v7/picker/inline/isOpen/index.md';

<IsOpen />

## 控制器选择器

在需要更多控制选择器显示和关闭时机的情况下，可以使用 `pickerController`。

import Controller from '@site/static/usage/v7/picker/controller/index.md';

<Controller />

## 多列选择

`columns` 属性可用于显示包含多列不同选项的选择器。

import MultipleColumn from '@site/static/usage/v7/picker/multiple-column/index.md';

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
   * 可选的文本，用作选择器列选项的 aria-label。
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