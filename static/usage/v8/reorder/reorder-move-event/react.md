```tsx
import React, { useState } from 'react';
import {
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  ReorderEndCustomEvent,
  ReorderMoveCustomEvent,
} from '@ionic/react';

function Example() {
  const [items, setItems] = useState([
    '购买杂货',
    '致电银行',
    '完成项目报告',
    '预订机票',
    '阅读一本书',
  ]);

  function handleReorderMove(event: ReorderMoveCustomEvent) {
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

    // 向下拖拽：将 from+1 到 to 之间的项目上移，将被拖拽项设置为 to+1
    if (from < to) {
      for (let i = from; i <= to; i++) {
        const item = itemElements[i];
        const itemNum = item.querySelector('b');
        if (i === from) {
          // 被拖拽项
          itemNum!.textContent = String(to + 1);
          item.id = `item-${to + 1}`;
        } else {
          // 其他项上移
          itemNum!.textContent = String(i);
          item.id = `item-${i}`;
        }
      }
      // 向上拖拽：将 to 到 from-1 之间的项目下移，将被拖拽项设置为 to+1
    } else if (from > to) {
      for (let i = to; i <= from; i++) {
        const item = itemElements[i];
        const itemNum = item.querySelector('b');
        if (i === from) {
          // 被拖拽项
          itemNum!.textContent = String(to + 1);
          item.id = `item-${to + 1}`;
        } else {
          // 其他项下移
          itemNum!.textContent = String(i + 2);
          item.id = `item-${i + 2}`;
        }
      }
    }
  }

  function handleReorderEnd(event: ReorderEndCustomEvent) {
    // 完成重新排序并更新数据
    setItems(event.detail.complete(items));
  }

  return (
    <IonList lines="full">
      {/* 默认禁用重新排序手势，启用后即可拖拽项目 */}
      <IonReorderGroup disabled={false} onIonReorderMove={handleReorderMove} onIonReorderEnd={handleReorderEnd}>
        {items.map((item, index) => (
          <IonItem key={item} id={`item-${index + 1}`}>
            <b slot="start">{index + 1}</b>
            <IonLabel>{item}</IonLabel>
            <IonReorder slot="end"></IonReorder>
          </IonItem>
        ))}
      </IonReorderGroup>
    </IonList>
  );
}

export default Example;
```