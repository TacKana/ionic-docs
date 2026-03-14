```ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PageTwoComponent } from './page-two.component';

@Component({
  selector: 'app-page-one',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>页面一</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>页面一</h1>
      <ion-nav-link router-direction="forward" [component]="component">
        <ion-button>前往页面二</ion-button>
      </ion-nav-link>
    </ion-content>
  `,
  imports: [IonicModule],
  standalone: true,
})
export class PageOneComponent {
  component = PageTwoComponent;
}
```