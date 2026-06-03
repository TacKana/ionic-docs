---
title: "ion-radio-group"
---
import Props from '@ionic-internal/component-api/v8/radio-group/props.md';
import Events from '@ionic-internal/component-api/v8/radio-group/events.md';
import Methods from '@ionic-internal/component-api/v8/radio-group/methods.md';
import Parts from '@ionic-internal/component-api/v8/radio-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/radio-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/radio-group/slots.md';

<head>
  <title>ion-radio-group：Ionic 应用的单选按钮组用法</title>
  <meta name="description" content="单选按钮组是一组单选按钮。单选按钮组允许用户从一组中最多选择一个单选按钮。了解更多关于 ion-radio-group 用法的信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


单选按钮组是一组[单选按钮](./radio)的容器。它允许用户从一组中最多选择一个单选按钮。选中属于某个单选按钮组的一个单选按钮会取消选中同一组中先前选中的任何单选按钮。有关单选按钮组的示例用法，请参阅 [radio](./radio) 文档。


## 接口

### RadioGroupChangeEventDetail

```typescript
interface RadioGroupChangeEventDetail<T = any> {
  value: T;
}
```

### RadioGroupCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

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
