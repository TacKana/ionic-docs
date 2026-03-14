```ts
import { Component } from '@angular/core';
import { IonicModule, IonNav } from '@ionic/angular';

@Component({
  selector: 'app-page-one',
  template: `
    <ion-content class="ion-padding">
      <h1>页面三</h1>
      <ion-button (click)="navigateBack()">返回</ion-button>
      <ion-button (click)="navigateToRoot()">返回根页面</ion-button>
    </ion-content>
  `,
  imports: [IonicModule],
  standalone: true,
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