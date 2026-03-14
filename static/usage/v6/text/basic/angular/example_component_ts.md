```ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { warning } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  constructor() {
    /**
     * 任何你想在应用中使用的图标
     * 都可以在 app.component.ts 中注册，
     * 然后就可以在整个应用中通过名称来引用。
     */
    addIcons({ warning });
  }
}
```