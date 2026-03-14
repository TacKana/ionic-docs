```ts
import { Component } from '@angular/core';
import { IonIcon, IonItem, IonLabel } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { informationCircle, star } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonIcon, IonItem, IonLabel],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中想要使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后就能在整个应用中通过名称来引用了。
     */
    addIcons({ informationCircle, star });
  }
}
```