```ts
import { Component } from '@angular/core';
import { IonButton, IonContent, IonNav } from '@ionic/angular/standalone';

import { PageThreeComponent } from './page-three.component';

@Component({
  selector: 'app-page-two',
  template: `
    <ion-content class="ion-padding">
      <h1>页面二</h1>
      <ion-button (click)="navigateToPageThree()">前往页面三</ion-button>
    </ion-content>
  `,
  imports: [IonButton, IonContent],
})
export class PageTwoComponent {
  component = PageThreeComponent;

  constructor(private nav: IonNav) {}

  navigateToPageThree() {
    this.nav.push(PageThreeComponent);
  }
}
```