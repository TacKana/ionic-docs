```ts
import { Component } from '@angular/core';
import { IonAvatar, IonIcon, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { airplane, bluetooth, call, wifi } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonAvatar, IonIcon, IonItem, IonLabel, IonList],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后通过名称在应用中的任何地方引用。
     */
    addIcons({ airplane, bluetooth, call, wifi });
  }
}
```