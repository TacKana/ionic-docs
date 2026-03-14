```ts
import { Component } from '@angular/core';
import { IonSearchbar } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { searchCircle } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonSearchbar],
})
export class ExampleComponent {
  constructor() {
    /**
     * 您应用中要使用的所有图标
     * 都可以在 app.component.ts 中注册，
     * 然后在应用内的任何地方通过名称来引用。
     */
    addIcons({ searchCircle });
  }
}
```