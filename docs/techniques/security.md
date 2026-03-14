---
title: 安全技术
---

<head>
  <title>Angular、React 和 Vue 应用的安全指南 - Ionic Framework</title>
  <meta
    name="description"
    content="查看 Ionic 关于用户输入净化、绕过内置净化器等方面的安全信息。学习使用 Angular、React 和 Vue 进行应用安全保护。"
  />
</head>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 用户输入净化

对于像 `ion-alert` 这样的组件，开发者可以允许自定义或用户提供的内容。这些内容可以是纯文本或 HTML，应被视为不可信内容。与处理任何不可信输入一样，在使用之前对其进行净化至关重要。特别是，未经净化就直接使用 `innerHTML` 等操作，会为恶意攻击者提供输入恶意内容并可能发起[跨站脚本攻击（XSS）](https://en.wikipedia.org/wiki/Cross-site_scripting)的攻击途径。

Ionic 内置了为其提供的组件的基本净化实现。然而，这并非全面的解决方案。确保所有传递的数据都经过净化是开发者的责任。不同的框架有不同的用户输入净化解决方案，因此开发者应熟悉其特定框架所提供的功能。

对于不使用框架的开发者，或框架未提供所需净化方法的开发者，我们推荐使用 [sanitize-html](https://www.npmjs.com/package/sanitize-html)。这个包提供了一个简单的 HTML 净化器，允许开发者指定应用中允许的确切标签和属性。

### Angular

Angular 内置了 `DomSanitizer` 类。这通过确保值在 DOM 中使用是安全的，有助于防止 XSS 问题。默认情况下，Angular 会标记任何它认为不安全的数值。例如，以下链接会被 Angular 标记为不安全，因为它试图执行一些 JavaScript。

```tsx
public myUrl: string = 'javascript:alert("oh no!")';

...

<a [href]="myUrl">Click Me!</a>
```

要了解更多关于 Angular 提供的内置保护措施，请参阅 [Angular 安全指南](https://angular.io/guide/security)。

### React

React DOM 在渲染之前通过将值转换为字符串来转义嵌入在 JSX 中的值。例如，以下代码是安全的，因为 `name` 在渲染前被转换为字符串：

```jsx
const name = values.name;
const element = <h1>Hello, {name}!</h1>;
```

然而，这并不能阻止有人将 JavaScript 注入到锚元素的 `href` 属性等位置。以下是不安全的，可能会允许 XSS 攻击发生：

```jsx
const userInput = 'javascript:alert("Oh no!")';
const element = <a href={userInput}>Click Me!</a>;
```

如果开发者需要实现更全面的净化，可以使用 [sanitize-html](https://www.npmjs.com/package/sanitize-html) 包。

### Vue

Vue 本身不提供任何类型的净化方法。建议开发者使用诸如 [sanitize-html](https://www.npmjs.com/package/sanitize-html) 这样的包。

要了解更多关于绑定到 `v-html` 等指令的安全建议，请参阅 [Vue 语法指南](https://vuejs.org/v2/guide/syntax.html#Raw-HTML)。

## 通过 `innerHTML` 启用自定义 HTML 解析

`ion-alert`、`ion-infinite-scroll-content`、`ion-loading`、`ion-refresher-content` 和 `ion-toast` 可以接受自定义 HTML 字符串作为某些属性的值。这些字符串使用 `innerHTML` 添加到 DOM 中，必须由开发者进行适当净化。默认情况下，此行为是禁用的，这意味着传递给受影响组件的值将始终被解释为纯文本。开发者可以通过在 [IonicConfig](../developing/config#ionicconfig) 中设置 `innerHTMLTemplatesEnabled: true` 来启用此自定义 HTML 行为。

## 绕过内置净化器

对于希望向 `ion-toast` 等组件添加复杂 HTML 的开发者，他们将需要绕过 Ionic Framework 内置的净化器。开发者可以全局禁用净化器，也可以根据具体情况绕过它。

:::note
绕过净化功能可能使您的应用容易受到 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank" rel="noreferrer">XSS 攻击</a>。禁用净化器时请务必格外小心。
:::

### 通过配置禁用净化器

Ionic Framework 提供了一个名为 `sanitizerEnabled` 的应用配置选项，默认设置为 `true`。将此值设置为 `false` 可全局禁用 Ionic Framework 的内置净化器。请注意，这不会禁用其他框架（如 Angular）提供的任何净化功能。

### 按具体情况绕过净化器

开发者也可以选择在某些情况下绕过净化器。Ionic Framework 提供了 `IonicSafeString` 类，允许开发者做到这一点。

:::note
为了绕过净化器并在相关的 Ionic 组件中使用未净化的自定义 HTML，必须在 Ionic 配置中将 `innerHTMLTemplatesEnabled` 设置为 `true`。

如果 `innerHTMLTemplatesEnabled` 设置为 `false`，则不应使用 `IonicSafeString`。

有关更多信息，请参阅 [启用自定义 HTML 解析](#enabling-custom-html-parsing-via-innerhtml)。
:::

#### 用法

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (独立版)' },
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
      message: new IonicSafeString('<ion-button>Hello!</ion-button>'),
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
      message: new IonicSafeString('<ion-button>Hello!</ion-button>'),
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
  toast.message = new IonicSafeString('<ion-button>Hello!</ion-button>');
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
        message={new IonicSafeString('<ion-button>Hello!</ion-button>')}
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

[内容安全策略（CSP）](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) 是一种安全机制，有助于保护 Web 应用免受某些类型的攻击，例如跨站脚本（XSS）和数据注入。它通过 HTTP 标头实现，指示浏览器允许在网页上加载和执行哪些内容源，例如脚本、样式表和图像。

CSP 的主要目的是减轻与代码注入攻击相关的风险。通过定义策略，Web 开发者可以指定浏览器应允许从哪些域或源加载和执行各种类型的内容。这有效地限制了恶意脚本或未经授权的内容可能造成的潜在损害。

### 启用 CSP

开发者可以通过设置一个包含策略详细信息和脚本及样式标签上预期随机数（nonce）值的 meta 标签，为其应用分配 CSP。

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'nonce-randomNonceGoesHere'; style-src 'self' 'nonce-randomNonceGoesHere';"
/>
```

### Ionic 与 CSP

Ionic Framework 提供了一个函数，帮助开发者设置构建 Web 组件样式表时使用的随机数（nonce）值。此函数应在加载任何 Ionic 组件之前调用。这是将随机数值传递给 Web 组件以便在 CSP 环境中使用所必需的。

```ts
import { setNonce } from '@ionic/core/loader';

setNonce('randomNonceGoesHere');
```

:::tip

在 Angular 中，可以在 `main.ts` 文件中调用此函数，在应用启动之前。

:::

有关如何将 CSP 与 Stencil Web 组件一起使用的更多信息，请参阅 [Stencil 文档](https://stenciljs.com/docs/csp-nonce)。

### Angular

从 Angular 16 开始，Angular 提供了两种设置随机数（nonce）值的选项。

1. 在根应用元素上设置 `ngCspNonce` 属性，如 `<app ngCspNonce="randomNonceGoesHere"></app>`。如果您有服务器端模板的访问权限，可以在构建响应时将随机数同时添加到标头和 `index.html` 中，请使用此方法。
2. 使用 [`CSP_NONCE`](https://angular.io/api/core/CSP_NONCE) 注入令牌提供随机数。如果您在运行时可以访问随机数，并且希望能够缓存 `index.html`，请使用此方法。

:::tip

如果提供 `CSP_NONCE` 注入令牌，请在模块项目的 `AppModule` 中或在独立项目的 `bootstrapApplication` 中设置提供程序。

:::

有关如何将 CSP 与 Angular 一起使用的更多信息，请参阅 [Angular 文档](https://angular.io/guide/security#content-security-policy)。