```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>在 xs 断点下堆叠显示，sm 及以上断点等宽排列</b>
      <IonGrid>
        <IonRow>
          <IonCol size="12" size-sm="3">
            1
          </IonCol>
          <IonCol size="12" size-sm="3">
            2
          </IonCol>
          <IonCol size="12" size-sm="3">
            3
          </IonCol>
          <IonCol size="12" size-sm="3">
            4
          </IonCol>
        </IonRow>
      </IonGrid>

      <b>在 md 断点前保持等宽，md 及以上断点最后一列占满宽度</b>
      <IonGrid>
        <IonRow>
          <IonCol size-md="6">1</IonCol>
          <IonCol size-md="6">2</IonCol>
          <IonCol size-md="12">3</IonCol>
        </IonRow>
      </IonGrid>

      <b>md 断点前每行 2 列，md 断点时每行 3 列，lg 及以上断点等宽排列</b>
      <IonGrid>
        <IonRow>
          <IonCol size="6" size-md="4" size-lg="2">
            1
          </IonCol>
          <IonCol size="6" size-md="4" size-lg="2">
            2
          </IonCol>
          <IonCol size="6" size-md="4" size-lg="2">
            3
          </IonCol>
          <IonCol size="6" size-md="4" size-lg="2">
            4
          </IonCol>
          <IonCol size="6" size-md="4" size-lg="2">
            5
          </IonCol>
          <IonCol size="6" size-md="4" size-lg="2">
            6
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```