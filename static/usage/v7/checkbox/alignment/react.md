```tsx
import React from 'react';
import { IonCheckbox, IonItem, IonList } from '@ionic/react';

function Example() {
  return (
    <>
      <IonList>
        <IonItem>
          <IonCheckbox labelPlacement="stacked" alignment="start">
            起始对齐
          </IonCheckbox>
        </IonItem>

        <IonItem>
          <IonCheckbox labelPlacement="stacked" alignment="center">
            居中对齐
          </IonCheckbox>
        </IonItem>
      </IonList>
    </>
  );
}
export default Example;
```