---
title: Vue 中的渐进式 Web 应用
sidebar_label: 渐进式 Web 应用
---

<head>
  <title>Vue PWA | 在 Vue.js 项目中添加渐进式 Web 应用 | Ionic</title>
  <meta
    name="description"
    content="运行 'vue add' 命令来安装渐进式 Web 应用插件。了解如何将 PWA 添加到您现有的 Vue 项目。"
  />
</head>

## 使用 Vite 将 Vue 应用变为 PWA

PWA 的两个主要要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web 应用清单（Web Application Manifest）</a>。虽然可以手动将两者添加到应用中，但我们建议使用 [Vite PWA Plugin](https://vite-pwa-org.netlify.app/) 代替。

要开始使用，请安装 `vite-plugin-pwa` 包：

```shell
npm install -D vite-plugin-pwa
```

接下来，更新您的 `vite.config.js` 或 `vite.config.ts` 文件并添加 `vite-plugin-pwa`：

```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [vue(), VitePWA({ registerType: 'autoUpdate' })],
});
```

这个最小配置允许您的应用在构建时生成 Web 应用清单和 Service Worker。

有关配置 Vite PWA Plugin 的更多信息，请参阅 [Vite PWA "入门"指南](https://vite-pwa-org.netlify.app/guide/)。

有关如何部署 PWA 的信息，请参阅 [Vite PWA "部署"指南](https://vite-pwa-org.netlify.app/deployment/)。

## 使用 Vue CLI 将 Vue 应用变为 PWA

:::note
自 Ionic CLI v7 起，Ionic Vue 启动应用使用 Vite 而非 Vue CLI。Vite 说明请参阅[使用 Vite 将 Vue 应用变为 PWA](#使用-vite-将-vue-应用变为-pwa)。
:::

PWA 的两个主要要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web 应用清单（Web Application Manifest）</a>。虽然可以手动将两者添加到应用中，但 Vue CLI 提供了一些可为您添加这些的工具。

对于现有项目，您可以运行 `vue add` 命令来安装 Vue 的 PWA 插件。

```shell
vue add pwa
```

:::note
如果已有更改，请确保在 Git 中提交它们。
:::

完成后，Vue 的 CLI 将创建一个新的 `registerServiceWorker.ts` 文件并将其导入到我们的 `main.ts` 中。

```tsx
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// 由 CLI 添加
import './registerServiceWorker';

createApp(App).use(router).mount('#app');
```

`registerServiceWorker.ts` 文件将指向 CLI 在构建时创建的 service worker。在此文件中，我们可以自定义用户在 service worker 检测到更新、网络连接变化或收到错误时的体验。

```tsx
import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB'
      );
    },
    registered() {
      console.log('Service worker has been registered.');
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated() {
      console.log('New content is available; please refresh.');
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}
```

生成的 service worker 基于 [Workbox 的 webpack 插件](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)，默认设置为使用 `GenerateSW()`。这意味着在构建时，Workbox 将自动为其处理的所有文件生成 service worker 缓存。

如果您想配置此行为并更改默认设置，请查看 GitHub 上的 [PWA 插件文档](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration)。

### 清单

除了 service worker，Vue PWA 插件还负责为您的应用创建清单文件。默认情况下，CLI 将生成包含以下条目的清单。

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

请确保更新 `public/img/icons` 中的图标以匹配您自己的品牌。如果您想自定义主题颜色或名称，请务必阅读 GitHub 上的 [PWA 插件文档](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration)。

### 部署

您可以使用各种主机，如 Firebase、Vercel、Netlify 甚至 Azure Static Web Apps。所有主机都有类似的设置过程需要完成。在本指南中，我们将使用 Firebase 作为托管示例。除了本指南之外，[Vue CLI 文档](https://cli.vuejs.org/guide/deployment.html)也提供了关于如何部署到各种服务商的指南。

#### Firebase

Firebase 托管为渐进式 Web 应用提供了许多好处，包括得益于 CDN 的快速响应时间、默认启用 HTTPS 以及对 [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html) 的支持。

首先，如果尚未创建，请在 Firebase 中[创建项目](https://console.firebase.google.com)。

接下来，在终端中安装 Firebase CLI：

```shell
npm install -g firebase-tools
```

:::note
如果是第一次使用 firebase-tools，请使用 `firebase login` 命令登录您的 Google 账户。
:::

安装 Firebase CLI 后，在您的 Ionic 项目中运行 `firebase init`。CLI 会提示：

**"您想为此文件夹设置哪些 Firebase CLI 功能？"** 选择 "Hosting: 配置 Firebase Hosting 文件并（可选）设置 GitHub Action 部署"。

创建一个新的 Firebase 项目或选择一个现有项目。

**"为此目录选择默认的 Firebase 项目："** 选择您在 Firebase 网站上创建的项目。

**"您想将什么用作公共目录？"** 输入 "dist"。

:::note
回答下一个问题将确保路由、硬刷新和深度链接在应用中正常工作：
:::

**"配置为单页应用（将所有 URL 重写到 /index.html）？"** 输入 "Yes"。

**"文件 build/index.html 已存在。是否覆盖？"** 输入 "No"。

**"设置与 Github 的自动构建和部署？"** 输入 "Yes"。

**"您想为哪个 GitHub 仓库设置 GitHub Workflow？"** 输入您的项目名称。

**"是否设置工作流在每次部署前运行构建脚本？"** 输入 "Yes"。

**"每次部署前应运行什么脚本？"** 输入 `npm ci && npm run build`。

**"PR 合并时是否自动部署到您的站点在线频道？"** 输入 "Yes"。

**"与您的站点在线频道关联的获取钩子分支的名称是什么？"** 输入您项目的主分支名称。

将生成一个 `firebase.json` 配置文件，配置应用以供部署。

最后需要确保的是正确设置缓存头。为此，在 `firebase.json` 文件中添加一个 `headers` 片段。完整的 `firebase.json` 文件如下所示：

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

完成后，应用将上线。
