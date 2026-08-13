---
sidebar_label: 什么是 PWA？
title: 渐进式 Web 应用
---

<head>
  <title>渐进式 Web 应用：什么是 PWA - Ionic 文档</title>
  <meta
    name="description"
    content="什么是 PWA？渐进式 Web 应用使用现代 Web 能力提供类似应用的用户体验。阅读我们的核心概念文档了解更多。"
  />
</head>

{/* 目录在此处 */}

### 增强的 Web...但更好

渐进式 Web 应用 (PWA) 是一种使用现代 Web 能力为用户提供类似应用体验的 Web 应用。
这些应用满足特定要求（见下文），部署到服务器上，可通过 URL 访问，并且能被搜索引擎索引。

这可以与 [Capacitor](https://capacitorjs.com) 协同工作，为所有用户提供多个部署目标。
您可以将应用同时部署为 PWA 和原生应用，并利用两个渠道的优势。

Ionic 允许您不仅将应用发布到应用商店，还可以作为 PWA 部署到移动 Web。

### 要求

要被视为渐进式 Web 应用，您的应用必须：

- **渐进式** - 适用于每个用户，无论其浏览器选择如何，因为它们是构建在渐进增强这一核心原则之上的。

- **响应式** - 适应任何形态的设备：桌面、移动、平板或任何未来的设备。

- **连接无关** - 通过 Service Worker 增强，可以离线或在低质量网络下工作。

- **类似应用** - 使用应用壳模型提供应用风格的导航和交互。

- **常新** - 通过 Service Worker 更新过程始终保持最新状态。

- **安全** - 通过 HTTPS 提供服务以防止窥探并确保内容未被篡改。

- **可发现** - 通过 W3C manifest 和 Service Worker 注册范围被识别为"应用程序"，使搜索引擎能够找到它们。

- **可重新互动** - 通过推送通知等功能轻松实现重新互动。

- **可安装** - 允许用户将他们最常用的应用"保留"在主屏幕上，无需经过应用商店的繁琐过程。

- **可链接** - 通过 URL 轻松共享，无需复杂的安装。

{/* cspell:disable */}

<em>
  <a href="https://addyosmani.com/blog/getting-started-with-progressive-web-apps/" target="_blank">
    Addy Osmani：渐进式 Web 应用
  </a>
</em>

{/* cspell:enable */}

这里涉及很多内容，但对于 Ionic 应用来说，归结为几个要点。

#### 离线支持

应用应该能够离线工作。无论是显示适当的"离线"消息，还是缓存应用数据以供显示。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank">Web App Manifest</a>

应用 manifest 文件应描述您的应用所需的资源。这包括应用的显示名称、图标以及启动画面。如果您在 index.html 中链接到 manifest 文件，浏览器将检测到它并为您加载资源。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" target="_blank">Service Worker</a>

Service Worker 可以在离线支持中提到，但它确实值得单独说明。Service Worker 提供了一种编程方式来缓存应用资源。无论是 JavaScript 文件还是来自 HTTP 请求的 JSON 数据。编程式 API 允许开发者决定如何处理缓存，并提供比其他选项更灵活的体验。
