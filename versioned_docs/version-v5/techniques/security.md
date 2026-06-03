---
title: 安全性
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 安全性

## 净化用户输入

对于像 `ion-alert` 这样的组件，开发者可以允许自定义或用户提供的内容。这些内容可以是纯文本或 HTML，应被视为不可信。与任何不可信输入一样，在处理之前对其进行净化非常重要。特别是，使用 `innerHTML` 而不进行净化会为恶意行为者提供攻击向量，他们可以输入恶意内容并可能发起[跨站脚本攻击（XSS）](https://en.wikipedia.org/wiki/Cross-site_scripting)。

Ionic 为其提供的组件内置了基本的净化实现。然而，这并不是一个全面的解决方案。开发者需要确保所有传入的数据都经过净化。不同的框架有不同的解决方案来净化用户输入，因此开发者应熟悉其特定框架提供的功能。

对于未使用框架的开发者，或者其框架未提供所需净化方法的开发者，我们建议使用 [sanitize-html](https://www.npmjs.com/package/sanitize-html)。这个包提供了一个简单的 HTML 净化器，允许开发者指定他们希望在应用中允许的确切标签和属性。

### Angular

Angular 内置了 `DomSanitizer` 类。这有助于通过确保值在 DOM 中使用是安全的来防止 XSS 问题。默认情况下，Angular 会标记任何它认为不安全的值为不安全。例如，以下链接将被 Angular 标记为不安全，因为它会尝试执行一些 JavaScript。

```tsx
public myUrl: string = 'javascript:alert("oh no!")';

...

<a [href]="myUrl">点击我！</a>
```

要了解有关 Angular 提供的内置保护的更多信息，请参阅 [Angular 安全指南](https://angular.io/guide/security)。

### React

React DOM 在渲染之前会转义嵌入在 JSX 中的值，将它们转换为字符串。例如，以下代码是安全的，因为 `name` 在渲染前被转换为字符串：

```jsx
const name = values.name;
const element = <h1>Hello, {name}!</h1>;
```

然而，这并不能阻止有人将 JavaScript 注入到锚点元素的 `href` 属性等位置。以下代码是不安全的，可能允许 XSS 攻击发生：

```jsx
const userInput = 'javascript:alert("Oh no!")';
const element = <a href={userInput}>点击我！</a>;
```

如果开发者需要更全面的净化，他们可以使用 [sanitize-html](https://www.npmjs.com/package/sanitize-html) 包。

要了解有关 React 和 JSX 提供的内置保护的更多信息，请参阅 [React JSX 文档](https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)。

### Vue

Vue 不提供任何类型的内置净化方法。建议开发者使用诸如 [sanitize-html](https://www.npmjs.com/package/sanitize-html) 之类的包。

要了解有关绑定到 `v-html` 等指令的安全建议的更多信息，请参阅 [Vue 语法指南](https://vuejs.org/v2/guide/syntax.html#Raw-HTML)。

## 脱离内置净化器

对于希望向 `ion-toast` 等组件添加复杂 HTML 的开发者，他们需要脱离 Ionic Framework 内置的净化器。开发者可以全局禁用净化器，或者逐案绕过它。

:::note
绕过净化功能可能使你的应用容易受到 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank" rel="noreferrer">XSS 攻击</a>。在禁用净化器时请格外小心。
:::

### 通过配置禁用净化器

Ionic Framework 提供了一个名为 `sanitizerEnabled` 的应用配置选项，默认设置为 `true`。将此值设置为 `false` 可全局禁用 Ionic Framework 的内置净化器。请注意，这不会禁用其他框架（如 Angular）提供的任何净化功能。

### 逐案绕过净化器

开发者也可以选择在某些场景下脱离净化器。Ionic Framework 提供了 `IonicSafeString` 类，允许开发者做到这一点。

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
      <IonButton onClick={() => setShowToast(true)} expand="block">Show Toast（显示 Toast）</IonButton>
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
