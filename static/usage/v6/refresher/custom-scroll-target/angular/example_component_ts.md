```ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  handleRefresh(event) {
    setTimeout(() => {
      // 加载数据的相关调用写在这里
      event.target.complete();
    }, 2000);
  }
}
```