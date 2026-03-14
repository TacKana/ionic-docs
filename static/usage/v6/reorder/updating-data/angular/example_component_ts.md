```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class ExampleComponent {
  items = [1, 2, 3, 4, 5];

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // 在调用 complete 方法之前，items 将保持拖拽前的顺序
    console.log('Before complete', this.items);

    // 完成重新排序，根据手势结束位置在 DOM 中定位项目
    // 更新 items 变量为新的项目顺序
    this.items = ev.detail.complete(this.items);

    // 调用 complete 方法后，items 将变为新的顺序
    console.log('After complete', this.items);
  }
}
```