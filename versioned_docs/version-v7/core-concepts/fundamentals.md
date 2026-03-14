---
title: 核心概念 - 基础
sidebar_label: 核心概念
---

<head>
  <title>应用开发核心概念与工具 - Ionic Framework API</title>
  <meta
    name="description"
    content="对于 Ionic 应用开发的新手，了解项目背后的核心理念、概念和工具很有帮助。阅读本文以了解更多关于 Ionic API 的信息。"
  />
</head>

对于完全不了解 Ionic 应用开发的开发者，了解项目背后的核心理念、概念和工具会很有帮助。在深入复杂主题之前，我们将介绍 Ionic Framework 的基本概念及其工作原理。

## UI 组件

Ionic Framework 是一个 UI 组件库，这些可复用元素构成了应用程序的基础构建模块。Ionic 组件基于 [Web 标准](../reference/glossary.md#web-standards) 使用 HTML、CSS 和 JavaScript 构建。虽然组件是预构建的，但它们从设计之初就支持高度自定义，使应用能够赋予每个组件独特的风格，让每个应用都拥有自己的外观和体验。具体来说，Ionic 组件可以轻松地通过主题化来全局改变整个应用的外观。有关自定义外观的更多信息，请参阅 [主题化](../theming/basics.md)。

## 自适应样式

自适应样式是 Ionic Framework 的内置功能，允许应用开发者使用相同的代码库适配多个平台。每个 Ionic 组件都会根据应用运行的平台自适应其外观。例如，苹果设备（如 iPhone 和 iPad）使用苹果自家的 <a href="https://www.apple.com/ios" target="_blank">iOS 设计语言</a>。同样，Android 设备使用谷歌的设计语言——<a href="https://material.io/guidelines/" target="_blank">Material Design</a>。

通过在不同平台间进行细微的设计调整，可以为用户提供熟悉的应用体验。从苹果 App Store 下载的 Ionic 应用将获得 iOS 主题，而从 Android Play Store 下载的 Ionic 应用将获得 Material Design 主题。对于从浏览器访问的渐进式 Web 应用（PWA），Ionic 默认使用 Material Design 主题。此外，在某些场景下决定使用哪个平台是完全可配置的。有关自适应样式的更多信息，请参阅 [主题化](../theming/basics.md)。

## 导航

传统的 Web 应用使用线性历史记录，意味着用户向前导航到某个页面后，可以通过返回按钮导航回来。例如，浏览维基百科时，用户会在浏览器的线性历史堆栈中前进和后退。

相比之下，移动应用通常采用并行的“非线性”导航。例如，标签页界面可以为每个标签页设置独立的导航堆栈，确保用户在导航和切换标签页时不会丢失当前位置。

Ionic 应用采用这种移动导航方式，支持可以嵌套的并行导航历史记录，同时保持了 Web 开发者熟悉的浏览器式导航概念。

对于使用 Angular 和 `@ionic/angular` 构建的应用，我们推荐使用 <a href="https://angular.io/guide/router" target="_blank">Angular Router</a>，它在每个新的 Ionic 4 Angular 应用中默认提供。

## 原生访问

基于 Web 技术构建的应用（如 Ionic 应用！）有一个惊人的特性：它几乎可以在任何平台上运行：台式电脑、手机、平板电脑、汽车、冰箱等等！Ionic 应用的同一代码库可以在许多平台上工作，因为它基于这些平台共享的 Web 标准和通用 API。

Ionic 最常见的用例之一是构建可以从 <a href="https://www.apple.com/ios/app-store/" target="_blank">App Store</a> 和 <a href="https://play.google.com/" target="_blank">Play Store</a> 下载的应用。iOS 和 Android 软件开发工具包（SDK）都提供了 [Web 视图](webview.md) 来渲染任何 Ionic 应用，同时仍然允许 <i>完全</i> 访问原生 SDK。

<a href="https://capacitorjs.com/" target="_blank">Capacitor</a> 和 <a href="https://cordova.apache.org/" target="_blank">Cordova</a> 等项目常用于让 Ionic 应用获得对原生 SDK 的访问权限。这意味着开发者可以使用常见的 Web 开发工具快速构建应用，同时仍能访问设备的加速计、摄像头、GPS 等原生功能。

## 主题化

Ionic Framework 的核心是使用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a> 构建的，这使我们能够利用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS 属性（变量）</a> 提供的灵活性。这使得设计既美观又符合 Web 标准的应用变得极其简单。我们提供了一套颜色方案，让开发者拥有一些优秀的默认值，但我们也鼓励覆盖它们以创建符合品牌、公司或所需调色板的设计。从应用的背景颜色到文本颜色，一切都是完全可定制的。有关应用主题化的更多信息，请参阅 [主题化](../theming/basics.md)。

## 事件

许多 Ionic 组件使用 [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) 来通知开发者组件中重要的状态变化。例如，当所选日期发生变化时，`ion-datetime` 组件会发出 `ionChange` 事件。

开发者可以像往常一样使用标准事件，如 `click`。然而，在组件的 [shadow root](../reference/glossary.md#shadow) 内发出的许多事件会被 [重新定向](https://dom.spec.whatwg.org/#retarget) 到宿主元素。这可能导致即使只点击一次，也会执行多个 `click` 事件处理程序。因此，开发者应依赖 Ionic 的事件来正确了解 Ionic 组件的状态变化。Ionic 的事件都带有 `ion` 前缀，以避免与标准事件冲突。每个组件的文档页面都有一个可用事件列表，开发者可以在应用中监听这些事件。

## 属性

属性是可以在 Ionic 组件上设置的 JavaScript 属性，用于配置其行为和外观。属性在每个组件的 [API 文档](/docs/api) 页面中定义。

### 响应式属性

响应式属性在值发生变化时会自动更新组件。这是 Ionic 组件中最常见的属性类型。

```html
<ion-button color="primary">Primary Button</ion-button>
```

`color` 属性是一个响应式属性，用于配置按钮的外观。如果在初始渲染后更改 `color` 值，按钮将更新以反映新值。

### 虚拟属性

虚拟属性设计用于在组件初始化期间进行一次性配置。它们在更新时不会触发重新渲染。

```html
<ion-button mode="ios">iOS Style Button</ion-button> <ion-button mode="md">Material Design Button</ion-button>
```

`mode` 属性是一个虚拟属性，用于确定组件使用哪种平台样式。它可以在组件级别或通过应用配置全局设置。在这两种情况下，它都在初始化期间设置一次，并且在组件的生命周期中不会更改。

有关 Ionic 模式的更多信息，请阅读 [平台样式文档](/docs/theming/platform-styles)。