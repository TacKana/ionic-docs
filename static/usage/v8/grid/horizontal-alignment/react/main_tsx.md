```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>列在起始位置对齐</b>
      <IonGrid>
        <IonRow class="ion-justify-content-start">
          <IonCol size="3">1</IonCol>
          <IonCol size="3">2</IonCol>
        </IonRow>
      </IonGrid>

      <b>列在中心位置对齐</b>
      <IonGrid>
        <IonRow class="ion-justify-content-center">
          <IonCol size="3">1</IonCol>
          <IonCol size="3">2</IonCol>
        </IonRow>
      </IonGrid>

      <b>列在结束位置对齐</b>
      <IonGrid>
        <IonRow class="ion-justify-content-end">
          <IonCol size="3">1</IonCol>
          <IonCol size="3">2</IonCol>
        </IonRow>
      </IonGrid>

      <b>列周围空间均匀分布</b>
      <IonGrid>
        <IonRow class="ion-justify-content-around">
          <IonCol size="3">1</IonCol>
          <IonCol size="3">2</IonCol>
        </IonRow>
      </IonGrid>

      <b>列之间空间均匀分布</b>
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