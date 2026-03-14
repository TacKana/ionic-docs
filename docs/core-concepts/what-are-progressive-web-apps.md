---
sidebar_label: 什么是渐进式 Web 应用？
title: 渐进式 Web 应用程序
---

<head>
  <title>渐进式 Web 应用程序：什么是 PWA - Ionic 文档</title>
  <meta
    name="description"
    content="什么是 PWA？渐进式 Web 应用程序利用现代网络能力提供类应用体验。阅读我们的核心概念文档了解更多。"
  />
</head>

<!-- 此处为目录 -->

### 更出色的网络体验

渐进式 Web 应用（PWA）是利用现代网络能力为用户提供类应用体验的 Web 应用。这些应用满足特定要求（见下文），部署到服务器，可通过 URL 访问，并能被搜索引擎索引。

这可以与 [Capacitor](https://capacitorjs.com) 结合使用，为所有用户提供多平台部署方案。您可以将应用部署为 PWA 和原生应用，同时利用两种渠道的优势。

Ionic 不仅能让您将应用发布到应用商店，还能作为 PWA 部署到移动网络。

### 核心要求

要被视为渐进式 Web 应用，您的应用必须满足以下条件：

- 渐进增强 - 适用于所有用户，无论选择何种浏览器，因为渐进增强是其核心原则。

- 响应式设计 - 适配任何屏幕尺寸：桌面端、移动端、平板或未来设备。

- 连接无关性 - 通过 Service Worker 实现离线运行或在低质量网络中工作。

- 类应用体验 - 采用应用壳（app-shell）模式，提供应用风格的导航与交互。

- 持续更新 - 借助 Service Worker 更新机制始终保持最新状态。

- 安全可靠 - 通过 HTTPS 提供服务，防止窃听并确保内容未被篡改。

- 易于发现 - 凭借 W3C 清单和 Service Worker 注册范围，可被识别为“应用程序”，便于搜索引擎收录。

- 可重新互动 - 通过推送通知等功能简化用户重新互动流程。

- 可安装性 - 允许用户将最常用的应用“保留”在主屏幕，无需经过应用商店的繁琐流程。

- 可链接分享 - 可通过 URL 轻松分享，无需复杂安装过程。

<!-- cspell:disable -->

<em>
  <a href="https://addyosmani.com/blog/getting-started-with-progressive-web-apps/" target="_blank">
    Addy Osmani：渐进式 Web 应用
  </a>
</em>

<!-- cspell:enable -->

虽然要求很多，但对于 Ionic 应用而言可归纳为几个关键点：

#### 离线支持

应用应能在离线状态下运行。无论是显示恰当的“离线”提示信息，还是缓存应用数据以供显示。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank">Web 应用清单</a>

应用清单文件应描述应用所需的资源，包括显示名称、图标以及启动画面。如果在 index.html 中链接清单文件，浏览器会自动检测并加载这些资源。

#### <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" target="_blank">Service Worker</a>

Service Worker 本可归入离线支持部分，但其重要性值得单独说明。它提供了以编程方式缓存应用资源的能力，无论是 JavaScript 文件还是 HTTP 请求的 JSON 数据。这种编程式 API 让开发者能够自主决定缓存策略，相比其他方案提供了更灵活的体验。