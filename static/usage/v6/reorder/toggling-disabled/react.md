```tsx
import React, { useState } from 'react';
import {
  IonButton,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  ItemReorderEventDetail,
} from '@ionic/react';

function Example() {
  const [isDisabled, setIsDisabled] = useState(true);

  function handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // `from` 和 `to` 属性分别包含拖拽开始和结束时项目的索引
    console.log('从索引', event.detail.from, '拖拽至', event.detail.to);

    // 完成重新排序，并根据手势结束位置在 DOM 中定位项目。
    // 此方法也可由重新排序组件直接调用
    event.detail.complete();
  }

  function toggleReorder() {
    setIsDisabled((current) => !current);
  }

  return (
    <>
      <IonList>
        <IonReorderGroup disabled={isDisabled} onIonItemReorder={handleReorder}>
          <IonItem>
            <IonLabel>Item 1</IonLabel>
            <IonReorder slot="end"></IonReorder>
          </IonItem>

          <IonItem>
            <IonLabel>Item 2</IonLabel>
            <IonReorder slot="end"></IonReorder>
          </IonItem>

          <IonItem>
            <IonLabel>Item 3</IonLabel>
            <IonReorder slot="end"></IonReorder>
          </IonItem>

          <IonItem>
            <IonLabel>Item 4</IonLabel>
            <IonReorder slot="end"></IonReorder>
          </IonItem>

          <IonItem>
            <IonLabel>Item 5</IonLabel>
            <IonReorder slot="end"></IonReorder>
          </IonItem>
        </IonReorderGroup>
      </IonList>

      {/* 重新排序手势默认是禁用的，启用后可拖放项目 */}
      <IonButton onClick={toggleReorder}>切换重新排序</IonButton>
    </>
  );
}
export default Example;
```