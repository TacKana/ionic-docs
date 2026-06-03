---
title: Angular 注入令牌
sidebar_label: 注入令牌
---

<head>
  <title>Angular 注入令牌 | 通过依赖注入访问 Ionic 元素</title>
  <meta
    name="description"
    content="了解如何使用 Ionic 的 Angular 注入令牌，通过 Angular 的依赖注入系统访问 Ionic 元素，实现更简化的组件交互。"
  />
</head>

Ionic 提供了 Angular 注入令牌，允许你通过 Angular 的依赖注入系统访问 Ionic 元素。这提供了一种更符合 Angular 惯用方式的方法来以编程方式与 Ionic 组件交互。

## 优势

使用注入令牌具有以下优势：

- **类型安全**：对模态框元素提供完整 TypeScript 支持和正确的类型定义
- **Angular 集成**：与 Angular 的依赖注入系统无缝协作
- **简化代码**：消除了对 `ViewChild` 查询或手动元素引用的需求
- **更好的测试性**：更容易模拟和测试使用注入令牌的组件

## IonModalToken

`IonModalToken` 注入令牌允许你直接将当前模态框元素的引用注入到 Angular 组件中。当需要以编程方式控制模态框行为、监听模态框事件或访问模态框属性时，这特别有用。

从 `@ionic/angular` v8.7.0 开始，你可以使用此注入令牌来简化 Angular 应用中的模态框交互。

### 基本用法

要使用 `IonModalToken`，将其注入到组件的构造函数中：

```tsx
import { Component, inject } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonModalToken, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <p>This is modal content</p>
      <ion-button (click)="closeModal()">Close Modal</ion-button>
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

### 监听模态框事件

你可以使用注入的模态框引用来监听模态框生命周期事件：

```tsx
import { Component, inject, OnInit } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonModalToken, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal with Events</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <p>Check the console for modal events</p>
      <ion-button (click)="closeModal()">Close</ion-button>
    </ion-content>
  `,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class ModalComponent implements OnInit {
  private modalToken = inject(IonModalToken);

  ngOnInit() {
    this.modalToken.addEventListener('ionModalWillDismiss', (event) => {
      console.log('Modal will dismiss:', event.detail);
    });

    this.modalToken.addEventListener('ionModalDidDismiss', (event) => {
      console.log('Modal did dismiss:', event.detail);
    });
  }

  closeModal() {
    this.modalToken.dismiss({ result: 'closed by button' });
  }
}
```

### 访问模态框属性

注入的模态框引用提供了对所有模态框属性和方法的访问：

```tsx
import { Component, inject, OnInit } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonModalToken, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal Properties</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <p>Modal ID: {{ modalId }}</p>
      <ion-button (click)="toggleBackdropDismiss()"> Toggle Backdrop Dismiss: {{ backdropDismiss }} </ion-button>
    </ion-content>
  `,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class ModalComponent implements OnInit {
  private modalToken = inject(IonModalToken);

  modalId = '';
  backdropDismiss = true;

  ngOnInit() {
    this.modalId = this.modalToken.id || 'No ID';
    this.backdropDismiss = this.modalToken.backdropDismiss;
  }

  toggleBackdropDismiss() {
    this.backdropDismiss = !this.backdropDismiss;
    this.modalToken.backdropDismiss = this.backdropDismiss;
  }
}
```

### 使用注入令牌内容打开模态框

当打开一个使用注入令牌的模态框时，你可以直接将组件传递给模态框控制器：

```tsx
import { Component, inject } from '@angular/core';
import { IonContent, IonButton, ModalController } from '@ionic/angular/standalone';
import { ModalComponent } from './modal.component';

@Component({
  selector: 'app-home',
  template: `
    <ion-content>
      <ion-button (click)="openModal()">Open Modal</ion-button>
    </ion-content>
  `,
})
export class HomePage {
  private modalController = inject(ModalController);

  async openModal() {
    const myModal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        // 你想传递给模态框内容的任何属性
      },
    });

    await myModal.present();
  }
}
```
