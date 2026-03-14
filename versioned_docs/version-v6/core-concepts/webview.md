---
title: Web View
---

<head>
  <title>适用于 iOS 和 Android 应用的 Capacitor Web View - Ionic Framework</title>
  <meta
    name="description"
    content="什么是 Web View？Web View 是全屏全功能的网页浏览器。阅读以了解更多关于 Ionic Framework 应用中 Capacitor Web View 的信息。"
  />
</head>

Web View 为原生设备上的 Web 应用提供动力。

对于集成了 [Capacitor](../reference/glossary.md#capacitor) 的应用，Web View 会自动提供。

对于 [Cordova](../reference/glossary.md#cordova)，Ionic 维护了一个 <a href="https://github.com/ionic-team/cordova-plugin-ionic-webview" target="_blank">Web View 插件</a>。使用 Ionic CLI 时，默认会提供该插件。

## 什么是 Web View？

Ionic 应用使用 [Web 技术](../reference/glossary.md#web-standards)构建，并通过 Web View 渲染，Web View 是一种全屏全功能的网页浏览器。

现代 Web View 提供了许多内置的 <a href="https://whatwebcando.today" target="_blank">HTML5 API</a> 来访问硬件功能，例如摄像头、传感器、GPS、扬声器和蓝牙，但有时也可能需要访问特定平台的硬件 API。在 Ionic 应用中，可以通过桥接层访问硬件 API，通常使用暴露 JavaScript API 的原生插件。

![展示 Ionic 应用中 Web View 架构的示意图，显示了原生应用组件和 Web 组件之间的桥接。](/img/building/webview-architecture.png 'Web View 架构图')

Ionic Web View 插件专为现代 JavaScript 应用设计。对于 iOS 和 Android，应用文件始终使用 `http://` 协议，通过运行在本地设备上的优化 HTTP 服务器托管。

### CORS

Web View 强制实施 [CORS](../reference/glossary.md#cors)，因此外部服务正确处理跨域请求非常重要。有关在 Ionic 应用中处理 CORS 的信息，请参阅 [CORS 常见问题解答](../troubleshooting/cors.md)。

### 文件协议

Capacitor 和 Cordova 应用托管在本地 HTTP 服务器上，并通过 `http://` 协议提供。然而，有些插件尝试通过 `file://` 协议访问设备文件。为了避免 `http://` 和 `file://` 之间的冲突，设备文件的路径必须重写以使用本地 HTTP 服务器。例如，`file:///path/to/device/file` 必须在应用中渲染之前重写为 `http://<host>:<port>/<prefix>/path/to/device/file`。

对于 Capacitor 应用，按如下方式转换文件 URI：

```javascript
import { Capacitor } from '@capacitor/core';

Capacitor.convertFileSrc(filePath);
```

对于 Cordova 应用，[Ionic Web View 插件](https://github.com/ionic-team/cordova-plugin-ionic-webview)提供了一个用于转换文件 URI 的实用函数：`window.Ionic.WebView.convertFileSrc()`。还有一个对应的 Ionic Native 插件：[`@awesome-cordova-plugins/ionic-webview`](https://danielsogl.gitbook.io/awesome-cordova-plugins/ionic-webview)。

### 实现

- **iOS**: <a href="https://developer.apple.com/documentation/webkit/wkwebview" target="_blank">WKWebView</a>
- **Android**: <a href="https://developer.chrome.com/multidevice/webview/overview" target="_blank">Web View for Android</a>