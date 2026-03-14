```ts
import { Component } from '@angular/core';
import { IonButton, IonContent, IonNav } from '@ionic/angular/standalone';

import { PageTwoComponent } from './page-two.component';

@Component({
  selector: 'app-page-one',
  template: `
    <ion-content class="ion-padding">
      <h1>页面一</h1>
      <ion-button (click)="navigateToPageTwo()">前往页面二</ion-button>
    </ion-content>
  `,
  imports: [IonButton, IonContent],
})
export class PageOneComponent {
  constructor(private nav: IonNav) {}

  navigateToPageTwo() {
    this.nav.push(PageTwoComponent);
  }
}
```