```tsx
import React from 'react';
import { IonIcon, IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ReorderEndCustomEvent } from '@ionic/react';
import { pizza } from 'ionicons/icons';

function Example() {
  function handleReorderEnd(event: ReorderEndCustomEvent) {
    // `from` 和 `to` 属性分别表示拖拽开始和结束时项目的索引位置
    console.log('从索引', event.detail.from, '拖拽至索引', event.detail.to);

    // 完成重排序操作，并根据手势结束的位置在 DOM 中重新定位项目。
    // 此方法也可以由重排序组直接调用。
    event.detail.complete();
  }

  return (
    <IonList>
      {/* 重排序手势默认是禁用的，启用后即可拖拽项目 */}
      <IonReorderGroup disabled={false} onIonReorderEnd={handleReorderEnd}>
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