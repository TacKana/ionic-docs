```ts
import { Component } from '@angular/core';
import { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { camera, film, flash, home } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后通过名称在整个应用中引用。
     */
    addIcons({ camera, film, flash, home });
  }
}
```