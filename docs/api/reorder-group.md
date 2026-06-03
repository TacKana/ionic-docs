---
title: "ion-reorder-group"
---
import Props from '@ionic-internal/component-api/v8/reorder-group/props.md';
import Events from '@ionic-internal/component-api/v8/reorder-group/events.md';
import Methods from '@ionic-internal/component-api/v8/reorder-group/methods.md';
import Parts from '@ionic-internal/component-api/v8/reorder-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/reorder-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/reorder-group/slots.md';

<head>
  <title>ion-reorder-group：项目重新排序的包装组件</title>
  <meta name="description" content="ion-reorder-group 是 Ionic 应用中使用 ion-reorder 组件的项目的包装组件。阅读了解更多关于 ion-reorder-group 用法的信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


重新排序组是使用 [reorder](./reorder) 组件的项目的容器。当用户拖拽一个项目并放下时，会触发 `ionReorderEnd` 事件。应实现该事件的处理函数来调用 `complete` 方法。

`ionReorderEnd` 事件的 `detail` 属性包含了重新排序操作的所有相关信息，包括 `from` 和 `to` 索引。在重新排序的上下文中，一个项目会从某个索引 `from` 移动到另一个索引 `to`。关于重新排序组的用法示例，请参阅 [reorder](./reorder) 文档。


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

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，用于与此组件发出的 Ionic 事件提供更强的类型支持。

```typescript
interface ReorderMoveCustomEvent extends CustomEvent {
  detail: ReorderMoveEventDetail;
  target: HTMLIonReorderGroupElement;
}

```

### ReorderEndCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，用于与此组件发出的 Ionic 事件提供更强的类型支持。

```typescript
interface ReorderEndCustomEvent extends CustomEvent {
  detail: ReorderEndEventDetail;
  target: HTMLIonReorderGroupElement;
}
```

### ItemReorderEventDetail（已废弃）

**_已废弃_** — 请改用带有 `ReorderEndEventDetail` 的 `ionReorderEnd` 事件。

```typescript
interface ItemReorderEventDetail {
  from: number;
  to: number;
  complete: (data?: boolean | any[]) => any;
}
```

### ItemReorderCustomEvent（已废弃）

**_已废弃_** — 请改用带有 `ReorderEndCustomEvent` 的 `ionReorderEnd` 事件。

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
