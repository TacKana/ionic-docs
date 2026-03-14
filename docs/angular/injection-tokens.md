---
title: Angular Injection Tokens
sidebar_label: Injection Tokens
---

<head>
  <title>Angular Injection Tokens | 通过依赖注入访问 Ionic 元素</title>
  <meta
    name="description"
    content="了解如何使用 Ionic 的 Angular 注入令牌，通过 Angular 的依赖注入系统访问 Ionic 元素，以实现更流畅的组件交互。"
  />
</head>

Ionic 提供了 Angular 注入令牌，允许您通过 Angular 的依赖注入系统访问 Ionic 元素。这为以编程方式与 Ionic 组件交互提供了一种更符合 Angular 习惯的方式。

## 优势

使用注入令牌具有以下几个优点：

- **类型安全**：全面的 TypeScript 支持，为模态元素提供正确的类型定义
- **Angular 集成**：与 Angular 的依赖注入系统无缝协作
- **简化代码**：无需使用 `ViewChild` 查询或手动元素引用
- **更好的测试**：更容易模拟和测试使用注入令牌的组件

## IonModalToken

`IonModalToken` 注入令牌允许您将当前模态元素的引用直接注入到您的 Angular 组件中。这在您需要以编程方式控制模态行为、监听模态事件或访问模态属性时特别有用。

从 `@ionic/angular` v8.7.0 开始，您可以使用此注入令牌来简化 Angular 应用中的模态交互。

### 基本用法

要使用 `IonModalToken`，请将其注入到组件的构造函数中：

```tsx
import { Component, inject } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonModalToken, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>模态内容</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <p>这是模态内容</p>
      <ion-button (click)="closeModal()">关闭模态</ion-button>
    </ion-content>
  `,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class ModalComponent {
  private modalToken = inject(IonModalToken);

  closeModal() {
    this.modalToken.dismiss();
  }
}
```

### 监听模态事件

您可以使用注入的模态引用来监听模态生命周期事件：

```tsx
import { Component, inject, OnInit } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonModalToken, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>带事件的模态</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <p>请查看控制台中的模态事件</p>
      <ion-button (click)="closeModal()">关闭</ion-button>
    </ion-content>
  `,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class ModalComponent implements OnInit {
  private modalToken = inject(IonModalToken);

  ngOnInit() {
    this.modalToken.addEventListener('ionModalWillDismiss', (event) => {
      console.log('模态即将关闭:', event.detail);
    });

    this.modalToken.addEventListener('ionModalDidDismiss', (event) => {
      console.log('模态已关闭:', event.detail);
    });
  }

  closeModal() {
    this.modalToken.dismiss({ result: '通过按钮关闭' });
  }
}
```

### 访问模态属性

注入的模态引用提供了对所有模态属性和方法的访问：

```tsx
import { Component, inject, OnInit } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonModalToken, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>模态属性</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <p>模态 ID: {{ modalId }}</p>
      <ion-button (click)="toggleBackdropDismiss()"> 切换背景关闭: {{ backdropDismiss }} </ion-button>
    </ion-content>
  `,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class ModalComponent implements OnInit {
  private modalToken = inject(IonModalToken);

  modalId = '';
  backdropDismiss = true;

  ngOnInit() {
    this.modalId = this.modalToken.id || '无 ID';
    this.backdropDismiss = this.modalToken.backdropDismiss;
  }

  toggleBackdropDismiss() {
    this.backdropDismiss = !this.backdropDismiss;
    this.modalToken.backdropDismiss = this.backdropDismiss;
  }
}
```

### 打开使用注入令牌内容的模态

当打开一个使用注入令牌的模态时，您可以将组件直接传递给模态控制器：

```tsx
import { Component, inject } from '@angular/core';
import { IonContent, IonButton, ModalController } from '@ionic/angular/standalone';
import { ModalComponent } from './modal.component';

@Component({
  selector: 'app-home',
  template: `
    <ion-content>
      <ion-button (click)="openModal()">打开模态</ion-button>
    </ion-content>
  `,
})
export class HomePage {
  private modalController = inject(ModalController);

  async openModal() {
    const myModal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        // 任何您想要传递给模态内容的属性
      },
    });

    await myModal.present();
  }
}
```