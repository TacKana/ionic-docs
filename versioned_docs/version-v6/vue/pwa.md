---
sidebar_label: 渐进式 Web 应用
---

<head>
  <title>Vue PWA | 为 Vue.js 项目添加渐进式 Web 应用 | Ionic</title>
  <meta
    name="description"
    content="运行 'vue add' 命令安装渐进式 Web 应用插件。了解如何将 PWA 添加到现有的 Vue 项目中。"
  />
</head>

# Vue 中的渐进式 Web 应用

## 将你的 Vue 应用变成 PWA

PWA 的两个主要要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>。虽然可以手动将这两者添加到应用中，但 Vue CLI 提供了一些实用工具来帮你完成。

对于现有项目，你可以运行 `vue add` 命令来安装 Vue 的 PWA 插件。

```shell
vue add pwa
```

:::note
如果你已经有未提交的更改，请确保先将它们提交到 Git。
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

`registerServiceWorker.ts` 文件将指向 CLI 在构建时创建的 service worker。在此文件中，我们可以自定义用户在使用 service worker 检测到更新、网络连接变化或收到错误时的体验。

```tsx
import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        '应用正在由 service worker 从缓存中提供服务。\n' + '更多详情，请访问 https://goo.gl/AFskqB'
      );
    },
    registered() {
      console.log('Service worker 已注册。');
    },
    cached() {
      console.log('内容已缓存以供离线使用。');
    },
    updatefound() {
      console.log('新内容正在下载。');
    },
    updated() {
      console.log('新内容可用；请刷新。');
    },
    offline() {
      console.log('未找到网络连接。应用正在以离线模式运行。');
    },
    error(error) {
      console.error('Service worker 注册过程中出现错误：', error);
    },
  });
}
```

生成的 service worker 基于 [Workbox 的 webpack 插件](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)，默认配置为使用 `GenerateSW()`。这意味着在构建时，Workbox 将自动为其处理的所有文件生成 service worker 缓存。

如果你想进行配置并更改默认行为，请在 GitHub 上查看 [PWA 插件文档](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration)。

### Manifest

除了 service worker 之外，Vue PWA 插件还负责为你的应用创建 manifest 文件。默认情况下，CLI 将生成包含以下条目的 manifest。

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

确保更新 `public/img/icons` 中的图标以匹配你自己的品牌。如果你想自定义主题颜色或名称，请务必阅读 GitHub 上的 [PWA 插件文档](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration)。

## 部署

你可以使用各种托管服务，如 Firebase、Vercel、Netlify，甚至是 Azure Static Web Apps。所有服务都有相似的设置过程需要完成。在本指南中，将以 Firebase 作为托管示例。除本指南外，[Vue CLI 文档](https://cli.vuejs.org/guide/deployment.html) 也提供了如何部署到各种提供商的指南。

### Firebase

Firebase 托管为渐进式 Web 应用提供了许多好处，包括得益于 CDN 的快速响应时间、默认启用 HTTPS，以及对 [HTTP2 推送](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html) 的支持。

首先，如果还没有，请在 Firebase 中[创建项目](https://console.firebase.google.com)。

接下来，在终端中安装 Firebase CLI：

```shell
npm install -g firebase-tools
```

安装 Firebase CLI 后，在你的 Ionic 项目中运行 `firebase init`。CLI 会提示：

**"此文件夹中要设置哪些 Firebase CLI 功能？"** 选择"Hosting：配置和部署 Firebase Hosting 站点。"

**"为此目录选择默认 Firebase 项目："** 选择你在 Firebase 网站上创建的项目。

**"你想将什么用作公共目录？"** 输入"dist"。

:::note
回答接下来的两个问题将确保路由、硬刷新和深度链接在应用中正常工作：
:::

**"配置为单页应用（将所有 URL 重写到 /index.html）？"** 输入"Yes"。

**"文件 dist/index.html 已存在。是否覆盖？"** 输入"No"。

将生成 `firebase.json` 配置文件，用于配置应用的部署。

最后需要做的是确保缓存标头设置正确。为此，在 `firebase.json` 文件中添加 `headers` 片段。完整的 `firebase.json` 如下：

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
