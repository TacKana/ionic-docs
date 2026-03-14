```tsx
import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { heart } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonButton>默认</IonButton>
      <IonButton shape="round">圆形</IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={heart}></IonIcon>
      </IonButton>
      <IonButton shape="round">
        <IonIcon slot="icon-only" icon={heart}></IonIcon>
      </IonButton>
    </>
  );
}
export default Example;
```