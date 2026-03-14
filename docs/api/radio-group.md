---
title: 单选按钮组组件
---
import Props from '@ionic-internal/component-api/v8/radio-group/props.md';
import Events from '@ionic-internal/component-api/v8/radio-group/events.md';
import Methods from '@ionic-internal/component-api/v8/radio-group/methods.md';
import Parts from '@ionic-internal/component-api/v8/radio-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/radio-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/radio-group/slots.md';

<head>
  <title>ion-radio-group：Ionic 应用的单选按钮组使用指南</title>
  <meta name="description" content="单选按钮组是包含一组单选按钮的容器。它允许用户从一组选项中选择最多一个。详细了解 ion-radio-group 的使用方法。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

单选按钮组是用于容纳一组[单选按钮](./radio)的容器。它允许用户从一组选项中选择最多一个。选中属于同一单选按钮组中的某个按钮时，之前在该组内选中的任何其他按钮都会自动取消选中。关于单选按钮组的具体用法示例，请参阅[单选按钮](./radio)文档。

## 接口

### RadioGroupChangeEventDetail

```typescript
interface RadioGroupChangeEventDetail<T = any> {
  value: T;
}
```

### RadioGroupCustomEvent

虽然不强制使用，但可以用此接口替代 `CustomEvent` 接口，以便在使用该组件发出的 Ionic 事件时获得更强的类型支持。

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

## CSS Shadow Parts
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />