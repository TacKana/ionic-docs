```ts
import { Component } from '@angular/core';
import { IonSearchbar } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { trashBin } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonSearchbar],
})
export class ExampleComponent {
  constructor() {
    /**
     * 您可以在 app.component.ts 中注册应用中
     * 需要使用的所有图标，然后在整个应用中
     * 通过名称引用这些图标。
     */
    addIcons({ trashBin });
  }
}
```