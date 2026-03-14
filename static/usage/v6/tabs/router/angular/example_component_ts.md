```ts
import { Component, EnvironmentInjector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { playCircle, library, radio, search } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [CommonModule, IonicModule, RouterModule],
  standalone: true,
})
export class ExampleComponent {
  constructor(public environmentInjector: EnvironmentInjector) {
    /**
     * 您希望在应用中使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后在整个应用中通过名称引用。
     */
    addIcons({ playCircle, library, radio, search });
  }
}
```