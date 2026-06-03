---
sidebar_label: 什么是 PWA？
title: 渐进式 Web 应用
---

<head>
  <title>渐进式 Web 应用：什么是 PWA - Ionic 文档</title>
  <meta
    name="description"
    content="什么是 PWA？渐进式 Web 应用使用现代 Web 能力提供类似应用的用户体验。阅读我们的核心概念文档以了解更多信息。"
  />
</head>

<!-- TOC goes here -->

### Web，但更强大

渐进式 Web 应用（PWA）是一种使用现代 Web 能力为用户提供类似应用体验的 Web 应用。
这些应用满足特定要求（见下文），部署到服务器，可通过 URL 访问，并被搜索引擎索引。

这可以与 [Capacitor](https://capacitorjs.com) 结合使用，为所有用户提供多个部署目标。
你可以将应用同时部署为 PWA 和原生应用，并利用这两个渠道。

Ionic 允许你不仅将应用发布到应用商店，还可以作为 PWA 部署到移动 Web。

### 要求是什么

要被视为渐进式 Web 应用，你的应用必须：

- **渐进式** - 适用于每个用户，无论浏览器选择如何，因为它们以渐进增强为核心原则构建。

- **响应式** - 适应任何形态因素：桌面、移动、平板或任何未来的设备。

- **连接无关** - 通过 Service Worker 增强，可在离线或低质量网络下工作。

- **类应用** - 使用应用壳模型提供应用风格的导航和交互。

- **新鲜** - 通过 Service Worker 更新过程始终保持最新。

- **安全** - 通过 HTTPS 提供服务，防止窥探并确保内容未被篡改。

- **可发现** - 通过 W3C 清单和 Service Worker 注册范围被识别为"应用程序"，使搜索引擎能够找到它们。

- **可重新互动** - 通过推送通知等功能轻松实现用户重新互动。

- **可安装** - 允许用户将他们最常用的应用"保留"在主屏幕上，无需应用商店的麻烦。

- **可链接** - 可通过 URL 轻松分享，无需复杂的安装过程。

<!-- cspell:disable -->

<em>
  <a href="https://addyosmani.com/blog/getting-started-with-progressive-web-apps/" target="_blank">
    Addy Osmani：渐进式 Web 应用
  </a>
</em>

<!-- cspell:enable -->

这里有很多内容，但对 Ionic 应用来说可以归结为几个要点。

#### 离线支持

应用应该能够离线工作。无论是显示一个合适的"离线"消息，还是缓存应用数据以供显示。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank">Web 应用清单</a>

应用清单文件应描述你的应用所需的资源。这包括你的应用的显示名称、图标以及启动屏幕。如果你在 index.html 中链接到清单文件，浏览器将检测到它并为你加载资源。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" target="_blank">Service Worker</a>

Service Worker 本可以在离线支持部分提及，但它确实值得拥有自己的一节。Service Worker 提供了一种编程方式来缓存应用资源，无论是 JavaScript 文件还是来自 HTTP 请求的 JSON 数据。编程式 API 允许开发者决定如何处理缓存，并提供了比其他选项更灵活的体验。
