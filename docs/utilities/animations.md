---
title: 动画
---

import Codepen from '@components/global/Codepen';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>动画：使用 Web Animations API 在 Ionic 应用中构建和运行动画</title>
  <meta
    name="description"
    content="Ionic 应用使用 Web Animations API 来构建和运行动画。了解这个工具如何让开发者以平台无关的方式构建复杂的动画。"
  />
</head>

## 概述

Ionic Animations 是一个工具，它能让开发者以平台无关的方式创建复杂的动画，且无需依赖特定的框架或 Ionic 应用本身。

创建高效的动画可能具有挑战性，因为开发者受到设备可用库和硬件资源的限制。此外，许多动画库采用 JavaScript 驱动的方式，这可能会降低动画的可扩展性并占用 CPU 时间。

另一方面，Ionic Animations 使用了 [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)，它将所有动画的计算和运行都卸载到浏览器处理。这种方式允许浏览器优化动画并确保其流畅执行。在不支持 Web Animations 的情况下，Ionic Animations 会回退到 [CSS 动画](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)，其性能差异应该可以忽略不计。

## 安装

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular（独立模式）' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

使用 Ionic Core 和 JavaScript 的开发者应安装最新版本的 `@ionic/core`。

```javascript
import { createAnimation } from 'https://cdn.jsdelivr.net/npm/@ionic/core@latest/dist/esm/index.mjs';

...

const animation = createAnimation()
  .addElement(myElementRef)
  .duration(1000)
  .fromTo('opacity', '1', '0.5');
}

```
</TabItem>
<TabItem value="typescript">

使用 Ionic Core 和 TypeScript 的开发者应安装最新版本的 `@ionic/core`。

```tsx
import { createAnimation, Animation } from '@ionic/core';

...

const animation: Animation = createAnimation('')
  .addElement(myElementRef)
  .duration(1000)
  .fromTo('opacity', '1', '0.5');
}
```
</TabItem>
<TabItem value="angular">

使用 Angular 的开发者应安装最新版本的 `@ionic/angular`。动画可以通过依赖注入的 `AnimationController` 来创建。

```tsx

import { Animation, AnimationController } from '@ionic/angular';

...

constructor(private animationCtrl: AnimationController) {
  const animation: Animation = this.animationCtrl.create()
    .addElement(myElementRef)
    .duration(1000)
    .fromTo('opacity', '1', '0.5');
}

```
</TabItem>
<TabItem value="angular-standalone">

使用 Angular 的开发者应安装最新版本的 `@ionic/angular`。动画可以通过依赖注入的 `AnimationController` 来创建。

```tsx

import { Animation, AnimationController } from '@ionic/angular/standalone';

...

constructor(private animationCtrl: AnimationController) {
  const animation: Animation = this.animationCtrl.create()
    .addElement(myElementRef)
    .duration(1000)
    .fromTo('opacity', '1', '0.5');
}

```
</TabItem>
<TabItem value="react">

使用 React 的开发者应安装最新版本的 `@ionic/react`。React 封装组件目前处于 Beta 阶段。如有任何问题，请在 GitHub 上报告！

```tsx

import { CreateAnimation, Animation } from '@ionic/react';

...

<CreateAnimation
  duration={1000}
  fromTo={{
    property: 'opacity',
    fromValue: '1',
    toValue: '0.5'
  }}
>
...
</CreateAnimation>

```
</TabItem>
<TabItem value="vue">

使用 Ionic Vue 的开发者应安装最新版本的 `@ionic/vue`。

```javascript
import { createAnimation } from '@ionic/vue';
import { ref } from 'vue';

...

const myElementRef = ref();

...

const animation = createAnimation()
  .addElement(myElementRef.value)
  .duration(1000)
  .fromTo('opacity', '1', '0.5');
}

```
</TabItem>
</Tabs>
````

## 基础动画

在下面的例子中，我们创建了一个动画，它会改变 `ion-card` 元素的不透明度，并使其沿 X 轴从左向右移动。这个动画将无限次运行，每次迭代持续 1500 毫秒。

默认情况下，所有 Ionic Animations 都是暂停状态，直到调用 `play` 方法才会开始播放。

import Basic from '@site/static/usage/v8/animations/basic/index.md';

<Basic />

## 关键帧动画

Ionic Animations 允许你使用关键帧来控制动画的中间步骤。这里可以使用任何有效的 CSS 属性，你甚至可以将 CSS 变量用作值。

在编写关键帧时，连字符形式的 CSS 属性应使用驼峰命名法书写。例如，`border-radius` 应写为 `borderRadius`。这也适用于 `fromTo()`、`from()` 和 `to()` 方法。

import Keyframes from '@site/static/usage/v8/animations/keyframes/index.md';

<Keyframes />

在上面的例子中，卡片元素的宽度将从其初始宽度过渡到由 `--width` 变量定义的宽度，然后再过渡到最终宽度。

每个关键帧对象都包含一个 `offset` 属性。`offset` 是一个介于 0 和 1 之间的值，用于定义关键帧的步骤。偏移值必须按升序排列，且不能重复。

## 组合动画

多个元素可以同时进行动画，并由一个父动画对象控制。除非另有指定，子动画会继承诸如持续时间、缓动函数和迭代次数等属性。父动画的 `onFinish` 回调在所有子动画完成之前不会被调用。

这个例子展示了由单个父动画控制的 3 个子动画。动画 `cardA` 和 `cardB` 继承了父动画 2000 毫秒的持续时间，但动画 `cardC` 的持续时间是 5000 毫秒，因为它是显式设置的。

import Group from '@site/static/usage/v8/animations/group/index.md';

<Group />

## 动画前后钩子

Ionic Animations 提供了钩子，让你可以在动画运行前和动画完成后修改元素。这些钩子可以用来执行 DOM 的读取和写入操作，以及添加或删除类和内联样式。

这个例子在动画开始前设置了一个内联滤镜，将卡片的背景颜色反转 `75%`。动画完成后，元素上的阴影被设置为 `rgba(255, 0, 50, 0.4) 0px 4px 16px 6px`，即一个红色的辉光效果，同时内联滤镜被清除。必须停止动画才能移除阴影并再次使用滤镜播放。

有关完整的钩子列表，请参见 [方法](#方法)。

import BeforeAndAfterHooks from '@site/static/usage/v8/animations/before-and-after-hooks/index.md';

<BeforeAndAfterHooks />

## 链式动画

动画可以链接起来，一个接一个地运行。`play` 方法返回一个 Promise，该 Promise 在动画完成时解析。

import Chain from '@site/static/usage/v8/animations/chain/index.md';

<Chain />

<LegacyAnchor id="gesture-animations" />

## 手势动画

Ionic Animations 让开发者能够通过与 [Ionic Gestures](gestures.md) 无缝集成，创建强大的基于手势的动画。

在下面的例子中，我们创建了一个轨道，可以沿着它拖拽卡片元素。我们的 `animation` 对象将负责向左或向右移动卡片元素，而我们的 `gesture` 对象将指示 `animation` 对象移动的方向。

import Gesture from '@site/static/usage/v8/animations/gesture/index.md';

<Gesture />

## 基于偏好的动画

开发者还可以使用 CSS 变量，根据用户偏好（如 `prefers-reduced-motion` 和 `prefers-color-scheme`）来定制他们的动画。

在首次创建动画时，这个方法在所有支持的浏览器中都有效。大多数浏览器也能够在 CSS 变量变化时动态更新关键帧动画。

Safari 目前不支持动态更新关键帧动画。对于需要在 Safari 中获得此类支持的开发者，可以使用 [MediaQueryList.addListener()](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener)。

import PreferenceBased from '@site/static/usage/v8/animations/preference-based/index.md';

<PreferenceBased />

## 覆盖 Ionic 组件动画

某些 Ionic 组件允许开发者提供自定义动画。所有动画要么作为组件的属性提供，要么通过全局配置设置。

### 模态框

import ModalOverride from '@site/static/usage/v8/animations/modal-override/index.md';

<ModalOverride />

## 性能考量

CSS 和 Web 动画通常在合成器线程上处理。这与执行布局、绘制、样式和 JavaScript 的主线程不同。建议你优先使用可以在合成器线程上处理的属性，以获得最佳的动画性能。

对 `height` 和 `width` 等属性进行动画处理会导致额外的布局和绘制，这可能会引起卡顿并降低动画性能。另一方面，对 `transform` 和 `opacity` 等属性进行动画处理，浏览器可以高度优化，通常不会引起太多卡顿。

有关哪些 CSS 属性会导致布局或绘制发生的信息，请参阅 [CSS Triggers](https://csstriggers.com/)。

## 调试

要在 Chrome 中调试动画，有一篇关于使用 Chrome DevTools 检查动画的优秀博客文章：https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations

还建议为你的动画分配唯一的标识符。这些标识符将显示在 Chrome 的动画检查器中，应该能更容易地进行调试：

```javascript
/**
 * .square 元素的动画应在 Chrome DevTools 中
 * 显示 "my-animation-identifier"。
 */
const animation = createAnimation('my-animation-identifier')
  .addElement(document.querySelector('.square'))
  .duration(1000)
  .fromTo('opacity', '1', '0');
```

## API

本节提供了 `Animation` 类上所有可用方法和属性的列表。

### 接口

#### AnimationDirection

```tsx
type AnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
```

#### AnimationFill

```tsx
type AnimationFill = 'auto' | 'none' | 'forwards' | 'backwards' | 'both';
```

#### AnimationBuilder

```tsx
type AnimationBuilder = (baseEl: any, opts?: any) => Animation;
```

:::note

`opts` 是特定于自定义动画的附加选项。例如，sheet 模态框的进入动画包含了当前断点的信息。

:::

#### AnimationCallbackOptions

```tsx
interface AnimationCallbackOptions {
  /**
   * 如果为 true，相关联的回调将只触发一次。
   */
  oneTimeCallback: boolean;
}
```

#### AnimationPlayOptions

```tsx
interface AnimationPlayOptions {
  /**
   * 如果为 true，动画将同步播放。
   * 这相当于以 0 毫秒的持续时间运行动画。
   */
  sync: boolean;
}
```

### 属性

| 名称                            | 描述                                       |
| ------------------------------- | ------------------------------------------ |
| `childAnimations: Animation[]`  | 给定父动画的所有子动画。                   |
| `elements: HTMLElement[]`       | 附加到动画的所有元素。                     |
| `parentAnimation?: Animation`   | 给定动画对象的父动画。                     |

### 方法

| 名称                                                                                                                 | 描述                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `addAnimation(animationToAdd: Animation \| Animation[]): Animation`                                                  | 将一个或多个动画组合在一起，由父动画控制。                                                                                                           |
| `addElement(el: Element \| Element[] \| Node \| Node[] \| NodeList): Animation`                                      | 向动画添加一个或多个元素。                                                                                                                                              |
| `afterAddClass(className: string \| string[]): Animation`                                                            | 添加一个类或类数组，在动画结束后添加到动画中的所有元素上。                                                                                   |
| `afterAddRead(readFn: (): void): Animation`                                                                          | 添加一个函数，在动画结束后运行，该函数执行一次 DOM 读取操作。                                                                                                             |
| `afterAddWrite(writeFn: (): void): Animation`                                                                        | 添加一个函数，在动画结束后运行，该函数执行一次 DOM 写入操作。                                                                                                            |
| `afterClearStyles(propertyNames: string[]): Animation`                                                               | 添加一个属性名数组，这些属性将在动画结束后从动画中所有元素的内联样式中清除。                                                           |
| `afterRemoveClass(className: string \| string[]): Animation`                                                         | 添加一个类或类数组，在动画结束后从动画中的所有元素上移除。                                                                            |
| `afterStyles(styles: { [property: string]: any }): Animation`                                                        | 添加一个样式对象，这些样式将在动画结束后应用于动画中的所有元素。                                                                                         |
| `beforeAddClass(className: string \| string[]): Animation`                                                           | 添加一个类或类数组，在动画开始前添加到动画中的所有元素上。                                                                                |
| `beforeAddRead(readFn: (): void): Animation`                                                                         | 添加一个函数，在动画开始前运行，该函数执行一次 DOM 读取操作。                                                                                                          |
| `beforeAddWrite(writeFn: (): void): Animation`                                                                       | 添加一个函数，在动画开始前运行，该函数执行一次 DOM 写入操作。                                                                                                         |
| `beforeClearStyles(propertyNames: string[]): Animation`                                                              | 添加一个属性名数组，这些属性将在动画开始前从动画中所有元素的内联样式中清除。                                                        |
| `beforeRemoveClass(className: string \| string[]): Animation`                                                        | 添加一个类或类数组，在动画开始前从动画中的所有元素上移除。                                                                         |
| `beforeStyles(styles: { [property: string]: any }): Animation`                                                       | 添加一个样式对象，这些样式将在动画开始前应用于动画中的所有元素。                                                                                      |
| `direction(direction?: AnimationDirection): Animation`                                                               | 设置动画播放的方向。                                                                                                                                         |
| `delay(delay?: number): Animation`                                                                                   | 设置动画开始的延迟时间（毫秒）。                                                                                                                           |
| `destroy(clearStyleSheets?: boolean): Animation`                                                                     | 销毁动画并清除所有元素、子动画和关键帧。                                                                                                          |
| `duration(duration?: number): Animation`                                                                             | 设置动画的持续时间（毫秒）。                                                                                                                                      |
| `easing(easing?: string): Animation`                                                                                 | 设置动画的缓动函数（毫秒）。参见 [缓动效果](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing#Value) 以获取可接受的缓动值列表。 |
| `from(property: string, value: any): Animation`                                                                      | 设置动画的起始样式。                                                                                                                                                  |
| `fromTo(property: string, fromValue: any, toValue: any): Animation`                                                  | 设置动画的起始和结束样式。                                                                                                                                          |
| `fill(fill?: AnimationFill): Animation`                                                                              | 设置动画在执行前后如何将样式应用到其元素上。                                                                                        |
| `iterations(iterations: number): Animation`                                                                          | 设置动画循环在停止前应播放的次数。                                                                                                           |
| `keyframes(keyframes: any[]): Animation`                                                                             | 为动画设置关键帧。                                                                                                                                                     |
| `onFinish(callback: (didComplete: boolean, animation: Animation): void, opts?: AnimationCallbackOptions): Animation` | 添加一个回调函数，在动画结束时运行。                                                                                                                                     |
| `pause(): Animation`                                                                                                 | 暂停动画。                                                                                                                                                                    |
| `play(opts?: AnimationPlayOptions): Promise<void>`                                                                   | 播放动画。                                                                                                                                                                     |
| `progressEnd(playTo?: 0 \| 1, step: number, dur?: number): Animation`                                                | 停止在动画中定位。                                                                                                                                                      |
| `progressStart(forceLinearEasing?: boolean, step?: number): Animation`                                               | 开始在动画中定位。                                                                                                                                               |
| `progressStep(step: number): Animation`                                                                              | 在动画中定位。                                                                                                                                                              |
| `stop(): Animation`                                                                                                  | 停止动画并将所有元素重置为初始状态。                                                                                                                       |
| `to(property: string, value: any): Animation`                                                                        | 设置动画的结束样式。                                                                                                                                                    |