---
title: CORS Errors
---

<head>
  <title>CORS 错误：跨域资源共享 - Ionic 文档</title>
  <meta
    name="description"
    content="如果发出请求而服务器未返回必需的标头，Web 应用中就会发生 CORS 错误。在 Ionic 文档中阅读跨域资源共享的相关内容。"
  />
</head>

<LegacyAnchor id="cors-headers" />
<LegacyAnchor id="server-headers-response-" />

## 什么是 CORS？

**跨域资源共享（CORS）** 是一种机制，浏览器和 Webview（如为 Capacitor 和 Cordova 提供支持的 Webview）出于安全原因（主要是为了保护用户数据并防止可能危及应用的攻击），使用该机制来限制脚本向不同来源的资源发出的 HTTP 和 HTTPS 请求。

为了了解外部来源是否支持 CORS，服务器必须发送一些[特殊标头](#cors-headers)才能让浏览器允许请求。

**来源** 是提供 Ionic 应用或外部资源的**协议**、**域名**和**端口**的组合。例如，在 Capacitor 中运行的应用以 `capacitor://localhost`（iOS）或 `http://localhost`（Android）作为其来源。

当提供应用的来源（例如使用 `ionic serve` 时的 `http://localhost:8100`）与所请求资源的来源（例如 `https://api.example.com`）不匹配时，浏览器的<a href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy" target="_blank" rel="noopener">同源策略</a>就会生效，并且需要 CORS 才能发出请求。

当发出跨域请求但服务器未在响应中返回必需标头（即未启用 CORS）时，Web 应用中经常会出现 CORS 错误：

:::note
XMLHttpRequest 无法加载 https://api.example.com。所请求的资源上没有 'Access-Control-Allow-Origin' 标头。因此不允许来源 'http://localhost:8100' 进行访问。
:::

## CORS 的工作原理

### 带有预检的请求

默认情况下，当 Web 应用尝试发出跨域请求时，浏览器会在实际请求之前发送一个**预检请求**。发送此预检请求是为了了解外部资源是否支持 CORS 以及实际请求是否可以安全发送，因为它可能会影响用户数据。

如果满足以下条件，浏览器会发送预检请求：

- **请求方法为：**
  - PUT
  - DELETE
  - CONNECT
  - OPTIONS
  - TRACE
  - PATCH
- **或者，如果它具有以下之外的标头：**
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type
  - DPR
  - Downlink
  - Save-Data
  - Viewport-Width
  - Width
- **或者，如果它具有 `Content-Type` 标头且其值不是以下之一：**
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain
- 或者，如果使用了 `XMLHttpRequestUpload` 中的 `ReadableStream` 或事件监听器。

如果满足上述任一条件，就会向资源 URL 发送一个使用 `OPTIONS` 方法的预检请求。

假设我们向位于 `https://api.example.com` 的虚构 JSON API 发出一个 `Content-Type` 为 `application/json` 的 `POST` 请求。预检请求将如下所示（为清晰起见，省略了一些默认标头）：

```http
OPTIONS / HTTP/1.1
Host: api.example.com
Origin: http://localhost:8100
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type
```

如果服务器启用了 CORS，它将解析 `Access-Control-Request-*` 标头，并理解尝试从 `http://localhost:8100` 发出一个带有自定义 `Content-Type` 的 `POST` 请求。

然后，服务器将使用 `Access-Control-Allow-*` 标头来响应此预检，指明允许的来源、方法和标头：

```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:8100
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

如果返回的来源和方法与实际请求的不匹配，或者使用的任何标头不被允许，浏览器将阻止该请求，并在控制台中显示错误。否则，预检之后将发出实际请求。

在我们的示例中，由于 API 期望 JSON 数据，所有 `POST` 请求都将具有 `Content-Type: application/json` 标头，并且始终需要预检。

<LegacyAnchor id="simple-requests" />

### 简单请求

某些请求如果满足以下所有条件，则始终被认为是安全的，无需预检：

- **请求方法为：**
  - GET
  - HEAD
  - POST
- **仅具有以下标头：**
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type
  - DPR
  - Downlink
  - Save-Data
  - Viewport-Width
  - Width
- **`Content-Type` 标头的值为以下之一：**
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain
- 未使用 `XMLHttpRequestUpload` 中的 `ReadableStream` 或事件监听器。

在我们的示例 API 中，`GET` 请求不需要预检，因为不会发送 JSON 数据，因此应用不需要使用 `Content-Type: application/json` 标头。它们将始终是简单请求。

## CORS 标头

### 服务器标头（响应）

| 标头                           | 值               | 描述                                                                                                                                                                       |
| ------------------------------ | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Access-Control-Allow-Origin**  | `origin` 或 `*`  | 指定允许的来源，如 `http://localhost:8100` 或 `*` 以允许所有来源。                                                                                                         |
| **Access-Control-Allow-Methods** | `methods`        | 访问资源时允许使用的方法：`GET`、`HEAD`、`POST`、`PUT`、`DELETE`、`CONNECT`、`OPTIONS`、`TRACE`、`PATCH`。                                                                  |
| **Access-Control-Allow-Headers** | `headers`        | 用于响应预检请求，指示在发出实际请求时可以使用哪些标头（除了[简单标头](#simple-requests)，这些标头始终允许）。                                                                   |
| Access-Control-Allow-Credentials | `true` 或 `false` | 请求是否可以使用凭据。                                                                                                                                                     |
| Access-Control-Expose-Headers    | `headers`        | 指定浏览器允许访问的标头。                                                                                                                                                 |
| Access-Control-Max-Age           | `seconds`        | 指示预检请求的结果可以缓存多长时间。                                                                                                                                       |

### 浏览器标头（请求）

浏览器会在每个请求（包括预检请求）中自动向服务器发送适当的 CORS 标头。请注意，以下标头仅供参考，**不应在应用代码中设置**（浏览器将忽略它们）。

#### 所有请求

| 标头     | 值       | 描述                     |
| -------- | -------- | ------------------------ |
| **Origin** | `origin` | 指示请求的来源。         |

#### 预检请求

| 标头                            | 值      | 描述                                           |
| ------------------------------- | ------- | ---------------------------------------------- |
| **Access-Control-Request-Method** | `method`  | 用于让服务器知道发出实际请求时将使用哪种方法。 |
| Access-Control-Request-Headers    | `headers` | 用于让服务器知道发出实际请求时将使用哪些非简单标头。 |

## CORS 错误的解决方案

### A. 在您控制的服务器上启用 CORS

正确且最简单的解决方案是通过从 Web 服务器或后端返回[正确的响应标头](#server-headers-response-)并响应预检请求来启用 CORS，因为这允许继续使用 `XMLHttpRequest`、`fetch` 或 Angular 中的抽象（如 `HttpClient`）。

Ionic 应用可能从不同的来源运行，但 `Access-Control-Allow-Origin` 标头中只能指定一个来源。因此，我们建议检查请求中 `Origin` 标头的值，并在响应中的 `Access-Control-Allow-Origin` 标头中反映该值。

请注意，所有 `Access-Control-Allow-*` 标头都必须由服务器发送，不属于应用代码的一部分。

以下是您的 Ionic 应用可能来自的一些来源：

#### Capacitor

| 平台    | 来源                   |
| ------- | ---------------------- |
| iOS     | `capacitor://localhost` |
| Android | `http://localhost`      |

如果您在 Capacitor 配置中更改了默认设置，请将 `localhost` 替换为您自己的主机名。

#### Cordova 上的 Ionic WebView 3.x 插件

| 平台    | 来源               |
| ------- | ------------------ |
| iOS     | `ionic://localhost` |
| Android | `http://localhost`  |

如果您在插件配置中更改了默认设置，请将 `localhost` 替换为您自己的主机名。

#### Cordova 上的 Ionic WebView 2.x 插件

| 平台    | 来源                   |
| ------- | ---------------------- |
| iOS     | `http://localhost:8080` |
| Android | `http://localhost:8080` |

如果您在插件配置中更改了默认端口，请将端口 `8080` 替换为您自己的端口。

#### 浏览器中的本地开发

| 命令                          | 来源                                             |
| ----------------------------- | ------------------------------------------------ |
| `ionic serve`                 | `http://localhost:8100` 或 `http://YOUR_MACHINE_IP:8100` |
| `npm run start` 或 `ng serve` | Ionic Angular 应用为 `http://localhost:4200`。   |

如果您同时提供多个应用，端口号可能会更高。

使用 `Access-Control-Allow-Origin: *` 允许任何来源可以保证在所有场景中都能工作，但可能会带来安全风险（例如某些 CSRF 攻击），具体取决于服务器如何控制对资源的访问以及如何使用会话和 Cookie。

有关如何在不同的 Web 和应用服务器上启用 CORS的更多信息，请查看 <a href="https://enable-cors.org" target="_blank" rel="noopener">enable-cors.org</a>

在 Express/Connect 应用中，可以使用 <a href="https://github.com/expressjs/cors" target="_blank" rel="noopener">cors</a> 中间件轻松启用 CORS：

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

// 如果来源在允许列表中或未定义（cURL、Postman 等），则反射该来源
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
  res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
});

app.listen(3000, () => {
  console.log('CORS-enabled web server listening on port 3000');
});
```

### B. 在您无法控制的服务器上规避 CORS

#### 不要泄露您的密钥！

如果您尝试连接到第三方 API，请首先在其文档中检查直接从应用（客户端）使用它是否安全，以及它是否会泄露任何秘密/私钥或凭据，因为很容易在 Javascript 代码中以明文形式看到它们。许多 API 故意不支持 CORS，以迫使开发人员在服务器端使用它们并保护重要信息或密钥。

#### 1. 仅原生应用（iOS/Android）

##### Capacitor 应用（推荐）

对于 Capacitor 应用，请使用 [Capacitor HTTP API](https://capacitorjs.com/docs/apis/http)。此 API 会修补 `fetch` 和 `XMLHttpRequest` 以使用原生库。请注意，如果您还将应用部署到基于 Web 的上下文（例如 PWA 或本地开发服务器，例如通过 `ionic serve`），您仍然需要为这些场景实现 CORS。

##### 旧版 Cordova 应用

对于旧版 Cordova 应用，请使用[带有 Awesome Cordova Plugins 封装的 HTTP 插件](https://danielsogl.gitbook.io/awesome-cordova-plugins/http)。请注意，此插件在浏览器中不起作用，因此应用的开发和测试必须始终在设备或模拟器上进行。

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

#### 2. 原生应用 + PWA

通过 HTTP/HTTPS 代理发送请求，该代理将请求转发到外部资源，并向响应添加必要的 CORS 标头。此代理必须是受信任的或由您控制，因为它将拦截应用发出的大部分流量。

另外，请记住，浏览器或 Webview 将不会收到原始的 HTTPS 证书，而是代理发送的证书（如果提供了）。您的代码中可能需要重写 URL 才能使用代理。

请查看 <a href="https://github.com/Rob--W/cors-anywhere/" target="_blank" rel="noopener">cors-anywhere</a>，了解一个可以部署在您自己服务器上的 Node.js CORS 代理。不建议在生产环境中使用免费的托管 CORS 代理。

### C. 禁用 CORS 或浏览器 Web 安全

请注意，CORS 的存在是有原因的（保护用户数据并防止针对应用的攻击）。**尝试禁用 CORS 既不可能也不可取**。

较旧的 Webview（如 iOS 上的 `UIWebView`）不强制实施 CORS，但已弃用，并且很可能很快会消失。现代 Webview（如 iOS `WKWebView` 或 Android `WebView`，两者都被 Capacitor 使用）确实强制实施 CORS，并提供了巨大的安全性和性能改进。

如果您正在开发 PWA 或在浏览器中进行测试，在 Google Chrome 中使用 `--disable-web-security` 标志或使用扩展程序来禁用 CORS 是一个非常糟糕的主意。您将暴露于各种攻击之下，您不能要求您的用户承担风险，并且您的应用一旦投入生产将无法工作。

##### 来源

- <a href="https://fdezromero.com/cors-errors-in-ionic-apps" target="_blank" rel="noopener">
    Ionic 应用中的 CORS 错误
  </a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank" rel="noopener">
    MDN
  </a>