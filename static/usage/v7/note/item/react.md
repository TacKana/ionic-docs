```tsx
import React from 'react';
import { IonItem, IonLabel, IonNote } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>标签</IonLabel>
        <IonNote slot="end">备注（右侧）</IonNote>
      </IonItem>

      <IonItem>
        <IonNote slot="start">备注（左侧）</IonNote>
        <IonLabel>标签</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```