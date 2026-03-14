```tsx
import React from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';

function Example() {
  return (
    <>
      <IonList lines="full">
        <IonItem>
          <IonLabel>全部分隔线</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>全部分隔线</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>全部分隔线</IonLabel>
        </IonItem>
      </IonList>

      <IonList lines="inset">
        <IonItem>
          <IonLabel>内嵌分隔线</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>内嵌分隔线</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>内嵌分隔线</IonLabel>
        </IonItem>
      </IonList>

      <IonList lines="none">
        <IonItem>
          <IonLabel>无分隔线</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>无分隔线</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>无分隔线</IonLabel>
        </IonItem>
      </IonList>
    </>
  );
}
export default Example;
```