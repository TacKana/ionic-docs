```ts
import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonBackButton, IonButton, IonButtons, IonIcon, IonMenuButton, IonTitle, IonToolbar],
})
export class ExampleComponent {
  constructor() {
    /**
     * 任何你想在应用中使用的图标
     * 都可以在 app.component.ts 中注册，
     * 然后在应用的任何地方通过名称引用。
     */
    addIcons({ create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star });
  }
}
```