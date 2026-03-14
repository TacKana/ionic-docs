```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>在 xs 断点下无变化，sm 及以上断点时第一列右推、第二列左拉</b>
      <IonGrid>
        <IonRow>
          <IonCol push-sm="6">1</IonCol>
          <IonCol pull-sm="6">2</IonCol>
        </IonRow>
      </IonGrid>

      <b>在 xs 断点下无变化，md 及以上断点时中间列右推、最后一列左拉</b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol push-md="3">2</IonCol>
          <IonCol push-md="3">3</IonCol>
          <IonCol pull-md="6">4</IonCol>
        </IonRow>
      </IonGrid>

      <b>在 xs 断点上切换首尾三列，lg 及以上断点时列顺序反转</b>
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