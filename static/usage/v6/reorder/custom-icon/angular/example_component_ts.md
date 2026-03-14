```ts
import { Component } from '@angular/core';
import { IonicModule, ItemReorderEventDetail } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { pizza } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要使用的任何图标，
     * 都可以在 app.component.ts 中注册，
     * 之后便可在应用内通过名称引用。
     */
    addIcons({ pizza });
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // `from` 和 `to` 属性分别包含了拖拽开始和结束时项目的索引
    console.log('从索引', ev.detail.from, '拖拽至', ev.detail.to);

    // 完成重新排序，并根据手势结束的位置，将项目定位到 DOM 中。
    // 此方法也可由 reorder 分组直接调用。
    ev.detail.complete();
  }
}
```