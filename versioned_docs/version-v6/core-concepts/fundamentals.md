---
title: 核心概念 - 基础
sidebar_label: 核心概念
---

<head>
  <title>应用程序开发核心概念 - 基础和工具 - Ionic框架API</title>
  <meta
    name="description"
    content="对于 Ionic 应用开发新手，了解项目背后的核心理念、概念和工具会很有帮助。阅读本文以了解更多关于 Ionic API 的信息。"
  />
</head>

对于完全不了解 Ionic 应用开发的开发者，了解项目背后的核心理念、概念和工具会很有帮助。在深入复杂主题之前，我们先来介绍 Ionic Framework 的基本概念及其工作原理。

## UI 组件

Ionic Framework 是一个 UI 组件库，这些可复用元素是应用程序的构建基石。Ionic 组件采用 [Web 标准](../reference/glossary.md#web-standards)使用 HTML、CSS 和 JavaScript 构建。虽然组件已预构建完成，但它们从设计之初就支持高度自定义，让每个应用都能打造独特的视觉风格。具体而言，Ionic 组件可以轻松设置主题，实现整个应用外观的全局统一调整。有关自定义外观的更多信息，请参阅 [主题](../theming/basics.md)。

## 自适应样式

自适应样式是 Ionic Framework 的内置功能，允许应用开发者使用同一套代码库适配多个平台。每个 Ionic 组件都会根据应用运行的平台自动调整外观。例如，iPhone 和 iPad 等苹果设备使用 Apple 自家的 <a href="https://www.apple.com/ios" target="_blank">iOS 设计语言</a>，而 Android 设备则采用 Google 的 <a href="https://material.io/guidelines/" target="_blank">Material Design</a> 设计语言。

通过对不同平台进行细致的设计调整，用户可以获得熟悉的应用体验。从 Apple App Store 下载的 Ionic 应用将采用 iOS 主题，而从 Android Play Store 下载的应用则会使用 Material Design 主题。对于通过浏览器访问的渐进式 Web 应用（PWA），Ionic 默认使用 Material Design 主题。此外，在特定场景下选择使用哪个平台也是完全可配置的。有关自适应样式的更多信息，请参阅 [主题](../theming/basics.md)。

## 导航

传统 Web 应用采用线性历史导航，即用户向前跳转页面后可以通过返回按钮后退。典型的例子是浏览维基百科时，用户可以在浏览器的线性历史栈中前进和后退。

相比之下，移动应用通常采用并行的“非线性”导航。例如，标签页界面可以为每个标签页维护独立的导航栈，确保用户在标签页间切换时不会丢失浏览位置。

Ionic 应用采用这种移动端导航方式，支持可嵌套的并行导航历史，同时保留了 Web 开发者熟悉的浏览器式导航概念。

对于使用 Angular 和 `@ionic/angular` 构建的应用，我们推荐使用 <a href="https://angular.io/guide/router" target="_blank">Angular Router</a>，每个新的 Ionic 4 Angular 应用都会默认包含此功能。

## 原生功能访问

基于 Web 技术构建的应用（例如 Ionic 应用）有一个惊人特性：它几乎可以在任何平台上运行，包括台式电脑、手机、平板、汽车、冰箱等！Ionic 应用之所以能在众多平台上使用同一套代码库，是因为它基于这些平台共通的 Web 标准和通用 API。

Ionic 最常见的用例之一就是构建可从 <a href="https://www.apple.com/ios/app-store/" target="_blank">App Store</a> 和 <a href="https://play.google.com/" target="_blank">Play Store</a> 下载的应用。iOS 和 Android 的软件开发工具包（SDK）都提供了 [Web 视图](webview.md)来渲染 Ionic 应用，同时仍允许<i>完全</i>访问原生 SDK。

开发者通常使用 <a href="https://capacitorjs.com/" target="_blank">Capacitor</a> 或 <a href="https://cordova.apache.org/" target="_blank">Cordova</a> 等项目让 Ionic 应用获得原生 SDK 的访问能力。这意味着开发者可以使用常见的 Web 开发工具快速构建应用，同时仍能访问设备的加速度计、摄像头、GPS 等原生功能。

## 主题

Ionic Framework 的核心是使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS" target="_blank">CSS</a> 构建，这使得我们可以充分利用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS 属性（变量）</a>提供的灵活性。这让设计出既美观又符合 Web 标准的应用变得极其简单。我们提供了一套颜色方案让开发者拥有出色的默认配置，但更鼓励开发者覆盖这些配置来创建符合品牌、公司或期望调色板的设计。从应用的背景颜色到文本颜色，一切都是完全可定制的。有关应用主题的更多信息，请参阅 [主题](../theming/basics.md)。

## 事件

许多 Ionic 组件使用 [CustomEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent) 来通知开发者组件中重要的状态变化。例如，当选中日期发生变化时，`ion-datetime` 组件会发出 `ionChange` 事件。

开发者可以像往常一样使用标准事件，例如 `click`。但是，在组件的 [影子根](../reference/glossary.md#shadow) 内发出的许多事件会被 [重定向](https://dom.spec.whatwg.org/#retarget) 到宿主元素。这可能导致即使用户只点击一次，也会执行多个 `click` 事件处理程序。因此，开发者应依赖 Ionic 的事件来准确获知 Ionic 组件的状态变化。Ionic 的事件以 `ion` 为前缀，以避免与标准事件冲突。每个组件的文档页面都列出了开发者可以在应用中监听的可用事件。

## 属性

属性是可以在 Ionic 组件上设置的 JavaScript 属性，用于配置其行为和外观。属性定义在每个组件的 [API 文档](/docs/api) 页面中。

### 响应式属性

响应式属性在其值发生变化时会自动更新组件。这是 Ionic 组件中最常见的属性类型。

```html
<ion-button color="primary">Primary Button</ion-button>
```

`color` 属性是一个响应式属性，用于配置按钮的外观。如果在初始渲染后更改 `color` 值，按钮将更新以反映新值。

### 虚拟属性

虚拟属性设计用于在组件初始化期间进行一次性配置。它们在更新时不会触发重新渲染。

```html
<ion-button mode="ios">iOS Style Button</ion-button> <ion-button mode="md">Material Design Button</ion-button>
```

`mode` 属性是一个虚拟属性，用于确定组件使用哪个平台样式。可以在组件级别或通过应用配置全局设置。在这两种情况下，它都在初始化期间设置一次，并且在组件的生命周期内不会更改。

有关 Ionic 模式的更多信息，请阅读 [平台样式文档](/docs/theming/platform-styles)。