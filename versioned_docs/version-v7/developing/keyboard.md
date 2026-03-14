---
title: Keyboard
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>键盘指南：管理移动应用屏幕键盘的工具</title>
  <meta
    name="description"
    content="处理屏幕键盘是开发者常见的难题。本指南介绍了在移动应用和 PWA 中可用的屏幕键盘管理工具。"
  />
</head>

定制和处理屏幕键盘的存在，是开发者在构建移动应用和 PWA 时经常遇到的两个常见难题。本指南将介绍在您的应用中管理屏幕键盘的各种可用工具。

## inputmode

`inputmode` 属性允许开发者指定输入框中可能输入的数据类型。这将提示浏览器显示包含与用户可能输入内容相关按键的键盘。例如，`inputmode="email"` 会显示带有 `@` 键的键盘，以及其他针对输入电子邮件的优化。

由于 `inputmode` 是一个全局属性，它除了可以用于常规的输入元素外，还可以用在 Ionic 组件上，比如 `ion-input` 和 `ion-textarea`。

那些*要求*特定数据类型的输入框应该使用 `type` 属性。例如，要求输入电子邮件的输入框应该使用 `type="email"`，而不是指定 `inputmode`。这是因为输入的数据始终将是电子邮件格式。另一方面，如果输入框接受电子邮件或用户名，那么使用 `inputmode="email"` 是合适的，因为输入的数据并不总是电子邮件地址。

有关可接受值的列表，请参阅 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode" target="_blank" rel="noreferrer">inputmode 文档</a>。

### 用法

import Inputmode from '@site/static/usage/v7/keyboard/inputmode/index.md';

<Inputmode />

:::note
`inputmode` 属性在运行 Chrome 66+ 和 iOS Safari 12.2+ 的设备上受支持：https://caniuse.com/#search=inputmode
:::

## enterkeyhint

`enterkeyhint` 属性允许开发者指定“Enter”键应显示哪种类型的操作标签或图标。使用 `enterkeyhint` 可以让用户知道当他们点击“Enter”键时会发生什么。此处应指定的值取决于用户正在进行的操作上下文。例如，如果用户正在搜索框中输入，开发者应确保输入框具有 `enterkeyhint="search"`。

由于 `enterkeyhint` 是一个全局属性，它除了可以用于常规的输入元素外，还可以用在 Ionic 组件上，比如 `ion-input` 和 `ion-textarea`。

有关可接受值的列表，请参阅 <a href="https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute" target="_blank" rel="noreferrer">enterkeyhint 标准</a>。

### 用法

import Enterkeyhint from '@site/static/usage/v7/keyboard/enterkeyhint/index.md';

<Enterkeyhint />

:::note
`enterkeyhint` 属性在运行 Chrome 77+ 和 iOS Safari 13.4+ 的设备上受支持。
:::

## 深色模式

默认情况下，键盘主题由操作系统决定。例如，如果在 iOS 上启用了深色模式，即使您的应用在 CSS 中没有深色主题，应用中的键盘也会以深色主题显示。

在移动 Web 浏览器中运行应用或作为 PWA 运行时，无法强制键盘以特定主题显示。

在 Capacitor 或 Cordova 中运行应用时，可以强制键盘以特定主题显示。有关此配置的更多信息，请参阅 <a href="https://capacitorjs.com/docs/apis/keyboard#keyboard-configuration-ios-only-" target="_blank">Capacitor 键盘文档</a>。

## 隐藏辅助工具栏

在运行任何类型的基于 Web 的应用时，iOS 会在键盘上方显示一个辅助工具栏。这允许用户移动到下一个或上一个输入框，以及关闭键盘。

在移动 Web 浏览器中运行应用或作为 PWA 运行时，无法隐藏辅助工具栏。

在 Capacitor 或 Cordova 中运行应用时，可以隐藏辅助工具栏。有关此配置的更多信息，请参阅 <a href="https://capacitorjs.com/docs/apis/keyboard#keyboard-configuration-ios-only-" target="_blank">Capacitor 键盘文档</a>。

## 键盘生命周期事件

检测屏幕键盘的存在有助于调整输入框的位置，否则它可能会被键盘遮挡。对于 Capacitor 和 Cordova 应用，开发者通常依赖原生键盘插件来监听键盘生命周期事件。对于在移动浏览器中运行或作为 PWA 运行的应用，开发者可以在支持的情况下使用 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API" rel="noreferrer" target="_blank">Visual Viewport API</a>。Ionic Framework 封装了这两种方法，并在 `window` 上触发 `ionKeyboardDidShow` 和 `ionKeyboardDidHide` 事件。`ionKeyboardDidShow` 的事件负载包含以像素为单位的近似键盘高度。

### 用法

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
window.addEventListener('ionKeyboardDidShow', event => {
  const { keyboardHeight } = event;
  // 根据键盘高度执行某些操作，例如将输入框移动到键盘上方。
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
  this.platform.keyboardDidShow.subscribe(event => {
    const { keyboardHeight } = event;
    // 根据键盘高度执行某些操作，例如将输入框移动到键盘上方。
  });

  this.platform.keyboardDidHide.subscribe(() => {
    // 将输入框移回原始位置
  });
}
```
</TabItem>
<TabItem value="angular-standalone">

```tsx
import { Platform } from '@ionic/angular/standalone';

...

constructor(private platform: Platform) {
  this.platform.keyboardDidShow.subscribe(event => {
    const { keyboardHeight } = event;
    // 根据键盘高度执行某些操作，例如将输入框移动到键盘上方。
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

// 根据键盘高度执行某些操作，例如将输入框移动到键盘上方
```
</TabItem>
<TabItem value="vue">

```tsx
import { useKeyboard } from '@ionic/vue';
import { watch } from 'vue';

...

const { isOpen, keyboardHeight } = useKeyboard();

watch(keyboardHeight, () => {
  console.log(`键盘是否打开：${isOpen.value}，键盘高度：${keyboardHeight.value}`);
});


```
</TabItem>
</Tabs>
````

:::note
对于在移动 Web 浏览器中运行或作为 PWA 运行的应用，键盘生命周期事件仅在 Chrome 62+ 和 iOS Safari 13.0+ 上受支持。
:::