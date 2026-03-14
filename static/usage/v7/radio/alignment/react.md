```tsx
import React from 'react';
import { IonItem, IonList, IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonRadioGroup value="start">
        <IonItem>
          <IonRadio value="start" labelPlacement="stacked" alignment="start">
            对齐到起始位置
          </IonRadio>
        </IonItem>
      </IonRadioGroup>

      <IonRadioGroup value="center">
        <IonItem>
          <IonRadio value="center" labelPlacement="stacked" alignment="center">
            对齐到中心位置
          </IonRadio>
        </IonItem>
      </IonRadioGroup>
    </IonList>
  );
}
export default Example;
```