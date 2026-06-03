---
title: 渐进式 Web 应用
sidebar_label: 渐进式 Web 应用
---

# Angular 中的渐进式 Web 应用

## 将 Angular 应用变成 PWA

PWA 的两个主要要求是<a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web 应用清单</a>。虽然可以手动将这两者添加到应用中，但 Angular 团队提供了一个 `@angular/pwa` 包，可用于自动化此过程。

`@angular/pwa` 包将自动向应用添加 service worker 和应用清单。要将其添加到应用中，请运行：

```shell
ng add @angular/pwa
```

添加此包后，运行 `ionic build --prod`，`www` 目录就可以作为 PWA 部署了。

:::note
默认情况下，`@angular/pwa` 包使用 Angular logo 作为应用图标。请务必更新清单以使用正确的应用名称并替换图标。
:::

:::note
Service Worker 和许多 JavaScript API（例如 geolocation）等功能要求应用在安全上下文中托管。通过托管服务部署应用时，请注意需要使用 HTTPS 才能充分利用 Service Worker。
:::

## Service Worker 配置

添加 `@angular/pwa` 后，将在项目根目录创建一个新的 `ngsw-config.json` 文件。该文件负责配置 Angular 的 service worker 机制如何处理缓存资源。默认情况下，将提供以下内容：

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

这里有两个部分，一个用于应用特定资源（JS、CSS、HTML），另一个用于应用按需加载的资源。根据您的应用，可以自定义这些选项。有关更详细的指南，请阅读[Angular 团队的官方指南](https://angular.io/guide/service-worker-config)。

## 部署

### Firebase

Firebase 托管为渐进式 Web 应用提供了许多好处，包括得益于 CDN 的快速响应时间、默认启用 HTTPS 以及对 [HTTP2 推送](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html)的支持。

首先，如果尚未创建，请在 Firebase 中[创建项目](https://console.firebase.google.com)。

接下来，在终端中安装 Firebase CLI：

```shell
npm install -g firebase-tools
```

:::note
如果这是您第一次使用 firebase-tools，请使用 `firebase login` 命令登录您的 Google 账户。
:::

安装 Firebase CLI 后，在 Ionic 项目中运行 `firebase init`。CLI 会提示：

**"Which Firebase CLI features do you want to set up for this folder?"** 选择 "Hosting: Configure and deploy Firebase Hosting sites."

**"Select a default Firebase project for this directory:"** 选择您在 Firebase 网站上创建的项目。

**"What do you want to use as your public directory?"** 输入 "www"。

:::note
回答以下两个问题将确保路由、硬刷新和深层链接在应用中正常工作：
:::

**Configure as a single-page app (rewrite all urls to /index.html)?"** 输入 "Yes"。

**"File www/index.html already exists. Overwrite?"** 输入 "No"。

将生成一个 `firebase.json` 配置文件，配置应用进行部署。

最后需要做的是确保缓存头设置正确。为此，请在 `firebase.json` 文件中添加一个 `headers` 片段。完整的 `firebase.json` 如下所示：

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

完成后，应用将上线。
