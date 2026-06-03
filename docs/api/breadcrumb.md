---
title: "ion-breadcrumb"
---
import Props from '@ionic-internal/component-api/v8/breadcrumb/props.md';
import Events from '@ionic-internal/component-api/v8/breadcrumb/events.md';
import Methods from '@ionic-internal/component-api/v8/breadcrumb/methods.md';
import Parts from '@ionic-internal/component-api/v8/breadcrumb/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/breadcrumb/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/breadcrumb/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


面包屑导航项是面包屑组件的一个子导航项。每个面包屑可以链接到应用中的其他位置，也可以是纯文本。每个面包屑与其下一个面包屑之间有一个分隔符，并且可以选择包含图标。

更多信息请参见[面包屑](./breadcrumbs)文档。

## Interfaces

### BreadcrumbCollapsedClickEventDetail

```typescript
interface BreadcrumbCollapsedClickEventDetail {
  collapsedBreadcrumbs?: HTMLIonBreadcrumbElement[];
}
```

### BreadcrumbCustomEvent

虽然不是必须的，但可以使用此接口替代 `CustomEvent` 接口，以提供更强的类型支持。

```typescript
interface BreadcrumbCustomEvent extends CustomEvent {
  detail: BreadcrumbCollapsedClickEventDetail;
  target: HTMLIonBreadcrumbElement;
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
