---
title: Progressive Web Apps in React
sidebar_label: Progressive Web Apps
---

<head>
  <title>使用 React 创建渐进式 Web 应用 (PWA) - Ionic Framework</title>
  <meta
    name="description"
    content="使用 Ionic 在 React 中创建渐进式 Web 应用。阅读我们的 React PWA 文档，了解如何制作 React PWA。"
  />
</head>

<LegacyAnchor id="making-your-react-app-a-pwa-with-vite" />

## 使用 Vite 将你的 React 应用转换为 PWA

渐进式 Web 应用（PWA）的两个主要要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web 应用清单</a>。虽然可以手动将这两项添加到应用中，但我们建议使用 [Vite PWA 插件](https://vite-pwa-org.netlify.app/) 来实现。

首先，安装 `vite-plugin-pwa` 包：

```shell
npm install -D vite-plugin-pwa
```

接下来，更新你的 `vite.config.js` 或 `vite.config.ts` 文件并添加 `vite-plugin-pwa`：

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
});
```

这个最小的配置允许你的应用在构建时生成 Web 应用清单和 Service Worker。

有关配置 Vite PWA 插件的更多信息，请参阅 [Vite PWA "入门"指南](https://vite-pwa-org.netlify.app/guide/)。

有关如何部署 PWA 的信息，请参阅 [Vite PWA "部署"指南](https://vite-pwa-org.netlify.app/deployment/)。

## 使用 Create React App 将你的 React 应用转换为 PWA

:::note
自 Ionic CLI v7 起，Ionic React 初始项目已改用 Vite 而非 Create React App。Vite 相关说明请参阅 [使用 Vite 将你的 React 应用转换为 PWA](#making-your-react-app-a-pwa-with-vite)。
:::

渐进式 Web 应用（PWA）的两个主要要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web 应用清单</a>。虽然可以手动将这两项添加到应用中，但 Create React App (CRA) 和 Ionic CLI 提供的基础项目已经包含了这些。

在你的应用的 `index.ts` 中，有一个对 `serviceWorker.unregister()` 函数的调用。CRA 提供的基础功能中 Service Worker 是可选功能，因此需要手动启用。要启用，请调用 `serviceWorker.register()`。

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

// 如果你希望应用离线工作并加载更快，可以将下面的
// unregister() 改为 register()。请注意这会有一些注意事项。
// 关于 Service Worker 的更多信息：https://cra.link/PWA
serviceWorkerRegistration.register();
```

添加此包后，运行 `ionic build`，`build` 目录将准备好作为 PWA 部署。

:::note
默认情况下，React 应用包使用 Ionic 徽标作为应用图标。请务必更新清单以使用正确的应用名称并替换图标。
:::

:::note
Service Worker 和许多 JavaScript API（例如地理位置）等功能要求应用在安全上下文中托管。通过托管服务部署应用时，请注意需要 HTTPS 才能充分利用 Service Worker。
:::

### Service Worker 配置

默认情况下，CRA/React Scripts 带有基于 [Workbox 的 Webpack 插件](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) 预配置的 Service Worker 设置。这采用了缓存优先策略，意味着你的应用将从缓存加载，即使网络返回了应用的新版本。

由于 CRA/React Scripts 的性质，此配置是 React Scripts 内部的，这意味着如果不从 React Scripts 中弹出，就无法自定义。目前，Ionic CLI 不支持弹出的 React 应用，因此如果采取此操作，你需要使用 npm/yarn 脚本而不是 Ionic CLI。

### 部署

#### Firebase

Firebase 托管为渐进式 Web 应用提供了诸多优势，包括借助 CDN 实现的快速响应时间、默认启用的 HTTPS 以及对 [HTTP2 推送](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html) 的支持。

首先，如果尚未创建，请在 Firebase 中 [创建项目](https://console.firebase.google.com)。

接下来，在终端中安装 Firebase CLI：

```shell
npm install -g firebase-tools
```

:::note
如果你是首次使用 firebase-tools，请使用 `firebase login` 命令登录你的 Google 账户。
:::

安装 Firebase CLI 后，在你的 Ionic 项目目录中运行 `firebase init`。CLI 会提示：

**"Which Firebase CLI features do you want to set up for this folder?"** 选择 "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys"。

创建一个新的 Firebase 项目或选择一个现有项目。

**"Select a default Firebase project for this directory:"** 选择你在 Firebase 网站上创建的项目。

**"What do you want to use as your public directory?"** 输入 "build"。

:::note
回答下一个问题将确保应用中的路由、硬重载和深度链接正常工作：
:::

**"Configure as a single-page app (rewrite all urls to /index.html)?"** 输入 "Yes"。

**"File build/index.html already exists. Overwrite?"** 输入 "No"。

**"Set up automatic builds and deploys with Github?"** 输入 "Yes"。

**"For which GitHub repository would you like to set up a Github Workflow?"** 输入你的项目名称。

**"Set up the workflow to run a build script before every deploy?"** 输入 "Yes"。

**"What script should be run before every deploy?"** 输入 `npm ci && npm run build`。

**"Set up automatic deployment to your sites live channel when a PR is merged?"** 输入 "Yes"。

**"What is the name of the get hooked branch associated with your sites live channel?"** 输入你项目的主分支名称。

此时会生成一个 `firebase.json` 配置文件，用于配置应用的部署。

最后需要确保正确设置缓存头。为此，向 `firebase.json` 文件添加一个 `headers` 片段。完整的 `firebase.json` 如下所示：

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