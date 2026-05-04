---
title: Vue 中的渐进式网络应用
sidebar_label: 渐进式网络应用
---

<head>
  <title>Vue PWA | 为 Vue.js 项目添加渐进式网络应用 | Ionic</title>
  <meta
    name="description"
    content="运行 'vue add' 命令以安装渐进式网络应用插件。了解如何将 PWA 添加到现有 Vue 项目的更多信息。"
  />
</head>

<LegacyAnchor id="making-your-vue-app-a-pwa-with-vite" />

## 使用 Vite 将 Vue 应用转换为 PWA

PWA 的两个主要要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web 应用清单</a>。虽然可以手动将这两者添加到应用中，但我们建议使用 [Vite PWA 插件](https://vite-pwa-org.netlify.app/)。

首先，安装 `vite-plugin-pwa` 包：

```shell
npm install -D vite-plugin-pwa
```

接下来，更新你的 `vite.config.js` 或 `vite.config.ts` 文件并添加 `vite-plugin-pwa`：

```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [vue(), VitePWA({ registerType: 'autoUpdate' })],
});
```

这个最小配置允许你的应用在构建时生成 Web 应用清单和 Service Worker。

有关配置 Vite PWA 插件的更多信息，请参阅 [Vite PWA "入门"指南](https://vite-pwa-org.netlify.app/guide/)。

有关如何部署 PWA 的信息，请参阅 [Vite PWA "部署"指南](https://vite-pwa-org.netlify.app/deployment/)。

## 使用 Vue CLI 将 Vue 应用转换为 PWA

:::note
从 Ionic CLI v7 开始，Ionic Vue 起始项目使用 Vite 替代了 Vue CLI。Vite 的使用说明请参见 [使用 Vite 将 Vue 应用转换为 PWA](#making-your-vue-app-a-pwa-with-vite)。
:::

PWA 的两个主要要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web 应用清单</a>。虽然可以手动将这两者添加到应用中，但 Vue CLI 提供了一些工具来为你添加这些功能。

对于现有项目，你可以运行 `vue add` 命令来安装 Vue 的 PWA 插件。

```shell
vue add pwa
```

:::note
如果你已经进行了更改，请确保在 Git 中提交它们。
:::

完成此操作后，Vue 的 CLI 将创建一个新的 `registerServiceWorker.ts` 文件并将其导入到我们的 `main.ts` 中。

```tsx
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// 由 CLI 添加
import './registerServiceWorker';

createApp(App).use(router).mount('#app');
```

`registerServiceWorker.ts` 文件将指向一个 Service Worker，该 Service Worker 将在构建时由 CLI 创建。在这里，我们可以自定义当 Service Worker 检测到更新、网络连接变化或接收到错误时用户的体验。

```tsx
import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        '应用正由 Service Worker 从缓存中提供服务。\n' + '更多详情，请访问 https://goo.gl/AFskqB'
      );
    },
    registered() {
      console.log('Service Worker 已注册。');
    },
    cached() {
      console.log('内容已缓存以供离线使用。');
    },
    updatefound() {
      console.log('正在下载新内容。');
    },
    updated() {
      console.log('有新内容可用；请刷新。');
    },
    offline() {
      console.log('未找到互联网连接。应用正在离线模式下运行。');
    },
    error(error) {
      console.error('Service Worker 注册期间发生错误：', error);
    },
  });
}
```

生成的 Service Worker 基于 [Workbox 的 webpack 插件](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)，默认设置为使用 `GenerateSW()`。这意味着在构建时，Workbox 将自动为它处理的所有文件生成一个 Service Worker 缓存。

如果你想配置此行为并更改默认设置，请在 GitHub 上查看 [PWA 插件文档](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration)。

### 清单

除了 Service Worker 之外，Vue PWA 插件还负责为你的应用创建清单文件。默认情况下，CLI 将生成一个包含以下条目的清单。

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

请确保更新 `public/img/icons` 中的图标以匹配你自己的品牌。如果你想自定义主题颜色或名称，请务必阅读 GitHub 上的 [PWA 插件文档](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration)。

### 部署

你可以使用各种托管服务，如 Firebase、Vercel、Netlify，甚至 Azure 静态 Web 应用。所有这些都有类似的需要完成的设置过程。本指南将使用 Firebase 作为托管示例。除了本指南外，[Vue CLI 文档](https://cli.vuejs.org/guide/deployment.html) 也提供了如何部署到各种提供商的指南。

#### Firebase

Firebase 托管为渐进式网络应用提供了许多好处，包括得益于 CDN 的快速响应时间、默认启用的 HTTPS 以及对 [HTTP2 推送](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html) 的支持。

首先，如果尚未创建，请在 Firebase 中[创建项目](https://console.firebase.google.com)。

接下来，在终端中安装 Firebase CLI：

```shell
npm install -g firebase-tools
```

:::note
如果你是第一次使用 firebase-tools，请使用 `firebase login` 命令登录到你的 Google 账户。
:::

安装 Firebase CLI 后，在你的 Ionic 项目中运行 `firebase init`。CLI 会提示：

**"你希望为此文件夹设置哪些 Firebase CLI 功能？"** 选择 "Hosting: 配置 Firebase 托管的文件，并（可选）设置 GitHub Action 部署"。

创建新的 Firebase 项目或选择现有项目。

**"为此目录选择一个默认的 Firebase 项目："** 选择你在 Firebase 网站上创建的项目。

**"你希望使用哪个目录作为公共目录？"** 输入 "dist"。

:::note
回答下一个问题将确保应用中的路由、硬刷新和深度链接正常工作：
:::

**"配置为单页应用（将所有 URL 重写到 /index.html）？"** 输入 "是"。

**"文件 build/index.html 已存在。是否覆盖？"** 输入 "否"。

**"是否设置与 GitHub 的自动构建和部署？"** 输入 "是"。

**"你希望为哪个 GitHub 仓库设置 GitHub 工作流？"** 输入你的项目名称。

**"是否设置工作流在每次部署前运行构建脚本？"** 输入 "是"。

**"每次部署前应运行什么脚本？"** 输入 `npm ci && npm run build`。

**"当 PR 合并时，是否设置自动部署到站点的实时频道？"** 输入 "是"。

**"与站点实时频道关联的 Git 分支名称是什么？"** 输入你的项目的主分支名称。

会生成一个 `firebase.json` 配置文件，用于配置应用的部署。

最后需要确保缓存头设置正确。为此，在 `firebase.json` 文件中添加一个 `headers` 片段。完整的 `firebase.json` 如下所示：

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