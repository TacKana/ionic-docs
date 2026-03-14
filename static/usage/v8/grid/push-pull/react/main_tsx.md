```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>
        第一列的 <code>push</code> 设为 <code>"4"</code>，第二列的 <code>pull</code> 设为{' '}
        <code>"4"</code>
      </b>
      <IonGrid>
        <IonRow>
          <IonCol push="4">1</IonCol>
          <IonCol pull="4">2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>

      <b>
        第二列的 <code>push</code> 设为 <code>"4"</code>，第三列和第四列的 <code>pull</code> 设为{' '}
        <code>"2"</code>
      </b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol push="4">2</IonCol>
          <IonCol pull="2">3</IonCol>
          <IonCol pull="2">4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
        </IonRow>
      </IonGrid>

      <b>
        第一列的 <code>push</code> 设为 <code>"3"</code>，第二列的 <code>pull</code> 设为{' '}
        <code>"9"</code>
      </b>
      <IonGrid>
        <IonRow>
          <IonCol size="9" push="3">
            1
          </IonCol>
          <IonCol size="3" pull="9">
            2
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```