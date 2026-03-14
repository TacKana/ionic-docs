```tsx
import React from 'react';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  ReorderEndCustomEvent,
} from '@ionic/react';

import './main.css';

function Example() {
  function handleReorderEnd(event: ReorderEndCustomEvent) {
    // `from` 和 `to` 属性分别包含拖动开始和结束时项目的索引
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 完成重新排序并根据手势结束位置将项目定位在 DOM 中
    // 此方法也可以由重新排序组直接调用
    event.detail.complete();
  }

  return (
    <IonContent scrollY={false}>
      <div className="ion-content-scroll-host">
        <IonList>
          {/* 重新排序手势默认禁用，启用后即可拖放项目 */}
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
      </div>
    </IonContent>
  );
}
export default Example;
```