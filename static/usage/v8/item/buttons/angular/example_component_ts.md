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
     * 应用中需要使用的所有图标
     * 都可以在 app.component.ts 中注册，
     * 之后便可以在应用的任何位置通过名称引用。
     */
    addIcons({ home, navigate, star });
  }
}
```