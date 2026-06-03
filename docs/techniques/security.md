---
title: 安全
---

<head>
  <title>Angular、React 和 Vue 应用的安全 - Ionic Framework</title>
  <meta
    name="description"
    content="查看 Ionic 关于清理用户输入、绕过内置清理器等安全信息。了解使用 Angular、React 和 Vue 的应用安全。"
  />
</head>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 清理用户输入

对于像 `ion-alert` 这样的组件，开发者可以允许自定义或用户提供的内容。这些内容可以是纯文本或 HTML，应被视为不可信的。与任何不可信输入一样，在对它进行任何操作之前，对其进行清理非常重要。特别是，使用未经过清理的 `innerHTML` 等内容为不良行为者提供了注入恶意内容的攻击向量，并可能发起[跨站脚本攻击（XSS）](https://en.wikipedia.org/wiki/Cross-site_scripting)。

Ionic 为其提供的组件内置了基本的清理实现。但这并不是一个全面的解决方案。开发者需要确保传递的所有数据都经过清理。不同的框架有不同的清理用户输入的解决方案，因此开发者应熟悉其特定框架提供的功能。

对于未使用框架的开发者，或其框架未提供所需清理方法的开发者，我们建议使用 [sanitize-html](https://www.npmjs.com/package/sanitize-html)。这个包提供了一个简单的 HTML 清理器，允许开发者指定其应用中允许的确切标签和属性。

### Angular

Angular 内置了 `DomSanitizer` 类。这有助于通过确保值在 DOM 中安全使用来防止 XSS 问题。默认情况下，Angular 会标记任何它认为不安全的值的。例如，以下链接会被 Angular 标记为不安全，因为它试图执行一些 JavaScript。

```tsx
public myUrl: string = 'javascript:alert("oh no!")';

...

<a [href]="myUrl">点我！</a>
```

要了解更多关于 Angular 提供的内置保护，请参阅 [Angular 安全指南](https://angular.io/guide/security)。

### React

React DOM 在渲染之前将 JSX 中嵌入的值转义为字符串。例如，以下代码是安全的，因为 `name` 在渲染之前被转换为字符串：

```jsx
const name = values.name;
const element = <h1>你好，{name}！</h1>;
```

然而，这并不能阻止有人将 JavaScript 注入到诸如锚元素的 `href` 属性等位置。以下代码是不安全的，可能允许 XSS 攻击发生：

```jsx
const userInput = 'javascript:alert("Oh no!")';
const element = <a href={userInput}>点我！</a>;
```

如果开发者需要实现更全面的清理，可以使用 [sanitize-html](https://www.npmjs.com/package/sanitize-html) 包。

### Vue

Vue 没有提供任何内置的清理方法。建议开发者使用诸如 [sanitize-html](https://www.npmjs.com/package/sanitize-html) 之类的包。

要了解更多关于绑定到诸如 `v-html` 等指令的安全建议，请参阅 [Vue 语法指南](https://vuejs.org/v2/guide/syntax.html#Raw-HTML)。

## 通过 `innerHTML` 启用自定义 HTML 解析

`ion-alert`、`ion-infinite-scroll-content`、`ion-loading`、`ion-refresher-content` 和 `ion-toast` 可以接受自定义 HTML 字符串作为某些属性的值。这些字符串通过 `innerHTML` 添加到 DOM 中，必须由开发者正确清理。此行为默认是禁用的，这意味着传递给受影响组件的值将始终被解释为纯文本。开发者可以通过在 [IonicConfig](../developing/config#ionicconfig) 中设置 `innerHTMLTemplatesEnabled: true` 来启用此自定义 HTML 行为。

## 绕过内置清理器

对于希望向诸如 `ion-toast` 等组件添加复杂 HTML 的开发者，他们需要绕过 Ionic Framework 内置的清理器。开发者可以在整个应用中禁用清理器，或者逐个案例地绕过它。

:::note
绕过清理功能可能使您的应用容易受到 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank" rel="noreferrer">XSS 攻击</a>。在禁用清理器时请务必格外小心。
:::

### 通过配置禁用清理器

Ionic Framework 提供了一个名为 `sanitizerEnabled` 的应用配置选项，默认为 `true`。将此值设置为 `false` 可全局禁用 Ionic Framework 的内置清理器。请注意，这不会禁用其他框架（如 Angular）提供的任何清理功能。

### 逐个案例地绕过清理器

开发者也可以选择在某些场景下绕过清理器。Ionic Framework 提供了 `IonicSafeString` 类，允许开发者做到这一点。

:::note
为了绕过清理器并在相关的 Ionic 组件中使用未清理的自定义 HTML，必须在 Ionic 配置中将 `innerHTMLTemplatesEnabled` 设置为 `true`。

如果 `innerHTMLTemplatesEnabled` 设置为 `false`，则不应使用 `IonicSafeString`。

更多信息请参阅[启用自定义 HTML 解析](#通过-innerhtml-启用自定义-html-解析)。
:::

#### 用法

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
  ]
}>
<TabItem value="angular">

```tsx
import { IonicSafeString, ToastController } from '@ionic/angular';

...

constructor(private toastController: ToastController) {}

async presentToast() {
  const toast = await this.toastController.create({
      message: new IonicSafeString('<ion-button>你好！</ion-button>'),
      duration: 2000
  });
  toast.present();
}

```
</TabItem>
<TabItem value="angular-standalone">

```tsx
import { IonicSafeString, ToastController } from '@ionic/angular/standalone';

...

constructor(private toastController: ToastController) {}

async presentToast() {
  const toast = await this.toastController.create({
      message: new IonicSafeString('<ion-button>你好！</ion-button>'),
      duration: 2000
  });
  toast.present();
}

```
</TabItem>
<TabItem value="javascript">

```javascript
import { IonicSafeString } from '@ionic/core';

...

const async presentToast = () => {
  const toast = document.createElement('ion-toast');
  toast.message = new IonicSafeString('<ion-button>你好！</ion-button>');
  toast.duration = 2000;

  document.body.appendChild(toast);
  return toast.present();
}

```
</TabItem>
<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { Animation, IonButton, IonContent, IonicSafeString, IonToast } from '@ionic/react';

export const ToastExample: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <IonContent>
      <IonButton onClick={() => setShowToast(true)} expand="block">显示 Toast</IonButton>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={new IonicSafeString('<ion-button>你好！</ion-button>')}
        duration={2000}
      />
    </IonContent>
  )
};
```
</TabItem>
</Tabs>
````

## 内容安全策略（CSP）

[内容安全策略（CSP）](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)是一种安全机制，帮助保护 Web 应用免受某些类型的攻击，如跨站脚本（XSS）和数据注入。它通过 HTTP 标头实现，指示浏览器允许在网页上加载和执行哪些来源的内容，如脚本、样式表和图片。

CSP 的主要目的是减轻代码注入攻击带来的风险。通过定义策略，Web 开发者可以指定浏览器应允许从哪些域或来源加载和执行各种类型的内容。这有效地限制了恶意脚本或未经授权内容可能造成的潜在损害。

### 启用 CSP

开发者可以通过在 script 和 style 标签上设置包含策略详细信息和预期 nonce 值的 meta 标签来为其应用分配 CSP。

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'nonce=randomNonceGoesHere'; style-src 'self' 'nonce=randomNonceGoesHere';"
/>
```

### Ionic 与 CSP

Ionic Framework 提供了一个函数来帮助开发者设置在构建 Web 组件样式表时使用的 nonce 值。此函数应在任何 Ionic 组件加载之前调用。这是将 nonce 值传递给 Web 组件所必需的，以便它们可以在 CSP 环境中使用。

```ts
import { setNonce } from '@ionic/core/loader';

setNonce('randomNonceGoesHere');
```

:::tip

在 Angular 中，这可以在 `main.ts` 文件中，在应用启动之前调用。

:::

有关如何将 CSP 与 Stencil Web 组件一起使用的更多信息，请参阅 [Stencil 文档](https://stenciljs.com/docs/csp-nonce)。

### Angular

从 Angular 16 开始，Angular 提供了两个设置 nonce 值的选项。

1. 在根应用元素上设置 `ngCspNonce` 属性，如 `<app ngCspNonce="randomNonceGoesHere"></app>`。如果您可以访问服务器端模板，在构建响应时将 nonce 同时添加到标头和 `index.html` 中，请使用此方法。
2. 使用 [`CSP_NONCE`](https://angular.io/api/core/CSP_NONCE) 注入令牌提供 nonce。如果您在运行时可以访问 nonce 并且想要缓存 `index.html`，请使用此方法。

:::tip

如果提供 `CSP_NONCE` 注入令牌，请在模块项目的 `AppModule` 中或独立项目的 `bootstrapApplication` 中设置提供者。

:::

有关如何将 CSP 与 Angular 一起使用的更多信息，请参阅 [Angular 文档](https://angular.io/guide/security#content-security-policy)。
