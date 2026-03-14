---
title: 'ion-reorder-group'
---

import Props from '@ionic-internal/component-api/v7/reorder-group/props.md';
import Events from '@ionic-internal/component-api/v7/reorder-group/events.md';
import Methods from '@ionic-internal/component-api/v7/reorder-group/methods.md';
import Parts from '@ionic-internal/component-api/v7/reorder-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/reorder-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/reorder-group/slots.md';

<head>
  <title>ion-reorder-group：用于拖拽排序项的容器组件</title>
  <meta
    name="description"
    content="ion-reorder-group 是一个容器组件，用于包裹 Ionic 应用中使用 ion-reorder 组件的项目。阅读本文以了解更多关于 ion-reorder-group 的使用方法。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

排序组是使用 [reorder](./reorder) 组件的项目的容器。当用户拖动一个项目并将其放置到新位置时，会触发 `ionItemReorder` 事件。应为此事件实现一个处理程序，并调用 `complete` 方法。

`ionItemReorder` 事件的 `detail` 属性包含了有关排序操作的所有相关信息，包括 `from` 和 `to` 索引。在排序的上下文中，一个项目会从 `from` 索引移动到 `to` 索引。有关排序组的使用示例，请参阅 [reorder](./reorder) 文档。

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

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更严格的类型检查。

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