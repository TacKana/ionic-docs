---
title: 浏览器支持
---

<head>
  <title>移动浏览器支持，让 Ionic 应用随处运行</title>
  <meta
    name="description"
    content="由于基于 Web 技术，Ionic 移动应用可以在 Web 能运行的任何地方运行——iOS、Android、浏览器、PWA 等。了解浏览器支持。"
  />
</head>

Ionic 最初的目标是让使用 HTML、CSS 和 JavaScript 等 Web 技术开发移动应用变得容易。由于基于 Web 技术，Ionic 可以在 Web 能运行的任何地方运行——iOS、Android、浏览器、PWA 等。

## 移动浏览器

为了实现[自适应样式](../core-concepts/fundamentals.md#adaptive-styling)，Ionic 完全支持以下移动平台并经过了充分测试：

| 框架     |      Android       |   iOS  |
| :------: | :----------------: | :----: |
| Ionic v6 | 5.0+ 搭配 Chromium 60+ | 13.0+  |
| Ionic v5 |       5.0+         | 11.0+  |
| Ionic v4 |       4.4+         | 10.0+  |

:::note
查看[最新的 Android 统计数据](https://developer.android.com/about/dashboards/)和[最新的 iOS 统计数据](https://developer.apple.com/support/app-store/)以获取最新的平台信息。
:::

### 关于 Android 支持的说明

从 Android 5.0 开始，WebView 被移到一个可以独立于 Android 进行更新的单独应用程序中。这意味着大多数 Android 5.0+ 设备将运行现代版本的 Chromium。但是，仍有一部分 Android 设备的制造商锁定了 WebView 版本，不允许更新 WebView。这些 WebView 通常停留在设备初始发货时可用的版本。

因此，Ionic Framework v6 仅支持运行 Android 5.0+ 且 WebView 为 Chromium 60 或更新版本的 Android 设备和模拟器。作为参考，这是 Stencil 可以在不需要 polyfill 的情况下支持的版本：https://stenciljs.com/docs/browser-support

要确定设备运行的 WebView 版本，在使用 Chrome DevTools 检查应用程序时，将 `window.navigator.userAgent` 记录到控制台。

### 关于 Angular 13+ 支持的说明

Angular 对 iOS 的支持政策是最近的两个主版本。在发布时，这指的是 iOS 14 和 15。要支持 iOS 13，请将 tsconfig.json 中 `compilerOptions` 指定的项目 `target` 更改为 `es5`。如果不进行此更改，在 iOS 13 上启动应用时会出现 `Unexpected token '.' in promiseReactionJob` 错误。

## 桌面浏览器

由于 Ionic 基于 Web 技术，它在桌面浏览器上和在移动设备上一样工作良好。有关桌面布局的更多信息，请参阅[跨平台](../core-concepts/cross-platform.md#desktop)。

|  浏览器    | Ionic v6 | Ionic v5 | Ionic v4 |
| :-------: | :------: | :------: | :------: |
| **Chrome**  |   60+    |    ✔     |    ✔     |
| **Safari**  |   13+    |    ✔     |    ✔     |
|  **Edge**   |   79+    |   79+    |    ✔     |
| **Firefox** |   63+    |    ✔     |    ✔     |
|  **IE 11**  |  **X**   |  **X**   |  **X**   |
