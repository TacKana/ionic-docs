---
title: 从 ion-slides 迁移到 Swiper.js
---

<head>
  <title>Vue 幻灯片指南：如何在 Ionic 应用中为 Vue 获取 Swiper</title>
  <meta
    name="description"
    content="我们的幻灯片指南教授如何为 Vue 设置 Swiper 以在 Ionic 应用中使用。包含从 ion-slides 迁移到官方 Swiper Vue 集成所需的所有信息。"
  />
</head>

:::warning[正在寻找 `ion-slides`？]
`ion-slides` 已在 v6.0.0 中弃用，并在 v7.0.0 中移除。我们建议直接使用 Swiper.js 库。迁移过程如下所述。
:::

如果您需要现代触摸滑块组件，我们推荐 <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a>。本指南将介绍如何在您的 Ionic 框架应用中为 Vue 设置 Swiper。它还将涵盖您从 `ion-slides` 迁移到官方 Swiper Vue 集成可能需要的任何迁移信息。

:::note
Swiper 的 Vue 组件计划在未来的 Swiper 版本中移除，<a href="https://swiperjs.com/element" target="_blank" rel="noopener noreferrer">Swiper Element</a> 将作为替代。但是，本指南展示了如何迁移到 Vue 组件，因为它在撰写本文时提供了最稳定的体验。

使用 Swiper 的 Vue 组件**不是**将 Swiper.js 与 Ionic 框架一起使用的必要条件。
:::

## 开始使用

首先，更新到最新版本的 Ionic：

```shell
npm install @ionic/vue@latest @ionic/vue-router@latest
```

我们建议升级到 Vue CLI 5 以获得与 Swiper 更好的兼容性：

```shell
vue upgrade --next
```

完成后，在项目中安装 Swiper 依赖：

```shell
npm install swiper@latest
```

## 滑动样式

接下来，我们需要导入基础的 Swiper 样式。我们还将导入 Ionic 提供的样式，这些样式允许我们使用与 `ion-slides` 相同的 CSS 变量来自定义 Swiper 样式。

我们建议在使用 Swiper 的组件中导入样式。这样可以确保样式仅在需要时加载：

```vue
<script setup lang="ts">
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
</script>
```

:::note
导入 `@ionic/vue/css/ionic-swiper.css` **不是**将 Swiper.js 与 Ionic 一起使用的必要条件。此文件用于与 `ion-slides` 组件向后兼容，如果您不想使用样式表中提供的 CSS 变量，可以安全地省略它。
:::

### 更新选择器

以前，我们可以针对 `ion-slides` 和 `ion-slide` 来应用任何自定义样式。这些样式块的内容保持不变，但我们需要更新选择器。以下是从 `ion-slides` 迁移到 Swiper Vue 时的选择器更改列表：

| ion-slides 选择器 | Swiper 选择器 |
| ------------------- | --------------- |
| `ion-slides`        | `.swiper`       |
| `ion-slide`         | `.swiper-slide` |

### 预处理器（可选）

对于使用 SCSS 或 Less 样式的开发者，Swiper 也提供了这些文件的导入方式。

对于 Less 样式，将 Swiper 导入路径中的 `css` 替换为 `less`：

```js
import 'swiper/less';
import '@ionic/vue/css/ionic-swiper.css';
```

对于 SCSS 样式，将 Swiper 导入路径中的 `css` 替换为 `scss`：

```js
import 'swiper/scss';
import '@ionic/vue/css/ionic-swiper.css';
```

## 使用组件

Swiper 导出两个组件：`Swiper` 和 `SwiperSlide`。`Swiper` 组件相当于 `IonSlides`，`SwiperSlide` 相当于 `IonSlide`。

这些组件从 `swiper/vue` 导入并提供给您的 Vue 组件：

```vue
<template>
  <ion-page>
    <ion-content>
      <swiper>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
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

默认情况下，用于 Vue 的 Swiper 不会导入任何额外的模块。要使用导航（Navigation）或分页器（Pagination）等模块，您需要先导入它们。

`ion-slides` 自动包含了分页器（Pagination）、滚动条（Scrollbar）、自动播放（Autoplay）、键盘（Keyboard）和缩放（Zoom）模块。本指南将向您展示如何安装这些模块。

首先，我们需要从 `swiper` 包中导入模块及其对应的 CSS 文件：

```vue
<template>
  <ion-page>
    <ion-content>
      <swiper>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
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

然后，我们需要通过 `swiper` 组件上的 `modules` 属性将这些模块提供给 Swiper：

```vue
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
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
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
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
完整模块列表请参阅 <a href="https://swiperjs.com/vue#usage" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#usage</a>。
:::

## IonicSlides 模块

使用 `ion-slides` 时，Ionic 自动自定义了数十个 Swiper 属性。这带来了在移动设备上滑动时流畅的体验。我们建议使用 `IonicSlides` 模块来确保直接使用 Swiper 时也设置了这些属性。但是，使用此模块**不是**在 Ionic 中使用 Swiper.js 的必要条件。

建议查阅由 `IonicSlides` 设置的[属性](https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/slides/IonicSlides.ts)，并确定您想要自定义哪些属性。

我们可以通过从 `@ionic/vue` 导入 `IonicSlides` 模块并将其作为 `modules` 数组中的最后一项来安装它：

```vue
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules" :autoplay="true" :keyboard="true" :pagination="true" :scrollbar="true" :zoom="true">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
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
`IonicSlides` 模块必须是数组中的最后一个模块。这将使其自动自定义分页器（Pagination）、滚动条（Scrollbar）、缩放（Zoom）等模块的设置。
:::

## 属性

Swiper 选项直接作为 props 提供给 `<swiper>` 组件，而不是通过 `ion-slides` 中的 `options` 对象。

假设在使用 `ion-slides` 的应用中，我们设置了 `slidesPerView` 和 `loop` 选项：

```vue
<template>
  <ion-slides :options="{ slidesPerView: 3, loop: true }">
    <ion-slide>Slide 1</ion-slide>
    <ion-slide>Slide 2</ion-slide>
    <ion-slide>Slide 3</ion-slide>
  </ion-slides>
</template>
```

要迁移，我们需要将这些选项移出 `options` 对象，直接作为属性放在 `<swiper>` 组件上：

```vue
<template>
  <swiper :slides-per-view="3" :loop="true">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>
```

以下是从 `ion-slides` 迁移到 Swiper Vue 时属性更改的完整列表：

| 名称      | 说明                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| options   | 直接将每个选项作为属性设置在 `<swiper>` 组件上。                                             |
| mode      | 要基于模式应用不同的样式，可以在 CSS 中使用 `.ios .swiper` 或 `.md .swiper` 来定位幻灯片。    |
| pager     | 改用 `pagination` 属性。需要安装 Pagination 模块。                                           |
| scrollbar | 您可以继续使用 `scrollbar` 属性，但请确保先安装 Scrollbar 模块。                             |

:::note
Swiper Vue 中所有可用的属性可以在 <a href="https://swiperjs.com/vue#swiper-props" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#swiper-props</a> 找到。
:::

## 事件

由于 `Swiper` 组件不是由 Ionic 框架提供的，事件名称不会有 `ionSlide` 前缀。

假设在使用 `ion-slides` 的应用中，我们使用了 `ionSlideDidChange` 事件：

```vue
<template>
  <ion-slides @ionSlideDidChange="onSlideChange">
    <ion-slide>Slide 1</ion-slide>
    <ion-slide>Slide 2</ion-slide>
    <ion-slide>Slide 3</ion-slide>
  </ion-slides>
</template>
```

要迁移，我们需要将事件名称改为 `slideChange`：

```vue
<template>
  <swiper @slideChange="onSlideChange">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>
```

以下是从 `ion-slides` 迁移到 Swiper Vue 时事件名称更改的完整列表：

| ion-slides 事件             | Swiper 事件                    |
| --------------------------- | ------------------------------ |
| `ionSlideWillChange`        | `slideChangeTransitionStart`   |
| `ionSlideDidChange`         | `slideChangeTransitionEnd`     |
| `ionSlideDoubleTap`         | `doubleTap`                    |
| `ionSlideDrag`              | `sliderMove`                   |
| `ionSlideNextStart`         | `slideNextTransitionStart`     |
| `ionSlideNextEnd`           | `slideNextTransitionEnd`       |
| `ionSlidePrevStart`         | `slidePrevTransitionStart`     |
| `ionSlidePrevEnd`           | `slidePrevTransitionEnd`       |
| `ionSlideReachStart`        | `reachBeginning`               |
| `ionSlideReachEnd`          | `reachEnd`                     |
| `ionSlideTap`               | `tap`                          |
| `ionSlideTouchStart`        | `touchStart`                   |
| `ionSlideTouchEnd`          | `touchEnd`                     |
| `ionSlideTransitionStart`   | `transitionStart`              |
| `ionSlideTransitionEnd`     | `transitionEnd`                |
| `ionSlidesDidLoad`          | `init`                         |

:::note
Swiper Vue 中所有可用的事件可以在 <a href="https://swiperjs.com/vue#swiper-events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#swiper-events</a> 找到。
:::

## 方法

大多数方法已被移除，取而代之的是直接访问 `<swiper>` 的 props。此外，调用方法时不再需要先访问 `$el`。

访问这些属性可能有些棘手，因为您需要访问 Swiper 实例本身的属性，而不是 Vue 组件的属性。要做到这一点，我们建议通过 `@swiper` 事件处理程序获取对 Swiper 实例的引用：

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

然后，如果您想访问 Swiper 实例上的属性，可以访问 `slides.value`。例如，如果您想检查 `isBeginning` 属性，可以这样做：`slides.value.isBeginning`。不过请确保先确认 `slides.value` 已定义！

以下是从 `ion-slides` 迁移到 Swiper Vue 时方法更改的完整列表：

| ion-slides 方法       | 说明                                                                               |
| --------------------- | ---------------------------------------------------------------------------------- |
| `getActiveIndex()`    | 改用 `activeIndex` 属性。                                                           |
| `getPreviousIndex()`  | 改用 `previousIndex` 属性。                                                         |
| `getSwiper()`         | 使用 `@swiper` 获取 Swiper 实例的引用。参见上面的示例。                              |
| `isBeginning()`       | 改用 `isBeginning` 属性。                                                           |
| `isEnd()`             | 改用 `isEnd` 属性。                                                                 |
| `length()`            | 改用 `slides` 属性（例如 swiperRef.slides.length）。                                 |
| `lockSwipeToNext()`   | 改用 `allowSlideNext` 属性。                                                        |
| `lockSwipeToPrev()`   | 改用 `allowSlidePrev` 属性。                                                        |
| `lockSwipes()`        | 改用 `allowSlideNext`、`allowSlidePrev` 和 `allowTouchMove` 属性。                   |
| `startAutoplay()`     | 改用 `autoplay` 属性。                                                              |
| `stopAutoplay()`      | 改用 `autoplay` 属性。                                                              |

## 特效

如果您正在使用 Cube 或 Fade 等特效，您可以像处理其他模块一样安装它们。在此示例中，我们将使用淡入淡出效果。首先，从 `swiper` 导入 `EffectFade` 并将其提供在 `modules` 数组中：

```vue
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
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

接下来，我们需要导入与特效相关的样式表：

```vue
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
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

之后，我们可以通过将 `swiper` 上的 `effect` 属性设置为 `"fade"` 来激活它：

```vue
<template>
  <ion-page>
    <ion-content>
      <swiper :modules="modules" effect="fade">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
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
有关 Swiper 特效的更多信息，请参阅 <a href="https://swiperjs.com/vue#effects" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#effects</a>。
:::

## 总结

现在您已经安装了 Swiper，可以享受一整套新的 Swiper 功能了。我们建议从 <a href="https://swiperjs.com/vue" target="_blank" rel="noopener noreferrer">Swiper Vue 介绍</a>开始，然后参考 <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer">Swiper API 文档</a>。

## 常见问题

### 我在哪里可以找到此迁移的示例？

您可以在 https://github.com/ionic-team/slides-migration-samples 找到包含 `ion-slides` 和等效 Swiper 用法的示例应用。

### 我在哪里可以获得有关此迁移的帮助？

如果您在迁移中遇到问题，请在 [Ionic 论坛](https://forum.ionicframework.com/)上发帖。

### 我在哪里提交错误报告？

在提交 issue 之前，请考虑先在 <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper 讨论板</a>或 <a href="https://forum.ionicframework.com" target="_blank">Ionic 论坛</a>上发帖，看看您的问题是否可以由社区解决。

如果您遇到 Swiper 库的问题，新的 bug 应提交到 Swiper 仓库：<a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

如果您遇到 `IonicSlides` 模块的问题，新的 bug 应提交到 Ionic 框架仓库：<a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>
