---
title: React 中的渐进式 Web 应用
sidebar_label: 渐进式 Web 应用
---

<head>
  <title>在 React 中创建渐进式 Web 应用（PWA） - Ionic Framework</title>
  <meta
    name="description"
    content="使用 Ionic 在 React 中创建渐进式 Web 应用。阅读我们的 React PWA 文档，了解如何使用 Ionic CLI 制作 React PWA。"
  />
</head>

## 将您的 React 应用制作成 PWA

PWA 的两个主要要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>。虽然可以手动将这两者添加到应用中，但来自 Create React App（CRA）和 Ionic CLI 的基础项目已经提供了这些。

在应用的 `index.ts` 中，有一个对 `serviceWorker.unregister()` 函数的调用。CRA 提供的基础将 service worker 作为可选功能，因此需要启用它。要启用它，请调用 `serviceWorker.register()`。

```ts
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 如果您希望应用离线工作并加快加载速度，可以将下面的
// unregister() 改为 register()。注意这有一些潜在问题。
// 了解更多关于 service worker 的信息：https://cra.link/PWA
serviceWorkerRegistration.register();
```

添加此包后，运行 `ionic build`，`build` 目录就可以作为 PWA 部署了。

:::note
默认情况下，react 应用包附带 Ionic 标志作为应用图标。请务必更新 manifest 以使用正确的应用名称并替换图标。
:::

:::note
Service Worker 和许多 JavaScript API（如 geolocation）等功能要求应用托管在安全上下文中。通过托管服务部署应用时，请注意需要 HTTPS 才能充分利用 Service Worker。
:::

## Service Worker 配置

默认情况下，CRA/React Scripts 附带基于 [Workbox 的 Webpack 插件](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) 的预配置 Service Worker 设置。它采用缓存优先策略，这意味着即使网络返回了更新版本的应用，您的应用也会从缓存中加载。

由于 CRA/React Scripts 的特性，其配置是 React Scripts 内部的，这意味着除非从 React Scripts 弹出（eject），否则无法自定义。目前，Ionic CLI 不支持弹出的 React 应用，因此如果执行此操作，您需要使用 npm/yarn 脚本代替 Ionic CLI。

## 部署

### Firebase

Firebase 托管为渐进式 Web 应用提供了许多优势，包括得益于 CDN 的快速响应时间、默认启用 HTTPS 以及对 [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html) 的支持。

首先，如果还没有，请在 Firebase 中[创建项目](https://console.firebase.google.com)。

接下来，在终端中安装 Firebase CLI：

```shell
npm install -g firebase-tools
```

安装 Firebase CLI 后，在 Ionic 项目中运行 `firebase init`。CLI 会提示：

**"您想为此文件夹设置哪些 Firebase CLI 功能？"** 选择 "Hosting: Configure and deploy Firebase Hosting sites."

**"为此目录选择一个默认 Firebase 项目："** 选择您在 Firebase 网站上创建的项目。

**"您想用什么作为公共目录？"** 输入 "build"。

:::note
回答接下来的两个问题将确保应用中的路由、硬重载和深度链接正常工作：
:::

**"配置为单页应用（将所有 url 重写到 /index.html）？"** 输入 "Yes"。

**"文件 build/index.html 已存在。是否覆盖？"** 输入 "No"。

将生成一个 `firebase.json` 配置文件，配置应用以便部署。

最后需要确保正确设置缓存头。为此，在 `firebase.json` 文件中添加一个 `headers` 片段。完整的 `firebase.json` 如下所示：

```json
{
  "hosting": {
    "public": "build",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

有关 `firebase.json` 属性的更多信息，请参阅 [Firebase 文档](https://firebase.google.com/docs/hosting/full-config#section-firebase-json)。

接下来，通过运行以下命令构建应用的优化版本：

```shell
ionic build --prod
```

最后，通过运行以下命令部署应用：

```shell
firebase deploy
```

完成后，应用将上线。
