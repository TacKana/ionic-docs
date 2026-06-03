---
title: React 中的渐进式 Web 应用
sidebar_label: 渐进式 Web 应用
---

<head>
  <title>在 React 中创建渐进式 Web 应用 (PWA) - Ionic Framework</title>
  <meta
    name="description"
    content="使用 Ionic 在 React 中创建渐进式 Web 应用。阅读我们的 React PWA 文档，了解如何制作 React PWA。"
  />
</head>

## 使用 Vite 将 React 应用打造成 PWA

PWA 的两个主要要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web 应用清单</a>。虽然可以手动将这两者添加到应用中，但我们建议使用 [Vite PWA 插件](https://vite-pwa-org.netlify.app/)来代替。

首先，安装 `vite-plugin-pwa` 包：

```shell
npm install -D vite-plugin-pwa
```

接下来，更新你的 `vite.config.js` 或 `vite.config.ts` 文件，添加 `vite-plugin-pwa`：

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
});
```

这个最小配置允许你的应用在构建时生成 Web 应用清单和 Service Worker。

有关配置 Vite PWA 插件的更多信息，请参阅 [Vite PWA "入门"指南](https://vite-pwa-org.netlify.app/guide/)。

有关如何部署你的 PWA 的信息，请参阅 [Vite PWA "部署"指南](https://vite-pwa-org.netlify.app/deployment/)。

## 使用 Create React App 将 React 应用打造成 PWA

:::note
自 Ionic CLI v7 起，Ionic React 启动应用已使用 Vite 代替 Create React App。请参阅[使用 Vite 将 React 应用打造成 PWA](#使用-vite-将-react-应用打造成-pwa) 获取 Vite 的使用说明。
:::

PWA 的两个主要要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web 应用清单</a>。虽然可以手动将这两者添加到应用中，但 Create React App (CRA) 和 Ionic CLI 的基础项目已经提供了这些。

在应用的 `index.ts` 中，有一个对 `serviceWorker.unregister()` 函数的调用。CRA 提供的基础将 Service Worker 作为可选功能，因此需要启用它。要启用，请调用 `serviceWorker.register()`。

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

// 如果你希望你的应用离线工作并更快加载，可以将下面的
// unregister() 改为 register()。注意这有一些陷阱。
// 了解更多关于 Service Worker 的信息：https://cra.link/PWA
serviceWorkerRegistration.register();
```

添加此包后，运行 `ionic build`，`build` 目录将准备好作为 PWA 部署。

:::note
默认情况下，React 应用包附带 Ionic 徽标作为应用图标。请务必更新清单以使用正确的应用名称并替换图标。
:::

:::note
Service Worker 和许多 JavaScript API（如地理定位）等功能要求应用在安全上下文中托管。通过托管服务部署应用时，请注意需要使用 HTTPS 才能充分利用 Service Worker。
:::

### Service Worker 配置

默认情况下，CRA/React Scripts 附带基于 [Workbox 的 Webpack 插件](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)的预配置 Service Worker 设置。它使用缓存优先策略，意味着你的应用将从缓存加载，即使网络返回了更新版本的应用。

由于 CRA/React Scripts 的特性，其配置是 React Scripts 内部的，意味着如果不从 React Scripts 弹出（eject）就无法自定义。目前，Ionic CLI 不支持弹出的 React 应用，因此如果执行此操作，你将需要使用 npm/yarn 脚本代替 Ionic CLI。

### 部署

#### Firebase

Firebase 托管为渐进式 Web 应用提供了许多好处，包括 CDN 带来的快速响应时间、默认启用的 HTTPS 以及对 [HTTP2 推送](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html)的支持。

首先，如果尚未准备好，请在 Firebase 中[创建项目](https://console.firebase.google.com)。

接下来，在终端中安装 Firebase CLI：

```shell
npm install -g firebase-tools
```

:::note
如果这是你第一次使用 firebase-tools，请使用 `firebase login` 命令登录你的 Google 帐户。
:::

安装 Firebase CLI 后，在你的 Ionic 项目中运行 `firebase init`。CLI 会提示：

**"你想为此文件夹设置哪些 Firebase CLI 功能？"** 选择 "Hosting: 配置 Firebase Hosting 文件并（可选）设置 GitHub Action 部署"。

创建一个新的 Firebase 项目或选择一个现有项目。

**"为此目录选择默认的 Firebase 项目："** 选择你在 Firebase 网站上创建的项目。

**"你想用什么作为公共目录？"** 输入 "build"。

:::note
回答下一个问题将确保路由、硬刷新和深度链接在应用中正常工作：
:::

**"配置为单页应用（将所有 URL 重写到 /index.html）？"** 输入 "Yes"。

**"文件 build/index.html 已存在。是否覆盖？"** 输入 "No"。

**"设置与 Github 的自动构建和部署？"** 输入 "Yes"。

**"你想为哪个 GitHub 仓库设置 GitHub Workflow？"** 输入你的项目名称。

**"设置工作流以在每次部署前运行构建脚本？"** 输入 "Yes"。

**"每次部署前应运行什么脚本？"** 输入 `npm ci && npm run build`。

**"当 PR 合并时，是否设置自动部署到你的网站正式频道？"** 输入 "Yes"。

**"与你的网站正式频道关联的 get hooked 分支名称是什么？"** 输入你项目的主分支名称。

将生成一个 `firebase.json` 配置文件，配置应用以便部署。

最后需要做的是确保缓存头设置正确。为此，在 `firebase.json` 文件中添加一个 `headers` 片段。完整的 `firebase.json` 如下所示：

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
