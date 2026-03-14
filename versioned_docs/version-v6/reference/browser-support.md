---
title: 浏览器支持
---

<head>
  <title>移动浏览器支持 - 在任意平台运行 Ionic 应用</title>
  <meta
    name="description"
    content="基于 Web 技术构建的 Ionic 移动应用可以在任何 Web 运行的地方运行——包括 iOS、Android、浏览器、PWA 等平台。了解浏览器支持详情。"
  />
</head>

Ionic 的初衷是让开发者能够轻松地使用 HTML、CSS 和 JavaScript 等 Web 技术来开发移动应用。正是基于这种 Web 技术基础，Ionic 可以在任何 Web 运行的地方运行——包括 iOS、Android、浏览器、PWA 等平台。

## 移动浏览器

为实现[自适应样式](../core-concepts/fundamentals.md#adaptive-styling)，Ionic 对以下移动平台提供了全面支持并经过充分测试：

| 框架版本 |     Android      |  iOS  |
| :------: | :--------------: | :---: |
| Ionic v6 | 5.0+（需 Chromium 60+） | 13.0+ |
| Ionic v5 |       5.0+       | 11.0+ |
| Ionic v4 |       4.4+       | 10.0+ |

:::note
请查阅[最新 Android 统计数据](https://developer.android.com/about/dashboards/) 和[最新 iOS 统计数据](https://developer.apple.com/support/app-store/) 获取最新的平台信息。
:::

### 关于 Android 支持的说明

从 Android 5.0 开始，Webview 被移到了一个独立的应用程序中，可以独立于 Android 系统进行更新。这意味着大多数 Android 5.0+ 设备都将运行现代版本的 Chromium。然而，仍有部分 Android 设备制造商锁定了 Webview 版本，不允许 Webview 更新。这些 Webview 通常停留在设备出厂时的版本。

因此，Ionic Framework v6 仅支持运行 Android 5.0+ 且 Webview 为 Chromium 60 或更高版本的 Android 设备和模拟器。作为参考，这是 Stencil 无需 polyfill 即可支持的版本：https://stenciljs.com/docs/browser-support

要查看设备运行的 Webview 版本，在使用 Chrome 开发者工具检查应用时，请在控制台打印 `window.navigator.userAgent`。

### 关于 Angular 13+ 支持的说明

Angular 对 iOS 的支持策略是支持最近的两个主要版本。在发布时，这指的是 iOS 14 和 15。要支持 iOS 13，请将 tsconfig.json 中 `compilerOptions` 下的项目 `target` 改为 `es5`。如果不进行此更改，在 iOS 13 中启动应用时会出现 `Unexpected token '.' in promiseReactionJob` 错误。

## 桌面浏览器

由于 Ionic 基于 Web 技术构建，它在桌面浏览器上的运行效果与在移动设备上一样出色。有关桌面布局的更多信息，请参阅[跨平台](../core-concepts/cross-platform.md#desktop)。

|   浏览器   | Ionic v6 | Ionic v5 | Ionic v4 |
| :--------: | :------: | :------: | :------: |
| **Chrome** |   60+    |    ✔     |    ✔     |
| **Safari** |   13+    |    ✔     |    ✔     |
|  **Edge**  |   79+    |   79+    |    ✔     |
| **Firefox**|   63+    |    ✔     |    ✔     |
|  **IE 11** |  **X**   |  **X**   |  **X**   |