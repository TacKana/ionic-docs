---
title: 'ion-route-redirect'
---

import Props from '@ionic-internal/component-api/v7/route-redirect/props.md';
import Events from '@ionic-internal/component-api/v7/route-redirect/events.md';
import Methods from '@ionic-internal/component-api/v7/route-redirect/methods.md';
import Parts from '@ionic-internal/component-api/v7/route-redirect/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/route-redirect/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/route-redirect/slots.md';

<head>
  <title>ion-route-redirect：将 URL 从某个路径重定向到另一个路径</title>
  <meta
    name="description"
    content="ion-route-redirect 用作 ion-router 的直接子组件，可将 URL 从某个路径重定向到另一个路径。了解路由重定向插件的使用方法。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

路由重定向组件只能作为 `ion-router` 的直接子组件使用。

:::note
注意：此组件仅适用于原生 JavaScript 和 Stencil 项目。对于 Angular 项目，请使用 [`ion-router-outlet`](router-outlet.md) 和 Angular 路由器。
:::

路由重定向包含两个可配置属性：

- `from`
- `to`

它用于将 URL 从 "from" 路径重定向到 "to" 路径。当定义的 `ion-route-redirect` 规则匹配时，路由器会将 `from` 属性指定的路径重定向到 `to` 属性的路径。重定向发生时，`from` 路径必须与导航的 URL 完全匹配。

## 多个路由重定向

可以在 `ion-router` 内定义任意数量的重定向路由，但只会匹配其中一个。

一个路由重定向在自身重定向后，永远不会调用另一个重定向，因为这可能导致无限循环。

请看以下两个重定向：

```html
<ion-router>
  <ion-route-redirect from="/admin" to="/login"></ion-route-redirect>
  <ion-route-redirect from="/login" to="/admin"></ion-route-redirect>
</ion-router>
```

如果用户导航到 `/admin`，路由器将重定向到 `/login` 并在此停止。它不会评估多个重定向。

## 使用方法

```html
<!-- 当用户导航到 `/admin` 时重定向，
但如果用户导航到 `/admin/posts` 则不会重定向 -->
<ion-route-redirect from="/admin" to="/login"></ion-route-redirect>

<!-- 通过添加通配符 (*)，重定向将匹配
admin 的任何子路径 -->
<ion-route-redirect from="/admin/*" to="/login"></ion-route-redirect>
```

### 路由重定向作为守卫

重定向路由可以作为守卫，根据特定条件（例如用户是否已认证）防止用户导航到应用程序的某些区域。

可以动态添加和移除路由重定向，以重定向（或守卫）某些路由，防止被访问。在以下示例中，如果 `isLoggedIn` 为 `false`，则所有 URL `*` 都将重定向到 `/login`。

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

或者，可以根据条件修改 `to` 的值。在以下示例中，路由重定向将检查用户是否已登录，如果未登录则重定向到 `/login`。

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