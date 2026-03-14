```ts
import { Component } from '@angular/core';
import { IonAvatar, IonChip, IonIcon, IonLabel } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { close, closeCircle, pin } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonAvatar, IonChip, IonIcon, IonLabel],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要使用的所有图标
     * 都可以在 app.component.ts 中注册，
     * 然后在整个应用内通过名称引用。
     */
    addIcons({ close, closeCircle, pin });
  }
}
```