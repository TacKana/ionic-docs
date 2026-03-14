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
    // `from` 和 `to` 属性分别记录了拖拽开始和结束时项目的索引位置
    console.log('从索引', event.detail.from, '拖拽至', event.detail.to);

    // 完成重排序，并根据手势结束位置将项目定位到 DOM 中
    // 此方法也可以由重排序组直接调用
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

      {/* 默认情况下重排序手势是禁用的，点击按钮可启用拖拽功能 */}
      <IonButton onClick={toggleReorder}>切换重排序</IonButton>
    </>
  );
}
export default Example;
```