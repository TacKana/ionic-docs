---
title: 'ion-refresher'
---

import Props from '@ionic-internal/component-api/v7/refresher/props.md';
import Events from '@ionic-internal/component-api/v7/refresher/events.md';
import Methods from '@ionic-internal/component-api/v7/refresher/methods.md';
import Parts from '@ionic-internal/component-api/v7/refresher/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/refresher/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/refresher/slots.md';

<head>
  <title>ion-refresher：Ionic 应用中的下拉刷新页面内容组件</title>
  <meta
    name="description"
    content="ion-refresher 为内容组件提供下拉刷新功能。了解如何让用户通过触摸下拉页面来获取更多数据。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

Refresher（刷新器）为内容组件提供下拉刷新功能。下拉刷新模式允许用户下拉数据列表以获取更多数据。

数据应在刷新器的输出事件期间进行修改。一旦异步操作完成且刷新应结束时，需要在刷新器上调用 `complete()` 方法。

## 基本用法

import Basic from '@site/static/usage/v7/refresher/basic/index.md';

<Basic />

## 下拉属性

刷新器具有多个用于自定义下拉手势的属性。设置 `pullFactor` 可更改下拉速度，`pullMin` 属性可更改用户必须下拉的最小距离，`pullMax` 属性可更改用户必须下拉的最大距离（之后刷新器将进入 `refreshing` 状态）。

启用[原生刷新器](#原生刷新器)时，这些属性不适用。

import PullProperties from '@site/static/usage/v7/refresher/pull-properties/index.md';

<PullProperties />

## 自定义刷新器内容

默认图标、旋转器和文本可以根据刷新器状态是 `pulling` 还是 `refreshing`，在[刷新器内容](./refresher-content)上进行自定义。

设置 `pullingIcon` 将禁用[原生刷新器](#原生刷新器)。

import CustomContent from '@site/static/usage/v7/refresher/custom-content/index.md';

<CustomContent />

## 原生刷新器

iOS 和 Android 平台都提供了刷新器，它们利用各自设备暴露的属性，使下拉刷新具有流畅、类似原生的感觉。

在 Ionic 中，iOS 和 Material Design 的原生刷新器默认启用。然而，iOS 原生刷新器依赖橡皮筋滚动才能正常工作，因此仅兼容 iOS 设备。我们为在不支持橡皮筋滚动的设备上以 iOS 模式运行的应用程序提供了备用刷新器。

原生刷新器在 Material Design 中使用 `circular` 旋转器，而 iOS 使用 `lines` 旋转器。在 iOS 上，随着页面的下拉，刻度标记会逐步显示。

某些刷新器属性，如[下拉属性](#下拉属性)、`closeDuration` 和 `snapbackDuration` 不兼容，因为原生刷新器大多基于滚动。有关不受支持属性的更多信息，请参阅[属性](#属性)。

可以通过将[刷新器内容](#自定义刷新器内容)的 `pullingIcon` 设置为任何图标或旋转器来禁用原生刷新器。有关可接受的值，请参阅 [Ionicons](https://ionic.io/ionicons) 和 [Spinner](./spinner) 文档。

## 与虚拟滚动结合使用

刷新器需要滚动容器才能正常工作。使用虚拟滚动解决方案时，您需要禁用 `ion-content` 上的滚动，并通过 `.ion-content-scroll-host` 类目标指示哪个元素容器负责滚动容器。

开发者应将以下 CSS 应用于可滚动容器。此 CSS 在 iOS 上添加了“橡皮筋”滚动效果，使原生 iOS 刷新器能够正常工作：

```css
.ion-content-scroll-host::before,
.ion-content-scroll-host::after {
  position: absolute;

  width: 1px;
  height: 1px;

  content: '';
}

.ion-content-scroll-host::before {
  bottom: -1px;
}

.ion-content-scroll-host::after {
  top: -1px;
}
```

import CustomScrollTarget from '@site/static/usage/v7/refresher/custom-scroll-target/index.md';

<CustomScrollTarget />

## 高级用法

虽然刷新器可以与任何类型的内容一起使用，但在原生应用中一个常见的用例是显示在刷新时更新的数据列表。在下面的示例中，应用程序生成一个数据列表，然后在刷新完成时将数据追加到列表顶部。在实际应用中，数据将通过网络或数据库调用发送请求后接收和更新。

import Advanced from '@site/static/usage/v7/refresher/advanced/index.md';

<Advanced />

## 接口

### RefresherEventDetail

```typescript
interface RefresherEventDetail {
  complete(): void;
}
```

### RefresherCustomEvent

虽然不是必需的，但此接口可用于替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更强类型检查。

```typescript
interface RefresherCustomEvent extends CustomEvent {
  detail: RefresherEventDetail;
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