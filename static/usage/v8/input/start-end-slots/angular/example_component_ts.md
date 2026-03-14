```ts
import { Component } from '@angular/core';
import { IonButton, IonIcon, IonInput, IonItem, IonList } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonIcon, IonInput, IonItem, IonList],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要使用的图标
     * 可以在 app.component.ts 中注册，
     * 然后就可以在整个应用中通过名称引用这些图标。
     */
    addIcons({ eye, lockClosed });
  }
}
```