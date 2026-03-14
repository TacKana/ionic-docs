```ts
import { Component } from '@angular/core';
import { IonIcon, IonRange } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { snowOutline, sunnyOutline } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonIcon, IonRange],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用程序中需要使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后在整个应用程序中通过名称引用。
     */
    addIcons({ snowOutline, sunnyOutline });
  }
}
```