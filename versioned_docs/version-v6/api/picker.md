---
title: 'ion-picker'
---

import Props from '@ionic-internal/component-api/v6/picker/props.md';
import Events from '@ionic-internal/component-api/v6/picker/events.md';
import Methods from '@ionic-internal/component-api/v6/picker/methods.md';
import Parts from '@ionic-internal/component-api/v6/picker/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/picker/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/picker/slots.md';

<head>
  <title>选择器 | 在 Ionic 应用中使用 ion-picker 显示按钮和列</title>
  <meta
    name="description"
    content="选择器是一种对话框，显示一行按钮和其下方的多列选项。Ion-picker 出现在应用内容的上方，以及视口的底部。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

选择器是一种对话框，显示一行按钮和其下方的多列选项。它会出现在应用内容的上方，以及视口的底部。

## 单列

在单个可滚动的列中显示选项列表。

import SingleColumn from '@site/static/usage/v6/picker/single-column/index.md';

<SingleColumn />

## 多列

显示多个不同选项的列。

import MultipleColumn from '@site/static/usage/v6/picker/multiple-column/index.md';

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

## CSS Shadow 部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />