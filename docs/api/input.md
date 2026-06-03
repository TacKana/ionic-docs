---
title: "ion-input"
---
import Props from '@ionic-internal/component-api/v8/input/props.md';
import Events from '@ionic-internal/component-api/v8/input/events.md';
import Methods from '@ionic-internal/component-api/v8/input/methods.md';
import Parts from '@ionic-internal/component-api/v8/input/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/input/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/input/slots.md';

<head>
  <title>ion-input: 带样式和 CSS 属性的自定义输入</title>
  <meta name="description" content="ion-input 是 HTML input 元素的包装器，具有自定义值类型样式和功能。它与移动设备上的键盘集成。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


input 组件是 HTML input 元素的包装器，具有自定义样式和附加功能。它接受与 HTML input 相同的大部分属性，并与移动设备上的键盘集成。


## 基本用法

import Basic from '@site/static/usage/v8/input/basic/index.md';

<Basic />


## 类型

input 组件仅适用于文本类型的输入，例如 `"text"`、`"password"`、`"email"`、`"number"`、`"search"`、`"tel"` 和 `"url"`。它支持所有标准文本输入事件，包括 `keyup`、`keydown`、`keypress` 等。默认的 `type` 是 `"text"`。

import Types from '@site/static/usage/v8/input/types/index.md';

<Types />

## 标签

应使用标签来描述输入。它们可以在视觉上使用，当用户聚焦在输入上时，屏幕阅读器也会读出它们。这使用户易于理解输入的用途。Input 有多种分配标签的方式：

- `label` 属性：用于纯文本标签
- `label` 插槽：用于自定义 HTML 标签（实验性）
- `aria-label`：用于为屏幕阅读器提供标签，但不添加可见标签

### 标签位置

默认情况下，标签将占据其内容的宽度。开发人员可以使用 `labelPlacement` 属性来控制标签相对于控件的位置。

import LabelPlacement from '@site/static/usage/v8/input/label-placement/index.md';

<LabelPlacement />

### 标签插槽（实验性）

虽然纯文本标签应通过 `label` 属性传入，但如果需要自定义 HTML，可以通过 `label` 插槽传入。

请注意，此功能被认为是实验性的，因为它依赖于[Web 组件插槽](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)的模拟版本。因此，模拟行为可能与原生插槽行为不完全匹配。

import LabelSlot from '@site/static/usage/v8/input/label-slot/index.md';

<LabelSlot />

### 无可见标签

如果不需要可见标签，开发人员仍应提供 `aria-label`，以便屏幕阅读器可以访问输入。

import NoVisibleLabel from '@site/static/usage/v8/input/no-visible-label/index.md';

<NoVisibleLabel />

## 清除选项

Input 提供了两种根据交互方式清除输入的选项。第一种方式是添加 `clearInput` 属性，当输入有 `value` 时会显示一个清除按钮。第二种方式是 `clearOnEdit` 属性，它会在输入失去焦点后再次输入时清除输入。`type` 设置为 `"password"` 的输入默认启用 `clearOnEdit`。

import Clear from '@site/static/usage/v8/input/clear/index.md';

<Clear />


## 填充样式输入

Material Design 为输入提供了填充样式。输入上的 `fill` 属性可以设置为 `"solid"` 或 `"outline"`。

通过将输入的 `mode` 设置为 `md`，可以在 iOS 上使用填充样式输入。

:::warning
由于组件之间存在样式冲突，使用 `fill` 的输入不应放在 `ion-item` 中使用。
:::

import Fill from '@site/static/usage/v8/input/fill/index.md';

<Fill />


## 帮助与错误文本

可以使用 `helperText` 和 `errorText` 属性在输入内部使用帮助和错误文本。除非将 `ion-invalid` 和 `ion-touched` 类添加到 `ion-input`，否则不会显示错误文本。这确保在用户有机会输入数据之前不会显示错误。

在 Angular 中，这是通过表单验证自动完成的。在 JavaScript、React 和 Vue 中，需要根据您自己的验证手动添加类。

import HelperError from '@site/static/usage/v8/input/helper-error/index.md';

<HelperError />

## 输入计数器

输入计数器是显示在输入下方的文本，用于通知用户已输入了多少个字符以及输入将接受的总字符数。添加计数器时，默认行为是将显示的值格式化为 `inputLength` / `maxLength`。可以通过向 `counterFormatter` 属性传入格式化函数来自定义此行为。

`ion-item` 上的 `counter` 和 `counterFormatter` 属性已在 [Ionic 7 中弃用](/api/input#输入计数器)，应直接在 `ion-input` 上使用。

import Counter from '@site/static/usage/v8/input/counter/index.md';

<Counter />

带计数器的输入在输入和计数器之间添加了一个边框，因此它们不应放在 `ion-item` 内部，因为 `ion-item` 会在项目下方添加额外的边框。可以添加 `ion-padding-start` 类来将带计数器的输入与项目内部的输入对齐。

import CounterAlignment from '@site/static/usage/v8/input/counter-alignment/index.md';

<CounterAlignment />

## 过滤用户输入

开发人员可以使用 `ionInput` 事件来响应用户输入（例如 `keypress`）更新输入值。这对于过滤无效或不想要的字符很有用。

将值存储在状态变量中时，我们建议同时更新状态变量和 `ion-input` 组件的值。这确保了状态变量和 `ion-input` 组件值保持同步。

import FilteringData from '@site/static/usage/v8/input/filtering/index.md';

<FilteringData />

## 输入掩码

输入掩码是限制输入以支持有效输入值的表达式。Ionic 建议使用 [Maskito](https://maskito.dev) 进行输入掩码。Maskito 是一个轻量级、无依赖的输入字段掩码库。它支持广泛的掩码，包括电话号码、信用卡、日期等。

要开始使用 Maskito，请安装该库：

```bash
npm install @maskito/core @maskito/{angular,react,vue}
```

import Masking from '@site/static/usage/v8/input/mask/index.md';

<Masking />

:::note

请将 Maskito 的错误报告提交到 [Maskito Github 仓库](https://github.com/taiga-family/maskito/issues)。如需技术支持，请使用 [Ionic 论坛](https://forum.ionicframework.com/) 或 [Ionic Discord](http://chat.ionicframework.com/)。

:::

## 起始和结束插槽（实验性）

`start` 和 `end` 插槽可用于在输入的两侧放置图标、按钮或前缀/后缀文本。

请注意，此功能被认为是实验性的，因为它依赖于[Web 组件插槽](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)的模拟版本。因此，模拟行为可能与原生插槽行为不完全匹配。

:::note
大多数情况下，放置在这些插槽中的 [Icon](./icon.md) 组件应设置 `aria-hidden="true"`。更多信息请参阅[Icon 辅助功能文档](https://ionicframework.com/docs/api/icon#accessibility)。

如果插槽内容需要交互，应将其包装在交互式元素（如 [Button](./button.md)）中。这确保了内容可以通过 Tab 键聚焦。
:::

import StartEndSlots from '@site/static/usage/v8/input/start-end-slots/index.md';

<StartEndSlots />

## 主题

### 颜色

设置 `color` 属性会更改每个输入的调色板。在 `ios` 模式下，此属性更改光标颜色。在 `md` 模式下，此属性更改光标颜色和高亮/下划线颜色。

:::note
`color` 属性*不*会更改输入的文本颜色。要更改文本颜色，请使用 [`--color` CSS 属性](#css-自定义属性-1)。
:::

import Colors from '@site/static/usage/v8/input/theming/colors/index.md';

<Colors />

### CSS 自定义属性

Input 使用作用域封装，这意味着它会通过运行时为每个样式附加一个额外的类来自动限定其 CSS 的作用域。在 CSS 中覆盖作用域选择器需要[更高的特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)选择器。针对 `ion-input` 进行自定义不起作用；因此我们建议添加一个类并以此方式进行自定义。

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

虽然不是必需的，但此接口可用于替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

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

## CSS Shadow Parts
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />
