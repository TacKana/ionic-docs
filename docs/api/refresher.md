---
title: "ion-refresher"
---
import Props from '@ionic-internal/component-api/v8/refresher/props.md';
import Events from '@ionic-internal/component-api/v8/refresher/events.md';
import Methods from '@ionic-internal/component-api/v8/refresher/methods.md';
import Parts from '@ionic-internal/component-api/v8/refresher/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/refresher/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/refresher/slots.md';

<head>
  <title>ion-refresher：在 Ionic 应用中通过下拉刷新页面内容</title>
  <meta name="description" content="ion-refresher 在内容组件上提供下拉刷新功能。了解这如何让用户使用触摸下拉页面以获取更多数据。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


Refresher 在内容组件上提供下拉刷新功能。下拉刷新模式允许用户下拉数据列表以获取更多数据。

应在刷新器的输出事件期间修改数据。一旦异步操作完成且刷新应结束时，需要在刷新器上调用 `complete()`。


## 基本用法

import Basic from '@site/static/usage/v8/refresher/basic/index.md';

<Basic />


## 下拉属性

刷新器有几个用于自定义下拉手势的属性。设置 `pullFactor` 以改变下拉速度，`pullMin` 属性以更改用户必须下拉的最小距离，以及 `pullMax` 属性以更改刷新器进入 `refreshing` 状态前用户必须下拉的最大距离。

当启用[原生刷新器](#原生刷新器)时，这些属性不适用。

import PullProperties from '@site/static/usage/v8/refresher/pull-properties/index.md';

<PullProperties />


## 自定义刷新器内容

默认图标、旋转器和文本可以根据刷新器状态是 `pulling` 还是 `refreshing` 在[刷新器内容](./refresher-content)上进行自定义。

设置 `pullingIcon` 将禁用[原生刷新器](#原生刷新器)。

import CustomContent from '@site/static/usage/v8/refresher/custom-content/index.md';

<CustomContent />


## 原生刷新器

iOS 和 Android 平台都提供了使用各自设备暴露的属性来实现流畅、类原生下拉刷新体验的刷新器。

iOS 和 Material Design 原生刷新器在 Ionic 中默认启用。然而，原生 iOS 刷新器依赖于橡皮筋滚动才能正常工作，因此仅兼容 iOS 设备。我们为在不支持橡皮筋滚动的设备上以 iOS 模式运行的应用提供了后备刷新器。

原生刷新器在 Material Design 中使用 `circular` 旋转器，而 iOS 使用 `lines` 旋转器。在 iOS 上，刻度标记会随着页面下拉逐渐显示。

某些刷新器属性如[下拉属性](#下拉属性)、`closeDuration` 和 `snapbackDuration` 不兼容，因为原生刷新器的大部分功能基于滚动。有关不支持的属性的更多信息，请参阅[属性](#属性)。

可以通过将[刷新器内容](#自定义刷新器内容)上的 `pullingIcon` 设置为任何图标或旋转器来禁用原生刷新器。有关可接受的值，请参阅 [Ionicons](https://ionic.io/ionicons) 和 [Spinner](./spinner) 文档。


## 与虚拟滚动一起使用

Refresher 需要一个滚动容器才能工作。使用虚拟滚动解决方案时，您需要禁用 `ion-content` 上的滚动，并使用 `.ion-content-scroll-host` 类目标指示哪个元素容器负责滚动容器。

开发者应将以下 CSS 应用于可滚动容器。此 CSS 在 iOS 上添加了"橡皮筋"滚动效果，使原生 iOS 刷新器能够正常工作：

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

虽然刷新器可以用于任何类型的内容，但原生应用中一个常见的用例是显示在刷新时更新的数据列表。在下面的示例中，应用生成一个数据列表，然后在刷新完成时将数据追加到列表顶部。在真实应用中，数据将在通过网络或数据库调用发送请求后接收和更新。

import Advanced from '@site/static/usage/v8/refresher/advanced/index.md';

<Advanced />

## 事件处理

### 使用 `ionPullStart` 和 `ionPullEnd`

`ionPullStart` 事件在用户开始下拉手势时触发。该事件在用户开始向下拉动刷新器时触发。

`ionPullEnd` 事件在刷新器返回非活动状态时触发，其 `reason` 属性为 `'complete'` 或 `'cancel'`，指示刷新操作是否成功完成或已取消。

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

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

```typescript
interface RefresherCustomEvent extends CustomEvent {
  detail: RefresherEventDetail;
  target: HTMLIonRefresherElement;
}
```

### RefresherPullEndCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，为 `ionPullEnd` 事件提供更强的类型支持。

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

## 插槽
<Slots />
