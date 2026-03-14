---
title: 刷新组件
---
import Props from '@ionic-internal/component-api/v8/refresher/props.md';
import Events from '@ionic-internal/component-api/v8/refresher/events.md';
import Methods from '@ionic-internal/component-api/v8/refresher/methods.md';
import Parts from '@ionic-internal/component-api/v8/refresher/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/refresher/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/refresher/slots.md';

<head>
  <title>ion-refresher：Ionic 应用中的下拉刷新页面内容组件</title>
  <meta name="description" content="ion-refresher 为内容组件提供下拉刷新功能。了解如何让用户通过触摸下拉页面来获取更多数据。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

Refresher 为内容组件提供下拉刷新功能。下拉刷新模式允许用户下拉数据列表以获取更多数据。

数据应在 Refresher 的输出事件中进行修改。一旦异步操作完成且刷新应结束时，需要在 Refresher 上调用 `complete()` 方法。

## 基本用法

import Basic from '@site/static/usage/v8/refresher/basic/index.md';

<Basic />

## 拉动属性

Refresher 具有多个用于自定义下拉手势的属性。设置 `pullFactor` 可改变下拉速度，设置 `pullMin` 属性可更改用户必须下拉的最小距离，设置 `pullMax` 属性可更改用户必须下拉的最大距离，然后 Refresher 才会进入 `refreshing` 状态。

启用[原生 Refresher](#原生-refresher) 时，这些属性不适用。

import PullProperties from '@site/static/usage/v8/refresher/pull-properties/index.md';

<PullProperties />

## 自定义 Refresher 内容

根据 Refresher 的状态是 `pulling` 还是 `refreshing`，可以在 [refresher content](./refresher-content) 上自定义默认的图标、旋转器和文本。

设置 `pullingIcon` 将禁用[原生 Refresher](#原生-refresher)。

import CustomContent from '@site/static/usage/v8/refresher/custom-content/index.md';

<CustomContent />

## 原生 Refresher

iOS 和 Android 平台都提供了原生 Refresher，它们利用各自设备暴露的属性来实现流畅、类原生的下拉刷新体验。

在 Ionic 中，iOS 和 Material Design 的原生 Refresher 默认启用。但是，iOS 原生 Refresher 依赖橡皮筋滚动效果才能正常工作，因此仅与 iOS 设备兼容。对于在不支持橡皮筋滚动的设备上以 iOS 模式运行的应用程序，我们提供了备用的 Refresher。

原生 Refresher 在 Material Design 中使用 `circular` 旋转器，而 iOS 使用 `lines` 旋转器。在 iOS 上，随着页面下拉，刻度标记会逐步显示。

某些 Refresher 属性（例如[拉动属性](#拉动属性)、`closeDuration` 和 `snapbackDuration`）不兼容，因为大部分原生 Refresher 是基于滚动的。有关不受支持的属性，请参阅[属性](#属性)部分。

可以通过将 [refresher content](#自定义-refresher-内容) 上的 `pullingIcon` 设置为任意图标或旋转器来禁用原生 Refresher。有关可接受的值，请参阅 [Ionicons](https://ionic.io/ionicons) 和 [Spinner](./spinner) 文档。

## 与虚拟滚动结合使用

Refresher 需要一个滚动容器才能工作。使用虚拟滚动解决方案时，需要禁用 `ion-content` 上的滚动，并通过 `.ion-content-scroll-host` 类目标指示哪个元素容器负责滚动容器。

开发人员应将以下 CSS 应用于可滚动容器。此 CSS 在 iOS 上添加“橡皮筋”滚动效果，使原生 iOS Refresher 能够正常工作：

```css
.ion-content-scroll-host::before,
.ion-content-scroll-host::after {
  position: absolute;

  width: 1px;
  height: 1px;

  content: "";
}

.ion-content-scroll-host::before {
  bottom: -1px;
}

.ion-content-scroll-host::after {
  top: -1px;
}
```

import CustomScrollTarget from '@site/static/usage/v8/refresher/custom-scroll-target/index.md';

<CustomScrollTarget />

## 高级用法

虽然 Refresher 可以与任何类型的内容一起使用，但在原生应用程序中，一个常见用例是显示一个数据列表，并在刷新时更新该列表。在下面的示例中，应用程序生成一个数据列表，然后在刷新完成时将数据追加到列表顶部。在实际应用中，数据将通过网络或数据库调用发送请求后接收并更新。

import Advanced from '@site/static/usage/v8/refresher/advanced/index.md';

<Advanced />

## 事件处理

### 使用 `ionPullStart` 和 `ionPullEnd`

当用户开始下拉手势时，会触发 `ionPullStart` 事件。该事件在用户开始下拉 Refresher 时触发。

当 Refresher 返回到非活动状态时，会触发 `ionPullEnd` 事件，其 `reason` 属性为 `'complete'` 或 `'cancel'`，指示刷新操作是成功完成还是被取消。

import PullStartEndEvents from '@site/static/usage/v8/refresher/pull-start-end-events/index.md';

<PullStartEndEvents />

## 接口

### RefresherEventDetail

```typescript
interface RefresherEventDetail {
  complete(): void;
}
```

### RefresherPullEndEventDetail

```typescript
interface RefresherPullEndEventDetail {
  reason: 'complete' | 'cancel';
}
```

### RefresherCustomEvent

虽然不是必需的，但此接口可用于替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更强的类型检查。

```typescript
interface RefresherCustomEvent extends CustomEvent {
  detail: RefresherEventDetail;
  target: HTMLIonRefresherElement;
}
```

### RefresherPullEndCustomEvent

虽然不是必需的，但此接口可用于替代 `CustomEvent` 接口，以便对 `ionPullEnd` 事件进行更强的类型检查。

```typescript
interface RefresherPullEndCustomEvent extends CustomEvent {
  detail: RefresherPullEndEventDetail;
  target: HTMLIonRefresherElement;
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

## Slots
<Slots />