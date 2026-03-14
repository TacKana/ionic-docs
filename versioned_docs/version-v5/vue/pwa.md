---
sidebar_label: 渐进式 Web 应用
---

# Vue 中的渐进式 Web 应用

## 将您的 Vue 应用转换为 PWA

PWA 的两个主要要求是 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> 和 <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>。虽然可以手动将这两者添加到应用中，但 Vue CLI 提供了一些工具来帮助您完成这个任务。

对于现有项目，您可以运行 `vue add` 命令来安装 Vue 的 PWA 插件。

```shell
vue add pwa
```

:::note
如果您已经进行了更改，请确保在 Git 中提交它们。
:::

完成此操作后，Vue CLI 将创建一个新的 `registerServiceWorker.ts` 文件，并将其导入到我们的 `main.ts` 中。

```tsx
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// 由 CLI 添加
import './registerServiceWorker';

createApp(App).use(router).mount('#app');
```

`registerServiceWorker.ts` 文件将指向一个服务工作者，CLI 会在构建时创建它。在这里，我们可以自定义当服务工作者检测到更新、网络连接变化或收到错误时用户的体验。

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

生成的服务工作者基于 [Workbox 的 webpack 插件](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)，默认设置为使用 `GenerateSW()`。这意味着在构建时，Workbox 会自动为它处理的所有文件生成一个服务工作者缓存。

如果您想配置此设置并更改默认行为，请查看 GitHub 上的 [PWA 插件文档](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration)。

### Manifest

除了服务工作者外，Vue PWA 插件还负责为您的应用创建清单文件。默认情况下，CLI 会生成一个包含以下条目的清单。

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

## 部署

您可以使用各种托管服务，如 Firebase、Vercel、Netlify，甚至 Azure Static Web Apps。所有这些都有类似的设置过程需要完成。在本指南中，我们将使用 Firebase 作为托管的示例。除了本指南外，[Vue CLI 文档](https://cli.vuejs.org/guide/deployment.html) 也提供了如何部署到不同提供商的指南。

### Firebase

Firebase 托管为渐进式 Web 应用提供了许多好处，包括借助 CDN 实现的快速响应时间、默认启用的 HTTPS，以及支持 [HTTP2 推送](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html)。

首先，如果尚未创建项目，请在 Firebase 中 [创建项目](https://console.firebase.google.com)。

接下来，在终端中安装 Firebase CLI：

```shell
npm install -g firebase-tools
```

安装完 Firebase CLI 后，在您的 Ionic 项目中运行 `firebase init`。CLI 会提示：

**"Which Firebase CLI features do you want to set up for this folder?"** 选择 "Hosting: Configure and deploy Firebase Hosting sites."

**"Select a default Firebase project for this directory:"** 选择您在 Firebase 网站上创建的项目。

**"What do you want to use as your public directory?"** 输入 "dist"。

:::note
回答接下来的两个问题将确保应用中的路由、硬重载和深度链接正常工作：
:::

**"Configure as a single-page app (rewrite all urls to /index.html)?"** 输入 "Yes"。

**"File dist/index.html already exists. Overwrite?"** 输入 "No"。

这会生成一个 `firebase.json` 配置文件，用于配置应用的部署。

最后需要确保正确设置缓存标头。为此，请在 `firebase.json` 文件中添加一个 `headers` 片段。完整的 `firebase.json` 如下所示：

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