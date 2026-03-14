```tsx
import React from 'react';
import { IonCheckbox, IonItem, IonList } from '@ionic/react';

function Example() {
  return (
    <>
      <IonList>
        <IonItem>
          <IonCheckbox labelPlacement="stacked" alignment="start">
            对齐到起始位置
          </IonCheckbox>
        </IonItem>

        <IonItem>
          <IonCheckbox labelPlacement="stacked" alignment="center">
            对齐到中心位置
          </IonCheckbox>
        </IonItem>
      </IonList>
    </>
  );
}
export default Example;
```