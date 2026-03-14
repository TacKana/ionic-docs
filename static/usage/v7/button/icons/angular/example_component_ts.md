```ts
import { Component } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonIcon],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中所有需要使用的图标
     * 都可以在 app.component.ts 中注册，
     * 然后通过名称在应用的任何地方引用。
     */
    addIcons({ star });
  }
}
```