---
title: 渐进式 Web 应用
sidebar_label: 什么是 PWA？
---

# 渐进式 Web 应用

<!-- TOC goes here -->

### 更好体验的 Web

渐进式 Web 应用（PWA）是一种使用现代 Web 能力为用户提供类似应用体验的 Web 应用。
这些应用满足特定要求（见下文），部署到服务器，通过 URL 访问，并被搜索引擎索引。

这可以与 [Capacitor](https://capacitorjs.com) 配合使用，为所有用户提供多个部署目标。
您可以将应用同时部署为 PWA 和原生应用，并利用这两个渠道的优势。

Ionic 允许您不仅将应用发布到应用商店，还可以将其作为 PWA 部署到移动 Web。

### 需要什么条件

要被认定为渐进式 Web 应用，您的应用必须满足以下条件：

- **渐进式** - 为每个用户工作，无论浏览器选择如何，因为其核心原则是渐进增强。

- **响应式** - 适应任何形态——桌面、移动、平板或任何未来的设备。

- **连接无关** - 通过 Service Worker 增强，使其能够在离线或低质量网络下工作。

- **类应用** - 使用应用壳模型提供应用风格的导航和交互。

- **新鲜** - 通过 Service Worker 更新过程始终保持在最新状态。

- **安全** - 通过 HTTPS 提供服务以防止窥探，并确保内容未被篡改。

- **可发现** - 由于 W3C 清单和 Service Worker 注册范围，可被识别为"应用程序"，使搜索引擎能够找到它们。

- **可重新参与** - 通过推送通知等功能使重新参与变得容易。

- **可安装** - 允许用户将他们最常用的应用"保留"在主屏幕上，无需应用商店的麻烦。

- **可链接** - 通过 URL 轻松分享，无需复杂的安装。

<!-- cspell:disable -->

<em>
  <a href="https://addyosmani.com/blog/getting-started-with-progressive-web-apps/" target="_blank">
    Addy Osmani：渐进式 Web 应用
  </a>
</em>

<!-- cspell:enable -->

这里有很多内容，但对于 Ionic 应用来说，归结为以下几点。

#### 离线支持

应用应该能够在离线状态下工作。无论是显示适当的"离线"消息，还是缓存应用数据以供显示。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank">Web 应用清单</a>

应用清单文件应描述您的应用所需的资源。这包括应用的显示名称、图标以及启动屏幕。如果您在 `index.html` 中链接到清单文件，浏览器会检测到它并为您加载资源。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" target="_blank">Service Worker</a>

Service Worker 本可以在离线支持中提及，但它确实值得单独一节。Service Worker 提供了一种程序化方式来缓存应用资源。无论是 JavaScript 文件还是来自 HTTP 请求的 JSON 数据。这个程序化 API 允许开发者决定如何处理缓存，并提供了比其他选项更灵活的体验。
