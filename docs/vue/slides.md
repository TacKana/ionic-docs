---
title: 从 ion-slides 迁移到 Swiper.js
---

<head>
  <title>Vue 幻灯片指南：如何在 Ionic 应用中为 Vue 集成 Swiper</title>
  <meta
    name="description"
    content="本幻灯片指南将教你如何在 Ionic 应用中为 Vue 集成 Swiper。这里提供了从 ion-slides 迁移到官方 Swiper Vue 集成所需的所有信息。"
  />
</head>

:::warning 还在寻找 `ion-slides`？
`ion-slides` 已在 v6.0.0 版本中标记为弃用，并在 v7.0.0 版本中被移除。我们建议直接使用 Swiper.js 库。具体的迁移过程如下所示。
:::

如果你需要一个现代化的触摸滑动组件，我们推荐使用 <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a>。本指南将详细介绍如何在你的 Ionic Framework 应用中为 Vue 集成 Swiper，并提供从 `ion-slides` 迁移到官方 Swiper Vue 集成所需的所有信息。

:::note
Swiper 的 Vue 组件计划在未来的版本中移除，取而代之的是 <a href="https://swiperjs.com/element" target="_blank" rel="noopener noreferrer">Swiper Element</a>。然而，本指南仍介绍迁移到 Vue 组件的方法，因为它在编写本文时能提供最稳定的体验。

在 Ionic Framework 中使用 Swiper.js **不强制要求**使用 Swiper 的 Vue 组件。
:::

## 开始迁移

首先，更新 Ionic 到最新版本：

```shell
npm install @ionic/vue@latest @ionic/vue-router@latest
```

为了与 Swiper 有更好的兼容性，我们建议将 Vue CLI 升级到 5：

```shell
vue upgrade --next
```

完成上述步骤后，在你的项目中安装 Swiper 依赖：

```shell
npm install swiper@latest
```

## 样式与滑动

接下来，我们需要导入基础的 Swiper 样式。同时，我们也会导入 Ionic 提供的样式文件，它允许我们使用与 `ion-slides` 相同的 CSS 变量来自定义 Swiper 的样式。

我们建议在使用 Swiper 的组件中导入这些样式，以确保样式只在需要时才被加载：

```vue
<script setup lang="ts">
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
</script>
```

:::note
在 Ionic 中使用 Swiper.js **不强制要求**导入 `@ionic/vue/css/ionic-swiper.css`。该文件主要用于与 `ion-slides` 组件保持向后兼容。如果你不希望使用该样式表中提供的 CSS 变量，可以安全地省略它。
:::

### 更新 CSS 选择器

之前，我们通过 `ion-slides` 和 `ion-slide` 选择器来应用自定义样式。这些样式块的内容本身可以保持不变，但我们需要更新选择器。以下是从 `ion-slides` 迁移到 Swiper Vue 时的选择器变更对照表：

| ion-slides 选择器 | Swiper 选择器   |
| ---------------- | --------------- |
| `ion-slides`     | `.swiper`       |
| `ion-slide`      | `.swiper-slide` |

### 使用预处理器（可选）

对于使用 SCSS 或 Less 的开发者，Swiper 也提供了相应文件的导入方式。

对于 Less 样式，将导入路径中的 `css` 替换为 `less`：

```js
import 'swiper/less';
import '@ionic/vue/css/ionic-swiper.css';
```

对于 SCSS 样式，将导入路径中的 `css` 替换为 `scss`：

```js
import 'swiper/scss';
import '@ionic/vue/css/ionic-swiper.css';
```

## 使用组件

Swiper 导出两个核心组件：`Swiper` 和 `SwiperSlide`。其中，`Swiper` 组件相当于之前的 `IonSlides`，而 `SwiperSlide` 则相当于 `IonSlide`。

你需要从 `swiper/vue` 中导入这些组件，并在你的 Vue 组件中注册使用：

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

默认情况下，Swiper for Vue 不会导入任何额外的模块。如果你想使用导航（Navigation）或分页器（Pagination）等功能，需要先手动导入它们。

`ion-slides` 会自动包含 Pagination、Scrollbar、Autoplay、Keyboard 和 Zoom 这些模块。本部分将向你展示如何安装这些模块。

首先，我们需要从 `swiper` 包中导入所需的模块及其对应的 CSS 文件：

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

接下来，我们需要通过 `swiper` 组件的 `modules` 属性将这些模块传递给 Swiper：

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

const modules = [Autoplay, Keyboard, Pagination, Scrollbar, Zoom];
</script>
```

最后，我们可以通过设置相应的属性来开启这些功能：

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
完整的模块列表请参阅 <a href="https://swiperjs.com/vue#usage" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#usage</a>。
:::

## IonicSlides 模块

在使用 `ion-slides` 时，Ionic 会自动定制数十个 Swiper 的属性，以确保在移动设备上滑动时获得流畅的体验。我们建议使用 `IonicSlides` 模块，以便在直接使用 Swiper 时也能自动设置这些属性。但请注意，在 Ionic 中使用 Swiper.js **不强制要求**使用此模块。

建议你查看 `IonicSlides` 所设置的[属性列表](https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/slides/IonicSlides.ts)，并决定哪些属性需要自定义调整。

我们可以从 `@ionic/vue` 中导入 `IonicSlides` 模块，并将其作为 `modules` 数组的最后一个元素传入：

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
`IonicSlides` 模块**必须**放在数组的最后一项。这样它才能自动优化 Pagination、Scrollbar、Zoom 等其他模块的设置。
:::

## 属性配置

在 Swiper 中，选项是直接作为 props 提供给 `<swiper>` 组件的，而不是像 `ion-slides` 那样通过 `options` 对象传递。

假设在使用了 `ion-slides` 的应用中，我们设置了 `slidesPerView` 和 `loop` 选项：

```vue
<template>
  <ion-slides :options="{ slidesPerView: 3, loop: true }">
    <ion-slide>幻灯片 1</ion-slide>
    <ion-slide>幻灯片 2</ion-slide>
    <ion-slide>幻灯片 3</ion-slide>
  </ion-slides>
</template>
```

迁移时，我们需要将这些选项从 `options` 对象中取出，直接作为属性绑定到 `<swiper>` 组件上：

```vue
<template>
  <swiper :slides-per-view="3" :loop="true">
    <swiper-slide>幻灯片 1</swiper-slide>
    <swiper-slide>幻灯片 2</swiper-slide>
    <swiper-slide>幻灯片 3</swiper-slide>
  </swiper>
</template>
```

以下是从 `ion-slides` 迁移到 Swiper Vue 时的属性变更对照表：

| 名称      | 说明                                                                                                                 |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| options   | 将每个选项直接作为属性设置在 `<swiper>` 组件上。                                                                     |
| mode      | 如需根据 mode 应用不同样式，可以在 CSS 中使用 `.ios .swiper` 或 `.md .swiper` 选择器来定位。                         |
| pager     | 改用 `pagination` 属性。需要先安装 Pagination 模块。                                                                 |
| scrollbar | 可以继续使用 `scrollbar` 属性，但务必先安装 Scrollbar 模块。                                                         |

:::note
Swiper Vue 所有可用的属性列表，请访问 <a href="https://swiperjs.com/vue#swiper-props" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#swiper-props</a>。
:::

## 事件处理

由于 `Swiper` 组件并非由 Ionic Framework 提供，其事件名称不再包含 `ionSlide` 前缀。

假设在使用了 `ion-slides` 的应用中，我们监听了 `ionSlideDidChange` 事件：

```vue
<template>
  <ion-slides @ionSlideDidChange="onSlideChange">
    <ion-slide>幻灯片 1</ion-slide>
    <ion-slide>幻灯片 2</ion-slide>
    <ion-slide>幻灯片 3</ion-slide>
  </ion-slides>
</template>
```

迁移时，我们需要将事件名改为 `slideChange`：

```vue
<template>
  <swiper @slideChange="onSlideChange">
    <swiper-slide>幻灯片 1</swiper-slide>
    <swiper-slide>幻灯片 2</swiper-slide>
    <swiper-slide>幻灯片 3</swiper-slide>
  </swiper>
</template>
```

以下是从 `ion-slides` 迁移到 Swiper Vue 时的事件名变更对照表：

| ion-slides 事件          | Swiper 事件                  |
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
Swiper Vue 所有可用的事件列表，请访问 <a href="https://swiperjs.com/vue#swiper-events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#swiper-events</a>。
:::

## 方法调用

大多数方法已被移除，取而代之的是直接访问 `<swiper>` 组件的属性。此外，调用方法时也无需再通过 `$el` 来访问底层实例。

直接访问 Swiper 实例的属性可能会有些技巧，因为我们需要获取的是 Swiper 实例本身，而不是你的 Vue 组件。为此，我们推荐通过 `@swiper` 事件处理器来获取 Swiper 实例的引用：

```vue
<template>
  <swiper @swiper="setSwiperInstance"> ... </swiper>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const swiperRef = ref();
const setSwiperInstance = (swiper: any) => {
  swiperRef.value = swiper;
};
</script>
```

之后，如果你想访问 Swiper 实例上的某个属性，可以通过 `swiperRef.value` 来实现。例如，如果你想检查 `isBeginning` 属性，可以这样写：`swiperRef.value.isBeginning`。当然，在使用前请确保 `swiperRef.value` 已经被定义。

以下是从 `ion-slides` 迁移到 Swiper Vue 时的方法变更对照表：

| ion-slides 方法    | 说明                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------ |
| `getActiveIndex()`   | 改用 `activeIndex` 属性。                                                              |
| `getPreviousIndex()` | 改用 `previousIndex` 属性。                                                            |
| `getSwiper()`        | 通过 `@swiper` 事件获取 Swiper 实例的引用。具体用法见上方示例。                        |
| `isBeginning()`      | 改用 `isBeginning` 属性。                                                              |
| `isEnd()`            | 改用 `isEnd` 属性。                                                                    |
| `length()`           | 改用 `slides` 属性获取幻灯片数量 (如 `swiperRef.value.slides.length`)。                |
| `lockSwipeToNext()`  | 改用 `allowSlideNext` 属性。                                                           |
| `lockSwipeToPrev()`  | 改用 `allowSlidePrev` 属性。                                                           |
| `lockSwipes()`       | 改用 `allowSlideNext`、`allowSlidePrev` 和 `allowTouchMove` 属性组合控制。              |
| `startAutoplay()`    | 改用 `autoplay` 属性。                                                                 |
| `stopAutoplay()`     | 改用 `autoplay` 属性。                                                                 |

## 使用特效

如果你需要使用 Cube 或 Fade 等特效，可以像安装其他模块一样安装它们。以下以使用 Fade 淡入淡出特效为例。

首先，从 `swiper` 中导入 `EffectFade` 并将其加入 `modules` 数组：

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
<script setup lang="ts">
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage, IonicSlides } from '@ionic/vue';

import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';

const modules = [EffectFade, IonicSlides];
</script>
```

接着，我们需要导入与该特效关联的样式表：

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
<script setup lang="ts">
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage, IonicSlides } from '@ionic/vue';

import 'swiper/css';
import 'swiper/css/effect-fade';
import '@ionic/vue/css/ionic-swiper.css';

const modules = [EffectFade, IonicSlides];
</script>
```

最后，通过在 `swiper` 组件上设置 `effect` 属性为 `"fade"` 来激活该特效：

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
<script setup lang="ts">
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

## 迁移完成

现在你已经成功集成了 Swiper，可以开始享受它提供的一系列新功能了。我们建议从阅读 <a href="https://swiperjs.com/vue" target="_blank" rel="noopener noreferrer">Swiper Vue 入门指南</a>开始，并随时查阅 <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer">Swiper API 文档</a>。

## 常见问题解答

### 在哪里可以找到迁移示例？

你可以在 https://github.com/ionic-team/slides-migration-samples 找到一个示例应用，其中同时包含了 `ion-slides` 和与之等价的 Swiper 用法。

### 迁移过程中遇到问题，如何获得帮助？

如果你在迁移中遇到问题，请在 [Ionic 论坛](https://forum.ionicframework.com/)上创建一个帖子寻求帮助。

### 应该在哪里提交 Bug 报告？

在提交 Issue 之前，建议先在 <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper 讨论板</a>或 <a href="https://forum.ionicframework.com" target="_blank">Ionic 论坛</a>上发帖，看看社区是否能帮助你解决问题。

如果问题出在 Swiper 库本身，新的 Bug 应该提交到 Swiper 的代码仓库：<a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

如果问题出在 `IonicSlides` 模块，新的 Bug 应该提交到 Ionic Framework 的代码仓库：<a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>