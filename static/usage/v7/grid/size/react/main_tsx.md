```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>
        第二列的 <code>size</code> 属性设置为 <code>"8"</code>
      </b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol size="8">2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>

      <b>
        第三列和第四列的 <code>size</code> 属性设置为 <code>"3"</code>
      </b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol size="3">3</IonCol>
          <IonCol size="3">4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
        </IonRow>
      </IonGrid>

      <b>
        第一列和第二列的 <code>size</code> 属性设置为 <code>"4"</code>
      </b>
      <IonGrid>
        <IonRow>
          <IonCol size="4">1</IonCol>
          <IonCol size="4">2</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```