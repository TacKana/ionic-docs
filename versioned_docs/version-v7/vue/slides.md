---
title: 从 ion-slides 迁移到 Swiper.js
---

<head>
  <title>Vue 幻灯片指南：如何在 Ionic 应用中为 Vue 获取 Swiper</title>
  <meta
    name="description"
    content="我们的幻灯片指南教你如何在 Ionic 应用中为 Vue 设置 Swiper。它包含了从 ion-slides 迁移到官方 Swiper Vue 集成所需的所有信息。"
  />
</head>

:::warning 正在寻找 `ion-slides`？
`ion-slides` 在 v6.0.0 中已被弃用，并在 v7.0.0 中移除。我们建议直接使用 Swiper.js 库。下面的迁移过程有详细介绍。
:::

如果你需要一个现代的触摸滑块组件，我们推荐使用 <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a>。本指南将介绍如何在你的 Ionic Framework 应用程序中为 Vue 设置 Swiper。它还将涵盖你从 `ion-slides` 迁移到官方 Swiper Vue 集成可能需要的任何迁移信息。

:::note
Swiper 的 Vue 组件计划在 Swiper 的未来版本中移除，取而代之的是 <a href="https://swiperjs.com/element" target="_blank" rel="noopener noreferrer">Swiper Element</a>。然而，本指南演示了如何迁移到 Vue 组件，因为在撰写本文时它提供了最稳定的体验。

使用 Swiper 的 Vue 组件**不是**将 Swiper.js 与 Ionic Framework 一起使用的必要条件。
:::

## 开始入门

首先，更新到最新版本的 Ionic：

```shell
npm install @ionic/vue@latest @ionic/vue-router@latest
```

我们建议升级到 Vue CLI 5 以获得与 Swiper 更好的兼容性：

```shell
vue upgrade --next
```

完成后，在你的项目中安装 Swiper 依赖项：

```shell
npm install swiper@latest
```

## 滑动手势样式

接下来，我们需要导入基础的 Swiper 样式。我们还将导入 Ionic 提供的样式，这将使我们能够使用与 `ion-slides` 相同的 CSS 变量来自定义 Swiper 样式。

我们建议在使用 Swiper 的组件中导入这些样式。这确保了样式仅在需要时加载：

```vue
<script setup lang="ts">
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
</script>
```

:::note
导入 `@ionic/vue/css/ionic-swiper.css` **不是**将 Swiper.js 与 Ionic 一起使用的必要条件。此文件用于与 `ion-slides` 组件向后兼容，如果你不想使用样式表中提供的 CSS 变量，可以安全地省略它。
:::

### 更新选择器

以前，我们可以针对 `ion-slides` 和 `ion-slide` 来应用任何自定义样式。这些样式块的内容保持不变，但我们需要更新选择器。以下是从 `ion-slides` 迁移到 Swiper Vue 时的选择器更改列表：

| ion-slides 选择器 | Swiper 选择器    |
| ----------------- | ---------------- |
| `ion-slides`      | `.swiper`        |
| `ion-slide`       | `.swiper-slide`  |

### 预处理器（可选）

对于使用 SCSS 或 Less 样式的开发者，Swiper 也为这些文件提供了导入。

对于 Less 样式，在 Swiper 导入路径中将 `css` 替换为 `less`：

```js
import 'swiper/less';
import '@ionic/vue/css/ionic-swiper.css';
```

对于 SCSS 样式，在 Swiper 导入路径中将 `css` 替换为 `scss`：

```js
import 'swiper/scss';
import '@ionic/vue/css/ionic-swiper.css';
```

## 使用组件

Swiper 导出两个组件：`Swiper` 和 `SwiperSlide`。`Swiper` 组件等同于 `IonSlides`，`SwiperSlide` 等同于 `IonSlide`。

这些组件从 `swiper/vue` 导入，并提供给你的 Vue 组件：

```vue
<template>
  <ion-page>
    <ion-content>
      <swiper>
        <swiper-slide>幻灯片 1</swiper-slide>
        <swiper-slide>幻灯片 2</swiper-slide>
        <swiper-slide>幻灯片 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage } from '@ionic/vue';

import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
</script>
```

## 使用模块

默认情况下，用于 Vue 的 Swiper 不导入任何额外的模块。要使用导航或分页等模块，你需要先导入它们。

`ion-slides` 自动包含了分页（Pagination）、滚动条（Scrollbar）、自动播放（Autoplay）、键盘（Keyboard）和缩放（Zoom）模块。本指南的这一部分将向你展示如何安装这些模块。

首先，我们需要从 `swiper` 包中导入模块及其对应的 CSS 文件：

```vue
<template>
  <ion-page>
    <ion-content>
      <swiper>
        <swiper-slide>幻灯片 1</swiper-slide>
        <swiper-slide>幻灯片 2</swiper-slide>
        <swiper-slide>幻灯片 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage } from '@ionic/vue';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/vue/css/ionic-swiper.css';
</script>
```

从这里开始，我们需要通过使用 `swiper` 组件上的 `modules` 属性将这些模块提供给 Swiper：

```vue
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules">
        <swiper-slide>幻灯片 1</swiper-slide>
        <swiper-slide>幻灯片 2</swiper-slide>
        <swiper-slide>幻灯片 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script>
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage } from '@ionic/vue';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/vue/css/ionic-swiper.css';

const modules = [Autoplay, Keyboard, Pagination, Scrollbar, Zoom];
</script>
```

最后，我们可以通过使用相应的属性来启用这些功能：

```vue
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules" :autoplay="true" :keyboard="true" :pagination="true" :scrollbar="true" :zoom="true">
        <swiper-slide>幻灯片 1</swiper-slide>
        <swiper-slide>幻灯片 2</swiper-slide>
        <swiper-slide>幻灯片 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script>
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage } from '@ionic/vue';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/vue/css/ionic-swiper.css';

const modules = [Autoplay, Keyboard, Pagination, Scrollbar, Zoom];
</script>
```

:::note
有关模块的完整列表，请参见 <a href="https://swiperjs.com/vue#usage" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#usage</a>。
:::

## IonicSlides 模块

使用 `ion-slides` 时，Ionic 自动自定义了数十个 Swiper 属性。这带来了在移动设备上滑动时感觉流畅的体验。我们建议使用 `IonicSlides` 模块来确保直接使用 Swiper 时也设置了这些属性。但是，在 Ionic 中使用 Swiper.js **不** 需要使用此模块。

建议查看 `IonicSlides` 设置的 [属性](https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/slides/IonicSlides.ts) 列表，并确定哪些是你想要自定义的。

我们可以通过从 `@ionic/vue` 导入 `IonicSlides` 模块并将其作为 `modules` 数组中的最后一项传递来安装它：

```vue
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules" :autoplay="true" :keyboard="true" :pagination="true" :scrollbar="true" :zoom="true">
        <swiper-slide>幻灯片 1</swiper-slide>
        <swiper-slide>幻灯片 2</swiper-slide>
        <swiper-slide>幻灯片 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage, IonicSlides } from '@ionic/vue';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/vue/css/ionic-swiper.css';

const modules = [Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides];
</script>
```

:::note
`IonicSlides` 模块必须是数组中的最后一个模块。这将使其自动自定义分页（Pagination）、滚动条（Scrollbar）、缩放（Zoom）等模块的设置。
:::

## 属性

Swiper 选项是作为 props 直接提供给 `<swiper>` 组件的，而不是通过 `ion-slides` 中的 `options` 对象。

假设在一个使用 `ion-slides` 的应用中，我们设置了 `slidesPerView` 和 `loop` 选项：

```vue
<template>
  <ion-slides :options="{ slidesPerView: 3, loop: true }">
    <ion-slide>幻灯片 1</ion-slide>
    <ion-slide>幻灯片 2</ion-slide>
    <ion-slide>幻灯片 3</ion-slide>
  </ion-slides>
</template>
```

要迁移，我们需要将这些选项从 `options` 对象中移出，直接作为属性放到 `<swiper>` 组件上：

```vue
<template>
  <swiper :slides-per-view="3" :loop="true">
    <swiper-slide>幻灯片 1</swiper-slide>
    <swiper-slide>幻灯片 2</swiper-slide>
    <swiper-slide>幻灯片 3</swiper-slide>
  </swiper>
</template>
```

以下是从 `ion-slides` 迁移到 Swiper Vue 时的完整属性更改列表：

| 名称        | 备注                                                                                          |
| ----------- | --------------------------------------------------------------------------------------------- |
| options     | 将每个选项直接作为属性设置在 `<swiper>` 组件上。                                                |
| mode        | 要基于模式应用不同的样式，可以在 CSS 中使用 `.ios .swiper` 或 `.md .swiper` 来定位幻灯片。       |
| pager       | 改用 `pagination` 属性。需要安装 Pagination 模块。                                             |
| scrollbar   | 你可以继续使用 `scrollbar` 属性，只需确保先安装 Scrollbar 模块即可。                             |

:::note
Swiper Vue 中可用的所有属性可以在 <a href="https://swiperjs.com/vue#swiper-props" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#swiper-props</a> 找到。
:::

## 事件

由于 `Swiper` 组件不是由 Ionic Framework 提供的，事件名称将不再带有 `ionSlide` 前缀。

假设在一个使用 `ion-slides` 的应用中，我们使用了 `ionSlideDidChange` 事件：

```vue
<template>
  <ion-slides @ionSlideDidChange="onSlideChange">
    <ion-slide>幻灯片 1</ion-slide>
    <ion-slide>幻灯片 2</ion-slide>
    <ion-slide>幻灯片 3</ion-slide>
  </ion-slides>
</template>
```

要迁移，我们需要将事件名称更改为 `slideChange`：

```vue
<template>
  <swiper @slideChange="onSlideChange">
    <swiper-slide>幻灯片 1</swiper-slide>
    <swiper-slide>幻灯片 2</swiper-slide>
    <swiper-slide>幻灯片 3</swiper-slide>
  </swiper>
</template>
```

以下是从 `ion-slides` 迁移到 Swiper Vue 时的完整事件名称更改列表：

| ion-slides 事件           | Swiper 事件                  |
| ------------------------- | ---------------------------- |
| `ionSlideWillChange`      | `slideChangeTransitionStart` |
| `ionSlideDidChange`       | `slideChangeTransitionEnd`   |
| `ionSlideDoubleTap`       | `doubleTap`                  |
| `ionSlideDrag`            | `sliderMove`                 |
| `ionSlideNextStart`       | `slideNextTransitionStart`   |
| `ionSlideNextEnd`         | `slideNextTransitionEnd`     |
| `ionSlidePrevStart`       | `slidePrevTransitionStart`   |
| `ionSlidePrevEnd`         | `slidePrevTransitionEnd`     |
| `ionSlideReachStart`      | `reachBeginning`             |
| `ionSlideReachEnd`        | `reachEnd`                   |
| `ionSlideTap`             | `tap`                        |
| `ionSlideTouchStart`      | `touchStart`                 |
| `ionSlideTouchEnd`        | `touchEnd`                   |
| `ionSlideTransitionStart` | `transitionStart`            |
| `ionSlideTransitionEnd`   | `transitionEnd`              |
| `ionSlidesDidLoad`        | `init`                       |

:::note
Swiper Vue 中可用的所有事件可以在 <a href="https://swiperjs.com/vue#swiper-events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#swiper-events</a> 找到。
:::

## 方法

大多数方法已被移除，建议直接访问 `<swiper>` 的 props。此外，调用方法时不再需要先访问 `$el`。

访问这些属性可能有些棘手，因为你想要访问的是 Swiper 实例本身上的属性，而不是你的 Vue 组件上的。为此，我们建议通过 `@swiper` 事件处理程序获取对 Swiper 实例的引用：

```vue
<template>
  <swiper @swiper="setSwiperInstance"> ... </swiper>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const slides = ref();
const setSwiperInstance = (swiper: any) => {
  slides.value = swiper;
};
</script>
```

从这里开始，如果你想访问 Swiper 实例上的一个属性，你可以通过 `slides.value` 来访问。例如，如果你想检查 `isBeginning` 属性，你可以这样做：`slides.value.isBeginning`。不过，请确保 `slides.value` 首先被定义！

以下是从 `ion-slides` 迁移到 Swiper Vue 时的完整方法更改列表：

| ion-slides 方法      | 备注                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------ |
| `getActiveIndex()`   | 改用 `activeIndex` 属性。                                                              |
| `getPreviousIndex()` | 改用 `previousIndex` 属性。                                                            |
| `getSwiper()`        | 使用 `@swiper` 获取 Swiper 实例的引用。参见上面的示例。                                  |
| `isBeginning()`      | 改用 `isBeginning` 属性。                                                               |
| `isEnd()`            | 改用 `isEnd` 属性。                                                                     |
| `length()`           | 改用 `slides` 属性。(例如 swiperRef.slides.length)                                      |
| `lockSwipeToNext()`  | 改用 `allowSlideNext` 属性。                                                            |
| `lockSwipeToPrev()`  | 改用 `allowSlidePrev` 属性。                                                            |
| `lockSwipes()`       | 改用 `allowSlideNext`、`allowSlidePrev` 和 `allowTouchMove` 属性。                      |
| `startAutoplay()`    | 改用 `autoplay` 属性。                                                                  |
| `stopAutoplay()`     | 改用 `autoplay` 属性。                                                                  |

## 特效

如果你正在使用 Cube 或 Fade 等特效，你可以像我们安装其他模块一样安装它们。在这个例子中，我们将使用淡入淡出（fade）效果。首先，我们从 `swiper` 导入 `EffectFade` 并将其提供给 `modules` 数组：

```vue
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules">
        <swiper-slide>幻灯片 1</swiper-slide>
        <swiper-slide>幻灯片 2</swiper-slide>
        <swiper-slide>幻灯片 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script>
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage, IonicSlides } from '@ionic/vue';

import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';

const modules = [EffectFade, IonicSlides];
</script>
```

接下来，我们需要导入与该特效相关的样式表：

```vue
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules">
        <swiper-slide>幻灯片 1</swiper-slide>
        <swiper-slide>幻灯片 2</swiper-slide>
        <swiper-slide>幻灯片 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script>
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage, IonicSlides } from '@ionic/vue';

import 'swiper/css';
import 'swiper/css/effect-fade';
import '@ionic/vue/css/ionic-swiper.css';

const modules = [EffectFade, IonicSlides];
</script>
```

之后，我们可以通过在 `swiper` 上设置 `effect` 属性为 `"fade"` 来激活它：

```vue
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules" effect="fade">
        <swiper-slide>幻灯片 1</swiper-slide>
        <swiper-slide>幻灯片 2</swiper-slide>
        <swiper-slide>幻灯片 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script>
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage, IonicSlides } from '@ionic/vue';

import 'swiper/css';
import 'swiper/css/effect-fade';
import '@ionic/vue/css/ionic-swiper.css';

const modules = [EffectFade, IonicSlides];
</script>
```

:::note
有关 Swiper 特效的更多信息，请参见 <a href="https://swiperjs.com/vue#effects" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#effects</a>。
:::

## 总结

既然你已经安装了 Swiper，现在可以享受一整套新的 Swiper 功能了。我们建议从 <a href="https://swiperjs.com/vue" target="_blank" rel="noopener noreferrer">Swiper Vue 介绍</a> 开始，然后参考 <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer">Swiper API 文档</a>。

## 常见问题解答

### 我在哪里可以找到这个迁移的示例？

你可以在 https://github.com/ionic-team/slides-migration-samples 找到一个包含 `ion-slides` 和等效 Swiper 用法的示例应用。

### 我在哪里可以获得有关此迁移的帮助？

如果你在迁移过程中遇到问题，请在 [Ionic 论坛](https://forum.ionicframework.com/) 上创建一个帖子。

### 我在哪里提交错误报告？

在提出问题之前，请考虑在 <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper 讨论板</a> 或 <a href="https://forum.ionicframework.com" target="_blank">Ionic 论坛</a> 上创建一个帖子，看看你的问题是否可以由社区解决。

如果你遇到 Swiper 库的问题，新的错误应该提交到 Swiper 仓库：<a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

如果你遇到 `IonicSlides` 模块的问题，新的错误应该提交到 Ionic Framework 仓库：<a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>