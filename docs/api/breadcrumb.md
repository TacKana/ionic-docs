---
title: 面包屑组件
---
import Props from '@ionic-internal/component-api/v8/breadcrumb/props.md';
import Events from '@ionic-internal/component-api/v8/breadcrumb/events.md';
import Methods from '@ionic-internal/component-api/v8/breadcrumb/methods.md';
import Parts from '@ionic-internal/component-api/v8/breadcrumb/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/breadcrumb/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/breadcrumb/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


面包屑（Breadcrumb）是面包屑导航（Breadcrumbs）组件中的单个导航项。一个面包屑可以链接到应用内的其他位置，也可以是纯文本。每个面包屑与其后一个面包屑之间都有一个分隔符，并且可以选择性地包含图标。

更多信息请参阅 [Breadcrumbs](./breadcrumbs) 文档。

## 接口

### BreadcrumbCollapsedClickEventDetail

```typescript
interface BreadcrumbCollapsedClickEventDetail {
  collapsedBreadcrumbs?: HTMLIonBreadcrumbElement[];
}
```

### BreadcrumbCustomEvent

虽然不是必需的，但可以使用此接口替代 `CustomEvent` 接口，以获得更强的类型定义。

```typescript
interface BreadcrumbCustomEvent extends CustomEvent {
  detail: BreadcrumbCollapsedClickEventDetail;
  target: HTMLIonBreadcrumbElement;
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