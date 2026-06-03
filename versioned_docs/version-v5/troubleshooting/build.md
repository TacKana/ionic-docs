---
title: 构建错误
---

# 构建错误

## 常见错误

### 忘记在装饰器后加括号

装饰器在注解后应有括号 `()`。一些例子包括：`@Injectable()`、`@Optional()`、`@Input()` 等。

```tsx
@Directive({
  selector: 'my-dir',
})
class MyDirective {
  // 错误，应该是 @Optional()
  // @Optional 在这里不起作用，所以如果 parent 未定义，MyDirective 将报错
  constructor(@Optional parent: ParentComponent) {}
}
```

## 常见错误信息

### 无法解析所有参数

```shell
Cannot resolve all parameters for 'YourClass'(?). Make sure that all the parameters are decorated with Inject or have valid type annotations and that 'YourClass' is decorated with Injectable.
```

这个异常意味着 Angular 对 `YourClass` 构造函数的一个或多个参数感到困惑。为了进行[依赖注入](https://angular.io/docs/ts/latest/guide/dependency-injection.html)，Angular 需要知道要注入的参数的类型。你可以通过指定参数的类来让 Angular 知道。请确保：

- 你已导入参数的类。
- 你已正确注解参数或指定了其类型。

```tsx
import { MyService } from 'my-service'; // 不要忘记导入我！

@Component({
  template: `Hello World`,
})
export class MyClass {
  // service 的类型是 MyService
  constructor(service: MyService) {}
}
```

有时代码中的循环引用会导致此错误。循环引用意味着两个对象相互依赖，因此无法在彼此之前声明两者。为了解决这个问题，我们可以使用 Angular 内置的 [`forwardRef`](https://angular.io/docs/ts/latest/api/core/index/forwardRef-function.html) 函数。

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

### 没有 ParamType 的提供者

```shell
No provider for ParamType! (MyClass -> ParamType)
```

这意味着 Angular 知道它应该注入的参数的类型，但不知道如何注入它。

如果参数是一个服务，请确保已将指定的类添加到应用的 providers 列表中：

```tsx
import { MyService } from 'my-service';

@Component({
  templateUrl: 'app/app.html',
  providers: [MyService], // 不要忘记我！
})
class MyApp {}
```

如果参数是另一个组件或指令（例如，父组件），将其添加到 providers 列表会消除错误，但这会有与上面[提供者的多个实例](#提供者的多个实例)相同的效果。你将创建一个新的组件类实例，并且不会获得所需的组件实例的引用。相反，请确保你期望注入的指令或组件对你的组件是可用的（例如，如果你期望它是一个父组件，那么它确实是一个父组件）。通过一个例子最容易理解：

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
    // <-- 这是需要关注的行

    // 当指令在普通 div 上时出错，因为组件树中没有 MyComp，
    // 所以没有 MyComp 可以注入
    console.log("Host component's name: " + c.name);
  }
}

@Component({
  template:
    '<my-comp></my-comp>' + // MyDir 构造函数中没有错误，MyComp 是 MyDir 的父级
    '<my-comp my-dir></my-comp>' + // MyDir 构造函数中没有错误，MyComp 是 MyDir 的宿主
    '<div my-dir></div>', // MyDir 构造函数中出错
  directives: [MyComp, MyDir],
})
class MyApp {}
```

以下是可用注入器的示意图：

```
                 +-------+
                 |  App  |
                 +---+---+
                     |
       +-------------+------------+
       |                          |
+------+------+          +--------+--------+
| Div (MyDir) |          | MyComp (MyDir)  |  <- 可以注入 MyComp
+-------------+          +--------+--------+
       ^                          |
没有 MyComp 可注入          +------+------+
                           | P (MyDir)   | <- 可以从父级注入 MyComp
                           +-------------+
```

为了扩展前面的示例，如果你不总是期望有组件/指令引用，可以使用 Angular 的 `@Optional` 注解：

```tsx
@Directive({
  selector: '[my-dir]',
})
class MyDir {
  constructor(@Optional() c: MyComp) {
    // 如果 c 未定义，不再报错
    if (c) {
      console.log(`Host component's name: ${c.name}`);
    }
  }
}
```

### 无法绑定到 'propertyName'，因为它不是已知属性

```shell
Can't bind to 'propertyName' since it isn't a known property of the 'elementName' element and there are no matching directives with a corresponding property
```

当你尝试绑定一个元素不具有的属性时，会发生这种情况。如果该元素是一个组件或在其上有一个或多个指令，那么该组件或指令也没有该属性。

```html
<!-- div 没有 'foo' 属性 -->
<div [foo]="bar"></div>
```

### 没有 ControlContainer 的提供者

```shell
No provider for ControlContainer! (NgControlName -> ControlContainer)
```

这个错误是上面 `No provider` 错误的一个更具体的版本。当你使用像 NgControlName 这样的表单控件而没有指定父级 [NgForm](https://angular.io/docs/ts/latest/api/forms/index/NgForm-directive.html) 或 NgFormModel 时，会发生此错误。在大多数情况下，可以通过确保你的表单控件位于实际的 form 元素内部来解决此问题。NgForm 使用 `form` 作为选择器，因此这将实例化一个新的 NgForm：

```tsx
@Component({
  template:
  '<form>' +
  '<input ngControl="login">' +
  '</form>'
})
```

### 没有找到组件工厂

```shell
No component factory found for <component name>
```

当你尝试使用尚未导入并添加到 ngModule 的组件、提供者、管道或指令时，会发生此错误。每当你向应用添加新的组件、提供者、管道或指令时，必须将其添加到 `src/app/app.module.ts` 文件的 `ngModule` 中，以便 Angular 能够使用它。要修复此错误，请将有问题的组件、提供者、管道或指令导入到 app.module 文件中，然后如果是提供者，将其添加到 `providers` 数组；如果是组件、管道或指令，则将其同时添加到 `declarations` 数组和 `entryComponents` 数组中。
