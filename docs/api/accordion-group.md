---
title: "ion-accordion-group"
---
import Props from '@ionic-internal/component-api/v8/accordion-group/props.md';
import Events from '@ionic-internal/component-api/v8/accordion-group/events.md';
import Methods from '@ionic-internal/component-api/v8/accordion-group/methods.md';
import Parts from '@ionic-internal/component-api/v8/accordion-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/accordion-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/accordion-group/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<head>
  <title>ion-accordion-group：手风琴组容器</title>
  <meta name="description" content="ion-accordion-group 是手风琴实例的容器，管理手风琴的状态并提供键盘导航。了解更多信息。" />
</head>

<EncapsulationPill type="shadow" />

手风琴组是手风琴实例的容器。它管理手风琴的状态并提供键盘导航。

更多信息请参见[手风琴](./accordion)文档。


## Interfaces

### AccordionGroupChangeEventDetail

```typescript
interface AccordionGroupChangeEventDetail<T = any> {
  value: T;
}
```

### AccordionGroupCustomEvent

虽然不是必须的，但可以使用此接口替代 `CustomEvent` 接口，以对此组件发出的 Ionic 事件提供更强的类型支持。

```typescript
interface AccordionGroupCustomEvent<T = any> extends CustomEvent {
  detail: AccordionGroupChangeEventDetail<T>;
  target: HTMLIonAccordionGroupElement;
}
```



## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />
