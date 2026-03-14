```tsx
import React from 'react';
import { IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  return (
    <>
      <IonRadioGroup value="start">
        <IonRadio value="start" labelPlacement="start">
          标签位于起始位置
        </IonRadio>
      </IonRadioGroup>

      <br />

      <IonRadioGroup value="end">
        <IonRadio value="end" labelPlacement="end">
          标签位于末尾位置
        </IonRadio>
      </IonRadioGroup>

      <br />

      <IonRadioGroup value="fixed">
        <IonRadio value="fixed" labelPlacement="fixed">
          固定宽度标签
        </IonRadio>
      </IonRadioGroup>

      <br />

      <IonRadioGroup value="stacked">
        <IonRadio value="stacked" labelPlacement="stacked">
          堆叠标签
        </IonRadio>
      </IonRadioGroup>
    </>
  );
}
export default Example;
```