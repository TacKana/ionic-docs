```ts
import { Component } from '@angular/core';
import { IonicModule, ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  handleScrollStart() {
    console.log('滚动开始');
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    console.log('滚动', ev.detail);
  }

  handleScrollEnd() {
    console.log('滚动结束');
  }
}
```