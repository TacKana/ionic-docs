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
  <title>ion-reorder-group：重新排序项目的包装器组件</title>
  <meta
    name="description"
    content="ion-reorder-group 是在 Ionic 应用中使用 ion-reorder 组件的项目的包装器组件。阅读了解更多关于 ion-reorder-group 的用法。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

重新排序组（Reorder group）是使用[重新排序（reorder）](./reorder)组件的项目的容器。当用户拖动项目并将其放到新位置时，会分发 `ionItemReorder` 事件。应实现该事件的处理程序来调用 `complete` 方法。

`ionItemReorder` 事件的 `detail` 属性包含有关重新排序操作的所有相关信息，包括 `from` 和 `to` 索引。在重新排序的上下文中，项目从一个索引移动到另一个索引。有关重新排序组的用法示例，请参阅[重新排序（reorder）](./reorder)文档。

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

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

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

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
