---
title: 输入组件
---
import Props from '@ionic-internal/component-api/v8/input/props.md';
import Events from '@ionic-internal/component-api/v8/input/events.md';
import Methods from '@ionic-internal/component-api/v8/input/methods.md';
import Parts from '@ionic-internal/component-api/v8/input/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/input/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/input/slots.md';

<head>
  <title>ion-input: 支持自定义样式和CSS属性的输入组件</title>
  <meta name="description" content="ion-input 是 HTML input 元素的封装，提供自定义数值类型样式和功能。它能与移动设备键盘集成。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


输入组件是对 HTML input 元素的封装，提供了自定义样式和额外功能。它接受与 HTML input 相同的大部分属性，并能与移动设备键盘集成。


## 基本用法

import Basic from '@site/static/usage/v8/input/basic/index.md';

<Basic />


## 类型

输入组件仅用于文本类型的输入，例如 `"text"`、`"password"`、`"email"`、`"number"`、`"search"`、`"tel"` 和 `"url"`。它支持所有标准文本输入事件，包括 `keyup`、`keydown`、`keypress` 等。默认的 `type` 是 `"text"`。

import Types from '@site/static/usage/v8/input/types/index.md';

<Types />

## 标签

标签应用于描述输入框。它们可以视觉上展示，并且在用户聚焦到输入框时，屏幕阅读器也会朗读它们。这有助于用户理解输入框的意图。输入组件有几种分配标签的方式：

- `label` 属性：用于纯文本标签
- `label` 插槽：用于自定义 HTML 标签（实验性功能）
- `aria-label`：用于为屏幕阅读器提供标签，但不显示可见标签

### 标签位置

默认情况下，标签会占据其内容的宽度。开发者可以使用 `labelPlacement` 属性来控制标签相对于控件的放置位置。

import LabelPlacement from '@site/static/usage/v8/input/label-placement/index.md';

<LabelPlacement />

### 标签插槽（实验性功能）

虽然纯文本标签应该通过 `label` 属性传入，但如果需要自定义 HTML，可以通过 `label` 插槽传入。

请注意，此功能被视为实验性，因为它依赖于[Web 组件插槽](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)的模拟版本。因此，模拟行为可能与原生插槽行为不完全一致。

import LabelSlot from '@site/static/usage/v8/input/label-slot/index.md';

<LabelSlot />

### 无可见标签

如果不需要可见标签，开发者仍应提供 `aria-label`，以便屏幕阅读器能够访问输入框。

import NoVisibleLabel from '@site/static/usage/v8/input/no-visible-label/index.md';

<NoVisibleLabel />

## 清除选项

输入组件提供了两种清除输入的方式，具体取决于你与它的交互方式。第一种是添加 `clearInput` 属性，当输入框有 `value` 时会显示清除按钮。第二种是 `clearOnEdit` 属性，它会在输入框失去焦点后再次输入时清除内容。`type` 设置为 `"password"` 的输入框默认启用 `clearOnEdit`。

import Clear from '@site/static/usage/v8/input/clear/index.md';

<Clear />


<LegacyAnchor id="filled-inputs" />

## 填充式输入

Material Design 为输入框提供了填充样式。输入框的 `fill` 属性可以设置为 `"solid"` 或 `"outline"`。

通过在输入框上设置 `mode` 为 `md`，填充式输入也可以在 iOS 上使用。

:::warning
使用 `fill` 的输入框不应放在 `ion-item` 中，因为组件之间存在样式冲突。
:::

import Fill from '@site/static/usage/v8/input/fill/index.md';

<Fill />


## 辅助文本和错误文本

辅助文本和错误文本可以通过 `helperText` 和 `errorText` 属性在输入框内部使用。除非将 `ion-invalid` 和 `ion-touched` 类添加到 `ion-input`，否则错误文本不会显示。这确保了在用户有机会输入数据之前不会显示错误。

在 Angular 中，这通过表单验证自动完成。在 JavaScript、React 和 Vue 中，需要根据你自己的验证手动添加这些类。

import HelperError from '@site/static/usage/v8/input/helper-error/index.md';

<HelperError />

<LegacyAnchor id="using-the-modern-syntax" />

## 输入计数器

输入计数器是显示在输入框下方的文本，用于通知用户已输入的字符数占输入框可接受总字符数的比例。添加计数器时，默认行为是将显示的值格式化为 `inputLength` / `maxLength`。可以通过向 `counterFormatter` 属性传入格式化函数来自定义此行为。

`ion-item` 上的 `counter` 和 `counterFormatter` 属性[在 Ionic 7 中已弃用](/api/input#using-the-modern-syntax)，应直接在 `ion-input` 上使用。

import Counter from '@site/static/usage/v8/input/counter/index.md';

<Counter />

带有计数器的输入框会在输入框和计数器之间添加边框，因此它们不应放在 `ion-item` 内部，因为 `ion-item` 会在项目下方添加额外的边框。可以添加 `ion-padding-start` 类来对齐计数器输入框和项目内部的输入框。

import CounterAlignment from '@site/static/usage/v8/input/counter-alignment/index.md';

<CounterAlignment />

## 过滤用户输入

开发者可以使用 `ionInput` 事件来响应用户输入（例如 `keypress`）更新输入值。这对于过滤掉无效或不需要的字符非常有用。

将值存储在状态变量中时，我们建议同时更新状态变量和 `ion-input` 组件值。这确保了状态变量和 `ion-input` 组件值保持同步。

import FilteringData from '@site/static/usage/v8/input/filtering/index.md';

<FilteringData />

<LegacyAnchor id="pinformatter" />

## 输入掩码

输入掩码是约束输入以支持有效输入值的表达式。Ionic 推荐使用 [Maskito](https://maskito.dev) 进行输入掩码。Maskito 是一个轻量级、无依赖的输入字段掩码库。它支持多种掩码，包括电话号码、信用卡、日期等。

要开始使用 Maskito，请安装该库：

```bash
npm install @maskito/core @maskito/{angular,react,vue}
```

import Masking from '@site/static/usage/v8/input/mask/index.md';

<Masking />

:::note

请将 Maskito 的错误报告提交到 [Maskito Github 仓库](https://github.com/taiga-family/maskito/issues)。如需技术支持，请使用 [Ionic 论坛](https://forum.ionicframework.com/) 或 [Ionic Discord](http://chat.ionicframework.com/)。

:::

## 起始和结束插槽（实验性功能）

`start` 和 `end` 插槽可用于在输入框的任一侧放置图标、按钮或前缀/后缀文本。

请注意，此功能被视为实验性，因为它依赖于[Web 组件插槽](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)的模拟版本。因此，模拟行为可能与原生插槽行为不完全一致。

:::note
在大多数情况下，放置在这些插槽中的 [Icon](./icon.md) 组件应设置 `aria-hidden="true"`。有关更多信息，请参阅 [Icon 无障碍文档](https://ionicframework.com/docs/api/icon#accessibility)。

如果插槽内容需要交互，应将其包装在交互式元素中，例如 [Button](./button.md)。这确保了内容可以通过 Tab 键聚焦。
:::

import StartEndSlots from '@site/static/usage/v8/input/start-end-slots/index.md';

<StartEndSlots />

## 主题

### 颜色

设置 `color` 属性会更改每个输入框的调色板。在 `ios` 模式下，此属性会更改光标颜色。在 `md` 模式下，此属性会更改光标颜色和高亮/下划线颜色。

:::note
`color` 属性不会更改输入框的文本颜色。为此，请使用 [`--color` CSS 属性](#css-custom-properties-1)。
:::

import Colors from '@site/static/usage/v8/input/theming/colors/index.md';

<Colors />

### CSS 自定义属性

输入组件使用作用域封装，这意味着它将在运行时通过为每个样式附加一个额外的类来自动限定其 CSS 范围。覆盖 CSS 中的作用域选择器需要[更高特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)的选择器。针对 `ion-input` 进行自定义是无效的；因此我们建议添加一个类并以这种方式进行自定义。

import CSSProps from '@site/static/usage/v8/input/theming/css-properties/index.md';

<CSSProps />

## 接口

### InputChangeEventDetail

```typescript
interface InputChangeEventDetail {
  value: string | undefined | null;
}
```

### InputCustomEvent

虽然不是必需的，但此接口可用于替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更严格的类型检查。

```typescript
interface InputCustomEvent extends CustomEvent {
  detail: InputChangeEventDetail;
  target: HTMLIonInputElement;
}
```


## 属性
<Props />

## 事件
<Events />

## 方法
<Methods />

## CSS 阴影部件
<Parts />

<LegacyAnchor id="css-custom-properties-1" />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />
