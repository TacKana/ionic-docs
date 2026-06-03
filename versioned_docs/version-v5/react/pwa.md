---
title: 渐进式 Web 应用
sidebar_label: 渐进式 Web 应用
---

# React 中的渐进式 Web 应用

## 将您的 React 应用变成 PWA

PWA 的两个主要要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>。虽然可以手动将这两者添加到应用中，但来自 Create React App（CRA）和 Ionic CLI 的基础项目已经提供了这些。

在您应用的 `index.ts` 中，有一个对 `serviceWorker.unregister()` 函数的调用。默认的 CRA 将 Service Worker 作为可选功能提供，因此需要启用它。要启用，请调用 `serviceWorker.register()`。

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// 如果您希望应用离线工作并加载更快，可以将下方的
// unregister() 改为 register()。请注意这有一些注意事项。
// 了解更多关于 Service Worker 的信息：https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
```

添加此程序包后，运行 `ionic build`，`build` 目录就可以作为 PWA 部署了。

:::note
默认情况下，React 应用包附带 Ionic 图标作为应用图标。请务必更新 manifest 以使用正确的应用名称，并替换图标。
:::

:::note
Service Worker 和许多 JavaScript API（如地理定位）等功能要求应用托管在安全上下文中。通过托管服务部署应用时，请注意需要使用 HTTPS 才能充分利用 Service Worker。
:::

## Service Worker 配置

默认情况下，CRA/React Scripts 附带了一个基于 [Workbox 的 Webpack 插件](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)预配置的 Service Worker 设置。这采用了缓存优先策略，意味着您的应用将从缓存中加载，即使网络返回了更新的应用版本也是如此。

由于 CRA/React Scripts 的性质，此配置是 React Scripts 内部的，这意味着除非从 React Scripts 弹出（eject），否则无法自定义。目前，Ionic CLI 不支持弹出的 React 应用，因此如果执行此操作，您需要使用 npm/yarn 脚本而不是 Ionic CLI。

## 部署

### Firebase

Firebase 托管为渐进式 Web 应用提供了许多好处，包括得益于 CDN 的快速响应时间、默认启用 HTTPS 以及对 [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html) 的支持。

首先，如果尚未创建，在 Firebase 中[创建项目](https://console.firebase.google.com)。

接下来，在终端中安装 Firebase CLI：

```shell
npm install -g firebase-tools
```

安装 Firebase CLI 后，在您的 Ionic 项目中运行 `firebase init`。CLI 会提示您：

**"Which Firebase CLI features do you want to set up for this folder?"** 选择 "Hosting: Configure and deploy Firebase Hosting sites."

**"Select a default Firebase project for this directory:"** 选择您在 Firebase 网站上创建的项目。

**"What do you want to use as your public directory?"** 输入 "build"。

:::note
回答接下来的两个问题将确保路由、硬刷新和深度链接在应用中正常工作：
:::

**Configure as a single-page app (rewrite all urls to /index.html)?"** 输入 "Yes"。

**"File build/index.html already exists. Overwrite?"** 输入 "No"。

将生成一个 `firebase.json` 配置文件，配置应用以进行部署。

最后需要做的事情是确保缓存头设置正确。为此，请在 `firebase.json` 文件中添加一个 `headers` 片段。完整的 `firebase.json` 如下所示：

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
