---
title: 移动端浏览器支持
---

<head>
  <title>移动端浏览器支持：让 Ionic 应用随处运行</title>
  <meta
    name="description"
    content="得益于基于 Web 技术的根基，Ionic 移动应用可以在任何能够运行 Web 的环境下运行，包括 iOS、Android、浏览器、PWA 等。了解更多关于浏览器支持的信息。"
  />
</head>

Ionic 最早的目标是让使用 HTML、CSS 和 JavaScript 等 Web 技术开发移动应用变得简单。正是由于这种基于 Web 技术的根基，Ionic 可以在任何 Web 能够运行的地方运行——iOS、Android、浏览器、PWA 等等。

<LegacyAnchor id="mobile-browsers" />

## 移动平台

为了实现[自适应样式](../core-concepts/fundamentals.md#adaptive-styling)，Ionic 对以下移动平台提供完全支持并经过充分测试：

| 框架版本 |        Android         |  iOS  |
| :------: | :--------------------: | :---: |
| Ionic v8 | 5.1+ (需 Chromium 89+) | 15.0+ |
| Ionic v7 | 5.1+ (需 Chromium 79+) | 14.0+ |
| Ionic v6 | 5.0+ (需 Chromium 60+) | 13.0+ |
| Ionic v5 |          5.0+          | 11.0+ |
| Ionic v4 |          4.4+          | 10.0+ |

:::note
请查看 [Android 最新统计数据](https://developer.android.com/about/dashboards) 和 [iOS 最新统计数据](https://developer.apple.com/support/app-store) 以获取最新的平台信息。
:::

### 关于 Android 支持的说明

从 Android 5.0 开始，WebView 被移到了一个独立的应用程序中，可以独立于 Android 系统进行更新。这意味着大多数 Android 5.0+ 设备都将运行现代版本的 Chromium。然而，仍然有一部分 Android 设备无法更新其 WebView。这些 WebView 通常停留在设备初始发布时可用的版本。

要查看设备运行的 WebView 版本，可以在使用 Chrome Dev Tools 检查应用程序时，在控制台打印 `window.navigator.userAgent` 的值。

## 浏览器

Ionic 支持以下浏览器：

| 浏览器     | Ionic v8 | Ionic v7 | Ionic v6 | Ionic v5 | Ionic v4 |
| :--------- | :------: | :------: | :------: | :------: | :------: |
| **Chrome** |   89+    |   79+    |   60+    |    ✔     |    ✔     |
| **Safari** |   15+    |   14+    |   13+    |    ✔     |    ✔     |
| **Edge**   |   89+    |   79+    |   79+    |   79+    |    ✔     |
| **Firefox**|   75+    |   70+    |   63+    |    ✔     |    ✔     |
| **IE 11**  |  **X**   |  **X**   |  **X**   |  **X**   |  **X**   |