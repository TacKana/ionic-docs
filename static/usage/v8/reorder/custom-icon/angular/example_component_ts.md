```ts
import { Component } from '@angular/core';
import {
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  ReorderEndCustomEvent,
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
     * 您想在应用程序中使用的任何图标
     * 都可以在 app.component.ts 中注册，
     * 然后在整个应用程序中通过名称引用。
     */
    addIcons({ pizza });
  }

  handleReorderEnd(event: ReorderEndCustomEvent) {
    // `from` 和 `to` 属性分别包含项目
    // 在拖拽开始和结束时的索引位置
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 完成重新排序，并根据手势结束的位置
    // 将项目放置在 DOM 中。此方法也可以由
    // 重新排序组直接调用。
    event.detail.complete();
  }
}
```