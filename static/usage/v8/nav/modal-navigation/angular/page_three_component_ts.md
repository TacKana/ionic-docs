```ts
import { Component } from '@angular/core';
import { IonButton, IonContent, IonNav } from '@ionic/angular/standalone';

@Component({
  selector: 'app-page-one',
  template: `
    <ion-content class="ion-padding">
      <h1>第三页</h1>
      <ion-button (click)="navigateBack()">返回上一页</ion-button>
      <ion-button (click)="navigateToRoot()">返回首页</ion-button>
    </ion-content>
  `,
  imports: [IonButton, IonContent],
})
export class PageThreeComponent {
  constructor(private nav: IonNav) {}

  navigateBack() {
    this.nav.pop();
  }

  navigateToRoot() {
    this.nav.popToRoot();
  }
}
```