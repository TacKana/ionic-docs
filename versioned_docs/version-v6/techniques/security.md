---
title: Security
---

<head>
  <title>Angular、React 和 Vue 应用安全指南 - Ionic 框架</title>
  <meta
    name="description"
    content="查看 Ionic 关于用户输入清理、内置清理器退出等方面的安全信息。学习使用 Angular、React 和 Vue 的应用安全知识。"
  />
</head>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 清理用户输入

对于诸如 `ion-alert` 这样的组件，开发者可以允许自定义或用户提供的内容。这些内容可能是纯文本或 HTML，应被视为不可信任的。与任何不可信任的输入一样，在进行其他操作之前进行清理是非常重要的。特别是，未经清理就使用 `innerHTML` 之类的方法，会为恶意行为者提供输入恶意内容并可能发起[跨站脚本攻击（XSS）](https://en.wikipedia.org/wiki/Cross-site_scripting)的攻击途径。

Ionic 为其提供的组件内置了基本的清理实现。然而，这并非一个全面的解决方案。开发者需要确保传递的所有数据都经过清理。不同的框架针对用户输入清理有不同的解决方案，因此开发者应该熟悉他们所用框架提供的功能。

对于不使用框架的开发者，或者其框架未提供所需清理方法的开发者，我们推荐使用 [sanitize-html](https://www.npmjs.com/package/sanitize-html)。这个包提供了一个简单的 HTML 清理器，允许开发者指定他们希望在应用中允许的确切标签和属性。

### Angular

Angular 内置了 `DomSanitizer` 类。它通过确保值在 DOM 中使用是安全的，来帮助防止 XSS 问题。默认情况下，Angular 会标记任何它认为不安全的数值。例如，以下链接会被 Angular 标记为不安全，因为它会尝试执行一些 JavaScript。

```tsx
public myUrl: string = 'javascript:alert("oh no!")';

...

<a [href]="myUrl">点击我！</a>
```

要了解更多关于 Angular 内置保护机制的信息，请参阅 [Angular 安全指南](https://angular.io/guide/security)。

### React

React DOM 在渲染之前通过将值转换为字符串来转义嵌入 JSX 中的值。例如，由于 `name` 在渲染前被转换为字符串，所以以下代码是安全的：

```jsx
const name = values.name;
const element = <h1>你好，{name}！</h1>;
```

然而，这并不能阻止有人将 JavaScript 注入到诸如锚元素的 `href` 属性等位置。以下代码是不安全的，可能允许 XSS 攻击发生：

```jsx
const userInput = 'javascript:alert("Oh no!")';
const element = <a href={userInput}>点击我！</a>;
```

如果开发者需要实现更全面的清理，可以使用 [sanitize-html](https://www.npmjs.com/package/sanitize-html) 包。

要了解更多关于 React 和 JSX 提供的内置保护机制，请参阅 [React JSX 文档](https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)。

### Vue

Vue 本身不提供任何类型的清理方法。建议开发者使用诸如 [sanitize-html](https://www.npmjs.com/package/sanitize-html) 这样的包。

要了解更多关于绑定到指令（如 `v-html`）的安全建议，请参阅 [Vue 语法指南](https://vuejs.org/v2/guide/syntax.html#Raw-HTML)。

## 禁用通过 `innerHTML` 进行的自定义 HTML 解析

`ion-alert`、`ion-infinite-scroll-content`、`ion-loading`、`ion-refresher-content` 和 `ion-toast` 接受特定属性的自定义 HTML 字符串。这些字符串使用 `innerHTML` 添加到 DOM 中，必须由开发者进行适当清理。开发者可以通过在 [IonicConfig](../developing/config#ionicconfig) 中设置 `innerHTMLTemplatesEnabled: false` 来禁用此功能。当 `innerHTMLTemplatesEnabled` 为 `false` 时，传递给受影响组件的值将始终被解释为字符串。

## 退出内置清理器

对于希望向 `ion-toast` 等组件添加复杂 HTML 的开发者，他们需要退出 Ionic 框架内置的清理器。开发者可以选择在整个应用中禁用清理器，或者按需绕过它。

:::note
绕过清理功能可能会使你的应用容易受到 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank" rel="noreferrer">XSS 攻击</a>。在禁用清理器时请务必格外小心。
:::

### 通过配置禁用清理器

Ionic 框架提供了一个名为 `sanitizerEnabled` 的应用配置选项，默认设置为 `true`。将此值设置为 `false` 可全局禁用 Ionic 框架内置的清理器。请注意，这不会禁用其他框架（如 Angular）提供的任何清理功能。

### 按需绕过清理器

开发者还可以选择在特定场景下退出清理器。Ionic 框架提供了 `IonicSafeString` 类，允许开发者实现这一需求。

#### 使用方法

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
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