```ts
import { Component } from '@angular/core';
import { IonButton, IonIcon, IonItem, IonLabel } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { home, navigate, star } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonIcon, IonItem, IonLabel],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后在应用任何地方通过名称引用。
     */
    addIcons({ home, navigate, star });
  }
}
```