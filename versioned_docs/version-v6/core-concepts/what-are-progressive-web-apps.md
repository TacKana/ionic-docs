---
sidebar_label: 什么是 PWA？
title: 渐进式 Web 应用
---

<head>
  <title>渐进式 Web 应用：什么是 PWA - Ionic 文档</title>
  <meta
    name="description"
    content="什么是 PWA？渐进式 Web 应用利用现代网络能力提供类似原生应用的体验。阅读我们的核心概念文档以了解更多。"
  />
</head>

<!-- 目录放在这里 -->

### 更好的网络体验

渐进式 Web 应用（PWA）是一种利用现代网络能力为用户提供类似原生应用体验的 Web 应用。
这类应用满足特定要求（见下文），部署在服务器上，可通过 URL 访问，并能被搜索引擎索引。

它可以与 [Capacitor](https://capacitorjs.com) 结合使用，为所有用户提供多种部署目标。
您可以将应用部署为 PWA 或原生应用，并充分利用这两种渠道。

Ionic 不仅允许您将应用发布到应用商店，还可以作为 PWA 部署到移动网络。

### 核心要求

要成为一个合格的渐进式 Web 应用，您的应用必须满足以下条件：

- **渐进式** - 无论用户选择何种浏览器都能正常工作，因为渐进增强是其核心设计原则。

- **响应式** - 适配任何设备形态，无论是桌面、移动设备、平板还是未来可能出现的新设备。

- **网络连接独立** - 通过 Service Worker 增强，可在离线或低质量网络环境下运行。

- **类应用体验** - 采用应用外壳模型，提供类似原生应用的导航和交互方式。

- **保持最新** - 通过 Service Worker 更新机制确保应用始终处于最新状态。

- **安全** - 通过 HTTPS 提供服务，防止信息窃取，并确保内容未被篡改。

- **可发现** - 借助 W3C 清单和 Service Worker 注册范围，可被搜索引擎识别为“应用程序”。

- **可重新吸引用户** - 通过推送通知等功能轻松实现用户重新互动。

- **可安装** - 允许用户将最有用的应用“保留”在主屏幕上，无需通过应用商店的繁琐流程。

- **可链接** - 通过 URL 轻松分享，无需复杂安装过程。

<!-- cspell:disable -->

<em>
  <a href="https://addyosmani.com/blog/getting-started-with-progressive-web-apps/" target="_blank">
    Addy Osmani: Progressive web apps
  </a>
</em>

<!-- cspell:enable -->

虽然要求很多，但对于 Ionic 应用来说，可以归结为几个关键点。

#### 离线支持

应用应能在离线状态下工作。无论是显示适当的“离线”提示信息，还是缓存应用数据以供显示。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank">Web 应用清单</a>

应用清单文件应描述应用所需的资源。这包括应用的显示名称、图标以及启动画面。如果在 index.html 中链接清单文件，浏览器会自动检测并加载这些资源。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" target="_blank">Service Worker</a>

Service Worker 本可归入离线支持部分，但它确实值得单独讨论。Service Worker 提供了一种以编程方式缓存应用资源的机制。无论是 JavaScript 文件还是 HTTP 请求的 JSON 数据。其编程 API 允许开发者决定如何处理缓存，相比其他方案提供了更灵活的体验。