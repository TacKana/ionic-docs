---
title: 'ion-checkbox'
---

import Props from '@ionic-internal/component-api/v6/checkbox/props.md';
import Events from '@ionic-internal/component-api/v6/checkbox/events.md';
import Methods from '@ionic-internal/component-api/v6/checkbox/methods.md';
import Parts from '@ionic-internal/component-api/v6/checkbox/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/checkbox/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/checkbox/slots.md';

<head>
  <title>ion-checkbox 复选框：用于选择多个选项的 Ionic 应用组件</title>
  <meta
    name="description"
    content="ion-checkbox 允许从一组选项中选择多个选项，激活时显示为选中（打勾）状态。了解适用于 Ionic 应用的复选框组件。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

复选框允许用户从一组选项中选择多个选项。当激活时，它们会显示为选中（打勾）状态。点击复选框将切换 `checked` 属性。也可以通过设置 `checked` 属性以编程方式选中它们。

## 基本用法

import Basic from '@site/static/usage/v6/checkbox/basic/index.md';

<Basic />

## 不确定状态复选框

import Indeterminate from '@site/static/usage/v6/checkbox/indeterminate/index.md';

<Indeterminate />

## 主题定制

### CSS 自定义属性

import CSSProps from '@site/static/usage/v6/checkbox/theming/css-properties/index.md';

<CSSProps />

## 接口定义

### CheckboxChangeEventDetail

```typescript
interface CheckboxChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### CheckboxCustomEvent

虽然不是必需的，但可以使用此接口替代 `CustomEvent` 接口，从而为从该组件发出的 Ionic 事件提供更强的类型约束。

```typescript
interface CheckboxCustomEvent<T = any> extends CustomEvent {
  detail: CheckboxChangeEventDetail<T>;
  target: HTMLIonCheckboxElement;
}
```

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS Shadow 部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
