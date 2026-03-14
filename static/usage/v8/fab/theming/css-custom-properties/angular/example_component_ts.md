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
     * 您可以在 app.component.ts 中注册应用中需要使用的所有图标，
     * 之后便可以在应用内通过名称引用它们。
     */
    addIcons({ add, colorPalette, document, globe });
  }
}
```