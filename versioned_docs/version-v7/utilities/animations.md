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
    content="Ionic 应用使用 Web Animations API 来构建和运行动画。了解此实用程序如何让开发者以平台无关的方式构建复杂动画。"
  />
</head>

## 概述

Ionic Animations 是一种工具，使开发者能够以平台无关的方式创建复杂动画，无需特定框架或 Ionic 应用。

创建高效动画可能具有挑战性，因为开发者受限于可用的库和设备的硬件资源。此外，许多动画库使用 JavaScript 驱动的方法，这可能会降低动画的可扩展性并占用 CPU 时间。

另一方面，Ionic Animations 使用 [Web Animations API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Animations_API)，它将所有动画的计算和运行工作卸载到浏览器。这种方法允许浏览器优化动画并确保其流畅执行。在 Web Animations 不受支持的情况下，Ionic Animations 将回退到 [CSS Animations](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations)，其性能差异可以忽略不计。

## 安装

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
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

使用 Angular 的开发者应安装最新版本的 `@ionic/angular`。动画可以通过 `AnimationController` 依赖注入创建。

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

使用 Angular 的开发者应安装最新版本的 `@ionic/angular`。动画可以通过 `AnimationController` 依赖注入创建。

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

使用 React 的开发者应安装最新版本的 `@ionic/react`。React 封装器处于 beta 阶段。请在 GitHub 上报告任何问题！

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

## 基本动画

在下面的示例中，创建了一个改变 `ion-card` 元素不透明度并沿 X 轴从左到右移动的动画。此动画将无限次运行，每次迭代持续 1500ms。

默认情况下，所有 Ionic 动画都处于暂停状态，直到调用 `play` 方法。

import Basic from '@site/static/usage/v7/animations/basic/index.md';

<Basic />

## 关键帧动画

Ionic Animations 允许您使用关键帧控制动画中的中间步骤。这里可以使用任何有效的 CSS 属性，您甚至可以使用 CSS 变量作为值。

在编写关键帧时，连字符格式的 CSS 属性应使用驼峰格式编写。例如，`border-radius` 应写为 `borderRadius`。这也适用于 `fromTo()`、`from()` 和 `to()` 方法。

import Keyframes from '@site/static/usage/v7/animations/keyframes/index.md';

<Keyframes />

在上面的示例中，卡片元素将从其初始宽度过渡到由 `--width` 变量定义的宽度，然后过渡到最终宽度。

每个关键帧对象包含一个 `offset` 属性。`offset` 是介于 0 和 1 之间的值，定义了关键帧步骤。offset 值必须按升序排列，且不能重复。

## 分组动画

多个元素可以同时进行动画，并通过单个父动画对象进行控制。子动画会继承父动画的属性，如持续时间、缓动和迭代次数，除非另有指定。父动画的 `onFinish` 回调在所有子动画完成之前不会被调用。

此示例展示了由单个父动画控制的 3 个子动画。动画 `cardA` 和 `cardB` 继承了父动画的 2000ms 持续时间，但动画 `cardC` 由于显式设置了持续时间，所以持续时间为 5000ms。

import Group from '@site/static/usage/v7/animations/group/index.md';

<Group />

## Before 和 After 钩子

Ionic Animations 提供了钩子，让您可以在动画运行之前和动画完成之后更改元素。这些钩子可用于执行 DOM 读取和写入，以及添加或删除类和内联样式。

此示例在动画开始前设置了一个内联滤镜，将卡片的背景颜色反相 75%。动画完成后，元素上的盒阴影设置为 `rgba(255, 0, 50, 0.4) 0px 4px 16px 6px`（红色发光），并清除内联滤镜。必须停止动画才能移除盒阴影并再次使用滤镜播放。

请参阅[方法](#方法)获取完整的钩子列表。

import BeforeAndAfterHooks from '@site/static/usage/v7/animations/before-and-after-hooks/index.md';

<BeforeAndAfterHooks />

## 链式动画

动画可以链接在一起，一个接一个地运行。`play` 方法返回一个 Promise，在动画完成时解析。

import Chain from '@site/static/usage/v7/animations/chain/index.md';

<Chain />

## 手势动画

Ionic Animations 使开发者能够通过与 [Ionic Gestures](gestures.md) 无缝集成来创建强大的基于手势的动画。

在以下示例中，我们创建了一个轨道，可以沿其拖动卡片元素。我们的 `animation` 对象将负责向左或向右移动卡片元素，而我们的 `gesture` 对象将指示 `animation` 对象朝哪个方向移动。

import Gesture from '@site/static/usage/v7/animations/gesture/index.md';

<Gesture />

## 基于偏好的动画

开发者还可以使用 CSS 变量根据用户偏好（如 `prefers-reduced-motion` 和 `prefers-color-scheme`）定制动画。

此方法在首次创建动画时适用于所有受支持的浏览器。大多数浏览器还能够随着 CSS 变量的变化动态更新关键帧动画。

Safari 目前不支持动态更新关键帧动画。对于需要在 Safari 中获得此类支持的开发者，可以使用 [MediaQueryList.addListener()](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaQueryList/addListener)。

import PreferenceBased from '@site/static/usage/v7/animations/preference-based/index.md';

<PreferenceBased />

## 覆盖 Ionic 组件动画

某些 Ionic 组件允许开发者提供自定义动画。所有动画都可以作为组件的属性提供，或通过全局配置设置。

### Modals

import ModalOverride from '@site/static/usage/v7/animations/modal-override/index.md';

<ModalOverride />

## 性能注意事项

CSS 和 Web Animations 通常由合成器线程处理。这与处理布局、绘制、样式和 JavaScript 执行的主线程不同。建议优先使用可以在合成器线程上处理的属性，以获得最佳动画性能。

动画 `height` 和 `width` 等属性会导致额外的布局和绘制，可能引起卡顿并降低动画性能。另一方面，动画 `transform` 和 `opacity` 等属性可以被浏览器高度优化，通常不会引起太多卡顿。

有关哪些 CSS 属性会导致布局或绘制的信息，请参阅 [CSS Triggers](https://csstriggers.com/)。

## 调试

有关在 Chrome 中调试动画的信息，有一篇关于使用 Chrome DevTools 检查动画的优秀博客文章：https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations。

还建议为您的动画分配唯一标识符。这些标识符将显示在 Chrome 的动画检查器中，使调试更加容易：

```javascript
/**
 * .square 元素的动画应在 Chrome DevTools 中显示
 * "my-animation-identifier"。
 */
const animation = createAnimation('my-animation-identifier')
  .addElement(document.querySelector('.square'))
  .duration(1000)
  .fromTo('opacity', '1', '0');
```

## API

本节提供了 `Animation` 类上所有方法和属性的列表。

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

`opts` 是特定于自定义动画的额外选项。例如，sheet modal 进入动画包含当前断点的信息。

:::

#### AnimationCallbackOptions

```tsx
interface AnimationCallbackOptions {
  /**
   * 如果为 true，关联的回调将仅触发一次。
   */
  oneTimeCallback: boolean;
}
```

#### AnimationPlayOptions

```tsx
interface AnimationPlayOptions {
  /**
   * 如果为 true，动画将同步播放。
   * 这相当于以 0ms 的持续时间运行动画。
   */
  sync: boolean;
}
```

### 属性

| 名称                             | 描述                                       |
| -------------------------------- | ------------------------------------------ |
| `childAnimations: Animation[]`   | 给定父动画的所有子动画。                   |
| `elements: HTMLElement[]`        | 附加到动画的所有元素。                     |
| `parentAnimation?: Animation`    | 给定动画对象的父动画。                     |

### 方法

| 名称                                                                                                               | 描述                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `addAnimation(animationToAdd: Animation \| Animation[]): Animation`                                                | 将一个或多个动画组合在一起，由父动画控制。                                                                                 |
| `addElement(el: Element \| Element[] \| Node \| Node[] \| NodeList): Animation`                                    | 向动画添加一个或多个元素。                                                                                                 |
| `afterAddClass(className: string \| string[]): Animation`                                                          | 添加要在动画结束后添加到所有元素中的类或类数组。                                                                           |
| `afterAddRead(readFn: (): void): Animation`                                                                        | 添加要在动画结束后运行的执行 DOM 读取的函数。                                                                              |
| `afterAddWrite(writeFn: (): void): Animation`                                                                      | 添加要在动画结束后运行的执行 DOM 写入的函数。                                                                              |
| `afterClearStyles(propertyNames: string[]): Animation`                                                             | 添加要在动画结束后从所有元素的内联样式中清除的属性名数组。                                                                 |
| `afterRemoveClass(className: string \| string[]): Animation`                                                       | 添加要在动画结束后从所有元素中删除的类或类数组。                                                                           |
| `afterStyles(styles: { [property: string]: any }): Animation`                                                      | 添加要在动画结束后应用于所有元素的一组样式。                                                                               |
| `beforeAddClass(className: string \| string[]): Animation`                                                         | 添加要在动画开始前添加到所有元素中的类或类数组。                                                                           |
| `beforeAddRead(readFn: (): void): Animation`                                                                       | 添加要在动画开始前运行的执行 DOM 读取的函数。                                                                              |
| `beforeAddWrite(writeFn: (): void): Animation`                                                                     | 添加要在动画开始前运行的执行 DOM 写入的函数。                                                                              |
| `beforeClearStyles(propertyNames: string[]): Animation`                                                            | 添加要在动画开始前从所有元素的内联样式中清除的属性名数组。                                                                 |
| `beforeRemoveClass(className: string \| string[]): Animation`                                                      | 添加要在动画开始前从所有元素中删除的类或类数组。                                                                           |
| `beforeStyles(styles: { [property: string]: any }): Animation`                                                     | 添加要在动画开始前应用于所有元素的一组样式。                                                                               |
| `direction(direction?: AnimationDirection): Animation`                                                             | 设置动画播放的方向。                                                                                                       |
| `delay(delay?: number): Animation`                                                                                 | 设置动画开始前的延迟时间，以毫秒为单位。                                                                                   |
| `destroy(clearStyleSheets?: boolean): Animation`                                                                   | 销毁动画并清除所有元素、子动画和关键帧。                                                                                   |
| `duration(duration?: number): Animation`                                                                           | 设置动画的持续时间，以毫秒为单位。                                                                                         |
| `easing(easing?: string): Animation`                                                                               | 设置动画的缓动效果，以毫秒为单位。有关可接受的缓动值列表，请参阅 [Easing Effects](https://developer.mozilla.org/zh-CN/docs/Web/API/EffectTiming/easing#Value)。 |
| `from(property: string, value: any): Animation`                                                                    | 设置动画的起始样式。                                                                                                       |
| `fromTo(property: string, fromValue: any, toValue: any): Animation`                                                | 设置动画的起始和结束样式。                                                                                                 |
| `fill(fill?: AnimationFill): Animation`                                                                            | 设置动画在执行前后如何将样式应用于其元素。                                                                                 |
| `iterations(iterations: number): Animation`                                                                        | 设置动画循环在停止前应播放的次数。                                                                                         |
| `keyframes(keyframes: any[]): Animation`                                                                           | 设置动画的关键帧。                                                                                                         |
| `onFinish(callback: (didComplete: boolean, animation: Animation): void, opts?: AnimationCallbackOptions): Animation` | 添加动画结束时运行的回调。                                                                                                 |
| `pause(): Animation`                                                                                                | 暂停动画。                                                                                                                 |
| `play(opts?: AnimationPlayOptions): Promise<void>`                                                                  | 播放动画。                                                                                                                 |
| `progressEnd(playTo?: 0 \| 1, step: number, dur?: number): Animation`                                               | 停止在动画中搜索。                                                                                                         |
| `progressStart(forceLinearEasing?: boolean, step?: number): Animation`                                              | 开始在动画中搜索。                                                                                                         |
| `progressStep(step: number): Animation`                                                                             | 在动画中搜索。                                                                                                             |
| `stop(): Animation`                                                                                                 | 停止动画并将所有元素重置为初始状态。                                                                                       |
| `to(property: string, value: any): Animation`                                                                       | 设置动画的结束样式。                                                                                                       |
