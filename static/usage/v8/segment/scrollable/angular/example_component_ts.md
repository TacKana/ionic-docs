```ts
import { Component } from '@angular/core';
import { IonIcon, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { barbell, basket, call, globe, heart, home, person, pin, star, trash } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonIcon, IonSegment, IonSegmentButton],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后就可以在应用的任何地方通过名称引用了。
     */
    addIcons({ barbell, basket, call, globe, heart, home, person, pin, star, trash });
  }
}
```