```ts
import { Component } from '@angular/core';
import { IonButton, IonIcon, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { eye, leaf } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonIcon, IonItem, IonList, IonSelect, IonSelectOption],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后在应用内任何地方通过名称引用。
     */
    addIcons({ eye, leaf });
  }
}
```