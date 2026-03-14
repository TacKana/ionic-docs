```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>在 xs 断点上保持不变，sm 及以上断点时将第一列向右推、第二列向左拉</b>
      <IonGrid>
        <IonRow>
          <IonCol push-sm="6">1</IonCol>
          <IonCol pull-sm="6">2</IonCol>
        </IonRow>
      </IonGrid>

      <b>在 xs 断点上保持不变，md 及以上断点时将中间列向右推、最后一列向左拉</b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol push-md="3">2</IonCol>
          <IonCol push-md="3">3</IonCol>
          <IonCol pull-md="6">4</IonCol>
        </IonRow>
      </IonGrid>

      <b>在 xs 断点上切换前两列与后三列，lg 及以上断点时反转所有列的顺序</b>
      <IonGrid>
        <IonRow>
          <IonCol push="6" push-lg="10">
            1
          </IonCol>
          <IonCol push="6" push-lg="6">
            2
          </IonCol>
          <IonCol push="6" push-lg="2">
            3
          </IonCol>
          <IonCol pull="6" pull-lg="2">
            4
          </IonCol>
          <IonCol pull="6" pull-lg="6">
            5
          </IonCol>
          <IonCol pull="6" pull-lg="10">
            6
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```