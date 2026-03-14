```ts
import { Component } from '@angular/core';
import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { add, colorPalette, document, globe } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonFab, IonFabButton, IonFabList, IonIcon],
})
export class ExampleComponent {
  constructor() {
    /**
     * 您希望在应用程序中使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后在应用程序的任何地方通过名称引用。
     */
    addIcons({ add, colorPalette, document, globe });
  }
}
```