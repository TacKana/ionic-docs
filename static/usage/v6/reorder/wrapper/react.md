```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ItemReorderEventDetail } from '@ionic/react';

function Example() {
  function handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // `from` 和 `to` 属性分别表示拖拽开始和结束时项目的索引位置
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 完成重新排序，并根据手势结束的位置将项目放置到 DOM 中
    // 此方法也可以由重新排序组直接调用
    event.detail.complete();
  }

  return (
    <IonList>
      {/* 重新排序手势默认是禁用的，启用后即可拖放项目 */}
      <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
        <IonReorder>
          <IonItem>
            <IonLabel>Item 1</IonLabel>
          </IonItem>
        </IonReorder>

        <IonReorder>
          <IonItem>
            <IonLabel>Item 2</IonLabel>
          </IonItem>
        </IonReorder>

        <IonReorder>
          <IonItem>
            <IonLabel>Item 3</IonLabel>
          </IonItem>
        </IonReorder>

        <IonReorder>
          <IonItem>
            <IonLabel>Item 4</IonLabel>
          </IonItem>
        </IonReorder>

        <IonReorder>
          <IonItem>
            <IonLabel>Item 5</IonLabel>
          </IonItem>
        </IonReorder>
      </IonReorderGroup>
    </IonList>
  );
}
export default Example;
```