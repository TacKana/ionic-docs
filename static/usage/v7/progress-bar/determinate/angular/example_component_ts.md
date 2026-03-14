```ts
import { Component } from '@angular/core';
import { IonProgressBar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonProgressBar],
})
export class ExampleComponent {
  public progress = 0;

  constructor() {
    setInterval(() => {
      this.progress += 0.01;

      // 当进度条达到 100% 时重置
      // 以便持续展示演示效果
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);
  }
}
```