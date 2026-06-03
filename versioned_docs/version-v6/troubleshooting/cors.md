---
title: CORS 错误
---

<head>
  <title>CORS 错误：跨源资源共享 - Ionic 文档</title>
  <meta
    name="description"
    content="如果请求发出但服务器未返回所需的标头，Web 应用中会发生 CORS 错误。在 Ionic 文档中阅读关于跨源资源共享的内容。"
  />
</head>

## 什么是 CORS？

**跨源资源共享（CORS）** 是一种机制，浏览器和 WebView（如支持 Capacitor 和 Cordova 的那些）使用它来限制脚本向不同源的资源发出的 HTTP 和 HTTPS 请求，出于安全原因，主要是为了保护用户的数据并防止可能危及您应用的攻击。

为了知道外部源是否支持 CORS，服务器必须发送一些[特殊标头](#cors-headers)，浏览器才会允许这些请求。

**源**是**协议**、**域名**和**端口**的组合，您的 Ionic 应用或外部资源从中提供服务。例如，在 Capacitor 中运行的应用有 `capacitor://localhost`（iOS）或 `http://localhost`（Android）作为其源。

当提供应用的源（例如使用 `ionic serve` 时的 `http://localhost:8100`）与请求资源的源（例如 `https://api.example.com`）不匹配时，浏览器的<a href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy" target="_blank" rel="noopener">同源策略</a>会生效，需要进行 CORS 才能发出请求。

当发出跨源请求但服务器在响应中没有返回所需的标头（未启用 CORS）时，Web 应用中常会出现 CORS 错误：

:::note
XMLHttpRequest cannot load https://api.example.com. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8100' is therefore not allowed access.
:::

## CORS 是如何工作的

### 带预检的请求

默认情况下，当 Web 应用尝试发出跨源请求时，浏览器会在实际请求之前发送一个**预检请求**。这个预检请求是为了知道外部资源是否支持 CORS，以及实际请求是否可以安全发送，因为它可能影响用户数据。

如果满足以下任一条件，浏览器会发送预检请求：

- **方法为：**
  - PUT
  - DELETE
  - CONNECT
  - OPTIONS
  - TRACE
  - PATCH
- **或者包含除以下标头之外的标头：**
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

如果满足上述任何条件，将向资源 URL 发送一个使用 `OPTIONS` 方法的预检请求。

假设我们使用 `Content-Type` 为 `application/json` 向一个虚构的 JSON API `https://api.example.com` 发出 `POST` 请求。预检请求将如下所示（为清晰起见省略了一些默认标头）：

```http
OPTIONS / HTTP/1.1
Host: api.example.com
Origin: http://localhost:8100
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type
```

如果服务器启用了 CORS，它将解析 `Access-Control-Request-*` 标头，并理解有一个 `POST` 请求正试图从 `http://localhost:8100` 使用自定义的 `Content-Type` 发出。

然后，服务器将使用 `Access-Control-Allow-*` 标头响应此预检请求，指明允许哪些源、方法和标头：

```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:8100
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

如果返回的源和方法与实际请求不匹配，或者使用的任何标头不被允许，请求将被浏览器阻止，并在控制台中显示错误。否则，请求将在预检后发出。

在我们的示例中，由于 API 期望 JSON，所有 `POST` 请求都会有 `Content-Type: application/json` 标头，并始终进行预检。

### 简单请求

如果满足以下所有条件，某些请求始终被认为是安全的，不需要预检：

- **方法为：**
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
- **`Content-Type` 标头为：**
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain
- 未使用 `ReadableStream` 或 `XMLHttpRequestUpload` 中的事件监听器。

在我们的示例 API 中，`GET` 请求不需要预检，因为没有发送 JSON 数据，应用不需要使用 `Content-Type: application/json` 标头。它们始终是简单请求。

## CORS 标头

### 服务器标头（响应）

| 标头                              | 值                | 描述                                                                                                                        |
| --------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Access-Control-Allow-Origin**   | `origin` 或 `*`   | 指定允许的源，如 `http://localhost:8100`，或 `*` 允许所有源。                                                                |
| **Access-Control-Allow-Methods**  | `methods`         | 访问资源时允许哪些方法：`GET`、`HEAD`、`POST`、`PUT`、`DELETE`、`CONNECT`、`OPTIONS`、`TRACE`、`PATCH`。                   |
| **Access-Control-Allow-Headers**  | `headers`         | 在预检请求的响应中使用，指示在实际请求中可以使用哪些标头，除了始终允许的[简单标头](#simple-requests)之外。                  |
| Access-Control-Allow-Credentials  | `true` 或 `false` | 请求是否可以使用凭据。                                                                                                      |
| Access-Control-Expose-Headers     | `headers`         | 指定浏览器允许访问的标头。                                                                                                  |
| Access-Control-Max-Age            | `seconds`         | 指示预检请求的结果可以缓存多长时间。                                                                                        |

### 浏览器标头（请求）

浏览器会自动在每个请求中向服务器发送适当的 CORS 标头，包括预检请求。请注意，以下标头仅供参考，**不应在您的应用代码中设置**（浏览器会忽略它们）。

#### 所有请求

| 标头        | 值       | 描述                     |
| ----------- | -------- | ------------------------ |
| **Origin**  | `origin` | 指示请求的源。           |

#### 预检请求

| 标头                               | 值        | 描述                                                         |
| ---------------------------------- | --------- | ------------------------------------------------------------ |
| **Access-Control-Request-Method**  | `method`  | 用于让服务器知道实际请求时将使用什么方法。                   |
| Access-Control-Request-Headers     | `headers` | 用于让服务器知道实际请求时将使用哪些非简单标头。             |

## CORS 错误的解决方案

### A. 在您控制的服务器上启用 CORS

正确且最简单的解决方案是通过从 Web 服务器或后端返回[正确的响应标头](#server-headers-response-)并响应预检请求来启用 CORS，因为它允许继续使用 `XMLHttpRequest`、`fetch` 或 Angular 中的 `HttpClient` 等抽象。

Ionic 应用可能从不同的源运行，但 `Access-Control-Allow-Origin` 标头中只能指定一个源。因此，我们建议检查请求中的 `Origin` 标头值，并在响应的 `Access-Control-Allow-Origin` 标头中反映它。

请注意，所有 `Access-Control-Allow-*` 标头必须从服务器发送，不属于您的应用代码。

以下是您的 Ionic 应用可能从中提供服务的源：

#### Capacitor

| 平台    | 源                     |
| ------- | ---------------------- |
| iOS     | `capacitor://localhost` |
| Android | `http://localhost`     |

如果您在 Capacitor 配置中更改了默认主机名，请将 `localhost` 替换为您自己的主机名。

#### Cordova 上的 Ionic WebView 3.x 插件

| 平台    | 源                 |
| ------- | ------------------ |
| iOS     | `ionic://localhost` |
| Android | `http://localhost` |

如果您在插件配置中更改了默认值，请将 `localhost` 替换为您自己的主机名。

#### Cordova 上的 Ionic WebView 2.x 插件

| 平台    | 源                     |
| ------- | ---------------------- |
| iOS     | `http://localhost:8080` |
| Android | `http://localhost:8080` |

如果您在插件配置中更改了默认值，请将端口 `8080` 替换为您自己的端口。

#### 浏览器中的本地开发

| 命令                          | 源                                                       |
| ----------------------------- | -------------------------------------------------------- |
| `ionic serve`                 | `http://localhost:8100` 或 `http://YOUR_MACHINE_IP:8100` |
| `npm run start` 或 `ng serve` | 对于 Ionic Angular 应用为 `http://localhost:4200`。       |

如果您同时运行多个应用，端口号可能更高。

使用 `Access-Control-Allow-Origin: *` 允许任何源在所有场景下都能正常工作，但可能存在安全影响（如某些 CSRF 攻击），具体取决于服务器如何控制对资源的访问以及如何使用会话和 cookie。

有关如何在不同 Web 和应用服务器上启用 CORS 的更多信息，请查看 <a href="https://enable-cors.org" target="_blank" rel="noopener">enable-cors.org</a>。

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

// 如果源在允许列表中或未定义（cURL、Postman 等），则反映该源
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

### B. 在您无法控制的服务器上绕过 CORS

#### 不要泄露您的密钥！

如果您尝试连接到第三方 API，首先请在其文档中检查是否可以直接从应用（客户端）安全地使用它，并且不会泄露任何秘密/私钥或凭据，因为很容易在 JavaScript 代码中看到明文。许多 API 故意不支持 CORS，以强制开发人员在服务器端使用它们并保护重要信息或密钥。

#### 1. 仅原生应用（iOS/Android）

使用 Ionic Native 的 HTTP 插件从 WebView 外部原生地发出请求。请注意，此插件在浏览器中不起作用，因此之后应用的开发和测试必须始终在设备或模拟器上进行。

##### 在 Ionic Angular 4 中使用

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
      console.error(error.error); // 错误消息字符串
      console.error(error.headers);
    }
  }
}
```

#### 2. 原生应用 + PWA

通过 HTTP/HTTPS 代理发送请求，该代理将请求转发到外部资源并向响应添加必要的 CORS 标头。此代理必须是可信的或在您的控制之下，因为它将拦截应用的大部分流量。

另外，请注意浏览器或 WebView 不会收到原始的 HTTPS 证书，而是收到代理发送的证书（如果提供了的话）。可能需要在代码中重写 URL 以使用代理。

查看 <a href="https://github.com/Rob--W/cors-anywhere/" target="_blank" rel="noopener">cors-anywhere</a>，了解可以部署在您自己服务器上的 Node.js CORS 代理。不建议在生产中使用免费的托管 CORS 代理。

### C. 禁用 CORS 或浏览器 Web 安全

请注意，CORS 的存在是有原因的（保护用户数据安全并防止针对您的应用的攻击）。**尝试禁用 CORS 是不可取的，也不明智**。

较旧的 WebView（如 iOS 上的 `UIWebView`）不强制执行 CORS，但已被弃用，很可能会很快消失。现代 WebView（如 iOS `WKWebView` 或 Android `WebView`，都由 Capacitor 使用）确实会强制执行 CORS，并提供了巨大的安全和性能改进。

如果您正在开发 PWA 或在浏览器中测试，使用 Google Chrome 的 `--disable-web-security` 标志或扩展来禁用 CORS 是一个非常糟糕的主意。您将暴露在各种攻击之下，您不能要求您的用户承担风险，而且您的应用一旦投入生产将无法正常工作。

##### 参考来源

- <a href="https://fdezromero.com/cors-errors-in-ionic-apps" target="_blank" rel="noopener">
    Ionic 应用中的 CORS 错误
  </a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank" rel="noopener">
    MDN
  </a>
