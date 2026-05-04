---
title: Browser Support
---

<head>
  <title>移动端浏览器支持：让 Ionic 应用随处运行</title>
  <meta
    name="description"
    content="基于 Web 技术的根基，Ionic 移动应用可以在任何 Web 运行的地方运行 —— iOS、Android、浏览器、PWA 等。详细了解浏览器支持情况。"
  />
</head>

Ionic 最初的愿景是让开发者能够轻松使用 HTML、CSS 和 JavaScript 等 Web 技术来开发移动应用。正因基于 Web 技术的根基，Ionic 可以在任何 Web 运行的地方运行 —— iOS、Android、浏览器、PWA 等。

<LegacyAnchor id="mobile-browsers" />

## 移动端浏览器

为实现 [自适应样式设计](../core-concepts/fundamentals.md#adaptive-styling)，Ionic 完全支持并在以下移动平台进行了充分测试：

|  框架版本  |        Android         |  iOS  |
| :--------: | :--------------------: | :---: |
| Ionic v7   | 5.1+ 且 Chromium 79+   | 14.0+ |
| Ionic v6   | 5.0+ 且 Chromium 60+   | 13.0+ |
| Ionic v5   |          5.0+          | 11.0+ |
| Ionic v4   |          4.4+          | 10.0+ |

:::note
请查看 [最新 Android 统计数据](https://developer.android.com/about/dashboards/) 和 [最新 iOS 统计数据](https://developer.apple.com/support/app-store/) 获取最新的平台信息。
:::

### 关于 Android 支持的说明

从 Android 5.0 开始，WebView 被移到了一个独立的应用程序中，可以独立于 Android 系统进行更新。这意味着大多数 Android 5.0+ 设备都将运行现代版本的 Chromium。然而，仍有一部分 Android 设备无法更新其 WebView。这些 WebView 通常停留在设备出厂时的版本。

要确定设备运行的 WebView 版本，在使用 Chrome 开发者工具检查应用时，请在控制台打印 `window.navigator.userAgent`。

## 桌面端浏览器

由于 Ionic 基于 Web 技术，它在桌面浏览器上的表现与在移动设备上一样出色。有关桌面端布局的更多信息，请参阅 [跨平台适配](../core-concepts/cross-platform.md#desktop)。

|   浏览器   | Ionic v7 | Ionic v6 | Ionic v5 | Ionic v4 |
| :--------: | :------: | :------: | :------: | :------: |
| **Chrome** |   79+    |   60+    |    ✔     |    ✔     |
| **Safari** |   14+    |   13+    |    ✔     |    ✔     |
|  **Edge**  |   79+    |   79+    |   79+    |    ✔     |
| **Firefox**|   70+    |   63+    |    ✔     |    ✔     |
|  **IE 11** |  **X**   |  **X**   |  **X**   |  **X**   |