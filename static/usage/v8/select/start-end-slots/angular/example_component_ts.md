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
     * 您想在应用程序中使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后即可在应用程序的任何地方通过名称引用。
     */
    addIcons({ eye, leaf });
  }
}
```