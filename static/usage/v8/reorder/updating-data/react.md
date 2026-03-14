```tsx
import React, { useState } from 'react';
import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ReorderEndCustomEvent } from '@ionic/react';

function Example() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  function handleReorderEnd(event: ReorderEndCustomEvent) {
    // 在调用 complete 方法前，项目将保持拖拽前的顺序
    console.log('拖拽前', items);

    // 完成重新排序，并根据手势结束位置在 DOM 中定位项目
    // 更新 items 变量为新的项目顺序
    setItems(event.detail.complete(items));

    // 调用 complete 方法后，项目将按新顺序排列
    console.log('拖拽后', items);
  }

  return (
    <IonList>
      {/* 重新排序手势默认禁用，启用后即可拖放项目 */}
      <IonReorderGroup disabled={false} onIonReorderEnd={handleReorderEnd}>
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