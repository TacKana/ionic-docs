```tsx
import React from 'react';
import { IonButton, IonButtons, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <IonToolbar>
      <IonButtons slot="start">
        <IonButton>按钮</IonButton>
      </IonButtons>
      <IonTitle>默认按钮</IonTitle>
    </IonToolbar>
  );
}
export default Example;
```