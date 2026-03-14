---
title: 多行文本输入框组件及 CSS 属性
---
import Props from '@ionic-internal/component-api/v8/textarea/props.md';
import Events from '@ionic-internal/component-api/v8/textarea/events.md';
import Methods from '@ionic-internal/component-api/v8/textarea/methods.md';
import Parts from '@ionic-internal/component-api/v8/textarea/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/textarea/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/textarea/slots.md';

<head>
  <title>Ionic 多行文本输入框组件及 CSS 属性</title>
  <meta name="description" content="Textarea 用于多行文本输入。该组件除了 Ionic 属性外，还接受原生 textarea 属性。阅读以了解其使用方法和 CSS 元素。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

文本输入框组件用于多行文本输入。组件内部会渲染一个原生 textarea 元素。通过控制原生 textarea，提升了文本输入框组件的用户体验和交互性。

与原生 textarea 元素不同，Ionic 文本输入框不支持从其内部内容加载值。文本输入框的值应通过 `value` 属性设置。

除了 Ionic 属性外，文本输入框组件还接受[原生 textarea 属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)。

## 基本用法

import BasicPlayground from '@site/static/usage/v8/textarea/basic/index.md';

<BasicPlayground />

## 标签

标签应用来描述文本输入框。它们在视觉上使用，当用户聚焦到文本输入框时，屏幕阅读器也会朗读它们。这使得用户易于理解文本输入框的用途。Textarea 有几种分配标签的方式：

- `label` 属性：用于纯文本标签
- `label` 插槽：用于自定义 HTML 标签（实验性功能）
- `aria-label`：用于为屏幕阅读器提供标签，但不添加可见标签

### 标签位置

默认情况下，标签将占用其内容的宽度。开发人员可以使用 `labelPlacement` 属性来控制标签相对于控件的位置。

import LabelPlacement from '@site/static/usage/v8/textarea/label-placement/index.md';

<LabelPlacement />

### 标签插槽（实验性功能）

虽然纯文本标签应通过 `label` 属性传入，但如果需要自定义 HTML，可以通过 `label` 插槽传入。

请注意，此功能被视为实验性功能，因为它依赖于[Web 组件插槽](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)的模拟版本。因此，模拟行为可能与原生插槽行为不完全匹配。

import LabelSlot from '@site/static/usage/v8/textarea/label-slot/index.md';

<LabelSlot />

### 无可见标签

如果不需要可见标签，开发人员仍应提供 `aria-label`，以便屏幕阅读器可以访问文本输入框。

import NoVisibleLabel from '@site/static/usage/v8/textarea/no-visible-label/index.md';

<NoVisibleLabel />

## 填充式文本输入框

Material Design 为文本输入框提供了填充样式。可以通过将项目的 `fill` 属性设置为 `"solid"` 或 `"outline"` 来使用。

在 iOS 上也可以通过将文本输入框的 `mode` 设置为 `md` 来使用填充式文本输入框。

:::warning
由于组件之间的样式冲突，使用 `fill` 的文本输入框不应在 `ion-item` 中使用。
:::

import Fill from '@site/static/usage/v8/textarea/fill/index.md';

<Fill />

## 辅助文本与错误文本

可以在文本输入框内使用 `helperText` 和 `errorText` 属性来显示辅助文本和错误文本。除非将 `ion-invalid` 和 `ion-touched` 类添加到 `ion-textarea` 上，否则错误文本不会显示。这确保了在用户有机会输入数据之前不会显示错误。

在 Angular 中，这通过表单验证自动完成。在 JavaScript、React 和 Vue 中，需要根据你自己的验证手动添加类。

import HelperError from '@site/static/usage/v8/textarea/helper-error/index.md';

<HelperError />

## 文本输入框计数器

文本输入框计数器是显示在文本输入框下方的文本，用于通知用户已输入了多少字符以及文本输入框可接受的总字符数。添加计数器时，默认行为是将显示的值格式化为 `inputLength` / `maxLength`。可以通过向 `counterFormatter` 属性传入格式化函数来自定义此行为。

import Counter from '@site/static/usage/v8/textarea/counter/index.md';

<Counter />

## 自动增长

当 `autoGrow` 属性设置为 `true` 时，文本输入框将根据其内容自动增长和收缩。

import AutogrowPlayground from '@site/static/usage/v8/textarea/autogrow/index.md';

<AutogrowPlayground />

## 编辑时清除

将 `clearOnEdit` 属性设置为 `true` 将在文本输入框失焦后再次输入时清除其内容。

import ClearOnEditPlayground from '@site/static/usage/v8/textarea/clear-on-edit/index.md';

<ClearOnEditPlayground />

## 起始与结束插槽（实验性功能）

`start` 和 `end` 插槽可用于在文本输入框的任一侧放置图标、按钮或前缀/后缀文本。

请注意，此功能被视为实验性功能，因为它依赖于[Web 组件插槽](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)的模拟版本。因此，模拟行为可能与原生插槽行为不完全匹配。

:::note
在大多数情况下，放置在这些插槽中的[图标](./icon.md)组件应设置 `aria-hidden="true"`。有关更多信息，请参阅[图标无障碍文档](https://ionicframework.com/docs/api/icon#accessibility)。

如果插槽内容需要交互，应将其包装在交互式元素中，例如[按钮](./button.md)。这确保了内容可以通过 Tab 键导航到。
:::

import StartEndSlots from '@site/static/usage/v8/textarea/start-end-slots/index.md';

<StartEndSlots />

## 主题

import ThemingPlayground from '@site/static/usage/v8/textarea/theming/index.md';

<ThemingPlayground />

## 接口

### TextareaChangeEventDetail

```typescript
interface TextareaChangeEventDetail {
  value?: string | null;
}
```

### TextareaCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，以便为此组件发出的 Ionic 事件提供更强的类型。

```typescript
interface TextareaCustomEvent extends CustomEvent {
  detail: TextareaChangeEventDetail;
  target: HTMLIonTextareaElement;
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

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />