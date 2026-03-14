```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>
        总列数设置为 <code>6</code>，每列的 <code>size</code> 设置为 <code>1</code>
      </b>
      <IonGrid>
        <IonRow>
          <IonCol size="1">1</IonCol>
          <IonCol size="1">2</IonCol>
          <IonCol size="1">3</IonCol>
          <IonCol size="1">4</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```