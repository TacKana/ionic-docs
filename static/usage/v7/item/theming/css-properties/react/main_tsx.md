```tsx
import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonItem button detail lines="full">
        <IonLabel>自定义项</IonLabel>
      </IonItem>

      <IonItem button detail lines="full">
        <IonLabel>自定义项</IonLabel>
      </IonItem>

      <IonItem button detail lines="full">
        <IonLabel>自定义项</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```