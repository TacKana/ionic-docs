---
title: Progressive Web Apps in React
sidebar_label: Progressive Web Apps
---

<head>
  <title>使用 React 创建渐进式 Web 应用 - Ionic Framework</title>
  <meta
    name="description"
    content="使用 Ionic 在 React 中创建渐进式 Web 应用。阅读我们的 React PWA 文档，了解如何使用 Ionic CLI 制作 React PWA。"
  />
</head>

## 将你的 React 应用转换为 PWA

PWA 的两个核心要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>。虽然可以手动将这两项添加到应用中，但 Create React App (CRA) 和 Ionic CLI 提供的基础项目已经包含了这些功能。

在你的应用 `index.ts` 文件中，有一个 `serviceWorker.unregister()` 函数调用。CRA 默认将 Service Worker 设为可选功能，因此需要手动启用。要启用它，请调用 `serviceWorker.register()`。

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

// 如果你希望应用支持离线访问并更快加载，可以将下面的
// unregister() 改为 register()。请注意这可能会带来一些问题。
// 了解更多关于 Service Worker 的信息：https://cra.link/PWA
serviceWorkerRegistration.register();
```

添加此包后，运行 `ionic build` 命令，`build` 目录将准备好作为 PWA 部署。

:::note
默认情况下，React 应用包会使用 Ionic 徽标作为应用图标。请务必更新 manifest 文件以使用正确的应用名称，并替换图标。
:::

:::note
Service Worker 和许多 JavaScript API（例如地理位置）等功能要求应用在安全上下文中托管。通过托管服务部署应用时，请注意需要 HTTPS 才能充分利用 Service Worker 的优势。
:::

## Service Worker 配置

默认情况下，CRA/React Scripts 提供了一个基于 [Workbox 的 Webpack 插件](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)的预配置 Service Worker 设置。这采用了缓存优先策略，意味着你的应用将从缓存加载，即使网络返回了应用的新版本。

由于 CRA/React Scripts 的特性，其配置是 React Scripts 内部实现的，这意味着如果不脱离 React Scripts（eject）就无法自定义配置。目前，Ionic CLI 不支持已脱离 React Scripts 的 React 应用，因此如果执行此操作，你需要使用 npm/yarn 脚本而非 Ionic CLI。

## 部署

### Firebase

Firebase 托管为渐进式 Web 应用提供了诸多优势，包括借助 CDN 实现的快速响应时间、默认启用的 HTTPS，以及 [HTTP2 推送](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html)支持。

首先，如果尚未创建，请在 Firebase 中[创建项目](https://console.firebase.google.com)。

接下来，在终端中安装 Firebase CLI：

```shell
npm install -g firebase-tools
```

安装 Firebase CLI 后，在你的 Ionic 项目目录中运行 `firebase init`。CLI 会提示：

**"Which Firebase CLI features do you want to set up for this folder?"** 选择 "Hosting: Configure and deploy Firebase Hosting sites."

**"Select a default Firebase project for this directory:"** 选择你在 Firebase 网站上创建的项目。

**"What do you want to use as your public directory?"** 输入 "build"。

:::note
正确回答接下来的两个问题将确保应用中的路由、硬刷新和深度链接正常工作：
:::

**"Configure as a single-page app (rewrite all urls to /index.html)?"** 输入 "Yes"。

**"File build/index.html already exists. Overwrite?"** 输入 "No"。

系统会生成一个 `firebase.json` 配置文件，用于配置应用部署。

最后需要确保正确设置缓存头信息。为此，在 `firebase.json` 文件中添加 `headers` 片段。完整的 `firebase.json` 应如下所示：

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

最后，运行以下命令部署应用：

```shell
firebase deploy
```

完成后，应用即可上线运行。