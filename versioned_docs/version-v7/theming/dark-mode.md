---
title: 深色模式
initialTab: 'preview'
inlineHtmlPreviews: true
---

<head>
  <title>深色模式：更改配色方案与CSS属性</title>
  <meta
    name="description"
    content="开发者正在为原生应用添加深色模式CSS以支持用户偏好。阅读本文了解如何为Ionic应用设置深色配色方案。"
  />
</head>

Ionic让您能够轻松更改应用的主题，包括支持深色配色方案。深色模式是一种显示设置，可将应用的所有视图切换为深色主题。它在iOS和Android系统上得到全面支持，因此开发者非常希望将其添加到应用中。

<LegacyAnchor id="using-media-queries" />

## 使用媒体查询

启用深色模式的现代方法是使用[针对用户偏好配色方案的CSS媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)。此媒体查询将关联到用户设备的系统设置，并在启用深色模式时应用主题。Ionic Framework入门项目使用此方法来包含深色主题。

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* 深色模式变量放在这里 */
  }
}
```

所有现代浏览器都支持`prefers-color-scheme`媒体查询。在某些浏览器中，用户可能无法通过此媒体查询享受到深色主题带来的好处，但若需要支持旧版浏览器，仍可通过[CSS类回退方案](#css-class-fallback)应用深色主题。

<LegacyAnchor id="css-class-fallback" />

## CSS类回退方案

对于不支持媒体查询的设备，可以通过为CSS选择器设置样式，并将类应用于文档body元素，作为回退方法应用深色模式。

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* 深色模式变量放在这里 */
  }
}

/* 针对旧版浏览器或手动模式的回退方案 */
body.dark {
  /* 深色模式变量放在这里 */
}
```

变量以`body.dark`选择器为目标后，现在只需将类添加到应用的`<body>`元素中。根据构建应用所用的框架，可以通过多种方式实现。

请注意，在此示例中，变量应同时出现在两个位置。我们可以[结合使用JavaScript](#combining-with-javascript)来避免在两个位置设置变量。

<LegacyAnchor id="combining-with-javascript" />

## 结合JavaScript使用

为了保持CSS变量只写一次，并避免在多个位置更新它们，可以在`prefers-color-scheme`媒体查询的值为`dark`时添加`dark`类。CSS将如下所示：

```css
body.dark {
  /* 深色模式变量放在这里 */
}
```

请注意，上面的变量现在只位于`body.dark`选择器中，并且已移除了`prefers-color-scheme`媒体查询。

### 自动启用深色模式

可以通过使用[matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)检查文档是否匹配媒体查询，将`dark`类添加到`<body>`中。这将允许深色模式根据用户偏好继续工作。

:::note
以下演示优先考虑网站主题而非系统设置。如果加载演示时您的系统设置与网站主题不同，它将匹配网站主题。尝试在设备上将系统偏好设置为浅色和深色模式之间切换以查看变化。
:::

:::info
不确定如何更改系统设置？以下是[如何在Windows 11上启用深色模式](https://support.microsoft.com/en-us/windows/change-colors-in-windows-d26ef4d6-819a-581c-1581-493cfcc005fe)和[如何在Mac上启用](https://support.apple.com/en-us/HT208976)的方法。
:::

import AutomaticDarkMode from '@site/static/usage/v7/theming/automatic-dark-mode/index.md';

<AutomaticDarkMode />

### 手动切换深色模式

除了在媒体查询更改时向`<body>`添加`dark`类外，应用也可以添加该类，例如当用户切换开关时，以在浅色和深色主题之间切换：

import ManualDarkMode from '@site/static/usage/v7/theming/manual-dark-mode/index.md';

<ManualDarkMode />

## 调整系统UI组件

开发深色主题时，您可能会注意到某些系统UI组件未正确适应深色模式。要解决此问题，您需要指定`color-scheme`。有关跨浏览器支持的详细信息，请参阅<a href="https://caniuse.com/#feat=mdn-html_elements_meta_name_color-scheme" target="_blank">color-scheme的浏览器兼容性</a>。

虽然您可能主要使用Ionic组件而非仅使用原生组件，但`color-scheme`也会影响应用的某些方面，例如滚动条。要使用`color-scheme`，您需要在应用的`head`中添加以下HTML：

```html
<meta name="color-scheme" content="light dark" />
```

这允许页面指示其适合以哪种配色方案渲染。或者，您可以添加以下CSS以在每个元素基础上实现：

```css
color-scheme: light dark;
```

| 默认滚动条                                                                                                                                 | 应用`color-scheme`后的滚动条                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![应用程序界面中默认的浅色主题滚动条。](/img/theming/color-scheme-light.png '未应用深色模式时的默认滚动条外观') | ![应用程序界面中的深色主题滚动条，展示了‘color-scheme’属性的效果。](/img/theming/color-scheme-dark.png "应用深色模式‘color-scheme’后的滚动条外观") |

有关`color-scheme`的更多信息，请参阅[Web.dev关于配色方案的指南](https://web.dev/color-scheme/)。

:::note
`color-scheme`不适用于键盘。有关深色模式如何与键盘配合使用的详细信息，请参阅[键盘文档](../developing/keyboard.md#dark-mode)。
:::

:::note
对于希望在iOS 15的Safari中自定义状态栏下的主题颜色或在macOS的Safari中自定义工具栏主题颜色的开发者，请参阅[`theme-color`元标签](./advanced.md#theme-color-meta)。
:::

## Ionic深色主题

Ionic有一个推荐的主题变量集，用于根据运行应用的设备获取深色模式。它可以分为以下几个部分：

1. 在`body.dark`选择器中更改所有[模式](platform-styles.md#ionic-modes)的默认[Ionic颜色](colors.md)，以适配深色背景。
2. 为`ios`设备设置深色主题的变量。
3. 为`md`设备设置深色主题的变量。

以下代码可以复制并粘贴到应用的全局CSS文件中，以获取Ionic的深色主题。我们[使用CSS媒体查询](#using-media-queries)来启用深色模式。如果需要支持旧版浏览器，请使用[结合JavaScript](#combining-with-javascript)部分中描述的方法。

:::info
有关正在更改的变量的更多信息，包括可以添加以进一步自定义的其他变量，请参阅[主题](themes.md)。
:::

```css
@media (prefers-color-scheme: dark) {
  /*
   * 深色配色
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
   * iOS深色主题
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
   * Material Design深色主题
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