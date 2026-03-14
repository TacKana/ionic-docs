---
title: 'ion-select'
---

import Props from '@ionic-internal/component-api/v6/select/props.md';
import Events from '@ionic-internal/component-api/v6/select/events.md';
import Methods from '@ionic-internal/component-api/v6/select/methods.md';
import Parts from '@ionic-internal/component-api/v6/select/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/select/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/select/slots.md';

<head>
  <title>ion-select：单选或多选值框与占位符</title>
  <meta
    name="description"
    content="ion-select通过选定值（或多个值）或占位符及下拉图标来呈现。点击选择时，会出现一个对话框，显示易于选择的列表。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

选择器（Selects）是一种表单控件，用于从一组选项中选取一个或多个选项，类似于原生 `<select>` 元素。当用户点击选择器时，会弹出一个对话框，以大型且易于选择的列表形式展示所有选项。

选择器应与子元素 `<ion-select-option>` 配合使用。如果子选项未设置 `value` 属性，则其文本将用作值。

如果在 `<ion-select>` 上设置了 `value`，将根据该值选择对应的选项。

## 单选

默认情况下，选择器允许用户仅选择一个选项。警告（alert）界面会向用户展示一个单选按钮样式的选项列表。选择器组件的值将接收所选选项的 `value`。

import SingleSelectionExample from '@site/static/usage/v6/select/basic/single-selection/index.md';

<SingleSelectionExample />

## 界面类型

默认情况下，选择器使用 [ion-alert](alert.md) 在警告框中打开选项覆盖层。通过将 `action-sheet` 或 `popover` 传递给 `interface` 属性，可以将界面分别更改为使用 [ion-action-sheet](action-sheet.md) 或 [ion-popover](popover.md)。请参阅其他章节了解不同界面的限制。

### 操作表

import ActionSheetExample from '@site/static/usage/v6/select/interfaces/action-sheet/index.md';

<ActionSheetExample />

### 弹出框

import PopoverExample from '@site/static/usage/v6/select/interfaces/popover/index.md';

<PopoverExample />

## 多选

通过向选择器添加 `multiple` 属性，用户可以选择多个选项。当可以选择多个选项时，警告覆盖层会向用户展示一个复选框样式的选项列表。选择器组件的值将接收所有选中选项值的数组。

注意：`action-sheet` 和 `popover` 界面不支持多选。

import MultipleSelectionExample from '@site/static/usage/v6/select/basic/multiple-selection/index.md';

<MultipleSelectionExample />

## 响应交互

处理用户与选择器交互的主要方式是 `ionChange`、`ionDismiss` 和 `ionCancel` 事件。有关这些事件以及选择器触发的其他事件的更多详细信息，请参阅[事件](#events)部分。

import RespondingToInteractionExample from '@site/static/usage/v6/select/basic/responding-to-interaction/index.md';

<RespondingToInteractionExample />

## 对象值引用

当使用对象作为选择器的值时，如果这些对象来自服务器或数据库，其标识可能会发生变化，而选中值的标识保持不变。例如，当将包含所需对象值的现有记录加载到选择器中时，但新检索到的选择选项现在具有不同的标识，就会发生这种情况。这将导致选择器看起来没有任何值，即使原始选择仍然存在。

默认情况下，选择器使用对象相等性（`===`）来确定是否选择了某个选项。可以通过向 `compareWith` 属性提供属性名称或函数来覆盖此行为。

### 使用 compareWith

import UsingCompareWithExample from '@site/static/usage/v6/select/objects-as-values/using-comparewith/index.md';

<UsingCompareWithExample />

### 对象值与多选

import ObjectValuesAndMultipleSelectionExample from '@site/static/usage/v6/select/objects-as-values/multiple-selection/index.md';

<ObjectValuesAndMultipleSelectionExample />

## 选择器按钮

警告框支持两个按钮：`Cancel`（取消）和 `OK`（确定）。每个按钮的文本可以使用 `cancelText` 和 `okText` 属性进行自定义。

`action-sheet` 和 `popover` 界面没有 `OK` 按钮，点击任何选项都会自动关闭覆盖层并选择该值。`popover` 界面没有 `Cancel` 按钮，点击背景会关闭覆盖层。

import ButtonTextExample from '@site/static/usage/v6/select/customization/button-text/index.md';

<ButtonTextExample />

## 界面选项

由于选择器使用警告框、操作表和弹出框界面，因此可以通过 `interfaceOptions` 属性向这些组件传递选项。这可用于传递自定义标题、副标题、CSS 类等。

有关每个界面接受的属性，请参阅 [ion-alert 文档](alert.md)、[ion-action-sheet 文档](action-sheet.md)和 [ion-popover 文档](popover.md)。

注意：`interfaceOptions` 不会覆盖 `alert` 界面的 `inputs` 或 `buttons`。

import InterfaceOptionsExample from '@site/static/usage/v6/select/customization/interface-options/index.md';

<InterfaceOptionsExample />

## 自定义样式

选择器组件由两个单元组成，每个单元都需要单独设置样式。`ion-select` 元素在视图中由选定值（或多个值）（如果没有值则为占位符）和下拉图标表示。界面（在上面的[界面类型](#interfaces)部分中定义）是点击 `ion-select` 时打开的对话框。界面包含所有通过添加 `ion-select-option` 元素定义的选项。以下章节将介绍设置这些样式时的差异。

### 设置选择器元素样式

如前所述，`ion-select` 元素仅包含视图中显示的值（或多个值）、占位符和图标。要自定义此部分，请结合使用 CSS 和任何 [CSS 自定义属性](#css-custom-properties) 进行样式设置。

或者，根据所需的[浏览器支持](https://caniuse.com/#feat=mdn-css_selectors_part)情况，可以使用 CSS Shadow Parts 来设置选择器的样式。请注意，通过使用 `::part`，可以定位元素上的任何 CSS 属性。

import StylingSelectExample from '@site/static/usage/v6/select/customization/styling-select/index.md';

<StylingSelectExample />

### 设置选择器界面样式

自定义界面对话框应遵循该界面文档中的自定义部分：

- [警告框自定义](alert.md#customization)
- [操作表自定义](action-sheet.md#customization)
- [弹出框自定义](popover.md#customization)

但是，选择器选项确实设置了一个类以便于样式设置，并允许将类传递给覆盖层选项，有关自定义选项的使用示例，请参阅[选择器选项文档](select-option.md)。

## 类型提前（Typeahead）组件

可以使用现有的 Ionic 组件构建类型提前或自动完成功能。我们建议使用 `ion-modal` 来充分利用可用的屏幕空间。

import TypeaheadExample from '@site/static/usage/v6/select/typeahead/index.md';

<TypeaheadExample />

## 接口

### SelectChangeEventDetail

```typescript
interface SelectChangeEventDetail<T = any> {
  value: T;
}
```

### SelectCustomEvent

虽然不是必需的，但此接口可用于替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更严格的类型检查。

```typescript
interface SelectCustomEvent<T = any> extends CustomEvent {
  detail: SelectChangeEventDetail<T>;
  target: HTMLIonSelectElement;
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