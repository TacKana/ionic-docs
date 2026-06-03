---
title: "ion-select"
---
import Props from '@ionic-internal/component-api/v8/select/props.md';
import Events from '@ionic-internal/component-api/v8/select/events.md';
import Methods from '@ionic-internal/component-api/v8/select/methods.md';
import Parts from '@ionic-internal/component-api/v8/select/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/select/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/select/slots.md';

<head>
  <title>ion-select：选择一个或多个值框或占位符</title>
  <meta name="description" content="ion-select 以选中的值或占位符以及下拉图标表示。当您点击选择时，会弹出一个对话框，其中包含易于选择的列表。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


选择器是用于从一组选项中选择一个或多个选项的表单控件。当用户点击选择器时，会弹出一个对话框，其中所有选项都显示在一个大而易于选择的列表中。

选择器应与子元素 `<ion-select-option>` 一起使用。如果子选项没有提供 `value` 属性，则其文本将用作值。

如果在 `<ion-select>` 上设置了 `value`，则将根据该值选择相应的选项。

## 标签

应使用标签来描述选择器。它们可以在视觉上使用，并且当用户聚焦在选择器上时，屏幕阅读器也会读出它们。这使得用户更容易理解选择器的用途。选择器有几种分配标签的方式：

选择器有几种为组件提供标签的选项：

- `label` 属性：用于纯文本标签
- `label` 插槽：用于自定义 HTML 标签
- `aria-label`：用于为屏幕阅读器提供标签，但不添加可见标签

### 标签位置

默认情况下，标签将占据其内容的宽度。开发者可以使用 `labelPlacement` 属性来控制标签相对于控件的位置。虽然这里使用了 `label` 属性，但 `labelPlacement` 也可以与 `label` 插槽一起使用。

import LabelPlacement from '@site/static/usage/v8/select/label-placement/index.md';

<LabelPlacement />

### 标签插槽

虽然纯文本标签应通过 `label` 属性传入，但如果需要自定义 HTML，则可以通过 `label` 插槽传入。

import LabelSlot from '@site/static/usage/v8/select/label-slot/index.md';

<LabelSlot />

### 无可见标签

如果不需要可见标签，开发者仍应提供 `aria-label`，以便屏幕阅读器可以访问该选择器。

import NoVisibleLabel from '@site/static/usage/v8/select/no-visible-label/index.md';

<NoVisibleLabel />

## 单选

默认情况下，选择器允许用户只选择一个选项。alert 界面为用户呈现一个单选按钮样式的选项列表。选择器组件的值会接收所选选项的值。

单选模式的键盘交互在下面的[键盘交互](#单选)部分中描述。

import SingleSelectionExample from '@site/static/usage/v8/select/basic/single-selection/index.md';

<SingleSelectionExample />

## 多选

通过向选择器添加 `multiple` 属性，用户可以选择多个选项。当可以选择多个选项时，alert、popover 或 modal 覆盖层会为用户呈现一个复选框样式的选项列表。选择器组件的值会接收所有选中选项值的数组。

:::note

`action-sheet` 接口不支持多选。

:::

多选模式的键盘交互在下面的[键盘交互](#多选)部分中描述。

import MultipleSelectionExample from '@site/static/usage/v8/select/basic/multiple-selection/index.md';

<MultipleSelectionExample />

## 接口

默认情况下，选择器使用 [ion-alert](alert.md) 在弹出框中打开选项列表。可以通过将 `action-sheet`、`popover` 或 `modal` 分别传递给 `interface` 属性，将接口更改为使用 [ion-action-sheet](action-sheet.md)、[ion-popover](popover.md) 或 [ion-modal](modal.md)。请阅读其他部分，了解不同接口的限制。

### Alert

import AlertExample from '@site/static/usage/v8/select/basic/single-selection/index.md';

<AlertExample />


### Action Sheet

import ActionSheetExample from '@site/static/usage/v8/select/interfaces/action-sheet/index.md';

<ActionSheetExample />

### Popover

import PopoverExample from '@site/static/usage/v8/select/interfaces/popover/index.md';

<PopoverExample />

### Modal

import ModalExample from '@site/static/usage/v8/select/interfaces/modal/index.md';

<ModalExample />

## 响应交互

处理用户与选择器交互的主要方式是使用 `ionChange`、`ionDismiss` 和 `ionCancel` 事件。有关这些及其他选择器触发的事件的更多详细信息，请参阅[事件](#事件)。

import RespondingToInteractionExample from '@site/static/usage/v8/select/basic/responding-to-interaction/index.md';

<RespondingToInteractionExample />

## 对象值引用

当使用对象作为选择器的值时，如果这些对象来自服务器或数据库，它们的身份可能会发生变化，而所选值的身份保持不变。例如，当具有所需对象值的现有记录加载到选择器中，但新检索的选择选项现在具有不同的身份时，可能会发生这种情况。这将导致选择器看起来没有任何值，即使原始选择仍然存在。

默认情况下，选择器使用严格相等（`===`）来确定某个选项是否被选中。可以通过为 `compareWith` 属性提供属性名称或函数来覆盖此行为。

### 使用 compareWith

import UsingCompareWithExample from '@site/static/usage/v8/select/objects-as-values/using-comparewith/index.md';

<UsingCompareWithExample />

### 对象值与多选

import ObjectValuesAndMultipleSelectionExample from '@site/static/usage/v8/select/objects-as-values/multiple-selection/index.md';

<ObjectValuesAndMultipleSelectionExample />

## 对齐方式

开发者可以使用 `justify` 属性来控制标签和控件在一行上的排列方式。

import JustifyExample from '@site/static/usage/v8/select/justify/index.md';

<JustifyExample />

## 填充样式选择器

Material Design 提供了选择器的填充样式。选择器上的 `fill` 属性可以设置为 `"solid"` 或 `"outline"`。

通过将选择器的 `mode` 设置为 `md`，可以在 iOS 上使用填充样式的选择器。

:::warning
使用 `fill` 的选择器不应在 `ion-item` 中使用，因为组件之间存在样式冲突。
:::

import FillExample from '@site/static/usage/v8/select/fill/index.md';

<FillExample />

## 选择按钮

alert 支持两个按钮：`Cancel` 和 `OK`。每个按钮的文本可以使用 `cancelText` 和 `okText` 属性进行自定义。

`action-sheet` 和 `popover` 接口没有 `OK` 按钮，点击任何选项将自动关闭覆盖层并选择该值。`popover` 接口没有 `Cancel` 按钮，点击背景将关闭覆盖层。

`modal` 接口在标题中有一个 `Close` 按钮。此按钮仅负责关闭模态框。任何所做的选择在点击此按钮后或通过其他方式关闭模态框后将保持不变。

import ButtonTextExample from '@site/static/usage/v8/select/customization/button-text/index.md';

<ButtonTextExample />

## 接口选项

由于选择器使用 alert、action sheet、popover 和 modal 接口，因此可以通过 `interfaceOptions` 属性向这些组件传递选项。这可用于传递自定义标题、副标题、CSS 类等。

有关每个接口接受的属性，请参阅 [ion-alert 文档](alert.md)、[ion-action-sheet 文档](action-sheet.md)、[ion-popover 文档](popover.md) 和 [ion-modal 文档](modal.md)。

注意：`interfaceOptions` 不会覆盖 `alert` 接口的 `inputs` 或 `buttons`。

import InterfaceOptionsExample from '@site/static/usage/v8/select/customization/interface-options/index.md';

<InterfaceOptionsExample />

## 开始和结束插槽

`start` 和 `end` 插槽可用于在选择器的两侧放置图标、按钮或前缀/后缀文本。如果点击插槽内容，选择器不会打开。

:::note
在大多数情况下，放置在这些插槽中的[图标](./icon.md)组件应设置 `aria-hidden="true"`。有关更多信息，请参阅[图标无障碍文档](https://ionicframework.com/docs/api/icon#accessibility)。

如果插槽内容需要交互，则应将其包装在可交互元素（如[按钮](./button.md)）中。这确保可以通过 Tab 键聚焦到该内容。
:::

import StartEndSlots from '@site/static/usage/v8/select/start-end-slots/index.md';

<StartEndSlots />

## 自定义

选择器组件由两个单元组成，每个单元需要单独设置样式。`ion-select` 元素在视图上由选中的值（如果没有则为占位符）和下拉图标表示。接口（在上面[接口](#接口)部分中定义）是在点击 `ion-select` 时打开的对话框。该接口包含通过添加 `ion-select-option` 元素定义的所有选项。以下部分将介绍设置这些样式之间的区别。

### 设置选择器元素样式

如上所述，`ion-select` 元素仅包含值（或占位符）以及显示在视图上的图标。要自定义此样式，请使用 CSS 和任何 [CSS 自定义属性](#css-自定义属性)的组合进行样式设置。

或者，根据所需的[浏览器支持](https://caniuse.com/#feat=mdn-css_selectors_part)，可以使用 CSS 阴影部分来设置选择器的样式。请注意，通过使用 `::part`，可以定位元素上的任何 CSS 属性。

import StylingSelectExample from '@site/static/usage/v8/select/customization/styling-select/index.md';

<StylingSelectExample />

### 设置选择器接口样式

自定义接口对话框应遵循该接口文档中的样式部分（CSS 阴影部分、CSS 自定义属性和插槽）：

- [Alert](alert.md#css-shadow-parts)
- [Action Sheet](action-sheet.md#css-shadow-parts)
- [Popover](popover.md#css-shadow-parts)
- [Modal](modal.md#css-shadow-parts)

然而，Select Option 确实设置了一个类以便于样式化，并允许向覆盖层选项传递一个类，请参阅 [Select Options 文档](select-option.md)了解自定义选项的用法示例。

### 自定义切换图标

显示在选择文本旁边的图标可以设置为任何 [Ionicon](https://ionic.io/ionicons/)，方法是使用 `toggleIcon` 和/或 `expandedIcon` 属性。

import CustomToggleIconsExample from '@site/static/usage/v8/select/customization/custom-toggle-icons/index.md';

<CustomToggleIconsExample />

### 图标翻转行为

默认情况下，当选择器打开时，切换图标会在 `md` 模式下自动旋转，而在 `ios` 模式下保持静止。此行为可以使用 CSS 进行自定义。

下面的示例还使用了[自定义 `toggleIcon`](#自定义切换图标)，以更好地演示 `ios` 上的翻转行为，因为默认图标是垂直对称的。

import IconFlipBehaviorExample from '@site/static/usage/v8/select/customization/icon-flip-behavior/index.md';

<IconFlipBehaviorExample />

## 输入预测组件

可以使用现有的 Ionic 组件构建输入预测或自动完成功能。我们建议使用 `ion-modal` 来充分利用可用的屏幕空间。

import TypeaheadExample from '@site/static/usage/v8/select/typeahead/index.md';

<TypeaheadExample />

## 帮助文本和错误文本

可以使用 `helperText` 和 `errorText` 属性在选择器内部使用帮助文本和错误文本。除非向 `ion-select` 添加了 `ion-invalid` 和 `ion-touched` 类，否则错误文本不会显示。这确保在用户有机会输入数据之前不会显示错误。

在 Angular 中，这是通过表单验证自动完成的。在 JavaScript、React 和 Vue 中，需要根据你自己的验证逻辑手动添加该类。

import HelperError from '@site/static/usage/v8/select/helper-error/index.md';

<HelperError />

## 接口

### SelectChangeEventDetail

```typescript
interface SelectChangeEventDetail<T = any> {
  value: T;
}
```

### SelectCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，用于与此组件发出的 Ionic 事件提供更强的类型支持。

```typescript
interface SelectCustomEvent<T = any> extends CustomEvent {
  detail: SelectChangeEventDetail<T>;
  target: HTMLIonSelectElement;
}
```

## 无障碍

### 键盘交互

Ionic 的键盘交互遵循 web 的实现模式，而不是原生 iOS 选择器，以在所有平台上提供一致的体验。

以下键盘交互适用于所有 `ion-select` 元素，当满足以下条件时：
- 选择器处于关闭状态。
- 选择器处于聚焦状态。
- 选择器未被禁用。

| 键                 | 描述                                                          |
| ------------------ | ------------------------------------------------------------- |
| <kbd>Enter</kbd>   | 打开覆盖层并聚焦到第一个选中的选项。如果没有选中的选项，则聚焦到第一个选项。 |
| <kbd>Space</kbd>   | 打开覆盖层并聚焦到第一个选中的选项。如果没有选中的选项，则聚焦到第一个选项。 |

#### 单选

单选键盘交互遵循[单选框的 ARIA 实现模式](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)。

以下键盘交互适用于 `ion-action-sheet`、`ion-alert`、`ion-popover` 和 `ion-modal` 元素，当覆盖层已呈现并聚焦时。

| 键                    | 描述                                                          |
| --------------------- | ------------------------------------------------------------- |
| <kbd>ArrowDown</kbd>  | 聚焦并选择列表中的下一个选项。如果没有下一个选项，选择将循环到第一个选项。 |
| <kbd>ArrowLeft</kbd>  | 聚焦并选择列表中的上一个选项。如果没有上一个选项，选择将循环到最后一个选项。 |
| <kbd>ArrowRight</kbd> | 聚焦并选择列表中的下一个选项。如果没有下一个选项，选择将循环到第一个选项。 |
| <kbd>ArrowUp</kbd>    | 聚焦并选择列表中的上一个选项。如果没有上一个选项，选择将循环到最后一个选项。 |
| <kbd>Enter</kbd>      | 如果某个选项被聚焦，将选择该选项。**没有** 'OK' 按钮的覆盖层将立即提交值，关闭覆盖层并将焦点返回到 `ion-select` 元素。<br /><br/>如果 'OK' 按钮被聚焦，将保存用户的选择，关闭覆盖层并将焦点返回到 `ion-select` 元素。 |
| <kbd>Escape</kbd>     | 关闭覆盖层而不更改已提交的选项。将焦点返回到 `ion-select` 元素。 |
| <kbd>Space</kbd>      | 如果聚焦的单选框未选中，取消选中当前选中的单选框并选中聚焦的单选框。否则，不执行任何操作。如果覆盖层没有 'OK' 按钮，将立即提交值并关闭覆盖层。 |
| <kbd>Tab</kbd>        | 将焦点移动到覆盖层上的下一个可聚焦元素（取消按钮、'OK' 按钮，或选择项或第一个选项）。如果下一个可聚焦元素是选项，则将聚焦到选中的选项，否则聚焦到第一个选项。 |

#### 多选

多选键盘交互遵循[复选框的 ARIA 实现模式](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)。

以下键盘交互适用于 `ion-alert`、`ion-popover` 和 `ion-modal` 元素，当覆盖层已呈现且启用了多选时。

| 键                 | 描述                                                          |
| ------------------ | ------------------------------------------------------------- |
| <kbd>Enter</kbd>   | 当 'OK' 按钮被聚焦时，将保存用户的选择，关闭覆盖层，并将焦点返回到 `ion-select` 元素。 |
| <kbd>Escape</kbd>  | 关闭覆盖层而不更改已提交的选项。将焦点返回到 `ion-select` 元素。 |
| <kbd>Space</kbd>   | 选中或取消选中当前聚焦的选项。这不会取消选中其他选中的选项。如果覆盖层没有 'OK' 按钮，将立即提交值。 |
| <kbd>Tab</kbd>     | 将焦点移动到覆盖层上的下一个可聚焦元素（取消按钮、'OK' 按钮或任何选项）。如果下一个可聚焦元素是选项列表，则应在每个选项之间迭代。 |

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
