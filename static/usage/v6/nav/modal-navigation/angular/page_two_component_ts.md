```ts
import { Component } from '@angular/core';
import { IonicModule, IonNav } from '@ionic/angular';

import { PageThreeComponent } from './page-three.component';

@Component({
  selector: 'app-page-two',
  template: `
    <ion-content class="ion-padding">
      <h1>页面二</h1>
      <ion-button (click)="navigateToPageThree()">前往页面三</ion-button>
    </ion-content>
  `,
  imports: [IonicModule],
  standalone: true,
})
export class PageTwoComponent {
  component = PageThreeComponent;

  constructor(private nav: IonNav) {}

  navigateToPageThree() {
    this.nav.push(PageThreeComponent);
  }
}
```