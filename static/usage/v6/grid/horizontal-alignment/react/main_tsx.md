```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>列对齐于起始位置</b>
      <IonGrid>
        <IonRow class="ion-justify-content-start">
          <IonCol size="3">1</IonCol>
          <IonCol size="3">2</IonCol>
        </IonRow>
      </IonGrid>

      <b>列对齐于中心位置</b>
      <IonGrid>
        <IonRow class="ion-justify-content-center">
          <IonCol size="3">1</IonCol>
          <IonCol size="3">2</IonCol>
        </IonRow>
      </IonGrid>

      <b>列对齐于末端位置</b>
      <IonGrid>
        <IonRow class="ion-justify-content-end">
          <IonCol size="3">1</IonCol>
          <IonCol size="3">2</IonCol>
        </IonRow>
      </IonGrid>

      <b>列均匀分布，两端留空</b>
      <IonGrid>
        <IonRow class="ion-justify-content-around">
          <IonCol size="3">1</IonCol>
          <IonCol size="3">2</IonCol>
        </IonRow>
      </IonGrid>

      <b>列两端对齐，中间等距</b>
      <IonGrid>
        <IonRow class="ion-justify-content-between">
          <IonCol size="3">1</IonCol>
          <IonCol size="3">2</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```