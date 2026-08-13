---
title: 从 IonSlides 迁移到 Swiper.js
---

<head>
  <title>为 React 幻灯片设置 Swiper.js [示例] | Ionic</title>
  <meta
    name="description"
    content="如果你需要一个现代的触摸滑动组件，我们推荐使用 Swiper.js。在应用中为 React 设置 Swiper，并了解如何从 IonSlides 迁移。"
  />
</head>

:::warning[寻找 `IonSlides`？]

`IonSlides` 已在 v6.0.0 中弃用，并在 v7.0.0 中移除。我们建议直接使用 Swiper.js 库。迁移过程如下详述。

:::

如果你需要一个现代的触摸滑动组件，我们推荐使用 <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a>。本指南将介绍如何在你的 Ionic Framework 应用中为 React 设置 Swiper。它还将介绍你可能需要的从 `IonSlides` 迁移到官方 Swiper React 集成的任何迁移信息。

:::note
Swiper 的 React 组件将在未来的 Swiper 版本中被移除，替代方案是 <a href="https://swiperjs.com/element" target="_blank" rel="noopener noreferrer">Swiper Element</a>。然而，本指南展示了如何迁移到 React 组件，因为它在编写时提供了最稳定的体验。值得注意的是，React 对 Web Components 的支持还不够强。

使用 Swiper 的 React 组件**并非**在 Ionic Framework 中使用 Swiper.js 的必要条件。
:::

## 开始

首先，更新到最新版本的 Ionic：

```shell
npm install @ionic/react@latest @ionic/react-router@latest
```

完成后，在你的项目中安装 Swiper 依赖：

```shell
npm install swiper@latest
```

:::note
使用 Create React App 的开发者必须使用 `react-scripts` v5.0.0+ 配合最新版本的 Swiper。
:::

## 滑动样式

接下来，我们需要导入基本的 Swiper 样式。我们还将导入 Ionic 提供的样式，这让我们能够使用与 `IonSlides` 相同的 CSS 变量来自定义 Swiper 样式。

我们建议在使用 Swiper 的组件中导入样式。这确保了样式只在需要时加载：

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
导入 `@ionic/react/css/ionic-swiper.css` **并非**在 Ionic 中使用 Swiper.js 的必要条件。此文件用于与 `IonSlides` 组件向后兼容，如果你不想使用样式表中提供的 CSS 变量，可以安全地省略它。
:::

### 更新选择器

以前，我们可以针对 `ion-slides` 和 `ion-slide` 来应用任何自定义样式。这些样式块的内容保持不变，但我们需要更新选择器。以下是从 `ion-slides` 迁移到 Swiper React 时的选择器变更列表：

| ion-slides 选择器 | Swiper 选择器 |
| ------------------ | -------------- |
| `ion-slides`       | `.swiper`      |
| `ion-slide`        | `.swiper-slide` |

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

Swiper 导出了两个组件：`Swiper` 和 `SwiperSlide`。`Swiper` 组件相当于 `IonSlides`，而 `SwiperSlide` 相当于 `IonSlide`。

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

默认情况下，Swiper for React 不导入任何额外模块。要使用导航或分页器等模块，你需要先导入它们。

`IonSlides` 自动包含了分页器、滚动条、自动播放、键盘和缩放模块。本指南的这一部分将展示如何安装这些模块。

首先，我们需要从 `swiper` 包中导入模块及其对应的 CSS 文件：

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

然后，我们需要通过使用 `Swiper` 组件上的 `modules` 属性将这些模块提供给 Swiper：

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

最后，我们可以通过使用相应的属性来开启这些功能：

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
完整的模块列表请参见 <a href="https://swiperjs.com/react#usage" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#usage</a>。
:::

## IonicSlides 模块

使用 `IonSlides` 时，Ionic 自动定制了数十个 Swiper 属性。这带来了在移动设备上滑动的流畅体验。我们建议使用 `IonicSlides` 模块来确保这些属性在直接使用 Swiper 时也能被设置。但是，在 Ionic 中使用 Swiper.js **并非必须**使用此模块。

建议查看 `IonicSlides` 设置的[属性](https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/slides/IonicSlides.ts)，并确定哪些是你想要自定义的。

我们可以通过从 `@ionic/react` 导入 `IonicSlides` 模块并将其作为 `modules` 数组中的最后一项传入来安装它：

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
`IonicSlides` 模块必须是数组中的最后一个模块。这将让它自动自定义分页器、滚动条、缩放等模块的设置。
:::

## 属性

Swiper 选项直接作为 props 提供给 `<Swiper>` 组件，而不是通过 `IonSlides` 中的 `options` 对象。

假设在使用 `IonSlides` 的应用中，我们设置了 `slidesPerView` 和 `loop` 选项：

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

迁移时，我们需要将这些选项从 `options` 对象中移出，直接作为属性放在 `<Swiper>` 组件上：

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

以下是从 `IonSlides` 迁移到 Swiper React 时的完整属性变更列表：

| 名称      | 说明                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| options   | 将每个选项直接作为 `<Swiper>` 组件的属性设置。                                                 |
| mode      | 要根据模式使用不同的样式，可以在 CSS 中针对 `.ios .swiper` 或 `.md .swiper`。                  |
| pager     | 改用 `pagination` 属性。需要安装 Pagination 模块。                                            |
| scrollbar | 你可以继续使用 `scrollbar` 属性，只需确保先安装 Scrollbar 模块。                                |

:::note
Swiper React 中所有可用的属性可以在 <a href="https://swiperjs.com/react#swiper-props" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#swiper-props</a> 找到。
:::

## 事件

由于 `Swiper` 组件不是由 Ionic Framework 提供的，事件名称不会有 `onIonSlide` 前缀。

假设在使用 `IonSlides` 的应用中，我们使用了 `onIonSlideDidChange` 事件：

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

以下是从 `IonSlides` 迁移到 Swiper React 时的完整事件名称变更列表：

| IonSlides 事件                  | Swiper 事件                      |
| ------------------------------- | -------------------------------- |
| `onIonSlideWillChange`          | `onSlideChangeTransitionStart`   |
| `onIonSlideDidChange`           | `onSlideChangeTransitionEnd`     |
| `onIonSlideDoubleTap`           | `onDoubleTap`                    |
| `onIonSlideDrag`                | `onSliderMove`                   |
| `onIonSlideNextStart`           | `onSlideNextTransitionStart`     |
| `onIonSlideNextEnd`             | `onSlideNextTransitionEnd`       |
| `onIonSlidePrevStart`           | `onSlidePrevTransitionStart`     |
| `onIonSlidePrevEnd`             | `onSlidePrevTransitionEnd`       |
| `onIonSlideReachStart`          | `onReachBeginning`               |
| `onIonSlideReachEnd`            | `onReachEnd`                     |
| `onIonSlideTap`                 | `onTap`                          |
| `onIonSlideTouchStart`          | `onTouchStart`                   |
| `onIonSlideTouchEnd`            | `onTouchEnd`                     |
| `onIonSlideTransitionStart`     | `onTransitionStart`              |
| `onIonSlideTransitionEnd`       | `onTransitionEnd`                |
| `onIonSlidesDidLoad`            | `onInit`                         |

:::note
Swiper 中所有可用的事件可以在 <a href="https://swiperjs.com/swiper-api#events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#events</a> 找到。
:::

## 方法

大多数方法已被移除，推荐直接访问 `Swiper` 属性。

访问这些属性可能有些棘手，因为你想要访问 Swiper 实例本身的属性，而不是你的 React 组件。为此，我们建议通过 `onSwiper` 获取对 `Swiper` 实例的引用：

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

然后，如果你想访问 Swiper 实例上的属性，可以访问 `swiperInstance`。例如，如果你想检查 `isBeginning` 属性，可以这样做：`swiperInstance.isBeginning`。不过要先确保 `swiperInstance` 已定义！

以下是从 `IonSlides` 迁移到 Swiper React 时的完整方法变更列表：

| IonSlides 方法        | 说明                                                                              |
| --------------------- | --------------------------------------------------------------------------------- |
| `getActiveIndex()`    | 改用 `activeIndex` 属性。                                                         |
| `getPreviousIndex()`  | 改用 `previousIndex` 属性。                                                       |
| `getSwiper()`         | 使用 `onSwiper` 获取 Swiper 实例引用。请参见上面的示例。                            |
| `isBeginning()`       | 改用 `isBeginning` 属性。                                                         |
| `isEnd()`             | 改用 `isEnd` 属性。                                                               |
| `length()`            | 改用 `slides` 属性。（例如：swiperRef.slides.length）                              |
| `lockSwipeToNext()`   | 改用 `allowSlidesNext` 属性。                                                     |
| `lockSwipeToPrev()`   | 改用 `allowSlidePrev` 属性。                                                      |
| `lockSwipes()`        | 改用 `allowSlideNext`、`allowSlidePrev` 和 `allowTouchMove` 属性。                 |
| `startAutoplay()`     | 改用 `autoplay` 属性。                                                            |
| `stopAutoplay()`      | 改用 `autoplay` 属性。                                                            |

## 效果

如果你正在使用 Cube 或 Fade 等效果，你可以像安装其他模块一样安装它们。在此示例中，我们将使用淡入淡出效果。首先，我们从 `swiper` 导入 `EffectFade` 并将其提供给 `modules` 数组：

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

接下来，我们需要导入与该效果相关的样式表：

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

之后，我们可以通过将 swiper 上的 `effect` 属性设置为 `"fade"` 来激活它：

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
有关 Swiper 效果的更多信息，请参阅 <a href="https://swiperjs.com/react#effects" target="_blank" rel="noopener noreferrer">https://swiperjs.com/react#effects</a>。
:::

## 总结

现在你已经安装了 Swiper，可以享受一整套新的 Swiper 功能了。我们建议从 <a href="https://swiperjs.com/react" target="_blank" rel="noopener noreferrer">Swiper React 介绍</a>开始，然后参考 <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer">Swiper API 文档</a>。

## 常见问题

### 我在哪里可以找到迁移示例？

你可以在 https://github.com/ionic-team/slides-migration-samples 找到包含 `ion-slides` 和等效 Swiper 用法的示例应用。

### 我在哪里可以获得迁移帮助？

如果你在迁移中遇到问题，请在 [Ionic 论坛](https://forum.ionicframework.com/)上发帖。

### 我在哪里提交错误报告？

在提交 issue 之前，请考虑在 <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper 讨论板</a>或 <a href="https://forum.ionicframework.com" target="_blank">Ionic 论坛</a>上发帖，看看你的问题是否可以被社区解决。

如果你遇到 Swiper 库的问题，新 bug 应提交到 Swiper 仓库：<a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

如果你遇到 `IonicSlides` 模块的问题，新 bug 应提交到 Ionic Framework 仓库：<a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>
