```ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  handleRefresh(event) {
    setTimeout(() => {
      // 所有加载数据的调用都放在这里
      event.target.complete();
    }, 2000);
  }
}
```