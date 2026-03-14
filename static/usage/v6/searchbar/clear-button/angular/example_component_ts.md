```ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trashBin } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后在应用内的任何位置通过名称引用。
     */
    addIcons({ trashBin });
  }
}
```