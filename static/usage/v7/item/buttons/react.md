```tsx
import React from 'react';
import { IonButton, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { home, navigate, star } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonItem>
        <IonButton slot="start">Start</IonButton>
        <IonLabel>默认按钮</IonLabel>
        <IonButton slot="end">End</IonButton>
      </IonItem>

      <IonItem>
        <IonButton slot="start">
          Start
          <IonIcon icon={home} slot="end"></IonIcon>
        </IonButton>
        <IonLabel>带图标按钮</IonLabel>
        <IonButton slot="end">
          <IonIcon icon={star} slot="end"></IonIcon>
          End
        </IonButton>
      </IonItem>

      <IonItem>
        <IonButton slot="start">
          <IonIcon slot="icon-only" icon={navigate}></IonIcon>
        </IonButton>
        <IonLabel>纯图标按钮</IonLabel>
        <IonButton slot="end">
          <IonIcon slot="icon-only" icon={star}></IonIcon>
        </IonButton>
      </IonItem>

      <IonItem>
        <IonLabel>按钮尺寸</IonLabel>
        <IonButton slot="end" size="small">
          Small
        </IonButton>
        <IonButton slot="end" size="default">
          Default
        </IonButton>
        <IonButton slot="end" size="large">
          Large
        </IonButton>
      </IonItem>
    </>
  );
}
export default Example;
```