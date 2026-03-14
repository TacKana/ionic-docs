```ts
import { Component } from '@angular/core';
import {
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  ReorderEndCustomEvent,
  ReorderMoveCustomEvent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonLabel, IonList, IonReorder, IonReorderGroup],
})
export class ExampleComponent {
  items = ['Buy groceries', 'Call the bank', 'Finish project report', 'Book flight tickets', 'Read a book'];

  handleReorderMove(event: ReorderMoveCustomEvent) {
    const from = event.detail.from;
    const to = event.detail.to;

    if (from !== to) {
      console.log('从索引', from, '拖拽到', to);
    }

    // 获取所有项目并按当前 id（item-1、item-2...）排序
    const itemElements = Array.from(document.querySelectorAll('ion-item')).sort((a, b) => {
      const aNum = parseInt(a.id.replace('item-', ''), 10);
      const bNum = parseInt(b.id.replace('item-', ''), 10);
      return aNum - bNum;
    });

    // 向下拖拽：将 from+1 到 to 之间的项目上移，将被拖拽项设置到 to+1
    if (from < to) {
      for (let i = from; i <= to; i++) {
        const item = itemElements[i];
        const itemNum = item.querySelector('b');
        if (itemNum) {
          if (i === from) {
            // 被拖拽项
            itemNum.textContent = String(to + 1);
            item.id = `item-${to + 1}`;
          } else {
            // 项目上移
            itemNum.textContent = String(i);
            item.id = `item-${i}`;
          }
        }
      }
      // 向上拖拽：将 to 到 from-1 之间的项目下移，将被拖拽项设置到 to+1
    } else if (from > to) {
      for (let i = to; i <= from; i++) {
        const item = itemElements[i];
        const itemNum = item.querySelector('b');
        if (itemNum) {
          if (i === from) {
            // 被拖拽项
            itemNum.textContent = String(to + 1);
            item.id = `item-${to + 1}`;
          } else {
            // 项目下移
            itemNum.textContent = String(i + 2);
            item.id = `item-${i + 2}`;
          }
        }
      }
    }
  }

  handleReorderEnd(event: ReorderEndCustomEvent) {
    // 完成重新排序并更新项目数据
    this.items = event.detail.complete(this.items);
  }
}
```