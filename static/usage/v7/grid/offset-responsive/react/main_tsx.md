```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>在 xs 断点下无偏移，在 sm 及以上断点偏移第一列</b>
      <IonGrid>
        <IonRow>
          <IonCol offset-sm="2">1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
        </IonRow>
      </IonGrid>

      <b>在 xs 断点下无偏移，在 md 及以上断点偏移最后三列</b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol offset-md="2">2</IonCol>
          <IonCol offset-md="2">3</IonCol>
          <IonCol offset-md="2">4</IonCol>
        </IonRow>
      </IonGrid>

      <b>在 xs 断点下所有列偏移 6，md 断点偏移 4，lg 及以上断点偏移 2</b>
      <IonGrid>
        <IonRow>
          <IonCol offset="6" offset-md="4" offset-lg="2">
            1
          </IonCol>
          <IonCol offset="6" offset-md="4" offset-lg="2">
            2
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```