---
sidebar_label: 'ion-route-redirect'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/route-redirect/props.md';
import Events from '@ionic-internal/component-api/v5/route-redirect/events.md';
import Methods from '@ionic-internal/component-api/v5/route-redirect/methods.md';
import Parts from '@ionic-internal/component-api/v5/route-redirect/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/route-redirect/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/route-redirect/slots.md';

# ion-route-redirect

路由重定向组件只能与 `ion-router` 配合使用，并且必须作为其直接子元素。

> 注意：此组件仅适用于原生 JavaScript 和 Stencil 项目。对于 Angular 项目，请使用 [`ion-router-outlet`](router-outlet.md) 和 Angular 路由器。

路由重定向有两个可配置的属性：

- `from`
- `to`

它的作用是将 URL 从“来源”路径重定向到“目标”路径。当定义的 `ion-route-redirect` 规则匹配时，路由器会将 `from` 属性中指定的路径重定向到 `to` 属性中的路径。要触发重定向，`from` 路径必须与导航到的 URL 完全匹配。

## 多个路由重定向

可以在 `ion-router` 内定义任意数量的重定向路由，但只会匹配其中一个。

路由重定向在自身重定向后绝不会再次触发另一个重定向，因为这可能导致无限循环。

请看以下两个重定向规则：

```html
<ion-router>
  <ion-route-redirect from="/admin" to="/login"></ion-route-redirect>
  <ion-route-redirect from="/login" to="/admin"></ion-route-redirect>
</ion-router>
```

如果用户导航到 `/admin`，路由器将重定向到 `/login` 并在此停止。它不会评估多个重定向规则。

## 使用方式

```html
<!-- 当用户导航到 `/admin` 时会重定向，
但如果用户导航到 `/admin/posts` 则不会重定向 -->
<ion-route-redirect from="/admin" to="/login"></ion-route-redirect>

<!-- 通过添加通配符 (*)，重定向将匹配
admin 的任何子路径 -->
<ion-route-redirect from="/admin/*" to="/login"></ion-route-redirect>
```

### 路由重定向作为守卫

重定向路由可以充当守卫，根据特定条件（例如用户是否已认证）来阻止用户导航到应用的某些区域。

可以动态添加或移除路由重定向，以重定向（或守卫）某些路由，防止被访问。在下面的示例中，如果 `isLoggedIn` 为 `false`，则所有 URL `*` 都将被重定向到 `/login` 路径。

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

或者，可以根据条件修改 `to` 的值。在下面的示例中，路由重定向将检查用户是否已登录，如果未登录则重定向到 `/login` 路径。

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

## CSS 影子部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />