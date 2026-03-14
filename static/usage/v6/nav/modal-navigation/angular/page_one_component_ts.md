```ts
import { Component } from '@angular/core';
import { IonicModule, IonNav } from '@ionic/angular';

import { PageTwoComponent } from './page-two.component';

@Component({
  selector: 'app-page-one',
  template: `
    <ion-content class="ion-padding">
      <h1>页面一</h1>
      <ion-button (click)="navigateToPageTwo()">前往页面二</ion-button>
    </ion-content>
  `,
  imports: [IonicModule],
  standalone: true,
})
export class PageOneComponent {
  constructor(private nav: IonNav) {}

  navigateToPageTwo() {
    this.nav.push(PageTwoComponent);
  }
}
```