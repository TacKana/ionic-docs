```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>在 xs 断点下垂直堆叠，在 sm 及以上断点下宽度均等</b>
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

      <b>在 md 断点前宽度均等，从 md 断点开始最后一列占据整行宽度</b>
      <IonGrid>
        <IonRow>
          <IonCol size-md="6">1</IonCol>
          <IonCol size-md="6">2</IonCol>
          <IonCol size-md="12">3</IonCol>
        </IonRow>
      </IonGrid>

      <b>在 md 断点前每行 2 列，在 md 断点每行 3 列，在 lg 及以上断点宽度均等</b>
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