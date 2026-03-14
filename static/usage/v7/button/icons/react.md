```tsx
import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonButton>
        <IonIcon slot="start" icon={star}></IonIcon>
        左侧图标
      </IonButton>

      <IonButton>
        右侧图标
        <IonIcon slot="end" icon={star}></IonIcon>
      </IonButton>

      <IonButton>
        <IonIcon slot="icon-only" icon={star}></IonIcon>
      </IonButton>
    </>
  );
}
export default Example;
```