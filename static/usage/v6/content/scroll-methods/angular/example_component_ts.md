```ts
import { Component, ViewChild } from '@angular/core';
import { IonicModule, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  @ViewChild(IonContent) content: IonContent;

  scrollToBottom() {
    // 给方法传入一个时长参数，可以让滚动缓慢地到达底部，而不是瞬间跳转
    this.content.scrollToBottom(500);
  }

  scrollToTop() {
    // 给方法传入一个时长参数，可以让滚动缓慢地到达顶部，而不是瞬间跳转
    this.content.scrollToTop(500);
  }
}
```