---
title: 'ion-refresher'
---

import Props from '@ionic-internal/component-api/v6/refresher/props.md';
import Events from '@ionic-internal/component-api/v6/refresher/events.md';
import Methods from '@ionic-internal/component-api/v6/refresher/methods.md';
import Parts from '@ionic-internal/component-api/v6/refresher/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/refresher/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/refresher/slots.md';

<head>
  <title>ion-refresher：在 Ionic 应用中实现下拉刷新页面内容</title>
  <meta
    name="description"
    content="ion-refresher 在内容组件上提供下拉刷新功能。了解如何让用户通过触摸下拉页面来获取更多数据。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

刷新器（Refresher）在内容组件上提供下拉刷新功能。下拉刷新模式允许用户下拉数据列表以获取更多数据。

数据应在刷新器的输出事件期间进行修改。一旦异步操作完成且刷新应结束时，需要在刷新器上调用 `complete()` 方法。

## 基本用法

import Basic from '@site/static/usage/v6/refresher/basic/index.md';

<Basic />

## 拉动属性

刷新器具有多个用于自定义拉动手势的属性。设置 `pullFactor` 可以改变拉动的速度，设置 `pullMin` 属性可以改变用户必须下拉的最小距离，设置 `pullMax` 属性可以改变用户必须下拉的最大距离（之后刷新器将进入 `refreshing` 状态）。

当启用[原生刷新器](#原生刷新器)时，这些属性不适用。

import PullProperties from '@site/static/usage/v6/refresher/pull-properties/index.md';

<PullProperties />

## 自定义刷新器内容

可以根据刷新器状态是 `pulling`（拉动中）还是 `refreshing`（刷新中），在[刷新器内容](./refresher-content)上自定义默认的图标、旋转器和文本。

设置 `pullingIcon` 将禁用[原生刷新器](#原生刷新器)。

import CustomContent from '@site/static/usage/v6/refresher/custom-content/index.md';

<CustomContent />

## 原生刷新器

iOS 和 Android 平台均提供原生刷新器，它们利用各自设备暴露的属性来实现流体化、原生体验的下拉刷新效果。

Ionic 默认启用 iOS 和 Material Design 原生刷新器。然而，iOS 原生刷新器依赖橡皮筋滚动（rubber band scrolling）才能正常工作，因此仅与 iOS 设备兼容。对于在不支持橡皮筋滚动的设备上以 iOS 模式运行的应用，我们提供了一个备用刷新器。

原生刷新器在 Material Design 中使用 `circular`（圆形）旋转器，而 iOS 使用 `lines`（线条）旋转器。在 iOS 上，随着页面下拉，勾选标记会逐步显示。

某些刷新器属性（如[拉动属性](#拉动属性)、`closeDuration` 和 `snapbackDuration`）不兼容，因为原生刷新器很大程度上基于滚动实现。有关不支持的属性详情，请参阅[属性](#属性)部分。

可以通过在[刷新器内容](#自定义刷新器内容)上设置 `pullingIcon` 为任意图标或旋转器来禁用原生刷新器。有关可接受的值，请参阅 [Ionicons](https://ionic.io/ionicons) 和[旋转器](./spinner)文档。

## 与虚拟滚动结合使用

刷新器需要一个滚动容器才能正常工作。使用虚拟滚动解决方案时，您需要禁用 `ion-content` 上的滚动，并通过 `.ion-content-scroll-host` 类目标指定哪个元素容器负责滚动容器。

import CustomScrollTarget from '@site/static/usage/v6/refresher/custom-scroll-target/index.md';

<CustomScrollTarget />

## 高级用法

虽然刷新器可以与任何类型的内容一起使用，但在原生应用中，一个常见的用例是显示一个在刷新时更新的数据列表。在下面的示例中，应用生成一个数据列表，然后在刷新完成时将数据追加到列表顶部。在实际应用中，数据将通过网络或数据库调用发送请求后接收和更新。

import Advanced from '@site/static/usage/v6/refresher/advanced/index.md';

<Advanced />

## 接口

### RefresherEventDetail

```typescript
interface RefresherEventDetail {
  complete(): void;
}
```

### RefresherCustomEvent

虽然不是必需的，但可以使用此接口替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更强的类型检查。

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