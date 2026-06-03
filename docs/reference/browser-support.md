---
title: 浏览器支持
---

<head>
  <title>移动浏览器支持：让 Ionic 应用随处运行</title>
  <meta
    name="description"
    content="由于基于 Web 技术，Ionic 移动应用可以在 Web 运行的任何地方运行——iOS、Android、浏览器、PWA 等。了解浏览器支持。"
  />
</head>

Ionic 最初的目标是使使用 Web 技术（如 HTML、CSS 和 JavaScript）开发移动应用变得容易。正是由于基于 Web 技术，Ionic 可以在 Web 运行的任何地方运行——iOS、Android、浏览器、PWA 等。

## 移动平台

为了追求[自适应样式](../core-concepts/fundamentals.md#自适应样式)，Ionic 完全支持并在以下移动平台上进行了充分测试：

| Framework  |       Android        |  iOS  |
| :--------: | :------------------: | :---: |
| Ionic v8   | 5.1+ (Chromium 89+)  | 15.0+ |
| Ionic v7   | 5.1+ (Chromium 79+)  | 14.0+ |
| Ionic v6   | 5.0+ (Chromium 60+)  | 13.0+ |
| Ionic v5   |        5.0+          | 11.0+ |
| Ionic v4   |        4.4+          | 10.0+ |

:::note
查看[最新的 Android 统计数据](https://developer.android.com/about/dashboards/)和[最新的 iOS 统计数据](https://developer.apple.com/support/app-store/)以获取最新的平台信息。
:::

### 关于 Android 支持的说明

从 Android 5.0 开始，webview 被移至一个独立的应用程序，可以独立于 Android 进行更新。这意味着大多数 Android 5.0+ 设备将运行现代版本的 Chromium。然而，仍有一部分 Android 设备无法更新其 webview。这些 webview 通常停留在设备最初出厂时的版本。

要确定设备运行的 webview 版本，在使用 Chrome DevTools 检查应用时，在控制台中记录 `window.navigator.userAgent`。

## 浏览器

Ionic 支持以下浏览器：

|   浏览器    | Ionic v8 | Ionic v7 | Ionic v6 | Ionic v5 | Ionic v4 |
| :---------: | :------: | :------: | :------: | :------: | :------: |
| **Chrome**  |   89+    |   79+    |   60+    |    ✔     |    ✔     |
| **Safari**  |   15+    |   14+    |   13+    |    ✔     |    ✔     |
|  **Edge**   |   89+    |   79+    |   79+    |   79+    |    ✔     |
| **Firefox** |   75+    |   70+    |   63+    |    ✔     |    ✔     |
| **IE 11**   |  **X**   |  **X**   |  **X**   |  **X**   |  **X**   |
