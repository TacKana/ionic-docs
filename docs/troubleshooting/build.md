---
title: 构建错误
---

<head>
  <title>构建错误：学习解决常见错误 | Ionic Framework</title>
  <meta
    name="description"
    content="解决构建应用时可能发生的常见错误。查看我们的潜在构建错误列表，然后查看我们的 Ionic 文档以解答其他问题。"
  />
</head>

## 常见错误

### 忘记在装饰器后添加括号

装饰器在注解后应有括号 `()`。一些示例包括：`@Injectable()`、`@Optional()`、`@Input()` 等。

```tsx
@Directive({
  selector: 'my-dir',
})
class MyDirective {
  // 错误，应为 @Optional()
  // @Optional 在此处不起作用，因此如果 parent 未定义，MyDirective 将报错
  constructor(@Optional parent: ParentComponent) {}
}
```

## 常见错误

### 无法解析所有参数

```shell
Cannot resolve all parameters for 'YourClass'(?). Make sure that all the parameters are decorated with Inject or have valid type annotations and that 'YourClass' is decorated with Injectable.
```

此异常表示 Angular 对 `YourClass` 构造函数的一个或多个参数感到困惑。为了进行[依赖注入](https://angular.io/docs/ts/latest/guide/dependency-injection.html)，Angular 需要知道要注入的参数类型。你通过指定参数的类来告诉 Angular。请确保：

- 你正在导入参数的类。
- 你已正确注解参数或指定了其类型。

```tsx
import { MyService } from 'my-service'; // 不要忘记导入我！

@Component({
  template: `Hello World`,
})
export class MyClass {
  // service 是 MyService 类型
  constructor(service: MyService) {}
}
```

有时代码中的循环引用会导致此错误。循环引用意味着两个对象相互依赖，因此无法在彼此之前声明两者。要解决这个问题，我们可以使用 Angular 内置的 [`forwardRef`](https://angular.io/docs/ts/latest/api/core/index/forwardRef-function.html) 函数。

```ts
import { forwardRef } from '@angular/core';

@Component({
  selector: 'my-button',
  template: `<div>
    <icon></icon>
    <input type="button" />
  </div>`,
  directives: [forwardRef(() => MyIcon)], // MyIcon 尚未定义
}) // forwardRef 在需要 MyIcon 时解析它
class MyButton {
  constructor() {}
}

@Directive({
  selector: 'icon',
})
class MyIcon {
  constructor(containerButton: MyButton) {} // MyButton 已定义
}
```

### 没有为 ParamType 提供提供者

```shell
No provider for ParamType! (MyClass -> ParamType)
```

这意味着 Angular 知道要注入的参数类型，但它不知道如何注入它。

如果该参数是一个服务，请确保已将指定的类添加到应用可用的提供者列表中：

```tsx
import { MyService } from 'my-service';

@Component({
  templateUrl: 'app/app.html',
  providers: [MyService], // 不要忘记我！
})
class MyApp {}
```

如果该参数是另一个组件或指令（例如，父组件），将其添加到提供者列表中将消除错误，但这会产生与上面[提供者的多个实例](./runtime.md#提供者的多个实例)相同的效果。你将创建一个新的组件类实例，并且不会获得对所需组件实例的引用。相反，请确保你期望注入的指令或组件对你的组件可用（例如，如果你期望它是父组件，那么它确实是一个父组件）。通过以下示例可能最容易理解：

```tsx
@Component({
  selector: 'my-comp',
  template: '<p my-dir></p>',
  directives: [forwardRef(() => MyDir)],
})
class MyComp {
  constructor() {
    this.name = 'My Component';
  }
}

@Directive({
  selector: '[my-dir]',
})
class MyDir {
  constructor(c: MyComp) {
    // <-- 这是关键行

    // 当指令在普通 div 上时出错，因为组件树中没有 MyComp，
    // 因此没有 MyComp 可注入
    console.log("宿主组件的名称：" + c.name);
  }
}

@Component({
  template:
    '<my-comp></my-comp>' + // MyDir 构造函数中无错误，MyComp 是 MyDir 的父级
    '<my-comp my-dir></my-comp>' + // MyDir 构造函数中无错误，MyComp 是 MyDir 的宿主
    '<div my-dir></div>', // MyDir 构造函数中出错
  directives: [MyComp, MyDir],
})
class MyApp {}
```

以下是说明哪些注入器可用的图示：

```
                 +-------+
                 |  App  |
                 +---+---+
                     |
       +-------------+------------+
       |                          |
+------+------+          +--------+--------+
| Div (MyDir) |          | MyComp (MyDir)  |  <- MyComp 可注入
+-------------+          +--------+--------+
       ^                          |
无 MyComp 可注入           +------+------+
                           | P (MyDir)   | <- 可以从父级注入 MyComp
                           +-------------+
```

扩展前面的示例，如果你并不总是期望组件/指令引用，可以使用 Angular 的 `@Optional` 注解：

```tsx
@Directive({
  selector: '[my-dir]',
})
class MyDir {
  constructor(@Optional() c: MyComp) {
    // 如果 c 未定义，不再报错
    if (c) {
      console.log(`宿主组件的名称：${c.name}`);
    }
  }
}
```

### 无法绑定到 'propertyName'，因为它不是已知属性

```shell
Can't bind to 'propertyName' since it isn't a known property of the 'elementName' element and there are no matching directives with a corresponding property
```

这发生在你尝试绑定一个元素上没有的属性时。如果该元素是一个组件或有一个或多个指令，那么组件或指令也没有该属性。

```html
<!-- div 没有 'foo' 属性 -->
<div [foo]="bar"></div>
```

### 没有为 ControlContainer 提供提供者

```shell
No provider for ControlContainer! (NgControlName -> ControlContainer)
```

此错误是上面 `No provider` 错误的更具体版本。当你使用像 NgControlName 这样的表单控件而没有指定父级 [NgForm](https://angular.io/docs/ts/latest/api/forms/index/NgForm-directive.html) 或 NgFormModel 时会发生。在大多数情况下，可以通过确保你的表单控件在真正的表单元素内来解决。NgForm 使用 `form` 作为选择器，因此这将实例化一个新的 NgForm：

```tsx
@Component({
  template:
  '<form>' +
  '<input ngControl="login">' +
  '</form>'
})
```

### 未找到组件工厂

```shell
No component factory found for <component name>
```

当你尝试使用尚未导入并添加到 ngModule 的组件、提供者、管道或指令时，会发生此错误。每当你向应用添加新的组件、提供者、管道或指令时，必须将其添加到 `src/app/app.module.ts` 文件的 `ngModule` 中，Angular 才能使用它。要修复此错误，你可以将相关的组件、提供者、管道或指令导入到 app.module 文件中，然后如果它是提供者，则将其添加到 `providers` 数组；如果是组件、管道或指令，则将其添加到 `declarations` 数组和 `entryComponents` 数组。
