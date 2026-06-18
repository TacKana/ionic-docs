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

## 使用 Vite 将您的 React 应用变成 PWA

PWA 的两个主要要求是<a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">服务工作线程（Service Worker）</a>和<a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web 应用清单（Web Application Manifest）</a>。虽然可以手动将这两者添加到应用中，但我们建议使用 [Vite PWA 插件](https://vite-pwa-org.netlify.app/)。

首先，安装 `vite-plugin-pwa` 包：

```shell
npm install -D vite-plugin-pwa
```

接下来，更新您的 `vite.config.js` 或 `vite.config.ts` 文件，添加 `vite-plugin-pwa`：

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
});
```

这个最小配置允许您的应用在构建时生成 Web 应用清单和服务工作线程。

有关配置 Vite PWA 插件的更多信息，请参阅 [Vite PWA "入门"指南](https://vite-pwa-org.netlify.app/guide/)。

关于如何部署您的 PWA，请参阅 [Vite PWA "部署"指南](https://vite-pwa-org.netlify.app/deployment/)。

## 使用 Create React App 将您的 React 应用变成 PWA

:::note
自 Ionic CLI v7 起，Ionic React 启动应用使用 Vite 而不是 Create React App。有关 Vite 的说明，请参阅[使用 Vite 将您的 React 应用变成 PWA](#使用-vite-将您的-react-应用变成-pwa)。
:::

PWA 的两个主要要求是<a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">服务工作线程（Service Worker）</a>和<a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web 应用清单（Web Application Manifest）</a>。虽然可以手动将这两者添加到应用中，但来自 Create React App (CRA) 和 Ionic CLI 的基础项目已经提供了这些。

在您应用的 `index.ts` 中，有一个对 `serviceWorker.unregister()` 函数的调用。CRA 提供的基础项目将服务工作线程作为可选功能，因此需要启用它。要启用，请调用 `serviceWorker.register()`。

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

// 如果您希望应用离线工作并加载更快，可以将
// unregister() 改为 register()。请注意这有一些陷阱。
// 了解有关服务工作线程的更多信息：https://cra.link/PWA
serviceWorkerRegistration.register();
```

添加此包后，运行 `ionic build`，`build` 目录将准备好部署为 PWA。

:::note
默认情况下，React 应用包附带 Ionic 徽标作为应用图标。请确保更新清单以使用正确的应用名称并替换图标。
:::

:::note
服务工作线程和许多 JavaScript API（例如 geolocation）等功能要求应用托管在安全上下文中。通过托管服务部署应用时，请注意需要 HTTPS 才能充分利用服务工作线程。
:::

### 服务工作线程配置

默认情况下，CRA/React Scripts 自带一个基于 [Workbox 的 Webpack 插件](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)的预配置服务工作线程设置。这使用了缓存优先策略，意味着即使网络返回了更新版本的应用，您的应用也会从缓存中加载。

由于 CRA/React Scripts 的特性，此配置是 React Scripts 内部的，这意味着如果不从 React Scripts 弹出（eject），就无法自定义。目前，Ionic CLI 不支持弹出的 React 应用，因此如果采取此操作，您将需要使用 npm/yarn 脚本代替 Ionic CLI。

### 部署

#### Firebase

Firebase 托管为渐进式 Web 应用提供了许多好处，包括得益于 CDN 的快速响应时间、默认启用的 HTTPS 以及对 [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html) 的支持。

首先，如果尚未创建，在 Firebase 中[创建项目](https://console.firebase.google.com)。

接下来，在终端中安装 Firebase CLI：

```shell
npm install -g firebase-tools
```

:::note
如果这是您第一次使用 firebase-tools，请使用 `firebase login` 命令登录您的 Google 账户。
:::

安装 Firebase CLI 后，在您的 Ionic 项目中运行 `firebase init`。CLI 会提示：

**"您想为此文件夹设置哪些 Firebase CLI 功能？"** 选择 "Hosting：配置 Firebase Hosting 文件并（可选）设置 GitHub Action 部署"。

创建一个新的 Firebase 项目或选择一个现有项目。

**"为此目录选择默认的 Firebase 项目："** 选择您在 Firebase 网站上创建的项目。

**"您想将什么作为您的公共目录？"** 输入 "dist"。

:::note
回答下一个问题将确保路由、硬刷新和深度链接在应用中正常工作：
:::

**"配置为单页应用（将所有 url 重写到 /index.html）？"** 输入 "Yes"。

**"文件 build/index.html 已存在。是否覆盖？"** 输入 "No"。

**"使用 GitHub 设置自动构建和部署？"** 输入 "Yes"。

**"您想为哪个 GitHub 仓库设置 GitHub Workflow？"** 输入您的项目名称。

**"是否设置在每次部署前运行构建脚本的工作流程？"** 输入 "Yes"。

**"每次部署前应运行什么脚本？"** 输入 `npm ci && npm run build`。

**"是否设置合并 PR 时自动部署到您的站点正式通道？"** 输入 "Yes"。

**"与您的站点正式通道关联的 get hooked 分支的名称是什么？"** 输入您项目的主分支名称。

将生成一个 `firebase.json` 配置文件，配置应用进行部署。

最后需要做的是确保缓存头设置正确。为此，在 `firebase.json` 文件中添加一个 `headers` 代码片段。完整的 `firebase.json` 如下所示：

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
