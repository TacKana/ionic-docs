```ts
import { Component } from '@angular/core';

import { IonicModule, ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // `from` 和 `to` 属性分别包含拖动开始和结束时项目的索引
    console.log('从索引', ev.detail.from, '拖动到', ev.detail.to);

    // 完成重新排序，并根据手势结束的位置在 DOM 中放置项目
    // 此方法也可以由重新排序组直接调用
    ev.detail.complete();
  }
}
```