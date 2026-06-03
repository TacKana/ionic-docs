---
title: 覆盖层组件
sidebar_label: 覆盖层
---

<head>
  <title>Angular 覆盖层组件：带有自定义注入器的模态框和弹出框</title>
  <meta
    name="description"
    content="了解如何在 Ionic Angular 中使用模态框和弹出框等覆盖层组件，包括传递自定义注入器进行依赖注入。"
  />
</head>

Ionic 提供了模态框和弹出框等覆盖层组件，用于在应用上方显示内容。在 Angular 中，这些覆盖层可以使用 `ModalController` 和 `PopoverController` 等控制器来创建。

## 创建覆盖层

覆盖层可以使用各自的控制器以编程方式创建：

```typescript
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { MyModalComponent } from './my-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: MyModalComponent,
      componentProps: {
        title: 'My Modal',
      },
    });
    await modal.present();
  }
}
```

## 自定义注入器

默认情况下，覆盖层组件使用根注入器进行依赖注入。这意味着在路由级别或特定组件树中提供的服务或令牌在覆盖层内部不可访问。

`injector` 选项允许你在创建模态框或弹出框时传递自定义的 Angular `Injector`。这使得覆盖层组件能够访问根注入器中不可用的服务和令牌。

### 使用场景

自定义注入器在以下场景中很有用：

- 从覆盖层内部访问路由作用域的服务
- 使用 Angular CDK 的 `Dir` 指令实现双向文本支持
- 访问任何未在根级别注册的提供者

### 使用方法

要使用自定义注入器，将其传递给 `create()` 方法：

```typescript
import { Component, Injector } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { MyModalComponent } from './my-modal.component';
import { MyRouteService } from './my-route.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  providers: [MyRouteService], // 在路由级别提供的服务
})
export class FeatureComponent {
  constructor(private modalController: ModalController, private injector: Injector) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: MyModalComponent,
      injector: this.injector, // 传递组件的注入器
    });
    await modal.present();
  }
}
```

现在模态框组件可以注入 `MyRouteService`：

```typescript
import { Component, inject } from '@angular/core';
import { MyRouteService } from '../my-route.service';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
})
export class MyModalComponent {
  private myRouteService = inject(MyRouteService);
}
```

### 创建自定义注入器

你也可以使用特定的提供者创建自定义注入器：

```typescript
import { Component, Injector } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { MyModalComponent } from './my-modal.component';
import { MyService } from './my.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
})
export class FeatureComponent {
  constructor(private modalController: ModalController, private injector: Injector) {}

  async openModal() {
    const myService = new MyService();
    myService.configure({ someOption: true });

    const customInjector = Injector.create({
      providers: [{ provide: MyService, useValue: myService }],
      parent: this.injector,
    });

    const modal = await this.modalController.create({
      component: MyModalComponent,
      injector: customInjector,
    });
    await modal.present();
  }
}
```

### 与 Angular CDK 方向性一起使用

一个常见的用例是为覆盖层提供 Angular CDK 的 `Dir` 指令以支持双向文本：

```typescript
import { Component, Injector } from '@angular/core';
import { Dir } from '@angular/cdk/bidi';
import { ModalController } from '@ionic/angular/standalone';
import { MyModalComponent } from './my-modal.component';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
})
export class FeatureComponent {
  constructor(private modalController: ModalController, private injector: Injector) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: MyModalComponent,
      injector: this.injector, // 包含来自组件树的 Dir
    });
    await modal.present();
  }
}
```

### Popover 控制器

`PopoverController` 支持相同的 `injector` 选项：

```typescript
import { Component, Injector } from '@angular/core';
import { PopoverController } from '@ionic/angular/standalone';
import { MyPopoverComponent } from './my-popover.component';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
})
export class FeatureComponent {
  constructor(private popoverController: PopoverController, private injector: Injector) {}

  async openPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: MyPopoverComponent,
      event: event,
      injector: this.injector,
    });
    await popover.present();
  }
}
```

## Angular 选项类型

Ionic Angular 导出了自己的 `ModalOptions` 和 `PopoverOptions` 类型，这些类型使用 Angular 特定的属性（如 `injector`）扩展了核心选项：

- `ModalOptions` - 使用 `injector` 属性扩展核心 `ModalOptions`
- `PopoverOptions` - 使用 `injector` 属性扩展核心 `PopoverOptions`

这些类型从 `@ionic/angular` 和 `@ionic/angular/standalone` 导出：

```typescript
import type { ModalOptions, PopoverOptions } from '@ionic/angular/standalone';
```

## Ionic 覆盖层文档

有关完整的文档和用法示例，请访问 Ionic 中每个覆盖层的文档页面：

- [Action Sheet](https://ionicframework.com/docs/api/action-sheet)
- [Alert](https://ionicframework.com/docs/api/alert)
- [Loading](https://ionicframework.com/docs/api/loading)
- [Modal](https://ionicframework.com/docs/api/modal)
- [Picker](https://ionicframework.com/docs/api/picker)
- [Popover](https://ionicframework.com/docs/api/popover)
- [Toast](https://ionicframework.com/docs/api/toast)
