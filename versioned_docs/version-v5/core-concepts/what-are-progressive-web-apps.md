---
sidebar_label: 什么是 PWA？
---

# 渐进式 Web 应用

<!-- 目录会放在这里 -->

### 网络体验...但更出色

渐进式 Web 应用（PWA）是一种利用现代网络能力为用户提供类应用体验的网络应用。这些应用满足特定要求（见下文），部署在服务器上，可通过 URL 访问，并能被搜索引擎索引。

它可以与 [Capacitor](https://capacitorjs.com) 结合使用，为所有用户提供多种部署目标。你可以将应用部署为 PWA 和原生应用，同时利用这两种渠道的优势。

Ionic 允许你不仅将应用发布到应用商店，还能作为 PWA 部署到移动网络。

### 必备条件

要被认定为渐进式 Web 应用，你的应用必须满足以下条件：

- **渐进式** - 无论用户选择哪种浏览器都能运行，因为它们以渐进增强为核心原则构建。

- **响应式** - 适应任何设备形态，无论是桌面端、移动端、平板，还是未来的新设备。

- **连接无关** - 通过 Service Worker 增强，能够在离线或网络质量差的情况下工作。

- **类应用体验** - 采用应用外壳模型，提供应用风格的导航和交互。

- **保持更新** - 借助 Service Worker 更新机制，始终保持最新状态。

- **安全** - 通过 HTTPS 提供，防止窥探并确保内容未被篡改。

- **可发现** - 得益于 W3C 清单和 Service Worker 注册范围，可被识别为“应用程序”，允许搜索引擎发现它们。

- **可重新互动** - 通过推送通知等功能轻松实现用户重新互动。

- **可安装** - 允许用户将最常用的应用“保留”在主屏幕上，无需通过应用商店的繁琐流程。

- **可链接** - 通过 URL 轻松分享，无需复杂安装。

<!-- cspell:disable -->

<em>
  <a href="https://addyosmani.com/blog/getting-started-with-progressive-web-apps/" target="_blank">
    Addy Osmani：渐进式 Web 应用
  </a>
</em>

<!-- cspell:enable -->

虽然这里涉及很多内容，但对于 Ionic 应用来说，可以归结为以下几点。

#### 离线支持

应用应能在离线状态下工作。无论是显示适当的“离线”消息，还是为显示目的缓存应用数据。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank">Web 应用清单</a>

应用清单文件应描述应用所需的资源。这包括应用的显示名称、图标以及启动画面。如果你在 index.html 中链接到清单文件，浏览器会检测到它并为你加载资源。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" target="_blank">Service Worker</a>

Service Worker 本可以在离线支持部分提及，但它确实值得单独说明。Service Worker 提供了一种以编程方式缓存应用资源的方法。无论是 JavaScript 文件还是 HTTP 请求中的 JSON 数据。其编程式 API 允许开发者决定如何处理缓存，并提供比其他方案更灵活的体验。