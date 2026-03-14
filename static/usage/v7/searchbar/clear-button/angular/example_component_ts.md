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
     * 您希望在应用程序中使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后在应用程序的任何位置通过名称引用。
     */
    addIcons({ trashBin });
  }
}
```