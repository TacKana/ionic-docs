---
title: CORS 错误
---

<head>
  <title>CORS 错误：跨源资源共享 - Ionic 文档</title>
  <meta
    name="description"
    content="如果发起请求但服务器未返回所需标头，Web 应用中会出现 CORS 错误。阅读 Ionic 文档中关于跨源资源共享的内容。"
  />
</head>

## 什么是 CORS？

**跨源资源共享 (CORS)** 是一种浏览器和 webview（如 Capacitor 和 Cordova 所使用的）用于限制脚本向不同来源的资源发起 HTTP 和 HTTPS 请求的机制，主要是为了保护用户数据并防止危害应用的攻击。

要判断外部来源是否支持 CORS，服务器必须发送一些[特殊标头](#cors-标头)，以便浏览器允许这些请求。

**来源** 是指您的 Ionic 应用或外部资源提供服务的**协议**、**域名**和**端口**的组合。例如，在 Capacitor 中运行的应用以 `capacitor://localhost`（iOS）或 `http://localhost`（Android）作为其来源。

当您的应用提供服务所在的来源（例如使用 `ionic serve` 时的 `http://localhost:8100`）与所请求资源的来源（例如 `https://api.example.com`）不匹配时，浏览器的<a href="https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy" target="_blank" rel="noopener">同源策略</a>就会生效，此时需要 CORS 才能发起请求。

当发起跨源请求但服务器在响应中未返回所需标头（未启用 CORS）时，Web 应用中常出现 CORS 错误：

:::note
XMLHttpRequest cannot load https://api.example.com. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8100' is therefore not allowed access.
:::

## CORS 的工作原理

### 带预检的请求

默认情况下，当 Web 应用尝试发起跨源请求时，浏览器会在实际请求之前发送一个**预检请求**。这个预检请求是必要的，用于判断外部资源是否支持 CORS，以及实际请求是否可以安全发送，因为它可能影响用户数据。

如果满足以下任一条件，浏览器会发送预检请求：

- **方法是：**
  - PUT
  - DELETE
  - CONNECT
  - OPTIONS
  - TRACE
  - PATCH
- **或者包含非以下列表中的标头：**
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type
  - DPR
  - Downlink
  - Save-Data
  - Viewport-Width
  - Width
- **或者 `Content-Type` 标头不是以下之一：**
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain
- 或者使用了 `ReadableStream` 或 `XMLHttpRequestUpload` 中的事件监听器。

如果满足上述任何条件，将使用 `OPTIONS` 方法向资源 URL 发送预检请求。

假设我们正在向一个虚构的 JSON API `https://api.example.com` 发起一个 `Content-Type` 为 `application/json` 的 `POST` 请求。预检请求如下所示（为清晰起见，省略了一些默认标头）：

```http
OPTIONS / HTTP/1.1
Host: api.example.com
Origin: http://localhost:8100
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type
```

如果服务器启用了 CORS，它将解析 `Access-Control-Request-*` 标头，并理解正在尝试从 `http://localhost:8100` 使用自定义 `Content-Type` 发起 `POST` 请求。

然后服务器将使用 `Access-Control-Allow-*` 标头响应此预检，说明允许哪些来源、方法和标头：

```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:8100
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

如果返回的来源和方法与实际请求不匹配，或者使用的任何标头不被允许，浏览器将阻止该请求，并在控制台中显示错误。否则，请求将在预检后发起。

在我们的示例中，由于 API 期望 JSON，所有 `POST` 请求都将具有 `Content-Type: application/json` 标头，并且总是需要预检。

### 简单请求

某些请求始终被认为是安全可发送的，如果它们满足以下所有条件，则不需要预检：

- **方法是：**
  - GET
  - HEAD
  - POST
- **仅包含以下标头：**
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type
  - DPR
  - Downlink
  - Save-Data
  - Viewport-Width
  - Width
- **`Content-Type` 标头是：**
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain
- 未使用 `ReadableStream` 或 `XMLHttpRequestUpload` 中的事件监听器。

在我们的示例 API 中，`GET` 请求不需要预检，因为没有发送 JSON 数据，因此应用不需要使用 `Content-Type: application/json` 标头。它们始终是简单请求。

## CORS 标头

### 服务器标头（响应）

| 标头                               | 值                 | 描述                                                                                                    |
| ---------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------- |
| **Access-Control-Allow-Origin**    | `origin` 或 `*`    | 指定允许的来源，如 `http://localhost:8100` 或 `*` 允许所有来源。                                         |
| **Access-Control-Allow-Methods**   | `methods`          | 访问资源时允许哪些方法：`GET`、`HEAD`、`POST`、`PUT`、`DELETE`、`CONNECT`、`OPTIONS`、`TRACE`、`PATCH`。|
| **Access-Control-Allow-Headers**   | `headers`          | 用于响应预检请求，指示除始终允许的[简单标头](#简单请求)之外，发起实际请求时可以使用哪些标头。           |
| Access-Control-Allow-Credentials   | `true` 或 `false`  | 请求是否可以携带凭据。                                                                                  |
| Access-Control-Expose-Headers      | `headers`          | 指定浏览器允许访问的标头。                                                                              |
| Access-Control-Max-Age             | `seconds`          | 指示预检请求的结果可以被缓存多长时间。                                                                  |

### 浏览器标头（请求）

浏览器会自动在每次向服务器的请求中发送适当的 CORS 标头，包括预检请求。请注意，以下标头仅供参考，**不应在您的应用代码中设置**（浏览器会忽略它们）。

#### 所有请求

| 标头       | 值       | 描述                     |
| ---------- | -------- | ------------------------ |
| **Origin** | `origin` | 指示请求的来源。         |

#### 预检请求

| 标头                              | 值       | 描述                                                 |
| --------------------------------- | -------- | ---------------------------------------------------- |
| **Access-Control-Request-Method** | `method` | 用于让服务器知道实际请求时将使用什么方法。            |
| Access-Control-Request-Headers    | `headers`| 用于让服务器知道实际请求时将使用哪些非简单标头。      |

## CORS 错误的解决方案

### A. 在您控制的服务器上启用 CORS

正确且最简单的解决方案是通过从 Web 服务器或后端返回[正确的响应标头](#服务器标头响应)并响应预检请求来启用 CORS，因为这允许继续使用 `XMLHttpRequest`、`fetch` 或 Angular 中的 `HttpClient` 等抽象。

Ionic 应用可能从不同的来源运行，但在 `Access-Control-Allow-Origin` 标头中只能指定一个来源。因此，我们建议检查请求中 `Origin` 标头的值，并在响应的 `Access-Control-Allow-Origin` 标头中反映出来。

请注意，所有 `Access-Control-Allow-*` 标头都必须从服务器发送，不属于您的应用代码。

以下是您的 Ionic 应用可能提供服务的来源：

#### Capacitor

| 平台    | 来源                    |
| ------- | ----------------------- |
| iOS     | `capacitor://localhost` |
| Android | `http://localhost`      |

如果您在 Capacitor 配置中更改了默认设置，请将 `localhost` 替换为您自己的主机名。

#### Cordova 上的 Ionic WebView 3.x 插件

| 平台    | 来源                |
| ------- | ------------------- |
| iOS     | `ionic://localhost` |
| Android | `http://localhost`  |

如果您在插件配置中更改了默认设置，请将 `localhost` 替换为您自己的主机名。

#### Cordova 上的 Ionic WebView 2.x 插件

| 平台    | 来源                      |
| ------- | ------------------------- |
| iOS     | `http://localhost:8080`   |
| Android | `http://localhost:8080`   |

如果您在插件配置中更改了默认值，请将端口 `8080` 替换为您自己的端口。

#### 浏览器的本地开发

| 命令                         | 来源                                                      |
| ---------------------------- | --------------------------------------------------------- |
| `ionic serve`                | `http://localhost:8100` 或 `http://YOUR_MACHINE_IP:8100`  |
| `npm run start` 或 `ng serve`| 对于 Ionic Angular 应用为 `http://localhost:4200`。       |

如果同时运行多个应用，端口号可能会更高。

允许任何来源 (`Access-Control-Allow-Origin: *`) 保证在所有情况下都有效，但可能存在安全隐患——如某些 CSRF 攻击——具体取决于服务器如何控制对资源的访问以及如何使用会话和 Cookie。

有关如何在不同 Web 和应用服务器上启用 CORS 的更多信息，请查看 <a href="https://enable-cors.org" target="_blank" rel="noopener">enable-cors.org</a>

可以使用 <a href="https://github.com/expressjs/cors" target="_blank" rel="noopener">cors</a> 中间件在 Express/Connect 应用中轻松启用 CORS：

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

const allowedOrigins = [
  'capacitor://localhost',
  'ionic://localhost',
  'http://localhost',
  'http://localhost:8080',
  'http://localhost:8100',
];

// 如果来源在允许列表中或未定义（cURL、Postman 等），则反映该来源
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  },
};

// 为所有路由启用预检请求
app.options('*', cors(corsOptions));

app.get('/', cors(corsOptions), (req, res, next) => {
  res.json({ message: '此路由已为允许的来源启用 CORS。' });
});

app.listen(3000, () => {
  console.log('启用了 CORS 的 Web 服务器正在监听端口 3000');
});
```

### B. 在您无法控制的服务器上绕过 CORS

#### 不要泄露您的密钥！

如果您尝试连接到第三方 API，请首先在文档中确认直接从应用（客户端）使用它是安全的，且不会泄露任何秘密/私钥或凭据，因为在 JavaScript 代码中很容易以明文形式看到它们。许多 API 故意不支持 CORS，以强制开发者在服务器上使用它们并保护重要信息或密钥。

#### 1. 仅原生应用（iOS/Android）

##### Capacitor 应用（推荐）

对于 Capacitor 应用，使用 [Capacitor HTTP API](https://capacitorjs.com/docs/apis/http)。此 API 会补丁 `fetch` 和 `XMLHttpRequest` 以使用原生库。请注意，如果您也将应用部署到基于 Web 的环境（如 PWA 或本地开发服务器），您仍然需要为这些场景实现 CORS。

##### 传统 Cordova 应用

对于传统的 Cordova 应用，使用 [带有 Awesome Cordova Plugins 封装器的 HTTP 插件](https://danielsogl.gitbook.io/awesome-cordova-plugins/http)。请注意，此插件在浏览器中不工作，因此应用的开发和测试必须始终在设备或模拟器上进行。

```tsx
import { Component } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private http: HTTP) {}

  async getData() {
    try {
      const url = 'https://api.example.com';
      const params = {};
      const headers = {};

      const response = await this.http.get(url, params, headers);

      console.log(response.status);
      console.log(JSON.parse(response.data)); // 服务器返回的 JSON 数据
      console.log(response.headers);
    } catch (error) {
      console.error(error.status);
      console.error(error.error); // 错误信息字符串
      console.error(error.headers);
    }
  }
}
```

#### 2. 原生 + PWA

通过 HTTP/HTTPS 代理发送请求，该代理将请求转发到外部资源并向响应添加必要的 CORS 标头。此代理必须受信任或由您控制，因为它将拦截应用的大部分流量。

此外，请注意浏览器或 webview 将不会收到原始的 HTTPS 证书，而是接收来自代理的证书（如果有）。您的代码中的 URL 可能需要重写以使用代理。

查看 <a href="https://github.com/Rob--W/cors-anywhere/" target="_blank" rel="noopener">cors-anywhere</a> 了解一个 Node.js CORS 代理，可以部署在您自己的服务器上。不建议在生产中使用免费的托管 CORS 代理。

### C. 禁用 CORS 或浏览器 Web 安全

请注意，CORS 的存在是有原因的（用户数据安全和防止针对您的应用的攻击）。**尝试禁用 CORS 是不可能的，也不可取**。

较旧的 webview，如 iOS 上的 `UIWebView`，不强制执行 CORS，但已被弃用，很可能很快就会消失。现代 webview，如 iOS 的 `WKWebView` 或 Android 的 `WebView`（Capacitor 使用的），都会强制执行 CORS，并提供巨大的安全和性能改进。

如果您正在开发 PWA 或在浏览器中进行测试，使用 Google Chrome 的 `--disable-web-security` 标志或扩展来禁用 CORS 是一个非常糟糕的主意。您将暴露在各种攻击之下，无法要求用户承担风险，而且一旦投入生产，您的应用将无法工作。

##### 参考来源

- <a href="https://fdezromero.com/cors-errors-in-ionic-apps" target="_blank" rel="noopener">
    Ionic 应用中的 CORS 错误
  </a>
- <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS" target="_blank" rel="noopener">
    MDN
  </a>
