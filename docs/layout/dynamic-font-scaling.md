# 动态字体缩放

动态字体缩放是一项允许用户选择屏幕上显示文本大小的功能。这有助于需要更大文本以提高可读性的用户，同时也适应可以阅读较小文本的用户。

## 试试看

:::tip
请务必在 Android、iOS 或 iPadOS 设备上尝试。

如果在 Chrome for Android 上测试，请确保启用了[“辅助功能页面缩放”](#chrome-for-android)。
:::

按照[在设备上更改字体大小](#changing-the-font-size-on-a-device)指南设置您偏好的字体大小，然后观察下方示例中的文本根据您的偏好放大或缩小。

import DynamicFontScaling from '@site/static/usage/v8/layout/dynamic-font-scaling/index.md';

<DynamicFontScaling />

## 使用动态字体缩放

### 在应用中启用

只要导入了 [typography.css](/docs/layout/global-stylesheets#typographycss) 文件，动态字体缩放默认就是启用的。导入此文件将定义 `--ion-dynamic-font` 变量，从而激活动态字体缩放。虽然不推荐，但开发者可以通过在应用代码中将此变量设置为 `initial` 来选择退出动态字体缩放。

### 集成自定义组件

开发者可以通过将使用 `px` 单位的 `font-size` 声明转换为使用 [rem 单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)，来配置自定义组件以利用动态字体缩放。将 `px` 转换为 `rem` 的一个简单方法是将像素字体大小除以默认浏览器字体大小（通常为 `16px`）。例如，如果一个组件的字体大小为 `14px`，那么可以通过 `14px / 16px = 0.875rem` 转换为 `rem`。同时请注意，任何被覆盖了字体大小的 Ionic 组件也应更新为使用 `rem` 单位。

需要注意的一点是，组件的尺寸可能需要更改以适应更大的字体大小。例如，`width` 和 `height` 属性可能需要分别更改为 `min-width` 和 `min-height`。开发者应审核其应用中所有使用[长度值](https://developer.mozilla.org/en-US/docs/Web/CSS/length)的 CSS 属性，并将适用的 `px` 转换为 `rem`。我们还建议让长文本换行到下一行，而不是被截断，以保持大文本的可读性。

### 自定义字体族

我们建议使用 Ionic 中的默认字体，因为它们设计为在任何尺寸下都看起来很好，并确保与其他移动应用的一致性。但是，开发者可以通过 CSS 使用自定义字体族与动态字体缩放：

```css
html {
  --ion-dynamic-font: var(--ion-default-dynamic-font);
  --ion-font-family: 'Comic Sans MS';
}
```

### `em` 单位与 `rem` 单位

开发者有两种相对字体大小的选择：[`em` 和 `rem`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#ems_and_rems)。

`em` 单位根据父元素的字体大小设置元素的字体大小。

在以下示例中，`.child` 的计算字体大小为 `40px`，因为它是 `.parent` 的子元素（`2em * 20px = 40px`）。

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2em;
}
```

然而，`em` 单位具有复合效应，可能会导致问题。在以下示例中，第二个 `.child` 元素的计算字体大小为 `80px`，因为字体大小是复合的。

```html
<div class="parent">
  父元素，20px
  <div class="child">
    子元素，40px
    <div class="child">子元素，80px</div>
  </div>
</div>
```

<div style={{ fontSize: '20px' }}>
  父元素，20px
  <div style={{ fontSize: '2em' }}>
    子元素，40px
    <div style={{ fontSize: '2em' }}>子元素，80px</div>
  </div>
</div>

由于这种复合效应，我们强烈建议在使用动态字体缩放时使用 `rem` 单位而不是 `em` 单位。`rem` 单位根据根元素（通常是 `<html>`）的字体大小设置元素的字体大小。根元素的默认字体大小通常为 `16px`。

在以下示例中，`.child` 的计算字体大小为 `32px`，因为字体大小是相对于 `html` 计算的，而不是 `.parent`。

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2rem;
}
```

## 动态字体缩放在 Ionic 中的工作原理

定义字体大小并参与动态字体缩放的 Ionic 组件通常使用 [rem 单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)。这将每个组件中的文本大小相对于根元素（通常是 `html` 元素）的字体大小进行调整。这意味着随着根元素字体大小的变化，所有 Ionic 组件中的文本都将以一致的方式缩放。这避免了手动覆盖每个组件字体大小的需要。这些组件中的一些元素，例如图标，使用 `em` 单位，以便元素相对于文本大小进行调整，尽管文本本身使用 `rem` 单位。

### iOS

Ionic 中的动态字体缩放建立在 iOS 的一项称为[动态类型](https://developer.apple.com/documentation/uikit/uifont/scaling_fonts_automatically#overview)的功能之上。为此，Ionic 将根元素的[字体](https://developer.mozilla.org/en-US/docs/Web/CSS/font)设置为 Apple 定义的文本样式。为了一致性，Ionic 使用[正文](https://developer.apple.com/documentation/uikit/uifont/textstyle/1616682-body)文本样式。

使用 Apple 定义的文本样式启用动态类型，允许 Ionic 组件中的所有文本根据系统级偏好进行缩放。请注意，这些 Apple 定义的字体仅适用于 Apple 设备。因此，即使您的应用使用 `ios` 模式，这些字体也不会在 Android 设备上工作。

当应用处于 `ios` 模式时，Ionic 遵循[苹果的人机界面指南：排版](https://developer.apple.com/design/human-interface-guidelines/typography)。因此，当文本大小更改时，重要内容会被优先考虑。这意味着以下几点：

1. `ion-header` 或 `ion-footer` 中的内容将有最大字体大小，以优先考虑 `ion-content` 中的内容，这些内容被认为比 `ion-header` 和 `ion-footer` 中的内容更重要。
2. 诸如 `ion-badge` 和 `ion-back-button` 等组件将有最小字体大小，以便它们保持可读性。
3. 根据苹果的人机界面指南，诸如 `ion-tab-bar` 和 `ion-picker` 等组件中的文本不参与动态字体缩放。

### Android Web View

Android Web View 的字体缩放机制在 Web 内容中始终启用，并将自动缩放使用 `px` 单位定义的字体大小。这意味着，即使最终字体大小与指定的最大或最小字体大小不一致，任何使用 `px` 指定的最大或最小字体大小仍将被缩放。

在以下示例中，我们使用 [min()](https://developer.mozilla.org/en-US/docs/Web/CSS/min) 函数来表示 `.foo` 的字体大小不应大于 `14px`。

```css
.foo {
  font-size: min(1rem, 14px);
}
```

如果根元素的默认字体大小为 `16px`，且系统级字体缩放比例为 `1.5`（即文本大小应增加 50%），那么 `1rem` 将计算为 `24px`，因为 `16 * 1.5 = 24`。

这比我们定义的最大值 `14px` 要大，因此可能会认为 `.foo` 的计算字体大小为 `14px`。然而，由于 Android Web View 会缩放任何使用 `px` 单位定义的字体大小，这意味着我们 `min()` 函数中使用的 `14px` 也将被缩放 1.5 倍。

因此，这意味着最大计算字体大小实际上是 `21px`，因为 `14 * 1.5 = 21`，所以 `.foo` 的整体计算字体大小为 `21px`。

### Chrome for Android

Android 上的 Chrome 网络浏览器的行为与 Android Web View 不同。默认情况下，Chrome for Android 不尊重系统级字体缩放设置。然而，Chromium 团队正在开发一项新功能来实现这一点。启用后，此功能将更改 `html` 元素的 `zoom` 级别，这会导致布局大小增加，同时文本也会变大。

开发者可以通过在 `chrome://flags` 中启用实验性的“辅助功能页面缩放”功能来测试此行为。

更多信息请参阅 https://bugs.chromium.org/p/chromium/issues/detail?id=645717。

### 在不同平台上使用模式

每个平台都有略微不同的字体缩放行为，`ios` 和 `md` 模式已实现以利用各自平台上的缩放行为。

例如，`ios` 模式利用最大和最小字体大小来遵循[苹果的人机界面指南：排版](https://developer.apple.com/design/human-interface-guidelines/typography)。`md` 模式未实现相同的行为，因为 Material Design 没有相同的指南。这意味着在 iOS 设备上使用 `md` 模式可能会允许标题和页脚中使用非常大的字体大小。

因此，我们强烈建议在使用动态字体缩放时，在 iOS 设备上使用 `ios` 模式，在 Android 设备上使用 `md` 模式。

## 在设备上更改字体大小

字体缩放偏好由用户在每台设备上配置。这允许用户为所有支持此行为的应用程序缩放字体。本指南展示了如何为每个平台启用字体缩放。

### iOS

iOS 上的字体缩放可以在“设置”应用中配置。

更多信息请参阅[苹果支持](https://support.apple.com/en-us/102453)。

### Android

用户访问字体缩放配置的位置因设备而异，但通常在“设置”应用的“辅助功能”页面中找到。

:::info
Android 上的 Chrome 网络浏览器在尊重系统级字体缩放方面存在一些限制。更多信息请参阅[Chrome for Android](#chrome-for-android)。
:::

## 故障排除

### 动态字体缩放不工作

动态字体缩放可能对应用没有任何影响的原因有很多。以下列表虽然不全面，但提供了一些检查项，以调试为什么动态字体缩放不工作。

1. 验证您的 Ionic 版本是否支持动态字体缩放。动态字体缩放从 Ionic v7.5 开始添加。
2. 验证是否已导入 [typography.css](/docs/layout/global-stylesheets#typographycss) 文件。此文件是动态字体缩放工作所必需的。
3. 验证您的代码是否未覆盖根元素的默认字体大小。手动设置根元素的字体大小将阻止动态字体缩放按预期工作。
4. 验证您的代码是否未覆盖 Ionic 组件的字体大小。设置 `font-size` 规则的 Ionic 组件将使用 `rem` 单位。但是，如果您的应用将其覆盖为使用 `px`，那么该自定义规则需要转换为使用 `rem`。更多信息请参阅[集成自定义组件](#integrating-custom-components)。
5. 验证是否启用了“辅助功能页面缩放”（如果使用 Chrome for Android）。更多信息请参阅[Chrome for Android](#chrome-for-android)。

### Android 上未遵守最大和最小字体大小

Android Web View 会根据系统级字体缩放偏好缩放任何使用 `px` 单位定义的字体大小。这意味着实际字体大小可能大于或小于在 [min()](https://developer.mozilla.org/en-US/docs/Web/CSS/min)、[max()](https://developer.mozilla.org/en-US/docs/Web/CSS/max) 或 [clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) 中定义的字体大小。

更多信息请参阅[Android 上的字体缩放工作原理](#android)。

### 即使禁用了动态字体缩放，字体大小也变大/变小了

即使禁用了动态字体缩放，Ionic 组件也使用 [rem 单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)定义字体大小。这将每个组件中的文本大小相对于根元素（通常是 `html` 元素）的字体大小进行调整。因此，如果 `html` 的字体大小发生变化，所有 Ionic 组件的计算字体大小也会发生变化。

### 缩放的 Ionic iOS 组件字体大小与原生 iOS 等效项不完全匹配

某些原生 iOS 组件，例如操作表，使用了 Ionic 无法访问的私有字体缩放。虽然我们努力尽可能接近原生行为，但某些组件中的文本可能比其原生对应项略大或略小。

### 启用动态字体缩放后，iOS 上 Ionic 应用中的文本大小发生了变化

根元素的默认字体大小通常为 `16px`。然而，iOS 设备上的动态字体缩放使用了[“正文”文本样式](https://developer.apple.com/design/human-interface-guidelines/typography#Specifications)，其默认字体大小为 `17px`。由于 Ionic 组件中的文本相对于根元素的字体大小缩放，即使系统级文本缩放比例未更改，启用动态字体缩放后，某些文本也可能会变大或变小。

:::info
iOS 提供了一个“标题”文本样式，其默认字体大小为 `16px`。然而，此字体样式目前未向 Web 内容公开。更多信息请参阅[WebKit 中支持的文本样式](https://webkit.org/blog/3709/using-the-system-font-in-web-content/)。
:::