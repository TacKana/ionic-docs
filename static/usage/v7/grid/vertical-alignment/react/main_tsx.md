```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>列在顶部对齐</b>
      <IonGrid>
        <IonRow class="ion-align-items-start">
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>
            4 <br />
            # <br />
            # <br />
            # <br />
          </IonCol>
        </IonRow>
      </IonGrid>

      <b>列在中间对齐</b>
      <IonGrid>
        <IonRow class="ion-align-items-center">
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>
            4 <br />
            # <br />
            # <br />
            # <br />
          </IonCol>
        </IonRow>
      </IonGrid>

      <b>列在底部对齐</b>
      <IonGrid>
        <IonRow class="ion-align-items-end">
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>
            4 <br />
            # <br />
            # <br />
            # <br />
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```