```ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { caretDownCircle } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  constructor() {
    /**
     * 你希望在应用程序中使用的任何图标，
     * 都可以在 app.component.ts 中注册，
     * 然后在应用程序的任何地方通过名称引用。
     */
    addIcons({ caretDownCircle });
  }
}
```