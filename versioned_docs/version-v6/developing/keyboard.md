---
title: Keyboard
---

import Codepen from '@components/global/Codepen';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>键盘指南: 管理移动应用屏幕键盘的工具</title>
  <meta
    name="description"
    content="处理屏幕键盘是开发者常遇到的障碍。本指南介绍了在移动应用中管理屏幕键盘的各种可用工具。"
  />
</head>

自定义屏幕键盘并处理其显示是开发者在构建移动应用和 PWA 时经常遇到的两大挑战。本指南将介绍在应用中管理屏幕键盘的各种可用工具。

## inputmode

`inputmode` 属性允许开发者指定输入框中可能输入的数据类型。这将提示浏览器显示包含与用户输入内容相关按钮的键盘。例如，`inputmode="email"` 会显示带有 `@` 键的键盘，并针对输入邮箱进行其他优化。

由于 `inputmode` 是一个全局属性，它不仅可以用于常规输入元素，还可以用于 Ionic 组件，如 `ion-input` 和 `ion-textarea`。

对于_必须_输入特定数据类型的输入框，应使用 `type` 属性代替。例如，要求输入邮箱的输入框应使用 `type="email"` 而不是指定 `inputmode`。这是因为将要输入的数据始终是邮箱格式。另一方面，如果输入框接受邮箱或用户名，则使用 `inputmode="email"` 是合适的，因为输入的数据并不总是邮箱地址。

有关可接受值的列表，请参阅 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode" target="_blank" rel="noreferrer">inputmode 文档</a>。

### 用法

````mdx-code-block
<Tabs
  defaultValue="javascript"
  groupId="framework"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```html
<ion-item>
  <ion-label>用户名或邮箱</ion-label>
  <ion-input inputmode="email"></ion-input>
</ion-item>

<ion-item>
  <ion-label>请输入数字</ion-label>
  <ion-textarea inputmode="numeric"></ion-textarea>
</ion-item>
```
</TabItem>
<TabItem value="angular">

```html
<ion-item>
  <ion-label>用户名或邮箱</ion-label>
  <ion-input inputmode="email"></ion-input>
</ion-item>

<ion-item>
  <ion-label>请输入数字</ion-label>
  <ion-textarea inputmode="numeric"></ion-textarea>
</ion-item>
```
</TabItem>
<TabItem value="react">

```html
<IonItem>
  <IonLabel>用户名或邮箱</IonLabel>
  <IonInput inputmode="email"></IonInput>
</IonItem>

<IonItem>
  <IonLabel>请输入数字</IonLabel>
  <IonTextarea inputmode="numeric"></IonTextarea>
</IonItem>
```
</TabItem>
<TabItem value="vue">

```html
<ion-item>
  <ion-label>用户名或邮箱</ion-label>
  <ion-input inputmode="email"></ion-input>
</ion-item>

<ion-item>
  <ion-label>请输入数字</ion-label>
  <ion-textarea inputmode="numeric"></ion-textarea>
</ion-item>
```
</TabItem>
</Tabs>
````

<Codepen user="ionic" slug="abvJVVv" height="400" />

:::note
`inputmode` 属性在 Chrome 66+ 和 iOS Safari 12.2+ 的设备上支持：https://caniuse.com/#search=inputmode
:::

## enterkeyhint

`enterkeyhint` 属性允许开发者指定“回车键”上应显示的操作标签或图标类型。使用 `enterkeyhint` 可以让用户知道点击“回车键”会发生什么。此处应指定的值取决于用户正在进行的操作上下文。例如，如果用户正在搜索框中输入，开发者应确保输入框具有 `enterkeyhint="search"`。

由于 `enterkeyhint` 是一个全局属性，它不仅可以用于常规输入元素，还可以用于 Ionic 组件，如 `ion-input` 和 `ion-textarea`。

有关可接受值的列表，请参阅 <a href="https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute" target="_blank" rel="noreferrer">enterkeyhint 标准</a>。

### 用法

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```html
<ion-item>
  <ion-label>输入搜索查询</ion-label>
  <ion-input enterkeyhint="search" type="search"></ion-input>
</ion-item>
```
</TabItem>
<TabItem value="angular">

```html
<ion-item>
  <ion-label>输入搜索查询</ion-label>
  <ion-input enterkeyhint="search" type="search"></ion-input>
</ion-item>
```
</TabItem>
<TabItem value="react">

```html
<IonItem>
  <IonLabel>输入搜索查询</IonLabel>
  <IonInput enterkeyhint="search" type="search"></IonInput>
</IonItem>
```
</TabItem>
<TabItem value="vue">

```html
<ion-item>
  <ion-label>输入搜索查询</ion-label>
  <ion-input enterkeyhint="search" type="search"></ion-input>
</ion-item>
```
</TabItem>
</Tabs>
````

<Codepen user="ionic" slug="GRpWyRB" height="350" />

:::note
`enterkeyhint` 属性在 Chrome 77+ 和 iOS Safari 13.4+ 的设备上支持。
:::

## 深色模式

默认情况下，键盘主题由操作系统决定。例如，如果在 iOS 上启用了深色模式，即使你的应用 CSS 中没有深色主题，应用中的键盘也会以深色主题显示。

在移动网络浏览器或作为 PWA 运行的应用中，无法强制键盘以特定主题显示。

在 Capacitor 或 Cordova 中运行应用时，可以强制键盘以特定主题显示。有关此配置的更多信息，请参阅 <a href="https://capacitorjs.com/docs/apis/keyboard#keyboard-configuration-ios-only-" target="_blank">Capacitor 键盘文档</a>。

## 隐藏辅助栏

当运行任何类型的基于 Web 的应用程序时，iOS 会在键盘上方显示一个辅助栏。这允许用户移动到下一个或上一个输入框，以及关闭键盘。

在移动网络浏览器或作为 PWA 运行的应用中，无法隐藏辅助栏。

在 Capacitor 或 Cordova 中运行应用时，可以隐藏辅助栏。有关此配置的更多信息，请参阅 <a href="https://capacitorjs.com/docs/apis/keyboard#keyboard-configuration-ios-only-" target="_blank">Capacitor 键盘文档</a>。

## 键盘生命周期事件

检测屏幕键盘的存在有助于调整输入框的位置，否则键盘可能会遮挡输入框。对于 Capacitor 和 Cordova 应用，开发者通常依赖原生键盘插件来监听键盘生命周期事件。对于在移动浏览器或作为 PWA 运行的应用，开发者可以在支持的情况下使用 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API" rel="noreferrer" target="_blank">Visual Viewport API</a>。Ionic Framework 封装了这两种方法，并在 `window` 上触发 `ionKeyboardDidShow` 和 `ionKeyboardDidHide` 事件。`ionKeyboardDidShow` 的事件负载包含以像素为单位的键盘高度近似值。

### 用法

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
window.addEventListener('ionKeyboardDidShow', ev => {
  const { keyboardHeight } = ev;
  // 使用键盘高度做一些操作，例如将输入框移动到键盘上方。
});

window.addEventListener('ionKeyboardDidHide', () => {
  // 将输入框移回原始位置
});
```
</TabItem>
<TabItem value="angular">

```tsx
import { Platform } from '@ionic/angular';

...

constructor(private platform: Platform) {
  this.platform.keyboardDidShow.subscribe(ev => {
    const { keyboardHeight } = ev;
    // 使用键盘高度做一些操作，例如将输入框移动到键盘上方。
  });

  this.platform.keyboardDidHide.subscribe(() => {
    // 将输入框移回原始位置
  });
}
```
</TabItem>
<TabItem value="react">

```tsx
import { useKeyboardState } from '@ionic/react-hooks/keyboard';

...

const { isOpen, keyboardHeight } = useKeyboardState();

// 使用键盘高度做一些操作，例如将输入框移动到键盘上方
```
</TabItem>
<TabItem value="vue">

```tsx
import { useKeyboard } from '@ionic/vue';
import { watch } from 'vue';

...

const { isOpen, keyboardHeight } = useKeyboard();

watch(keyboardHeight, () => {
  console.log(`键盘是否打开: ${isOpen.value}, 键盘高度: ${keyboardHeight.value}`);
});


```
</TabItem>
</Tabs>
````

:::note
对于在移动网络浏览器或作为 PWA 运行的应用，键盘生命周期事件仅在 Chrome 62+ 和 iOS Safari 13.0+ 上支持。
:::