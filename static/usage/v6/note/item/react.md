```tsx
import React from 'react';
import { IonItem, IonLabel, IonNote } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>标签</IonLabel>
        <IonNote slot="end">备注（结束）</IonNote>
      </IonItem>

      <IonItem>
        <IonNote slot="start">备注（开始）</IonNote>
        <IonLabel>标签</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```