# 动态字体缩放

动态字体缩放是一项允许用户选择屏幕上显示文本大小的功能。这有助于需要更大字体以提高可读性的用户，同时也能适应可以阅读较小字体的用户。

从 Ionic v7.5 开始，动态字体缩放已在 Android、iOS 和 iPadOS 上获得支持。

<LegacyAnchor id="changing-the-font-size-on-a-device" />

## 体验功能

:::提示
请务必在 Android、iOS 或 iPadOS 设备上进行测试。

如果在 Chrome for Android 上进行测试，请确保已启用 ["辅助功能页面缩放"](#chrome-for-android)。
:::

按照 [设备上更改字体大小](#changing-the-font-size-on-a-device) 指南设置您偏好的字体大小，并观察下方演示中的文本根据您的偏好进行放大或缩小。

import DynamicFontScaling from '@site/static/usage/v7/layout/dynamic-font-scaling/index.md';

<DynamicFontScaling />

<LegacyAnchor id="enabling-dynamic-font-scaling-in-ionic" />

## 在 Ionic 中启用动态字体缩放

:::信息
该功能目前在 iOS 上是可选的。但从 Ionic 8 开始，它将默认启用，届时以下 CSS 将不再需要。
:::

动态字体缩放在 Android 上默认已启用。开发者可以通过以下步骤在 iOS 上启用它：

1. 确保已导入 [typography.css](./global-stylesheets#typographycss) 文件。
2. 将以下 CSS 添加到全局样式表中：

```css
html {
  --ion-dynamic-font: var(--ion-default-dynamic-font);
}
```

:::注意
在底层，Ionic 在 iOS 设备上设置以下 CSS 以启用动态字体缩放：

```css
html {
  font: var(--ion-dynamic-font);
}
```

:::

## 使用动态字体缩放

<LegacyAnchor id="integrating-custom-components" />

### 集成自定义组件

开发者可以通过将使用 `px` 单位的 `font-size` 声明转换为使用 [rem 单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)，来配置其自定义组件以利用动态字体缩放。将 `px` 转换为 `rem` 的一个简单方法是将像素字体大小除以默认浏览器字体大小（通常为 `16px`）。例如，如果组件的字体大小为 `14px`，则可以通过 `14px / 16px = 0.875rem` 将其转换为 `rem`。同时请注意，任何已覆盖字体大小的 Ionic 组件也应更新为使用 `rem` 单位。

需要记住的一点是，您的组件尺寸可能需要更改以适应更大的字体大小。例如，`width` 和 `height` 属性可能需要分别更改为 `min-width` 和 `min-height`。开发者应检查应用程序中所有使用[长度值](https://developer.mozilla.org/en-US/docs/Web/CSS/length)的 CSS 属性，并进行任何适用的从 `px` 到 `rem` 的转换。我们还建议让长文本换行到下一行，而不是截断，以保持大文本的可读性。

### 自定义字体家族

我们建议使用 Ionic 中的默认字体，因为它们设计为在任何尺寸下都看起来美观，并确保与其他移动应用的一致性。然而，开发者可以通过以下 CSS 使用自定义字体家族与动态字体缩放：

```css
html {
  --ion-dynamic-font: var(--ion-default-dynamic-font);
  --ion-font-family: 'Comic Sans MS';
}
```

### `em` 单位与 `rem` 单位

开发者有两种相对字体大小的选择：[`em` 和 `rem`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#ems_and_rems)。

`em` 单位根据其父元素的字体大小设置元素的字体大小。

在以下示例中，`.child` 的计算字体大小为 `40px`，因为它是 `.parent` 的子元素（`2em * 20px = 40px`）。

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2em;
}
```

然而，`em` 单位具有复合效应，这可能导致问题。在以下示例中，第二个 `.child` 元素的计算字体大小为 `80px`，因为字体大小会复合。

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

定义字体大小并参与动态字体缩放的 Ionic 组件通常使用 [rem 单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)。这使每个组件中的文本大小相对于根元素（通常是 `html` 元素）的字体大小。这意味着随着根元素字体大小的变化，所有 Ionic 组件中的文本都会以一致的方式缩放。这避免了手动覆盖每个组件字体大小的需要。这些组件中的某些元素（例如图标）使用 `em` 单位，以便元素相对于文本大小进行缩放，尽管文本本身使用 `rem` 单位。

### iOS

Ionic 中的动态字体缩放建立在 iOS 的一项名为 [动态类型](https://developer.apple.com/documentation/uikit/uifont/scaling_fonts_automatically#overview) 的功能之上。为此，Ionic 将根元素的 [font](https://developer.mozilla.org/en-US/docs/Web/CSS/font) 设置为 Apple 定义的文本样式。为保持一致性，Ionic 使用 [body](https://developer.apple.com/documentation/uikit/uifont/textstyle/1616682-body) 文本样式。

使用 Apple 定义的文本样式启用动态类型，允许 Ionic 组件中的所有文本根据系统级偏好进行缩放。请注意，这些 Apple 定义的字体仅适用于 Apple 设备。因此，即使您的应用使用 `ios` 模式，这些字体也不会在 Android 设备上工作。

当应用处于 `ios` 模式时，Ionic 遵循 [Apple 的人机界面指南 - 排版](https://developer.apple.com/design/human-interface-guidelines/typography)。这意味着在文本大小更改时，重要内容会得到优先处理。这导致以下几点：

1. `ion-header` 或 `ion-footer` 中的内容将具有最大字体大小，以优先处理 `ion-content` 中的内容，这些内容被视为比 `ion-header` 和 `ion-footer` 中的内容更重要。
2. 诸如 `ion-badge` 和 `ion-back-button` 等组件将具有最小字体大小，以保持可读性。
3. 根据 Apple 的人机界面指南，诸如 `ion-tab-bar` 和 `ion-picker` 等组件中的文本不参与动态字体缩放。

### Android Web View

Android Web View 的字体缩放机制始终在 Web 内容中启用，并将自动缩放使用 `px` 单位定义的字体大小。这意味着，即使最终字体大小与指定的最大或最小字体大小不对齐，使用 `px` 指定的任何最大或最小字体大小仍将被缩放。

在以下示例中，我们使用 [min()](https://developer.mozilla.org/en-US/docs/Web/CSS/min) 函数来指示 `.foo` 的字体大小不应大于 `14px`。

```css
.foo {
  font-size: min(1rem, 14px);
}
```

如果根元素的默认字体大小为 `16px`，且系统级字体缩放比例为 `1.5`（即文本大小应增加 50%），则 `1rem` 将计算为 `24px`，因为 `16 * 1.5 = 24`。

这比我们定义的最大值 `14px` 更大，因此人们可能会认为 `.foo` 的计算字体大小为 `14px`。但是，由于 Android Web View 会缩放使用 `px` 单位定义的任何字体大小，这意味着我们 `min()` 函数中使用的 `14px` 也将按 1.5 进行缩放。

因此，这意味著最大计算字体大小实际上是 `21px`，因为 `14 * 1.5 = 21`，因此 `.foo` 的整体计算字体大小为 `21px`。

### Chrome for Android

Android 上的 Chrome 网页浏览器的行为与 Android Web View 不同。默认情况下，Chrome for Android 不遵循系统级字体缩放设置。然而，Chromium 团队正在开发一项新功能以允许此行为。启用后，此功能将更改 `html` 元素的 `zoom` 级别，除了文本外，还会导致布局大小增加。

开发者可以通过在 `chrome://flags` 中启用实验性的 "辅助功能页面缩放" 功能来测试此行为。

有关更多信息，请参阅 https://bugs.chromium.org/p/chromium/issues/detail?id=645717

### 在不同平台上使用模式

每个平台的字体缩放行为略有不同，`ios` 和 `md` 模式已实现以利用各自平台上的缩放行为。

例如，`ios` 模式利用最大和最小字体大小来遵循 [Apple 的人机界面指南 - 排版](https://developer.apple.com/design/human-interface-guidelines/typography)。`md` 模式未实现相同的行为，因为 Material Design 没有相同的指导方针。这意味着在 iOS 设备上使用 `md` 模式可能允许标题和页脚中出现非常大的字体。

因此，我们强烈建议在使用动态字体缩放时，在 iOS 设备上使用 `ios` 模式，在 Android 设备上使用 `md` 模式。

## 在设备上更改字体大小

字体缩放偏好由用户在每台设备上配置。这允许用户为所有支持此行为的应用程序缩放字体。本指南展示了如何为每个平台启用字体缩放。

### iOS

iOS 上的字体缩放可以在 "设置" 应用中配置。

有关更多信息，请参阅 [Apple 支持](https://support.apple.com/en-us/102453)。

### Android

用户访问字体缩放配置的位置因设备而异，但通常可以在 "设置" 应用的 "辅助功能" 页面中找到。

:::信息
Android 上的 Chrome 网页浏览器在遵循系统级字体缩放方面存在一些限制。有关更多信息，请参阅 [Chrome for Android](#chrome-for-android)。
:::

## 故障排除

### 动态字体缩放不起作用

有许多原因可能导致动态字体缩放对应用程序没有影响。以下列表（虽不全面）提供了一些需要检查的事项，以调试动态字体缩放为何不起作用。

1. 验证您的 Ionic 版本是否支持动态字体缩放。动态字体缩放从 Ionic v7.5 开始添加。
2. 在 Ionic 7 中，动态字体缩放在 iOS 上是可选的。验证是否已设置正确的 CSS。有关更多信息，请参阅 [在 Ionic 中启用动态字体缩放](#enabling-dynamic-font-scaling-in-ionic)。
3. 验证您的代码是否未覆盖根元素的默认字体大小。手动设置根元素的字体大小将阻止动态字体缩放按预期工作。
4. 验证您的代码是否未覆盖 Ionic 组件上的字体大小。设置 `font-size` 规则的 Ionic 组件将使用 `rem` 单位。但是，如果您的应用覆盖为使用 `px`，则该自定义规则需要转换为使用 `rem`。有关更多信息，请参阅 [集成自定义组件](#integrating-custom-components)。
5. 如果使用 Chrome for Android，请验证 "辅助功能页面缩放" 是否已启用。有关更多信息，请参阅 [Chrome for Android](#chrome-for-android)。

### 最大和最小字体大小在 Android 上未被遵守

Android Web View 会根据系统级字体缩放偏好缩放使用 `px` 单位定义的任何字体大小。这意味着实际字体大小可能大于或小于在 [min()](https://developer.mozilla.org/en-US/docs/Web/CSS/min)、[max()](https://developer.mozilla.org/en-US/docs/Web/CSS/max) 或 [clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) 中定义的字体大小。

有关更多信息，请参阅 [Android 上字体缩放的工作原理](#android)。

### 即使禁用动态字体缩放，字体大小也更大/更小

即使禁用动态字体缩放，Ionic 组件也使用 [rem 单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) 定义字体大小。这使每个组件中的文本大小相对于根元素（通常是 `html` 元素）的字体大小。因此，如果 `html` 的字体大小发生变化，所有 Ionic 组件的计算字体大小也会发生变化。

### 缩放的 Ionic iOS 组件字体大小与原生 iOS 等效项不完全匹配

某些原生 iOS 组件（例如操作表）使用 Ionic 无法访问的私有字体缩放。虽然我们尽量保持尽可能接近原生行为，但某些组件中的文本可能比其原生对应项稍大或稍小。

### 启用动态字体缩放后，我的 Ionic 应用在 iOS 上的文本大小发生了变化

根元素的默认字体大小通常为 `16px`。但是，iOS 设备上的动态字体缩放使用 ["Body" 文本样式](https://developer.apple.com/design/human-interface-guidelines/typography#Specifications)，其默认字体大小为 `17px`。由于 Ionic 组件中的文本相对于根元素的字体大小进行缩放，因此即使系统级文本缩放比例未更改，启用动态字体缩放后，某些文本可能会变得更大或更小。

:::信息
iOS 提供了一个 "Callout" 文本样式，其默认字体大小为 `16px`。但是，此字体样式目前未暴露给 Web 内容。有关更多信息，请参阅 [WebKit 中支持的文本样式](https://webkit.org/blog/3709/using-the-system-font-in-web-content/)。
:::