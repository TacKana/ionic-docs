---
title: 从 ion-slides 迁移到 Swiper.js
---

<head>
  <title>Vue 幻灯片指南：如何在 Ionic 应用中为 Vue 配置 Swiper</title>
  <meta
    name="description"
    content="我们的幻灯片指南教你如何在 Ionic 应用中为 Vue 设置 Swiper。包含从 ion-slides 迁移到官方 Swiper Vue 集成的所有必要信息。"
  />
</head>

如果你的应用需要现代触摸滑动组件，我们推荐使用 <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a>。它曾经为我们的 `ion-slides` 组件提供支持，但现在我们建议开发者直接使用 Swiper for Vue。

本指南将介绍如何在你的 Ionic Framework 应用中为 Vue 配置 Swiper。它还将涵盖从 `ion-slides` 迁移到官方 Swiper Vue 集成所需的迁移信息。

:::note
Swiper 的 Vue 组件计划在未来的 Swiper 版本中移除，取而代之的是 <a href="https://swiperjs.com/element" target="_blank" rel="noopener noreferrer">Swiper Element</a>。不过，本指南展示如何迁移到 Vue 组件，因为它目前提供了最稳定的体验。

使用 Swiper 的 Vue 组件**不**是必须的，你也可以使用其他方式在 Ionic Framework 中使用 Swiper.js。
:::

## 入门

首先，更新到最新版本的 Ionic：

```shell
npm install @ionic/vue@latest @ionic/vue-router@latest
```

我们建议升级到 Vue CLI 5 以获得更好的 Swiper 兼容性：

```shell
vue upgrade --next
```

完成后，在你的项目中安装 Swiper 依赖：

```shell
npm install swiper@latest
```

## 样式配置

接下来，我们需要导入基本的 Swiper 样式。我们还将导入 Ionic 提供的样式，这样我们可以使用与 `ion-slides` 相同的 CSS 变量来自定义 Swiper 样式。

我们建议在使用 Swiper 的组件中导入样式，以确保样式仅在需要时加载：

```html
<script>
  import { defineComponent } from 'vue';

  import 'swiper/css';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    ...
  });
</script>
```

:::note
导入 `@ionic/vue/css/ionic-swiper.css` **不**是使用 Swiper.js 与 Ionic 的必需步骤。此文件用于与 `ion-slides` 组件的向后兼容性，如果你不想使用样式表中提供的 CSS 变量，可以安全地省略它。
:::

### 更新选择器

以前，我们可以针对 `ion-slides` 和 `ion-slide` 应用自定义样式。这些样式块的内容保持不变，但我们需要更新选择器。以下是从 `ion-slides` 迁移到 Swiper Vue 时的选择器变更列表：

| ion-slides 选择器 | Swiper 选择器 |
| ------------------- | --------------- |
| `ion-slides`        | `.swiper`       |
| `ion-slide`         | `.swiper-slide` |

### 预处理器（可选）

对于使用 SCSS 或 Less 样式的开发者，Swiper 也提供了这些文件的导入。

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

Swiper 导出了两个组件：`Swiper` 和 `SwiperSlide`。`Swiper` 组件相当于 `IonSlides`，`SwiperSlide` 相当于 `IonSlide`。

这些组件从 `swiper/vue` 导入并提供给你的 Vue 组件：

```html
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

<script>
  import { defineComponent } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage } from '@ionic/vue';

  import 'swiper/css';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: {
      Swiper,
      SwiperSlide,
      IonContent,
      IonPage,
    },
  });
</script>
```

## 使用模块

默认情况下，Swiper for Vue 不会导入任何附加模块。要使用导航或分页等模块，你需要先导入它们。

`ion-slides` 自动包含了分页、滚动条、自动播放、键盘和缩放模块。本指南的这一部分将向你展示如何安装这些模块。

首先，我们需要从 `swiper` 包中导入模块及其对应的 CSS 文件：

```html
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
<script>
  import { defineComponent } from 'vue';
  import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage } from '@ionic/vue';

  import 'swiper/css';
  import 'swiper/css/autoplay';
  import 'swiper/css/keyboard';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/zoom';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage },
  });
</script>
```

然后，通过使用 `swiper` 组件上的 `modules` 属性将这些模块提供给 Swiper：

```html
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
  import { defineComponent } from 'vue';
  import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage } from '@ionic/vue';

  import 'swiper/css';
  import 'swiper/css/autoplay';
  import 'swiper/css/keyboard';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/zoom';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage },
    setup() {
      return {
        modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom],
      };
    },
  });
</script>
```

最后，我们可以通过使用相应的属性来启用这些功能：

```html
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
  import { defineComponent } from 'vue';
  import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage } from '@ionic/vue';

  import 'swiper/css';
  import 'swiper/css/autoplay';
  import 'swiper/css/keyboard';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/zoom';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage },
    setup() {
      return {
        modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom],
      };
    },
  });
</script>
```

:::note
完整的模块列表请参阅 <a href="https://swiperjs.com/vue#usage" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#usage</a>。
:::

## IonicSlides 模块

使用 `ion-slides` 时，Ionic 自动自定义了数十个 Swiper 属性。这带来了在移动设备上滑动时流畅的体验。我们建议使用 `IonicSlides` 模块来确保直接使用 Swiper 时也设置了这些属性。但是，使用此模块**不**是在 Ionic 中使用 Swiper.js 的必需条件。

建议查看 `IonicSlides` 设置的[属性](https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/slides/IonicSlides.ts)，并确定哪些属性需要自定义。

我们可以通过从 `@ionic/vue` 导入 `IonicSlides` 模块并将其作为 `modules` 数组的最后一项传入来安装它：

```html
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
  import { defineComponent } from 'vue';
  import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage, IonicSlides } from '@ionic/vue';

  import 'swiper/css';
  import 'swiper/css/autoplay';
  import 'swiper/css/keyboard';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/zoom';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage },
    setup() {
      return {
        modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides],
      };
    },
  });
</script>
```

:::note
`IonicSlides` 模块必须是数组中的最后一个模块。这将让它自动自定义分页、滚动条、缩放等模块的设置。
:::

## 属性

Swiper 选项直接作为 `<swiper>` 组件的 props 提供，而不是通过 `ion-slides` 中的 `options` 对象。

假设在使用了 `ion-slides` 的应用中，我们设置了 `slidesPerView` 和 `loop` 选项：

```html
<template>
  <ion-slides :options="{ slidesPerView: 3, loop: true }">
    <ion-slide>幻灯片 1</ion-slide>
    <ion-slide>幻灯片 2</ion-slide>
    <ion-slide>幻灯片 3</ion-slide>
  </ion-slides>
</template>
```

要迁移，我们将这些选项从 `options` 对象中移出，直接作为 `<swiper>` 组件的属性：

```html
<template>
  <swiper :slides-per-view="3" :loop="true">
    <swiper-slide>幻灯片 1</swiper-slide>
    <swiper-slide>幻灯片 2</swiper-slide>
    <swiper-slide>幻灯片 3</swiper-slide>
  </swiper>
</template>
```

以下是从 `ion-slides` 迁移到 Swiper Vue 时的属性变更完整列表：

| 名称      | 说明                                                                                                                       |
| --------- | -------------------------------------------------------------------------------------------------------------------------- |
| options   | 将每个选项直接作为 `<swiper>` 组件的属性设置。                                                                             |
| mode      | 要根据模式设置不同的样式，你可以在 CSS 中使用 `.ios .swiper` 或 `.md .swiper` 来针对幻灯片。                               |
| pager     | 改用 `pagination` 属性。需要安装 Pagination 模块。                                                                         |
| scrollbar | 你可以继续使用 `scrollbar` 属性，只需确保先安装 Scrollbar 模块。                                                           |

:::note
Swiper Vue 中所有可用的属性可以在 <a href="https://swiperjs.com/vue#swiper-props" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#swiper-props</a> 找到。
:::

## 事件

由于 `Swiper` 组件不是由 Ionic Framework 提供的，事件名称不会有 `ionSlide` 前缀。

假设在使用了 `ion-slides` 的应用中，我们使用了 `ionSlideDidChange` 事件：

```html
<template>
  <ion-slides @ionSlideDidChange="onSlideChange">
    <ion-slide>幻灯片 1</ion-slide>
    <ion-slide>幻灯片 2</ion-slide>
    <ion-slide>幻灯片 3</ion-slide>
  </ion-slides>
</template>
```

要迁移，我们将事件名称改为 `slideChange`：

```html
<template>
  <swiper @slideChange="onSlideChange">
    <swiper-slide>幻灯片 1</swiper-slide>
    <swiper-slide>幻灯片 2</swiper-slide>
    <swiper-slide>幻灯片 3</swiper-slide>
  </swiper>
</template>
```

以下是从 `ion-slides` 迁移到 Swiper Vue 时的事件名称变更完整列表：

| ion-slides 事件              | Swiper 事件                    |
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
Swiper Vue 中所有可用的事件可以在 <a href="https://swiperjs.com/vue#swiper-events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#swiper-events</a> 找到。
:::

## 方法

大多数方法已改为直接访问 `<swiper>` 的属性。此外，调用方法时不再需要先访问 `$el`。

访问这些属性可能会有些棘手，因为你想要访问的是 Swiper 实例本身上的属性，而不是你的 Vue 组件。为此，我们建议通过 `@swiper` 事件处理程序获取 Swiper 实例的引用：

```html
<template>
  <swiper @swiper="setSwiperInstance"> ... </swiper>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    ...,
    setup() {
      const slides = ref();
      const setSwiperInstance = (swiper: any) => {
        slides.value = swiper;
      }
      return { setSwiperInstance };
    }
  });
</script>
```

然后，如果你想要访问 Swiper 实例上的属性，可以使用 `slides.value`。例如，如果你想检查 `isBeginning` 属性，可以这样做：`slides.value.isBeginning`。不过要先确保 `slides.value` 已定义！

以下是从 `ion-slides` 迁移到 Swiper Vue 时的方法变更完整列表：

| ion-slides 方法        | 说明                                                                                     |
| -------------------- | ---------------------------------------------------------------------------------------- |
| `getActiveIndex()`   | 改用 `activeIndex` 属性。                                                                |
| `getPreviousIndex()` | 改用 `previousIndex` 属性。                                                              |
| `getSwiper()`        | 使用 `@swiper` 获取 Swiper 实例的引用。请参见上面的示例。                                |
| `isBeginning()`      | 改用 `isBeginning` 属性。                                                                |
| `isEnd()`            | 改用 `isEnd` 属性。                                                                      |
| `length()`           | 改用 `slides` 属性（例如 swiperRef.slides.length）。                                     |
| `lockSwipeToNext()`  | 改用 `allowSlidesNext` 属性。                                                            |
| `lockSwipeToPrev()`  | 改用 `allowSlidePrev` 属性。                                                             |
| `lockSwipes()`       | 改用 `allowSlideNext`、`allowSlidePrev` 和 `allowTouchMove` 属性。                       |
| `startAutoplay()`    | 改用 `autoplay` 属性。                                                                   |
| `stopAutoplay()`     | 改用 `autoplay` 属性。                                                                   |

## 效果

如果你使用 Cube 或 Fade 等效果，你可以像安装其他模块一样安装它们。在此示例中，我们将使用淡入淡出效果。首先，从 `swiper` 导入 `EffectFade` 并将其添加到 `modules` 数组中：

```html
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
  import { defineComponent } from 'vue';
  import { EffectFade } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage, IonicSlides } from '@ionic/vue';

  import 'swiper/css';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage },
    setup() {
      return {
        modules: [EffectFade, IonicSlides],
      };
    },
  });
</script>
```

接下来，我们需要导入与效果相关的样式表：

```html
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
  import { defineComponent } from 'vue';
  import { EffectFade } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage, IonicSlides } from '@ionic/vue';

  import 'swiper/css';
  import 'swiper/css/effect-fade';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage },
    setup() {
      return {
        modules: [EffectFade, IonicSlides],
      };
    },
  });
</script>
```

之后，我们可以通过在 `swiper` 上设置 `effect` 属性为 `"fade"` 来激活它：

```html
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
  import { defineComponent } from 'vue';
  import { EffectFade } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage, IonicSlides } from '@ionic/vue';

  import 'swiper/css';
  import 'swiper/css/effect-fade';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage },
    setup() {
      return {
        modules: [EffectFade, IonicSlides],
      };
    },
  });
</script>
```

:::note
有关 Swiper 效果的更多信息，请参阅 <a href="https://swiperjs.com/vue#effects" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#effects</a>。
:::

## 总结

现在你已经安装了 Swiper，可以享受一整套新的 Swiper 功能了。我们建议从 <a href="https://swiperjs.com/vue" target="_blank" rel="noopener noreferrer">Swiper Vue 介绍</a>开始，然后参考 <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer">Swiper API 文档</a>。

## 常见问题

### 在哪里可以找到迁移示例？

你可以在 https://github.com/ionic-team/slides-migration-samples 找到包含 `ion-slides` 和相应 Swiper 用法的示例应用。

### 如何获得迁移帮助？

如果你在迁移过程中遇到问题，请在 [Ionic 论坛](https://forum.ionicframework.com/) 上发帖。

### 在哪里提交错误报告？

在提交问题之前，请考虑先在 <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper 讨论板</a>或 <a href="https://forum.ionicframework.com" target="_blank">Ionic 论坛</a>上发帖，看看你的问题是否可以通过社区解决。

如果你遇到的是 Swiper 库的问题，新的 bug 应提交到 Swiper 仓库：<a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

如果你遇到的是 `IonicSlides` 模块的问题，新的 bug 应提交到 Ionic Framework 仓库：<a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>
