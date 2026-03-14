```tsx
import React, { useState } from 'react';
import {
  IonButton,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  ReorderEndCustomEvent,
} from '@ionic/react';

function Example() {
  const [isDisabled, setIsDisabled] = useState(true);

  function handleReorderEnd(event: ReorderEndCustomEvent) {
    // `from` 和 `to` 属性分别表示拖拽开始和结束时项目的索引位置
    console.log('从索引', event.detail.from, '拖拽到', event.detail.to);

    // 完成重新排序，根据手势结束的位置将项目放置到 DOM 中
    // 此方法也可以由 reorder 组直接调用
    event.detail.complete();
  }

  function toggleReorder() {
    setIsDisabled((current) => !current);
  }

  return (
    <>
      <IonList>
        <IonReorderGroup disabled={isDisabled} onIonReorderEnd={handleReorderEnd}>
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

      {/* 默认情况下重新排序手势是禁用的，启用后即可拖拽项目 */}
      <IonButton onClick={toggleReorder}>切换重新排序</IonButton>
    </>
  );
}
export default Example;
```