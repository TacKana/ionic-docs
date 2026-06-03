---
title: 浏览器支持
---

<head>
  <title>移动浏览器支持 - 让 Ionic 应用随处运行</title>
  <meta
    name="description"
    content="基于 Web 技术的基础，Ionic 移动应用可以在 Web 能运行的任何地方运行——iOS、Android、浏览器、PWA 等。了解浏览器支持信息。"
  />
</head>

Ionic 最初的目标是使用 HTML、CSS 和 JavaScript 等 Web 技术轻松开发移动应用。由于这种基于 Web 技术的基础，Ionic 可以在 Web 能运行的任何地方运行——iOS、Android、浏览器、PWA 等。

## 移动浏览器

为了追求[自适应样式](../core-concepts/fundamentals.md#自适应样式)，Ionic 完全支持并在以下移动平台上进行了充分测试：

| 框架      |       Android        |  iOS  |
| :-------: | :------------------: | :---: |
| Ionic v7  | 5.1+ 且 Chromium 79+ | 14.0+ |
| Ionic v6  | 5.0+ 且 Chromium 60+ | 13.0+ |
| Ionic v5  |        5.0+          | 11.0+ |
| Ionic v4  |        4.4+          | 10.0+ |

:::note
查看[最新的 Android 统计数据](https://developer.android.com/about/dashboards/)和[最新的 iOS 统计数据](https://developer.apple.com/support/app-store/)，获取最新的平台信息。
:::

### 关于 Android 支持的说明

从 Android 5.0 开始，webview 被移到了一个可以独立于 Android 进行更新的单独应用中。这意味着大多数 Android 5.0+ 设备将运行现代版本的 Chromium。但是，仍有一部分 Android 设备无法更新其 webview。这些 webview 通常停留在设备初始发货时的版本。

要确定设备运行的 webview 版本，在使用 Chrome DevTools 检查应用时，将 `window.navigator.userAgent` 记录到控制台。

## 桌面浏览器

由于 Ionic 基于 Web 技术，它在桌面浏览器上的工作效果与在移动设备上一样好。有关桌面布局的更多信息，请参阅[跨平台](../core-concepts/cross-platform.md#桌面端)。

|   浏览器   | Ionic v7 | Ionic v6 | Ionic v5 | Ionic v4 |
| :--------: | :------: | :------: | :------: | :------: |
| **Chrome** |   79+    |   60+    |    ✓     |    ✓     |
| **Safari** |   14+    |   13+    |    ✓     |    ✓     |
|  **Edge**  |   79+    |   79+    |   79+    |    ✓     |
| **Firefox**|   70+    |   63+    |    ✓     |    ✓     |
| **IE 11**  |   **X**  |  **X**   |  **X**   |  **X**   |
