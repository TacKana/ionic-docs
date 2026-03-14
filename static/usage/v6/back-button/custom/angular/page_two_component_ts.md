```ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
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
      <h1>第二页</h1>
      <p>使用返回按钮可导航至上一页面。</p>
    </ion-content>
  `,
  imports: [IonicModule],
  standalone: true,
})
export class PageTwoComponent {
  constructor() {
    /**
     * 应用中需要使用的所有图标
     * 都可在 app.component.ts 中注册，
     * 之后便可在应用内通过名称引用。
     */
    addIcons({ caretBack });
  }
}
```