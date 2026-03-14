---
title: 'ion-accordion-group'
---

import Props from '@ionic-internal/component-api/v7/accordion-group/props.md';
import Events from '@ionic-internal/component-api/v7/accordion-group/events.md';
import Methods from '@ionic-internal/component-api/v7/accordion-group/methods.md';
import Parts from '@ionic-internal/component-api/v7/accordion-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/accordion-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/accordion-group/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

手风琴组（accordion group）是手风琴（accordion）实例的容器。它负责管理手风琴的状态，并提供键盘导航功能。

更多信息请参阅[手风琴（Accordion）](./accordion)文档。

## 接口

### AccordionGroupChangeEventDetail

```typescript
interface AccordionGroupChangeEventDetail<T = any> {
  value: T;
}
```

### AccordionGroupCustomEvent

虽然不是必需的，但可以使用此接口替代 `CustomEvent` 接口，以便在使用此组件发出的 Ionic 事件时获得更强的类型支持。

```typescript
interface AccordionGroupCustomEvent<T = any> extends CustomEvent {
  detail: AccordionGroupChangeEventDetail<T>;
  target: HTMLIonAccordionGroupElement;
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