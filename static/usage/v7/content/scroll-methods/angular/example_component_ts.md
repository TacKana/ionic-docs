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
    // 给方法传入一个持续时间参数，可以让滚动缓慢到达底部，而非瞬间跳转
    this.content.scrollToBottom(500);
  }

  scrollToTop() {
    // 给方法传入一个持续时间参数，可以让滚动缓慢到达顶部，而非瞬间跳转
    this.content.scrollToTop(500);
  }
}
```