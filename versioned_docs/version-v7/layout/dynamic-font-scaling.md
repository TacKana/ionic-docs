# 动态字体缩放

动态字体缩放是一项允许用户选择屏幕上显示文本大小的功能。这有助于需要更大文本以获得更好可读性的用户，同时也适应能够阅读较小文本的用户。

动态字体缩放从 Ionic v7.5 开始支持 Android、iOS 和 iPadOS。

## 尝试使用

:::tip
请务必在 Android、iOS 或 iPadOS 设备上尝试此功能。

如果您在 Android 版 Chrome 上进行测试，请确保启用了"无障碍页面缩放"功能。
:::

按照[在设备上更改字体大小](#在设备上更改字体大小)指南设置您偏好的字体大小，然后观察下方演示中的文本根据您的偏好变大或变小。

import DynamicFontScaling from '@site/static/usage/v7/layout/dynamic-font-scaling/index.md';

<DynamicFontScaling />

## 在 Ionic 中启用动态字体缩放

:::info
此功能目前在 iOS 上是可选加入的。但在 Ionic 8 中将默认启用，届时以下 CSS 将不再需要。
:::

动态字体缩放在 Android 上默认已启用。开发者可以通过以下步骤在 iOS 上启用：

1. 确保已导入 [typography.css](./global-stylesheets#typographycss) 文件。
2. 在全局样式表中添加以下 CSS：

```css
html {
  --ion-dynamic-font: var(--ion-default-dynamic-font);
}
```

:::note
在底层，Ionic 在 iOS 设备上设置以下 CSS 以启用动态字体缩放：

```css
html {
  font: var(--ion-dynamic-font);
}
```

:::

## 使用动态字体缩放

### 集成自定义组件

开发者可以通过将使用 `px` 单位的 `font-size` 声明转换为使用 [rem 单位](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)来配置其自定义组件以利用动态字体缩放。从 `px` 转换为 `rem` 的简单方法是将像素字体大小除以浏览器默认字体大小（通常为 `16px`）。例如，如果组件的字体大小为 `14px`，则可以通过 `14px / 16px = 0.875rem` 将其转换为 `rem`。另请注意，任何已覆盖字体大小的 Ionic 组件也应更新为使用 `rem` 单位。

需要注意的一点是，组件的尺寸可能需要更改以适应更大的字体大小。例如，`width` 和 `height` 属性可能分别需要更改为 `min-width` 和 `min-height`。开发者应审计其应用中使用[长度值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/length)的任何 CSS 属性，并进行从 `px` 到 `rem` 的适当转换。我们还建议让长文本换行到下一行，而不是截断，以保持大文本的可读性。

### 自定义字体族

我们建议使用 Ionic 中的默认字体，因为它们设计为在任何大小下都看起来不错，并确保与其他移动应用的一致性。但是，开发者可以通过 CSS 对动态字体缩放使用自定义字体族：

```css
html {
  --ion-dynamic-font: var(--ion-default-dynamic-font);
  --ion-font-family: 'Comic Sans MS';
}
```

### `em` 单位与 `rem` 单位

开发者有两种相对字体大小的选择：[`em` 和 `rem`](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units#ems_and_rems)。

`em` 单位设置元素的字体大小相对于其父元素的字体大小。

在以下示例中，`.child` 的计算字体大小为 `40px`，因为它是 `.parent` 的子元素（`2em * 20px = 40px`）。

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2em;
}
```

但是，`em` 单位具有复合效应，可能会导致问题。在以下示例中，第二个 `.child` 元素的计算字体大小为 `80px`，因为字体大小会复合累加。

```html
<div class="parent">
  父元素，字体 20px
  <div class="child">
    子元素，字体 40px
    <div class="child">子元素，字体 80px</div>
  </div>
</div>
```

<div style={{ fontSize: '20px' }}>
  父元素，字体 20px
  <div style={{ fontSize: '2em' }}>
    子元素，字体 40px
    <div style={{ fontSize: '2em' }}>子元素，字体 80px</div>
  </div>
</div>

由于这种复合效应，我们强烈建议在使用动态字体缩放时使用 `rem` 单位而不是 `em` 单位。`rem` 单位设置元素的字体大小相对于根元素（通常是 `<html>`）的字体大小。根元素的默认字体大小通常为 `16px`。

在以下示例中，`.child` 的计算字体大小为 `32px`，因为字体大小是相对于 `html` 而不是 `.parent` 计算的。

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2rem;
}
```

## 动态字体缩放在 Ionic 中的工作方式

定义字体大小并参与动态字体缩放的 Ionic 组件通常使用 [rem 单位](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)。这使得每个组件中的文本大小相对于根元素（通常是 `html` 元素）的字体大小进行调整。这意味着随着根元素字体大小的变化，所有 Ionic 组件中的文本都以一致的方式缩放。这样就无需手动覆盖每个组件的字体大小。这些组件内部的某些元素（如图标）使用 `em` 单位，以便这些元素相对于文本进行大小调整，而文本本身则使用 `rem` 单位进行大小调整。

### iOS

Ionic 中的动态字体缩放构建在称为 [Dynamic Type](https://developer.apple.com/documentation/uikit/uifont/scaling_fonts_automatically#overview) 的 iOS 功能之上。为此，Ionic 将根元素的 [font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 设置为 Apple 定义的文本样式。为了一致性，Ionic 使用 [body](https://developer.apple.com/documentation/uikit/uifont/textstyle/1616682-body) 文本样式。

使用 Apple 定义的文本样式可以启用 Dynamic Type，允许 Ionic 组件中的所有文本根据系统级偏好进行缩放。请注意，这些 Apple 定义的字体仅适用于 Apple 设备。因此，即使您的应用使用 `ios` 模式，这些字体也无法在 Android 设备上工作。

当应用处于 `ios` 模式时，Ionic 遵循 [Apple 的《人机界面指南》排版规范](https://developer.apple.com/design/human-interface-guidelines/typography)。因此，当文本大小发生变化时，重要内容会优先显示。这意味着以下几点：

1. `ion-header` 或 `ion-footer` 中的内容将具有最大字体大小，以优先显示 `ion-content` 中的内容，后者被认为比 `ion-header` 和 `ion-footer` 中的内容更重要。
2. 像 `ion-badge` 和 `ion-back-button` 这样的组件将具有最小字体大小，以保持可读性。
3. 根据 Apple 的《人机界面指南》，`ion-tab-bar` 和 `ion-picker` 等组件中的文本不参与动态字体缩放。

### Android Web View

Android Web View 的字体缩放机制在 Web 内容中始终启用，并将自动缩放使用 `px` 单位定义的字体大小。这意味着即使最终字体大小与指定的最大或最小字体大小不一致，使用 `px` 指定的任何最大或最小字体大小仍然会被缩放。

在以下示例中，我们使用 [min()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min) 函数表示 `.foo` 的字体大小不应大于 `14px`。

```css
.foo {
  font-size: min(1rem, 14px);
}
```

如果根元素的默认字体大小为 `16px`，系统级字体缩放为 `1.5`（即文本大小应增加 50%），那么 `1rem` 将计算为 `24px`，因为 `16 * 1.5 = 24`。

这大于我们定义的最大值 `14px`，因此有人可能会认为 `.foo` 的计算字体大小是 `14px`。但是，由于 Android Web View 会缩放使用 `px` 单位定义的任何字体大小，这意味着在 `min()` 函数中使用的 `14px` 也会被缩放 1.5 倍。

因此，这意味着最大计算字体大小实际上是 `21px`，因为 `14 * 1.5 = 21`，所以 `.foo` 的总体计算字体大小为 `21px`。

### Android 版 Chrome

Android 上的 Chrome Web 浏览器的行为与 Android Web View 不同。默认情况下，Android 版 Chrome 不遵循系统级字体缩放设置。但是，Chromium 团队正在开发一个新功能来实现这一点。启用后，此功能将更改 `html` 元素的 `zoom` 级别，这将导致布局和文本一起增大。

开发者可以通过在 `chrome://flags` 中启用实验性的"无障碍页面缩放"功能来测试此行为。

更多信息请参见 https://bugs.chromium.org/p/chromium/issues/detail?id=645717。

### 在不同平台上使用模式

每个平台的字体缩放行为略有不同，`ios` 和 `md` 模式的实现旨在利用各自平台上的缩放行为。

例如，`ios` 模式使用最大和最小字体大小来遵循 [Apple 的《人机界面指南》排版规范](https://developer.apple.com/design/human-interface-guidelines/typography)。`md` 模式没有实现相同的行为，因为 Material Design 没有相同的指南。这意味着在 iOS 设备上使用 `md` 模式可能会允许页眉和页脚中出现非常大的字体大小。

因此，我们强烈建议在使用动态字体缩放时，在 iOS 设备上使用 `ios` 模式，在 Android 设备上使用 `md` 模式。

## 在设备上更改字体大小

字体缩放偏好由用户在每台设备上单独配置。这允许用户为所有支持此行为的应用程序缩放字体。本指南展示了如何为每个平台启用字体缩放。

### iOS

iOS 上的字体缩放可以在"设置"应用中配置。

更多信息请参见 [Apple 支持](https://support.apple.com/en-us/102453)。

### Android

用户访问字体缩放配置的位置因设备而异，但通常可以在"设置"应用的"无障碍"页面中找到。

:::info
Android 上的 Chrome Web 浏览器在遵循系统级字体缩放方面存在一些限制。更多信息请参见 [Android 版 Chrome](#android-版-chrome)。
:::

## 故障排除

### 动态字体缩放不起作用

动态字体缩放可能对应用没有影响的原因有多种。以下列表虽然不全面，但提供了一些可检查的事项，以调试动态字体缩放为何不起作用。

1. 验证您的 Ionic 版本是否支持动态字体缩放。动态字体缩放从 Ionic v7.5 开始添加。
2. 在 Ionic 7 中，动态字体缩放在 iOS 上是可选加入的。验证是否已设置正确的 CSS。更多信息请参见[在 Ionic 中启用动态字体缩放](#在-ionic-中启用动态字体缩放)。
3. 验证您的代码是否没有覆盖根元素的默认字体大小。手动设置根元素的字体大小将阻止动态字体缩放按预期工作。
4. 验证您的代码是否没有覆盖 Ionic 组件上的字体大小。设置 `font-size` 规则的 Ionic 组件将使用 `rem` 单位。但是，如果您的应用将其覆盖为使用 `px`，则需要将该自定义规则转换为使用 `rem`。更多信息请参见[集成自定义组件](#集成自定义组件)。
5. 如果使用 Android 版 Chrome，请验证是否已启用"无障碍页面缩放"。更多信息请参见 [Android 版 Chrome](#android-版-chrome)。

### Android 上不尊重最大和最小字体大小

Android Web View 会根据系统级字体缩放偏好缩放使用 `px` 单位定义的任何字体大小。这意味着实际字体大小可能大于或小于 [min()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min)、[max()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/max) 或 [clamp()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clamp) 中定义的字体大小。

更多信息请参见[字体缩放在 Android 上的工作方式](#android-web-view)。

### 即使在禁用动态字体缩放时字体也变大/变小

即使动态字体缩放被禁用，Ionic 组件也使用 [rem 单位](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)定义字体大小。这使得每个组件中的文本大小相对于根元素（通常是 `html` 元素）的字体大小进行调整。因此，如果 `html` 的字体大小发生变化，所有 Ionic 组件的计算字体大小也会发生变化。

### 缩放的 Ionic iOS 组件字体大小与原生 iOS 版本不完全匹配

某些原生 iOS 组件（如 Action Sheet）使用了 Ionic 无法访问的私有字体缩放。虽然我们尽量保持与原生行为尽可能接近，但某些组件中的文本可能比其原生对应版本稍大或稍小。

### 在 iOS 上启用动态字体缩放后，我的 Ionic 应用中的文本大小发生了变化

根元素的默认字体大小通常为 `16px`。但是，iOS 设备上的动态字体缩放使用了默认字体大小为 `17px` 的"正文"文本样式。由于 Ionic 组件中的文本是相对于根元素字体大小缩放的，因此启用动态字体缩放后，某些文本可能会变大或变小，即使系统级文本缩放没有变化。

:::info
iOS 提供了一种默认字体大小为 `16px` 的"标注"文本样式。但是，此字体样式目前未暴露给 Web 内容。更多信息请参见 [WebKit 中支持的文本样式](https://webkit.org/blog/3709/using-the-system-font-in-web-content/)。
:::
