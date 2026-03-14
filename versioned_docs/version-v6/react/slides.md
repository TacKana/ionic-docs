---
title: 从 IonSlides 迁移到 Swiper.js
---

<head>
  <title>为 React 幻灯片设置 Swiper.js [示例] | Ionic</title>
  <meta
    name="description"
    content="如果您需要一个现代化的触摸滑块组件，我们推荐使用 Swiper.js。了解如何在您的应用程序中为 React 设置 Swiper，并学习如何从 IonSlides 迁移。"
  />
</head>

如果您需要一个现代化的触摸滑块组件，我们推荐使用 <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a>。它驱动了我们的 `IonSlides` 组件，但现在我们建议开发者直接使用 Swiper for React。

本指南将介绍如何在您的 Ionic Framework 应用程序中设置 Swiper for React。它还将提供您从 `IonSlides` 迁移到官方 Swiper React 集成所需的任何迁移信息。

:::note
Swiper 的 React 组件计划在 Swiper 的未来版本中移除，取而代之的是 <a href="https://swiperjs.com/element" target="_blank" rel="noopener noreferrer">Swiper Element</a>。然而，本指南展示了如何迁移到 React 组件，因为它在撰写本文时提供了最稳定的体验。值得注意的是，React 对 Web Components 的支持尚不完善。

使用 Swiper 的 React 组件**不是**在 Ionic Framework 中使用 Swiper.js 所必需的。
:::

## 开始使用

首先，更新到最新版本的 Ionic：

```shell
npm install @ionic/react@latest @ionic/react-router@latest
```

完成后，在您的项目中安装 Swiper 依赖项：

```shell
npm install swiper@latest
```

:::note
使用 Create React App 的开发者必须使用 `react-scripts` v5.0.0+ 配合最新版本的 Swiper。
:::

## 样式滑动

接下来，我们需要导入基础的 Swiper 样式。我们还将导入 Ionic 提供的样式，这些样式允许我们使用与 `IonSlides` 相同的 CSS 变量来自定义 Swiper 样式。

我们建议在使用 Swiper 的组件中导入样式。这确保了样式仅在需要时加载：

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
导入 `@ionic/react/css/ionic-swiper.css` **不是**在 Ionic 中使用 Swiper.js 所必需的。此文件用于与 `IonSlides` 组件向后兼容，如果您不想使用样式表中提供的 CSS 变量，可以安全地省略它。
:::

### 更新选择器

以前，我们可以针对 `ion-slides` 和 `ion-slide` 来应用任何自定义样式。这些样式块的内容保持不变，但我们需要更新选择器。以下是迁移到 Swiper React 时的选择器更改列表：

| ion-slides 选择器 | Swiper 选择器 |
| ----------------- | ------------- |
| `ion-slides`      | `.swiper`     |
| `ion-slide`       | `.swiper-slide` |

### 预处理器（可选）

对于使用 SCSS 或 Less 样式的开发者，Swiper 也提供了这些文件的导入。

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

Swiper 导出两个组件：`Swiper` 和 `SwiperSlide`。`Swiper` 组件等同于 `IonSlides`，而 `SwiperSlide` 等同于 `IonSlide`。

这些组件从 `swiper/react` 导入：

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

默认情况下，Swiper for React 不导入任何额外的模块。要使用诸如 Navigation 或 Pagination 之类的模块，您需要先导入它们。

`IonSlides` 自动包含了 Pagination、Scrollbar、Autoplay、Keyboard 和 Zoom 模块。本指南的这一部分将向您展示如何安装这些模块。

首先，我们需要从 `swiper` 包中导入模块及其对应的 CSS 文件：

```tsx
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

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

接下来，我们需要通过在 `Swiper` 组件上使用 `modules` 属性将这些模块提供给 Swiper：

```tsx
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

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

最后，我们可以通过使用相应的属性来开启这些功能：

```tsx
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

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
查看 <a href="https://swiperjs.com/react#usage" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#usage</a> 获取完整的模块列表。
:::

## IonicSlides 模块

使用 `IonSlides` 时，Ionic 自动定制了数十个 Swiper 属性。这带来了在移动设备上滑动时流畅的体验。我们建议使用 `IonicSlides` 模块以确保这些属性在直接使用 Swiper 时也被设置。然而，在 Ionic 中使用 Swiper.js **并不需要**使用此模块。

建议查看由 `IonicSlides` 设置的[属性列表](https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/slides/IonicSlides.ts)，并确定您想要自定义哪些属性。

我们可以通过从 `@ionic/react` 导入 `IonicSlides` 模块并将其作为最后一项传递给 `modules` 数组来安装它：

```tsx
import React from 'react';
import { IonContent, IonPage, IonicSlides } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

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
`IonicSlides` 模块必须是数组中的最后一个模块。这将让它自动定制 Pagination、Scrollbar、Zoom 等模块的设置。
:::

## 属性

Swiper 选项是直接作为 props 提供给 `<Swiper>` 组件的，而不是像 `IonSlides` 那样通过 `options` 对象。

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

要迁移，我们需要将这些选项从 `options` 对象中移出，直接作为属性传递给 `<Swiper>` 组件：

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

以下是迁移到 Swiper React 时的属性更改完整列表：

| 名称      | 备注                                                                                       |
| --------- | ------------------------------------------------------------------------------------------ |
| options   | 将每个选项直接作为属性设置在 `<Swiper>` 组件上。                                             |
| mode      | 如需基于 mode 使用不同样式，您可以在 CSS 中使用 `.ios .swiper` 或 `.md .swiper` 来定位幻灯片。 |
| pager     | 改用 `pagination` 属性。需要安装 Pagination 模块。                                          |
| scrollbar | 您可以继续使用 `scrollbar` 属性，只需确保先安装 Scrollbar 模块。                             |

:::note
Swiper React 中所有可用的属性可以在 <a href="https://swiperjs.com/react#swiper-props" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#swiper-props</a> 找到。
:::

## 事件

由于 `Swiper` 组件不是由 Ionic Framework 提供的，事件名称不会有 `onIonSlide` 前缀。

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

要迁移，我们需要将事件名称改为 `onSlideChange`：

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

以下是迁移到 Swiper React 时的事件名称更改完整列表：

| IonSlides 事件              | Swiper 事件                     |
| --------------------------- | ------------------------------- |
| `onIonSlideWillChange`      | `onSlideChangeTransitionStart`  |
| `onIonSlideDidChange`       | `onSlideChangeTransitionEnd`    |
| `onIonSlideDoubleTap`       | `onDoubleTap`                   |
| `onIonSlideDrag`            | `onSliderMove`                  |
| `onIonSlideNextStart`       | `onSlideNextTransitionStart`    |
| `onIonSlideNextEnd`         | `onSlideNextTransitionEnd`      |
| `onIonSlidePrevStart`       | `onSlidePrevTransitionStart`    |
| `onIonSlidePrevEnd`         | `onSlidePrevTransitionEnd`      |
| `onIonSlideReachStart`      | `onReachBeginning`              |
| `onIonSlideReachEnd`        | `onReachEnd`                    |
| `onIonSlideTap`             | `onTap`                         |
| `onIonSlideTouchStart`      | `onTouchStart`                  |
| `onIonSlideTouchEnd`        | `onTouchEnd`                    |
| `onIonSlideTransitionStart` | `onTransitionStart`             |
| `onIonSlideTransitionEnd`   | `onTransitionEnd`               |
| `onIonSlidesDidLoad`        | `onInit`                        |

:::note
Swiper 中所有可用的事件可以在 <a href="https://swiperjs.com/swiper-api#events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#events</a> 找到。
:::

## 方法

大多数方法已被移除，转而推荐直接访问 `Swiper` 的 props。

访问这些属性可能有些棘手，因为您想要访问的是 Swiper 实例本身的属性，而不是您的 React 组件。为此，我们建议通过 `onSwiper` 获取对 `Swiper` 实例的引用：

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

从这里开始，如果您想访问 Swiper 实例上的属性，可以通过 `swiperInstance` 访问。例如，如果您想检查 `isBeginning` 属性，可以这样做：`swiperInstance.isBeginning`。不过首先要确保 `swiperInstance` 已定义！

以下是迁移到 Swiper React 时的方法更改完整列表：

| IonSlides 方法         | 备注                                                                                   |
| ---------------------- | -------------------------------------------------------------------------------------- |
| `getActiveIndex()`     | 改用 `activeIndex` 属性。                                                                |
| `getPreviousIndex()`   | 改用 `previousIndex` 属性。                                                              |
| `getSwiper()`          | 使用 `onSwiper` 获取对 Swiper 实例的引用。参考上面的示例。                                    |
| `isBeginning()`        | 改用 `isBeginning` 属性。                                                                |
| `isEnd()`              | 改用 `isEnd` 属性。                                                                      |
| `length()`             | 改用 `slides` 属性（例如 swiperRef.slides.length）。                                        |
| `lockSwipeToNext()`    | 改用 `allowSlidesNext` 属性。                                                             |
| `lockSwipeToPrev()`    | 改用 `allowSlidePrev` 属性。                                                              |
| `lockSwipes()`         | 改用 `allowSlideNext`、`allowSlidePrev` 和 `allowTouchMove` 属性。                             |
| `startAutoplay()`      | 改用 `autoplay` 属性。                                                                   |
| `stopAutoplay()`       | 改用 `autoplay` 属性。                                                                   |

## 效果

如果您正在使用诸如 Cube 或 Fade 之类的效果，您可以像我们处理其他模块一样安装它们。在这个例子中，我们将使用淡入淡出效果。首先，从 `swiper` 导入 `EffectFade` 并将其提供给 `modules` 数组：

```tsx
import React from 'react';
import { IonContent, IonPage, IonicSlides } from '@ionic/react';
import { EffectFade } from 'swiper';
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

接下来，我们需要导入与该效果关联的样式表：

```tsx
import React from 'react';
import { IonContent, IonPage, IonicSlides } from '@ionic/react';
import { EffectFade } from 'swiper';
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

之后，我们可以通过在 `swiper` 上将 `effect` 属性设置为 `"fade"` 来激活它：

```tsx
import React from 'react';
import { IonContent, IonPage, IonicSlides } from '@ionic/react';
import { EffectFade } from 'swiper';
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
有关 Swiper 效果的更多信息，请参阅 <a href="https://swiperjs.com/react#effects" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#effects</a>。
:::

## 总结

现在您已经安装了 Swiper，可以享受一整套新的 Swiper 功能。我们建议从阅读 <a href="https://swiperjs.com/react" target="_blank" rel="noopener noreferrer">Swiper React 介绍</a>开始，然后参考 <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer">Swiper API 文档</a>。

## 常见问题解答

### 我在哪里可以找到这次迁移的示例？

您可以在 https://github.com/ionic-team/slides-migration-samples 找到一个包含 `ion-slides` 和等效 Swiper 用法的示例应用。

### 我在哪里可以获得此迁移的帮助？

如果您在迁移过程中遇到问题，请在 [Ionic 论坛](https://forum.ionicframework.com/)上发帖。

### 我在哪里提交错误报告？

在提交问题之前，请考虑在 <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper 讨论板</a>或 <a href="https://forum.ionicframework.com" target="_blank">Ionic 论坛</a>上发帖，看看您的问题是否可以通过社区解决。

如果您遇到与 Swiper 库相关的问题，新的错误应提交到 Swiper 仓库：<a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

如果您遇到与 `IonicSlides` 模块相关的问题，新的错误应提交到 Ionic Framework 仓库：<a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>