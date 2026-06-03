---
title: 安全
---

<head>
  <title>适用于 Angular、React 和 Vue 应用的安全 - Ionic Framework</title>
  <meta
    name="description"
    content="查看 Ionic 关于清理用户输入、退出内置清理器等安全信息。了解使用 Angular、React 和 Vue 的应用安全。"
  />
</head>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 清理用户输入

对于诸如 `ion-alert` 之类的组件，开发者可以允许自定义或用户提供的内容。此内容可以是纯文本或 HTML，应被视为不可信。与任何不可信输入一样，在对它进行任何其他操作之前，务必先进行清理。特别是，使用诸如 `innerHTML` 而不进行清理，会为恶意行为者提供输入恶意内容的攻击向量，并可能发起[跨站脚本攻击 (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting)。

Ionic 为其提供的组件内置了基本的清理实现。但是，它并不是一个全面的解决方案。开发者有责任确保所有传递的数据都经过清理。不同的框架有不同的清理用户输入的解决方案，因此开发者应熟悉其特定框架提供的功能。

对于未使用框架的开发者，或者框架未提供所需清理方法的开发者，我们建议使用 [sanitize-html](https://www.npmjs.com/package/sanitize-html)。这个包提供了一个简单的 HTML 清理器，允许开发者指定他们希望在应用中允许的确切标签和属性。

### Angular

Angular 内置了 `DomSanitizer` 类。这有助于通过确保值在 DOM 中使用是安全的来防止 XSS 问题。默认情况下，Angular 会标记任何它认为不安全的值为不安全。例如，以下链接将被 Angular 标记为不安全，因为它会尝试执行一些 JavaScript。

```tsx
public myUrl: string = 'javascript:alert("oh no!")';

...

<a [href]="myUrl">Click Me!</a>
```

要了解有关 Angular 提供的内置保护的更多信息，请参阅 [Angular 安全指南](https://angular.io/guide/security)。

### React

React DOM 在渲染之前会转义 JSX 中嵌入的值，将它们转换为字符串。例如，以下代码是安全的，因为 `name` 在渲染之前被转换为字符串：

```jsx
const name = values.name;
const element = <h1>Hello, {name}!</h1>;
```

但是，这并不能阻止某人将 JavaScript 注入到诸如锚元素的 `href` 属性之类的位置。以下代码是不安全的，可能允许 XSS 攻击发生：

```jsx
const userInput = 'javascript:alert("Oh no!")';
const element = <a href={userInput}>Click Me!</a>;
```

如果开发者需要实现更全面的清理，他们可以使用 [sanitize-html](https://www.npmjs.com/package/sanitize-html) 包。

要了解有关 React 和 JSX 提供的内置保护的更多信息，请参阅 [React JSX 文档](https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)。

### Vue

Vue 没有内置任何类型的清理方法。建议开发者使用诸如 [sanitize-html](https://www.npmjs.com/package/sanitize-html) 之类的包。

要了解有关绑定到诸如 `v-html` 等指令的安全建议的更多信息，请参阅 [Vue 语法指南](https://vuejs.org/v2/guide/syntax.html#Raw-HTML)。

## 通过 `innerHTML` 禁用自定义 HTML 解析

`ion-alert`、`ion-infinite-scroll-content`、`ion-loading`、`ion-refresher-content` 和 `ion-toast` 接受自定义 HTML 字符串作为某些属性的值。这些字符串使用 `innerHTML` 添加到 DOM 中，必须由开发者正确清理。开发者可以通过在 [IonicConfig](../developing/config#ionicconfig) 中设置 `innerHTMLTemplatesEnabled: false` 来禁用此功能。当 `innerHTMLTemplatesEnabled` 为 `false` 时，传递给受影响组件的值将始终被解释为字符串。

## 退出内置清理器

对于希望向诸如 `ion-toast` 等组件添加复杂 HTML 的开发者，他们需要退出 Ionic Framework 内置的清理器。开发者可以全局禁用清理器，也可以逐案绕过它。

:::note
绕过清理功能可能会使您的应用容易受到 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank" rel="noreferrer">XSS 攻击</a>。在禁用清理器时，请务必格外小心。
:::

### 通过配置禁用清理器

Ionic Framework 提供了一个名为 `sanitizerEnabled` 的应用配置选项，默认设置为 `true`。将此值设置为 `false` 以全局禁用 Ionic Framework 的内置清理器。请注意，这不会禁用其他框架（如 Angular）提供的任何清理功能。

### 逐案绕过清理器

开发者也可以选择在某些场景下退出清理器。Ionic Framework 提供了 `IonicSafeString` 类来实现这一点。

#### 用法

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
      <IonButton onClick={() => setShowToast(true)} expand="block">Show Toast</IonButton>
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
