```ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, heart, pin, star, call, globe, basket, barbell, trash, person } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中所有需要使用的图标
     * 都可以在 app.component.ts 中注册，
     * 然后在应用的任何地方通过名称引用。
     */
    addIcons({ home, heart, pin, star, call, globe, basket, barbell, trash, person });
  }
}
```