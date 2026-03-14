---
title: 从 ion-slides 迁移到 Swiper.js
---

<head>
  <title>如何在 Angular 幻灯片中设置 Swiper.js [示例] | Ionic</title>
  <meta
    name="description"
    content="阅读本指南，了解如何在 Ionic Framework 应用中设置 Swiper.js，以实现现代化的触摸滑块组件。"
  />
</head>

如果您需要一个现代化的触摸滑块组件，我们推荐使用 <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a>。它为我们之前的 `ion-slides` 组件提供支持，但现在我们建议开发者直接使用 Swiper。

Swiper 9 引入了 <a href="https://swiperjs.com/element" target="_blank" rel="noopener noreferrer">Swiper Element</a> 作为其 Angular 组件的替代品，因此本指南将介绍如何在您的 Ionic Framework 应用中设置 Swiper Element。同时也会涵盖从 `ion-slides` 迁移到 Swiper Element 所需的所有信息。

## 开始使用

首先，更新到最新版本的 Ionic：

```shell
npm install @ionic/angular@latest
```

完成后，在项目中安装 Swiper 依赖：

```shell
npm install swiper@latest
```

接下来，我们需要添加 `CUSTOM_ELEMENTS_SCHEMA`，它告诉 Angular 我们将使用自定义元素。这可以在 `app.module.ts` 或您将使用 Swiper 的组件模块文件中完成。

```typescript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [..., CUSTOM_ELEMENTS_SCHEMA]
});
...
```

最后，我们需要调用 Swiper 的 `register` 函数来全局注册 Swiper 的自定义元素。这应该只执行一次，因此请将其放在 `app.component.ts` 中。

```typescript
import { register } from 'swiper/element/bundle';

register();

@Component({
  ...
})
...
```

之后，我们只需要将 `ion-slides` 元素替换为 `swiper-container`，将 `ion-slide` 元素替换为 `swiper-slide`。请注意，这些自定义元素不需要单独导入，因为调用 `register` 会自动告诉 Angular 它们的存在。

```html
<swiper-container>
  <swiper-slide>幻灯片 1</swiper-slide>
  <swiper-slide>幻灯片 2</swiper-slide>
  <swiper-slide>幻灯片 3</swiper-slide>
</swiper-container>
```

## 捆绑版与核心版

默认情况下，请确保从 `swiper/element/bundle` 导入 `register` 函数。这会使用 Swiper 的捆绑版本，该版本自动包含运行 Swiper 各种功能所需的所有模块和样式表。

如果您想使用核心版（它不会自动包含额外模块），请参阅 <a href="https://swiperjs.com/element#core-version-and-modules" target="_blank" rel="noopener noreferrer">https://swiperjs.com/element#core-version-and-modules</a>。本迁移指南的其余部分将假定您使用的是捆绑版本。

## 样式迁移

要迁移您的 CSS，首先将选择器更新为针对新的自定义元素：

| ion-slides 选择器 | Swiper 选择器    |
| ------------------- | ------------------ |
| `ion-slides`        | `swiper-container` |
| `ion-slide`         | `swiper-slide`     |

如果您之前使用了 `ion-slides` 中的 CSS 自定义属性，以下是 Swiper 中使用的对应属性列表。

| `ion-slides` CSS 属性          | `swiper-container` CSS 属性             |
| ---------------------------------- | ------------------------------------------- |
| `--bullet-background`              | `--swiper-pagination-bullet-inactive-color` |
| `--bullet-background-active`       | `--swiper-pagination-color`                 |
| `--progress-bar-background`        | `--swiper-pagination-progressbar-bg-color`  |
| `--progress-bar-background-active` | `--swiper-pagination-color`                 |
| `--scroll-bar-background`          | `--swiper-scrollbar-bg-color`               |
| `--scroll-bar-background-active`   | `--swiper-scrollbar-drag-bg-color`          |

对于额外的自定义 CSS，由于 Swiper Element 使用 Shadow DOM 封装，样式需要注入到 Shadow DOM 作用域中。请参阅 <a href="https://swiperjs.com/element#injecting-styles" target="_blank" rel="noopener noreferrer">https://swiperjs.com/element#injecting-styles</a> 了解操作说明。

### 额外的 `ion-slides` 样式

`ion-slides` 组件具有额外的样式，有助于创建原生外观和感觉。这些样式 **并非** 在 Ionic 中使用 Swiper.js 所必需的，但如果您希望尽可能保持 `ion-slides` 的外观，请将以下 CSS 添加到您的 `global.scss` 中：

```css
swiper-container {
  --swiper-pagination-bullet-inactive-color: var(--ion-color-step-200, #cccccc);
  --swiper-pagination-color: var(--ion-color-primary, #3880ff);
  --swiper-pagination-progressbar-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);
  --swiper-scrollbar-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);
  --swiper-scrollbar-drag-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5);
}

swiper-slide {
  display: flex;
  position: relative;

  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 18px;

  text-align: center;
  box-sizing: border-box;
}

swiper-slide img {
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
}
```

## IonicSlides 模块

在 `ion-slides` 中，Ionic 会自动定制数十个 Swiper 属性。这使得在移动设备上滑动时体验更加流畅。我们建议使用 `IonicSlides` 模块来确保这些属性在直接使用 Swiper 时也能被设置。但是，在 Ionic 中使用 Swiper.js **并不** 强制要求使用此模块。

建议您查看 `IonicSlides` 设置的 [属性](https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/slides/IonicSlides.ts)，并决定要自定义哪些属性。

我们可以通过从 `@ionic/angular` 导入 `IonicSlides`，并将其作为数组传递给 `swiper-container` 的 `modules` 属性来安装该模块：

```typescript
// home.page.ts

import { IonicSlides } from '@ionic/angular';

@Component({
  ...
})
export class HomePage {
  swiperModules = [IonicSlides];
}
```

```html
<!-- home.page.html -->

<swiper-container [modules]="swiperModules"> ... </swiper-container>
```

:::注意
如果您使用 Swiper 的核心版本并安装了额外的模块，请确保 `IonicSlides` 是数组中的最后一个模块。这将使其能够自动定制诸如 Pagination、Scrollbar、Zoom 等模块的设置。
:::

## 属性

Swiper 选项应作为单独的属性直接设置在 `<swiper-container>` 组件上。

假设在一个使用 `ion-slides` 的应用中，我们设置了 `slidesPerView` 和 `loop` 选项：

```html
<ion-slides [options]="{ slidesPerView: 3, loop: true }">
  <ion-slide>幻灯片 1</ion-slide>
  <ion-slide>幻灯片 3</ion-slide>
  <ion-slide>幻灯片 3</ion-slide>
</ion-slides>
```

要将这些选项直接作为属性设置在 `<swiper-container>` 上，我们可以这样做：

```html
<swiper-container [slidesPerView]="3" [loop]="true">
  <swiper-slide>幻灯片 1</swiper-slide>
  <swiper-slide>幻灯片 2</swiper-slide>
  <swiper-slide>幻灯片 3</swiper-slide>
</swiper-container>
```

以下是从 `ion-slides` 迁移到 Swiper Element 时的属性变更完整列表：

| 名称    | 说明                                                                                                                                   |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| options | 将每个选项直接作为 `<swiper-container>` 组件的属性设置。                                                                                |
| mode    | 要根据模式应用不同样式，您可以在 CSS 中使用 `.ios swiper-container` 或 `.md swiper-container` 来定位幻灯片。                            |
| pager   | 使用 `pagination` 属性代替。                                                                                                            |

:::注意
Swiper Element 中所有可用的属性可以在 <a href="https://swiperjs.com/swiper-api#parameters" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#parameters</a> 找到。
:::

## 事件

由于 `swiper-container` 组件不是由 Ionic Framework 提供的，事件名称不会带有 `ionSlide` 前缀。此外，所有事件名称应为小写，而不是驼峰式命名。

假设在一个使用 `ion-slides` 的应用中，我们使用了 `ionSlideDidChange` 事件：

```html
<ion-slides (ionSlideDidChange)="onSlideChange()">
  <ion-slide>幻灯片 1</ion-slide>
  <ion-slide>幻灯片 3</ion-slide>
  <ion-slide>幻灯片 3</ion-slide>
</ion-slides>
```

要迁移，我们需要将事件名称改为 `slidechange`：

```html
<swiper-container (slidechange)="onSlideChange()">
  <swiper-slide>幻灯片 1</swiper-slide>
  <swiper-slide>幻灯片 2</swiper-slide>
  <swiper-slide>幻灯片 3</swiper-slide>
</swiper-container>
```

以下是从 `ion-slides` 迁移到 Swiper Angular 时的事件名称变更完整列表：

| ion-slides 事件          | Swiper 事件                 |
| ------------------------- | ---------------------------- |
| `ionSlideWillChange`      | `slidechangetransitionstart` |
| `ionSlideDidChange`       | `slidechangetransitionend`   |
| `ionSlideDoubleTap`       | `doubletap`                  |
| `ionSlideDrag`            | `slidermove`                 |
| `ionSlideNextStart`       | `slidenexttransitionstart`   |
| `ionSlideNextEnd`         | `slidenexttransitionend`     |
| `ionSlidePrevStart`       | `slideprevtransitionstart`   |
| `ionSlidePrevEnd`         | `slideprevtransitionend`     |
| `ionSlideReachStart`      | `reachbeginning`             |
| `ionSlideReachEnd`        | `reachend`                   |
| `ionSlideTap`             | `tap`                        |
| `ionSlideTouchStart`      | `touchstart`                 |
| `ionSlideTouchEnd`        | `touchend`                   |
| `ionSlideTransitionStart` | `transitionstart`            |
| `ionSlideTransitionEnd`   | `transitionend`              |
| `ionSlidesDidLoad`        | `init`                       |

:::注意
Swiper Element 中所有可用的事件可以在 <a href="https://swiperjs.com/swiper-api#events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#events</a> 找到。
:::

## 方法

大多数方法已被移除，改为直接访问 Swiper 实例的属性。要访问 Swiper 实例，首先获取对 `<swiper-container>` 元素的引用（例如通过 `ViewChild`），然后访问其 `swiper` 属性：

```html
<!-- slides.component.html -->

<swiper-container #swiper>
  <swiper-slide>幻灯片 1</swiper-slide>
  <swiper-slide>幻灯片 2</swiper-slide>
  <swiper-slide>幻灯片 3</swiper-slide>
</swiper-container>
```

```typescript
// slides.component.ts

import { ..., ElementRef, ViewChild } from '@angular/core';

@Component({
  ...
})
export class SlidesExample {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  logActiveIndex() {
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
  }
}
```

以下是从 `ion-slides` 迁移到 Swiper Element 时的方法变更完整列表：

| ion-slides 方法    | 说明                                                                                |
| -------------------- | ------------------------------------------------------------------------------------ |
| `getActiveIndex()`   | 改用 `activeIndex` 属性。                                                            |
| `getPreviousIndex()` | 改用 `previousIndex` 属性。                                                          |
| `getSwiper()`        | 使用 `swiper` 属性获取 Swiper 实例的引用。参见上面的示例。                           |
| `isBeginning()`      | 改用 `isBeginning` 属性。                                                            |
| `isEnd()`            | 改用 `isEnd` 属性。                                                                  |
| `length()`           | 改用 `slides` 属性。（例如 swiper.slides.length）                                    |
| `lockSwipeToNext()`  | 改用 `allowSlidesNext` 属性。                                                        |
| `lockSwipeToPrev()`  | 改用 `allowSlidePrev` 属性。                                                         |
| `lockSwipes()`       | 改用 `allowSlideNext`、`allowSlidePrev` 和 `allowTouchMove` 属性。                   |
| `startAutoplay()`    | 改用 `autoplay` 属性。                                                               |
| `stopAutoplay()`     | 改用 `autoplay` 属性。                                                               |

:::注意
Swiper 实例上所有可用的方法和属性可以在 <a href="https://swiperjs.com/swiper-api#methods-and-properties" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#methods-and-properties</a> 找到。
:::

## 效果

只要您使用的是 Swiper 的捆绑版本，Cube 或 Fade 等效果都可以在 Swiper Element 中使用，无需额外导入。例如，以下代码将使幻灯片具有翻转过渡效果：

```html
<swiper-container effect="flip"> ... </swiper-container>
```

:::注意
有关 Swiper 中效果的更多信息，请参阅 <a href="https://swiperjs.com/swiper-api#fade-effect" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#fade-effect</a>。
:::

## 总结

现在您已经安装了 Swiper，有一整套新的 Swiper 功能可供您使用。我们建议从 <a href="https://swiperjs.com/element" target="_blank" rel="noopener noreferrer">Swiper Element 文档</a> 开始，然后参考 <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer">Swiper API 文档</a>。

## 常见问题

### 哪里可以找到这个迁移的示例？

您可以在 https://github.com/ionic-team/slides-migration-samples 找到一个包含 `ion-slides` 和等效 Swiper 用法的示例应用。

### 迁移过程中遇到问题怎么办？

如果您在迁移过程中遇到问题，请在 [Ionic 论坛](https://forum.ionicframework.com/) 上发帖。

### 在哪里提交错误报告？

在创建问题之前，请考虑在 <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper 讨论板</a> 或 <a href="https://forum.ionicframework.com" target="_blank">Ionic 论坛</a> 上发帖，看看您的问题是否可以通过社区解决。

如果您遇到 Swiper 库的问题，新的错误报告应在 Swiper 仓库提交：<a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

如果您遇到 `IonicSlides` 模块的问题，新的错误报告应在 Ionic Framework 仓库提交：<a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>