```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonToggle } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonLabel>默认开关</IonLabel>
        <IonToggle slot="end"></IonToggle>
      </IonItem>
      <IonItem>
        <IonLabel>已选中开关</IonLabel>
        <IonToggle slot="end" checked={true}></IonToggle>
      </IonItem>
      <IonItem>
        <IonLabel>禁用开关</IonLabel>
        <IonToggle slot="end" disabled={true}></IonToggle>
      </IonItem>
      <IonItem>
        <IonLabel>禁用已选中开关</IonLabel>
        <IonToggle slot="end" checked={true} disabled={true}></IonToggle>
      </IonItem>
    </IonList>
  );
}
export default Example;
```