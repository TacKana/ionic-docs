---
title: 'ion-radio-group'
---

import Props from '@ionic-internal/component-api/v6/radio-group/props.md';
import Events from '@ionic-internal/component-api/v6/radio-group/events.md';
import Methods from '@ionic-internal/component-api/v6/radio-group/methods.md';
import Parts from '@ionic-internal/component-api/v6/radio-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/radio-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/radio-group/slots.md';

<head>
  <title>ion-radio-group | Ionic 应用的单选按钮组用法</title>
  <meta
    name="description"
    content="单选按钮组是一组单选按钮的容器。它允许用户从一组中选择最多一个单选按钮。了解更多关于 ion-radio-group 的用法。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

单选按钮组是一组[单选按钮](./radio)的容器。它允许用户从一组中选择最多一个单选按钮。选中属于同一个单选按钮组中的某个按钮时，会自动取消同组内先前选中的按钮。关于单选按钮组的使用示例，请参阅[单选按钮](./radio)文档。

## 接口

### RadioGroupChangeEventDetail

```typescript
interface RadioGroupChangeEventDetail<T = any> {
  value: T;
}
```

### RadioGroupCustomEvent

虽然并非必需，但此接口可用于替代 `CustomEvent` 接口，以便在使用 Ionic 从此组件发出的事件时获得更严格的类型检查。

```typescript
interface RadioGroupCustomEvent<T = any> extends CustomEvent {
  detail: RadioGroupChangeEventDetail<T>;
  target: HTMLIonRadioGroupElement;
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