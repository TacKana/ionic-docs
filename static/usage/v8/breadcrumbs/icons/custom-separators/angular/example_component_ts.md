```ts
import { Component } from '@angular/core';
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowForwardCircle } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonBreadcrumb, IonBreadcrumbs, IonIcon],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要使用的所有图标
     * 都可以在 app.component.ts 中注册，
     * 然后在应用的任何位置通过名称引用。
     */
    addIcons({ arrowForwardCircle });
  }
}
```