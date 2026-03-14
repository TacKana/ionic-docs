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
  public buffer = 0.06;
  public progress = 0;

  constructor() {
    setInterval(() => {
      this.buffer += 0.06;
      this.progress += 0.06;

      // 当进度条达到 100% 时重置
      // 以便持续展示演示效果
      if (this.progress > 1) {
        setTimeout(() => {
          this.buffer = 0.06;
          this.progress = 0;
        }, 1000);
      }
    }, 1000);
  }
}
```