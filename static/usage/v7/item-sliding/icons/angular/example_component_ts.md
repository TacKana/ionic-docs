```ts
import { Component } from '@angular/core';
import {
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { archive, heart, trash } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要使用的任何图标
     * 都可以在 app.component.ts 文件中注册，
     * 然后在应用内的任何地方通过名称引用。
     */
    addIcons({ archive, heart, trash });
  }
}
```