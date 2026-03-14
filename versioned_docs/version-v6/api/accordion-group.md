---
title: 'ion-accordion-group'
---

import Props from '@ionic-internal/component-api/v6/accordion-group/props.md';
import Events from '@ionic-internal/component-api/v6/accordion-group/events.md';
import Methods from '@ionic-internal/component-api/v6/accordion-group/methods.md';
import Parts from '@ionic-internal/component-api/v6/accordion-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/accordion-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/accordion-group/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

折叠面板组（accordion group）是折叠面板实例的容器。它管理折叠面板的状态并提供键盘导航功能。

更多信息请参阅 [Accordion](./accordion) 文档。

## 接口

### AccordionGroupChangeEventDetail

```typescript
interface AccordionGroupChangeEventDetail<T = any> {
  value: T;
}
```

### AccordionGroupCustomEvent

虽然不强制要求，但使用这个接口可以替代 `CustomEvent` 接口，从而在使用 Ionic 组件发出的事件时获得更强的类型支持。

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