# 动态字体缩放

动态字体缩放是一项允许用户选择屏幕上显示的文本大小的功能。这有助于需要更大文本以获得更好可读性的用户，同时也适应能够阅读较小文本的用户。

## 尝试一下

:::tip
请务必在 Android、iOS 或 iPadOS 设备上尝试此功能。

如果您在 Chrome for Android 上进行测试，请确保已启用"无障碍页面缩放"功能。
:::

按照[在设备上更改字体大小](#在设备上更改字体大小)指南设置您偏好的字体大小，然后观察下方演示中的文本根据您的偏好放大或缩小。

import DynamicFontScaling from '@site/static/usage/v8/layout/dynamic-font-scaling/index.md';

<DynamicFontScaling />

## 使用动态字体缩放

### 在应用中启用

只要导入了 [typography.css](/layout/global-stylesheets#typographycss) 文件，动态字体缩放默认就是启用的。导入此文件将定义 `--ion-dynamic-font` 变量，从而激活动态字体缩放。虽然不推荐，但开发者可以通过在其应用代码中将此变量设置为 `initial` 来选择退出动态字体缩放。

### 集成自定义组件

开发者可以通过将所有使用 `px` 单位的 `font-size` 声明转换为使用 [rem 单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)，来配置其自定义组件以利用动态字体缩放。从 `px` 转换为 `rem` 的一种简单方法是将像素字体大小除以默认浏览器字体大小（通常为 `16px`）。例如，如果组件的字体大小为 `14px`，则可以通过 `14px / 16px = 0.875rem` 转换为 `rem`。另请注意，任何已覆盖字体大小的 Ionic 组件也应更新为使用 `rem` 单位。

需要记住的一点是，组件的尺寸可能需要更改以适应更大的字体大小。例如，`width` 和 `height` 属性可能需要分别更改为 `min-width` 和 `min-height`。开发者应审查其应用中使用[长度值](https://developer.mozilla.org/en-US/docs/Web/CSS/length)的 CSS 属性，并进行从 `px` 到 `rem` 的适当转换。我们还建议让长文本换行到下一行，而不是截断，以保持大文本的可读性。

### 自定义字体族

我们建议使用 Ionic 中的默认字体，因为它们设计为在任何尺寸下都看起来很好，并能确保与其他移动应用的一致性。然而，开发者可以通过 CSS 将自定义字体族与动态字体缩放一起使用：

```css
html {
  --ion-dynamic-font: var(--ion-default-dynamic-font);
  --ion-font-family: 'Comic Sans MS';
}
```

### `em` 单位与 `rem` 单位

开发者有两种相对字体大小的选择：[`em` 和 `rem`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#ems_and_rems)。

`em` 单位设置元素字体大小相对于其父元素字体大小的比例。

在以下示例中，`.child` 的计算字体大小为 `40px`，因为它是 `.parent` 的子元素（`2em * 20px = 40px`）。

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2em;
}
```

然而，`em` 单位存在复合效应，可能会导致问题。在以下示例中，第二个 `.child` 元素的计算字体大小为 `80px`，因为字体大小会复合累加。

```html
<div class="parent">
  父元素，20px
  <div class="child">
    子元素，40px
    <div class="child">子元素，80px</div>
  </div>
</div>

<div style={{ fontSize: '20px' }}>
  父元素，20px
  <div style={{ fontSize: '2em' }}>
    子元素，40px
    <div style={{ fontSize: '2em' }}>子元素，80px</div>
  </div>
</div>
```

由于这种复合效应，我们强烈建议在使用动态字体缩放时使用 `rem` 单位而不是 `em` 单位。`rem` 单位设置元素字体大小相对于根元素（通常是 `<html>`）字体大小的比例。根元素的默认字体大小通常为 `16px`。

在以下示例中，`.child` 的计算字体大小为 `32px`，因为字体大小是相对于 `html` 而非 `.parent` 计算的。

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2rem;
}
```

## 动态字体缩放在 Ionic 中的工作原理

定义字体大小并参与动态字体缩放的 Ionic 组件通常使用 [rem 单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)。这使得每个组件中的文本相对于根元素（通常是 `html` 元素）的字体大小进行缩放。这意味着随着根元素字体大小的变化，所有 Ionic 组件中的文本会以一致的方式缩放。这样就无需手动覆盖每个组件的字体大小。这些组件中的某些元素（如图标）使用 `em` 单位，以便这些元素相对于文本进行缩放，但文本本身使用 `rem` 单位进行缩放。

### iOS

Ionic 中的动态字体缩放建立在 iOS 一项名为 [Dynamic Type](https://developer.apple.com/documentation/uikit/uifont/scaling_fonts_automatically#overview) 的功能之上。为此，Ionic 将根元素的[字体](https://developer.mozilla.org/en-US/docs/Web/CSS/font)设置为 Apple 定义的文本样式。为保持一致，Ionic 使用 [body](https://developer.apple.com/documentation/uikit/uifont/textstyle/1616682-body) 文本样式。

使用 Apple 定义的文本样式可启用 Dynamic Type，使 Ionic 组件中的所有文本根据系统级偏好进行缩放。请注意，这些 Apple 定义的字体仅在 Apple 设备上有效。因此，即使您的应用使用 `ios` 模式，这些字体在 Android 设备上也无法工作。

当应用处于 `ios` 模式时，Ionic 遵循 [Apple 的《人机界面指南》排版规范](https://developer.apple.com/design/human-interface-guidelines/typography)。因此，当文本大小发生变化时，重要内容会得到优先处理。这意味着以下几点：

1. `ion-header` 或 `ion-footer` 中的内容将有最大字体大小，以优先处理被认为更重要的 `ion-content` 中的内容。
2. 诸如 `ion-badge` 和 `ion-back-button` 等组件将有最小字体大小，以保持可读性。
3. 诸如 `ion-tab-bar` 和 `ion-picker` 等组件中的文本根据 Apple 的《人机界面指南》不参与动态字体缩放。

### Android Web View

Android Web View 的字体缩放机制始终在 Web 内容中启用，并会自动缩放使用 `px` 单位定义的字体大小。这意味着即使最终字体大小与指定的最大或最小字体大小不一致，任何使用 `px` 指定的最大或最小字体大小仍会被缩放。

在以下示例中，我们使用 [min()](https://developer.mozilla.org/en-US/docs/Web/CSS/min) 函数来指示 `.foo` 的字体大小不应超过 `14px`。

```css
.foo {
  font-size: min(1rem, 14px);
}
```

如果根元素的默认字体大小为 `16px`，而系统级字体缩放比例为 `1.5`（即文本大小应增加 50%），那么 `1rem` 将计算为 `24px`，因为 `16 * 1.5 = 24`。

这大于我们定义的最大值 `14px`，因此有人可能认为 `.foo` 的计算字体大小为 `14px`。然而，由于 Android Web View 会缩放任何使用 `px` 单位定义的字体大小，这意味着 `min()` 函数中使用的 `14px` 也会被缩放 1.5 倍。

因此，实际的最大计算字体大小为 `21px`，因为 `14 * 1.5 = 21`，所以 `.foo` 的整体计算字体大小为 `21px`。

### Chrome for Android

Android 上的 Chrome Web 浏览器的行为与 Android Web View 不同。默认情况下，Chrome for Android 不遵循系统级字体缩放设置。然而，Chromium 团队正在开发一项新功能来实现这一点。启用后，此功能将更改 `html` 元素的 `zoom` 级别，这将导致布局以及文本的大小都增加。

开发者可以通过在 `chrome://flags` 中启用实验性的"无障碍页面缩放"功能来测试此行为。

更多信息请参阅 https://bugs.chromium.org/p/chromium/issues/detail?id=645717。

### 在不同平台上使用模式

每个平台的字体缩放行为略有不同，`ios` 和 `md` 模式已被实现为利用各自平台上的缩放行为。

例如，`ios` 模式使用最大和最小字体大小来遵循 [Apple 的《人机界面指南》排版规范](https://developer.apple.com/design/human-interface-guidelines/typography)。`md` 模式没有实现相同的行为，因为 Material Design 没有相同的指导规范。这意味着在 iOS 设备上使用 `md` 模式可能会导致页眉和页脚中出现非常大的字体大小。

因此，我们强烈建议在使用动态字体缩放时，在 iOS 设备上使用 `ios` 模式，在 Android 设备上使用 `md` 模式。

## 在设备上更改字体大小

用户按设备配置字体缩放偏好。这允许用户为所有支持此行为的应用缩放字体。本指南介绍如何为每个平台启用字体缩放。

### iOS

iOS 上的字体缩放可以在"设置"应用中配置。

更多信息请参阅 [Apple 支持](https://support.apple.com/en-us/102453)。

### Android

用户访问字体缩放配置的位置因设备而异，但通常可以在"设置"应用的"无障碍"页面中找到。

:::info
Android 上的 Chrome Web 浏览器在遵循系统级字体缩放方面存在一些限制。更多信息请参阅 [Chrome for Android](#chrome-for-android)。
:::

## 故障排除

### 动态字体缩放不起作用

动态字体缩放可能对应用没有效果的原因有很多。以下列表虽然并非详尽无遗，但提供了一些检查事项，以调试为何动态字体缩放不起作用。

1. 确认您的 Ionic 版本支持动态字体缩放。动态字体缩放是从 Ionic v7.5 开始添加的。
2. 确认已导入 [typography.css](/layout/global-stylesheets#typographycss) 文件。此文件是动态字体缩放工作所必需的。
3. 确认您的代码没有覆盖根元素的默认字体大小。手动设置根元素的字体大小会阻止动态字体缩放按预期工作。
4. 确认您的代码没有覆盖 Ionic 组件上的字体大小。设置 `font-size` 规则的 Ionic 组件会使用 `rem` 单位。但是，如果您的应用覆盖了这些规则以使用 `px`，则需要将该自定义规则转换为使用 `rem`。更多信息请参阅[集成自定义组件](#集成自定义组件)。
5. 如果使用 Chrome for Android，请确认已启用"无障碍页面缩放"。更多信息请参阅 [Chrome for Android](#chrome-for-android)。

### Android 上最大和最小字体大小未被遵守

Android Web View 会按系统级字体缩放偏好缩放使用 `px` 单位定义的任何字体大小。这意味着实际字体大小可能大于或小于在 [min()](https://developer.mozilla.org/en-US/docs/Web/CSS/min)、[max()](https://developer.mozilla.org/en-US/docs/Web/CSS/max) 或 [clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) 中定义的字体大小。

更多信息请参阅[字体缩放在 Android 上的工作方式](#android)。

### 即使禁用了动态字体缩放，字体大小仍然偏大/偏小

即使禁用了动态字体缩放，Ionic 组件也使用 [rem 单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)定义字体大小。这使得每个组件中的文本相对于根元素（通常是 `html` 元素）的字体大小进行缩放。因此，如果 `html` 的字体大小发生变化，所有 Ionic 组件的计算字体大小也会随之变化。

### 缩放后的 Ionic iOS 组件字体大小与原生 iOS 等效组件不完全匹配

某些原生 iOS 组件（如 Action Sheet）使用了 Ionic 无法访问的私有字体缩放。虽然我们尽量保持与原生行为尽可能接近，但某些组件中的文本可能比其原生对应组件略微偏大或偏小。

### 启用动态字体缩放后，我的 Ionic 应用在 iOS 上的文本大小发生了变化

根元素的默认字体大小通常为 `16px`。然而，iOS 设备上的动态字体缩放使用了"正文"文本样式，其默认字体大小为 `17px`。由于 Ionic 组件中的文本是相对于根元素的字体大小进行缩放的，某些文本在启用动态字体缩放后可能会变大或变小，即使系统级文本缩放没有变化。

:::info
iOS 提供了"标注"文本样式，其默认字体大小为 `16px`。然而，此字体样式目前未向 Web 内容公开。更多信息请参阅 [WebKit 中支持的文本样式](https://webkit.org/blog/3709/using-the-system-font-in-web-content/)。
:::
