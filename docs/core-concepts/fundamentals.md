---
title: 核心概念 - 基础
sidebar_label: 核心概念
---

<head>
  <title>App Development 核心概念 - 基础 and Tools - Ionic Framework API</title>
  <meta
    name="description"
    content="对于 Ionic 应用开发新手，了解项目背后的核心概念与工具有助于快速入门。阅读本文了解 Ionic API 的更多信息。"
  />
</head>

对于完全不了解 Ionic 应用开发的开发者，了解项目背后的核心理念、概念和工具有助于建立整体认知。在深入复杂主题之前，我们将介绍 Ionic Framework 的基本概念及其工作原理。

## UI 组件

Ionic Framework 是一个 UI 组件库，这些可复用的元素是构建应用程序的基础模块。Ionic 组件基于 [Web 标准](../reference/glossary.md#web-standards)使用 HTML、CSS 和 JavaScript 构建。虽然组件是预构建的，但它们从设计之初就支持高度自定义，让每个应用都能打造独特的外观和体验。具体来说，Ionic 组件可以轻松进行主题化，以全局改变整个应用的外观。更多关于自定义外观的信息，请参阅 [主题化](../theming/basics.md)。

## 自适应样式

自适应样式是 Ionic Framework 的内置功能，允许开发者使用同一套代码库适配多个平台。每个 Ionic 组件都会根据应用运行的平台调整其外观。例如，苹果设备（如 iPhone 和 iPad）使用苹果自家的 <a href="https://www.apple.com/ios" target="_blank">iOS 设计语言</a>。同样，Android 设备使用谷歌的设计语言 <a href="https://material.io/guidelines/" target="_blank">Material Design</a>。

通过在不同平台间进行细微的设计调整，可以为用户提供熟悉的应用体验。从苹果 App Store 下载的 Ionic 应用会获得 iOS 主题，而从 Android Play Store 下载的 Ionic 应用则会获得 Material Design 主题。对于作为渐进式 Web 应用（PWA）在浏览器中查看的应用，Ionic 默认使用 Material Design 主题。此外，在特定场景下决定使用哪个平台也是完全可配置的。更多关于自适应样式的信息，请参阅 [主题化](../theming/basics.md)。

## 导航

传统的 Web 应用使用线性历史记录，即用户向前导航到页面后可以点击返回按钮返回。例如在 Wikipedia 中浏览时，用户在浏览器的线性历史记录栈中前进和后退。

相比之下，移动应用通常采用并行的"非线性"导航。例如，选项卡界面可以为每个选项卡设置独立的导航栈，确保用户在导航和切换选项卡时不会丢失当前位置。

Ionic 应用采用这种移动端导航方式，支持可以嵌套的并行导航历史记录，同时保持 Web 开发者熟悉的浏览器式导航概念。

对于使用 Angular 和 `@ionic/angular` 构建的应用，我们推荐使用 <a href="https://angular.io/guide/router" target="_blank">Angular Router</a>，它在每个新的 Ionic 4 Angular 应用中都是开箱即用的。

## 原生功能访问

使用 Web 技术（如 Ionic 应用！）构建的应用有一个惊人的特性：它几乎可以在任何平台上运行：台式电脑、手机、平板、汽车、冰箱等等！Ionic 应用的同一套代码库可以在多个平台上工作，因为它基于这些平台共享的 Web 标准和通用 API。

Ionic 最常见的用例之一是构建一个可以从 <a href="https://www.apple.com/ios/app-store/" target="_blank">App Store</a> 和 <a href="https://play.google.com/" target="_blank">Play Store</a> 下载的应用。iOS 和 Android 的软件开发工具包（SDK）都提供 [Web View](webview.md) 来渲染任何 Ionic 应用，同时仍然允许<i>完全</i>访问原生 SDK。

<a href="https://capacitorjs.com/" target="_blank">Capacitor</a> 和 <a href="https://cordova.apache.org/" target="_blank">Cordova</a> 等项目通常用于为 Ionic 应用提供访问原生 SDK 的能力。这意味着开发者可以使用常见的 Web 开发工具快速构建应用，同时仍然可以访问设备的加速度计、摄像头、GPS 等原生功能。

## 主题化

从核心上看，Ionic Framework 使用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a> 构建，这使我们能够利用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS 属性（变量）</a>提供的灵活性。这使得设计既美观又遵循 Web 标准的应用变得极其简单。我们提供了一组颜色，让开发者可以获得一些优秀的默认值，但我们鼓励覆盖这些值以创建符合品牌、公司或期望配色方案的设计。从应用的背景颜色到文本颜色，一切都是完全可定制的。更多关于应用主题化的信息，请参阅 [主题化](../theming/basics.md)。

## 事件

许多 Ionic 组件使用 [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) 来通知开发者组件中重要的状态变化。例如，`ion-datetime` 组件会在所选日期发生变化时发出 `ionChange` 事件。

开发者可以像平常一样使用 `click` 等标准事件。然而，在组件的 [shadow root](../reference/glossary.md#shadow) 内发出的许多事件会被 [重新定位](https://dom.spec.whatwg.org/#retarget) 到宿主元素。这可能导致多个 `click` 处理程序被执行，即使用户只点击了一次。因此，开发者应依赖 Ionic 的事件来正确获知 Ionic 组件的状态变化。Ionic 的事件以 `ion` 为前缀，以避免与标准事件冲突。每个组件的文档页面都列出了开发者可以在应用中监听的事件列表。

## 属性

属性是可以在 Ionic 组件上设置的 JavaScript 属性，用于配置其行为和外观。属性在每个组件的 [API 文档](/docs/api) 页面中定义。

### 响应式属性

响应式属性在其值更改时会自动更新组件。这是 Ionic 组件中最常见的属性类型。

```html
<ion-button color="primary">Primary Button</ion-button>
```

`color` 属性是一个响应式属性，用于配置按钮的外观。如果在初始渲染后更改 `color` 值，按钮将更新以反映新值。

### 虚拟属性

虚拟属性设计用于在组件初始化期间进行一次性的配置。它们在更新时不会触发重新渲染。

```html
<ion-button mode="ios">iOS Style Button</ion-button> <ion-button mode="md">Material Design Button</ion-button>
```

`mode` 属性是一个虚拟属性，用于确定组件使用哪个平台的样式。它可以在组件级别设置，也可以通过应用配置全局设置。在这两种情况下，它都是在初始化期间设置一次，在组件的生命周期中不会更改。

有关 Ionic 模式的更多信息，请阅读 [平台样式文档](/docs/theming/platform-styles)。