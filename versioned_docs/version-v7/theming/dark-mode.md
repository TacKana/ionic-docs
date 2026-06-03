---
title: 深色模式
initialTab: 'preview'
inlineHtmlPreviews: true
---

<head>
  <title>深色模式——更改配色方案和 CSS 属性</title>
  <meta
    name="description"
    content="开发者正在原生应用中添加深色模式 CSS 以支持用户偏好。阅读以了解有关 Ionic 应用深色配色方案的更多信息。"
  />
</head>

Ionic 可以轻松更改应用的主题，包括支持深色配色方案。深色模式是一种显示设置，可将应用的所有视图更改为深色主题。它在 iOS 和 Android 上获得系统级支持，使其成为开发者非常希望添加到其应用中的功能。

## 使用媒体查询

启用深色模式的现代方法是使用 [用户首选配色方案的 CSS 媒体查询](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme)。此媒体查询将挂钩用户设备的系统设置，并在启用深色模式时应用主题。Ionic Framework 启动模板使用此方法包含深色主题。

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* 深色模式变量写在这里 */
  }
}
```

`prefers-color-scheme` 媒体查询受[所有现代浏览器](https://caniuse.com/#feat=prefers-color-scheme)支持。在某些浏览器中，用户无法通过此媒体查询受益于深色主题的应用，但如果需要支持旧版浏览器，仍可以通过使用 [CSS 类回退](#css-类回退) 来应用深色主题。

## CSS 类回退

作为不支持媒体查询的设备的回退方法，可以通过样式化 CSS 选择器并将类应用于文档 body 来应用深色模式。

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* 深色模式变量写在这里 */
  }
}

/* 用于旧版浏览器或手动模式的后备 */
body.dark {
  /* 深色模式变量写在这里 */
}
```

通过将变量定位到 `body.dark` 选择器，现在只需要在应用的 `<body>` 中添加该类即可。这可以根据应用使用的框架以多种方式完成。

请注意，在此示例中，变量应同时存在于两个位置。我们可以[使用 JavaScript](#与-javascript-结合) 来避免在两个位置设置变量。

## 与 JavaScript 结合

为了保持 CSS 变量只编写一次并避免在多个地方更新它们，可以在 `prefers-color-scheme` 媒体查询的值为 `dark` 时添加 `dark` 类。CSS 如下所示：

```css
body.dark {
  /* 深色模式变量写在这里 */
}
```

请注意，上面的变量现在仅在 `body.dark` 选择器中，并且 `prefers-color-scheme` 媒体查询已被移除。

### 自动启用深色模式

可以通过使用 [matchMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia) 检查文档是否匹配媒体查询，将 `dark` 类添加到 `<body>`。这将使深色模式仍然基于用户的偏好工作。

:::note
下面的演示优先考虑网站主题而非系统设置。如果演示加载时您的系统设置与网站主题不同，它将匹配网站主题。尝试在您的设备上更改系统偏好设置，在浅色和深色模式之间切换以查看变化。
:::

:::info
不知道如何更改系统设置？以下是[如何在 Windows 11 上启用深色模式](https://support.microsoft.com/zh-cn/windows/windows-中的颜色管理-d26ef4d6-819a-581c-1581-493cfcc005fe)和[如何在 Mac 上启用深色模式](https://support.apple.com/zh-cn/HT208976)。
:::

import AutomaticDarkMode from '@site/static/usage/v7/theming/automatic-dark-mode/index.md';

<AutomaticDarkMode />

### 手动切换深色模式

除了在媒体查询更改时将 `dark` 类添加到 `<body>` 之外，还可以由应用添加该类，例如当用户切换开关时，在浅色和深色主题之间切换：

import ManualDarkMode from '@site/static/usage/v7/theming/manual-dark-mode/index.md';

<ManualDarkMode />

## 调整系统 UI 组件

在开发深色主题时，您可能会注意到某些系统 UI 组件没有正确调整为深色模式。要解决此问题，您需要指定 `color-scheme`。请参阅 <a href="https://caniuse.com/#feat=mdn-html_elements_meta_name_color-scheme" target="_blank">color-scheme 的浏览器兼容性</a> 以了解跨浏览器支持的详细信息。

虽然您可能主要使用 Ionic 组件而不是仅原生组件，但 `color-scheme` 也会影响应用的某些方面，例如滚动条。要使用 `color-scheme`，您需要在应用的 `head` 中添加以下 HTML：

```html
<meta name="color-scheme" content="light dark" />
```

这允许页面指示它适合以哪种配色方案渲染。或者，您可以添加以下 CSS 以在每个元素的基础上执行此操作：

```css
color-scheme: light dark;
```

| 默认滚动条                                                                                                                               | 使用 `color-scheme` 的滚动条                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![应用界面中默认的浅色主题滚动条。](/img/theming/color-scheme-light.png '没有深色模式的默认滚动条外观')                                   | ![应用界面中的深色主题滚动条，展示了 'color-scheme' 属性的效果。](/img/theming/color-scheme-dark.png "应用了深色模式 'color-scheme' 的滚动条外观")                                          |

有关 `color-scheme` 的更多信息，请参阅 [Web.dev 配色方案指南](https://web.dev/color-scheme/)。

:::note
`color-scheme` 不适用于键盘。有关深色模式如何与键盘配合使用的详细信息，请参阅 [Keyboard 文档](../developing/keyboard.md#深色模式)。
:::

:::note
希望自定义 iOS 15 上 Safari 状态栏下或 macOS 上 Safari 工具栏中的主题颜色的开发者，请参阅 [`theme-color` Meta](./advanced.md#theme-color-meta)。
:::

## Ionic 深色主题

Ionic 有一个推荐的变量主题，用于根据运行应用的设备获得深色模式。它可以分解为以下几个部分：

1. 更改 `body.dark` 选择器中所有[模式](platform-styles.md#ionic-模式)的默认 [Ionic 颜色](colors.md)，以配合深色背景。
2. 为 `ios` 设备设置深色主题的变量。
3. 为 `md` 设备设置深色主题的变量。

以下代码可以复制粘贴到应用的全局 CSS 文件中，以获得 Ionic 的深色主题。我们[使用 CSS 媒体查询](#使用媒体查询)来启用深色模式。如果需要支持旧版浏览器，请使用[与 JavaScript 结合](#与-javascript-结合)部分中描述的方法。

:::info
有关正在更改的变量的更多信息，包括可以添加以进一步自定义的其他变量，请参阅 [Themes](themes.md)。
:::

```css
@media (prefers-color-scheme: dark) {
  /*
   * 深色颜色
   * -------------------------------------------
   */

  body {
    --ion-color-primary: #428cff;
    --ion-color-primary-rgb: 66, 140, 255;
    --ion-color-primary-contrast: #ffffff;
    --ion-color-primary-contrast-rgb: 255, 255, 255;
    --ion-color-primary-shade: #3a7be0;
    --ion-color-primary-tint: #5598ff;

    --ion-color-secondary: #50c8ff;
    --ion-color-secondary-rgb: 80, 200, 255;
    --ion-color-secondary-contrast: #ffffff;
    --ion-color-secondary-contrast-rgb: 255, 255, 255;
    --ion-color-secondary-shade: #46b0e0;
    --ion-color-secondary-tint: #62ceff;

    --ion-color-tertiary: #6a64ff;
    --ion-color-tertiary-rgb: 106, 100, 255;
    --ion-color-tertiary-contrast: #ffffff;
    --ion-color-tertiary-contrast-rgb: 255, 255, 255;
    --ion-color-tertiary-shade: #5d58e0;
    --ion-color-tertiary-tint: #7974ff;

    --ion-color-success: #2fdf75;
    --ion-color-success-rgb: 47, 223, 117;
    --ion-color-success-contrast: #000000;
    --ion-color-success-contrast-rgb: 0, 0, 0;
    --ion-color-success-shade: #29c467;
    --ion-color-success-tint: #44e283;

    --ion-color-warning: #ffd534;
    --ion-color-warning-rgb: 255, 213, 52;
    --ion-color-warning-contrast: #000000;
    --ion-color-warning-contrast-rgb: 0, 0, 0;
    --ion-color-warning-shade: #e0bb2e;
    --ion-color-warning-tint: #ffd948;

    --ion-color-danger: #ff4961;
    --ion-color-danger-rgb: 255, 73, 97;
    --ion-color-danger-contrast: #ffffff;
    --ion-color-danger-contrast-rgb: 255, 255, 255;
    --ion-color-danger-shade: #e04055;
    --ion-color-danger-tint: #ff5b71;

    --ion-color-dark: #f4f5f8;
    --ion-color-dark-rgb: 244, 245, 248;
    --ion-color-dark-contrast: #000000;
    --ion-color-dark-contrast-rgb: 0, 0, 0;
    --ion-color-dark-shade: #d7d8da;
    --ion-color-dark-tint: #f5f6f9;

    --ion-color-medium: #989aa2;
    --ion-color-medium-rgb: 152, 154, 162;
    --ion-color-medium-contrast: #000000;
    --ion-color-medium-contrast-rgb: 0, 0, 0;
    --ion-color-medium-shade: #86888f;
    --ion-color-medium-tint: #a2a4ab;

    --ion-color-light: #222428;
    --ion-color-light-rgb: 34, 36, 40;
    --ion-color-light-contrast: #ffffff;
    --ion-color-light-contrast-rgb: 255, 255, 255;
    --ion-color-light-shade: #1e2023;
    --ion-color-light-tint: #383a3e;
  }

  /*
   * iOS 深色主题
   * -------------------------------------------
   */

  .ios body {
    --ion-background-color: #000000;
    --ion-background-color-rgb: 0, 0, 0;

    --ion-text-color: #ffffff;
    --ion-text-color-rgb: 255, 255, 255;

    --ion-color-step-50: #0d0d0d;
    --ion-color-step-100: #1a1a1a;
    --ion-color-step-150: #262626;
    --ion-color-step-200: #333333;
    --ion-color-step-250: #404040;
    --ion-color-step-300: #4d4d4d;
    --ion-color-step-350: #595959;
    --ion-color-step-400: #666666;
    --ion-color-step-450: #737373;
    --ion-color-step-500: #808080;
    --ion-color-step-550: #8c8c8c;
    --ion-color-step-600: #999999;
    --ion-color-step-650: #a6a6a6;
    --ion-color-step-700: #b3b3b3;
    --ion-color-step-750: #bfbfbf;
    --ion-color-step-800: #cccccc;
    --ion-color-step-850: #d9d9d9;
    --ion-color-step-900: #e6e6e6;
    --ion-color-step-950: #f2f2f2;

    --ion-item-background: #000000;

    --ion-card-background: #1c1c1d;
  }

  .ios ion-modal {
    --ion-background-color: var(--ion-color-step-100);
    --ion-toolbar-background: var(--ion-color-step-150);
    --ion-toolbar-border-color: var(--ion-color-step-250);
  }

  /*
   * Material Design 深色主题
   * -------------------------------------------
   */

  .md body {
    --ion-background-color: #121212;
    --ion-background-color-rgb: 18, 18, 18;

    --ion-text-color: #ffffff;
    --ion-text-color-rgb: 255, 255, 255;

    --ion-border-color: #222222;

    --ion-color-step-50: #1e1e1e;
    --ion-color-step-100: #2a2a2a;
    --ion-color-step-150: #363636;
    --ion-color-step-200: #414141;
    --ion-color-step-250: #4d4d4d;
    --ion-color-step-300: #595959;
    --ion-color-step-350: #656565;
    --ion-color-step-400: #717171;
    --ion-color-step-450: #7d7d7d;
    --ion-color-step-500: #898989;
    --ion-color-step-550: #949494;
    --ion-color-step-600: #a0a0a0;
    --ion-color-step-650: #acacac;
    --ion-color-step-700: #b8b8b8;
    --ion-color-step-750: #c4c4c4;
    --ion-color-step-800: #d0d0d0;
    --ion-color-step-850: #dbdbdb;
    --ion-color-step-900: #e7e7e7;
    --ion-color-step-950: #f3f3f3;

    --ion-item-background: #1e1e1e;

    --ion-toolbar-background: #1f1f1f;

    --ion-tab-bar-background: #1f1f1f;

    --ion-card-background: #1e1e1e;
  }
}
```
