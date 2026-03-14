```ts
import { Component } from '@angular/core';
import { IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonFab, IonFabButton, IonIcon],
})
export class ExampleComponent {
  constructor() {
    /**
     * 您希望在应用中使用的任何图标
     * 都可以在 app.component.ts 中进行注册，
     * 然后在整个应用中通过名称来引用。
     */
    addIcons({ add });
  }
}
```