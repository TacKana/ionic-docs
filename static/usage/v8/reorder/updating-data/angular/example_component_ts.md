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
  items = [1, 2, 3, 4, 5];

  handleReorderEnd(event: ReorderEndCustomEvent) {
    // 在调用 complete 方法之前，items 将保持拖拽前的顺序
    console.log('调用 complete 前', this.items);

    // 完成重新排序，并根据手势结束的位置在 DOM 中定位项目
    // 更新 items 变量为新的项目顺序
    this.items = event.detail.complete(this.items);

    // 调用 complete 方法后，items 将按新顺序排列
    console.log('调用 complete 后', this.items);
  }
}
```