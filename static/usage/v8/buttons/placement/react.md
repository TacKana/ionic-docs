```tsx
import React from 'react';
import { IonButton, IonButtons, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton>Start</IonButton>
        </IonButtons>
        <IonTitle>按钮</IonTitle>
        <IonButtons slot="end">
          <IonButton>End</IonButton>
        </IonButtons>
      </IonToolbar>

      <IonToolbar>
        <IonButtons slot="secondary">
          <IonButton>次要</IonButton>
        </IonButtons>
        <IonTitle>按钮</IonTitle>
        <IonButtons slot="primary">
          <IonButton>主要</IonButton>
        </IonButtons>
      </IonToolbar>
    </>
  );
}
export default Example;
```