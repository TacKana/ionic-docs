```ts
import { Component } from '@angular/core';
import { IonBadge, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, calendar, musicalNote } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['./example.component.css'],
  imports: [IonBadge, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要使用的所有图标
     * 都可以在 app.component.ts 中注册，
     * 之后即可在应用的任何位置通过名称引用。
     */
    addIcons({ heart, calendar, musicalNote });
  }
}
```