---
title: 'ion-input'
---

import Props from '@ionic-internal/component-api/v7/input/props.md';
import Events from '@ionic-internal/component-api/v7/input/events.md';
import Methods from '@ionic-internal/component-api/v7/input/methods.md';
import Parts from '@ionic-internal/component-api/v7/input/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/input/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/input/slots.md';

<head>
  <title>ion-input：带有自定义样式和 CSS 属性的输入框组件</title>
  <meta
    name="description"
    content="ion-input 是 HTML input 元素的封装，具有自定义的值类型样式和功能。它适用于桌面设备，并能与移动设备键盘集成。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

输入框组件是对 HTML input 元素的封装，具有自定义样式和附加功能。它接受与 HTML input 元素大部分相同的属性，在桌面设备上表现优异，并能与移动设备键盘集成。

## 基本用法

import Basic from '@site/static/usage/v7/input/basic/index.md';

<Basic />

## 类型

输入框组件仅用于文本类型的输入，例如 `"text"`、`"password"`、`"email"`、`"number"`、`"search"`、`"tel"` 和 `"url"`。它支持所有标准文本输入事件，包括 `keyup`、`keydown`、`keypress` 等。默认的 `type` 为 `"text"`。

import Types from '@site/static/usage/v7/input/types/index.md';

<Types />

## 标签

标签应用于描述输入框。它们既可用于视觉呈现，当用户聚焦输入框时也会被屏幕阅读器读出。这有助于用户理解输入框的意图。输入框有几种分配标签的方式：

- `label` 属性：用于纯文本标签
- `label` 插槽（slot）：用于自定义 HTML 标签（实验性功能）
- `aria-label`：用于为屏幕阅读器提供标签，但不显示可见标签

### 标签位置

默认情况下，标签将占据其内容的宽度。开发者可以使用 `labelPlacement` 属性来控制标签相对于控件的放置位置。

import LabelPlacement from '@site/static/usage/v7/input/label-placement/index.md';

<LabelPlacement />

### 标签插槽（实验性功能）

虽然纯文本标签应通过 `label` 属性传递，但如果需要自定义 HTML，可以通过 `label` 插槽传递。

请注意，此功能被视为实验性，因为它依赖于模拟版的 [Web Component 插槽](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)。因此，模拟行为可能与原生插槽行为不完全一致。

import LabelSlot from '@site/static/usage/v7/input/label-slot/index.md';

<LabelSlot />

### 无可见标签

如果不需要可见标签，开发者仍应提供 `aria-label`，以便屏幕阅读器可以访问输入框。

import NoVisibleLabel from '@site/static/usage/v7/input/no-visible-label/index.md';

<NoVisibleLabel />

## 清除选项

输入框提供了两种清除输入内容的方式，具体取决于你与它的交互方式。第一种方式是添加 `clearInput` 属性，当输入框有 `value` 时会显示清除按钮。第二种方式是使用 `clearOnEdit` 属性，它会在输入框失去焦点后再次键入时清除内容。将 `type` 设置为 `"password"` 的输入框默认启用 `clearOnEdit`。

import Clear from '@site/static/usage/v7/input/clear/index.md';

<Clear />

## 填充式输入框

Material Design 为输入框提供了填充样式。输入框的 `fill` 属性可以设置为 `"solid"` 或 `"outline"`。

由于 `fill` 样式在视觉上定义了输入框容器，因此使用 `fill` 的输入框不应在 `ion-item` 中使用。

通过将 Input 的 `mode` 设置为 `md`，也可以在 iOS 上使用填充式输入框。

import Fill from '@site/static/usage/v7/input/fill/index.md';

<Fill />

## 辅助文本与错误文本

可以在输入框内部使用辅助文本和错误文本，分别通过 `helperText` 和 `errorText` 属性实现。除非向 `ion-input` 添加了 `ion-invalid` 和 `ion-touched` 类，否则错误文本不会显示。这确保了在用户有机会输入数据之前不会显示错误。

在 Angular 中，这是通过表单验证自动完成的。在 JavaScript、React 和 Vue 中，需要根据你自己的验证逻辑手动添加这些类。

import HelperError from '@site/static/usage/v7/input/helper-error/index.md';

<HelperError />

## 输入计数器

输入计数器是显示在输入框下方的文本，用于通知用户已输入的字符数占输入框可接受总字符数的比例。添加计数器时，默认行为是将显示的值格式化为 `inputLength` / `maxLength`。可以通过向 `counterFormatter` 属性传递格式化函数来自定义此行为。

`ion-item` 上的 `counter` 和 `counterFormatter` 属性在 [Ionic 7 中已弃用](/v7/api/input#using-the-modern-syntax)，应直接在 `ion-input` 上使用。

import Counter from '@site/static/usage/v7/input/counter/index.md';

<Counter />

带有计数器的输入框会在输入框和计数器之间添加边框，因此不应将其放置在 `ion-item` 内部，因为 `ion-item` 会在项目下方添加额外的边框。可以添加 `ion-padding-start` 类来对齐计数器输入框与项目内部的输入框。

import CounterAlignment from '@site/static/usage/v7/input/counter-alignment/index.md';

<CounterAlignment />

## 过滤用户输入

开发者可以使用 `ionInput` 事件来响应用户输入（例如 `keypress`）更新输入框的值。这对于过滤掉无效或不需要的字符非常有用。

当将值存储在状态变量中时，我们建议同时更新状态变量和 `ion-input` 组件的值。这确保了状态变量和 `ion-input` 组件值保持同步。

import FilteringData from '@site/static/usage/v7/input/filtering/index.md';

<FilteringData />

<LegacyAnchor id="pinformatter" />

## 输入掩码

输入掩码是约束输入以支持有效输入值的表达式。Ionic 建议使用 [Maskito](https://maskito.dev) 进行输入掩码处理。Maskito 是一个轻量级、无依赖的输入字段掩码库。它支持多种掩码，包括电话号码、信用卡、日期等。

要开始使用 Maskito，请安装该库：

```bash
npm install @maskito/core @maskito/{angular,react,vue}
```

import Masking from '@site/static/usage/v7/input/mask/index.md';

<Masking />

:::note

请将 Maskito 的错误报告提交到 [Maskito Github 仓库](https://github.com/taiga-family/maskito/issues)。如需技术支持，请使用 [Ionic 论坛](https://forum.ionicframework.com/) 或 [Ionic Discord](http://chat.ionicframework.com/)。

:::

## 起始与结束插槽（实验性功能）

`start` 和 `end` 插槽可用于在输入框的任一侧放置图标、按钮或前缀/后缀文本。

请注意，此功能被视为实验性，因为它依赖于模拟版的 [Web Component 插槽](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)。因此，模拟行为可能与原生插槽行为不完全一致。

:::note
在大多数情况下，放置在这些插槽中的 [Icon](./icon.md) 组件应设置 `aria-hidden="true"`。更多信息请参阅 [Icon 无障碍文档](https://ionicframework.com/docs/api/icon#accessibility)。

如果插槽内容需要交互，应将其包装在交互式元素中，例如 [Button](./button.md)。这确保了内容可以通过 Tab 键访问。
:::

import StartEndSlots from '@site/static/usage/v7/input/start-end-slots/index.md';

<StartEndSlots />

## 主题定制

### 颜色

设置 `color` 属性会更改每个输入框的配色方案。在 `ios` 模式下，此属性会更改光标颜色。在 `md` 模式下，此属性会更改光标颜色和高亮/下划线颜色。

:::note
`color` 属性 _不会_ 更改输入框的文本颜色。为此，请使用 [`--color` CSS 属性](#css-custom-properties-1)。
:::

import Colors from '@site/static/usage/v7/input/theming/colors/index.md';

<Colors />

### CSS 自定义属性

Input 使用作用域封装（scoped encapsulation），这意味着它将在运行时通过向每个样式附加一个额外的类来自动确定其 CSS 的作用域。要覆盖 CSS 中的作用域选择器，需要更高 [特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) 的选择器。以 `ion-input` 为目标进行自定义将不起作用；因此，我们建议添加一个类并通过该类进行自定义。

import CSSProps from '@site/static/usage/v7/input/theming/css-properties/index.md';

<CSSProps />

<LegacyAnchor id="migrating-from-legacy-input-syntax" />

## 从旧版输入语法迁移

Ionic 7.0 引入了一种更简单的输入语法。这种新语法减少了设置输入框所需的样板代码，解决了无障碍问题，并改善了开发体验。

开发者可以一次迁移一个输入框。虽然开发者可以继续使用旧版语法，但我们建议尽快迁移。

<LegacyAnchor id="using-the-modern-syntax" />

### 使用现代语法

使用现代语法涉及三个步骤：

1. 移除 `ion-label`，改为在 `ion-input` 上使用 `label` 属性。可以使用 `ion-input` 上的 `labelPlacement` 属性配置标签的位置。
2. 将特定于输入框的属性从 `ion-item` 移动到 `ion-input` 上。这包括 `counter`、`counterFormatter`、`fill` 和 `shape` 属性。
3. 移除 `ion-item` 上 `helper` 和 `error` 插槽的使用，改为在 `ion-input` 上使用 `helperText` 和 `errorText` 属性。

import Migration from '@site/static/usage/v7/input/migration/index.md';

<Migration />

### 使用旧版语法

Ionic 使用启发式方法检测应用是否使用现代输入语法。在某些情况下，可能更倾向于继续使用旧版语法。开发者可以将 `ion-input` 上的 `legacy` 属性设置为 `true`，以强制该输入框实例使用旧版语法。

## 接口

### InputChangeEventDetail

```typescript
interface InputChangeEventDetail {
  value: string | undefined | null;
}
```

### InputCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，以便对从此组件发出的 Ionic 事件进行更严格的类型检查。

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
