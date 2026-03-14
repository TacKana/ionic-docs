```ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PageThreeComponent } from './page-three.component';

@Component({
  selector: 'app-page-two',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>第二页</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>第二页</h1>
      <div>
        <ion-nav-link router-direction="forward" [component]="component">
          <ion-button>前往第三页</ion-button>
        </ion-nav-link>
      </div>
    </ion-content>
  `,
  imports: [IonicModule],
  standalone: true,
})
export class PageTwoComponent {
  component = PageThreeComponent;
}
```