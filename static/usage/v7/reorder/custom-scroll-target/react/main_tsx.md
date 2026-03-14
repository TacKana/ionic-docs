```tsx
import React from 'react';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  ItemReorderEventDetail,
} from '@ionic/react';

import './main.css';

function Example() {
  function handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // `from`和`to`属性分别表示拖拽开始和结束时项目的索引位置
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 完成重新排序，并根据手势结束位置在DOM中定位项目
    // 此方法也可以由重新排序组直接调用
    event.detail.complete();
  }

  return (
    <IonContent scrollY={false}>
      <div className="ion-content-scroll-host">
        <IonList>
          {/* 重新排序手势默认是禁用的，启用后即可拖拽项目 */}
          <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
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
      </div>
    </IonContent>
  );
}
export default Example;
```