---
title: 从 ion-slides 迁移到 Swiper.js
---

<head>
  <title>为 Angular 设置 Swiper.js 幻灯片 [示例] | Ionic</title>
  <meta
    name="description"
    content="阅读本指南，了解如何在你的 Ionic Framework 应用中设置 Swiper.js for Angular，以获得现代化的触摸滑动组件。"
  />
</head>

如果你需要一个现代化的触摸滑动组件，我们推荐 <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a>。它驱动着我们的 `ion-slides` 组件，但现在我们建议开发者直接使用 Swiper。

Swiper 9 引入了 <a href="https://swiperjs.com/element" target="_blank" rel="noopener noreferrer">Swiper Element</a> 作为其 Angular 组件的替代品，因此本指南将介绍如何在你的 Ionic Framework 应用中设置 Swiper Element。它还将介绍从 `ion-slides` 迁移到 Swiper Element 可能需要的任何迁移信息。

## 开始

首先，更新到最新版本的 Ionic：

```shell
npm install @ionic/angular@latest
```

完成后，在项目中安装 Swiper 依赖：

```shell
npm install swiper@latest
```

接下来，我们需要添加 `CUSTOM_ELEMENTS_SCHEMA`，它告诉 Angular 我们将使用自定义元素。这既可以在 `app.module.ts` 中完成，也可以在你将使用 Swiper 的组件的模块文件中完成。

```typescript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [..., CUSTOM_ELEMENTS_SCHEMA]
});
...
```

最后，我们需要调用 Swiper 的 `register` 函数来全局注册 Swiper 的自定义元素。这只需执行一次，因此将其放在 `app.component.ts` 中。

```typescript
import { register } from 'swiper/element/bundle';

register();

@Component({
  ...
})
...
```

至此，我们只需将 `ion-slides` 元素替换为 `swiper-container`，将 `ion-slide` 元素替换为 `swiper-slide`。请注意，这些自定义元素不需要导入，因为调用 `register` 会让 Angular 自行了解它们。

```html
<swiper-container>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>
```

## 捆绑版与核心版

默认情况下，请确保从 `swiper/element/bundle` 导入 `register` 函数。这使用的是 Swiper 的捆绑版本，它会自动包含运行 Swiper 各项功能所需的所有模块和样式表。

如果你希望改用核心版本（不会自动包含额外模块），请参阅 <a href="https://swiperjs.com/element#core-version-and-modules" target="_blank" rel="noopener noreferrer">https://swiperjs.com/element#core-version-and-modules</a>。本迁移指南的其余部分将假定你使用的是捆绑版本。

## 滑动样式

要迁移你的 CSS，首先更新选择器以定位新的自定义元素：

| ion-slides 选择器 | Swiper 选择器    |
| ------------------- | ------------------ |
| `ion-slides`        | `swiper-container` |
| `ion-slide`         | `swiper-slide`     |

如果你使用了 `ion-slides` 上的 CSS 自定义属性，以下是 Swiper 中使用的对应属性列表。

| `ion-slides` CSS 属性                     | `swiper-container` CSS 属性             |
| ----------------------------------------- | --------------------------------------- |
| `--bullet-background`                     | `--swiper-pagination-bullet-inactive-color` |
| `--bullet-background-active`              | `--swiper-pagination-color`                 |
| `--progress-bar-background`               | `--swiper-pagination-progressbar-bg-color`  |
| `--progress-bar-background-active`        | `--swiper-pagination-color`                 |
| `--scroll-bar-background`                 | `--swiper-scrollbar-bg-color`               |
| `--scroll-bar-background-active`          | `--swiper-scrollbar-drag-bg-color`          |

对于额外的自定义 CSS，由于 Swiper Element 使用 Shadow DOM 封装，样式需要注入到 Shadow DOM 作用域中。有关说明，请参阅 <a href="https://swiperjs.com/element#injecting-styles" target="_blank" rel="noopener noreferrer">https://swiperjs.com/element#injecting-styles</a>。

### 额外的 `ion-slides` 样式

`ion-slides` 组件具有额外的样式，有助于创建原生外观和感觉。这些样式**不是**在 Ionic 中使用 Swiper.js 所必需的，但如果你想尽可能保持 `ion-slides` 的外观，请在 `global.scss` 中添加以下 CSS：

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

使用 `ion-slides` 时，Ionic 自动自定义了数十个 Swiper 属性。这带来了在移动设备上滑动时流畅的体验。我们建议使用 `IonicSlides` 模块来确保直接使用 Swiper 时也能设置这些属性。但是，使用此模块**并非**在 Ionic 中使用 Swiper.js 的必需条件。

建议查看 `IonicSlides` 设置的[属性](https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/slides/IonicSlides.ts)，并确定你想要自定义哪些属性。

我们可以通过从 `@ionic/angular` 导入 `IonicSlides` 模块并将其作为数组传递给 `swiper-container` 的 `modules` 属性来安装它：

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

:::note
如果你使用的是 Swiper 核心版本并已安装额外模块，请确保 `IonicSlides` 是数组中的最后一个模块。这将让它自动自定义分页器、滚动条、缩放等模块的设置。
:::

## 属性

Swiper 选项应作为单个属性直接设置在 `<swiper-container>` 组件上。

假设在使用 `ion-slides` 的应用中，我们设置了 `slidesPerView` 和 `loop` 选项：

```html
<ion-slides [options]="{ slidesPerView: 3, loop: true }">
  <ion-slide>Slide 1</ion-slide>
  <ion-slide>Slide 3</ion-slide>
  <ion-slide>Slide 3</ion-slide>
</ion-slides>
```

要直接在 `<swiper-container>` 上将这些选项作为属性设置，我们需要这样做：

```html
<swiper-container [slidesPerView]="3" [loop]="true">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>
```

以下是从 `ion-slides` 迁移到 Swiper Element 时的完整属性变更列表：

| 名称    | 说明                                                                                                                                |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| options | 将每个选项作为属性直接设置在 `<swiper-container>` 组件上。                                                                          |
| mode    | 要基于模式应用不同样式，你可以在 CSS 中使用 `.ios swiper-container` 或 `.md swiper-container` 来定位幻灯片。 |
| pager   | 改用 `pagination` 属性。                                                                                                            |

:::note
Swiper Element 中所有可用的属性可以在 <a href="https://swiperjs.com/swiper-api#parameters" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#parameters</a> 找到。
:::

## 事件

由于 `swiper-container` 组件不是由 Ionic Framework 提供的，事件名称不会有 `ionSlide` 前缀。此外，所有事件名称应为小写而不是驼峰式。

假设在使用 `ion-slides` 的应用中，我们使用了 `ionSlideDidChange` 事件：

```html
<ion-slides (ionSlideDidChange)="onSlideChange()">
  <ion-slide>Slide 1</ion-slide>
  <ion-slide>Slide 3</ion-slide>
  <ion-slide>Slide 3</ion-slide>
</ion-slides>
```

要迁移，我们需要将事件名称改为 `slidechange`：

```html
<swiper-container (slidechange)="onSlideChange()">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>
```

以下是从 `ion-slides` 迁移到 Swiper Angular 时的完整事件名称变更列表：

| ion-slides 事件             | Swiper 事件                  |
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

:::note
Swiper Element 中所有可用的事件可以在 <a href="https://swiperjs.com/swiper-api#events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#events</a> 找到。
:::

## 方法

大多数方法已被移除，取而代之的是直接访问 Swiper 实例的属性。要访问 Swiper 实例，首先获取 `<swiper-container>` 元素的引用（例如通过 `ViewChild`），然后访问其 `swiper` 属性：

```html
<!-- slides.component.html -->

<swiper-container #swiper>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
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

以下是从 `ion-slides` 迁移到 Swiper Element 时的完整方法变更列表：

| ion-slides 方法       | 说明                                                                  |
| -------------------- | -------------------------------------------------------------------- |
| `getActiveIndex()`   | 改用 `activeIndex` 属性。                                            |
| `getPreviousIndex()` | 改用 `previousIndex` 属性。                                          |
| `getSwiper()`        | 使用 `swiper` 属性获取 Swiper 实例的引用。请参见上面的示例。        |
| `isBeginning()`      | 改用 `isBeginning` 属性。                                            |
| `isEnd()`            | 改用 `isEnd` 属性。                                                  |
| `length()`           | 改用 `slides` 属性。（即 swiper.slides.length）                      |
| `lockSwipeToNext()`  | 改用 `allowSlidesNext` 属性。                                        |
| `lockSwipeToPrev()`  | 改用 `allowSlidePrev` 属性。                                         |
| `lockSwipes()`       | 改用 `allowSlideNext`、`allowSlidePrev` 和 `allowTouchMove` 属性。   |
| `startAutoplay()`    | 改用 `autoplay` 属性。                                               |
| `stopAutoplay()`     | 改用 `autoplay` 属性。                                               |

:::note
Swiper 实例上所有可用的方法和属性可以在 <a href="https://swiperjs.com/swiper-api#methods-and-properties" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#methods-and-properties</a> 找到。
:::

## 效果

诸如 Cube 或 Fade 之类的效果可以在 Swiper Element 中使用，无需额外导入，只要你使用的是 Swiper 的捆绑版本。例如，以下代码将使幻灯片具有翻转过渡效果：

```html
<swiper-container effect="flip"> ... </swiper-container>
```

:::note
有关 Swiper 效果的更多信息，请参阅 <a href="https://swiperjs.com/swiper-api#fade-effect" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#fade-effect</a>。
:::

## 总结

现在你已经安装了 Swiper，可以享受一整套新的 Swiper 功能了。我们建议从 <a href="https://swiperjs.com/element" target="_blank" rel="noopener noreferrer">Swiper Element 文档</a>开始，然后参考 <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer">Swiper API 文档</a>。

## 常见问题解答

### 我在哪里可以找到此迁移的示例？

你可以在 https://github.com/ionic-team/slides-migration-samples 找到包含 `ion-slides` 和等效 Swiper 用法的示例应用。

### 我在哪里可以获得此迁移的帮助？

如果你在迁移过程中遇到问题，请在 [Ionic Forum](https://forum.ionicframework.com/) 上发帖。

### 我在哪里提交错误报告？

在提交问题之前，请考虑在 <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper Discussion Board</a> 或 <a href="https://forum.ionicframework.com" target="_blank">Ionic Forum</a> 上发帖，看看你的问题是否可以通过社区解决。

如果你在使用 Swiper 库时遇到问题，新的错误应提交到 Swiper 仓库：<a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

如果你在使用 `IonicSlides` 模块时遇到问题，新的错误应提交到 Ionic Framework 仓库：<a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>
