---
title: 'ion-textarea'
---

import Props from '@ionic-internal/component-api/v6/textarea/props.md';
import Events from '@ionic-internal/component-api/v6/textarea/events.md';
import Methods from '@ionic-internal/component-api/v6/textarea/methods.md';
import Parts from '@ionic-internal/component-api/v6/textarea/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/textarea/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/textarea/slots.md';

<head>
  <title>Ionic 多行输入框组件与 CSS 属性</title>
  <meta
    name="description"
    content="Textarea 用于多行文本输入。该组件除 Ionic 属性外，还接受原生 textarea 属性。了解其使用方法和 CSS 元素。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

textarea 组件用于多行文本输入。组件内部会渲染一个原生的 textarea 元素。通过控制原生 textarea，textarea 组件的用户体验和交互性得到了提升。

与原生 textarea 元素不同，Ionic 的 textarea 不支持从内部内容加载其值。textarea 的值应通过 `value` 属性设置。

除了 Ionic 属性外，textarea 组件还接受 [原生 textarea 属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)。

## 基本用法

import BasicPlayground from '@site/static/usage/v6/textarea/basic/index.md';

<BasicPlayground />

## 自动增长

当 `autoGrow` 属性设置为 `true` 时，textarea 将根据其内容自动增长和收缩。

import AutogrowPlayground from '@site/static/usage/v6/textarea/autogrow/index.md';

<AutogrowPlayground />

## 编辑时清除

将 `clearOnEdit` 属性设置为 `true` 后，textarea 在失去焦点后再次输入时会被清空。

import ClearOnEditPlayground from '@site/static/usage/v6/textarea/clear-on-edit/index.md';

<ClearOnEditPlayground />

## 主题定制

import ThemingPlayground from '@site/static/usage/v6/textarea/theming/index.md';

<ThemingPlayground />

## 接口

### TextareaChangeEventDetail

```typescript
interface TextareaChangeEventDetail {
  value?: string | null;
}
```

### TextareaCustomEvent

虽然并非必需，但可以使用此接口替代 `CustomEvent` 接口，以便在此组件发出的 Ionic 事件中获得更强的类型支持。

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