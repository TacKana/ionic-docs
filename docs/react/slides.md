---
title: 从 IonSlides 迁移至 Swiper.js
---

<head>
  <title>为 React 幻灯片设置 Swiper.js [示例] | Ionic</title>
  <meta
    name="description"
    content="如果您需要一个现代的触摸滑块组件，我们推荐使用 Swiper.js。了解如何在您的应用中为 React 设置 Swiper，并学习如何从 IonSlides 迁移。"
  />
</head>

:::warning 还在寻找 `IonSlides` 吗？

`IonSlides` 在 v6.0.0 版本中已弃用，并在 v7.0.0 版本中被移除。我们建议直接使用 Swiper.js 库。详细的迁移流程如下。

:::

如果您需要一个现代的触摸滑块组件，我们推荐使用 <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a>。本指南将介绍如何在您的 Ionic Framework 应用中为 React 设置 Swiper，并涵盖从 `IonSlides` 迁移到官方 Swiper React 集成所需的步骤。

:::note
Swiper 的 React 组件计划在未来的 Swiper 版本中移除，取而代之的是 <a href="https://swiperjs.com/element" target="_blank" rel="noopener noreferrer">Swiper Element</a>。但是，本指南展示了如何迁移到 React 组件，因为它在撰写本文时提供了最稳定的体验。需要注意的是，React 对 Web Components 的支持目前还不完善。

在 Ionic Framework 中使用 Swiper.js **并不强制要求**使用 Swiper 的 React 组件。
:::

## 开始迁移

首先，将 Ionic 更新到最新版本：

```shell
npm install @ionic/react@latest @ionic/react-router@latest
```

完成后，在项目中安装 Swiper 依赖：

```shell
npm install swiper@latest
```

:::note
使用 Create React App 的开发者必须使用 `react-scripts` v5.0.0 或更高版本，并结合最新版本的 Swiper。
:::

## 样式调整

接下来，我们需要导入基础的 Swiper 样式。同时，我们也会导入 Ionic 提供的样式文件，这样我们就可以使用与 `IonSlides` 相同的 CSS 变量来自定义 Swiper 的样式。

我们建议在使用 Swiper 的组件中导入这些样式，这样可以确保样式仅在需要时才被加载：

```javascript
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    ...
  );
};
export default Home;
```

:::note
在 Ionic 中使用 Swiper.js **并不强制要求**导入 `@ionic/react/css/ionic-swiper.css`。此文件主要用于与 `IonSlides` 组件保持向后兼容性，如果您不想使用该样式表中提供的 CSS 变量，可以安全地省略它。
:::

### 更新选择器

以前，我们可以通过 `ion-slides` 和 `ion-slide` 选择器来应用自定义样式。这些样式块的内容本身保持不变，但我们需要更新选择器。下面是从 `ion-slides` 迁移到 Swiper React 时的选择器变化列表：

| ion-slides 选择器 | Swiper 选择器    |
| ----------------- | ---------------- |
| `ion-slides`      | `.swiper`        |
| `ion-slide`       | `.swiper-slide`  |

### 使用预处理器（可选）

对于使用 SCSS 或 Less 样式的开发者，Swiper 也提供了相应的导入文件。

对于 Less 样式，将 Swiper 导入路径中的 `css` 替换为 `less`：

```javascript
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/less';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    ...
  );
};
export default Home;
```

对于 SCSS 样式，将 Swiper 导入路径中的 `css` 替换为 `scss`：

```javascript
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    ...
  );
};
export default Home;
```

## 使用组件

Swiper 导出两个组件：`Swiper` 和 `SwiperSlide`。`Swiper` 组件相当于之前的 `IonSlides`，而 `SwiperSlide` 则相当于 `IonSlide`。

这些组件需要从 `swiper/react` 导入：

```tsx
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper>
          <SwiperSlide>幻灯片 1</SwiperSlide>
          <SwiperSlide>幻灯片 2</SwiperSlide>
          <SwiperSlide>幻灯片 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};
export default Home;
```

## 使用模块

默认情况下，Swiper for React 不会导入任何额外的模块。要使用导航（Navigation）或分页器（Pagination）等模块，您需要先导入它们。

`IonSlides` 自动包含了 Pagination、Scrollbar、Autoplay、Keyboard 和 Zoom 这些模块。本部分将向您展示如何安装这些模块。

首先，我们需要从 `swiper` 包中导入所需的模块及其对应的 CSS 文件：

```tsx
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper>
          <SwiperSlide>幻灯片 1</SwiperSlide>
          <SwiperSlide>幻灯片 2</SwiperSlide>
          <SwiperSlide>幻灯片 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};
export default Home;
```

接着，我们需要通过在 `Swiper` 组件上使用 `modules` 属性来将这些模块提供给 Swiper：

```tsx
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}>
          <SwiperSlide>幻灯片 1</SwiperSlide>
          <SwiperSlide>幻灯片 2</SwiperSlide>
          <SwiperSlide>幻灯片 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};
export default Home;
```

最后，我们可以通过使用相应的属性来启用这些功能：

```tsx
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper
          modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}
          autoplay={true}
          keyboard={true}
          pagination={true}
          scrollbar={true}
          zoom={true}
        >
          <SwiperSlide>幻灯片 1</SwiperSlide>
          <SwiperSlide>幻灯片 2</SwiperSlide>
          <SwiperSlide>幻灯片 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};
export default Home;
```

:::note
完整的模块列表请参考 <a href="https://swiperjs.com/react#usage" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#usage</a>。
:::

## IonicSlides 模块

在 `IonSlides` 中，Ionic 自动定制了数十个 Swiper 属性，从而在移动设备上滑动时提供了流畅的体验。我们建议使用 `IonicSlides` 模块，以确保直接使用 Swiper 时也能应用这些属性。但是，在 Ionic 中使用 Swiper.js **并不强制要求**使用此模块。

建议您查看 `IonicSlides` 设置的[属性列表](https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/slides/IonicSlides.ts)，并决定哪些是您想自定义的。

我们可以通过从 `@ionic/react` 导入 `IonicSlides` 模块，并将其作为 `modules` 数组中的最后一项传入来安装它：

```tsx
import React from 'react';
import { IonContent, IonPage, IonicSlides } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper
          modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]}
          autoplay={true}
          keyboard={true}
          pagination={true}
          scrollbar={true}
          zoom={true}
        >
          <SwiperSlide>幻灯片 1</SwiperSlide>
          <SwiperSlide>幻灯片 2</SwiperSlide>
          <SwiperSlide>幻灯片 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};
export default Home;
```

:::note
`IonicSlides` 模块必须是数组中的最后一个模块，这样它才能自动定制 Pagination、Scrollbar、Zoom 等模块的设置。
:::

## 属性

Swiper 的选项是直接作为 props 提供给 `<Swiper>` 组件的，而不是像 `IonSlides` 那样通过 `options` 对象传递。

假设在一个使用 `IonSlides` 的应用中，我们设置了 `slidesPerView` 和 `loop` 选项：

```tsx
const MyComponent: React.FC = () => {
  return (
    <IonSlides
      options={{
        slidesPerView: 3,
        loop: true,
      }}
    >
      <IonSlide>幻灯片 1</IonSlide>
      <IonSlide>幻灯片 2</IonSlide>
      <IonSlide>幻灯片 3</IonSlide>
    </IonSlides>
  );
};
```

迁移时，我们需要将这些选项从 `options` 对象中移出，直接作为属性传给 `<Swiper>` 组件：

```tsx
const MyComponent: React.FC = () => {
  return (
    <Swiper slidesPerView={3} loop={true}>
      <SwiperSlide>幻灯片 1</SwiperSlide>
      <SwiperSlide>幻灯片 2</SwiperSlide>
      <SwiperSlide>幻灯片 3</SwiperSlide>
    </Swiper>
  );
};
```

下面是从 `IonSlides` 迁移到 Swiper React 时的属性变化完整列表：

| 名称      | 说明                                                                                                                 |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| options   | 将每个选项直接作为属性设置在 `<Swiper>` 组件上。                                                                      |
| mode      | 如果想根据 mode 应用不同样式，可以在 CSS 中使用 `.ios .swiper` 或 `.md .swiper` 来定位幻灯片。                          |
| pager     | 改用 `pagination` 属性。需要先安装 Pagination 模块。                                                                  |
| scrollbar | 您可以继续使用 `scrollbar` 属性，但请确保先安装 Scrollbar 模块。                                                       |

:::note
Swiper React 可用的所有属性请参考 <a href="https://swiperjs.com/react#swiper-props" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#swiper-props</a>。
:::

## 事件

由于 `Swiper` 组件并非由 Ionic Framework 提供，因此事件名称不再带有 `onIonSlide` 前缀。

假设在一个使用 `IonSlides` 的应用中，我们使用了 `onIonSlideDidChange` 事件：

```tsx
const MyComponent: React.FC = () => {
  return (
    <IonSlides onIonSlideDidChange={() => onSlideChange()}>
      <IonSlide>幻灯片 1</IonSlide>
      <IonSlide>幻灯片 2</IonSlide>
      <IonSlide>幻灯片 3</IonSlide>
    </IonSlides>
  );
};
```

迁移时，我们需要将事件名称改为 `onSlideChange`：

```tsx
const MyComponent: React.FC = () => {
  return (
    <Swiper onSlideChange={() => onSlideChange()}>
      <SwiperSlide>幻灯片 1</SwiperSlide>
      <SwiperSlide>幻灯片 2</SwiperSlide>
      <SwiperSlide>幻灯片 3</SwiperSlide>
    </Swiper>
  );
};
```

下面是从 `IonSlides` 迁移到 Swiper React 时的事件名称变化完整列表：

| IonSlides 事件名              | Swiper 事件名                    |
| ----------------------------- | -------------------------------- |
| `onIonSlideWillChange`        | `onSlideChangeTransitionStart`   |
| `onIonSlideDidChange`         | `onSlideChangeTransitionEnd`     |
| `onIonSlideDoubleTap`         | `onDoubleTap`                    |
| `onIonSlideDrag`              | `onSliderMove`                   |
| `onIonSlideNextStart`         | `onSlideNextTransitionStart`     |
| `onIonSlideNextEnd`           | `onSlideNextTransitionEnd`       |
| `onIonSlidePrevStart`         | `onSlidePrevTransitionStart`     |
| `onIonSlidePrevEnd`           | `onSlidePrevTransitionEnd`       |
| `onIonSlideReachStart`        | `onReachBeginning`               |
| `onIonSlideReachEnd`          | `onReachEnd`                     |
| `onIonSlideTap`               | `onTap`                          |
| `onIonSlideTouchStart`        | `onTouchStart`                   |
| `onIonSlideTouchEnd`          | `onTouchEnd`                     |
| `onIonSlideTransitionStart`   | `onTransitionStart`              |
| `onIonSlideTransitionEnd`     | `onTransitionEnd`                |
| `onIonSlidesDidLoad`          | `onInit`                         |

:::note
Swiper 中可用的所有事件请参考 <a href="https://swiperjs.com/swiper-api#events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#events</a>。
:::

## 方法

大部分方法已被移除，推荐直接访问 `Swiper` 的属性。

访问这些属性时需要小心，因为您要访问的是 Swiper 实例本身的属性，而不是您的 React 组件。为此，我们建议通过 `onSwiper` 回调来获取 `Swiper` 实例的引用：

```tsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInterface } from 'swiper';
...
const Home: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperInterface>();
  return (
    ...
    <Swiper
      onSwiper={(swiper) => setSwiperInstance(swiper)}
    >
      ...
    </Swiper>
  )
};
export default Home;
```

之后，如果您想访问 Swiper 实例上的某个属性，可以直接使用 `swiperInstance`。例如，如果您想检查 `isBeginning` 属性，可以这样写：`swiperInstance.isBeginning`。但请务必先确保 `swiperInstance` 已经定义！

下面是从 `IonSlides` 迁移到 Swiper React 时的方法变化完整列表：

| IonSlides 方法       | 说明                                                                                    |
| -------------------- | --------------------------------------------------------------------------------------- |
| `getActiveIndex()`   | 改用 `activeIndex` 属性。                                                                |
| `getPreviousIndex()` | 改用 `previousIndex` 属性。                                                              |
| `getSwiper()`        | 通过 `onSwiper` 获取 Swiper 实例的引用。请参考上面的示例。                               |
| `isBeginning()`      | 改用 `isBeginning` 属性。                                                                |
| `isEnd()`            | 改用 `isEnd` 属性。                                                                      |
| `length()`           | 改用 `slides` 属性（例如 swiperInstance.slides.length）。                                 |
| `lockSwipeToNext()`  | 改用 `allowSlidesNext` 属性。                                                            |
| `lockSwipeToPrev()`  | 改用 `allowSlidePrev` 属性。                                                             |
| `lockSwipes()`       | 分别使用 `allowSlideNext`、`allowSlidePrev` 和 `allowTouchMove` 属性来组合实现。          |
| `startAutoplay()`    | 改用 `autoplay` 属性来控制。                                                             |
| `stopAutoplay()`     | 改用 `autoplay` 属性来控制。                                                             |

## 使用特效

如果您想使用 Cube 或 Fade 等特效，可以像安装其他模块一样安装它们。在这个例子中，我们将使用淡入淡出（Fade）效果。首先，我们从 `swiper` 中导入 `EffectFade` 并将其添加到 `modules` 数组中：

```tsx
import React from 'react';
import { IonContent, IonPage, IonicSlides } from '@ionic/react';
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper modules={[EffectFade, IonicSlides]}>
          <SwiperSlide>幻灯片 1</SwiperSlide>
          <SwiperSlide>幻灯片 2</SwiperSlide>
          <SwiperSlide>幻灯片 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};
export default Home;
```

接着，我们需要导入该特效对应的样式表：

```tsx
import React from 'react';
import { IonContent, IonPage, IonicSlides } from '@ionic/react';
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper modules={[EffectFade, IonicSlides]}>
          <SwiperSlide>幻灯片 1</SwiperSlide>
          <SwiperSlide>幻灯片 2</SwiperSlide>
          <SwiperSlide>幻灯片 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};
export default Home;
```

之后，我们可以通过在 `swiper` 上设置 `effect` 属性为 `"fade"` 来激活它：

```tsx
import React from 'react';
import { IonContent, IonPage, IonicSlides } from '@ionic/react';
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper modules={[EffectFade, IonicSlides]} effect="fade">
          <SwiperSlide>幻灯片 1</SwiperSlide>
          <SwiperSlide>幻灯片 2</SwiperSlide>
          <SwiperSlide>幻灯片 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};
export default Home;
```

:::note
有关 Swiper 特效的更多信息，请参考 <a href="https://swiperjs.com/react#effects" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#effects</a>。
:::

## 总结

现在您已经完成了 Swiper 的安装，可以开始享受一系列全新的 Swiper 功能了。我们建议您先从 <a href="https://swiperjs.com/react" target="_blank" rel="noopener noreferrer">Swiper React 介绍</a>开始，然后参考 <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer">Swiper API 文档</a>进行深入学习。

## 常见问题解答

### 在哪里可以找到迁移示例？

您可以在 https://github.com/ionic-team/slides-migration-samples 找到一个示例应用，其中同时包含了 `ion-slides` 和与之等价的 Swiper 用法。

### 在哪里可以获得迁移方面的帮助？

如果您在迁移过程中遇到问题，请在 [Ionic 论坛](https://forum.ionicframework.com/)上发帖提问。

### 应该在哪里提交错误报告？

在开启一个问题之前，建议先在 <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper 讨论板</a>或 <a href="https://forum.ionicframework.com" target="_blank">Ionic 论坛</a>上发帖，看看您的问题是否可以通过社区解决。

如果您遇到的是 Swiper 库本身的问题，新的 bug 应该提交到 Swiper 的代码仓库：<a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

如果您遇到的是 `IonicSlides` 模块的问题，新的 bug 应该提交到 Ionic Framework 的代码仓库：<a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>