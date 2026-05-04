---
title: 'ion-textarea'
---

import Props from '@ionic-internal/component-api/v7/textarea/props.md';
import Events from '@ionic-internal/component-api/v7/textarea/events.md';
import Methods from '@ionic-internal/component-api/v7/textarea/methods.md';
import Parts from '@ionic-internal/component-api/v7/textarea/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/textarea/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/textarea/slots.md';

<head>
  <title>Ionic 多行文本输入框组件与 CSS 属性</title>
  <meta
    name="description"
    content="Textarea 用于多行文本输入。该组件除了支持 Ionic 属性外，还接受原生 textarea 属性。阅读本文了解使用方法和 CSS 元素。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

textarea 组件用于多行文本输入。组件内部会渲染一个原生的 textarea 元素。通过对原生 textarea 的控制，textarea 组件的用户体验和交互性得到了提升。

与原生 textarea 元素不同，Ionic 的 textarea 不支持从内部内容加载其值。textarea 的值应通过 `value` 属性设置。

textarea 组件除了支持 Ionic 属性外，还接受[原生 textarea 属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)。

## 基本用法

import BasicPlayground from '@site/static/usage/v7/textarea/basic/index.md';

<BasicPlayground />

## 标签

标签应用于描述 textarea。它们既可以在视觉上使用，也会在用户聚焦 textarea 时被屏幕阅读器朗读。这使得用户能够轻松理解 textarea 的用途。Textarea 提供了多种分配标签的方式：

- `label` 属性：用于纯文本标签
- `label` 插槽：用于自定义 HTML 标签（实验性功能）
- `aria-label`：用于为屏幕阅读器提供标签，但不会添加可见标签

### 标签位置

默认情况下，标签将占据其内容的宽度。开发者可以使用 `labelPlacement` 属性来控制标签相对于控件的位置。

import LabelPlacement from '@site/static/usage/v7/textarea/label-placement/index.md';

<LabelPlacement />

### 标签插槽（实验性）

虽然纯文本标签应通过 `label` 属性传递，但如果需要自定义 HTML，可以通过 `label` 插槽传递。

请注意，此功能被视为实验性功能，因为它依赖于[Web 组件插槽](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)的模拟版本。因此，模拟行为可能与原生插槽行为不完全匹配。

import LabelSlot from '@site/static/usage/v7/textarea/label-slot/index.md';

<LabelSlot />

### 无可见标签

如果不需要可见标签，开发者仍应提供 `aria-label`，以便 textarea 能够被屏幕阅读器访问。

import NoVisibleLabel from '@site/static/usage/v7/textarea/no-visible-label/index.md';

<NoVisibleLabel />

## 填充式文本输入框

Material Design 为 textarea 提供了填充样式。可以在 item 上将 `fill` 属性设置为 `"solid"` 或 `"outline"`。

由于 `fill` 样式在视觉上定义了 textarea 容器，因此使用 `fill` 的 textarea 不应在 `ion-item` 中使用。

通过在 textarea 上将 `mode` 设置为 `md`，可以在 iOS 上使用填充式 textarea。

import Fill from '@site/static/usage/v7/textarea/fill/index.md';

<Fill />

## 辅助文本与错误文本

辅助文本和错误文本可以通过 `helperText` 和 `errorText` 属性在 textarea 内部使用。除非将 `ion-invalid` 和 `ion-touched` 类添加到 `ion-textarea`，否则错误文本不会显示。这确保了在用户有机会输入数据之前不会显示错误。

在 Angular 中，这是通过表单验证自动完成的。在 JavaScript、React 和 Vue 中，需要根据你自己的验证手动添加该类。

import HelperError from '@site/static/usage/v7/textarea/helper-error/index.md';

<HelperError />

## 文本输入框计数器

textarea 计数器是显示在 textarea 下方的文本，用于通知用户已输入的字符数占 textarea 可接受字符总数的比例。添加计数器时，默认行为是将显示的值格式化为 `inputLength` / `maxLength`。可以通过向 `counterFormatter` 属性传递格式化函数来自定义此行为。

import Counter from '@site/static/usage/v7/textarea/counter/index.md';

<Counter />

## 自动增长

将 `autoGrow` 属性设置为 `true` 时，textarea 将根据其内容自动增长和收缩。

import AutogrowPlayground from '@site/static/usage/v7/textarea/autogrow/index.md';

<AutogrowPlayground />

## 编辑时清除

将 `clearOnEdit` 属性设置为 `true` 将在 textarea 失去焦点后再次键入时清除其内容。

import ClearOnEditPlayground from '@site/static/usage/v7/textarea/clear-on-edit/index.md';

<ClearOnEditPlayground />

## 起始和结束插槽（实验性）

`start` 和 `end` 插槽可用于在 textarea 的任一侧放置图标、按钮或前缀/后缀文本。

请注意，此功能被视为实验性功能，因为它依赖于[Web 组件插槽](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)的模拟版本。因此，模拟行为可能与原生插槽行为不完全匹配。

:::note
在大多数情况下，放置在这些插槽中的[图标](./icon.md)组件应具有 `aria-hidden="true"`。有关更多信息，请参阅[图标无障碍性文档](https://ionicframework.com/docs/api/icon#accessibility)。

如果插槽内容需要交互，应将其包装在交互式元素中，例如[按钮](./button.md)。这确保了内容可以通过 Tab 键访问。
:::

import StartEndSlots from '@site/static/usage/v7/textarea/start-end-slots/index.md';

<StartEndSlots />

<LegacyAnchor id="migrating-from-legacy-textarea-syntax" />

## 从旧版 Textarea 语法迁移

Ionic 7.0 引入了更简洁的 textarea 语法。这种新语法减少了设置 textarea 所需的样板代码，解决了无障碍性问题，并改善了开发者体验。

开发者可以一次迁移一个 textarea。虽然开发者可以继续使用旧版语法，但我们建议尽快迁移。

### 使用现代语法

使用现代语法涉及三个步骤：

1. 移除 `ion-label`，改为在 `ion-textarea` 上使用 `label` 属性。可以使用 `ion-textarea` 上的 `labelPlacement` 属性配置标签位置。
2. 将 textarea 特定的属性从 `ion-item` 移动到 `ion-textarea` 上。这包括 `counter`、`counterFormatter`、`fill` 和 `shape` 属性。
3. 移除 `ion-item` 上对 `helper` 和 `error` 插槽的使用，改为使用 `ion-textarea` 上的 `helperText` 和 `errorText` 属性。

import Migration from '@site/static/usage/v7/textarea/migration/index.md';

<Migration />

### 使用旧版语法

Ionic 使用启发式方法检测应用是否使用现代 textarea 语法。在某些情况下，可能更倾向于继续使用旧版语法。开发者可以将 `ion-textarea` 上的 `legacy` 属性设置为 `true`，以强制该 textarea 实例使用旧版语法。

## 主题定制

import ThemingPlayground from '@site/static/usage/v7/textarea/theming/index.md';

<ThemingPlayground />

## 接口

### TextareaChangeEventDetail

```typescript
interface TextareaChangeEventDetail {
  value?: string | null;
}
```

### TextareaCustomEvent

虽然不是必需的，但可以使用此接口替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更强的类型检查。

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

## CSS Shadow Parts

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
