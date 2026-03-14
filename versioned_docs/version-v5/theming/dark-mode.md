---
title: 深色模式
---

import Codepen from '@components/global/Codepen';

# 深色模式

Ionic 让您能够轻松地更改应用的主题，包括支持深色配色方案。随着原生应用对深色模式的支持日益增长，开发者现在希望将其添加到他们的应用中，以符合用户的偏好。

## 使用媒体查询

启用深色模式的第一种方法是使用 [用户偏好配色方案的 CSS 媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)。该媒体查询将连接到用户设备的系统设置，并在启用深色模式时应用主题。

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* 深色模式变量放在这里 */
  }
}
```

目前，`prefers-color-scheme` 媒体查询的[浏览器支持有限](https://caniuse.com/#feat=prefers-color-scheme)，因此在某些浏览器中，用户将无法通过此媒体查询享受到深色模式带来的好处。不过，仍可通过 [CSS 类回退方案](#css-类回退方案)来应用深色模式。

## CSS 类回退方案

作为不支持媒体查询的设备的回退方案，可以通过样式化 CSS 选择器并将类应用于文档 body 来应用深色模式。

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

通过将变量定位到 `body.dark` 选择器，现在只需将类添加到应用中的 `<body>` 即可。具体实现方式取决于构建应用所用的框架。

请注意，在此示例中，变量应同时出现在这两个位置。我们可以[使用 JavaScript](#结合使用-javascript) 来避免在两个地方设置变量。

## 结合使用 JavaScript

为了保持 CSS 变量只书写一次，并避免在多个位置更新它们，可以通过使用 JavaScript 来检查 `prefers-color-scheme` 媒体查询的值，并在偏好为 `dark` 时添加 `dark` 类，从而将回退方案与类结合使用。CSS 代码如下所示：

```css
body.dark {
  /* 深色模式变量放在这里 */
}
```

请注意，上面的变量现在仅位于 `body.dark` 选择器中，并且 `prefers-color-scheme` 媒体查询已被移除。

### 自动启用深色模式

在 JavaScript 中，可以通过使用 [matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) 检查文档是否匹配媒体查询，将 `dark` 类添加到 `<body>`。这将使深色模式仍能根据用户偏好工作。

```javascript
// 使用 matchMedia 检查用户偏好
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

toggleDarkTheme(prefersDark.matches);

// 监听 prefers-color-scheme 媒体查询的变更
prefersDark.addEventListener('change', (mediaQuery) => toggleDarkTheme(mediaQuery.matches));

// 根据媒体查询是否匹配来添加或移除 "dark" 类
function toggleDarkTheme(shouldAdd) {
  document.body.classList.toggle('dark', shouldAdd);
}
```

:::note
提示：请确保在[支持的浏览器](https://caniuse.com/#feat=prefers-color-scheme)中查看下面的 Codepen，然后尝试在设备上将系统偏好从浅色模式切换为深色模式。这里是[在 Windows 10 上启用深色模式的方法](https://blogs.windows.com/windowsexperience/2016/08/08/windows-10-tip-personalize-your-pc-by-enabling-the-dark-theme/)以及[在 Mac 上启用深色模式的方法](https://support.apple.com/en-us/HT208976)。
:::

<!-- Codepen https://codepen.io/ionic/pen/jONzJpG -->

<Codepen preview="false" user="ionic" slug="jONzJpG" height="550px" default-tab="js,result" />

### 手动切换深色模式

除了在应用加载时和媒体查询变更时调用 `toggleDarkTheme()` 外，还可以通过应用调用 `toggleDarkTheme()` 函数，例如当用户切换开关时，在浅色和深色主题之间切换：

```javascript
// 查询用于切换主题的开关
const toggle = document.querySelector('#themeToggle');

// 监听开关的勾选/取消勾选，在 <body> 上切换 dark 类
toggle.addEventListener('ionChange', (ev) => {
  document.body.classList.toggle('dark', ev.detail.checked);
});

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// 监听 prefers-color-scheme 媒体查询的变更
prefersDark.addEventListener('change', (e) => checkToggle(e.matches));

// 应用加载时调用
function loadApp() {
  checkToggle(prefersDark.matches);
}

// 媒体查询调用以勾选/取消勾选开关
function checkToggle(shouldCheck) {
  toggle.checked = shouldCheck;
}
```

<!-- Codepen https://codepen.io/ionic/pen/zYOpQLj -->

<Codepen preview="false" user="ionic" slug="zYOpQLj" height="600px" default-tab="js,result" />

## 调整系统 UI 组件

在开发深色主题时，您可能会注意到某些系统 UI 组件未能正确调整为深色模式。要解决此问题，您需要指定 `color-scheme`。有关跨浏览器支持的详细信息，请参阅 <a href="https://caniuse.com/#feat=mdn-html_elements_meta_name_color-scheme" target="_blank">color-scheme 的浏览器兼容性</a>。

虽然您可能主要使用 Ionic 组件而非纯原生组件，但 `color-scheme` 也会影响应用程序的某些方面，例如滚动条。要使用 `color-scheme`，您需要在应用的 `head` 中添加以下 HTML：

```html
<meta name="color-scheme" content="light dark" />
```

这允许页面指示其适合以哪种配色方案呈现。或者，您可以添加以下 CSS 针对每个元素进行指定：

```css
color-scheme: light dark;
```

| 默认滚动条                                                                                                                                      | 带有 `color-scheme` 的滚动条                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![应用程序界面中默认的浅色主题滚动条。](/img/theming/color-scheme-light.png '未启用深色模式时的默认滚动条外观') | ![应用程序界面中的深色主题滚动条，展示了 'color-scheme' 属性的效果。](/img/theming/color-scheme-dark.png "应用深色模式 'color-scheme' 后的滚动条外观") |

有关 `color-scheme` 的更多信息，请参阅 https://web.dev/color-scheme/。

:::note
`color-scheme` 不适用于键盘。有关深色模式如何与键盘配合使用的详细信息，请参阅 [键盘文档](../developing/keyboard.md#深色模式)。
:::

## Ionic 深色主题

Ionic 提供了一个推荐的主题变量集，用于根据运行应用的设备获取深色模式。它可以分解为以下几个部分：

1. 在 `body.dark` 选择器中，更改所有[模式](platform-styles.md#ionic-模式)的默认 [Ionic 颜色](colors.md)，以配合深色背景。
2. 在 `ios` 设备上设置深色主题的变量。
3. 在 `md` 设备上设置深色主题的变量。

以下代码可以复制并粘贴到应用中，以获取 Ionic 的深色主题。我们使用 [结合使用 JavaScript](#结合使用-javascript) 部分中提到的 JavaScript 将 `dark` 类添加到文档 body。在将 `dark` 类添加到文档 body 之前，深色模式不会启用。

:::note
有关正在更改的变量的更多信息，包括可以添加以进一步自定义的其他变量，请参阅 [主题](themes.md)。
:::

```css
/*
 * 深色颜色
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
 * iOS 深色主题
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
 * Material Design 深色主题
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