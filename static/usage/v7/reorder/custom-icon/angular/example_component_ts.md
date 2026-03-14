```ts
import { Component } from '@angular/core';
import {
  ItemReorderEventDetail,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { pizza } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonIcon, IonItem, IonLabel, IonList, IonReorder, IonReorderGroup],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要使用的所有图标
     * 都可以在 app.component.ts 中注册，
     * 然后就能在应用内通过名称引用了。
     */
    addIcons({ pizza });
  }

  handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // `from` 和 `to` 属性分别记录了拖拽开始和结束时
    // 该项目在列表中的索引位置
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 完成重排序，并根据手势结束位置在 DOM 中重新定位项目。
    // 此方法也可以由 reorder 组件直接调用
    event.detail.complete();
  }
}
```