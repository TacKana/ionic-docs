---
title: 'ion-radio-group'
---

import Props from '@ionic-internal/component-api/v7/radio-group/props.md';
import Events from '@ionic-internal/component-api/v7/radio-group/events.md';
import Methods from '@ionic-internal/component-api/v7/radio-group/methods.md';
import Parts from '@ionic-internal/component-api/v7/radio-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/radio-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/radio-group/slots.md';

<head>
  <title>ion-radio-group：Ionic 应用的单选按钮组使用方法</title>
  <meta
    name="description"
    content="单选按钮组是一组单选按钮的容器。它允许用户从一组选项中最多选择一个单选按钮。深入了解 ion-radio-group 的使用方法。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

单选按钮组是一组 [单选按钮](./radio) 的容器。它允许用户从一组选项中最多选择一个单选按钮。当选中属于同一组的某个单选按钮时，之前在该组内选中的任何其他单选按钮都将被取消选中。有关单选按钮组的使用示例，请参阅 [单选按钮](./radio) 文档。

## 接口

### RadioGroupChangeEventDetail

```typescript
interface RadioGroupChangeEventDetail<T = any> {
  value: T;
}
```

### RadioGroupCustomEvent

虽然不是必需的，但可以使用此接口替代 `CustomEvent` 接口，以便在使用此组件触发的 Ionic 事件时获得更严格的类型检查。

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

## CSS 影子部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />