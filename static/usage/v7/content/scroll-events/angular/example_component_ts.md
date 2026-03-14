```ts
import { Component } from '@angular/core';
import { IonContent, ScrollDetail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonContent],
})
export class ExampleComponent {
  handleScrollStart() {
    console.log('滚动开始');
  }

  handleScroll(event: CustomEvent<ScrollDetail>) {
    console.log('滚动', JSON.stringify(event.detail));
  }

  handleScrollEnd() {
    console.log('滚动结束');
  }
}
```