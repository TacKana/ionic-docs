```ts
import { Component } from '@angular/core';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { caretDownSharp } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonList, IonSelect, IonSelectOption],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要用到的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后在应用内任何地方通过名称引用。
     */
    addIcons({ caretDownSharp });
  }
}
```