---
title: 从 ion-slides 迁移到 Swiper.js
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>为 Angular Slides 设置 Swiper.js [示例] | Ionic</title>
  <meta
    name="description"
    content="阅读本指南，了解如何在您的 Ionic Framework 应用程序中设置 Swiper.js，以获得现代化的触摸滑动组件。"
  />
</head>

:::caution 正在寻找 `ion-slides` 吗？
`ion-slides` 已在 v6.0.0 中弃用，并在 v7.0.0 中移除。我们建议直接使用 Swiper.js 库。详细的迁移过程如下所述。
:::

如果您需要一个现代化的触摸滑动组件，我们推荐使用 <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a>。Swiper 9 引入了 <a href="https://swiperjs.com/element" target="_blank" rel="noopener noreferrer">Swiper Element</a> 作为其 Angular 组件的替代品。因此，本指南将介绍如何在您的 Ionic Framework 应用程序中设置 Swiper Element。同时，本文还将涵盖从 `ion-slides` 迁移到 Swiper Element 可能需要的任何信息。

## 开始之前

首先，更新到 Ionic 的最新版本：

```shell
npm install @ionic/angular@latest
```

完成后，在您的项目中安装 Swiper 依赖：

```shell
npm install swiper@latest
```

接下来，我们需要添加 `CUSTOM_ELEMENTS_SCHEMA`，它告诉 Angular 我们将使用自定义元素。这可以在 `app.module.ts` 中完成，也可以在使用 Swiper 的组件模块文件中完成。

```typescript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [..., CUSTOM_ELEMENTS_SCHEMA]
});
...
```

最后，我们需要调用 Swiper 的 `register` 函数来全局注册 Swiper 的自定义元素。这只需要进行一次，因此请将它放在 `app.component.ts` 中。

```typescript
import { register } from 'swiper/element/bundle';

register();

@Component({
  ...
})
...
```

之后，我们只需要将 `ion-slides` 元素替换为 `swiper-container`，并将 `ion-slide` 元素替换为 `swiper-slide`。请注意，这些自定义元素不需要单独导入，因为调用 `register` 会自动告诉 Angular 它们的存在。

```html
<swiper-container>
  <swiper-slide>幻灯片 1</swiper-slide>
  <swiper-slide>幻灯片 2</swiper-slide>
  <swiper-slide>幻灯片 3</swiper-slide>
</swiper-container>
```

## 完整版与核心版

默认情况下，请确保从 `swiper/element/bundle` 导入 `register` 函数。这使用的是 Swiper 的完整版，它会自动包含运行 Swiper 各种功能所需的所有模块和样式表。

如果您想使用核心版（该版本不会自动包含其他模块），请参阅 <a href="https://swiperjs.com/element#core-version-and-modules" target="_blank" rel="noopener noreferrer">https://swiperjs.com/element#core-version-and-modules</a>。本迁移指南的其余部分将假定您使用的是完整版。

## 样式迁移

要迁移您的 CSS，首先更新选择器以指向新的自定义元素：

| ion-slides 选择器 | Swiper 选择器    |
| ------------------- | ------------------ |
| `ion-slides`        | `swiper-container` |
| `ion-slide`         | `swiper-slide`     |

如果您之前使用了 `ion-slides` 上的 CSS 自定义属性，以下是 Swiper 中使用的相应属性列表。

| `ion-slides` CSS 属性          | `swiper-container` CSS 属性             |
| ---------------------------------- | ------------------------------------------- |
| `--bullet-background`              | `--swiper-pagination-bullet-inactive-color` |
| `--bullet-background-active`       | `--swiper-pagination-color`                 |
| `--progress-bar-background`        | `--swiper-pagination-progressbar-bg-color`  |
| `--progress-bar-background-active` | `--swiper-pagination-color`                 |
| `--scroll-bar-background`          | `--swiper-scrollbar-bg-color`               |
| `--scroll-bar-background-active`   | `--swiper-scrollbar-drag-bg-color`          |

对于其他自定义 CSS，由于 Swiper Element 使用 Shadow DOM 封装，样式需要注入到 Shadow DOM 的作用域中。具体操作请参阅 <a href="https://swiperjs.com/element#injecting-styles" target="_blank" rel="noopener noreferrer">https://swiperjs.com/element#injecting-styles</a>。

### 额外的 `ion-slides` 样式

`ion-slides` 组件有一些额外的样式，有助于创建原生般的观感。这些样式**不是**在 Ionic 中使用 Swiper.js 所必需的，但如果您希望尽可能保持 `ion-slides` 的外观，请将以下 CSS 添加到您的 `global.scss` 中：

```css
swiper-container {
  --swiper-pagination-bullet-inactive-color: var(--ion-color-step-200, #cccccc);
  --swiper-pagination-color: var(--ion-color-primary, #0054e9);
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

在 `ion-slides` 中，Ionic 自动定制了几十个 Swiper 属性。这使得在移动设备上滑动时体验更加流畅。我们建议使用 `IonicSlides` 模块，以确保在使用 Swiper 时也设置了这些属性。但是，在 Ionic 中使用 Swiper.js **并不要求**必须使用此模块。

建议您查看 `IonicSlides` 设置的[属性](https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/slides/IonicSlides.ts)，并决定要自定义哪些属性。

我们可以通过导入 `IonicSlides` 并将其作为数组传递给 `swiper-container` 的 `modules` 属性来安装该模块：

<Tabs
  groupId="framework"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular（独立版）' },
  ]}
>
<TabItem value="angular">

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

</TabItem>
<TabItem value="angular-standalone">

```typescript
// home.page.ts

import { IonicSlides } from '@ionic/angular/standalone';

@Component({
  ...
})
export class HomePage {
  swiperModules = [IonicSlides];
}
```

</TabItem>
</Tabs>

```html
<!-- home.page.html -->

<swiper-container [modules]="swiperModules"> ... </swiper-container>
```

:::note
如果您使用的是 Swiper 的核心版并安装了其他模块，请确保 `IonicSlides` 是数组中的最后一个模块。这将使其能够自动自定义分页、滚动条、缩放等模块的设置。
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

要将这些选项作为属性直接设置在 `<swiper-container>` 上，我们可以这样做：

```html
<swiper-container [slidesPerView]="3" [loop]="true">
  <swiper-slide>幻灯片 1</swiper-slide>
  <swiper-slide>幻灯片 2</swiper-slide>
  <swiper-slide>幻灯片 3</swiper-slide>
</swiper-container>
```

以下是从 `ion-slides` 迁移到 Swiper Element 时属性变化的完整列表：

| 名称    | 说明                                                                                                                                   |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| options | 将每个选项作为属性直接设置在 `<swiper-container>` 组件上。                                                           |
| mode    | 针对不同模式下的样式，您可以在 CSS 中使用 `.ios swiper-container` 或 `.md swiper-container` 来定位幻灯片。 |
| pager   | 改用 `pagination` 属性。                                                                                                  |

:::note
Swiper Element 的所有可用属性可以在 <a href="https://swiperjs.com/swiper-api#parameters" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#parameters</a> 找到。
:::

## 事件

由于 `swiper-container` 组件不是由 Ionic Framework 提供的，因此事件名称不会有 `ionSlide` 前缀。此外，所有事件名称都应使用小写，而不是驼峰式命名。

假设在一个使用 `ion-slides` 的应用中，我们使用了 `ionSlideDidChange` 事件：

```html
<ion-slides (ionSlideDidChange)="onSlideChange()">
  <ion-slide>幻灯片 1</ion-slide>
  <ion-slide>幻灯片 3</ion-slide>
  <ion-slide>幻灯片 3</ion-slide>
</ion-slides>
```

要迁移，我们需要将事件名称更改为 `slidechange`：

```html
<swiper-container (slidechange)="onSlideChange()">
  <swiper-slide>幻灯片 1</swiper-slide>
  <swiper-slide>幻灯片 2</swiper-slide>
  <swiper-slide>幻灯片 3</swiper-slide>
</swiper-container>
```

以下是从 `ion-slides` 迁移到 Swiper Element 时事件名称变化的完整列表：

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

:::note
Swiper Element 的所有可用事件可以在 <a href="https://swiperjs.com/swiper-api#events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#events</a> 找到。
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

以下是从 `ion-slides` 迁移到 Swiper Element 时方法变化的完整列表：

| ion-slides 方法    | 说明                                                                                |
| -------------------- | ------------------------------------------------------------------------------------ |
| `getActiveIndex()`   | 改用 `activeIndex` 属性。                                              |
| `getPreviousIndex()` | 改用 `previousIndex` 属性。                                            |
| `getSwiper()`        | 使用 `swiper` 属性获取 Swiper 实例的引用。参见上面的示例。   |
| `isBeginning()`      | 改用 `isBeginning` 属性。                                              |
| `isEnd()`            | 改用 `isEnd` 属性。                                                    |
| `length()`           | 改用 `slides` 属性（即 swiper.slides.length）。                        |
| `lockSwipeToNext()`  | 改用 `allowSlidesNext` 属性。                                          |
| `lockSwipeToPrev()`  | 改用 `allowSlidePrev` 属性。                                           |
| `lockSwipes()`       | 改用 `allowSlideNext`、`allowSlidePrev` 和 `allowTouchMove` 属性。 |
| `startAutoplay()`    | 改用 `autoplay` 属性。                                                 |
| `stopAutoplay()`     | 改用 `autoplay` 属性。                                                 |

:::note
Swiper 实例上所有可用的方法和属性可以在 <a href="https://swiperjs.com/swiper-api#methods-and-properties" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#methods-and-properties</a> 找到。
:::

## 特效

只要您使用的是 Swiper 的完整版，像 Cube 或 Fade 这样的特效可以在 Swiper Element 中直接使用，无需额外导入。例如，下面的代码将使幻灯片具有翻转过渡效果：

```html
<swiper-container effect="flip"> ... </swiper-container>
```

:::note
有关 Swiper 中特效的更多信息，请参阅 <a href="https://swiperjs.com/swiper-api#fade-effect" target="_blank" rel="noopener noreferrer">https://swiperjs.com/swiper-api#fade-effect</a>。
:::

## 总结

现在您已经安装了 Swiper，可以享受一系列全新的 Swiper 功能了。我们建议从 <a href="https://swiperjs.com/element" target="_blank" rel="noopener noreferrer">Swiper Element 文档</a>开始，然后参考<a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer"> Swiper API 文档</a>。

## 常见问题解答

### 在哪里可以找到此迁移的示例？

您可以在 https://github.com/ionic-team/slides-migration-samples 找到一个包含 `ion-slides` 和等效 Swiper 用法的示例应用。

### 在哪里可以获得此迁移的帮助？

如果您在迁移过程中遇到问题，请在 [Ionic 论坛](https://forum.ionicframework.com/) 上发帖。

### 在哪里提交错误报告？

在创建问题之前，请考虑在 <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper 讨论板</a>或 <a href="https://forum.ionicframework.com" target="_blank">Ionic 论坛</a>上发帖，看看您的问题是否可以通过社区解决。

如果您在使用 Swiper 库时遇到问题，新的错误报告应在 Swiper 仓库中提交：<a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

如果您在使用 `IonicSlides` 模块时遇到问题，新的错误报告应在 Ionic Framework 仓库中提交：<a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>