```ts
import { Component } from '@angular/core';
import { IonIcon, IonText } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { warning } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonIcon, IonText],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中任何你想要使用的图标
     * 都可以在 app.component.ts 中注册，
     * 然后在应用中的任何地方通过名称引用。
     */
    addIcons({ warning });
  }
}
```