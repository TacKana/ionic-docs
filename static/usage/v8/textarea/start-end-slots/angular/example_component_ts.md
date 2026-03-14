```ts
import { Component } from '@angular/core';
import { IonButton, IonIcon, IonItem, IonList, IonTextarea } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonIcon, IonItem, IonList, IonTextarea],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后通过名称在应用中的任何地方引用。
     */
    addIcons({ eye, lockClosed });
  }
}
```