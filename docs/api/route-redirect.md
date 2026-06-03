---
title: "ion-route-redirect"
---

import Props from '@ionic-internal/component-api/v8/route-redirect/props.md';
import Events from '@ionic-internal/component-api/v8/route-redirect/events.md';
import Methods from '@ionic-internal/component-api/v8/route-redirect/methods.md';
import Parts from '@ionic-internal/component-api/v8/route-redirect/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/route-redirect/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/route-redirect/slots.md';

<head>
  <title>ion-route-redirect：将一个 URL '重定向' 到另一个 URL</title>
  <meta name="description" content="ion-route-redirect 作为 ion-router 的直接子组件使用，将一个 URL 'from' 重定向到另一个 URL 'to'。阅读了解路由重定向插件。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


路由重定向只能与 `ion-router` 一起使用，并作为其直接子组件。

:::note
 注意：此组件仅应使用于 vanilla 和 Stencil JavaScript 项目。对于 Angular 项目，请使用 [`ion-router-outlet`](router-outlet.md) 和 Angular 路由。
:::


路由重定向有两个可配置的属性：
 - `from`
 - `to`

它将一个 URL "from" 重定向到另一个 URL "to"。当定义的 `ion-route-redirect` 规则匹配时，路由会将 `from` 属性中指定的路径重定向到 `to` 属性中的路径。为了触发重定向，`from` 路径需要与导航到的 URL 完全匹配。


## 多个路由重定向

可以在 `ion-router` 内定义任意数量的重定向路由，但只有一个能匹配。

一个路由重定向在自身重定向后不会再调用另一个重定向，因为这可能导致无限循环。

以下面的两个重定向为例：

```html
<ion-router>
  <ion-route-redirect from="/admin" to="/login"></ion-route-redirect>
  <ion-route-redirect from="/login" to="/admin"></ion-route-redirect>
</ion-router>
```

如果用户导航到 `/admin`，路由将重定向到 `/login` 并停止。它永远不会计算超过一个重定向。




## 用法

```html
<!-- 当用户导航到 `/admin` 时重定向，
但不会在用户导航到 `/admin/posts` 时重定向 -->
<ion-route-redirect from="/admin" to="/login"></ion-route-redirect>

<!-- 通过添加通配符 (*)，重定向将匹配
admin 的任何子路径 -->
<ion-route-redirect from="/admin/*" to="/login"></ion-route-redirect>
```

### 路由重定向作为守卫

重定向路由可以作为守卫，根据给定条件（例如用户是否已认证）阻止用户导航到应用程序的某些区域。

可以动态添加和移除路由重定向，以重定向（或守卫）某些路由防止被访问。在以下示例中，如果 `isLoggedIn` 为 `false`，所有 URL `*` 将被重定向到 `/login` URL。

```tsx
const isLoggedIn = false;

const router = document.querySelector('ion-router');
const routeRedirect = document.createElement('ion-route-redirect');
routeRedirect.setAttribute('from', '*');
routeRedirect.setAttribute('to', '/login');

if (!isLoggedIn) {
  router.appendChild(routeRedirect);
}
```

或者，`to` 的值可以根据条件修改。在以下示例中，路由重定向将检查用户是否已登录，如果未登录则重定向到 `/login` URL。

```html
<ion-route-redirect id="tutorialRedirect" from="*"></ion-route-redirect>
```

```javascript
const isLoggedIn = false;
const routeRedirect = document.querySelector('#tutorialRedirect');

routeRedirect.setAttribute('to', isLoggedIn ? undefined : '/login');
```

## 属性
<Props />

## 事件
<Events />

## 方法
<Methods />

## CSS Shadow Parts
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />
