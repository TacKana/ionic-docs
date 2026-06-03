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
  <title>Ionic Textarea 组件及多行输入的 CSS 属性</title>
  <meta
    name="description"
    content="Textarea 用于多行输入。该组件除了 Ionic 属性外，还接受原生 textarea 属性。阅读了解使用和 CSS 元素。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

textarea 组件用于多行文本输入。组件内部渲染了一个原生 textarea 元素。通过控制原生 textarea，改进了 textarea 组件的用户体验和交互性。

与原生 textarea 元素不同，Ionic textarea 不支持从内部内容加载其值。textarea 值应在 `value` 属性中设置。

textarea 组件除了 Ionic 属性外，还接受[原生 textarea 属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea)。

## 基本用法

import BasicPlayground from '@site/static/usage/v7/textarea/basic/index.md';

<BasicPlayground />

## 标签

标签应用于描述 textarea。它们可以在视觉上使用，当用户聚焦 textarea 时，屏幕阅读器也会将其读出。这使用户能够轻松理解 textarea 的用途。Textarea 有几种分配标签的方式：

- `label` 属性：用于纯文本标签
- `label` 插槽：用于自定义 HTML 标签（实验性）
- `aria-label`：用于为屏幕阅读器提供标签，但不添加可见标签

### 标签位置

默认情况下，标签将占用其内容的宽度。开发者可以使用 `labelPlacement` 属性控制标签相对于控件的位置。

import LabelPlacement from '@site/static/usage/v7/textarea/label-placement/index.md';

<LabelPlacement />

### 标签插槽（实验性）

虽然纯文本标签应通过 `label` 属性传递，但如果需要自定义 HTML，可以通过 `label` 插槽传递。

请注意，此功能被认为是实验性的，因为它依赖于 [Web Component 插槽](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components/Using_templates_and_slots)的模拟版本。因此，模拟行为可能与原生插槽行为不完全一致。

import LabelSlot from '@site/static/usage/v7/textarea/label-slot/index.md';

<LabelSlot />

### 无可见标签

如果不需要可见标签，开发者仍应提供 `aria-label`，以便屏幕阅读器可以访问 textarea。

import NoVisibleLabel from '@site/static/usage/v7/textarea/no-visible-label/index.md';

<NoVisibleLabel />

## 填充样式 Textarea

Material Design 为 textarea 提供了填充样式。项目上的 `fill` 属性可以设置为 `"solid"` 或 `"outline"`。

由于 `fill` 样式在视觉上定义了 textarea 容器，使用 `fill` 的 textarea 不应在 `ion-item` 中使用。

填充 textarea 可以通过将 Textarea 的 `mode` 设置为 `md` 在 iOS 上使用。

import Fill from '@site/static/usage/v7/textarea/fill/index.md';

<Fill />

## 帮助和错误文本

可以使用 `helperText` 和 `errorText` 属性在 textarea 内部使用帮助和错误文本。除非将 `ion-invalid` 和 `ion-touched` 类添加到 `ion-textarea`，否则错误文本不会显示。这确保在用户有机会输入数据之前不会显示错误。

在 Angular 中，这是通过表单验证自动完成的。在 JavaScript、React 和 Vue 中，需要根据你自己的验证手动添加类。

import HelperError from '@site/static/usage/v7/textarea/helper-error/index.md';

<HelperError />

## Textarea 计数器

textarea 计数器是显示在 textarea 下方的文本，用于通知用户已输入了多少字符以及 textarea 总共可以接受多少字符。添加计数器时，默认行为是格式化为 `inputLength` / `maxLength` 的显示值。可以通过向 `counterFormatter` 属性传递格式化函数来自定义此行为。

import Counter from '@site/static/usage/v7/textarea/counter/index.md';

<Counter />

## 自动增长

当 `autoGrow` 属性设置为 `true` 时，textarea 将根据其内容增长和收缩。

import AutogrowPlayground from '@site/static/usage/v7/textarea/autogrow/index.md';

<AutogrowPlayground />

## 编辑时清除

将 `clearOnEdit` 属性设置为 `true` 将在 textarea 失焦后再次输入时清除内容。

import ClearOnEditPlayground from '@site/static/usage/v7/textarea/clear-on-edit/index.md';

<ClearOnEditPlayground />

## 开始和结束插槽（实验性）

`start` 和 `end` 插槽可用于在 textarea 的任一侧放置图标、按钮或前缀/后缀文本。

请注意，此功能被认为是实验性的，因为它依赖于 [Web Component 插槽](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components/Using_templates_and_slots)的模拟版本。因此，模拟行为可能与原生插槽行为不完全一致。

:::note
在大多数情况下，放置在这些插槽中的[图标](./icon.md)组件应设置 `aria-hidden="true"`。更多信息请参阅[图标无障碍文档](https://ionicframework.com/docs/api/icon#accessibility)。

如果插槽内容需要交互，应将其包裹在交互元素中，如[按钮](./button.md)。这确保内容可以通过 Tab 键聚焦。
:::

import StartEndSlots from '@site/static/usage/v7/textarea/start-end-slots/index.md';

<StartEndSlots />

## 从旧版 Textarea 语法迁移

Ionic 7.0 引入了更简单的 textarea 语法。这种新语法减少了设置 textarea 所需的样板代码，解决了无障碍访问问题，并改善了开发者体验。

开发者可以逐个迁移每个 textarea。虽然开发者可以继续使用旧版语法，但我们建议尽快迁移。

### 使用现代语法

使用现代语法包括三个步骤：

1. 移除 `ion-label`，改用在 `ion-textarea` 上使用 `label` 属性。标签的位置可以使用 `ion-textarea` 上的 `labelPlacement` 属性配置。
2. 将 textarea 特定的属性从 `ion-item` 移到 `ion-textarea` 上。这包括 `counter`、`counterFormatter`、`fill` 和 `shape` 属性。
3. 移除 `ion-item` 上的 `helper` 和 `error` 插槽的使用，改用在 `ion-textarea` 上使用 `helperText` 和 `errorText` 属性。

import Migration from '@site/static/usage/v7/textarea/migration/index.md';

<Migration />

### 使用旧版语法

Ionic 使用启发式方法检测应用是否在使用现代 textarea 语法。在某些情况下，继续使用旧版语法可能更可取。开发者可以将 `ion-textarea` 上的 `legacy` 属性设置为 `true`，以强制该 textarea 实例使用旧版语法。

## 主题

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

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

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

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
