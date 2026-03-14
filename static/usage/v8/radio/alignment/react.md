```tsx
import React from 'react';
import { IonItem, IonList, IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonRadioGroup value="start">
        <IonItem>
          <IonRadio value="start" labelPlacement="stacked" alignment="start">
            起始对齐
          </IonRadio>
        </IonItem>
      </IonRadioGroup>

      <IonRadioGroup value="center">
        <IonItem>
          <IonRadio value="center" labelPlacement="stacked" alignment="center">
            居中对齐
          </IonRadio>
        </IonItem>
      </IonRadioGroup>
    </IonList>
  );
}
export default Example;
```