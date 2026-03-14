```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ReorderEndCustomEvent } from '@ionic/react';

function Example() {
  function handleReorderEnd(event: ReorderEndCustomEvent) {
    // `from` 和 `to` 属性分别记录了拖拽开始和结束时项目的索引位置
    console.log('从索引', event.detail.from, '拖拽至', event.detail.to);

    // 完成重新排序，根据手势结束的位置将项目放置到 DOM 中。
    // 此方法也可以由重新排序组直接调用。
    event.detail.complete();
  }

  return (
    <IonList>
      {/* 重新排序手势默认是禁用的，启用后即可拖拽项目 */}
      <IonReorderGroup disabled={false} onIonReorderEnd={handleReorderEnd}>
        <IonItem>
          <IonLabel>项目 1</IonLabel>
          <IonReorder slot="end"></IonReorder>
        </IonItem>

        <IonItem>
          <IonLabel>项目 2</IonLabel>
          <IonReorder slot="end"></IonReorder>
        </IonItem>

        <IonItem>
          <IonLabel>项目 3</IonLabel>
          <IonReorder slot="end"></IonReorder>
        </IonItem>

        <IonItem>
          <IonLabel>项目 4</IonLabel>
          <IonReorder slot="end"></IonReorder>
        </IonItem>

        <IonItem>
          <IonLabel>项目 5</IonLabel>
          <IonReorder slot="end"></IonReorder>
        </IonItem>
      </IonReorderGroup>
    </IonList>
  );
}
export default Example;
```