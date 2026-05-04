---
title: 'ion-select'
---

import Props from '@ionic-internal/component-api/v7/select/props.md';
import Events from '@ionic-internal/component-api/v7/select/events.md';
import Methods from '@ionic-internal/component-api/v7/select/methods.md';
import Parts from '@ionic-internal/component-api/v7/select/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/select/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/select/slots.md';

<head>
  <title>ion-select：单选或多选值框与占位符</title>
  <meta
    name="description"
    content="ion-select 通过所选值（或多个值）、占位符及下拉图标表示。点击选择时，会弹出包含易于选择列表的对话框。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

选择器（Select）是一种表单控件，用于从一组选项中选择一个或多个选项。当用户点击选择器时，会弹出一个对话框，以大型、易于选择的列表形式展示所有选项。

选择器应与子元素 `<ion-select-option>` 配合使用。如果子选项未设置 `value` 属性，则会使用其文本内容作为值。

如果在 `<ion-select>` 上设置了 `value` 属性，则会根据该值选择对应的选项。

## 标签

标签（Label）应用于描述选择器。它们既可用于视觉展示，也会在用户聚焦于选择器时被屏幕阅读器读出，从而帮助用户理解选择器的用途。选择器提供了多种方式来分配标签：

选择器有几种方式来为组件提供标签：

- `label` 属性：用于纯文本标签
- `label` 插槽：用于自定义 HTML 标签
- `aria-label`：用于为屏幕阅读器提供标签，但不会显示可见标签

### 标签位置

默认情况下，标签会占据其内容的宽度。开发者可以使用 `labelPlacement` 属性来控制标签相对于控件的位置。虽然这里使用了 `label` 属性，但 `labelPlacement` 也可以与 `label` 插槽配合使用。

import LabelPlacement from '@site/static/usage/v7/select/label-placement/index.md';

<LabelPlacement />

### 标签插槽

虽然纯文本标签应通过 `label` 属性传递，但如果需要自定义 HTML，则可以通过 `label` 插槽传递。

import LabelSlot from '@site/static/usage/v7/select/label-slot/index.md';

<LabelSlot />

### 无可见标签

如果不需要可见标签，开发者仍应提供 `aria-label`，以确保选择器对屏幕阅读器可访问。

import NoVisibleLabel from '@site/static/usage/v7/select/no-visible-label/index.md';

<NoVisibleLabel />

## 单选

默认情况下，选择器允许用户仅选择一个选项。警告（alert）界面会向用户展示一个单选按钮样式的选项列表。选择器组件的值接收所选选项的值。

单选的键盘交互在下面的[键盘交互](#单选择-1)部分描述。

import SingleSelectionExample from '@site/static/usage/v7/select/basic/single-selection/index.md';

<SingleSelectionExample />

## 多选

通过向选择器添加 `multiple` 属性，用户可以选择多个选项。当允许选择多个选项时，警告或弹出框（popover）叠加层会向用户展示一个复选框样式的选项列表。选择器组件的值接收所有选中选项值的数组。

:::note

`action-sheet` 界面不支持多选。

:::

多选的键盘交互在下面的[键盘交互](#多选择-1)部分描述。

import MultipleSelectionExample from '@site/static/usage/v7/select/basic/multiple-selection/index.md';

<MultipleSelectionExample />

## 界面

默认情况下，选择器使用 [ion-alert](alert.md) 在警告框中打开选项叠加层。可以通过将 `action-sheet` 或 `popover` 分别传递给 `interface` 属性，将界面更改为使用 [ion-action-sheet](action-sheet.md) 或 [ion-popover](popover.md)。请继续阅读其他部分，了解不同界面的限制。

### 警告框

import AlertExample from '@site/static/usage/v7/select/basic/single-selection/index.md';

<AlertExample />

### 操作表

import ActionSheetExample from '@site/static/usage/v7/select/interfaces/action-sheet/index.md';

<ActionSheetExample />

### 弹出框

import PopoverExample from '@site/static/usage/v7/select/interfaces/popover/index.md';

<PopoverExample />

## 响应用户交互

处理用户与选择器交互的主要方式是通过 `ionChange`、`ionDismiss` 和 `ionCancel` 事件。有关这些事件以及选择器触发的其他事件的更多详细信息，请参阅[事件](#事件)。

import RespondingToInteractionExample from '@site/static/usage/v7/select/basic/responding-to-interaction/index.md';

<RespondingToInteractionExample />

## 对象值引用

当使用对象作为选择器的值时，如果这些对象来自服务器或数据库，它们的标识可能会发生变化，而所选值的标识保持不变。例如，当将具有所需对象值的现有记录加载到选择器中，但新检索到的选择器选项现在具有不同的标识时，就会发生这种情况。这将导致选择器看起来没有任何值，即使原始选择仍然存在。

默认情况下，选择器使用对象相等性（`===`）来确定是否选中了某个选项。可以通过向 `compareWith` 属性提供属性名称或函数来覆盖此行为。

### 使用 compareWith

import UsingCompareWithExample from '@site/static/usage/v7/select/objects-as-values/using-comparewith/index.md';

<UsingCompareWithExample />

### 对象值与多选

import ObjectValuesAndMultipleSelectionExample from '@site/static/usage/v7/select/objects-as-values/multiple-selection/index.md';

<ObjectValuesAndMultipleSelectionExample />

## 对齐方式

开发者可以使用 `justify` 属性来控制标签和控件在一行上的排列方式。

import JustifyExample from '@site/static/usage/v7/select/justify/index.md';

<JustifyExample />

## 填充式选择器

Material Design 为选择器提供了填充样式。选择器上的 `fill` 属性可以设置为 `"solid"` 或 `"outline"`。

由于 `fill` 样式在视觉上定义了选择器容器，因此使用 `fill` 的选择器不应在 `ion-item` 中使用。

import FillExample from '@site/static/usage/v7/select/fill/index.md';

<FillExample />

## 选择器按钮

警告框支持两个按钮：`Cancel`（取消）和 `OK`（确定）。每个按钮的文本可以使用 `cancelText` 和 `okText` 属性进行自定义。

`action-sheet` 和 `popover` 界面没有 `OK` 按钮，点击任何选项都会自动关闭叠加层并选择该值。`popover` 界面没有 `Cancel` 按钮，点击背景会关闭叠加层。

import ButtonTextExample from '@site/static/usage/v7/select/customization/button-text/index.md';

<ButtonTextExample />

## 界面选项

由于选择器使用警告框、操作表和弹出框界面，可以通过 `interfaceOptions` 属性向这些组件传递选项。这可用于传递自定义标题、副标题、CSS 类等。

有关每个界面接受的属性，请参阅 [ion-alert 文档](alert.md)、[ion-action-sheet 文档](action-sheet.md) 和 [ion-popover 文档](popover.md)。

注意：`interfaceOptions` 不会覆盖 `alert` 界面的 `inputs` 或 `buttons`。

import InterfaceOptionsExample from '@site/static/usage/v7/select/customization/interface-options/index.md';

<InterfaceOptionsExample />

## 起始与结束插槽

`start` 和 `end` 插槽可用于在选择器的任一侧放置图标、按钮或前缀/后缀文本。如果点击插槽内容，选择器不会打开。

:::note
在大多数情况下，放置在这些插槽中的 [Icon](./icon.md) 组件应设置 `aria-hidden="true"`。有关更多信息，请参阅 [Icon 可访问性文档](https://ionicframework.com/docs/api/icon#accessibility)。

如果插槽内容需要交互，应将其包装在交互式元素中，例如 [Button](./button.md)。这确保内容可以通过 Tab 键访问。
:::

import StartEndSlots from '@site/static/usage/v7/select/start-end-slots/index.md';

<StartEndSlots />

## 自定义

选择器组件由两个单元组成，每个单元都需要单独设置样式。`ion-select` 元素在视图中由所选值（或多个值）、占位符（如果没有值）和下拉图标表示。界面（在上一节[界面](#界面)中定义）是点击 `ion-select` 时打开的对话框。界面包含通过添加 `ion-select-option` 元素定义的所有选项。以下部分将介绍样式化这些元素之间的差异。

### 样式化选择器元素

如前所述，`ion-select` 元素仅包含显示在视图上的值（或多个值）、占位符和图标。要自定义此元素，请使用 CSS 和任何 [CSS 自定义属性](#css-custom-properties) 的组合进行样式设置。

或者，根据所需的[浏览器支持](https://caniuse.com/#feat=mdn-css_selectors_part)，可以使用 CSS Shadow Parts 来设置选择器的样式。请注意，通过使用 `::part`，可以定位元素上的任何 CSS 属性。

import StylingSelectExample from '@site/static/usage/v7/select/customization/styling-select/index.md';

<StylingSelectExample />

### 样式化选择器界面

自定义界面对话框应按照该界面的文档中的“自定义”部分进行：

- [警告框自定义](alert.md#customization)
- [操作表自定义](action-sheet.md#customization)
- [弹出框自定义](popover.md#customization)

但是，选择器选项确实为更轻松的样式设置设置了一个类，并允许将类传递给叠加层选项，有关自定义选项的使用示例，请参阅[选择器选项文档](select-option.md)。

### 自定义切换图标

显示在选择器文本旁边的图标可以使用 `toggleIcon` 和/或 `expandedIcon` 属性设置为任何 [Ionicon](https://ionic.io/ionicons)。

import CustomToggleIconsExample from '@site/static/usage/v7/select/customization/custom-toggle-icons/index.md';

<CustomToggleIconsExample />

### 图标翻转行为

默认情况下，当选择器打开时，切换图标在 `md` 模式下会自动旋转，在 `ios` 模式下保持静态。可以使用 CSS 自定义此行为。

以下示例还使用了[自定义 `toggleIcon`](#自定义切换图标) 来更好地展示 `ios` 上的翻转行为，因为默认图标是垂直对称的。

import IconFlipBehaviorExample from '@site/static/usage/v7/select/customization/icon-flip-behavior/index.md';

<IconFlipBehaviorExample />

## 类型提示组件

可以使用现有的 Ionic 组件构建类型提示（Typeahead）或自动完成功能。我们建议使用 `ion-modal` 来充分利用可用的屏幕空间。

import TypeaheadExample from '@site/static/usage/v7/select/typeahead/index.md';

<TypeaheadExample />

## 接口

### SelectChangeEventDetail

```typescript
interface SelectChangeEventDetail<T = any> {
  value: T;
}
```

### SelectCustomEvent

虽然不是必需的，但此接口可用于替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更强的类型检查。

```typescript
interface SelectCustomEvent<T = any> extends CustomEvent {
  detail: SelectChangeEventDetail<T>;
  target: HTMLIonSelectElement;
}
```

<LegacyAnchor id="migrating-from-legacy-select-syntax" />

## 从旧版选择器语法迁移

Ionic 7.0 引入了更简洁的选择器语法。这种新语法减少了设置选择器所需的样板代码，解决了可访问性问题，并改善了开发者体验。

开发者可以逐个选择器进行迁移。虽然开发者可以继续使用旧版语法，但我们建议尽快迁移。

### 使用现代语法

使用现代语法涉及两个步骤：

1. 移除 `ion-label`，改为在 `ion-select` 上使用 `label` 属性。标签的位置可以通过 `ion-select` 上的 `labelPlacement` 属性进行配置。
2. 将 `fill` 和 `shape` 的任何使用从 `ion-item` 移到 `ion-select` 上。

import Migration from '@site/static/usage/v7/select/migration/index.md';

<Migration />

### 使用旧版语法

Ionic 使用启发式方法来检测应用是否使用现代选择器语法。在某些情况下，可能更倾向于继续使用旧版语法。开发者可以将 `ion-select` 上的 `legacy` 属性设置为 `true`，以强制该输入实例使用旧版语法。

## 可访问性

### 键盘交互

Ionic 的键盘交互遵循 Web 的实现模式，而不是原生 iOS 选择器的模式，以在所有平台上提供一致的体验。

当满足以下条件时，这些键盘交互适用于所有 `ion-select` 元素：

- 选择器已关闭。
- 选择器已聚焦。
- 选择器未禁用。

| 按键                | 描述                                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>Enter</kbd>    | 打开叠加层并聚焦于第一个选中的选项。如果没有选中的选项，则聚焦于第一个选项。                                                   |
| <kbd>Space</kbd>    | 打开叠加层并聚焦于第一个选中的选项。如果没有选中的选项，则聚焦于第一个选项。                                                   |

<LegacyAnchor id="单选择-1" />

#### 单选

单选键盘交互遵循[单选按钮的 ARIA 实现模式](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)。

当叠加层已显示且已聚焦时，这些键盘交互适用于 `ion-action-sheet`、`ion-alert` 和 `ion-popover` 元素。

| 按键                     | 描述                                                                                                                                                                                                                                                                       |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>ArrowDown</kbd>     | 聚焦并选择列表中的下一个选项。如果没有下一个选项，选择将循环到第一个选项。                                                                                                                                                                                                 |
| <kbd>ArrowLeft</kbd>     | 聚焦并选择列表中的上一个选项。如果没有上一个选项，选择将循环到最后一个选项。                                                                                                                                                                                               |
| <kbd>ArrowRight</kbd>    | 聚焦并选择列表中的下一个选项。如果没有下一个选项，选择将循环到第一个选项。                                                                                                                                                                                                 |
| <kbd>ArrowUp</kbd>       | 聚焦并选择列表中的上一个选项。如果没有上一个选项，选择将循环到最后一个选项。                                                                                                                                                                                               |
| <kbd>Enter</kbd>         | 如果某个选项已聚焦，将选择该选项。**没有**“确定”按钮的叠加层将立即提交值，关闭叠加层并将焦点返回到 `ion-select` 元素。<br /><br/>如果“确定”按钮已聚焦，将保存用户的选择，关闭叠加层并将焦点返回到 `ion-select` 元素。                                                       |
| <kbd>Escape</kbd>        | 关闭叠加层而不更改已提交的选项。将焦点返回到 `ion-select` 元素。                                                                                                                                                                                                           |
| <kbd>Space</kbd>         | 如果聚焦的单选按钮未选中，则取消选中当前选中的单选按钮并选中聚焦的单选按钮。否则，不执行任何操作。如果叠加层没有“确定”按钮，将立即提交值并关闭叠加层。                                                                                                                     |
| <kbd>Tab</kbd>           | 将焦点移动到叠加层上的下一个可聚焦元素（取消按钮、“确定”按钮，或选择项或第一个选项）。如果下一个可聚焦元素是选项，则它将聚焦于选中的选项，否则将聚焦于第一个选项。                                                                                                         |

<LegacyAnchor id="多选择-1" />

#### 多选

多选键盘交互遵循[复选框的 ARIA 实现模式](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)。

当叠加层已显示且启用了多选时，这些键盘交互适用于 `ion-alert` 和 `ion-popover` 元素。

| 按键                | 描述                                                                                                                                                                   |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Enter</kbd>    | 当“确定”按钮聚焦时，将保存用户的选择，关闭叠加层，并将焦点返回到 `ion-select` 元素。                                                                                   |
| <kbd>Escape</kbd>   | 关闭叠加层而不更改已提交的选项。将焦点返回到 `ion-select` 元素。                                                                                                       |
| <kbd>Space</kbd>    | 选择或取消选择当前聚焦的选项。这不会取消选择其他已选中的选项。如果叠加层没有“确定”按钮，将立即提交值。                                                                 |
| <kbd>Tab</kbd>      | 将焦点移动到叠加层上的下一个可聚焦元素（取消按钮、“确定”按钮或任何选项）。如果下一个可聚焦元素是选项列表，则应遍历每个选项。                                           |

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS Shadow Parts

<Parts />

<LegacyAnchor id="css-custom-properties" />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />