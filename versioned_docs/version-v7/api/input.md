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
  <title>ion-input：具有样式和 CSS 属性的自定义输入</title>
  <meta
    name="description"
    content="ion-input 是对 HTML input 元素的封装，具有自定义值类型样式和功能。可在桌面使用并与移动键盘集成。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

输入组件是对 HTML input 元素的封装，具有自定义样式和额外功能。它接受与 HTML input 大多数相同的属性，但在桌面设备上表现出色，并与移动设备上的键盘集成。

## 基本用法

import Basic from '@site/static/usage/v7/input/basic/index.md';

<Basic />

## 类型

输入组件仅适用于文本类型输入，例如 `"text"`、`"password"`、`"email"`、`"number"`、`"search"`、`"tel"` 和 `"url"`。它支持所有标准文本输入事件，包括 `keyup`、`keydown`、`keypress` 等。默认 `type` 为 `"text"`。

import Types from '@site/static/usage/v7/input/types/index.md';

<Types />

## 标签

标签应用于描述输入。它们可以在视觉上使用，当用户聚焦输入时，屏幕阅读器也会将其读出。这使用户能够轻松理解输入的用途。输入有几种分配标签的方式：

- `label` 属性：用于纯文本标签
- `label` 插槽：用于自定义 HTML 标签（实验性）
- `aria-label`：用于为屏幕阅读器提供标签，但不添加可见标签

### 标签位置

默认情况下，标签将占用其内容的宽度。开发者可以使用 `labelPlacement` 属性控制标签相对于控件的位置。

import LabelPlacement from '@site/static/usage/v7/input/label-placement/index.md';

<LabelPlacement />

### 标签插槽（实验性）

虽然纯文本标签应通过 `label` 属性传递，但如果需要自定义 HTML，可以通过 `label` 插槽传递。

请注意，此功能被认为是实验性的，因为它依赖于 [Web Component 插槽](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components/Using_templates_and_slots)的模拟版本。因此，模拟行为可能与原生插槽行为不完全一致。

import LabelSlot from '@site/static/usage/v7/input/label-slot/index.md';

<LabelSlot />

### 无可见标签

如果不需要可见标签，开发者仍应提供 `aria-label`，以便屏幕阅读器可以访问输入。

import NoVisibleLabel from '@site/static/usage/v7/input/no-visible-label/index.md';

<NoVisibleLabel />

## 清除选项

输入提供两种根据交互方式清除输入的选项。第一种是添加 `clearInput` 属性，当输入有 `value` 时会显示清除按钮。第二种是 `clearOnEdit` 属性，它在输入失焦后再次输入时清除输入。`type` 设置为 `"password"` 的输入默认启用 `clearOnEdit`。

import Clear from '@site/static/usage/v7/input/clear/index.md';

<Clear />

## 填充样式输入

Material Design 为输入提供了填充样式。输入上的 `fill` 属性可以设置为 `"solid"` 或 `"outline"`。

由于 `fill` 样式在视觉上定义了输入容器，使用 `fill` 的输入不应在 `ion-item` 中使用。

填充输入可以通过将输入的 `mode` 设置为 `md` 在 iOS 上使用。

import Fill from '@site/static/usage/v7/input/fill/index.md';

<Fill />

## 帮助和错误文本

可以使用 `helperText` 和 `errorText` 属性在输入内部使用帮助和错误文本。除非将 `ion-invalid` 和 `ion-touched` 类添加到 `ion-input`，否则错误文本不会显示。这确保在用户有机会输入数据之前不会显示错误。

在 Angular 中，这是通过表单验证自动完成的。在 JavaScript、React 和 Vue 中，需要根据你自己的验证手动添加类。

import HelperError from '@site/static/usage/v7/input/helper-error/index.md';

<HelperError />

## 输入计数器

输入计数器是显示在输入下方的文本，用于通知用户已输入了多少字符以及输入总共可以接受多少字符。添加计数器时，默认行为是格式化为 `inputLength` / `maxLength` 的显示值。可以通过向 `counterFormatter` 属性传递格式化函数来自定义此行为。

`ion-item` 上的 `counter` 和 `counterFormatter` 属性已在 [Ionic 7 中弃用](#使用现代语法)，应直接用于 `ion-input`。

import Counter from '@site/static/usage/v7/input/counter/index.md';

<Counter />

带有计数器的输入在输入和计数器之间添加了边框，因此不应放置在会在项目下方添加额外边框的 `ion-item` 内部。可以添加 `ion-padding-start` 类来使计数器输入与项目内部的输入对齐。

import CounterAlignment from '@site/static/usage/v7/input/counter-alignment/index.md';

<CounterAlignment />

## 过滤用户输入

开发者可以使用 `ionInput` 事件根据用户输入（如 `keypress`）更新输入值。这对于过滤掉无效或不需要的字符非常有用。

将值存储在状态变量中时，我们建议同时更新状态变量和 `ion-input` 组件值。这可确保状态变量和 `ion-input` 组件值保持同步。

import FilteringData from '@site/static/usage/v7/input/filtering/index.md';

<FilteringData />

## 输入掩码

输入掩码是约束输入以支持有效输入值的表达式。Ionic 建议使用 [Maskito](https://maskito.dev) 进行输入掩码。Maskito 是一个轻量级、无依赖的用于掩码输入字段的库。它支持广泛的掩码，包括电话号码、信用卡、日期等。

要开始使用 Maskito，请安装该库：

```bash
npm install @maskito/core @maskito/{angular,react,vue}
```

import Masking from '@site/static/usage/v7/input/mask/index.md';

<Masking />

:::note

请将 Maskito 的错误报告提交到 [Maskito GitHub 仓库](https://github.com/taiga-family/maskito/issues)。技术支持请使用 [Ionic Forum](https://forum.ionicframework.com/) 或 [Ionic Discord](http://chat.ionicframework.com/)。

:::

## 开始和结束插槽（实验性）

`start` 和 `end` 插槽可用于在输入的任一侧放置图标、按钮或前缀/后缀文本。

请注意，此功能被认为是实验性的，因为它依赖于 [Web Component 插槽](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components/Using_templates_and_slots)的模拟版本。因此，模拟行为可能与原生插槽行为不完全一致。

:::note
在大多数情况下，放置在这些插槽中的[图标](./icon.md)组件应设置 `aria-hidden="true"`。更多信息请参阅[图标无障碍文档](https://ionicframework.com/docs/api/icon#accessibility)。

如果插槽内容需要交互，应将其包裹在交互元素中，如[按钮](./button.md)。这确保内容可以通过 Tab 键聚焦。
:::

import StartEndSlots from '@site/static/usage/v7/input/start-end-slots/index.md';

<StartEndSlots />

## 主题

### 颜色

设置 `color` 属性会更改每个输入的色调。在 `ios` 模式下，此属性更改光标颜色。在 `md` 模式下，此属性更改光标颜色和高亮/下划线颜色。

:::note
`color` 属性_不会_更改输入的文本颜色。为此，请使用 [`--color` CSS 属性](#css-自定义属性-1)。
:::

import Colors from '@site/static/usage/v7/input/theming/colors/index.md';

<Colors />

### CSS 自定义属性

Input 使用 scoped 封装，这意味着它会在运行时通过为每个样式追加额外类来自动限定 CSS 作用域。在 CSS 中覆盖 scoped 选择器需要[更高的特异性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)选择器。直接定位 `ion-input` 进行自定义将不起作用；因此我们建议添加一个类并以这种方式进行自定义。

import CSSProps from '@site/static/usage/v7/input/theming/css-properties/index.md';

<CSSProps />

## 从旧版输入语法迁移

Ionic 7.0 引入了更简单的输入语法。这种新语法减少了设置输入所需的样板代码，解决了无障碍访问问题，并改善了开发者体验。

开发者可以逐个迁移每个输入。虽然开发者可以继续使用旧版语法，但我们建议尽快迁移。

### 使用现代语法

使用现代语法包括三个步骤：

1. 移除 `ion-label`，改用在 `ion-input` 上使用 `label` 属性。标签的位置可以使用 `ion-input` 上的 `labelPlacement` 属性配置。
2. 将输入特定的属性从 `ion-item` 移到 `ion-input` 上。这包括 `counter`、`counterFormatter`、`fill` 和 `shape` 属性。
3. 移除 `ion-item` 上的 `helper` 和 `error` 插槽的使用，改用在 `ion-input` 上使用 `helperText` 和 `errorText` 属性。

import Migration from '@site/static/usage/v7/input/migration/index.md';

<Migration />

### 使用旧版语法

Ionic 使用启发式方法检测应用是否在使用现代输入语法。在某些情况下，继续使用旧版语法可能更可取。开发者可以将 `ion-input` 上的 `legacy` 属性设置为 `true`，以强制该输入实例使用旧版语法。

## 接口

### InputChangeEventDetail

```typescript
interface InputChangeEventDetail {
  value: string | undefined | null;
}
```

### InputCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

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

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
