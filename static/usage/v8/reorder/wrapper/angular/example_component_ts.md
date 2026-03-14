```ts
import { Component } from '@angular/core';
import {
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  ReorderEndCustomEvent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonLabel, IonList, IonReorder, IonReorderGroup],
})
export class ExampleComponent {
  handleReorderEnd(event: ReorderEndCustomEvent) {
    // `from` 和 `to` 属性分别包含了拖拽开始时和结束时
    // 元素的索引位置
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 完成重新排序，并根据手势结束的位置
    // 将元素放置到 DOM 中。此方法也可以由重新排序组直接调用。
    event.detail.complete();
  }
}
```