import Codepen from '@components/global/Codepen';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 键盘

自定义和考虑屏幕键盘的存在是开发人员在构建移动应用和 PWA 时经常遇到的两个常见问题。本指南将介绍可用于管理应用中屏幕键盘的各种工具。

## inputmode

`inputmode` 属性允许开发人员指定输入框中可能输入的数据类型。这将提示浏览器显示包含与用户可能输入内容相关按钮的键盘。例如，`inputmode="email"` 将显示带有 `@` 键以及其他针对输入电子邮件优化的键盘。

由于 `inputmode` 是一个全局属性，它可以在 Ionic 组件（如 `ion-input` 和 `ion-textarea`）以及常规 input 元素上使用。

_需要_特定数据类型的输入应该使用 `type` 属性。例如，需要电子邮件的输入应该使用 `type="email"`，而不是指定 `inputmode`。这是因为将要输入的数据始终是电子邮件形式。另一方面，如果输入框接受电子邮件或用户名，使用 `inputmode="email"` 是合适的，因为输入的数据并不总是电子邮件地址。

有关可接受值的列表，请参见 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode" target="_blank" rel="noreferrer">inputmode 文档</a>。

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
  <ion-label>用户名或邮箱</ion-label>
  <ion-input inputmode="email"></ion-input>
</ion-item>

<ion-item>
  <ion-label>输入数字</ion-label>
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
  <ion-label>输入数字</ion-label>
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
  <IonLabel>输入数字</IonLabel>
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
  <ion-label>输入数字</ion-label>
  <ion-textarea inputmode="numeric"></ion-textarea>
</ion-item>
```
</TabItem>
</Tabs>
````

<Codepen user="ionic" slug="abvJVVv" height="400" />

:::note
`inputmode` 属性在 Chrome 66+ 和 iOS Safari 12.2+ 设备上受支持：https://caniuse.com/#search=inputmode
:::

## enterkeyhint

`enterkeyhint` 属性允许开发人员指定"Enter"键应显示什么样的操作标签或图标。使用 `enterkeyhint` 让用户知道当他们点击"Enter"键时会发生什么。应在此处指定的值取决于用户正在执行的操作的上下文。例如，如果用户正在搜索框中输入，开发人员应确保输入框具有 `enterkeyhint="search"`。

由于 `enterkeyhint` 是一个全局属性，它可以在 Ionic 组件（如 `ion-input` 和 `ion-textarea`）以及常规 input 元素上使用。

有关可接受值的列表，请参见 <a href="https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute" target="_blank" rel="noreferrer">enterkeyhint 标准</a>。

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
`enterkeyhint` 属性在 Chrome 77+ 和 iOS Safari 13.4+ 设备上受支持。
:::

## 深色模式

默认情况下，键盘主题由操作系统决定。例如，如果在 iOS 上启用了深色模式，应用中的键盘将以深色主题显示，即使您的应用在 CSS 中没有深色主题。

当在移动 Web 浏览器或 PWA 中运行应用时，无法强制键盘以特定主题显示。

当在 Capacitor 或 Cordova 中运行应用时，可以强制键盘以特定主题显示。有关此配置的更多信息，请参见 <a href="https://capacitorjs.com/docs/apis/keyboard#keyboard-configuration-ios-only-" target="_blank">Capacitor 键盘文档</a>。

## 隐藏辅助工具栏

当运行任何基于 Web 的应用时，iOS 会在键盘上方显示一个辅助工具栏。这允许用户移动到下一个或上一个输入框，以及关闭键盘。

当在移动 Web 浏览器或 PWA 中运行应用时，无法隐藏辅助工具栏。

当在 Capacitor 或 Cordova 中运行应用时，可以隐藏辅助工具栏。有关此配置的更多信息，请参见 <a href="https://capacitorjs.com/docs/apis/keyboard#keyboard-configuration-ios-only-" target="_blank">Capacitor 键盘文档</a>。

## 键盘生命周期事件

检测屏幕键盘的存在对于调整输入框的位置非常有用，否则输入框可能会被键盘遮挡。对于 Capacitor 和 Cordova 应用，开发人员通常依赖原生键盘插件来监听键盘生命周期事件。对于在移动浏览器或 PWA 中运行的应用，开发人员可以在受支持的地方使用 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API" rel="noreferrer" target="_blank">Visual Viewport API</a>。Ionic Framework 封装了这两种方法，并在 `window` 上触发了 `ionKeyboardDidShow` 和 `ionKeyboardDidHide` 事件。`ionKeyboardDidShow` 的事件负载包含键盘高度的近似像素值。

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
  // 使用键盘高度做某些操作，例如将输入框移到键盘上方
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
    // 使用键盘高度做某些操作，例如将输入框移到键盘上方
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

// 使用键盘高度做某些操作，例如将输入框移到键盘上方
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
对于在移动 Web 浏览器或 PWA 中运行的应用，键盘生命周期事件仅在 Chrome 62+ 和 iOS Safari 13.0+ 上受支持。
:::
