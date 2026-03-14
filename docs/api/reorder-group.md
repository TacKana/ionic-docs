---
title: 可排序项目容器组件
---
import Props from '@ionic-internal/component-api/v8/reorder-group/props.md';
import Events from '@ionic-internal/component-api/v8/reorder-group/events.md';
import Methods from '@ionic-internal/component-api/v8/reorder-group/methods.md';
import Parts from '@ionic-internal/component-api/v8/reorder-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/reorder-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/reorder-group/slots.md';

<head>
  <title>ion-reorder-group：用于可排序项目的容器组件</title>
  <meta name="description" content="ion-reorder-group 是一个包装容器，用于在 Ionic 应用中使用 ion-reorder 组件的项目。阅读以了解更多关于 ion-reorder-group 的用法。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


重排序组（reorder group）是一个容器，用于包含使用 [reorder](./reorder) 组件的项目。当用户拖拽一个项目并放置时，会触发 `ionReorderEnd` 事件。应当为此事件实现一个处理函数，并调用其中的 `complete` 方法。

`ionReorderEnd` 事件的 `detail` 属性包含了所有与重排序操作相关的信息，包括 `from` 和 `to` 索引。在重排序的上下文中，一个项目从 `from` 索引移动到 `to` 索引。关于重排序组的使用示例，请参阅 [reorder](./reorder) 文档。


## 接口

### ReorderMoveEventDetail

```typescript
interface ReorderMoveEventDetail {
  from: number;
  to: number;
}
```

### ReorderEndEventDetail

```typescript
interface ReorderEndEventDetail {
  from: number;
  to: number;
  complete: (data?: boolean | any[]) => any;
}
```

### ReorderMoveCustomEvent

虽然不是必须的，但可以使用此接口替代 `CustomEvent` 接口，以便在使用此组件触发的 Ionic 事件时获得更强的类型支持。

```typescript
interface ReorderMoveCustomEvent extends CustomEvent {
  detail: ReorderMoveEventDetail;
  target: HTMLIonReorderGroupElement;
}

```

### ReorderEndCustomEvent

虽然不是必须的，但可以使用此接口替代 `CustomEvent` 接口，以便在使用此组件触发的 Ionic 事件时获得更强的类型支持。

```typescript
interface ReorderEndCustomEvent extends CustomEvent {
  detail: ReorderEndEventDetail;
  target: HTMLIonReorderGroupElement;
}
```

### ItemReorderEventDetail (已弃用)

**_已弃用_** — 请改用 `ionReorderEnd` 事件和 `ReorderEndEventDetail`。

```typescript
interface ItemReorderEventDetail {
  from: number;
  to: number;
  complete: (data?: boolean | any[]) => any;
}
```

### ItemReorderCustomEvent (已弃用)

**_已弃用_** — 请改用 `ionReorderEnd` 事件和 `ReorderEndCustomEvent`。

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
