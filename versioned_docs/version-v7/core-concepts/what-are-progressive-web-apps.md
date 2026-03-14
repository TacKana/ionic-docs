---
sidebar_label: 什么是 PWA？
title: 渐进式 Web 应用
---

<head>
  <title>渐进式 Web 应用：什么是 PWA - Ionic 文档</title>
  <meta
    name="description"
    content="什么是 PWA？渐进式 Web 应用利用现代 Web 能力提供类似应用的体验。阅读我们的核心概念文档了解更多。"
  />
</head>

<!-- 目录放在这里 -->

### Web...但更出色

渐进式 Web 应用（Progressive Web App，简称 PWA）是一种利用现代 Web 能力为用户提供类似原生应用体验的 Web 应用。这类应用符合特定要求（见下文），部署在服务器上，可通过 URL 访问，并能被搜索引擎索引。

它可以与 [Capacitor](https://capacitorjs.com) 协同工作，为所有用户提供多种部署目标。你可以将你的应用同时部署为 PWA 和原生应用，充分利用两种渠道的优势。

使用 Ionic，你不仅可以向应用商店提交应用，还能作为 PWA 部署到移动 Web 上。

### 必要条件

要被视为渐进式 Web 应用，你的应用必须满足以下条件：

- **渐进式** - 适用于所有用户，无论选择何种浏览器，因为它们以渐进式增强为核心原则构建。
- **响应式** - 适应任何形式，无论是桌面设备、手机、平板还是未来的新设备。
- **连接无关** - 利用 Service Worker 增强，可在离线或低质量网络下工作。
- **类似应用** - 采用应用外壳（app-shell）模型，提供应用风格的导航与交互。
- **保持最新** - 借助 Service Worker 的更新流程，始终保持最新状态。
- **安全** - 通过 HTTPS 提供服务，防止窃听并确保内容未被篡改。
- **可发现** - 得益于 W3C 清单（manifest）和 Service Worker 注册范围，可被识别为“应用”，允许搜索引擎发现它们。
- **可重新参与** - 通过推送通知等功能，轻松实现用户重新参与。
- **可安装** - 允许用户将他们认为最有用的应用“保留”在主屏幕上，无需经过应用商店的繁琐流程。
- **可链接** - 可通过 URL 轻松分享，无需复杂安装。

<!-- cspell:disable -->

<em>
  <a href="https://addyosmani.com/blog/getting-started-with-progressive-web-apps/" target="_blank">
    Addy Osmani：渐进式 Web 应用
  </a>
</em>

<!-- cspell:enable -->

内容很多，但对于 Ionic 应用来说，可以归结为以下几点。

#### 离线支持

应用应能在离线状态下工作。无论是显示适当的“离线”消息，还是为显示目的缓存应用数据。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank">Web 应用清单</a>

应用清单文件应描述你的应用所需的资源。这包括应用的显示名称、图标以及启动画面。如果你在 index.html 中链接了清单文件，浏览器将检测到它并为你加载资源。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" target="_blank">Service Worker</a>

Service Worker 本可以在离线支持部分提及，但它确实值得单独讨论。Service Worker 提供了一种以编程方式缓存应用资源的方法，无论是 JavaScript 文件还是来自 HTTP 请求的 JSON 数据。其编程式 API 允许开发者决定如何处理缓存，并提供了比其他选项更灵活的体验。