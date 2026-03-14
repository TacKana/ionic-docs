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
    // `from` 和 `to` 属性分别包含拖动开始和结束时项目的索引
    console.log('从索引', event.detail.from, '拖动到', event.detail.to);

    // 完成重新排序，并根据手势结束位置将项目定位到 DOM 中。
    // 此方法也可由重新排序组直接调用。
    event.detail.complete();
  }
}
```