---
title: Runtime Issues
---

<head>
  <title>解决应用运行时问题：空白应用、插件不工作等</title>
  <meta
    name="description"
    content="应用运行时问题有多种原因。阅读如何解决空白应用、插件不工作、Angular变更检测等问题。"
  />
</head>

## 空白应用

:::note
我的应用中没有错误，为什么显示空白屏幕？
:::

这种情况可能有多种不同的原因。如果你在[Ionic论坛](https://forum.ionicframework.com)上找不到解决方案，请确保：

- 没有为旧版浏览器/Android版本包含polyfills

对于使用 `@angular/cli@7.3` 或更高版本的项目，polyfills会自动包含。对于在此之前创建的项目，需要手动启用polyfills。

在 `src/polyfills.ts` 中，你必须启用所有ES6 polyfills以支持Android 4.4。

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

这将自动为需要polyfills的旧版浏览器包含polyfills。

## 指令不工作

:::note
为什么我的自定义组件/指令不工作？
:::

你可以检查以下几点。确保：

- 你的选择器没有任何拼写错误
- 你正确地将选择器用作属性、元素或类
- 你的选择器语法正确：
  - `[attr]` 如果是属性选择器
  - `element` 如果是元素选择器
  - `.class` 如果是类选择器

这是一个使用属性选择器的示例：

```tsx
@Directive({
  selector: '[my-dir]' // <-- [my-dir] 因为是属性
})                     // 可以是 my-dir, [my-dir], .my-dir
class MyDir {
  constructor() {
    console.log('I'm alive!');
  }
}

@Component({
  // 我们将 my-dir 作为属性添加以匹配指令的选择器
  template: `<div my-dir>Hello World</div>`,

  // 或者，如果你要将指令附加到元素，应该是：
  // template: `<my-dir>Hello World</my-dir>`
  // 如果通过类附加，模板应该是：
  // template: `<div class="my-dir">Hello World</div>`

  directives: [MyDir] // <-- 不要忘记我！（仅当你的ionic-angular版本低于RC0时）
})
class MyPage { }
```

## 点击延迟

:::note
为什么我的点击事件有延迟？
:::

通常，我们建议只向通常可点击的元素添加 `(click)` 事件。这包括 `<button>` 和 `<a>` 元素。这提高了可访问性，因为屏幕阅读器将能够知道该元素是可点击的。

但是，你可能需要向通常不可点击的元素添加 `(click)` 事件。当你这样做时，你可能会体验到从点击元素到事件触发的 `300ms` 延迟。要消除此延迟，你可以向元素添加 `tappable` 属性。

```html
<div tappable (click)="doClick()">我是可点击的！</div>
```

## Angular变更检测

:::note
为什么组件初始化时Angular变更检测运行非常频繁？
:::

Angular使用一个名为 [zone.js](https://github.com/angular/angular/tree/master/packages/zone.js/) 的库来帮助确定何时运行变更检测。

从zone.js `0.8.27` 开始，某些Web Components API也会导致变更检测运行。当大量组件初始化时，这可能会产生应用程序变慢的不良副作用。

为了防止这种情况发生，可以禁用管理这部分变更检测的zone.js标志。在应用程序的 `src` 目录中，创建一个名为 `zone-flags.ts` 的文件。将以下代码放入文件中：

```tsx
(window as any).__Zone_disable_customElements = true;
```

然后需要将 `zone-flags.ts` 文件导入到应用程序的 `polyfills.ts` 文件中。确保在导入 `zone.js` 之前导入它：

```tsx
...

import './zone-flags.ts';
import 'zone.js/dist/zone'; // 由Angular CLI包含

...
```

此更改仅影响依赖于zone.js `0.8.27` 或更新版本的应用程序。旧版本不会受到此更改的影响。

:::note
通过Ionic CLI创建Ionic应用时，此标志会自动包含。
:::

## Cordova插件在浏览器中不工作

在开发过程中的某个时刻，你可能会尝试调用Cordova插件，但收到警告：

```shell
[Warning] Native: tried calling StatusBar.styleDefault, but Cordova is not
available. Make sure to include cordova.js or run in a device/simulator
(app.bundle.js, line 83388)
```

当你尝试调用原生插件但Cordova不可用时，会发生这种情况。幸运的是，Ionic Native会打印出一个很好的警告，而不是错误。

在其他情况下，如果插件不是通过Ionic Native使用，插件可能会打印出更模糊的警告。

```shell
EXCEPTION: Error: Uncaught (in promise): TypeError: undefined is not an object
(evaluating 'navigator.camera.getPicture')
```

如果发生这种情况，请在真实设备或模拟器上测试插件。

## 提供者的多个实例

如果你在每个组件中都注入提供者，因为你希望它对所有组件都可用，那么你最终会得到该提供者的多个实例。如果你希望提供者对子组件可用，你应该在父组件中注入一次提供者。

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
  providers: [MyService], // <-- 创建MyService的新实例 :(
}) // 不必要，因为MyService已在App的提供者中
class MyComp {
  // id是1，s是与MyApp不同的MyService实例
  constructor(s: MyService) {
    console.log('MyService id is: ' + s.id);
  }
}

@Component({
  template: '<my-component></my-component>',
  providers: [MyService], // MyService只需要在这里
  directives: [MyComp],
})
class MyApp {
  // id是0
  constructor(s: MyService) {
    console.log('MyService id is: ' + s.id);
  }
}
```

<!-- 这在Ionic Framework组件文档中被引用，因此我们明确定义锚点以保持一致性。 -->

## 在函数回调中访问 `this` 返回 `undefined` {#accessing-this}

某些组件，如 [ion-input上的counterFormatter](../api/input#counterformatter) 和 [ion-range上的pinFormatter](../api/input#pinformatter)，允许开发人员传递回调。如果你计划从回调的上下文中访问 `this`，那么绑定正确的 `this` 值非常重要。在使用Angular组件或React中的类组件时，你可能需要访问 `this`。有两种方法可以绑定 `this`：

第一种绑定 `this` 的方法是使用函数实例上的 `bind()` 方法。如果你想传递一个名为 `counterFormatterFn` 的回调，那么你会写 `counterFormatterFn.bind(this)`。

第二种绑定 `this` 的方法是在定义回调时使用 [箭头函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)。这之所以有效，是因为JavaScript不会为箭头函数创建新的 `this` 绑定。

有关 `this` 在JavaScript中如何工作的更多信息，请参阅其 [MDN页面](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)。