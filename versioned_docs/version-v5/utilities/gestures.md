import Codepen from '@components/global/Codepen';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 手势

## 概述

Ionic Gestures 是一个工具，允许开发者以平台无关的方式为应用构建自定义手势和交互。开发者不需要使用特定的框架（如 React 或 Angular），甚至不需要构建 Ionic 应用！只要开发者使用 Ionic Framework v5.0 或更高版本，就可以使用所有 Ionic Gestures 功能。

构建复杂的手势可能非常耗时。其他提供自定义手势的库通常过于重量级，最终会捕获鼠标或触摸事件并阻止它们传播。这可能导致其他元素不再可滚动或可点击。

## 安装

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
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
  onMove: ev => onMoveHandler(ev)
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
  onMove: ev => onMoveHandler(ev)
});
```
</TabItem>
<TabItem value="angular">

使用 Angular 的开发者应安装最新版本的 `@ionic/angular`。手势可以通过 `GestureController` 依赖注入来创建。

默认情况下，手势回调不在 NgZone 内运行。开发者可以在创建手势时将 `runInsideAngularZone` 参数设置为 `true`，或者将回调包装在 `NgZone.run()` 调用中。

```tsx
import { Gesture, GestureController } from '@ionic/angular';

...

constructor(private gestureCtrl: GestureController) {
  const gesture: Gesture = this.gestureCtrl.create({
    el: this.element.nativeElement,
    threshold: 15,
    gestureName: 'my-gesture',
    onMove: ev => this.onMoveHandler(ev)
  }, true);
  // 上面的 `true` 确保回调在 NgZone 内运行。
}

```
</TabItem>
<TabItem value="react">

使用 React 的开发者应安装最新版本的 `@ionic/react`。完整的 React 封装即将推出！

```tsx
import { createGesture, Gesture } from '@ionic/react';

...

const gesture: Gesture = createGesture({
  el: elementRef,
  threshold: 15,
  gestureName: 'my-gesture',
  onMove: ev => onMoveHandler(ev)
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
  onMove: ev => onMoveHandler(ev)
});

```
</TabItem>
</Tabs>
````

## 基本手势

### 用法

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
let p = document.querySelector('p');
const gesture = createGesture({
  el: document.querySelector('.rectangle'),
  onMove: (detail) => { onMove(detail); }
})

gesture.enable();

const onMove = (detail) => {
  const type = detail.type;
  const currentX = detail.currentX;
  const deltaX = detail.deltaX;
  const velocityX = detail.velocityX;

  p.innerHTML = `
    <div>Type: ${type}</div>
    <div>Current X: ${currentX}</div>
    <div>Delta X: ${deltaX}</div>
    <div>Velocity X: ${velocityX}</div>
  `
}
```
</TabItem>
<TabItem value="angular">

```javascript
@ViewChild('paragraph') p: ElementRef;

ngOnInit() {
  const gesture = this.gestureCtrl.create({
    gestureName: 'my-gesture',
    el: this.rectangle.nativeElement,
    onMove: (detail) => { this.onMove(detail); }
  })

  gesture.enable();
}

private onMove(detail) {
  const type = detail.type;
  const currentX = detail.currentX;
  const deltaX = detail.deltaX;
  const velocityX = detail.velocityX;

  this.p.nativeElement.innerHTML = `
    <div>Type: ${type}</div>
    <div>Current X: ${currentX}</div>
    <div>Delta X: ${deltaX}</div>
    <div>Velocity X: ${velocityX}</div>
  `
}
```
</TabItem>
<TabItem value="react">

```javascript
let p = document.querySelector('p');
const gesture = createGesture({
  el: document.querySelector('.rectangle'),
  onMove: (detail) => { onMove(detail); }
})

gesture.enable();

const onMove = (detail) => {
  const type = detail.type;
  const currentX = detail.currentX;
  const deltaX = detail.deltaX;
  const velocityX = detail.velocityX;

  p.innerHTML = `
    <div>Type: ${type}</div>
    <div>Current X: ${currentX}</div>
    <div>Delta X: ${deltaX}</div>
    <div>Velocity X: ${velocityX}</div>
  `
}
```
</TabItem>
<TabItem value="vue">

```javascript
import { createGesture } from '@ionic/vue';
import { ref } from 'vue';

...

let pRef = ref();
const rectangleRef = ref();
const gesture = createGesture({
  el: rectangleRef.value,
  onMove: (detail) => { onMove(detail); }
})

gesture.enable();

const onMove = (detail) => {
  const type = detail.type;
  const currentX = detail.currentX;
  const deltaX = detail.deltaX;
  const velocityX = detail.velocityX;

  pRef.value.innerHTML = `
    <div>Type: ${type}</div>
    <div>Current X: ${currentX}</div>
    <div>Delta X: ${deltaX}</div>
    <div>Velocity X: ${velocityX}</div>
  `
}
```
</TabItem>
</Tabs>
````

在此示例中，我们的应用监听 `.rectangle` 元素上的手势。当检测到手势移动时，会调用 `onMove` 函数，我们的应用会记录当前的手势信息。

<Codepen user="ionic" slug="xxKBYdL" />

## 双击手势

### 用法

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
const backgrounds = ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(255, 0, 255, 0.5)', 'rgba(0, 255, 255, 0.5)'];
const DOUBLE_CLICK_THRESHOLD = 500;
const rectangle = document.querySelector('.rectangle');
const gesture = createGesture({
  el: rectangle,
  threshold: 0,
  onStart: () => { onStart(); }
});

gesture.enable();

let lastOnStart = 0;
let currentColor = 'rgba(0, 0, 255, 0.5)';

const onStart = () => {
  const now = Date.now();

  if (Math.abs(now - lastOnStart) <= DOUBLE_CLICK_THRESHOLD) {
    rectangle.style.setProperty('background', getRandomBackground());
    lastOnStart = 0;
  } else {
    lastOnStart = now;
  }
}

const getRandomBackground = () => {
  const options = backgrounds.filter(bg => bg !== currentColor);
  currentColor = options[Math.floor(Math.random() * options.length)];

  return currentColor;
}
```
</TabItem>
<TabItem value="angular">

```tsx
@ViewChild('rectangle') rectangle: ElementRef;

private backgrounds: string[] = ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(255, 0, 255, 0.5)', 'rgba(0, 255, 255, 0.5)'];
private currentColor: string = 'rgba(0, 0, 255, 0.5)';
private lastOnStart: number = 0;
private DOUBLE_CLICK_THRESHOLD: number = 500;

ngOnInit() {
  const gesture = this.gestureCtrl.create({
    el: this.rectangle.nativeElement,
    threshold: 0,
    onStart: () => { this.onStart(); }
  });

  gesture.enable();
}

private onStart() {
  const now = Date.now();

  if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
    this.rectangle.nativeElement.style.setProperty('background', this.getRandomBackground());
    this.lastOnStart = 0;
  } else {
    this.lastOnStart = now;
  }
}

private getRandomBackground() {
  const options = this.backgrounds.filter(bg => bg !== this.currentColor);
  this.currentColor = options[Math.floor(Math.random() * options.length)];

  return this.currentColor;
}
```
</TabItem>
<TabItem value="react">

```javascript
const backgrounds = ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(255, 0, 255, 0.5)', 'rgba(0, 255, 255, 0.5)'];
const DOUBLE_CLICK_THRESHOLD = 500;
const rectangle = document.querySelector('.rectangle');
const gesture = createGesture({
  el: rectangle,
  threshold: 0,
  onStart: () => { onStart(); }
});

gesture.enable();

let lastOnStart = 0;
let currentColor = 'rgba(0, 0, 255, 0.5)';

const onStart = () => {
  const now = Date.now();

  if (Math.abs(now - lastOnStart) <= DOUBLE_CLICK_THRESHOLD) {
    rectangle.style.setProperty('background', getRandomBackground());
    lastOnStart = 0;
  } else {
    lastOnStart = now;
  }
}

const getRandomBackground = () => {
  const options = backgrounds.filter(bg => bg !== currentColor);
  currentColor = options[Math.floor(Math.random() * options.length)];

  return currentColor;
}
```
</TabItem>
<TabItem value="vue">

```javascript
import { createGesture } from '@ionic/vue';
import { ref } from 'vue';

...

const backgrounds = ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(255, 0, 255, 0.5)', 'rgba(0, 255, 255, 0.5)'];
const DOUBLE_CLICK_THRESHOLD = 500;
const rectangleRef = ref();
const gesture = createGesture({
  el: rectangleRef.value,
  threshold: 0,
  onStart: () => { onStart(); }
});

gesture.enable();

let lastOnStart = 0;
let currentColor = 'rgba(0, 0, 255, 0.5)';

const onStart = () => {
  const now = Date.now();

  if (Math.abs(now - lastOnStart) <= DOUBLE_CLICK_THRESHOLD) {
    rectangleRef.value.style.setProperty('background', getRandomBackground());
    lastOnStart = 0;
  } else {
    lastOnStart = now;
  }
}

const getRandomBackground = () => {
  const options = backgrounds.filter(bg => bg !== currentColor);
  currentColor = options[Math.floor(Math.random() * options.length)];

  return currentColor;
}
```
</TabItem>
</Tabs>
````

在上面的示例中，我们希望能够在元素上检测双击。通过将 `threshold` 设置为 `0`，我们可以确保手势对象能够检测到点击。此外，我们定义了一个点击阈值，以便只有快速连续发生的两次点击才算作双击。

<Codepen user="ionic" slug="oNvVEwE" />

## 手势动画

请参阅我们关于实现手势动画的指南：[使用 Ionic Animations 实现手势动画](animations.md#gesture-animations)

## 类型

| Name              | Value                                        |
| ----------------- | -------------------------------------------- |
| `GestureCallback` | `(detail: GestureDetail) => boolean \| void` |

## 接口

### GestureConfig

| Property        | Type                                       | Default     | Description                                                                                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| el              | `Node`                                     | `undefined` | 要监听手势的元素。                                                                                                                                                                                                                                                                                  |
| disableScroll   | `boolean \| undefined`                     | `false`     | 如果为 true，在手势启用期间，`el` 上的滚动将被禁用。                                                                                                                                                                                                                                               |
| direction       | `'x' \| 'y' \| undefined`                  | `'x'`       | 将手势检测限制为沿特定轴的运动。                                                                                                                                                                                                                                                              |
| gestureName     | `string`                                   | `undefined` | 要创建的手势名称。                                                                                                                                                                                                                                                                                      |
| gesturePriority | `number \| undefined`                      | `0`         | 优先级较高的手势将覆盖优先级较低的手势。用于确保多个手势不会相互冲突。                                                                                                                                                                |
| passive         | `boolean \| undefined`                     | `true`      | 如果为 true，则表示手势永远不会调用 `preventDefault()`。这可用于提高滚动性能。有关更多信息，请参阅[被动监听器](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners)。 |
| maxAngle        | `number \| undefined`                      | `40`        | 检测手势时允许的最大角度。                                                                                                                                                                                                                                                                    |
| threshold       | `number \| undefined`                      | `10`        | 定义指针在手势开始之前必须移动多少距离。                                                                                                                                                                                                                                                         |
| blurOnStart     | `boolean \| undefined`                     | `undefined` | 如果为 true，手势将在触发 `onStart` 回调之前模糊任何活动的可选中元素（如 input 或 textarea）。                                                                                                                                                                                       |
| canStart        | `GestureCallback \| undefined`             | `undefined` | 一个回调函数，如果允许手势开始则返回 true。                                                                                                                                                                                                                                                          |
| onWillStart     | `(detail: GestureDetail) => Promise<void>` | `undefined` | 在手势即将开始时触发的回调。在 `canStart` 之后、`onStart` 之前触发。                                                                                                                                                                                                            |
| onStart         | `GestureCallback \| undefined`             | `undefined` | 手势开始后触发的回调。                                                                                                                                                                                                                                                                       |
| onMove          | `GestureCallback \| undefined`             | `undefined` | 检测到手势移动时触发的回调。                                                                                                                                                                                                                                                             |
| onEnd           | `GestureCallback \| undefined`             | `undefined` | 手势结束时触发的回调。通常在指针释放时触发。                                                                                                                                                                                                                       |
| notCaptured     | `GestureCallback \| undefined`             | `undefined` | 手势未被捕获时触发的回调。通常在存在具有更高优先级的冲突手势时发生。                                                                                                                                                                            |

### GestureDetail

| Property       | Type               | Description                                                                                                                               |
| -------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| type           | `string`           | 检测到的手势类型。                                                                                                    |
| startX         | `number`           | 手势开始的 x 坐标。                                                                                                 |
| startY         | `number`           | 手势开始的 y 坐标。                                                                                                 |
| startTimeStamp | `number`           | 手势开始时的时间戳。                                                                                           |
| currentX       | `number`           | 手势当前的 x 坐标。                                                                                                  |
| currentY       | `number`           | 手势当前的 y 坐标。                                                                                                  |
| velocityX      | `number`           | 手势当前在 x 轴上的移动速度。                                                                                   |
| velocityY      | `number`           | 手势当前在 y 轴上的移动速度。                                                                                   |
| deltaX         | `number`           | 手势自开始以来在 x 轴上的移动距离。                                                                            |
| deltaY         | `number`           | 手势自开始以来在 y 轴上的移动距离。                                                                            |
| timeStamp      | `number`           | 手势的当前时间戳。                                                                                                     |
| event          | `UIEvent`          | 浏览器派发的原生事件。有关更多信息，请参阅 [UIEvent](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent)。 |
| data           | `any \| undefined` | 用户指定的任何数据。可以在任何回调中设置和读取。                                                         |

## 方法

#### `enable(enable: boolean = true) => void`

启用或禁用手势。

#### `destroy() => void`

销毁手势实例并停止在目标元素上监听。
