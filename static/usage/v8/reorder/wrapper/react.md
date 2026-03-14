```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ReorderEndCustomEvent } from '@ionic/react';

function Example() {
  function handleReorderEnd(event: ReorderEndCustomEvent) {
    // `from` 和 `to` 属性分别包含拖拽开始和结束时项目的索引
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 完成重新排序，并根据手势结束的位置在 DOM 中定位项目
    // 此方法也可以由重新排序组直接调用
    event.detail.complete();
  }

  return (
    <IonList>
      {/* 重新排序手势默认禁用，启用后即可拖拽项目 */}
      <IonReorderGroup disabled={false} onIonReorderEnd={handleReorderEnd}>
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