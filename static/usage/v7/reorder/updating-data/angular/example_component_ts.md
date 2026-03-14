```ts
import { Component } from '@angular/core';
import {
  ItemReorderEventDetail,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonLabel, IonList, IonReorder, IonReorderGroup],
})
export class ExampleComponent {
  items = [1, 2, 3, 4, 5];

  handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // 在调用complete方法之前，数组中的项目将保持拖拽前的顺序
    console.log('调用complete前', this.items);

    // 完成重新排序，根据手势结束位置在DOM中定位项目
    // 更新items变量为新的项目顺序
    this.items = event.detail.complete(this.items);

    // 调用complete方法后，数组中的项目将呈现新的顺序
    console.log('调用complete后', this.items);
  }
}
```