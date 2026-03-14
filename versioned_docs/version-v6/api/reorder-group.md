---
title: 'ion-reorder-group'
---

import Props from '@ionic-internal/component-api/v6/reorder-group/props.md';
import Events from '@ionic-internal/component-api/v6/reorder-group/events.md';
import Methods from '@ionic-internal/component-api/v6/reorder-group/methods.md';
import Parts from '@ionic-internal/component-api/v6/reorder-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/reorder-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/reorder-group/slots.md';

<head>
  <title>ion-reorder-group：Ionic 框架应用中的包装组件</title>
  <meta
    name="description"
    content="ion-reorder-group 是在 Ionic 应用中使用 ion-reorder 组件项目的包装容器。阅读本文以了解更多关于 ion-reorder-group 的使用方法。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

重新排序组是使用 [reorder](./reorder) 组件项目的容器。当用户拖拽某个项目并将其放置到新位置时，将触发 `ionItemReorder` 事件。需要为该事件实现一个处理函数，该函数应调用 `complete` 方法。

`ionItemReorder` 事件的 `detail` 属性包含了关于重新排序操作的所有相关信息，包括 `from` 和 `to` 索引。在重新排序的上下文中，一个项目会从某个索引 `from` 移动到新索引 `to`。关于重新排序组的使用示例，请参阅 [reorder](./reorder) 文档。

## 接口

### ItemReorderEventDetail

```typescript
interface ItemReorderEventDetail {
  from: number;
  to: number;
  complete: (data?: boolean | any[]) => any;
}
```

### ItemReorderCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，以便对从该组件发出的 Ionic 事件进行更严格的类型检查。

```typescript
interface ItemReorderCustomEvent extends CustomEvent {
  detail: ItemReorderEventDetail;
  target: HTMLIonReorderGroupElement;
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