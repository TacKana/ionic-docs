```ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { personCircle, search, ellipsisHorizontal, ellipsisVertical, helpCircle, star, create } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要使用的所有图标
     * 都可以在 app.component.ts 中进行注册，
     * 然后在整个应用中通过名称来引用。
     */
    addIcons({ personCircle, search, ellipsisHorizontal, ellipsisVertical, helpCircle, star, create });
  }
}
```