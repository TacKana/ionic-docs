---
title: Gestures
---

import Codepen from '@components/global/Codepen';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>手势 | 用于自定义手势和交互的 Ionic 应用工具</title>
  <meta
    name="description"
    content="Ionic Gestures 是一个工具，允许开发者以跨平台的方式为应用构建自定义手势和交互。阅读了解更多信息。"
  />
</head>

## 概述

Ionic Gestures 是一个实用工具，允许开发者以跨平台的方式为应用程序构建自定义手势和交互。开发者无需使用特定的框架（如 React 或 Angular），甚至不需要构建 Ionic 应用！只要开发者能够使用 Ionic Framework v5.0 或更高版本，就可以使用 Ionic Gestures 的所有功能。

构建复杂的手势可能非常耗时。其他提供自定义手势的库通常过于臃肿，最终会捕获鼠标或触摸事件而不让它们传播。这可能导致其他元素无法滚动或点击。

## 安装

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (独立版)' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

使用 Ionic Core 和 JavaScript 的开发者应安装最新版本的 `@ionic/core`。

```javascript
import { createGesture } from 'https://cdn.jsdelivr.net/npm/@ionic/core@latest/dist/esm/index.mjs';

...

const gesture = createGesture({
  el: elementRef,
  threshold: 15,
  gestureName: 'my-gesture',
  onMove: event => onMoveHandler(event)
});

```
</TabItem>
<TabItem value="typescript">

使用 Ionic Core 和 TypeScript 的开发者应安装最新版本的 `@ionic/core`。

```tsx
import { createGesture, Gesture } from '@ionic/core';

...

const gesture: Gesture = createGesture({
  el: elementRef,
  threshold: 15,
  gestureName: 'my-gesture',
  onMove: event => onMoveHandler(event)
});
```
</TabItem>
<TabItem value="angular">

使用 Angular 的开发者应安装最新版本的 `@ionic/angular`。手势可以通过 `GestureController` 依赖注入创建。

默认情况下，手势回调不会在 NgZone 内运行。开发者可以在创建手势时将 `runInsideAngularZone` 参数设置为 `true`，或者将回调包装在 `NgZone.run()` 调用中。

```tsx
import { Gesture, GestureController } from '@ionic/angular';

...

constructor(private gestureCtrl: GestureController) {
  const gesture: Gesture = this.gestureCtrl.create({
    el: this.element.nativeElement,
    threshold: 15,
    gestureName: 'my-gesture',
    onMove: event => this.onMoveHandler(event)
  }, true);
  // 上面的 `true` 确保回调在 NgZone 内运行。
}

```
</TabItem>
<TabItem value="angular-standalone">

使用 Angular 的开发者应安装最新版本的 `@ionic/angular`。手势可以通过 `GestureController` 依赖注入创建。

默认情况下，手势回调不会在 NgZone 内运行。开发者可以在创建手势时将 `runInsideAngularZone` 参数设置为 `true`，或者将回调包装在 `NgZone.run()` 调用中。

```tsx
import { Gesture, GestureController } from '@ionic/angular/standalone';

...

constructor(private gestureCtrl: GestureController) {
  const gesture: Gesture = this.gestureCtrl.create({
    el: this.element.nativeElement,
    threshold: 15,
    gestureName: 'my-gesture',
    onMove: event => this.onMoveHandler(event)
  }, true);
  // 上面的 `true` 确保回调在 NgZone 内运行。
}

```
</TabItem>
<TabItem value="react">

使用 React 的开发者应安装最新版本的 `@ionic/react`。完整的 React 封装器即将推出！

```tsx
import { createGesture, Gesture } from '@ionic/react';

...

const gesture: Gesture = createGesture({
  el: elementRef,
  threshold: 15,
  gestureName: 'my-gesture',
  onMove: event => onMoveHandler(event)
});
```
</TabItem>
<TabItem value="vue">

使用 Ionic Vue 的开发者应安装最新版本的 `@ionic/vue`。

```javascript
import { createGesture } from '@ionic/vue';
import { ref } from 'vue';

...

const elementRef = ref();

...

const gesture = createGesture({
  el: elementRef.value,
  threshold: 15,
  gestureName: 'my-gesture',
  onMove: event => onMoveHandler(event)
});

```
</TabItem>
</Tabs>
````

## 基础手势

import Basic from '@site/static/usage/v7/gestures/basic/index.md';

在这个例子中，我们的应用监听 `ion-content` 元素上的手势。当手势移动开始时，会调用 `onStart` 函数，并向 `ion-card` 添加一个类以应用彩色阴影。当检测到手势移动时，会调用 `onMove` 函数，我们的应用会在 `ion-card` 内打印当前的手势信息。最后，当手势移动结束时，会调用 `onEnd` 函数，并从 `ion-card` 中移除自定义类。

<Basic />

## 双击手势

import DoubleClick from '@site/static/usage/v7/gestures/double-click/index.md';

在下面的示例中，我们希望能够在元素上检测双击。通过将 `threshold` 设置为 `0`，可以确保手势对象能够检测点击。此外，我们还定义了一个点击阈值，以便只有快速连续发生的两次点击才被视为双击。

<DoubleClick />

## 手势动画

查看我们关于实现手势动画的指南：[使用 Ionic Animations 实现手势动画](animations.md#gesture-animations)

## 类型

| 名称              | 值                                           |
| ----------------- | -------------------------------------------- |
| `GestureCallback` | `(detail: GestureDetail) => boolean \| void` |

## 接口

### GestureConfig

| 属性              | 类型                                       | 默认值       | 描述                                                                                                                                                                                                                                                                                                             |
| ----------------- | ------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| el                | `Node`                                     | `undefined`  | 监听手势的元素。                                                                                                                                                                                                                                                                                                 |
| disableScroll     | `boolean \| undefined`                     | `false`      | 如果为 true，则在手势启用时禁用 `el` 上的滚动。                                                                                                                                                                                                                                                                  |
| direction         | `'x' \| 'y' \| undefined`                  | `'x'`        | 将手势检测限制在某个轴向上的移动。                                                                                                                                                                                                                                                                               |
| gestureName       | `string`                                   | `undefined`  | 要创建的手势名称。                                                                                                                                                                                                                                                                                               |
| gesturePriority   | `number \| undefined`                      | `0`          | 优先级较高的手势将覆盖优先级较低的手势。这对于确保多个手势互不冲突非常有用。                                                                                                                                                                                                                                     |
| passive           | `boolean \| undefined`                     | `true`       | 如果为 true，则表示该手势永远不会调用 `preventDefault()`。这可用于提高滚动性能。更多信息请参阅 [被动监听器](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners)。                                                              |
| maxAngle          | `number \| undefined`                      | `40`         | 检测手势时允许的最大角度。                                                                                                                                                                                                                                                                                       |
| threshold         | `number \| undefined`                      | `10`         | 定义指针必须移动多少距离才会触发手势开始。                                                                                                                                                                                                                                                                       |
| blurOnStart       | `boolean \| undefined`                     | `undefined`  | 如果为 true，手势将在触发 `onStart` 回调之前使任何活动的可选元素（如 input 或 textarea）失去焦点。                                                                                                                                                                                                               |
| canStart          | `GestureCallback \| undefined`             | `undefined`  | 一个回调函数，如果允许手势开始则返回 true。                                                                                                                                                                                                                                                                      |
| onWillStart       | `(detail: GestureDetail) => Promise<void>` | `undefined`  | 当手势即将开始时触发的回调。此回调在 `canStart` 之后、`onStart` 之前触发。                                                                                                                                                                                                                                       |
| onStart           | `GestureCallback \| undefined`             | `undefined`  | 当手势已开始时触发的回调。                                                                                                                                                                                                                                                                                       |
| onMove            | `GestureCallback \| undefined`             | `undefined`  | 当检测到手势移动时触发的回调。                                                                                                                                                                                                                                                                                   |
| onEnd             | `GestureCallback \| undefined`             | `undefined`  | 当手势已结束时触发的回调。这通常在指针释放时发生。                                                                                                                                                                                                                                                               |
| notCaptured       | `GestureCallback \| undefined`             | `undefined`  | 当手势未被捕获时触发的回调。这通常发生在存在具有更高优先级的冲突手势时。                                                                                                                                                                                                                                         |

### GestureDetail

| 属性           | 类型               | 描述                                                                                                                               |
| -------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| type           | `string`           | 检测到的手势类型。                                                                                                                 |
| startX         | `number`           | 手势的起始 x 坐标。                                                                                                                |
| startY         | `number`           | 手势的起始 y 坐标。                                                                                                                |
| startTimeStamp | `number`           | 手势开始的时间戳。                                                                                                                 |
| currentX       | `number`           | 手势的当前 x 坐标。                                                                                                                |
| currentY       | `number`           | 手势的当前 y 坐标。                                                                                                                |
| velocityX      | `number`           | 手势当前在 x 轴上的移动速度。                                                                                                      |
| velocityY      | `number`           | 手势当前在 y 轴上的移动速度。                                                                                                      |
| deltaX         | `number`           | 手势开始后在 x 轴上的移动距离。                                                                                                    |
| deltaY         | `number`           | 手势开始后在 y 轴上的移动距离。                                                                                                    |
| timeStamp      | `number`           | 手势的当前时间戳。                                                                                                                 |
| event          | `UIEvent`          | 浏览器派发的原生事件。更多信息请参阅 [UIEvent](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent)。                         |
| data           | `any \| undefined` | 用户指定的任何数据。这可以在任何回调中设置和读取。                                                                                 |

## 方法

#### `enable(enable: boolean = true) => void`

启用或禁用手势。

#### `destroy() => void`

销毁手势实例并停止在目标元素上的监听。