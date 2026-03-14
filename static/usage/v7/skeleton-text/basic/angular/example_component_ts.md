```ts
import { Component } from '@angular/core';
import {
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSkeletonText,
  IonThumbnail,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { musicalNotes } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonSkeletonText, IonThumbnail],
})
export class ExampleComponent {
  public loaded = false;

  constructor() {
    /**
     * 应用中需要使用的图标
     * 可以在 app.component.ts 中注册，
     * 然后在整个应用中通过名称引用。
     */
    addIcons({ musicalNotes });
  }
}
```