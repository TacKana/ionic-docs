```tsx
import React from 'react';
import { IonButton, useIonToast } from '@ionic/react';
import { globe } from 'ionicons/icons';

function Example() {
  const [presentToast] = useIonToast();

  return (
    <IonButton
      onClick={() => {
        presentToast({
          message: 'Hello World!',
          duration: 1500,
          icon: globe,
        });
      }}
    >
      点击我
    </IonButton>
  );
}
export default Example;
```