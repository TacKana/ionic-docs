---
title: Build Errors
---

<head>
  <title>构建错误：如何解决常见问题 | Ionic Framework</title>
  <meta
    name="description"
    content="解决应用构建过程中可能出现的常见问题。查看我们列出的潜在构建错误，如需其他问题解答请查阅 Ionic 文档。"
  />
</head>

## 常见错误

### 装饰器缺少括号

装饰器在注解后应包含括号 `()`。例如：`@Injectable()`、`@Optional()`、`@Input()` 等。

```tsx
@Directive({
  selector: 'my-dir',
})
class MyDirective {
  // 错误，应为 @Optional()
  // 此处的 @Optional 不生效，因此当 parent 未定义时 MyDirective 会报错
  constructor(@Optional parent: ParentComponent) {}
}
```

## 常见异常

### 无法解析所有参数

```shell
无法为 'YourClass'(?) 解析所有参数。请确保所有参数都使用了 Inject 装饰器或具有有效的类型注解，并且 'YourClass' 已使用 Injectable 装饰。
```

此异常意味着 Angular 对 `YourClass` 构造函数中的一个或多个参数感到困惑。为了实现[依赖注入](https://angular.io/docs/ts/latest/guide/dependency-injection.html)，Angular 需要知道要注入的参数类型。您可以通过指定参数的类来告知 Angular。请确保：

- 已导入参数的类。
- 正确注解了参数或指定了其类型。

```tsx
import { MyService } from 'my-service'; // 别忘了导入我！

@Component({
  template: `Hello World`,
})
export class MyClass {
  // service 的类型是 MyService
  constructor(service: MyService) {}
}
```

有时代码中的循环引用可能导致此错误。循环引用意味着两个对象相互依赖，因此无法在彼此之前声明两者。要解决此问题，我们可以使用 Angular 内置的 [`forwardRef`](https://angular.io/docs/ts/latest/api/core/index/forwardRef-function.html) 函数。

```ts
import { forwardRef } from '@angular/core';

@Component({
  selector: 'my-button',
  template: `<div>
    <icon></icon>
    <input type="button" />
  </div>`,
  directives: [forwardRef(() => MyIcon)], // MyIcon 尚未定义
}) // 当需要 MyIcon 时，forwardRef 会解析为 MyIcon
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
没有 ParamType 的提供者！(MyClass -> ParamType)
```

这意味着 Angular 知道应该注入的参数类型，但不知道如何注入。

如果参数是一个服务，请确保已将指定类添加到应用可用的提供者列表中：

```tsx
import { MyService } from 'my-service';

@Component({
  templateUrl: 'app/app.html',
  providers: [MyService], // 别忘了我！
})
class MyApp {}
```

如果参数是另一个组件或指令（例如父组件），将其添加到提供者列表会使错误消失，但这会产生与[多个提供者实例](#multiple_instances)相同的效果。您将创建组件类的新实例，而无法获得所需组件实例的引用。相反，请确保要注入的指令或组件对您的组件可用（例如，如果期望它是父组件，则它确实是父组件）。通过示例可能更容易理解：

```tsx
@Component({
  selector: 'my-comp',
  template: '<p my-dir></p>',
  directives: [forwardRef(() => MyDir)],
})
class MyComp {
  constructor() {
    this.name = '我的组件';
  }
}

@Directive({
  selector: '[my-dir]',
})
class MyDir {
  constructor(c: MyComp) {
    // <-- 这是关键行

    // 当指令在常规 div 上时会出错，因为组件树中没有 MyComp，所以没有可注入的 MyComp
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

下图展示了可用的注入器：

```
                 +-------+
                 |  应用  |
                 +---+---+
                     |
       +-------------+------------+
       |                          |
+------+------+          +--------+--------+
| Div (MyDir) |          | MyComp (MyDir)  |  <- 可注入 MyComp
+-------------+          +--------+--------+
       ^                          |
无 MyComp 可注入            +------+------+
                           | P (MyDir)   | <- 可从父级注入 MyComp
                           +-------------+
```

扩展前面的示例，如果您不总是期望组件/指令引用，可以使用 Angular 的 `@Optional` 注解：

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
无法绑定到 'propertyName'，因为它不是 'elementName' 元素的已知属性，且没有匹配的指令具有相应属性
```

当您尝试绑定元素上不存在的属性时会发生此错误。如果该元素是组件或具有一个或多个指令，则组件和指令也都没有该属性。

```html
<!-- div 没有 'foo' 属性 -->
<div [foo]="bar"></div>
```

### 没有 ControlContainer 的提供者

```shell
没有 ControlContainer 的提供者！(NgControlName -> ControlContainer)
```

此错误是上述 `No provider` 错误的更具体版本。当您使用 NgControlName 等表单控件而未指定父级 [NgForm](https://angular.io/docs/ts/latest/api/forms/index/NgForm-directive.html) 或 NgFormModel 时会发生。在大多数情况下，可以通过确保表单控件位于实际的表单元素内来解决。NgForm 使用 `form` 作为选择器，因此这将实例化一个新的 NgForm：

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
未找到 <组件名称> 的组件工厂
```

当您尝试使用尚未导入并添加到 ngModule 的组件、提供者管道或指令时会发生此错误。每当向应用添加新组件、提供者、管道或指令时，必须将其添加到 `src/app/app.module.ts` 文件中的 `ngModule`，Angular 才能使用它。要修复此错误，可以将有问题的组件、提供者、管道或指令导入到 app.module 文件中，然后如果是提供者则将其添加到 `providers` 数组，对于组件、管道或指令则将其添加到 declarations 数组和 `entryComponents` 数组。