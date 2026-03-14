```tsx
import React from 'react';

import { IonPicker, IonPickerColumn, IonPickerColumnOption } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonPicker>
        <IonPickerColumn value="red">
          <IonPickerColumnOption value="" disabled={true}>
            --
          </IonPickerColumnOption>
          <IonPickerColumnOption value="red">红色</IonPickerColumnOption>
          <IonPickerColumnOption value="blue">蓝色</IonPickerColumnOption>
          <IonPickerColumnOption value="green">绿色</IonPickerColumnOption>
        </IonPickerColumn>
      </IonPicker>
    </>
  );
}

export default Example;
```