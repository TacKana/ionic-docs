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
     * 任何你想在应用中使用的图标，
     * 都可以在 app.component.ts 中注册，
     * 然后通过名称在应用的任何地方引用。
     */
    addIcons({ caretDownSharp });
  }
}
```