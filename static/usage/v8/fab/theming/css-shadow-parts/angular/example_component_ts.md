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
     * 应用中希望使用的任何图标，
     * 都可以在 app.component.ts 中注册，
     * 然后在应用的任何地方通过名称引用。
     */
    addIcons({ add, colorPalette, document, globe });
  }
}
```