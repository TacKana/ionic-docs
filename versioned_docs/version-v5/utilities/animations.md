```mdx-code-block
import Codepen from '@components/global/Codepen';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

# 动画

## 概述

Ionic Animations 是一个工具，它使开发者能够以不限定特定平台的方式创建复杂的动画，且无需特定的框架或 Ionic 应用。

创建高效的动画可能具有挑战性，因为开发者受到可用库和设备硬件资源的限制。此外，许多动画库使用 JavaScript 驱动的方法，这可能会降低动画的可扩展性并占用 CPU 时间。

相比之下，Ionic Animations 使用 [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)，它将动画的所有计算和运行工作卸载给浏览器。这种方法允许浏览器优化动画并确保其流畅执行。在不支持 Web Animations 的情况下，Ionic Animations 将回退到 [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)，其性能差异可以忽略不计。

## 安装

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'angular', label: 'Angular' },
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

使用 Angular 的开发者应安装最新版本的 `@ionic/angular`。可以通过 `AnimationController` 依赖注入来创建动画。

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
<TabItem value="react">

使用 React 的开发者应安装最新版本的 `@ionic/react`。React 包装器目前处于测试阶段。请在 GitHub 上报告任何问题！

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
createAnimation()
  .addElement(document.querySelector('.square'))
  .duration(1500)
  .iterations(Infinity)
  .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
  .fromTo('opacity', '1', '0.2');
```
</TabItem>
<TabItem value="angular">

```javascript
this.animationCtrl.create()
  .addElement(document.querySelector('.square'))
  .duration(1500)
  .iterations(Infinity)
  .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
  .fromTo('opacity', '1', '0.2');
```
</TabItem>
<TabItem value="react">

```tsx
<CreateAnimation
  duration={1500}
  iterations={Infinity}
  fromTo={[
    { property: 'transform', fromValue: 'translateX(0px)', toValue: 'translateX(100px)' },
    { property: 'opacity', fromValue: '1', toValue: '0.2' }
  ]}
>
  ...
</CreateAnimation>
```
</TabItem>
<TabItem value="vue">

```javascript
import { createAnimation } from '@ionic/vue';
import { ref } from 'vue';

...

const elementRef = ref();

...

createAnimation()
  .addElement(elementRef.value)
  .duration(1500)
  .iterations(Infinity)
  .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
  .fromTo('opacity', '1', '0.2');
```
</TabItem>
</Tabs>
````

在上面的例子中，创建了一个动画，它改变 `.square` 元素的不透明度，并使其沿 X 轴从左向右移动。该动画将无限次运行，每次迭代持续 1500 毫秒。

默认情况下，所有 Ionic Animations 都处于暂停状态，直到调用 `play` 方法。

<Codepen user="ionic" slug="bGbMojP" />

## 关键帧动画

Ionic Animations 允许您使用关键帧控制动画的中间步骤。这里可以使用任何有效的 CSS 属性，甚至可以使用 CSS 变量作为值。

在编写关键帧时，带连字符的 CSS 属性应使用驼峰式写法。例如，`border-radius` 应写为 `borderRadius`。这也适用于 `fromTo()`、`from()` 和 `to()` 方法。

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
createAnimation()
  .addElement(document.querySelector('.square'))
  .duration(3000)
  .iterations(Infinity)
  .keyframes([
    { offset: 0, background: 'red' },
    { offset: 0.72, background: 'var(--background)' },
    { offset: 1, background: 'green' }
  ]);
```
</TabItem>
<TabItem value="angular">

```javascript
this.animationCtrl.create()
  .addElement(this.square.nativeElement)
  .duration(3000)
  .iterations(Infinity)
  .keyframes([
    { offset: 0, background: 'red' },
    { offset: 0.72, background: 'var(--background)' },
    { offset: 1, background: 'green' }
  ]);
```
</TabItem>
<TabItem value="react">

```tsx
<CreateAnimation
  duration={3000}
  iterations={Infinity}
  keyframes={[
    { offset: 0, background: 'red' },
    { offset: 0.72, background: 'var(--background)' },
    { offset: 1, background: 'green' }
  ]}
>
...
</CreateAnimation>
```
</TabItem>
<TabItem value="vue">

```javascript
import { createAnimation } from '@ionic/vue';
import { ref } from 'vue';

...

const squareRef = ref();

...

createAnimation()
  .addElement(squareRef.value)
  .duration(3000)
  .iterations(Infinity)
  .keyframes([
    { offset: 0, background: 'red' },
    { offset: 0.72, background: 'var(--background)' },
    { offset: 1, background: 'green' }
  ]);
```
</TabItem>
</Tabs>
````

在上面的例子中，`.square` 元素将从红色背景色过渡到由 `--background` 变量定义的背景色，然后过渡到绿色背景色。

每个关键帧对象都包含一个 `offset` 属性。`offset` 是一个介于 0 和 1 之间的值，用于定义关键帧步骤。偏移值必须按升序排列且不能重复。

<Codepen user="ionic" slug="YzKLEzR" />

## 分组动画

多个元素可以同时进行动画，并通过一个单一的父动画对象进行控制。除非另有指定，子动画会继承持续时间、缓动和迭代次数等属性。父动画的 `onFinish` 回调要等到所有子动画完成后才会被调用。

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
const squareA = createAnimation()
  .addElement(document.querySelector('.square-a'))
  .keyframes([
    { offset: 0, transform: 'scale(1) rotate(0)' },
    { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
    { offset: 1, transform: 'scale(1) rotate(45deg)' }
  ]);

const squareB = createAnimation()
  .addElement(document.querySelector('.square-b'))
  .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: '1' },
    { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ]);

const squareC = createAnimation()
  .addElement(document.querySelector('.square-c'))
  .duration(5000)
  .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: '0.5' },
    { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
    { offset: 1, transform: 'scale(1)', opacity: '0.5' }
  ]);

const parent = createAnimation()
  .duration(2000)
  .iterations(Infinity)
  .addAnimation([squareA, squareB, squareC]);
```

</TabItem>
<TabItem value="angular">

```javascript
const squareA = this.animationCtrl.create()
  .addElement(this.squareA.nativeElement)
  .keyframes([
    { offset: 0, transform: 'scale(1) rotate(0)' },
    { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
    { offset: 1, transform: 'scale(1) rotate(45deg)' }
  ]);

const squareB = this.animationCtrl.create()
  .addElement(this.squareB.nativeElement)
  .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: '1' },
    { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ]);

const squareC = this.animationCtrl.create()
  .addElement(this.squareC.nativeElement)
  .duration(5000)
  .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: '0.5' },
    { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
    { offset: 1, transform: 'scale(1)', opacity: '0.5' }
  ]);

const parent = this.animationCtrl.create()
  .duration(2000)
  .iterations(Infinity)
  .addAnimation([squareA, squareB, squareC]);
```

</TabItem>
<TabItem value="react">

```tsx
private parentRef: React.RefObject<CreateAnimation> = React.createRef();
private squareARef: React.RefObject<CreateAnimation> = React.createRef();
private squareBRef: React.RefObject<CreateAnimation> = React.createRef();
private squareCRef: React.RefObject<CreateAnimation> = React.createRef();

...

componentDidMount() {
  const parent = this.parentRef.current!.animation;
  const squareA = this.squareARef.current!.animation;
  const squareB = this.squareBRef.current!.animation;
  const squareC = this.squareCRef.current!.animation;

  parent.addAnimation([squareA, squareB, squareC]);
}

render() {
  return (
    <>
      <CreateAnimation
        ref={this.parentRef}
        duration={2000}
        iterations={Infinity}
      ></CreateAnimation>

      <CreateAnimation
        ref={this.squareARef}
        keyframes={[
          { offset: 0, transform: 'scale(1) rotate(0)' },
          { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
          { offset: 1, transform: 'scale(1) rotate(0deg)' }
        ]}
      >
        <div className="square"></div>
      </CreateAnimation>

      <CreateAnimation
        ref={this.squareBRef}
        keyframes={[
          { offset: 0, transform: 'scale(1)', opacity: '1' },
          { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
          { offset: 1, transform: 'scale(1)', opacity: '1' }
        ]}
      >
        <div className="square"></div>
      </CreateAnimation>

      <CreateAnimation
        ref={this.squareCRef}
        duration={5000}
        keyframes={[
          { offset: 0, transform: 'scale(1)', opacity: '0.5' },
          { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
          { offset: 1, transform: 'scale(1)', opacity: '0.5' }
        ]}
      >
        <div className="square"></div>
      </CreateAnimation>
    </>
  )
}
```

</TabItem>
<TabItem value="vue">

```javascript
import { createAnimation } from '@ionic/vue';
import { ref } from 'vue';

...

const squareARef = ref();
const squareBRef = ref();
const squareCRef = ref();

...

const squareA = createAnimation()
  .addElement(squareARef.value)
  .keyframes([
    { offset: 0, transform: 'scale(1) rotate(0)' },
    { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
    { offset: 1, transform: 'scale(1) rotate(45deg)' }
  ]);

const squareB = createAnimation()
  .addElement(squareBRef.value)
  .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: '1' },
    { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ]);

const squareC = createAnimation()
  .addElement(squareCRef.value)
  .duration(5000)
  .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: '0.5' },
    { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
    { offset: 1, transform: 'scale(1)', opacity: '0.5' }
  ]);

const parent = createAnimation()
  .duration(2000)
  .iterations(Infinity)
  .addAnimation([squareA, squareB, squareC]);
```

</TabItem>
</Tabs>
````

此示例展示了由单个父动画控制的 3 个子动画。动画 `squareA` 和 `squareB` 继承了父动画的 2000 毫秒持续时间，但动画 `squareC` 由于显式设置了 5000 毫秒的持续时间。

<!-- cspell:disable-next-line -->

<Codepen user="ionic" slug="oNvdogM" height="460" />

## 前后钩子

Ionic Animations 提供了钩子，允许您在动画运行前和完成后更改元素。这些钩子可用于执行 DOM 读取和写入，以及添加或移除类和内联样式。

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
createAnimation()
  .addElement(document.querySelector('.square'))
  .duration(2000)
  .beforeStyles({
    opacity: 0.2
  })
  .afterStyles({
    background: 'rgba(0, 255, 0, 0.5)'
  })
  .afterClearStyles(['opacity'])
  .keyframes([
    { offset: 0, transform: 'scale(1)' },
    { offset: 0.5, transform: 'scale(1.5)' },
    { offset: 1, transform: 'scale(1)' }
  ])
```
</TabItem>
<TabItem value="angular">

```javascript
this.animationCtrl.create()
  .addElement(this.square.nativeElement)
  .duration(2000)
  .beforeStyles({
    opacity: 0.2
  })
  .afterStyles({
    background: 'rgba(0, 255, 0, 0.5)'
  })
  .afterClearStyles(['opacity'])
  .keyframes([
    { offset: 0, transform: 'scale(1)' },
    { offset: 0.5, transform: 'scale(1.5)' },
    { offset: 1, transform: 'scale(1)' }
  ])
```
</TabItem>
<TabItem value="react">

```tsx
<CreateAnimation
  duration={2000}
  beforeStyles={{
    opacity: 0.2
  }}
  afterStyles={{
    background: 'rgba(0, 255, 0, 0.5)'
  }}
  afterClearStyles={['opacity']}
  keyframes={[
    { offset: 0, transform: 'scale(1)' },
    { offset: 0.5, transform: 'scale(1.5)' },
    { offset: 1, transform: 'scale(1)' }
  ]}
>
  ...
</CreateAnimation>
```
</TabItem>
<TabItem value="vue">

```javascript
import { createAnimation } from '@ionic/vue';
import { ref } from 'vue';

...

const squareRef = ref();

...

createAnimation()
  .addElement(squareRef.value)
  .duration(2000)
  .beforeStyles({
    opacity: 0.2
  })
  .afterStyles({
    background: 'rgba(0, 255, 0, 0.5)'
  })
  .afterClearStyles(['opacity'])
  .keyframes([
    { offset: 0, transform: 'scale(1)' },
    { offset: 0.5, transform: 'scale(1.5)' },
    { offset: 1, transform: 'scale(1)' }
  ])
```
</TabItem>
</Tabs>
````

在此示例中，在动画开始之前，为 `.square` 元素设置了 0.2 的内联不透明度。动画完成后，元素的背景色被设置为 `rgba(0, 255, 0, 0.5)`，并且内联不透明度被清除。

有关钩子的完整列表，请参阅[方法](#methods)部分。

<!-- cspell:disable-next-line -->

<Codepen user="ionic" slug="BaBxmwo" />

## 链式动画

动画可以链接起来一个接一个地运行。`play` 方法返回一个 Promise，该 Promise 在动画完成时解析。

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
const squareA = createAnimation()
  .addElement(document.querySelector('.square-a'))
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1) rotate(0)' },
    { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
    { offset: 1, transform: 'scale(1) rotate(0)' }
  ]);

const squareB = createAnimation()
  .addElement(document.querySelector('.square-b'))
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: '1' },
    { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ]);

const squareC = createAnimation()
  .addElement(document.querySelector('.square-c'))
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: '0.5' },
    { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
    { offset: 1, transform: 'scale(1)', opacity: '0.5' }
  ]);

await squareA.play();
await squareB.play();
await squareC.play();
```
</TabItem>
<TabItem value="angular">

```javascript
const squareA = this.animationCtrl.create()
  .addElement(this.squareA.nativeElement)
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1) rotate(0)' },
    { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
    { offset: 1, transform: 'scale(1) rotate(0)' }
  ]);

const squareB = this.animationCtrl.create()
  .addElement(this.squareB.nativeElement)
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: '1' },
    { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ]);

const squareC = this.animationCtrl.create()
  .addElement(this.squareC.nativeElement)
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: '0.5' },
    { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
    { offset: 1, transform: 'scale(1)', opacity: '0.5' }
  ]);

await squareA.play();
await squareB.play();
await squareC.play();
```
</TabItem>
<TabItem value="react">

```tsx
private squareARef: React.RefObject<CreateAnimation> = React.createRef();
private squareBRef: React.RefObject<CreateAnimation> = React.createRef();
private squareCRef: React.RefObject<CreateAnimation> = React.createRef();

...

async componentDidMount() {
  const squareA = this.squareARef.current!.animation;
  const squareB = this.squareBRef.current!.animation;
  const squareC = this.squareCRef.current!.animation;

  await squareA.play();
  await squareB.play();
  await squareC.play();
}

render() {
  return (
    <>
      <CreateAnimation
        ref={this.squareARef}
        fill="none"
        duration={1000}
        keyframes={[
          { offset: 0, transform: 'scale(1) rotate(0)' },
          { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
          { offset: 1, transform: 'scale(1) rotate(0deg)' }
        ]}
      >
        <div className="square"></div>
      </CreateAnimation>

      <CreateAnimation
        ref={this.squareBRef}
        fill="none"
        duration={1000}
        keyframes={[
          { offset: 0, transform: 'scale(1)', opacity: '1' },
          { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
          { offset: 1, transform: 'scale(1)', opacity: '1' }
        ]}
      >
        <div className="square"></div>
      </CreateAnimation>

      <CreateAnimation
        ref={this.squareCRef}
        fill="none"
        duration={1000}
        keyframes={[
          { offset: 0, transform: 'scale(1)', opacity: '0.5' },
          { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
          { offset: 1, transform: 'scale(1)', opacity: '0.5' }
        ]}
      >
        <div className="square"></div>
      </CreateAnimation>
    </>
  )
}
```
</TabItem>
<TabItem value="vue">

```javascript
import { createAnimation } from '@ionic/vue';
import { ref } from 'vue';

...

const squareARef = ref();
const squareBRef = ref();
const squareCRef = ref();

...

const squareA = createAnimation()
  .addElement(squareARef.value)
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1) rotate(0)' },
    { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
    { offset: 1, transform: 'scale(1) rotate(0)' }
  ]);

const squareB = createAnimation()
  .addElement(squareBRef.value)
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: '1' },
    { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ]);

const squareC = createAnimation()
  .addElement(squareCRef.value)
  .fill('none')
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'scale(1)', opacity: '0.5' },
    { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
    { offset: 1, transform: 'scale(1)', opacity: '0.5' }
  ]);

await squareA.play();
await squareB.play();
await squareC.play();
```
</TabItem>
</Tabs>
````

<Codepen user="ionic" slug="MWgGrwX" height="460" />

## 手势动画

Ionic Animations 通过与 [Ionic Gestures](gestures.md) 无缝集成，使开发者能够创建强大的基于手势的动画。

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
let initialStep = 0;
let started = false;

const square = document.querySelector('.square');
const MAX_TRANSLATE = 400;

const animation = createAnimation()
  .addElement(square)
  .duration(1000)
  .fromTo('transform', 'translateX(0)', `translateX(${MAX_TRANSLATE}px)`);

const gesture = createGesture({
  el: square,
  threshold: 0,
  gestureName: 'square-drag',
  onMove: ev => onMove(ev),
  onEnd: ev => onEnd(ev)
})

gesture.enable(true);

const onMove = (ev): {
  if (!started) {
    animation.progressStart();
    started = true;
  }

  animation.progressStep(getStep(ev));
}

const onEnd = (ev): {
  if (!started) { return; }

  gesture.enable(false);

  const step = getStep(ev);
  const shouldComplete = step > 0.5;

  animation
    .progressEnd((shouldComplete) ? 1 : 0, step)
    .onFinish((): { gesture.enable(true); });

  initialStep = (shouldComplete) ? MAX_TRANSLATE : 0;
  started = false;
}

const clamp = (min, n, max): {
  return Math.max(min, Math.min(n, max));
};

const getStep = (ev): {
  const delta = initialStep + ev.deltaX;
  return clamp(0, delta / MAX_TRANSLATE, 1);
}
```
</TabItem>
<TabItem value="angular">

```tsx
private animation?: Animation;
private gesture?: Gesture;

private started: boolean = false;
private initialStep: number = 0;
private MAX_TRANSLATE: number = 400;

ngOnInit() {
  this.animation = this.animationCtrl.create()
    .addElement(this.square.nativeElement)
    .duration(1000)
    .fromTo('transform', 'translateX(0)', `translateX(${this.MAX_TRANSLATE}px)`);

  this.gesture = this.gestureCtrl.create({
    el: this.square.nativeElement,
    threshold: 0,
    gestureName: 'square-drag',
    onMove: ev => this.onMove(ev),
    onEnd: ev => this.onEnd(ev)
  })

  this.gesture.enable(true);
}

private onMove(ev) {
  if (!started) {
    this.animation.progressStart();
    this.started = true;
  }

  this.animation.progressStep(this.getStep(ev));
}

private onEnd(ev) {
  if (!this.started) { return; }

  this.gesture.enable(false);

  const step = this.getStep(ev);
  const shouldComplete = step > 0.5;

  this.animation
    .progressEnd((shouldComplete) ? 1 : 0, step)
    .onFinish((): { this.gesture.enable(true); });

  this.initialStep = (shouldComplete) ? this.MAX_TRANSLATE : 0;
  this.started = false;
}

private clamp(min, n, max) {
  return Math.max(min, Math.min(n, max));
}

private getStep(ev) {
  const delta = this.initialStep + ev.deltaX;
  return this.clamp(0, delta / this.MAX_TRANSLATE, 1);
}
```
</TabItem>
<TabItem value="react">

```javascript
import { createGesture, CreateAnimation, Gesture, GestureDetail } from '@ionic/react';
import React from 'react';

const MAX_TRANSLATE = 400;

class MyComponent extends React.Component<{}, any> {
  private animation: React.RefObject<CreateAnimation> = React.createRef();
  private gesture?: Gesture;
  private started: boolean = false;
  private initialStep: number = 0;

  constructor(props: any) {
    super(props);

    this.state = {
      progressStart: undefined,
      progressStep: undefined,
      progressEnd: undefined,
      onFinish: undefined
    };
  }

  componentDidMount() {
    const square = Array.from(this.animation.current!.nodes.values())[0];

    this.gesture = createGesture({
      el: square,
      gestureName: 'square-drag',
      threshold: 0,
      onMove: ev => this.onMove(ev),
      onEnd: ev => this.onEnd(ev)
    });

    this.gesture.enable(true);
  }

  private onMove(ev: GestureDetail) {
    if (!this.started) {
      this.setState({
        ...this.state,
        progressStart: { forceLinearEasing: true }
      });
      this.started = true;
    }

    this.setState({
      ...this.state,
      progressStep: { step: this.getStep(ev) }
    });
  }

  private onEnd(ev: GestureDetail) {
    if (!this.started) { return; }

    this.gesture!.enable(false);

    const step = this.getStep(ev);
    const shouldComplete = step > 0.5;

    this.setState({
      ...this.state,
      progressEnd: { playTo: (shouldComplete) ? 1 : 0, step },
      onFinish: { callback: () => {
        this.gesture!.enable(true);
        this.setState({
          progressStart: undefined,
          progressStep: undefined,
          progressEnd: undefined
        })
      }, opts: { oneTimeCallback: true }}
    });

    this.initialStep = (shouldComplete) ? MAX_TRANSLATE : 0;
    this.started = false;
  }

  private getStep(ev: GestureDetail) {
    const delta = this.initialStep + ev.deltaX;
    return this.clamp(0, delta / MAX_TRANSLATE, 1);
  }

  private clamp(min: number, n: number, max: number) {
    return Math.max(min, Math.min(n, max));
  }

  render() {
    return (
      <>
        <div className="track">
          <CreateAnimation
            ref={this.animation}
            duration={1000}
            progressStart={this.state.progressStart}
            progressStep={this.state.progressStep}
            progressEnd={this.state.progressEnd}
            onFinish={this.state.onFinish}
            fromTo={{
              property: 'transform',
              fromValue: 'translateX(0)',
              toValue: `translateX(${MAX_TRANSLATE}px)`
          }}>
            <div className="square"></div>
          </CreateAnimation>
        </div>
      </>
    );
  }
}
```
</TabItem>
<TabItem value="vue">

```javascript
import { createAnimation, createGesture } from '@ionic/vue';
import { ref } from 'vue';

...

let initialStep = 0;
let started = false;

const squareRef = ref();
const MAX_TRANSLATE = 400;

const animation = createAnimation()
  .addElement(squareRef.value)
  .duration(1000)
  .fromTo('transform', 'translateX(0)', `translateX(${MAX_TRANSLATE}px)`);

const gesture = createGesture({
  el: squareRef.value,
  threshold: 0,
  gestureName: 'square-drag',
  onMove: ev => onMove(ev),
  onEnd: ev => onEnd(ev)
})

gesture.enable(true);

const onMove = (ev): {
  if (!started) {
    animation.progressStart();
    started = true;
  }

  animation.progressStep(getStep(ev));
}

const onEnd = (ev): {
  if (!started) { return; }

  gesture.enable(false);

  const step = getStep(ev);
  const shouldComplete = step > 0.5;

  animation
    .progressEnd((shouldComplete) ? 1 : 0, step)
    .onFinish((): { gesture.enable(true); });

  initialStep = (shouldComplete) ? MAX_TRANSLATE : 0;
  started = false;
}

const clamp = (min, n, max): {
  return Math.max(min, Math.min(n, max));
};

const getStep = (ev): {
  const delta = initialStep + ev.deltaX;
  return clamp(0, delta / MAX_TRANSLATE, 1);
}
```
</TabItem>
</Tabs>
````

在这个例子中，我们创建了一个轨迹，可以沿着它拖动 `.square` 元素。我们的 `animation` 对象将负责向左或向右移动 `.square` 元素，而我们的 `gesture` 对象将指示 `animation` 对象朝哪个方向移动。

<Codepen user="ionic" slug="jONxzRL" />

## 基于偏好的动画

开发者还可以使用 CSS 变量根据用户偏好（如 `prefers-reduced-motion` 和 `prefers-color-scheme`）定制他们的动画。

### 用法

```css
.square {
  width: 100px;
  height: 100px;
  opacity: 0.5;
  background: blue;
  margin: 10px;

  --background: red;
}

@media (prefers-color-scheme: dark) {
  .square {
    --background: green;
  }
}
```

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
createAnimation()
   .addElement(document.querySelector('.square'))
   .duration(1500)
   .iterations(Infinity)
   .direction('alternate')
   .fromTo('background', 'blue', 'var(--background)');
```
</TabItem>
<TabItem value="angular">

```javascript
this.animationCtrl.create()
   .addElement(this.square.nativeElement)
   .duration(1500)
   .iterations(Infinity)
   .direction('alternate')
   .fromTo('background', 'blue', 'var(--background)');
```
</TabItem>
<TabItem value="react">

```tsx
<CreateAnimation
  duration={1500}
  iterations={Infinity}
  direction='alternate'
  fromTo={{
    property: 'background',
    fromValue: 'blue',
    toValue: 'var(--background)'
  }}
>
  <div className="square"></div>
</CreateAnimation>
```
</TabItem>
<TabItem value="vue">

```javascript
import { createAnimation } from '@ionic/vue';
import { ref } from 'vue';

...

const squareRef = ref();

...

createAnimation()
   .addElement(squareRef.value)
   .duration(1500)
   .iterations(Infinity)
   .direction('alternate')
   .fromTo('background', 'blue', 'var(--background)');
```
</TabItem>
</Tabs>
````

在首次创建动画时，此方法在所有支持的浏览器中均有效。大多数浏览器还能够在 CSS 变量更改时动态更新关键帧动画。

Safari 目前不支持动态更新关键帧动画。对于在 Safari 中需要这种支持的开发者，可以使用 [MediaQueryList.addListener()](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener)。

<Codepen user="ionic" slug="JjjYVKj" />

## 覆盖 Ionic 组件动画

某些 Ionic 组件允许开发者提供自定义动画。所有动画都可以作为组件的属性提供，或者通过全局配置进行设置。

### 模态框

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
customElements.define('modal-page', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title>模态框头部</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        模态框内容
      </ion-content>
    `;
  }
});

function presentModal() {
  const enterAnimation = (baseEl: any) => {
    const backdropAnimation = createAnimation()
      .addElement(baseEl.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(baseEl.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' }
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  }

  const leaveAnimation = (baseEl: any) => {
    return enterAnimation(baseEl).direction('reverse');
  }

  // 创建带有 `modal-page` 组件的模态框
  const modalElement = document.createElement('ion-modal');
  modalElement.component = 'modal-page';
  modalElement.enterAnimation = enterAnimation;
  modalElement.leaveAnimation = leaveAnimation;

  // 显示模态框
  document.body.appendChild(modalElement);
  return modalElement.present();
}
```
</TabItem>
<TabItem value="angular">

```tsx
import { Component } from '@angular/core';
import { ModalController, AnimationController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'modal-example',
  templateUrl: 'modal-example.html',
  styleUrls: ['./modal-example.css']
})
export class ModalExample {
  constructor(public modalController: ModalController,
              public animationCtrl: AnimationController) { }

  async presentModal() {
    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ]);

      return this.animationCtrl.create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }

    const leaveAnimation = (baseEl: any) => {
      return enterAnimation(baseEl).direction('reverse');
    }

    const modal = await this.modalController.create({
      component: ModalPage,
      enterAnimation,
      leaveAnimation
    });
    return await modal.present();
  }
}
```
</TabItem>
<TabItem value="react">

```javascript
import React, { useState } from 'react';
import { CreateAnimation, IonModal, IonButton, IonContent } from '@ionic/react';

export const ModalExample: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const enterAnimation = (baseEl: any) => {
    const backdropAnimation = createAnimation()
      .addElement(baseEl.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(baseEl.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' }
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  }

  const leaveAnimation = (baseEl: any) => {
    return enterAnimation(baseEl).direction('reverse');
  }

  return (
    <IonContent>
      <IonModal isOpen={showModal} enterAnimation={enterAnimation} leaveAnimation={leaveAnimation}>
        <p>这是模态框内容</p>
        <IonButton onClick={() => setShowModal(false)}>关闭模态框</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>显示模态框</IonButton>
    </IonContent>
  );
};
```
</TabItem>
<TabItem value="vue">

```javascript
<template>
  <ion-page>
    <ion-content>
      <ion-modal
        :is-open="isModalOpen"
        :enter-animation="enterAnimation"
        :leave-animation="leaveAnimation"
        @didDismiss="setModalOpen(false)"
      >
        模态框内容放在这里。
      </ion-modal>

      <ion-button @click="setModalOpen(true)">显示模态框</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { createAnimation, IonButton, IonContent, IonModal, IonPage } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { IonButton, IonContent, IonModal, IonPage },
  setup() {
    const isModalOpen = ref(false);
    const setModalOpen = (state) => isModalOpen.value = state;

    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = createAnimation()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = createAnimation()
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ]);

      return createAnimation()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }

    const leaveAnimation = (baseEl: any) => {
      return enterAnimation(baseEl).direction('reverse');
    }

    return { isModalOpen, setModalOpen, enterAnimation, leaveAnimation }
  }
})
</script>
```
</TabItem>
</Tabs>
````

<!-- cspell:disable-next-line -->

<Codepen user="ionic" slug="ExapZBZ" />

## 性能考虑

CSS 和 Web Animations 通常在合成器线程上处理。这与执行布局、绘制、样式设置和 JavaScript 的主线程不同。为了获得最佳的动画性能，建议优先使用可以在合成器线程上处理的属性。

对 `height` 和 `width` 等属性进行动画处理会导致额外的布局和绘制，这可能会引起卡顿并降低动画性能。另一方面，对 `transform` 和 `opacity` 等属性进行动画处理，浏览器可以高度优化，通常不会引起太多卡顿。

有关哪些 CSS 属性会导致布局或绘制发生的信息，请参阅 [CSS Triggers](https://csstriggers.com/)。

## 调试

关于在 Chrome 中调试动画，有一篇很好的博客文章介绍了如何使用 Chrome DevTools 检查动画：https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations。

还建议为您的动画分配唯一的标识符。这些标识符将显示在 Chrome 的动画检查器中，并使调试更容易：

```javascript
/**
 * 对于 .square 元素的动画应在 Chrome DevTools 中显示
 * "my-animation-identifier"。
 */
const animation = createAnimation('my-animation-identifier')
  .addElement(document.querySelector('.square'))
  .duration(1000)
  .fromTo('opacity', '1', '0');
```

## API

本节提供了 `Animation` 类上可用的所有方法和属性的列表。

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

`opts` 是特定于自定义动画的附加选项。例如，表单模态框进入动画包含了当前断点的信息。

:::

#### AnimationCallbackOptions

```tsx
interface AnimationCallbackOptions {
  /**
   * 如果为 true，则关联的回调只会被触发一次。
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

| 名称                           | 描述                                       |
| ------------------------------ | ------------------------------------------ |
| `childAnimations: Animation[]` | 给定父动画的所有子动画。                     |
| `elements: HTMLElement[]`      | 附加到动画的所有元素。                       |
| `parentAnimation?: Animation`  | 给定动画对象的父动画。                       |

### 方法

| 名称                                                                                                                 | 描述                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `addAnimation(animationToAdd: Animation \| Animation[]): Animation`                                                  | 将一个或多个动画分组在一起，由父动画控制。                                                                                                                                         |
| `addElement(el: Element \| Element[] \| Node \| Node[] \| NodeList): Animation`                                      | 向动画添加一个或多个元素。                                                                                                                                                         |
| `afterAddClass(className: string \| string[]): Animation`                                                            | 添加一个类或类数组，在动画结束后将其添加到动画中的所有元素。                                                                                                                         |
| `afterAddRead(readFn: (): void): Animation`                                                                          | 添加一个执行 DOM 读取的函数，在动画结束后运行。                                                                                                                                     |
| `afterAddWrite(writeFn: (): void): Animation`                                                                        | 添加一个执行 DOM 写入的函数，在动画结束后运行。                                                                                                                                     |
| `afterClearStyles(propertyNames: string[]): Animation`                                                               | 添加一个属性名数组，在动画结束后从动画中所有元素的内联样式中清除这些属性。                                                                                                             |
| `afterRemoveClass(className: string \| string[]): Animation`                                                         | 添加一个类或类数组，在动画结束后将其从动画中的所有元素中移除。                                                                                                                         |
| `afterStyles(styles: { [property: string]: any }): Animation`                                                        | 添加一个样式对象，在动画结束后将其应用于动画中的所有元素。                                                                                                                           |
| `beforeAddClass(className: string \| string[]): Animation`                                                           | 添加一个类或类数组，在动画开始前将其添加到动画中的所有元素。                                                                                                                           |
| `beforeAddRead(readFn: (): void): Animation`                                                                         | 添加一个执行 DOM 读取的函数，在动画开始前运行。                                                                                                                                       |
| `beforeAddWrite(writeFn: (): void): Animation`                                                                       | 添加一个执行 DOM 写入的函数，在动画开始前运行。                                                                                                                                       |
| `beforeClearStyles(propertyNames: string[]): Animation`                                                              | 添加一个属性名数组，在动画开始前从动画中所有元素的内联样式中清除这些属性。                                                                                                             |
| `beforeRemoveClass(className: string \| string[]): Animation`                                                        | 添加一个类或类数组，在动画开始前将其从动画中的所有元素中移除。                                                                                                                           |
| `beforeStyles(styles: { [property: string]: any }): Animation`                                                       | 添加一个样式对象，在动画开始前将其应用于动画中的所有元素。                                                                                                                             |
| `direction(direction?: AnimationDirection): Animation`                                                               | 设置动画播放的方向。                                                                                                                                                               |
| `delay(delay?: number): Animation`                                                                                   | 设置动画开始的延迟时间（毫秒）。                                                                                                                                                     |
| `destroy(clearStyleSheets?: boolean): Animation`                                                                     | 销毁动画并清除所有元素、子动画和关键帧。                                                                                                                                           |
| `duration(duration?: number): Animation`                                                                             | 设置动画的持续时间（毫秒）。                                                                                                                                                         |
| `easing(easing?: string): Animation`                                                                                 | 设置动画的缓动函数（毫秒）。有关接受的缓动值列表，请参阅 [Easing Effects](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing#Value)。                                  |
| `from(property: string, value: any): Animation`                                                                      | 设置动画的开始样式。                                                                                                                                                               |
| `fromTo(property: string, fromValue: any, toValue: any): Animation`                                                  | 设置动画的开始和结束样式。                                                                                                                                                         |
| `fill(fill?: AnimationFill): Animation`                                                                              | 设置动画在动画执行前后如何将样式应用于其元素。                                                                                                                                         |
| `iterations(iterations: number): Animation`                                                                          | 设置动画循环在停止前应播放的次数。                                                                                                                                                 |
| `keyframes(keyframes: any[]): Animation`                                                                             | 设置动画的关键帧。                                                                                                                                                                 |
| `onFinish(callback: (didComplete: boolean, animation: Animation): void, opts?: AnimationCallbackOptions): Animation` | 添加一个在动画结束时运行的回调。                                                                                                                                                   |
| `pause(): Animation`                                                                                                 | 暂停动画。                                                                                                                                                                         |
| `play(opts?: AnimationPlayOptions): Promise<void>`                                                                   | 播放动画。                                                                                                                                                                         |
| `progressEnd(playTo?: 0 \| 1, step: number, dur?: number): Animation`                                                | 停止通过动画进行搜索。                                                                                                                                                             |
| `progressStart(forceLinearEasing?: boolean, step?: number): Animation`                                               | 开始通过动画进行搜索。                                                                                                                                                             |
| `progressStep(step: number): Animation`                                                                              | 通过动画进行搜索。                                                                                                                                                                 |
| `stop(): Animation`                                                                                                  | 停止动画并将所有元素重置为其初始状态。                                                                                                                                             |
| `to(property: string, value: any): Animation`                                                                        | 设置动画的结束样式。                                                                                                                                                               |