---
title: 核心概念
sidebar_label: 基础
---

<head>
  <title>应用开发核心概念和工具 - Ionic Framework API</title>
  <meta
    name="description"
    content="对于 Ionic 应用开发的新手来说，了解项目背后的核心概念和工具的高层次理解会很有帮助。阅读以了解更多关于 Ionic API 的信息。"
  />
</head>

对于完全不了解 Ionic 应用开发的人来说，了解项目背后的核心理念、概念和工具的高层次理解会很有帮助。在深入复杂主题之前，我们将介绍 Ionic Framework 的基础知识及其工作原理。

## UI 组件

Ionic Framework 是一个 UI 组件库，这些组件是可重用的元素，作为应用的构建块。Ionic 组件使用 [Web 标准](../reference/glossary.md#web-standards)、HTML、CSS 和 JavaScript 构建。虽然组件是预构建的，但它们从设计之初就具有高度可定制性，因此应用可以让每个组件独具特色，使每个应用拥有自己的外观和感觉。更具体地说，Ionic 组件可以轻松地进行主题化，以全局改变整个应用的外观。有关自定义外观的更多信息，请参阅[主题](../theming/basics.md)。

## 自适应样式

自适应样式是 Ionic Framework 的一个内置功能，允许应用开发者对多个平台使用同一套代码。每个 Ionic 组件都会根据应用运行所在的平台调整其外观。例如，Apple 设备（如 iPhone 和 iPad）使用 Apple 自己的 <a href="https://www.apple.com/ios" target="_blank">iOS 设计语言</a>。类似地，Android 设备使用 Google 的设计语言 <a href="https://material.io/guidelines/" target="_blank">Material Design</a>。

通过在平台之间进行细微的设计调整，为用户提供熟悉的应用体验。从 Apple App Store 下载的 Ionic 应用将获得 iOS 主题，而从 Android Play Store 下载的 Ionic 应用将获得 Material Design 主题。对于在浏览器中作为渐进式 Web 应用（PWA）查看的应用，Ionic 默认使用 Material Design 主题。此外，在某些场景下决定使用哪个平台是完全可配置的。有关自适应样式的更多信息，请参阅[主题](../theming/basics.md)。

## 导航

传统的 Web 应用使用线性历史记录，这意味着用户向前导航到一个页面，然后可以点击返回按钮返回到上一个页面。
一个例子是在 Wikipedia 上点击浏览，用户在浏览器的线性历史栈中前进和后退。

相比之下，移动应用通常使用并行的"非线性"导航。例如，标签页式界面可以为每个标签页拥有独立的导航栈，确保用户在导航和切换标签页时不会丢失其位置。

Ionic 应用采用这种移动导航方式，支持并行且可嵌套的导航历史记录，同时保留了 Web 开发者熟悉的浏览器风格导航概念。

对于使用 Angular 和 `@ionic/angular` 构建的应用，我们推荐使用每个新的 Ionic 4 Angular 应用开箱即用的 <a href="https://angular.io/guide/router" target="_blank">Angular 路由器</a>。

## 原生访问

使用 Web 技术构建的应用（如 Ionic 应用！）的一个惊人特性是它们几乎可以在任何平台上运行：台式电脑、手机、平板、汽车、冰箱等等！Ionic 应用的同一套代码可以在多个平台上运行，因为它是基于这些平台共享的 Web 标准和通用 API 构建的。

Ionic 最常见的用例之一是构建可以从 <a href="https://www.apple.com/ios/app-store/" target="_blank">App Store</a> 和 <a href="https://play.google.com/" target="_blank">Play Store</a> 下载的应用。iOS 和 Android 软件开发工具包（SDK）都提供 [Web View](webview.md)，可以渲染任何 Ionic 应用，同时仍然允许<em>完全</em>访问原生 SDK。

像 <a href="https://capacitorjs.com/" target="_blank">Capacitor</a> 和 <a href="https://cordova.apache.org/" target="_blank">Cordova</a> 这样的项目通常用于为 Ionic 应用提供对原生 SDK 的访问。这意味着开发者可以快速使用常见的 Web 开发工具构建应用，同时仍然可以访问设备的原生功能，如加速度计、相机、GPS 等。

## 主题

Ionic Framework 的核心是使用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a> 构建的，这使我们能够利用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS 属性（变量）</a>提供的灵活性。这使得设计一个外观出色且遵循 Web 标准的应用变得非常容易。我们提供了一组颜色，让开发者拥有一些优秀的默认值，但我们鼓励覆盖这些默认值，以创建与品牌、公司或所需调色板相匹配的设计。从应用的背景颜色到文本颜色，一切都是完全可自定义的。有关应用主题的更多信息，请参阅[主题](../theming/basics.md)。

## 事件

许多 Ionic 组件使用 [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) 来通知开发者组件中的重要状态变化。例如，`ion-datetime` 组件会在所选日期发生变化时触发 `ionChange` 事件。

开发者可以像通常一样使用标准事件（如 `click`）。但是，组件 [shadow root](../reference/glossary.md#shadow) 内发出的许多事件会被[重新定位](https://dom.spec.whatwg.org/#retarget)到宿主元素。这可能导致即使只点击一次，也会有多个 `click` 处理程序被执行。因此，开发者应依赖 Ionic 的事件来正确了解 Ionic 组件的状态变化。Ionic 的事件以 `ion` 为前缀，以避免与标准事件冲突。每个组件的文档页面都列出了开发者可以在其应用中监听的可用事件。

## 属性

属性是可以在 Ionic 组件上设置的 JavaScript 属性，用于配置其行为和外观。每个组件的 [API 文档](/api)页面中都定义了相关属性。

### 响应式属性

响应式属性在值发生变化时会自动更新组件。这是 Ionic 组件中最常见的属性类型。

```html
<ion-button color="primary">主按钮</ion-button>
```

`color` 属性是一个响应式属性，用于配置按钮的外观。如果你在初始渲染后更改 `color` 值，按钮将更新以反映新值。

### 虚拟属性

虚拟属性设计用于在组件初始化期间进行一次性配置。它们在更新时不会触发重新渲染。

```html
<ion-button mode="ios">iOS 样式按钮</ion-button> <ion-button mode="md">Material Design 按钮</ion-button>
```

`mode` 属性是一个虚拟属性，决定组件使用哪个平台的样式。它可以在组件级别设置，也可以通过应用配置全局设置。在这两种情况下，它都在初始化期间设置一次，并且在组件的生命周期内不会更改。

有关 Ionic 模式的更多信息，请阅读[平台样式文档](/theming/platform-styles)。
