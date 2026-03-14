```ts
import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonIcon],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用程序中想要使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后在整个应用程序中通过名称引用。
     */
    addIcons({ logoIonic });
  }
}
```