---
title: 在 Vue 中构建渐进式 Web 应用
sidebar_label: 渐进式 Web 应用
---

<head>
  <title>Vue PWA | 为 Vue.js 项目添加渐进式 Web 应用 | Ionic</title>
  <meta
    name="description"
    content="使用 'vue add' 命令安装渐进式 Web 应用插件。了解如何为现有 Vue 项目添加 PWA 支持。"
  />
</head>

## 使用 Vite 将 Vue 应用转换为 PWA

PWA（渐进式 Web 应用）的两个核心要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web 应用清单</a>。虽然可以手动为应用添加这两项内容，但我们推荐使用 [Vite PWA 插件](https://vite-pwa-org.netlify.app/)。

首先，安装 `vite-plugin-pwa` 包：

```shell
npm install -D vite-plugin-pwa
```

接下来，更新你的 `vite.config.js` 或 `vite.config.ts` 文件，添加 `vite-plugin-pwa`：

```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [vue(), VitePWA({ registerType: 'autoUpdate' })],
});
```

这个最小化配置允许你的应用在构建时生成 Web 应用清单和 Service Worker。

有关配置 Vite PWA 插件的更多信息，请参阅 [Vite PWA "入门"指南](https://vite-pwa-org.netlify.app/guide/)。

有关如何部署 PWA 的信息，请参阅 [Vite PWA "部署"指南](https://vite-pwa-org.netlify.app/deployment/)。

## 使用 Vue CLI 将 Vue 应用转换为 PWA

:::note
从 Ionic CLI v7 开始，Ionic Vue 启动模板已改用 Vite 而非 Vue CLI。有关 Vite 的说明，请参阅[使用 Vite 将 Vue 应用转换为 PWA](#making-your-vue-app-a-pwa-with-vite)。
:::

PWA（渐进式 Web 应用）的两个核心要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web 应用清单</a>。虽然可以手动为应用添加这两项内容，但 Vue CLI 提供了一些工具来帮你完成这项工作。

对于现有项目，你可以运行 `vue add` 命令来安装 Vue 的 PWA 插件。

```shell
vue add pwa
```

:::note
如果你已经进行了修改，请确保通过 Git 提交它们。
:::

完成后，Vue CLI 将创建一个新的 `registerServiceWorker.ts` 文件，并将其导入到我们的 `main.ts` 中。

```tsx
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// 由 CLI 添加
import './registerServiceWorker';

createApp(App).use(router).mount('#app');
```

`registerServiceWorker.ts` 文件将指向一个 Service Worker，CLI 会在构建时创建它。在这个文件中，我们可以自定义用户在使用过程中，当 Service Worker 检测到更新、网络连接变化或收到错误时的体验。

```tsx
import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        '应用正通过 Service Worker 从缓存中提供服务。\n' + '更多详情，请访问 https://goo.gl/AFskqB'
      );
    },
    registered() {
      console.log('Service Worker 已注册。');
    },
    cached() {
      console.log('内容已缓存，可供离线使用。');
    },
    updatefound() {
      console.log('正在下载新内容。');
    },
    updated() {
      console.log('新内容已就绪；请刷新页面。');
    },
    offline() {
      console.log('未检测到网络连接。应用正在离线模式下运行。');
    },
    error(error) {
      console.error('Service Worker 注册过程中发生错误：', error);
    },
  });
}
```

生成的 Service Worker 基于 [Workbox 的 webpack 插件](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)，默认使用 `GenerateSW()` 模式。这意味着在构建时，Workbox 会自动为所有处理的文件生成 Service Worker 缓存。

如果你想配置此行为并更改默认设置，请查看 GitHub 上的 [PWA 插件文档](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration)。

### 清单

除了 Service Worker，Vue PWA 插件还负责为你的应用创建清单文件。默认情况下，CLI 会生成一个包含以下条目的清单。

```json
{
  "name": "pwa-test",
  "short_name": "pwa-test",
  "theme_color": "#4DBA87",
  "icons": [
    {
      "src": "./img/icons/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "./img/icons/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "./img/icons/android-chrome-maskable-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "./img/icons/android-chrome-maskable-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "background_color": "#000000"
}
```

请务必将 `public/img/icons` 中的图标替换为你自己的品牌图标。如果你想自定义主题颜色或名称，请务必阅读 GitHub 上的 [PWA 插件文档](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration)。

### 部署

你可以使用 Firebase、Vercel、Netlify 甚至 Azure Static Web Apps 等各种托管服务。它们都有类似的需要完成的设置过程。本指南将以 Firebase 作为托管示例。除了本指南，[Vue CLI 文档](https://cli.vuejs.org/guide/deployment.html) 也提供了如何部署到不同提供商的指南。

#### Firebase

Firebase 托管为渐进式 Web 应用提供了许多优势，包括借助 CDN 实现的快速响应时间、默认启用 HTTPS 以及支持 [HTTP2 推送](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html)。

首先，如果尚未创建项目，请在 Firebase 中[创建项目](https://console.firebase.google.com)。

接下来，在终端中安装 Firebase CLI：

```shell
npm install -g firebase-tools
```

:::note
如果是首次使用 firebase-tools，请使用 `firebase login` 命令登录你的 Google 账户。
:::

安装好 Firebase CLI 后，在你的 Ionic 项目目录中运行 `firebase init`。CLI 会提示：

**"Which Firebase CLI features do you want to set up for this folder?"** 选择 "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys"。

创建一个新的 Firebase 项目或选择一个现有项目。

**"Select a default Firebase project for this directory:"** 选择你在 Firebase 网站上创建的项目。

**"What do you want to use as your public directory?"** 输入 "dist"。

:::note
回答下一个问题将确保应用中的路由、硬重载和深层链接正常工作：
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

最后需要确保正确设置缓存头。为此，在 `firebase.json` 文件中添加一个 `headers` 片段。完整的 `firebase.json` 应如下所示：

```json
{
  "hosting": {
    "public": "dist",
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
      },
      {
        "source": "precache-manifest.*.js",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "no-cache"
          }
        ]
      },
      {
        "source": "service-worker.js",
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
ionic build
```

最后，通过运行以下命令部署应用：

```shell
firebase deploy
```

完成后，应用将上线运行。