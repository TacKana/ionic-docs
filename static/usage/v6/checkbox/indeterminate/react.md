```tsx
import React from 'react';
import { IonCheckbox, IonItem, IonLabel } from '@ionic/react';

function Example() {
  return (
    <IonItem>
      <IonCheckbox slot="start" indeterminate={true}></IonCheckbox>
      <IonLabel>不确定状态复选框</IonLabel>
    </IonItem>
  );
}
export default Example;
```