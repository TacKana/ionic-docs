```tsx
import React, { useState } from 'react';
import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ItemReorderEventDetail } from '@ionic/react';

function Example() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  function handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // 在 complete 方法被调用前，项目将保持拖拽前的顺序
    console.log('完成前', items);

    // 完成重新排序，并根据手势结束位置在 DOM 中定位项目
    // 更新 items 变量为新的项目顺序
    setItems(event.detail.complete(items));

    // complete 方法调用后，项目将处于新顺序
    console.log('完成后', items);
  }

  return (
    <IonList>
      {/* 重新排序手势默认禁用，启用后即可拖放项目 */}
      <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
        {items.map((item) => (
          <IonItem key={item}>
            <IonLabel>项目 {item}</IonLabel>
            <IonReorder slot="end"></IonReorder>
          </IonItem>
        ))}
      </IonReorderGroup>
    </IonList>
  );
}
export default Example;
```