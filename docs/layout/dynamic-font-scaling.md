# 动态字体缩放

动态字体缩放是一项允许用户选择屏幕上显示文本大小的功能。这有助于需要更大文本以提高可读性的用户，同时也兼顾能够阅读较小文本的用户。

## 试一下

:::tip
请确保在 Android、iOS 或 iPadOS 设备上进行测试。

如果在 Chrome for Android 上测试，请确保已启用["无障碍页面缩放"](#chrome-for-android)功能。
:::

按照[在设备上更改字体大小](#changing-the-font-size-on-a-device)指南设置您偏好的字体大小，然后观察下方演示中的文本根据您的偏好进行放大或缩小。

import DynamicFontScaling from '@site/static/usage/v8/layout/dynamic-font-scaling/index.md';

<DynamicFontScaling />

## 使用动态字体缩放

### 在应用中启用

只要导入了 [typography.css](/docs/layout/global-stylesheets#typographycss) 文件，动态字体缩放默认就是启用的。导入此文件将定义 `--ion-dynamic-font` 变量，从而激活动态字体缩放。虽然不推荐，但开发者可以通过在应用代码中将此变量设置为 `initial` 来选择退出动态字体缩放。

### 集成自定义组件

开发者可以通过将使用 `px` 单位的任何 `font-size` 声明转换为使用 [rem 单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)来配置其自定义组件以利用动态字体缩放。从 `px` 转换为 `rem` 的简单方法是将像素字体大小除以默认浏览器字体大小（通常为 `16px`）。例如，如果组件的字体大小为 `14px`，则可以通过 `14px / 16px = 0.875rem` 将其转换为 `rem`。还请注意，任何覆盖了字体大小的 Ionic 组件也应更新为使用 `rem` 单位。

需要注意的一点是，您的组件尺寸可能需要更改以适应更大的字体大小。例如，`width` 和 `height` 属性可能需要分别更改为 `min-width` 和 `min-height`。开发者应审核其应用中使用[长度值](https://developer.mozilla.org/en-US/docs/Web/CSS/length)的任何 CSS 属性，并进行从 `px` 到 `rem` 的适用转换。我们还建议让长文本换行到下一行，而不是截断，以保持大文本的可读性。

### 自定义字体家族

我们建议使用 Ionic 中的默认字体，因为它们设计为在任何尺寸下都看起来不错，并确保与其他移动应用的一致性。但是，开发者可以通过 CSS 使用自定义字体家族与动态字体缩放：

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

然而，`em` 单位具有复合效应，可能导致问题。在以下示例中，第二个 `.child` 元素的计算字体大小为 `80px`，因为字体大小会复合。

```html
<div class="parent">
  Parent element with 20px
  <div class="child">
    Child element with 40px
    <div class="child">Child element with 80px</div>
  </div>
</div>

<div style={{ fontSize: '20px' }}>
  Parent element with 20px
  <div style={{ fontSize: '2em' }}>
    Child element with 40px
    <div style={{ fontSize: '2em' }}>Child element with 80px</div>
  </div>
</div>
```

由于这种复合效应，我们强烈建议在使用动态字体缩放时使用 `rem` 单位而不是 `em` 单位。`rem` 单位根据根元素（通常是 `<html>`）的字体大小设置元素的字体大小。根元素的默认字体大小通常为 `16px`。

在以下示例中，`.child` 的计算字体大小为 `32px`，因为字体大小是相对于 `html` 计算的，而不是相对于 `.parent`。

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2rem;
}
```

## 动态字体缩放在 Ionic 中的工作原理

定义字体大小并参与动态字体缩放的 Ionic 组件通常使用 [rem 单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)。这将每个组件中的文本大小相对于根元素（通常是 `html` 元素）的字体大小进行缩放。这意味着随着根元素字体大小的变化，所有 Ionic 组件中的文本以一致的方式缩放。这避免了手动覆盖每个组件字体大小的需要。这些组件中的一些元素，如图标，使用 `em` 单位，以便元素相对于文本大小进行缩放，尽管文本本身使用 `rem` 单位进行缩放。

### iOS

Ionic 中的动态字体缩放建立在 iOS 功能 [Dynamic Type](https://developer.apple.com/documentation/uikit/uifont/scaling_fonts_automatically#overview) 之上。为此，Ionic 将根元素的 [font](https://developer.mozilla.org/en-US/docs/Web/CSS/font) 设置为 Apple 定义的文本样式。为保持一致性，Ionic 使用 [body](https://developer.apple.com/documentation/uikit/uifont/textstyle/1616682-body) 文本样式。

使用 Apple 定义的文本样式启用 Dynamic Type，允许 Ionic 组件中的所有文本根据系统级别的偏好进行缩放。请注意，这些 Apple 定义的字体仅在 Apple 设备上有效。因此，即使您的应用使用 `ios` 模式，这些字体也不会在 Android 设备上生效。

当应用处于 `ios` 模式时，Ionic 遵循 [Apple 的排版人机界面指南](https://developer.apple.com/design/human-interface-guidelines/typography)。因此，当文本大小改变时，重要内容会被优先考虑。这意味着以下几点：

1. `ion-header` 或 `ion-footer` 中的内容将具有最大字体大小，以优先考虑 `ion-content` 中的内容，这些内容被视为比 `ion-header` 和 `ion-footer` 中的内容更重要。
2. 诸如 `ion-badge` 和 `ion-back-button` 之类的组件将具有最小字体大小，以保持可读性。
3. 根据 Apple 的人机界面指南，诸如 `ion-tab-bar` 和 `ion-picker` 之类的组件中的文本不参与动态字体缩放。### Android Web View

Android Web View 的字体缩放机制在网页内容中始终处于启用状态，并会自动缩放使用 `px` 单位定义的字体大小。这意味着，即使最终字体大小与指定的最大或最小字体大小不符，任何使用 `px` 指定的最大或最小字体大小仍然会被缩放。

在以下示例中，我们使用 [min()](https://developer.mozilla.org/en-US/docs/Web/CSS/min) 函数来表明 `.foo` 的字体大小不应超过 `14px`。

```css
.foo {
  font-size: min(1rem, 14px);
}
```

如果根元素的默认字体大小为 `16px`，系统级字体缩放比例为 `1.5`（即文本大小应增加 50%），那么 `1rem` 将计算为 `24px`，因为 `16 * 1.5 = 24`。

这比我们定义的最大值 `14px` 要大，因此可能会认为 `.foo` 的实际字体大小就是 `14px`。然而，由于 Android Web View 会缩放任何使用 `px` 单位定义的字体大小，这意味着我们在 `min()` 函数中使用的 `14px` 也会被缩放 1.5 倍。

因此，最大的计算字体大小实际上是 `21px`，因为 `14 * 1.5 = 21`，所以 `.foo` 的整体计算字体大小是 `21px`。

### Chrome for Android

Android 上的 Chrome 浏览器与 Android Web View 的行为有所不同。默认情况下，Chrome for Android 不会遵循系统级的字体缩放设置。不过，Chromium 团队正在开发一项新功能以支持此行为。启用该功能后，它将改变 `html` 元素的 `zoom` 级别，从而不仅使文本变大，还会导致整个布局放大。

开发者可以通过在 `chrome://flags` 中启用实验性的 "Accessibility Page Zoom" 功能来测试这一行为。

更多信息请参阅 https://bugs.chromium.org/p/chromium/issues/detail?id=645717

### 在不同平台上使用模式

每个平台的字体缩放行为略有不同，`ios` 和 `md` 模式的设计正是为了利用各自平台上的缩放行为。

例如，`ios` 模式利用最大和最小字体大小来遵循 [Apple 的人机界面指南 - 排版规范](https://developer.apple.com/design/human-interface-guidelines/typography)。`md` 模式没有实现相同的行为，因为 Material Design 没有相同的指导原则。这意味着在 iOS 设备上使用 `md` 模式可能会导致页眉和页脚中的字体变得非常大。

因此，我们强烈建议在使用动态字体缩放时，在 iOS 设备上使用 `ios` 模式，在 Android 设备上使用 `md` 模式。

## 在设备上更改字体大小

字体缩放偏好设置由用户在每个设备上单独配置。这使用户能够为所有支持此行为的应用程序缩放字体。本指南展示了如何在各个平台上启用字体缩放。

### iOS

iOS 上的字体缩放可以在“设置”应用中配置。

更多信息请参阅 [Apple 支持](https://support.apple.com/en-us/102453)

### Android

用户访问字体缩放配置的位置因设备而异，但通常可以在“设置”应用的“辅助功能”页面中找到。

:::info
Android 上的 Chrome 浏览器在遵循系统级字体缩放方面存在一些限制。更多信息请参阅 [Chrome for Android](#chrome-for-android)
:::

## 故障排除

### 动态字体缩放不起作用

动态字体缩放未在应用中生效的原因有很多。以下列表虽不全面，但提供了一些需要检查的事项，以帮助调试动态字体缩放为何不起作用。

1.  确认您使用的 Ionic 版本支持动态字体缩放。动态字体缩放功能从 Ionic v7.5 开始引入。
2.  确认已导入 [typography.css](/docs/layout/global-stylesheets#typographycss) 文件。该文件是动态字体缩放正常工作所必需的。
3.  确认您的代码没有覆盖根元素的默认字体大小。手动设置根元素的字体大小会阻碍动态字体缩放按预期工作。
4.  确认您的代码没有覆盖 Ionic 组件上的字体大小。设置 `font-size` 规则的 Ionic 组件会使用 `rem` 单位。但是，如果您的应用将其覆盖为使用 `px`，那么该自定义规则需要转换为使用 `rem`。更多信息请参阅 [集成自定义组件](#integrating-custom-components)。
5.  如果使用 Chrome for Android，请确认“Accessibility Page Zoom”已启用。更多信息请参阅 [Chrome for Android](#chrome-for-android)。

### Android 上未遵守最大和最小字体大小

Android Web View 会根据系统级字体缩放偏好设置，缩放任何使用 `px` 单位定义的字体大小。这意味着实际字体大小可能大于或小于在 [min()](https://developer.mozilla.org/en-US/docs/Web/CSS/min)、[max()](https://developer.mozilla.org/en-US/docs/Web/CSS/max) 或 [clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) 中定义的字体大小。

更多信息请参阅 [Android 上的字体缩放工作原理](#android)。

### 即使禁用了动态字体缩放，字体大小仍然变大/变小

即使禁用了动态字体缩放，Ionic 组件也使用 [rem 单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) 定义字体大小。这会使每个组件中的文本大小相对于根元素（通常是 `html` 元素）的字体大小。因此，如果 `html` 的字体大小发生变化，所有 Ionic 组件的计算字体大小也会随之改变。

### 缩放后的 Ionic iOS 组件字体大小与原生 iOS 对应组件不完全匹配

某些原生 iOS 组件（例如操作表）使用了 Ionic 无法访问的私有字体缩放比例。虽然我们努力尽可能接近原生行为，但某些组件中的文本渲染可能会比其原生对应组件稍大或稍小。

### 启用动态字体缩放后，我在 iOS 上的 Ionic 应用中的文本大小发生了变化

根元素的默认字体大小通常为 `16px`。然而，iOS 设备上的动态字体缩放利用了 ["Body" 文本样式](https://developer.apple.com/design/human-interface-guidelines/typography#Specifications)，其默认字体大小为 `17px`。由于 Ionic 组件中的文本是相对于根元素的字体大小进行缩放的，因此即使系统级文本缩放比例没有改变，启用动态字体缩放后，某些文本也可能会变大或变小。

:::info
iOS 提供了一个 "Callout" 文本样式，其默认字体大小为 `16px`。但是，该字体样式目前未向网页内容公开。更多信息请参阅 [WebKit 中支持的文本样式](https://webkit.org/blog/3709/using-the-system-font-in-web-content/)。
:::