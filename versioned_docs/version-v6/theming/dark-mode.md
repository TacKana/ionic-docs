---
title: Dark Mode
---

import Codepen from '@components/global/Codepen';

<head>
  <title>深色模式：切换配色方案与CSS属性</title>
  <meta
    name="description"
    content="开发者正在原生应用中添加深色模式CSS以支持用户偏好。阅读本文了解有关Ionic应用深色配色方案的更多信息。"
  />
</head>

Ionic 让更改应用主题变得简单，包括支持深色配色方案。随着原生应用对深色模式的支持日益增长，开发者现在也希望将其添加到自己的应用中，以适应用户偏好。

## 使用媒体查询

启用深色模式的第一种方式是使用 [CSS媒体查询来检测用户偏好的配色方案](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)。此媒体查询将根据用户设备的系统设置，在启用深色模式时应用相应主题。

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* 深色模式变量放在这里 */
  }
}
```

目前，`prefers-color-scheme` 媒体查询的 [浏览器支持有限](https://caniuse.com/#feat=prefers-color-scheme)，因此某些浏览器的用户无法通过此媒体查询享受到深色模式。不过，仍可通过 [CSS类回退方案](#css-class-fallback) 来应用深色模式。

## CSS类回退方案

对于不支持媒体查询的设备，作为一种回退方法，可以通过设置CSS选择器样式，并将类应用到文档的 `body` 元素上来实现深色模式。

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

由于变量是针对 `body.dark` 选择器设置的，现在只需在应用的 `<body>` 元素上添加相应的类即可。具体实现方式取决于应用所使用的框架。

请注意，在此示例中，变量应同时出现在两个位置。我们可以 [结合使用JavaScript](#combining-with-javascript) 来避免在多个位置重复设置变量。

## 结合JavaScript使用

为了保持CSS变量只编写一次，并避免在多个位置更新它们，可以将回退方案和类结合起来，通过JavaScript检查 `prefers-color-scheme` 媒体查询的值，并在偏好为深色时添加 `dark` 类。以下是CSS的写法：

```css
body.dark {
  /* 深色模式变量放在这里 */
}
```

注意，上面的变量现在只存在于 `body.dark` 选择器中，并且已经移除了 `prefers-color-scheme` 媒体查询。

### 自动启用深色模式

在JavaScript中，可以通过使用 [matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) 检查文档是否匹配媒体查询，将 `dark` 类添加到 `<body>` 元素上。这样，深色模式仍可根据用户偏好自动启用。

```javascript
// 使用 matchMedia 检查用户偏好
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

toggleDarkTheme(prefersDark.matches);

// 监听 prefers-color-scheme 媒体查询的变化
prefersDark.addEventListener('change', (mediaQuery) => toggleDarkTheme(mediaQuery.matches));

// 根据媒体查询是否匹配来添加或移除 "dark" 类
function toggleDarkTheme(shouldAdd) {
  document.body.classList.toggle('dark', shouldAdd);
}
```

:::note
提示：请确保在 [支持的浏览器](https://caniuse.com/#feat=prefers-color-scheme) 中查看下方的CodePen示例，然后尝试在设备上切换系统偏好设置（浅色与深色模式）。以下是如何在 [Windows 10上启用深色模式](https://blogs.windows.com/windowsexperience/2016/08/08/windows-10-tip-personalize-your-pc-by-enabling-the-dark-theme/) 以及 [如何在Mac上启用](https://support.apple.com/en-us/HT208976) 的指南。
:::

<!-- Codepen https://codepen.io/ionic/pen/jONzJpG -->

<Codepen preview="false" user="ionic" slug="jONzJpG" height="550px" default-tab="js,result" />

### 手动切换深色模式

除了在应用加载时和媒体查询变化时调用 `toggleDarkTheme()` 函数外，还可以通过应用（例如当用户切换开关时）调用 `toggleDarkTheme()` 函数来在浅色和深色主题之间切换：

```javascript
// 查询用于切换主题的开关
const toggle = document.querySelector('#themeToggle');

// 监听开关的选中/取消选中状态，以在 <body> 上切换 dark 类
toggle.addEventListener('ionChange', (ev) => {
  document.body.classList.toggle('dark', ev.detail.checked);
});

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// 监听 prefers-color-scheme 媒体查询的变化
prefersDark.addEventListener('change', (e) => checkToggle(e.matches));

// 在应用加载时调用
function loadApp() {
  checkToggle(prefersDark.matches);
}

// 由媒体查询调用，以选中或取消选中开关
function checkToggle(shouldCheck) {
  toggle.checked = shouldCheck;
}
```

<!-- Codepen https://codepen.io/ionic/pen/zYOpQLj -->

<Codepen preview="false" user="ionic" slug="zYOpQLj" height="600px" default-tab="js,result" />

## 调整系统UI组件

在开发深色主题时，你可能会注意到某些系统UI组件没有正确适应深色模式。为了解决这个问题，你需要指定 `color-scheme`。有关跨浏览器支持的详细信息，请参阅 <a href="https://caniuse.com/#feat=mdn-html_elements_meta_name_color-scheme" target="_blank">color-scheme的浏览器兼容性</a>。

虽然你可能主要使用Ionic组件而非原生组件，但 `color-scheme` 也会影响应用的某些方面，例如滚动条。要使用 `color-scheme`，你需要在应用的 `head` 部分添加以下HTML代码：

```html
<meta name="color-scheme" content="light dark" />
```

这允许页面指示它适合以哪种配色方案进行渲染。或者，你也可以在每个元素的基础上添加以下CSS来实现：

```css
color-scheme: light dark;
```

| 默认滚动条                                                                                                                                           | 使用 `color-scheme` 后的滚动条                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![应用界面中默认的浅色主题滚动条。](/img/theming/color-scheme-light.png '未应用深色模式的默认滚动条外观')                                            | ![应用界面中的深色主题滚动条，展示了'color-scheme'属性的效果。](/img/theming/color-scheme-dark.png "应用深色模式'color-scheme'后的滚动条外观")                                                                  |

有关 `color-scheme` 的更多信息，请参阅 https://web.dev/color-scheme/。

:::note
`color-scheme` 不适用于键盘。有关深色模式与键盘配合使用的详细信息，请参阅 [键盘文档](../developing/keyboard.md#dark-mode)。
:::

:::note
对于希望在 iOS 15 的 Safari 中自定义状态栏下的主题颜色或在 macOS 的 Safari 中自定义工具栏的开发者，请参阅 [`theme-color` 元标签](./advanced.md#theme-color-meta)。
:::

## Ionic深色主题

Ionic 提供了一个推荐的变量主题，以根据运行应用的设备实现深色模式。它可以分解为以下几个部分：

1. 在 `body.dark` 选择器中更改所有 [模式](platform-styles.md#ionic-modes) 的默认 [Ionic颜色](colors.md)，以适应深色背景。
2. 为 `ios` 设备设置深色主题的变量。
3. 为 `md` 设备设置深色主题的变量。

以下代码可以复制并粘贴到应用中，以获得 Ionic 的深色主题。我们使用JavaScript将 `dark` 类添加到文档的 `body` 元素上，如 [结合JavaScript使用](#combining-with-javascript) 部分所述。只有在将 `dark` 类添加到文档的 `body` 元素上之后，深色模式才会启用。

:::note
有关正在更改的变量的更多信息，包括可以添加的其他变量以进一步自定义，请参阅 [主题](themes.md)。
:::

```css
/*
 * 深色配色
 * -------------------------------------------
 */

body.dark {
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

.ios body.dark {
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

.ios body.dark ion-modal {
  --ion-background-color: var(--ion-color-step-100);
  --ion-toolbar-background: var(--ion-color-step-150);
  --ion-toolbar-border-color: var(--ion-color-step-250);
  --ion-item-background: var(--ion-color-step-150);
}

/*
 * Material Design深色主题
 * -------------------------------------------
 */

.md body.dark {
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
```