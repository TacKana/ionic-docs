---
title: 运行时问题
---

<head>
  <title>解决应用运行时问题：应用白屏、插件异常等</title>
  <meta
    name="description"
    content="应用运行时问题可能由多种原因导致。阅读本文了解如何解决 Ionic 应用白屏、插件失效、Angular 变更检测等问题。"
  />
</head>

## 应用白屏

:::note
我的应用没有任何错误，为什么显示白屏？
:::

这个问题可能由多种原因导致。如果在 [Ionic 论坛](https://forum.ionicframework.com) 上找不到解决方案，请确认：

- 没有为旧版浏览器/Android 版本包含 polyfills

对于使用 `@angular/cli@7.3` 或更高版本的项目，polyfills 会自动包含。对于在此之前创建的项目，需要手动启用 polyfills。

在 `src/polyfills.ts` 文件中，必须启用所有 ES6 polyfills 以支持 Android 4.4。

或者，可以将项目更新到最新版本的 `@angular/cli` 包和 `@angular-devkit` 包，并在 `angular.json` 的构建选项对象中包含 `es5BrowserSupport` 选项：

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

这将自动为需要 polyfills 的旧版浏览器包含相应的 polyfills。

## 指令失效

:::note
为什么我的自定义组件/指令不工作？
:::

你可以检查以下几点：

- 确保选择器没有拼写错误
- 确保正确使用选择器作为属性、元素或类
- 确保选择器语法正确：
  - 如果是属性选择器，使用 `[attr]`
  - 如果是元素选择器，使用 `element`
  - 如果是类选择器，使用 `.class`

以下是使用属性选择器的示例：

```tsx
@Directive({
  selector: '[my-dir]' // <-- [my-dir] 因为是属性选择器
})                     // 可以是 my-dir、[my-dir]、.my-dir
class MyDir {
  constructor() {
    console.log('I'm alive!');
  }
}

@Component({
  // 我们将 my-dir 作为属性添加以匹配指令的选择器
  template: `<div my-dir>Hello World</div>`,

  // 或者，如果要将指令附加到元素上：
  // template: `<my-dir>Hello World</my-dir>`
  // 如果通过类附加：
  // template: `<div class="my-dir">Hello World</div>`

  directives: [MyDir] // <-- 别忘了这个！（仅当 ionic-angular 版本低于 RC0 时需要）
})
class MyPage { }
```

## 点击延迟

:::note
为什么我的点击事件有延迟？
:::

一般来说，我们建议只在通常可点击的元素上添加 `(click)` 事件。这包括 `<button>` 和 `<a>` 元素。这有助于提高可访问性，因为屏幕阅读器能够识别这些元素是可点击的。

但是，你可能需要在不可点击的元素上添加 `(click)` 事件。当你这样做时，可能会遇到从点击元素到事件触发有 `300ms` 延迟的情况。要消除这个延迟，可以在元素上添加 `tappable` 属性。

```html
<div tappable (click)="doClick()">我可以被点击！</div>
```

## Angular 变更检测

:::note
为什么我的组件初始化时 Angular 变更检测会频繁运行？
:::

Angular 使用一个名为 [zone.js](https://github.com/angular/angular/tree/master/packages/zone.js/) 的库来帮助确定何时运行变更检测。

从 zone.js `0.8.27` 开始，某些 Web Components API 也会触发变更检测。这可能带来不良的副作用：当大量组件初始化时，你的应用会变慢。

为了防止这种情况发生，可以禁用 zone.js 中管理这部分变更检测的标志。在应用程序的 `src` 目录中，创建一个名为 `zone-flags.ts` 的文件，并将以下代码放入文件中：

```tsx
(window as any).__Zone_disable_customElements = true;
```

然后需要在应用程序的 `polyfills.ts` 文件中导入 `zone-flags.ts`。确保在导入 `zone.js` 之前导入它：

```tsx
...

import './zone-flags.ts';
import 'zone.js/dist/zone'; // Angular CLI 自带

...
```

此更改仅影响依赖 zone.js `0.8.27` 或更新版本的应用程序。旧版本不会受到此更改的影响。

:::note
通过 Ionic CLI 创建 Ionic 应用时，此标志会自动包含
:::

## Cordova 插件在浏览器中不工作

在开发过程中，你可能会尝试调用 Cordova 插件，但收到以下警告：

```shell
[Warning] Native: tried calling StatusBar.styleDefault, but Cordova is not
available. Make sure to include cordova.js or run in a device/simulator
(app.bundle.js, line 83388)
```

当你尝试调用原生插件但 Cordova 不可用时，会发生这种情况。幸运的是，Ionic Native 会打印出友好的警告，而不是错误。

在其他情况下，如果插件不是通过 Ionic Native 使用，插件可能会打印出更晦涩的警告：

```shell
EXCEPTION: Error: Uncaught (in promise): TypeError: undefined is not an object
(evaluating 'navigator.camera.getPicture')
```

如果发生这种情况，请在真实设备或模拟器上测试插件。

## 提供者的多个实例

如果你在每个组件中都注入提供者，希望它对所有组件都可用，那么最终会得到提供者的多个实例。如果你希望提供者对子组件可用，应该在父组件中注入一次提供者。

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
}) // 这是不必要的，因为 MyService 已经在 App 的 providers 中
class MyComp {
  // id 是 1，s 是与 MyApp 不同的 MyService 实例
  constructor(s: MyService) {
    console.log('MyService id is: ' + s.id);
  }
}

@Component({
  template: '<my-component></my-component>',
  providers: [MyService], // MyService 只需要在这里提供
  directives: [MyComp],
})
class MyApp {
  // id 是 0
  constructor(s: MyService) {
    console.log('MyService id is: ' + s.id);
  }
}
```

<!-- 这在 Ionic Framework 组件文档中被引用，因此我们明确定义锚点以保持一致性。 -->

## 在函数回调中访问 `this` 返回 `undefined` {#accessing-this}

某些组件，例如 [ion-input 的 counterFormatter](../api/input#counterformatter) 和 [ion-range 的 pinFormatter](../api/input#pinformatter)，允许开发者传递回调函数。如果你计划在回调上下文中访问 `this`，那么绑定正确的 `this` 值非常重要。在使用 Angular 组件或 React 类组件时，你可能需要访问 `this`。有两种方法可以绑定 `this`：

第一种方法是使用函数实例上的 `bind()` 方法。如果你想传递一个名为 `counterFormatterFn` 的回调，那么可以编写 `counterFormatterFn.bind(this)`。

第二种方法是在定义回调时使用[箭头函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)。这之所以有效，是因为 JavaScript 不会为箭头函数创建新的 `this` 绑定。

有关 `this` 在 JavaScript 中如何工作的更多信息，请参阅其 [MDN 页面](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)。