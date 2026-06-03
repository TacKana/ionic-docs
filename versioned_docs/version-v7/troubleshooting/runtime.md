---
title: 运行时问题
---

<head>
  <title>解决应用运行时问题：空白应用、插件不工作等</title>
  <meta
    name="description"
    content="应用运行时问题有很多原因。阅读如何解决诸如空白应用、插件不工作、Angular 变更检测等问题，使用 Ionic。"
  />
</head>

## 空白应用

:::note
我的应用没有错误。为什么显示空白屏幕？
:::

有几个不同的原因可能导致这种情况。如果您无法在 [Ionic 论坛](https://forum.ionicframework.com) 上找到解决方案，请确保：

- 没有为旧版浏览器/Android 版本包含 polyfills

对于使用 `@angular/cli@7.3` 或更高版本的项目，polyfills 将自动包含。对于在此之前的项目，需要手动启用 polyfills。

在 `src/polyfills.ts` 中，您必须为 Android 4.4 支持启用所有 ES6 polyfills。

或者，可以将项目更新为使用最新版本的 `@angular/cli` 包和 `@angular-devkit` 包，并在 `angular.json` 的构建选项对象中包含 `es5BrowserSupport` 选项：

```diff
        "input": "src/global.scss"
      }
    ],
-   "scripts": []
+   "scripts": [],
+   "es5BrowserSupport": true
  },
  "configurations": {
    "production": {
```

这将自动为需要它们的旧版浏览器包含 polyfills。

## 指令不工作

:::note
为什么我的自定义组件/指令不工作？
:::

您可以检查以下几件事。请确保：

- 您的选择器没有拼写错误。
- 您正确地将选择器用作属性、元素或类。
- 您的选择器具有正确的语法：
  - `[attr]` 如果是属性选择器
  - `element` 如果是元素选择器
  - `.class` 如果是类选择器

以下是使用属性选择器的示例：

```tsx
@Directive({
  selector: '[my-dir]' // <-- [my-dir] 因为它是属性
})                     // 可以是 my-dir、[my-dir]、.my-dir
class MyDir {
  constructor() {
    console.log('我还活着！');
  }
}

@Component({
  // 我们将 my-dir 作为属性添加以匹配指令的选择器
  template: `<div my-dir>Hello World</div>`,

  // 或者，如果您将指令附加到元素上，应该是：
  // template: `<my-dir>Hello World</my-dir>`
  // 如果是通过类附加，模板应该是：
  // template: `<div class="my-dir">Hello World</div>`

  directives: [MyDir] // <-- 不要忘记我！（仅当您的 ionic-angular 版本低于 RC0 时）
})
class MyPage { }
```

## 点击延迟

:::note
为什么我的点击事件有延迟？
:::

通常，我们建议只将 `(click)` 事件添加到通常可点击的元素上。这包括 `<button>` 和 `<a>` 元素。这可以提高无障碍性，因为屏幕阅读器能够判断该元素是可点击的。

但是，您可能需要在通常不可点击的元素上添加 `(click)` 事件。当您这样做时，可能会遇到从点击元素到事件触发之间 `300ms` 的延迟。要消除此延迟，您可以为元素添加 `tappable` 属性。

```html
<div tappable (click)="doClick()">我是可点击的！</div>
```

## Angular 变更检测

:::note
为什么我的组件初始化时 Angular 变更检测运行得非常频繁？
:::

Angular 使用一个名为 [zone.js](https://github.com/angular/angular/tree/master/packages/zone.js/) 的库来帮助确定何时运行变更检测。

从 zone.js `0.8.27` 开始，Web Components 的某些 API 也会导致变更检测运行。当大量组件初始化时，这可能会产生应用速度变慢的不良副作用。

为防止这种情况发生，可以禁用管理这部分变更检测的 zone.js 标志。在应用的 `src` 目录中，创建一个名为 `zone-flags.ts` 的文件。将以下代码放入该文件：

```tsx
(window as any).__Zone_disable_customElements = true;
```

然后需要将 `zone-flags.ts` 文件导入到应用的 `polyfills.ts` 文件中。确保在导入 `zone.js` _之前_ 导入它：

```tsx
...

import './zone-flags.ts';
import 'zone.js/dist/zone'; // 随 Angular CLI 包含

...
```

此更改只会影响依赖于 zone.js `0.8.27` 或更高版本的应用。旧版本不会受此更改影响。

:::note
此标志在使用 Ionic CLI 创建 Ionic 应用时会自动包含。
:::

## Cordova 插件在浏览器中不工作

在开发过程中的某个时候，您可能会尝试调用 Cordova 插件，但收到警告：

```shell
[Warning] Native: tried calling StatusBar.styleDefault, but Cordova is not
available. Make sure to include cordova.js or run in a device/simulator
(app.bundle.js, line 83388)
```

当您尝试调用原生插件但 Cordova 不可用时会发生这种情况。幸运的是，Ionic Native 会打印出一条友好的警告，而不是错误。

在其他情况下，当插件不是通过 Ionic Native 使用时，插件可能会打印出更晦涩的警告。

```shell
EXCEPTION: Error: Uncaught (in promise): TypeError: undefined is not an object
(evaluating 'navigator.camera.getPicture')
```

如果发生这种情况，请在真实设备或模拟器上测试插件。

## 多个提供者实例

如果您在每个组件中都注入一个提供者，因为您希望它对所有组件都可用，那么最终将得到多个提供者实例。如果您希望提供者对子组件可用，应该只在父组件中注入一次提供者。

```tsx
let id = 0;
export class MyService {
  id: number;

  constructor() {
    this.id = id++;
  }
}

@Component({
  selector: 'my-component',
  template: 'Hello World',
  providers: [MyService], // <-- 创建 MyService 的新实例 :(
}) // 不必要，因为 MyService 在 App 的 providers 中
class MyComp {
  // id 是 1，s 是不同于 MyApp 的 MyService 实例
  constructor(s: MyService) {
    console.log('MyService id is: ' + s.id);
  }
}

@Component({
  template: '<my-component></my-component>',
  providers: [MyService], // MyService 只需要在这里
  directives: [MyComp],
})
class MyApp {
  // id 是 0
  constructor(s: MyService) {
    console.log('MyService id is: ' + s.id);
  }
}
```

<!-- 这在 Ionic Framework 组件文档中有引用，所以我们显式定义锚点以保持一致。 -->

## 在函数回调中访问 `this` 返回 `undefined` {#accessing-this}

某些组件，例如 [ion-input 上的 counterFormatter](../api/input#prop-counter-formatter) 和 [ion-range 上的 pinFormatter](../api/range#prop-pin-formatter)，允许开发者传递回调。如果您计划在回调的上下文中访问 `this`，那么绑定正确的 `this` 值非常重要。在使用 Angular 组件或 React 中的类组件时，您可能需要访问 `this`。有两种方法可以绑定 `this`：

第一种绑定 `this` 的方法是使用函数实例上的 `bind()` 方法。如果您想传递一个名为 `counterFormatterFn` 的回调，那么您应该编写 `counterFormatterFn.bind(this)`。

第二种绑定 `this` 的方法是使用[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)来定义回调。这之所以有效，是因为 JavaScript 不会为箭头函数创建新的 `this` 绑定。

有关 `this` 在 JavaScript 中如何工作的更多信息，请参阅其 [MDN 页面](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)。
