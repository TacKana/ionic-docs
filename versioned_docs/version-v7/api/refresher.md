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
  <title>ion-refresher：Ionic 应用的下拉刷新页面内容</title>
  <meta
    name="description"
    content="ion-refresher 在内容组件上提供下拉刷新功能。了解如何让用户通过触摸在页面上向下拉以检索更多数据。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

Refresher（刷新器）在内容组件上提供下拉刷新功能。下拉刷新模式让用户向下拉数据列表以检索更多数据。

数据应在刷新器的输出事件期间进行修改。一旦异步操作完成并应结束刷新，需要在刷新器上调用 `complete()`。

## 基本用法

import Basic from '@site/static/usage/v7/refresher/basic/index.md';

<Basic />

## 拉动属性

刷新器有几个用于自定义拉动手势的属性。设置 `pullFactor` 以更改拉动的速度，`pullMin` 属性更改用户必须下拉的最小距离，`pullMax` 属性更改刷新器进入 `refreshing` 状态前用户必须下拉的最大距离。

当启用了[原生刷新器](#原生刷新器)时，这些属性不适用。

import PullProperties from '@site/static/usage/v7/refresher/pull-properties/index.md';

<PullProperties />

## 自定义刷新器内容

默认的图标、旋转器和文本可以根据刷新器状态是 `pulling` 还是 `refreshing` 在[刷新器内容（refresher content）](./refresher-content)上进行自定义。

设置 `pullingIcon` 将禁用[原生刷新器](#原生刷新器)。

import CustomContent from '@site/static/usage/v7/refresher/custom-content/index.md';

<CustomContent />

## 原生刷新器

iOS 和 Android 平台都提供了使用各自设备暴露的属性的刷新器，从而使下拉刷新具有流畅、类似原生的感觉。

iOS 和 Material Design 原生刷新器在 Ionic 中默认启用。然而，原生 iOS 刷新器依赖于橡皮筋滚动才能正常工作，因此仅与 iOS 设备兼容。我们为在不支持橡皮筋滚动的设备上以 iOS 模式运行的应用提供了回退刷新器。

原生刷新器在 Material Design 中使用 `circular` 旋转器，而 iOS 使用 `lines` 旋转器。在 iOS 上，随着页面下拉，刻度标记会逐渐显示。

某些刷新器属性，如[拉动属性](#拉动属性)、`closeDuration` 和 `snapbackDuration` 不兼容，因为原生刷新器大部分是基于滚动的。有关不受支持属性的更多信息，请参阅[属性](#属性)。

可以通过将[刷新器内容](#自定义刷新器内容)上的 `pullingIcon` 设置为任何图标或旋转器来禁用原生刷新器。请参阅 [Ionicons](https://ionic.io/ionicons) 和[旋转器（Spinner）](./spinner)文档了解可接受的值。

## 与虚拟滚动一起使用

刷新器需要滚动容器才能运行。使用虚拟滚动解决方案时，需要禁用 `ion-content` 上的滚动，并使用 `.ion-content-scroll-host` 类目标指示哪个元素容器负责滚动容器。

开发者应将以下 CSS 应用于可滚动容器。此 CSS 在 iOS 上添加了"橡皮筋"滚动效果，使原生 iOS 刷新器能够正常工作：

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

虽然刷新器可以与任何类型的内容一起使用，但原生应用中一个常见的用例是显示在刷新时更新的数据列表。在下面的示例中，应用生成一个数据列表，然后在刷新完成时将数据追加到列表顶部。在实际的应用中，数据将在通过网络或数据库调用发送请求后接收和更新。

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

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

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

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
