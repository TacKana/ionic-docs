---
title: Runtime Issues
---

<head>
  <title>解决应用运行时问题：空白应用、插件不工作等</title>
  <meta
    name="description"
    content="应用运行时问题有多种原因。了解如何解决空白应用、插件不工作、Angular 变更检测等问题。"
  />
</head>

## 空白应用

:::note
我的应用中没有错误。为什么它显示空白屏幕？
:::

这可能有多种原因。如果你在 [Ionic 论坛](https://forum.ionicframework.com) 上找不到解决方案，请确保：

- 没有为旧版浏览器/Android 版本包含 polyfills

对于使用 `@angular/cli@7.3` 或更高版本的项目，polyfills 会自动包含。对于在此之前创建的项目，需要手动启用 polyfills。

在 `src/polyfills.ts` 中，必须启用所有 ES6 polyfills 以支持 Android 4.4。

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

这将自动为需要 polyfills 的旧版浏览器包含它们。

## 指令不工作

:::note
为什么我的自定义组件/指令不工作？
:::

你可以检查以下几点。确保：

- 你的选择器没有拼写错误。
- 你正在正确地将选择器用作属性、元素或类。
- 你的选择器具有正确的语法：
  - `[attr]` 如果是属性选择器
  - `element` 如果是元素选择器
  - `.class` 如果是类选择器

以下是一个使用属性选择器的示例：

```tsx
@Directive({
  selector: '[my-dir]' // <-- [my-dir] 因为它是属性
})                     // 可以是 my-dir、[my-dir]、.my-dir
class MyDir {
  constructor() {
    console.log('I'm alive!');
  }
}

@Component({
  // 我们添加 my-dir 作为属性以匹配指令的选择器
  template: `<div my-dir>Hello World</div>`,

  // 或者，如果你要将指令附加到元素，它将是：
  // template: `<my-dir>Hello World</my-dir>`
  // 如果你要通过类附加，模板将是：
  // template: `<div class="my-dir">Hello World</div>`

  directives: [MyDir] // <-- 不要忘记我！（仅当你的 ionic-angular 版本低于 RC0 时）
})
class MyPage { }
```

## 点击延迟

:::note
为什么我的点击事件有延迟？
:::

通常，我们建议仅向通常可点击的元素添加 `(click)` 事件。这包括 `<button>` 和 `<a>` 元素。这提高了可访问性，因为屏幕阅读器将能够识别该元素是可点击的。

但是，你可能需要向通常不可点击的元素添加 `(click)` 事件。当你这样做时，你可能会遇到从点击元素到事件触发的 `300ms` 延迟。要消除此延迟，你可以向元素添加 `tappable` 属性。

```html
<div tappable (click)="doClick()">我是可点击的！</div>
```

## Angular 变更检测

:::note
为什么当我的组件初始化时，Angular 变更检测运行得非常频繁？
:::

Angular 使用一个名为 [zone.js](https://github.com/angular/angular/tree/master/packages/zone.js/) 的库来帮助确定何时运行变更检测。

从 zone.js `0.8.27` 开始，某些 Web Components 的 API 也会导致变更检测运行。当大量组件初始化时，这可能会产生应用程序变慢的不良副作用。

为了防止这种情况发生，可以禁用管理这部分变更检测的 zone.js 标志。在应用程序的 `src` 目录中，创建一个名为 `zone-flags.ts` 的文件。将以下代码放入该文件中：

```tsx
(window as any).__Zone_disable_customElements = true;
```

然后需要将 `zone-flags.ts` 文件导入到应用程序的 `polyfills.ts` 文件中。确保在导入 `zone.js` **之前**导入它：

```tsx
...

import './zone-flags.ts';
import 'zone.js/dist/zone'; // 由 Angular CLI 包含

...
```

此更改仅影响依赖 zone.js `0.8.27` 或更高版本的应用程序。旧版本不会受到此更改的影响。

:::note
通过 Ionic CLI 创建 Ionic 应用时，此标志会自动包含。
:::

## 浏览器中 Cordova 插件不工作

在开发的某个阶段，你可能尝试调用 Cordova 插件，但收到警告：

```shell
[Warning] Native: tried calling StatusBar.styleDefault, but Cordova is not
available. Make sure to include cordova.js or run in a device/simulator
(app.bundle.js, line 83388)
```

当你尝试调用原生插件但 Cordova 不可用时，会发生这种情况。幸运的是，Ionic Native 会打印出友好的警告，而不是错误。

在其他情况下，如果插件不是通过 Ionic Native 使用的，插件可能会打印出更模糊的警告。

```shell
EXCEPTION: Error: Uncaught (in promise): TypeError: undefined is not an object
(evaluating 'navigator.camera.getPicture')
```

如果发生这种情况，请在真实设备或模拟器上测试插件。

## 提供者的多个实例

如果你在每个组件中注入提供者，因为你希望所有组件都能使用它，最终你将得到该提供者的多个实例。如果你希望子组件可以使用提供者，你应该在父组件中注入一次提供者。

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
}) // 不需要，因为 MyService 在 App 的 providers 中
class MyComp {
  // id 是 1，s 是与 MyApp 不同的 MyService 实例
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