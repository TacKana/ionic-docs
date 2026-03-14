---
title: Overlay Components
sidebar_label: Overlays
---

<head>
  <title>Angular 叠加层组件：模态框、弹出框及自定义注入器</title>
  <meta
    name="description"
    content="学习如何在 Ionic Angular 中使用模态框和弹出框等叠加层组件，包括传递自定义注入器以实现依赖注入。"
  />
</head>

Ionic 提供了一系列叠加层组件，如模态框（Modal）和弹出框（Popover），它们会在你的应用内容之上显示。在 Angular 中，这些叠加层可以通过控制器（如 `ModalController` 和 `PopoverController`）来创建。

## 创建叠加层

可以通过编程方式使用各自的控制器来创建叠加层：

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
        title: '我的模态框',
      },
    });
    await modal.present();
  }
}
```

## 自定义注入器

默认情况下，叠加层组件使用根注入器进行依赖注入。这意味着在路由级别或特定组件树中提供的服务或令牌，无法在叠加层内部访问。

通过 `injector` 选项，你可以在创建模态框或弹出框时传递一个自定义的 Angular `Injector`。这使得叠加层组件能够访问根注入器中不可用的服务和令牌。

### 使用场景

自定义注入器在以下场景中非常有用：

- 在叠加层内访问路由作用域的服务
- 使用 Angular CDK 的 `Dir` 指令来实现双向文本支持
- 访问任何未在根级别注册的提供者

### 使用方法

要使用自定义注入器，请将其传递给 `create()` 方法：

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

现在，模态框组件就可以注入 `MyRouteService` 了：

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

你也可以创建一个包含特定提供者的自定义注入器：

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

### 与 Angular CDK 方向性结合使用

一个常见的用例是为叠加层提供 Angular CDK 的 `Dir` 指令，以实现双向文本支持：

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

`PopoverController` 同样支持 `injector` 选项：

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

Ionic Angular 导出了自己的 `ModalOptions` 和 `PopoverOptions` 类型，它们在核心选项的基础上扩展了 Angular 特有的属性，如 `injector`：

- `ModalOptions` - 在核心 `ModalOptions` 基础上扩展了 `injector` 属性
- `PopoverOptions` - 在核心 `PopoverOptions` 基础上扩展了 `injector` 属性

这些类型从 `@ionic/angular` 和 `@ionic/angular/standalone` 中导出：

```typescript
import type { ModalOptions, PopoverOptions } from '@ionic/angular/standalone';
```

## Ionic 叠加层文档

要查看完整的文档和使用示例，请访问 Ionic 中各个叠加层的文档页面：

- [操作表 (Action Sheet)](https://ionicframework.com/docs/api/action-sheet)
- [警告框 (Alert)](https://ionicframework.com/docs/api/alert)
- [加载指示器 (Loading)](https://ionicframework.com/docs/api/loading)
- [模态框 (Modal)](https://ionicframework.com/docs/api/modal)
- [选择器 (Picker)](https://ionicframework.com/docs/api/picker)
- [弹出框 (Popover)](https://ionicframework.com/docs/api/popover)
- [轻提示 (Toast)](https://ionicframework.com/docs/api/toast)