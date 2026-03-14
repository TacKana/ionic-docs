```tsx
import React from 'react';
import { IonIcon, IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ItemReorderEventDetail } from '@ionic/react';
import { pizza } from 'ionicons/icons';

function Example() {
  function handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // `from` 和 `to` 属性分别包含拖拽开始和结束时项目的索引
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 完成重新排序，根据手势结束的位置在 DOM 中定位项目。
    // 此方法也可由重新排序组直接调用
    event.detail.complete();
  }

  return (
    <IonList>
      {/* 重新排序手势默认禁用，启用后即可拖放项目 */}
      <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
        <IonItem>
          <IonLabel>项目 1</IonLabel>
          <IonReorder slot="end">
            <IonIcon icon={pizza}></IonIcon>
          </IonReorder>
        </IonItem>

        <IonItem>
          <IonLabel>项目 2</IonLabel>
          <IonReorder slot="end">
            <IonIcon icon={pizza}></IonIcon>
          </IonReorder>
        </IonItem>

        <IonItem>
          <IonLabel>项目 3</IonLabel>
          <IonReorder slot="end">
            <IonIcon icon={pizza}></IonIcon>
          </IonReorder>
        </IonItem>

        <IonItem>
          <IonLabel>项目 4</IonLabel>
          <IonReorder slot="end">
            <IonIcon icon={pizza}></IonIcon>
          </IonReorder>
        </IonItem>

        <IonItem>
          <IonLabel>项目 5</IonLabel>
          <IonReorder slot="end">
            <IonIcon icon={pizza}></IonIcon>
          </IonReorder>
        </IonItem>
      </IonReorderGroup>
    </IonList>
  );
}
export default Example;
```