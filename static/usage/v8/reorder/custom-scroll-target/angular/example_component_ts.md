```ts
import { Component } from '@angular/core';
import {
  ReorderEndCustomEvent,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['./example.component.css'],
  imports: [IonContent, IonItem, IonLabel, IonList, IonReorder, IonReorderGroup],
})
export class ExampleComponent {
  handleReorderEnd(event: ReorderEndCustomEvent) {
    // `from` 和 `to` 属性分别包含拖拽开始和结束时项目的索引
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 完成重新排序，并根据手势结束位置在 DOM 中定位项目。
    // 此方法也可以由 reorder 组直接调用。
    event.detail.complete();
  }
}
```