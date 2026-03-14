```ts
import { Component, ViewChild } from '@angular/core';
import { IonButton, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonContent],
})
export class ExampleComponent {
  @ViewChild(IonContent) content!: IonContent;

  scrollToBottom() {
    // 向方法传入一个持续时间参数，可以让滚动缓慢地到达底部，而不是瞬间跳转
    this.content.scrollToBottom(500);
  }

  scrollToTop() {
    // 向方法传入一个持续时间参数，可以让滚动缓慢地到达顶部，而不是瞬间跳转
    this.content.scrollToTop(500);
  }
}
```