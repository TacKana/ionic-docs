---
title: 在 Angular 中构建渐进式 Web 应用
sidebar_label: 渐进式 Web 应用
---

<head>
  <title>在 Angular 中构建渐进式 Web 应用 (PWA) - Ionic 教程</title>
  <meta
    name="description"
    content="将 Angular 应用转变为渐进式 Web 应用，需要满足两个主要条件：Service Worker 和 Web Manifest。阅读 Ionic 的 PWA 教程以了解更多信息。"
  />
</head>

## 将 Angular 应用转变为 PWA

PWA 的两个主要要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>。虽然可以手动将这两者添加到应用中，但 Angular 团队提供了一个 `@angular/pwa` 包来自动完成此过程。

`@angular/pwa` 包会自动向应用添加 Service Worker 和应用清单。
要将此包添加到应用中，请运行：

```shell
ng add @angular/pwa
```

添加此包后，运行 `ionic build --prod`，`www` 目录即可部署为 PWA。

:::note
默认情况下，`@angular/pwa` 包使用 Angular 徽标作为应用图标。请务必更新清单以使用正确的应用名称，并替换图标。
:::

:::note
Service Workers 和许多 JavaScript API（例如地理位置）等功能要求应用在安全上下文中托管。通过托管服务部署应用时，请注意要充分利用 Service Workers 的功能，需要 HTTPS 支持。
:::

## 配置 Service Worker

添加 `@angular/pwa` 后，会在项目根目录创建一个新的 `ngsw-config.json` 文件。该文件负责配置 Angular 的 Service Worker 机制如何处理缓存资源。默认配置如下：

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

配置中包含两个部分：应用特定资源（JS、CSS、HTML）和应用按需加载的资源。根据应用需求，可以自定义这些选项。更详细的指南，请阅读 [Angular 团队的官方指南](https://angular.io/guide/service-worker-config)

## 部署

### Firebase

Firebase 托管为渐进式 Web 应用提供了诸多优势，包括借助 CDN 实现快速响应时间、默认启用 HTTPS，以及支持 [HTTP2 推送](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html)。

首先，如果尚未创建 Firebase 项目，请在 [Firebase 控制台](https://console.firebase.google.com) 创建项目。

接下来，在终端中安装 Firebase CLI：

```shell
npm install -g firebase-tools
```

:::note
如果是首次使用 firebase-tools，请使用 `firebase login` 命令登录您的 Google 账户。
:::

安装 Firebase CLI 后，在您的 Ionic 项目中运行 `firebase init`。CLI 会提示以下问题：

**"Which Firebase CLI features do you want to set up for this folder?"** 选择 "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys"。

创建一个新的 Firebase 项目或选择现有项目。

**"Select a default Firebase project for this directory:"** 选择您在 Firebase 网站上创建的项目。

**"What do you want to use as your public directory?"** 输入 "www"。

:::note
正确回答下一个问题将确保应用中的路由、强制刷新和深层链接正常工作：
:::

**"Configure as a single-page app (rewrite all urls to /index.html)?"** 输入 "Yes"。

**"File build/index.html already exists. Overwrite?"** 输入 "No"。

**"Set up automatic builds and deploys with Github?"** 输入 "Yes"。

**"For which GitHub repository would you like to set up a Github Workflow?"** 输入您的项目名称。

**"Set up the workflow to run a build script before every deploy?"** 输入 "Yes"。

**"What script should be run before every deploy?"** 输入 `npm ci && npm run build`。

**"Set up automatic deployment to your sites live channel when a PR is merged?"** 输入 "Yes"。

**"What is the name of the get hooked branch associated with your sites live channel?"** 输入您项目的主分支名称。

系统会生成一个 `firebase.json` 配置文件，用于配置应用部署。

最后需要确保正确设置缓存头。为此，在 `firebase.json` 文件中添加一个 `headers` 片段。完整的 `firebase.json` 文件如下：

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

接下来，运行以下命令构建应用的优化版本：

```shell
ionic build --prod
```

最后，运行以下命令部署应用：

```shell
firebase deploy
```

完成后，应用即可上线。