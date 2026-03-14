```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>
        第二列设置了 <code>offset</code> 为 <code>"3"</code>
      </b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol offset="3">2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>

      <b>
        第五列设置了 <code>offset</code> 为 <code>"2"</code>
      </b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol offset="2">5</IonCol>
        </IonRow>
      </IonGrid>

      <b>
        第一列设置了 <code>offset</code> 为 <code>"4"</code>
      </b>
      <IonGrid>
        <IonRow>
          <IonCol size="2" offset="4">
            1
          </IonCol>
          <IonCol size="2">2</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```