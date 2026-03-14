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
     * 应用中需要使用的所有图标
     * 都可以在 app.component.ts 中注册，
     * 然后即可在整个应用中通过名称引用。
     */
    addIcons({ airplane, bluetooth, call, wifi });
  }
}
```