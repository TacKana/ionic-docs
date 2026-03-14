```tsx
import React from 'react';
import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { informationCircle, star } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>默认图标</IonLabel>
        <IonIcon icon={informationCircle} slot="end"></IonIcon>
      </IonItem>

      <IonItem>
        <IonLabel>大号图标</IonLabel>
        <IonIcon icon={informationCircle} size="large" slot="end"></IonIcon>
      </IonItem>

      <IonItem>
        <IonLabel>小号图标</IonLabel>
        <IonIcon icon={informationCircle} size="small" slot="end"></IonIcon>
      </IonItem>

      <IonItem>
        <IonIcon icon={star} slot="start"></IonIcon>
        <IonLabel>默认图标</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```