---
title: 选择对话框的单选或多选值框与占位符组件
---
import Props from '@ionic-internal/component-api/v8/select/props.md';
import Events from '@ionic-internal/component-api/v8/select/events.md';
import Methods from '@ionic-internal/component-api/v8/select/methods.md';
import Parts from '@ionic-internal/component-api/v8/select/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/select/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/select/slots.md';

<head>
  <title>ion-select：单选或多选值框与占位符</title>
  <meta name="description" content="ion-select 以选中值（或占位符）和下拉图标的形式呈现。点击选择框时，会弹出一个易于操作的列表对话框。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


选择框（Select）是从一组选项中选择一个或多个选项的表单控件。当用户点击选择框时，会弹出一个包含所有选项的对话框，列表清晰易选。

选择框应搭配子元素 `<ion-select-option>` 使用。如果子选项未设置 `value` 属性，则其文本内容将作为值使用。

如果在 `<ion-select>` 上设置了 `value` 属性，将根据该值自动选中对应的选项。

## 标签

标签用于描述选择框。它们不仅用于视觉展示，还会在用户聚焦于选择框时被屏幕阅读器朗读，帮助用户理解选择框的用途。选择框提供多种方式来分配标签：

选择框提供多种方式来为组件提供标签：

- `label` 属性：用于纯文本标签
- `label` 插槽：用于自定义 HTML 标签
- `aria-label`：为屏幕阅读器提供标签，但不会显示可见标签

### 标签位置

默认情况下，标签宽度会根据其内容自适应。开发者可以使用 `labelPlacement` 属性来控制标签相对于控件的位置。虽然此处示例使用了 `label` 属性，但 `labelPlacement` 同样适用于 `label` 插槽。

import LabelPlacement from '@site/static/usage/v8/select/label-placement/index.md';

<LabelPlacement />

### 标签插槽

纯文本标签应通过 `label` 属性传入，如果需要自定义 HTML 标签，则可以通过 `label` 插槽传入。

import LabelSlot from '@site/static/usage/v8/select/label-slot/index.md';

<LabelSlot />

### 无可见标签

如果不需要可见标签，开发者仍应提供 `aria-label`，以确保选择框对屏幕阅读器可访问。

import NoVisibleLabel from '@site/static/usage/v8/select/no-visible-label/index.md';

<NoVisibleLabel />

## 单选

默认情况下，选择框只允许用户选择一个选项。弹窗（alert）界面会向用户展示一个单选按钮样式的选项列表。选择框组件的值会接收所选选项的值。

单选的键盘交互详见下方的 [键盘交互](#single-selection-1) 部分。

import SingleSelectionExample from '@site/static/usage/v8/select/basic/single-selection/index.md';

<SingleSelectionExample />

## 多选

通过为选择框添加 `multiple` 属性，用户可以同时选择多个选项。当允许多选时，弹窗（alert）、弹出框（popover）或模态框（modal）会向用户展示复选框样式的选项列表。选择框组件的值会接收所有选中选项值的数组。

:::note

`action-sheet` 界面不支持多选。

:::

多选的键盘交互详见下方的 [键盘交互](#multiple-selection-1) 部分。

import MultipleSelectionExample from '@site/static/usage/v8/select/basic/multiple-selection/index.md';

<MultipleSelectionExample />

## 界面类型

默认情况下，选择框使用 [ion-alert](alert.md) 在弹窗中打开选项叠加层。可以通过将 `interface` 属性分别设置为 `action-sheet`、`popover` 或 `modal` 来将界面更改为使用 [ion-action-sheet](action-sheet.md)、[ion-popover](popover.md) 或 [ion-modal](modal.md)。请继续阅读其他部分以了解不同界面的限制。

### 弹窗（Alert）

import AlertExample from '@site/static/usage/v8/select/basic/single-selection/index.md';

<AlertExample />


### 操作表（Action Sheet）

import ActionSheetExample from '@site/static/usage/v8/select/interfaces/action-sheet/index.md';

<ActionSheetExample />

### 弹出框（Popover）

import PopoverExample from '@site/static/usage/v8/select/interfaces/popover/index.md';

<PopoverExample />

### 模态框（Modal）

import ModalExample from '@site/static/usage/v8/select/interfaces/modal/index.md';

<ModalExample />

## 响应用户交互

处理用户与选择框交互的主要方式是通过 `ionChange`、`ionDismiss` 和 `ionCancel` 事件。有关这些事件以及选择框触发的其他事件的更多详细信息，请参阅 [事件](#events)。

import RespondingToInteractionExample from '@site/static/usage/v8/select/basic/responding-to-interaction/index.md';

<RespondingToInteractionExample />

## 对象值引用

当使用对象作为选择框的值时，如果这些对象来自服务器或数据库，它们的标识可能会发生变化，而选中值的标识保持不变。例如，当将包含所需对象值的现有记录加载到选择框时，新检索到的选择选项可能具有不同的标识。这将导致选择框看起来没有任何值，即使原始选择仍然有效。

默认情况下，选择框使用严格相等（`===`）来确定是否选中了某个选项。可以通过为 `compareWith` 属性提供属性名或函数来覆盖此行为。

### 使用 compareWith

import UsingCompareWithExample from '@site/static/usage/v8/select/objects-as-values/using-comparewith/index.md';

<UsingCompareWithExample />

### 对象值与多选

import ObjectValuesAndMultipleSelectionExample from '@site/static/usage/v8/select/objects-as-values/multiple-selection/index.md';

<ObjectValuesAndMultipleSelectionExample />

## 对齐方式

开发者可以使用 `justify` 属性来控制标签和控件在行上的排列方式。

import JustifyExample from '@site/static/usage/v8/select/justify/index.md';

<JustifyExample />

## 填充式选择框

Material Design 为选择框提供了填充样式。选择框的 `fill` 属性可以设置为 `"solid"` 或 `"outline"`。

在 iOS 上使用填充式选择框时，可以将选择框的 `mode` 设置为 `md`。

:::warning
由于组件之间的样式冲突，使用 `fill` 的选择框不应在 `ion-item` 中使用。
:::

import FillExample from '@site/static/usage/v8/select/fill/index.md';

<FillExample />

## 选择框按钮

弹窗（alert）支持两个按钮：`Cancel` 和 `OK`。每个按钮的文本可以通过 `cancelText` 和 `okText` 属性进行自定义。

`action-sheet` 和 `popover` 界面没有 `OK` 按钮，点击任何选项都会自动关闭叠加层并选中该值。`popover` 界面没有 `Cancel` 按钮，点击背景会关闭叠加层。

`modal` 界面在标题栏中有一个 `Close` 按钮。此按钮仅负责关闭模态框。点击此按钮或使用其他方法关闭模态框后，已做出的任何选择都将保留。

import ButtonTextExample from '@site/static/usage/v8/select/customization/button-text/index.md';

<ButtonTextExample />

## 界面选项

由于选择框使用弹窗（alert）、操作表（action sheet）、弹出框（popover）和模态框（modal）界面，因此可以通过 `interfaceOptions` 属性向这些组件传递选项。这可用于传递自定义标题、副标题、CSS 类等。

有关每个界面接受的属性，请参阅 [ion-alert 文档](alert.md)、[ion-action-sheet 文档](action-sheet.md)、[ion-popover 文档](popover.md) 和 [ion-modal 文档](modal.md)。

注意：对于 `alert` 界面，`interfaceOptions` 不会覆盖 `inputs` 或 `buttons`。

import InterfaceOptionsExample from '@site/static/usage/v8/select/customization/interface-options/index.md';

<InterfaceOptionsExample />

## 起始与结束插槽

`start` 和 `end` 插槽可用于在选择框的任一侧放置图标、按钮或前缀/后缀文本。如果点击插槽内容，选择框不会打开。

:::note
在大多数情况下，放置在这些插槽中的 [Icon](./icon.md) 组件应设置 `aria-hidden="true"`。有关更多信息，请参阅 [Icon 可访问性文档](https://ionicframework.com/docs/api/icon#accessibility)。

如果插槽内容需要交互，应将其包装在交互式元素中，例如 [Button](./button.md)。这确保了内容可以通过 Tab 键访问。
:::

import StartEndSlots from '@site/static/usage/v8/select/start-end-slots/index.md';

<StartEndSlots />

## 自定义样式

选择框组件由两个单元组成，每个单元都需要单独设置样式。`ion-select` 元素在视图中由选中值（或无选中值时的占位符）和下拉图标表示。界面（在上述 [界面类型](#interfaces) 部分定义）是点击 `ion-select` 时打开的对话框。界面包含所有通过添加 `ion-select-option` 元素定义的选项。以下部分将介绍样式设置上的差异。

### 设置选择框元素样式

如前所述，`ion-select` 元素仅包含视图中显示的值（或占位符）和图标。要自定义此部分，可以使用 CSS 和任何 [CSS 自定义属性](#css-custom-properties) 的组合进行样式设置。

或者，根据所需的 [浏览器支持](https://caniuse.com/#feat=mdn-css_selectors_part)，可以使用 CSS 影子部分（shadow parts）来设置选择框样式。请注意，使用 `::part` 可以定位元素上的任何 CSS 属性。

import StylingSelectExample from '@site/static/usage/v8/select/customization/styling-select/index.md';

<StylingSelectExample />

### 设置选择框界面样式

自定义界面对话框的样式应遵循该界面文档中的样式设置部分（CSS 影子部分、CSS 自定义属性和插槽）：

- [Alert](alert.md#css-shadow-parts)
- [Action Sheet](action-sheet.md#css-shadow-parts)
- [Popover](popover.md#css-shadow-parts)
- [Modal](modal.md#css-shadow-parts)

但是，Select Option 确实设置了一个类以方便样式设置，并允许将类传递给叠加层选项，有关自定义选项的用法示例，请参阅 [Select Options 文档](select-option.md)。

### 自定义切换图标

选择框文本旁边显示的图标可以使用 `toggleIcon` 和/或 `expandedIcon` 属性设置为任何 [Ionicon](https://ionic.io/ionicons)。

import CustomToggleIconsExample from '@site/static/usage/v8/select/customization/custom-toggle-icons/index.md';

<CustomToggleIconsExample />

### 图标翻转行为

默认情况下，当选择框打开时，切换图标在 `md` 模式下会自动旋转，在 `ios` 模式下保持静态。可以使用 CSS 自定义此行为。

以下示例还使用了 [自定义 `toggleIcon`](#custom-toggle-icons) 以更好地展示 `ios` 上的翻转行为，因为默认图标是垂直对称的。

import IconFlipBehaviorExample from '@site/static/usage/v8/select/customization/icon-flip-behavior/index.md';

<IconFlipBehaviorExample />

## 类型提示组件

可以使用现有的 Ionic 组件构建类型提示（Typeahead）或自动完成（autocomplete）功能。我们建议使用 `ion-modal` 以充分利用可用屏幕空间。

import TypeaheadExample from '@site/static/usage/v8/select/typeahead/index.md';

<TypeaheadExample />

## 辅助与错误文本

辅助文本和错误文本可以通过 `helperText` 和 `errorText` 属性在选择框内部使用。除非将 `ion-invalid` 和 `ion-touched` 类添加到 `ion-select` 上，否则错误文本不会显示。这确保在用户有机会输入数据之前不会显示错误。

在 Angular 中，这会通过表单验证自动完成。在 JavaScript、React 和 Vue 中，需要根据你自己的验证手动添加类。

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

虽然不强制要求，但可以使用此接口替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更严格的类型检查。

```typescript
interface SelectCustomEvent<T = any> extends CustomEvent {
  detail: SelectChangeEventDetail<T>;
  target: HTMLIonSelectElement;
}
```

## 可访问性

### 键盘交互

Ionic 的键盘交互遵循 Web 的实现模式，而不是 iOS 原生选择框的实现，以在所有平台上提供一致的体验。

当满足以下条件时，这些键盘交互适用于所有 `ion-select` 元素：
- 选择框处于关闭状态。
- 选择框获得焦点。
- 选择框未禁用。

| 按键                | 说明                                                  |
| ------------------ | ------------------------------------------------------------ |
| <kbd>Enter</kbd>   | 打开叠加层并聚焦到第一个选中的选项。如果没有选中的选项，则聚焦到第一个选项。 |
| <kbd>Space</kbd>   | 打开叠加层并聚焦到第一个选中的选项。如果没有选中的选项，则聚焦到第一个选项。 |

#### 单选

单选键盘交互遵循 [ARIA 单选按钮的实现模式](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)。

当叠加层已呈现并获得焦点时，这些键盘交互适用于 `ion-action-sheet`、`ion-alert`、`ion-popover` 和 `ion-modal` 元素。

| 按键                   | 说明                                                  |
| --------------------- | ------------------------------------------------------------ |
| <kbd>ArrowDown</kbd>  | 聚焦并选中列表中的下一个选项。如果没有下一个选项，选择将循环到第一个选项。 |
| <kbd>ArrowLeft</kbd>  | 聚焦并选中列表中的上一个选项。如果没有上一个选项，选择将循环到最后一个选项。 |
| <kbd>ArrowRight</kbd> | 聚焦并选中列表中的下一个选项。如果没有下一个选项，选择将循环到第一个选项。 |
| <kbd>ArrowUp</kbd>    | 聚焦并选中列表中的上一个选项。如果没有上一个选项，选择将循环到最后一个选项。 |
| <kbd>Enter</kbd>      | 如果某个选项获得焦点，它将选中该选项。**没有** 'OK' 按钮的叠加层将立即提交值，关闭叠加层并将焦点返回到 `ion-select` 元素。<br /><br/>如果 'OK' 按钮获得焦点，它将保存用户的选择，关闭叠加层并将焦点返回到 `ion-select` 元素。 |
| <kbd>Escape</kbd>     | 关闭叠加层而不更改已提交的选项。将焦点返回到 `ion-select` 元素。 |
| <kbd>Space</kbd>      | 如果聚焦的单选按钮未选中，则取消选中当前选中的单选按钮并选中聚焦的单选按钮。否则，不执行任何操作。如果叠加层没有 'OK' 按钮，将立即提交值并关闭叠加层。 |
| <kbd>Tab</kbd>        | 将焦点移动到叠加层上的下一个可聚焦元素（取消按钮、'OK' 按钮，或选中项或第一个选项）。如果下一个可聚焦元素是选项，则它将聚焦到选中的选项，否则将聚焦到第一个选项。 |

#### 多选

多选键盘交互遵循 [ARIA 复选框的实现模式](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)。

当叠加层已呈现并启用多选时，这些键盘交互适用于 `ion-alert`、`ion-popover` 和 `ion-modal` 元素。

| 按键                | 说明                                                  |
| ------------------ | ------------------------------------------------------------ |
| <kbd>Enter</kbd>   | 当 'OK' 按钮获得焦点时，它将保存用户的选择，关闭叠加层，并将焦点返回到 `ion-select` 元素。 |
| <kbd>Escape</kbd>  | 关闭叠加层而不更改已提交的选项。将焦点返回到 `ion-select` 元素。 |
| <kbd>Space</kbd>   | 选中或取消选中当前聚焦的选项。这不会取消选中其他已选中的选项。如果叠加层没有 'OK' 按钮，将立即提交值。 |
| <kbd>Tab</kbd>     | 将焦点移动到叠加层上的下一个可聚焦元素（取消按钮、'OK' 按钮或任何选项）。如果下一个可聚焦元素是选项列表，则应遍历每个选项。 |

## 属性
<Props />

## 事件
<Events />

## 方法
<Methods />

## CSS 影子部分
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />