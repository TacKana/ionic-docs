```tsx
import React from 'react';
import { IonButton, IonButtons, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <IonToolbar>
      <IonButtons slot="start">
        <IonButton>Button</IonButton>
      </IonButtons>
      <IonTitle>默认按钮</IonTitle>
    </IonToolbar>
  );
}
export default Example;
```