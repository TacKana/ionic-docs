---
sidebar_label: 什么是 PWA？
title: 渐进式 Web 应用
---

<head>
  <title>渐进式 Web 应用：什么是 PWA - Ionic 文档</title>
  <meta
    name="description"
    content="什么是 PWA？渐进式 Web 应用利用现代 Web 能力提供类似应用的体验。阅读我们的核心概念文档以了解更多信息。"
  />
</head>

### Web 进化，但更出色

渐进式 Web 应用（PWA）是一种利用现代 Web 能力为用户提供类似应用体验的 Web 应用。
这些应用满足特定要求（见下文），部署到服务器上，可通过 URL 访问，并被搜索引擎索引。

这可以与 [Capacitor](https://capacitorjs.com) 协同工作，为所有用户提供多种部署目标。
你可以将应用同时部署为 PWA 和原生应用，充分利用这两个渠道。

Ionic 允许你不仅将应用发布到应用商店，还可以作为 PWA 部署到移动 Web。

### 需要满足的条件

要被视为渐进式 Web 应用，你的应用必须：

- **渐进式** —— 无论用户使用何种浏览器，都能为每个用户工作，因为其核心原则是渐进增强。

- **响应式** —— 适应任何形态的设备，桌面、移动、平板或未来的任何设备。

- **连接无关** —— 通过 Service Worker 增强，支持离线或在低质量网络下工作。

- **类应用** —— 使用应用外壳模型提供应用风格的导航和交互。

- **新鲜** —— 通过 Service Worker 更新过程始终保持最新状态。

- **安全** —— 通过 HTTPS 提供服务，防止窥探并确保内容未被篡改。

- **可发现** —— 通过 W3C 清单和 Service Worker 注册范围被识别为"应用程序"，使搜索引擎能够找到它们。

- **可重新吸引** —— 通过推送通知等功能轻松实现用户再互动。

- **可安装** —— 允许用户将最常用的应用"保留"在主屏幕上，无需经过繁琐的应用商店安装过程。

- **可链接** —— 通过 URL 轻松分享，无需复杂的安装。

{/* cspell:disable */}

<em>
  <a href="https://addyosmani.com/blog/getting-started-with-progressive-web-apps/" target="_blank">
    Addy Osmani：渐进式 Web 应用
  </a>
</em>

{/* cspell:enable */}

内容很多，但对于 Ionic 应用来说，可以归结为以下几个要点。

#### 离线支持

应用应该能够离线工作。无论是显示合适的"离线"消息，还是缓存应用数据以供显示。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank">Web 应用清单</a>

应用清单文件应描述应用所需的资源。这包括应用显示名称、图标以及启动画面。如果在 index.html 中链接到清单文件，浏览器会检测到它并为你加载资源。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" target="_blank">Service Worker</a>

Service Worker 本可以在离线支持中提及，但它确实值得单独讨论。Service Worker 提供了一种编程方式来缓存应用资源，无论是 JavaScript 文件还是来自 HTTP 请求的 JSON 数据。编程式 API 允许开发者决定如何处理缓存，并提供比其他选项更灵活的体验。
