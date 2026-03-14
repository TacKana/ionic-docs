```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>列对齐方式：起始对齐</b>
      <IonGrid>
        <IonRow class="ion-justify-content-start">
          <IonCol size="3">1</IonCol>
          <IonCol size="3">2</IonCol>
        </IonRow>
      </IonGrid>

      <b>列对齐方式：居中对齐</b>
      <IonGrid>
        <IonRow class="ion-justify-content-center">
          <IonCol size="3">1</IonCol>
          <IonCol size="3">2</IonCol>
        </IonRow>
      </IonGrid>

      <b>列对齐方式：末尾对齐</b>
      <IonGrid>
        <IonRow class="ion-justify-content-end">
          <IonCol size="3">1</IonCol>
          <IonCol size="3">2</IonCol>
        </IonRow>
      </IonGrid>

      <b>列对齐方式：周围等距</b>
      <IonGrid>
        <IonRow class="ion-justify-content-around">
          <IonCol size="3">1</IonCol>
          <IonCol size="3">2</IonCol>
        </IonRow>
      </IonGrid>

      <b>列对齐方式：两端对齐</b>
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