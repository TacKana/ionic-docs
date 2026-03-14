```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>
        列 1 的 <code>push</code> 设置为 <code>"4"</code>，列 2 的 <code>pull</code> 设置为{' '}
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
        列 2 的 <code>push</code> 设置为 <code>"4"</code>，列 3 和列 4 的 <code>pull</code> 设置为{' '}
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
        列 1 的 <code>push</code> 设置为 <code>"3"</code>，列 2 的 <code>pull</code> 设置为{' '}
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