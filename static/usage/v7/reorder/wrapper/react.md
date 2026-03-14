```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ItemReorderEventDetail } from '@ionic/react';

function Example() {
  function handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // `from` 和 `to` 属性分别记录了拖拽开始和结束时项目的索引位置
    console.log('拖拽从索引', event.detail.from, '到', event.detail.to);

    // 完成重新排序，根据手势结束的位置在 DOM 中定位项目。
    // 此方法也可以由重新排序组直接调用。
    event.detail.complete();
  }

  return (
    <IonList>
      {/* 重新排序手势默认是禁用的，启用后即可拖放项目 */}
      <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
        <IonReorder>
          <IonItem>
            <IonLabel>项目 1</IonLabel>
          </IonItem>
        </IonReorder>

        <IonReorder>
          <IonItem>
            <IonLabel>项目 2</IonLabel>
          </IonItem>
        </IonReorder>

        <IonReorder>
          <IonItem>
            <IonLabel>项目 3</IonLabel>
          </IonItem>
        </IonReorder>

        <IonReorder>
          <IonItem>
            <IonLabel>项目 4</IonLabel>
          </IonItem>
        </IonReorder>

        <IonReorder>
          <IonItem>
            <IonLabel>项目 5</IonLabel>
          </IonItem>
        </IonReorder>
      </IonReorderGroup>
    </IonList>
  );
}
export default Example;
```