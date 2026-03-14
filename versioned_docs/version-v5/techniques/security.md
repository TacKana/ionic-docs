---
title: Security
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 安全

## 用户输入净化

对于像 `ion-alert` 这样的组件，开发者可以允许自定义或用户提供的内容。这些内容可以是纯文本或 HTML，应被视为不可信的。与处理任何不可信输入一样，在对其进行任何其他操作之前，先进行净化处理非常重要。特别是，如果未经净化就直接使用 `innerHTML` 这类方法，会为攻击者提供一个攻击途径，使其能够输入恶意内容并可能发起[跨站脚本攻击（XSS）](https://en.wikipedia.org/wiki/Cross-site_scripting)。

Ionic 为其提供的组件内置了基础的净化实现。然而，这并非一个全面的解决方案。开发者有责任确保传递的所有数据都经过净化。不同的框架提供了不同的用户输入净化解决方案，因此开发者应熟悉其特定框架所提供的功能。

对于不使用框架的开发者，或其框架未提供所需净化方法的开发者，我们建议使用 [sanitize-html](https://www.npmjs.com/package/sanitize-html)。这个包提供了一个简单的 HTML 净化器，允许开发者指定应用程序中允许的确切标签和属性。

### Angular

Angular 内置了 `DomSanitizer` 类。它通过确保值在 DOM 中使用是安全的，来帮助防止 XSS 问题。默认情况下，Angular 会将其认为不安全的任何值标记出来。例如，以下链接会被 Angular 标记为不安全，因为它会尝试执行一些 JavaScript。

```tsx
public myUrl: string = 'javascript:alert("oh no!")';

...

<a [href]="myUrl">Click Me!</a>
```

要了解更多关于 Angular 提供的内置保护措施，请参阅 [Angular 安全指南](https://angular.io/guide/security)。

### React

React DOM 在渲染之前，通过将嵌入 JSX 的值转换为字符串来对它们进行转义。例如，以下代码是安全的，因为 `name` 在渲染前被转换成了字符串：

```jsx
const name = values.name;
const element = <h1>Hello, {name}!</h1>;
```

然而，这并不能阻止有人将 JavaScript 注入到诸如锚元素的 `href` 属性等位置。以下代码是不安全的，并可能导致 XSS 攻击发生：

```jsx
const userInput = 'javascript:alert("Oh no!")';
const element = <a href={userInput}>Click Me!</a>;
```

如果开发者需要实现更全面的净化，可以使用 [sanitize-html](https://www.npmjs.com/package/sanitize-html) 包。

要了解更多关于 React 和 JSX 提供的内置保护措施，请参阅 [React JSX 文档](https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)。

### Vue

Vue 本身不提供任何类型的净化方法。建议开发者使用诸如 [sanitize-html](https://www.npmjs.com/package/sanitize-html) 这样的包。

要了解更多关于绑定到如 `v-html` 这类指令的安全建议，请参阅 [Vue 语法指南](https://vuejs.org/v2/guide/syntax.html#Raw-HTML)。

## 绕过内置净化器

对于希望在 `ion-toast` 等组件中添加复杂 HTML 的开发者，需要绕过 Ionic Framework 内置的净化器。开发者可以选择在整个应用程序中禁用净化器，或者根据具体情况绕过它。

:::note
绕过净化功能可能会使您的应用程序容易受到 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank" rel="noreferrer">XSS 攻击</a>。禁用净化器时请务必格外小心。
:::

### 通过配置禁用净化器

Ionic Framework 提供了一个名为 `sanitizerEnabled` 的应用程序配置选项，默认设置为 `true`。将此值设置为 `false` 可在全局范围内禁用 Ionic Framework 的内置净化器。请注意，这不会禁用其他框架（如 Angular）提供的任何净化功能。

### 根据具体情况绕过净化器

开发者也可以选择在特定场景下绕过净化器。Ionic Framework 提供了 `IonicSafeString` 类，允许开发者实现这一点。

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