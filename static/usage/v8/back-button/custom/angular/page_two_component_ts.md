```ts
import { Component } from '@angular/core';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { caretBack } from 'ionicons/icons';

@Component({
  selector: 'app-page-two',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="上一页" icon="caret-back"></ion-back-button>
        </ion-buttons>
        <ion-title>返回按钮</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>页面二</h1>
      <p>使用返回按钮可导航至上一页面。</p>
    </ion-content>
  `,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar],
})
export class PageTwoComponent {
  constructor() {
    /**
     * 您想在应用程序中使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后在应用程序的任何地方通过名称引用。
     */
    addIcons({ caretBack });
  }
}
```