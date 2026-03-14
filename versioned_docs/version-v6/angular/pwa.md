---
title: Angular 中的渐进式 Web 应用
sidebar_label: 渐进式 Web 应用
---

<head>
  <title>在 Angular 中制作渐进式 Web 应用 (PWA) - Ionic 教程</title>
  <meta
    name="description"
    content="要使 Angular 应用成为渐进式 Web 应用，两个主要要求是 Service Worker 和 Web Manifest。阅读 Ionic 的 PWA 教程了解更多信息。"
  />
</head>

## 将你的 Angular 应用转换为 PWA

PWA 的两个主要要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>。虽然可以手动将这两者添加到应用中，但 Angular 团队提供了一个 `@angular/pwa` 包来自动完成此过程。

`@angular/pwa` 包会自动为应用添加 Service Worker 和应用清单。
要将此包添加到应用中，请运行：

```shell
ng add @angular/pwa
```

添加此包后，运行 `ionic build --prod`，`www` 目录将准备好作为 PWA 部署。

:::note
默认情况下，`@angular/pwa` 包使用 Angular 徽标作为应用图标。请务必更新清单以使用正确的应用名称并替换图标。
:::

:::note
Service Worker 和许多 JavaScript API（例如地理位置）等功能要求应用在安全上下文中托管。通过托管服务部署应用时，请注意需要 HTTPS 才能充分利用 Service Worker。
:::

## Service Worker 配置

添加 `@angular/pwa` 后，项目根目录将创建一个新的 `ngsw-config.json` 文件。此文件负责配置 Angular 的 Service Worker 机制如何处理缓存资源。默认情况下，将提供以下配置：

```json
{
  "$schema": "./node_modules/@angular/service-worker/config/schema.json",
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": ["/favicon.ico", "/index.html", "/*.css", "/*.js"]
      }
    },
    {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": {
        "files": ["/assets/**", "/*.(eot|svg|cur|jpg|png|webp|gif|otf|ttf|woff|woff2|ani)"]
      }
    }
  ]
}
```

其中有两个部分：一个用于应用特定资源（JS、CSS、HTML），另一个用于应用按需加载的资源。根据你的应用需求，可以自定义这些选项。更详细的指南，请阅读 [Angular 团队的官方指南](https://angular.io/guide/service-worker-config)。

## 部署

### Firebase

Firebase 托管为渐进式 Web 应用提供了许多优势，包括借助 CDN 实现的快速响应时间、默认启用的 HTTPS，以及对 [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html) 的支持。

首先，如果尚未创建，请在 Firebase 中 [创建项目](https://console.firebase.google.com)。

接下来，在终端中安装 Firebase CLI：

```shell
npm install -g firebase-tools
```

:::note
如果是首次使用 firebase-tools，请使用 `firebase login` 命令登录你的 Google 账户。
:::

安装 Firebase CLI 后，在你的 Ionic 项目中运行 `firebase init`。CLI 会提示：

**"Which Firebase CLI features do you want to set up for this folder?"** 选择 "Hosting: Configure and deploy Firebase Hosting sites."

**"Select a default Firebase project for this directory:"** 选择你在 Firebase 网站上创建的项目。

**"What do you want to use as your public directory?"** 输入 "www"。

:::note
正确回答接下来的两个问题将确保应用中的路由、强制刷新和深度链接正常工作：
:::

**"Configure as a single-page app (rewrite all urls to /index.html)?"** 输入 "Yes"。

**"File www/index.html already exists. Overwrite?"** 输入 "No"。

此时会生成一个 `firebase.json` 配置文件，用于配置应用部署。

最后需要确保正确设置了缓存头。为此，请将 `headers` 片段添加到 `firebase.json` 文件中。完整的 `firebase.json` 应如下所示：

```json
{
  "hosting": {
    "public": "www",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "/build/app/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000"
          }
        ]
      },
      {
        "source": "ngsw-worker.js",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "no-cache"
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

完成后，应用将上线运行。