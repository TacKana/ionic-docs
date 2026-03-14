```ts
import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { chevronForward, listCircle } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonNote, IonText, IonTitle, IonToolbar],
})
export class ExampleComponent {
  constructor() {
    /**
     * 你希望在应用中使用的任何图标，
     * 都可以在 app.component.ts 中注册，
     * 然后在应用的任何地方通过名称引用。
     */
    addIcons({ chevronForward, listCircle });
  }
}
```