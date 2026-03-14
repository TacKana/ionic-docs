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
     * 应用中任何你想使用的图标
     * 都可以在 app.component.ts 中注册，
     * 然后通过名称在应用中的任何地方引用。
     */
    addIcons({ create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star });
  }
}
```