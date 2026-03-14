```tsx
import React from 'react';
import { IonItem, IonList, IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonRadioGroup value="start">
        <IonItem>
          <IonRadio value="start" justify="start">
            标签在行首对齐
          </IonRadio>
        </IonItem>
      </IonRadioGroup>

      <IonRadioGroup value="end">
        <IonItem>
          <IonRadio value="end" justify="end">
            标签在行尾对齐
          </IonRadio>
        </IonItem>
      </IonRadioGroup>

      <IonRadioGroup value="space-between">
        <IonItem>
          <IonRadio value="space-between" justify="space-between">
            标签与控件两端对齐
          </IonRadio>
        </IonItem>
      </IonRadioGroup>
    </IonList>
  );
}
export default Example;
```