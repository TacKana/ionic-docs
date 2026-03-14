```ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-page-two',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>返回按钮</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>页面二</h1>
      <p>使用返回按钮可以导航到上一个页面。</p>
    </ion-content>
  `,
  imports: [IonicModule],
  standalone: true,
})
export class PageTwoComponent {}
```