# 运行时问题

## 空白应用

:::note
我的应用中没有错误。为什么显示空白屏幕？
:::

这可能有多种原因。如果您在 [Ionic 论坛](https://forum.ionicframework.com) 上找不到解决方案，请确保：

- 没有为旧版浏览器/Android 版本包含 Polyfill

对于使用 `@angular/cli@7.3` 或更高版本的项目，Polyfill 会自动包含。对于在此之前创建的项目，需要手动启用 Polyfill。

在 `src/polyfills.ts` 中，您必须启用所有 ES6 Polyfill 以支持 Android 4.4。

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

这将自动为需要 Polyfill 的旧版浏览器包含它们。

## 指令不工作

:::note
为什么我的自定义组件/指令不工作？
:::

您可以检查以下几点。确保：

- 您的选择器没有拼写错误
- 您正确地将选择器用作属性、元素或类
- 您的选择器语法正确：
  - 如果是属性选择器，使用 `[attr]`
  - 如果是元素选择器，使用 `element`
  - 如果是类选择器，使用 `.class`

以下是使用属性选择器的示例：

```tsx
@Directive({
  selector: '[my-dir]' // <-- [my-dir] 因为它是属性
})                     // 可以是 my-dir, [my-dir], .my-dir
class MyDir {
  constructor() {
    console.log('I'm alive!');
  }
}

@Component({
  // 我们将 my-dir 作为属性添加以匹配指令的选择器
  template: `<div my-dir>Hello World</div>`,

  // 或者，如果您要将指令附加到元素，应该是：
  // template: `<my-dir>Hello World</my-dir>`
  // 如果您要通过类附加，模板应该是：
  // template: `<div class="my-dir">Hello World</div>`

  directives: [MyDir] // <-- 不要忘记我！（仅当您的 ionic-angular 版本低于 RC0 时）
})
class MyPage { }
```

## 点击延迟

:::note
为什么我的点击事件有延迟？
:::

通常，我们建议只对通常可点击的元素添加 `(click)` 事件。这包括 `<button>` 和 `<a>` 元素。这提高了可访问性，因为屏幕阅读器将能够识别该元素是可点击的。

但是，您可能需要在通常不可点击的元素上添加 `(click)` 事件。当您这样做时，您可能会遇到从点击元素到事件触发的 `300ms` 延迟。要消除此延迟，您可以将 `tappable` 属性添加到您的元素。

```html
<div tappable (click)="doClick()">我可以被点击！</div>
```

## Angular 变更检测

:::note
为什么当我的组件初始化时，Angular 变更检测运行得非常频繁？
:::

Angular 使用一个名为 [zone.js](https://github.com/angular/angular/tree/master/packages/zone.js/) 的库来帮助确定何时运行变更检测。

从 zone.js `0.8.27` 开始，某些 Web Components 的 API 也会导致变更检测运行。当大量组件初始化时，这可能会导致应用程序运行缓慢的不良副作用。

为了防止这种情况发生，可以禁用管理这部分变更检测的 zone.js 标志。在应用程序的 `src` 目录中，创建一个名为 `zone-flags.ts` 的文件。将以下代码放入文件中：

```tsx
(window as any).__Zone_disable_customElements = true;
```

然后需要将 `zone-flags.ts` 文件导入到应用程序的 `polyfills.ts` 文件中。确保在导入 `zone.js` _之前_ 导入它：

```tsx
...

import './zone-flags.ts';
import 'zone.js/dist/zone'; // Angular CLI 已包含

...
```

此更改仅影响依赖于 zone.js `0.8.27` 或更新版本的应用程序。旧版本不会受此更改影响。

:::note
通过 Ionic CLI 创建 Ionic 应用时，此标志会自动包含
:::

## Cordova 插件在浏览器中不工作

在开发过程中的某个时刻，您可能会尝试调用 Cordova 插件，但收到警告：

```shell
[警告] Native: 尝试调用 StatusBar.styleDefault，但 Cordova 不可用。确保包含 cordova.js 或在设备/模拟器中运行
(app.bundle.js, 第 83388 行)
```

当您尝试调用原生插件但 Cordova 不可用时，会发生这种情况。幸运的是，Ionic Native 会打印一个友好的警告，而不是错误。

在其他情况下，如果插件不是通过 Ionic Native 使用的，插件可能会打印出更晦涩的警告。

```shell
异常: Error: Uncaught (in promise): TypeError: undefined is not an object
(evaluating 'navigator.camera.getPicture')
```

如果发生这种情况，请在真实设备或模拟器上测试插件。

## 提供者的多个实例

如果您在每个组件中注入提供者，希望它对所有组件都可用，那么最终会出现该提供者的多个实例。如果希望子组件可以使用该提供者，应该在父组件中注入一次提供者。

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
}) // 不必要，因为 MyService 已在 App 的提供者中
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