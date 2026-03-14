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
     * 您想要在应用程序中使用的图标
     * 可以在 app.component.ts 中注册，
     * 然后通过名称在应用程序的任何地方引用。
     */
    addIcons({ arrowForwardCircle });
  }
}
```